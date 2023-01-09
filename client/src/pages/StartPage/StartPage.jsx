import axios from "axios";
import { useCallback, useContext, useState, useEffect } from "react";
import { Context } from "../../context/Context";
import "./StartPage.scss";

export default function StartPage() {
    const [text, setText] = useState([]);
    const { userId /*token*/ } = useContext(Context);
    const [todos, setTodos] = useState([]);

    const createTodo = useCallback(async () => {
        if (!text) return null;
        try {
            await axios
                .post(
                    "/api/todo/add",
                    { text, userId },
                    {
                        headers: {
                            "Content-Type": "application/json",
                            // Authorization: "Bearer " + token,
                        },
                    }
                )
                .then((response) => {
                    setTodos([...todos], response.data);
                    setText(" ");
                    getTodo();
                });
        } catch (error) {
            console.log(error);
        }
    }, [/*token*/ text, userId, todos]);

    const getTodo = useCallback(async () => {
        try {
            await axios
                .get("/api/todo", {
                    headers: { "Content-Type": "application/json" },
                    params: { userId },
                })
                .then((response) => setTodos(response.data));
        } catch (error) {
            console.log(error);
        }
    }, [userId]);

    const removeTodo = useCallback(
        async (id) => {
            try {
                await axios
                    .delete(
                        `/api/todo/delete/${id}`,
                        { id },
                        { headers: { "Content-Type": "application/json" } }
                    )
                    .then(() => getTodo());
            } catch (error) {
                console.log(error);
            }
        },
        [getTodo]
    );

    const completedTodo = useCallback(
        async (id) => {
            try {
                await axios
                    .put(
                        `/api/todo/completed/${id}`,
                        { id },
                        {
                            headers: { "Content-Type": "application/json" },
                        }
                    )
                    .then((response) => {
                        setTodos([...todos], response.data);
                        getTodo();
                    });
            } catch (error) {
                console.log(error);
            }
        },
        [todos, getTodo]
    );

    const importantTodo = useCallback(
        async (id) => {
            try {
                await axios
                    .put(
                        `/api/todo/important/${id}`,
                        { id },
                        {
                            headers: { "Content-Type": "application/json" },
                        }
                    )
                    .then((response) => {
                        setTodos([...todos], response.data);
                        getTodo();
                    });
            } catch (error) {
                console.log(error);
            }
        },
        [todos, getTodo]
    );

    useEffect(() => {
        getTodo();
    }, [getTodo]);

    return (
        <div className="container">
            <div className="main-page">
                <h4>Добавить задачу:</h4>
                <form
                    className="form form-login"
                    onSubmit={(e) => e.preventDefault()}
                >
                    <div className="row">
                        <div className="input-field col s12">
                            <input
                                type="text"
                                name="input"
                                className="validate"
                                onChange={(e) => setText(e.target.value)}
                                value={text}
                            />
                            <label htmlFor="input">Задача:</label>
                        </div>
                    </div>

                    <div className="row">
                        <button
                            className="waves-effect waves-light btn teal darken-2"
                            onClick={createTodo}
                        >
                            Добавить
                        </button>
                    </div>
                </form>

                <h4>Активные задачи</h4>
                <div className="todos">
                    {todos.map((todo, index) => {
                        let classesDefault = ["row flex todos-item"];
                        if (todo.completed) {
                            classesDefault.push("completed");
                        }

                        if (todo.important) {
                            classesDefault.push("important");
                        }

                        return (
                            <div
                                className={classesDefault.join(" ")}
                                key={index}
                            >
                                <div className="col todos-num">{index + 1}</div>
                                <div className="col todos-text">
                                    {todo.text}
                                </div>
                                <div className="col todos-buttons">
                                    <i
                                        className="material-icons teal-text"
                                        onClick={() => completedTodo(todo._id)}
                                    >
                                        check
                                    </i>
                                    <i
                                        className="material-icons yellow-text"
                                        onClick={() => {
                                            importantTodo(todo._id);
                                        }}
                                    >
                                        warning
                                    </i>
                                    <i
                                        className="material-icons red-text"
                                        onClick={() => removeTodo(todo._id)}
                                    >
                                        delete
                                    </i>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
