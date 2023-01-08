const { Router } = require("express");
const router = Router();
const User = require("../models/User");
const { check, validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

router.post(
    "/registration",
    [
        check("email", "Некорректный email").isEmail(),
        check("password", "Некорректный пароль").isLength({ min: 5 }),
    ],
    async (req, res) => {
        try {
            const validRequest = validationResult(req);
            if (!validRequest.isEmpty()) {
                return res.status(400).json({
                    errors: validRequest.array(),
                    message:
                        "Некорректные данные при регистрации, минимум 5 символов в пароле",
                });
            }

            const { email, password } = req.body;

            const isAuth = await User.findOne({ email });
            if (isAuth) {
                return res.status(300).json({
                    message: "Пользователь с таким email уже существует",
                });
            }

            const hashPassword = await bcrypt.hash(password, 14);
            const user = new User({
                email,
                password: hashPassword,
            });

            await user.save();
            res.status(201).json({ message: "Пользователь успешно создан" });
        } catch (error) {
            console.log(error);
        }
    }
);

router.post(
    "/login",
    [
        check("email", "Некорректный email").isEmail(),
        check("password", "Введите пароль").exists(),
    ],
    async (req, res) => {
        try {
            const validRequest = validationResult(req);
            if (!validRequest.isEmpty()) {
                return res.status(400).json({
                    errors: validRequest.array(),
                    message:
                        "Некорректные данные при входе в систему",
                });
            }

            const { email, password } = req.body;

            const user = await User.findOne({ email });

			if(!user) {
				return res.status(400).json({message: "Пользователя с таким email не существует!"})
			}

			const matchPassword = bcrypt.compare(password, user.password)

			if (!matchPassword) {
				return res.status(400).json({message: "Введенный пароль не совпадает"})

			}

			const jwtSecretKey = "cyjdsvujljv2023";

			const token = jwt.sign({userId: user.id}, jwtSecretKey, {expiresIn: "1h"})

			res.json({token, userId: user.id})

        } catch (error) {
            console.log(error);
        }
    }
);

module.exports = router;
