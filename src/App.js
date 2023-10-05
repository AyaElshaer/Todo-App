import { Box } from "@mui/material";
import TodoHeader from "./component/TodoHeader";
import { COLORS, darkColors, lightColors } from "./colors";
import AddTodo from "./component/TodoAdd";
import TodoList from "./component/TodoList";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

function App() {
  const [todos, setTodos] = useState([]);

  const [theme, setTheme] = useState("dark");

  const themeColors = {
    ...COLORS,
    ...(theme === "dark" ? darkColors : lightColors),
  };

  const handleAddTodo = (value) => {
    if (value) {
      setTodos([
        ...todos,
        {
          id: uuidv4(),
          todo: value,
          isActive: true,
          isCompleted: false,
        },
      ]);
    }
  };

  const handleCompletedTodo = (id) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        const completed = !todo.isCompleted;
        return {
          ...todo,
          isCompleted: completed,
          isActive: !completed,
        };
      } else {
        return todo;
      }
    });
    setTodos(updatedTodos);
  };

  const handleDeleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const handleDeleteCompletedTodos = () => {
    setTodos(todos.filter((todo) => !todo.isCompleted));
  };

  return (
    <>
      <Box
        sx={{
          backgroundColor:
            theme === "dark" ? COLORS.VeryDarkBlue : COLORS.VeryLightGray,
          minHeight: "100vh",
          position: "relative",
        }}
      >
        <Box
          sx={{
            width: "100%",
            height: "40vh",
            backgroundImage: {
              xs:
                theme === "dark"
                  ? "url(./images/bg-mobile-dark.jpg)"
                  : "url(./images/bg-mobile-light.jpg)",
              sm:
                theme === "dark"
                  ? "url(./images/bg-desktop-dark.jpg)"
                  : "url(./images/bg-desktop-light.jpg)",
            },
            backgroundRepeat: "no-repeat",
            backgroundSize: "100%",
          }}
        />
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            width: { xs: "90%", md: "60%", lg: "40%" },
            mx: "auto",
            top: { xs: "-35vh", md: "-30vh" },
            position: "relative",
          }}
        >
          <TodoHeader theme={theme} setTheme={setTheme} />
          <AddTodo
            handleAddTodo={handleAddTodo}
            COLORS={themeColors}
            theme={theme}
          />
          <TodoList
            todos={todos}
            handleCompletedTodo={handleCompletedTodo}
            handleDeleteTodo={handleDeleteTodo}
            handleDeleteCompletedTodos={handleDeleteCompletedTodos}
            COLORS={themeColors}
            theme={theme}
          />
        </Box>
      </Box>
    </>
  );
}

export default App;
