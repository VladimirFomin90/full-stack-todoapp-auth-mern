import React from "react";
import "./AuthPage.scss";

export default function AuthPage() {
    return (
        <>
            <div className="container">
                <div className="auth-page">
                    <h4>Авторизоваться</h4>
                    <form className="form form-login">
                        <div className="row">
                            <div className="input-field col s12">
                                <input
                                    type="email"
                                    name="email"
                                    className="validate"
                                />
                                <label htmlFor="email">Email</label>
                            </div>

                            <div className="input-field col s12">
                                <input
                                    type="password"
                                    name="password"
                                    className="validate"
                                />
                                <label htmlFor="password">Password</label>
                            </div>
                        </div>
                        <div className="row">
                            <button className="wawes-effect wawes-light btn teal darken-2">
                                Войти
                            </button>
                            <a href="/" className="btn-outline btn-acc">
                                Нет аккаунта?
                            </a>
                        </div>
                    </form>

					<h4>Регистрация</h4>
                    <form className="form form-login">
                        <div className="row">
                            <div className="input-field col s12">
                                <input
                                    type="email"
                                    name="email"
                                    className="validate"
                                />
                                <label htmlFor="email">Email</label>
                            </div>

                            <div className="input-field col s12">
                                <input
                                    type="password"
                                    name="password"
                                    className="validate"
                                />
                                <label htmlFor="password">Password</label>
                            </div>
                        </div>
                        <div className="row ">
                            <button className="wawes-effect wawes-light btn teal darken-2">
                                Регистрация
                            </button>
                            <a href="/" className="btn-outline btn-acc">
                                Есть аккаунт?
                            </a>
                        </div>
                    </form>

                </div>
            </div>
        </>
    );
}
