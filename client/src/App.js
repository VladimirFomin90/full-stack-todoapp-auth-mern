import "./App.scss";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter } from "react-router-dom";
import { useMyRoutes } from "./routes";
import { Context } from "./context/Context";
import { useAuth } from "./hooks/auth.hook";

function App() {
    const { login, logOut, token, userId, isSignIn } = useAuth();
    const isLogin = !!token;
    const routes = useMyRoutes(isLogin);

    return (
        <Context.Provider
            value={{ login, logOut, token, userId, isSignIn, isLogin }}
        >
            <div className="App">
                <BrowserRouter>
                    <Navbar />
                    {routes}
                </BrowserRouter>
            </div>
        </Context.Provider>
    );
}

export default App;
