import { useState } from "react";
import "./AuthPage.scss";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import axios from "axios";

export default function AuthPage() {
    const [form, setForm] = useState({
        email: "",
        password: "",
    });

    const changeHandler = (event) => {
        setForm({ ...form, [event.target.name]: event.target.value });
    };

    const registrationHandler = async () => {
        try {
            await axios
                .post(
                    "/api/auth/registration",
                    { ...form },
                    { headers: { "Content-Type": "application/json" } }
                )
                .then((res) => console.log(res));
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <BrowserRouter>
            <Switch>
                <>
                    <div className="container">
                        <div className="auth-page">
                            <Route path="/login">
                                <h4>Авторизоваться</h4>
                                <form
                                    className="form form-login"
                                    onSubmit={(e) => e.preventDefault()}
                                >
                                    <div className="row">
                                        <div className="input-field col s12">
                                            <input
                                                type="email"
                                                name="email"
                                                className="validate"
                                                onChange={changeHandler}
                                            />
                                            <label htmlFor="email">Email</label>
                                        </div>

                                        <div className="input-field col s12">
                                            <input
                                                type="password"
                                                name="password"
                                                className="validate"
                                                onChange={changeHandler}
                                            />
                                            <label htmlFor="password">
                                                Password
                                            </label>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <button className="wawes-effect wawes-light btn teal darken-2">
                                            Войти
                                        </button>
                                        <Link
                                            to="/registration"
                                            className="btn-outline btn-acc"
                                        >
                                            Нет аккаунта?
                                        </Link>
                                    </div>
                                </form>
                            </Route>

                            <Route path="/registration">
                                <h4>Регистрация</h4>
                                <form
                                    className="form form-login"
                                    onSubmit={(e) => e.preventDefault()}
                                >
                                    <div className="row">
                                        <div className="input-field col s12">
                                            <input
                                                type="email"
                                                name="email"
                                                className="validate"
                                                onChange={changeHandler}
                                            />
                                            <label htmlFor="email">Email</label>
                                        </div>

                                        <div className="input-field col s12">
                                            <input
                                                type="password"
                                                name="password"
                                                className="validate"
                                                onChange={changeHandler}
                                            />
                                            <label htmlFor="password">
                                                Password
                                            </label>
                                        </div>
                                    </div>
                                    <div className="row ">
                                        <button
                                            className="wawes-effect wawes-light btn teal darken-2"
                                            onClick={registrationHandler}
                                        >
                                            Регистрация
                                        </button>
                                        <Link
                                            to="/login"
                                            className="btn-outline btn-acc"
                                        >
                                            Есть аккаунт?
                                        </Link>
                                    </div>
                                </form>
                            </Route>
                        </div>
                    </div>
                </>
            </Switch>
        </BrowserRouter>
    );
}
