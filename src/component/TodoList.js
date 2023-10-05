import { Box, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";

export default function TodoList({
  todos,
  handleCompletedTodo,
  handleDeleteTodo,
  handleDeleteCompletedTodos,
  theme,
  COLORS,
}) {
  const [filteredTodos, setFilteredTodos] = useState([]);
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    setFilteredTodos(todos);
  }, [todos]);

  const handleFilter = (type) => {
    setFilter(type);
    switch (type) {
      case "active":
        setFilteredTodos(todos.filter((todo) => todo.isActive));
        break;
      case "completed":
        setFilteredTodos(todos.filter((todo) => todo.isCompleted));
        break;
      default:
        setFilteredTodos(todos);
    }
  };

  return (
    <Box
      style={{
        background: theme === "dark" ? COLORS.VeryDarkDesaturatedBlue : "white",
        borderRadius: "5px",
        mt: "24px",
        boxShadow: theme === "light" && "rgba(0, 0, 0, 0.2) 0px 0px 20px",
      }}
    >
      {filteredTodos.map((todo) => {
        return (
          <Box
            key={todo.id}
            sx={{
              fontFamily: "Josefin Sans",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: "12px",
              p: "16px",
              borderBottom: "1px solid",
              borderColor:
                theme === "dark"
                  ? COLORS.VeryDarkGrayishBlue
                  : COLORS.LightGrayishBlue,
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: "12px",
              }}
            >
              <Box
                sx={{
                  width: "20px",
                  height: "20px",
                  borderRadius: "50%",
                  border: "1px solid",
                  borderColor:
                    theme === "dark"
                      ? COLORS.DarkGrayishBlue
                      : COLORS.LightGrayishBlue,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  backgroundImage: todo.isCompleted && COLORS.CheckBackground,
                  "&:hover": {
                    borderColor: COLORS.BrightBlue
                    
                  },
                }}
                onClick={() => handleCompletedTodo(todo.id)}
              >
                {todo.isCompleted && (
                  <img src="./images/icon-check.svg" alt="checked-icon" />
                )}
              </Box>
              <Typography
                sx={{
                  fontSize: { lg: '18px'},
                  fontWeight: "400",
                  color: todo.isCompleted
                    ? theme === "dark"
                      ? COLORS.DarkGrayishBlue
                      : COLORS.LightGrayishBlue
                    : theme === "dark"
                    ? COLORS.LightGrayishBlue
                    : COLORS.VeryDarkGrayishBlue,
                  textDecoration: todo.isCompleted && "line-through",
                }}
              >
                {todo.todo}
              </Typography>
            </Box>

            <Box
              sx={{
                opacity: { xs: 1, sm: 0 },
                "&:hover": {
                  opacity: 1,
                },
              }}
              onClick={() => handleDeleteTodo(todo.id)}
            >
              <img src="./images/icon-cross.svg" alt="delete-icon " />
            </Box>
          </Box>
        );
      })}

      {todos.length !== 0 && (
        <Box
          sx={{
            p: "16px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            color: COLORS.DarkGrayishBlue,
            fontFamily: "Josefin Sans",
          }}
        >
          <Typography
            sx={{
              fontSize: "14px",
              "&:hover": {
                color:
                  theme === "dark"
                    ? COLORS.LightGrayishBlue
                    : COLORS.VeryDarkDesaturatedBlue,
              },
            }}
          >
            {todos.length} items left
          </Typography>

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: { xs: "15px", md: "8px" },
              position: { xs: "absolute", md: "relative" },
              bottom: { xs: "-80px", md: "0px" },
              left: "0px",
              background: {
                xs: theme === "dark" ? COLORS.VeryDarkDesaturatedBlue : "white",
                lg: "unset",
              },
              width: { xs: "100%", md: "unset" },
              justifyContent: { xs: "space-evenly", md: "unset" },
              py: { xs: "16px", md: "unset" },
              borderRadius: "5px",
              boxShadow:  { xs: theme === "light" && "rgba(0, 0, 0, 0.2) 0px 0px 20px", md : 'unset'}
            }}
          >
            <Typography
              sx={{
                fontSize: "14px",
                color: filter === "all" && COLORS.BrightBlue,
                "&:hover": {
                  color:
                    theme === "dark"
                      ? COLORS.LightGrayishBlue
                      : COLORS.VeryDarkDesaturatedBlue,
                  cursor: "pointer",
                },
              }}
              onClick={() => handleFilter("all")}
            >
              All
            </Typography>
            <Typography
              sx={{
                fontSize: "14px",
                color: filter === "active" && COLORS.BrightBlue,
                "&:hover": {
                  color:
                    theme === "dark"
                      ? COLORS.LightGrayishBlue
                      : COLORS.VeryDarkDesaturatedBlue,
                  cursor: "pointer",
                },
              }}
              onClick={() => handleFilter("active")}
            >
              Active
            </Typography>
            <Typography
              sx={{
                fontSize: "14px",
                color: filter === "completed" && COLORS.BrightBlue,
                "&:hover": {
                  color:
                    theme === "dark"
                      ? COLORS.LightGrayishBlue
                      : COLORS.VeryDarkDesaturatedBlue,
                  cursor: "pointer",
                },
              }}
              onClick={() => handleFilter("completed")}
            >
              Completed
            </Typography>
          </Box>

          <Typography
            sx={{
              fontSize: "14px",
              "&:hover": {
                color:
                  theme === "dark"
                    ? COLORS.LightGrayishBlue
                    : COLORS.VeryDarkDesaturatedBlue,
                cursor: "pointer",
              },
            }}
            onClick={() => handleDeleteCompletedTodos()}
          >
            Clear Completed
          </Typography>
        </Box>
      )}
    </Box>
  );
}
