import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import StartPage from "./pages/StartPage/StartPage";
import AuthPage from "./pages/Authorization/AuthPage";

export const useMyRoutes = (isLogin) => {
    if (isLogin) {
        return (
            <Switch>
                <Route path="/" exact component={StartPage} />
				<Redirect to="/" />
            </Switch>
        );
    }

	return (
		<Switch>
			<Route path="/login" exact component={AuthPage} />
			<Redirect to="/" />
		</Switch>
	);
};
