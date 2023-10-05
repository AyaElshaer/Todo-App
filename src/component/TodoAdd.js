import { Box, Input } from "@mui/material";
import { useState } from "react";

export default function AddTodo({ handleAddTodo, COLORS, theme }) {
  const [todo, setTodo] = useState("");

  const onInputChange = (event) => {
    setTodo(event.target.value);
  };

  const handleClick = (e) => {
    e.preventDefault();
    handleAddTodo(todo);
    setTodo("");
  };

  return (
    <Box
      sx={{
        mb: "16px",
        pl: "16px",
        py: "12px",
        display: "flex",
        alignItems: "center",
        gap: "12px",
        background:
          theme === "dark" ? COLORS.VeryDarkDesaturatedBlue : COLORS.white,
        borderRadius: "5px",
      }}
    >
      <Box
        sx={{
          width: "20px",
          height: "20px",
          borderRadius: "50%",
          border: "1px solid",
          borderColor:
            theme === "dark" ? COLORS.DarkGrayishBlue : COLORS.LightGrayishBlue,
        }}
      />
      <Box width={"90%"}>
        <form onSubmit={(e) => handleClick(e)}>
          <Input
            placeholder="Create a new todo..."
            fullWidth
            disableUnderline
            InputProps={{
              disableUnderline: true,
            }}
            variant="standard"
            value={todo}
            onChange={onInputChange}
            sx={{
              "& .MuiInputBase-input": {
                fontSize: { lg: "18px" },
                color:
                  theme === "dark"
                    ? COLORS.LightGrayishBlue
                    : COLORS.VeryDarkGrayishBlue,
                "&::placeholder": {
                  opacity: "1",
                  color:
                    theme === "dark"
                      ? COLORS.DarkGrayishBlue
                      : COLORS.VeryDarkGrayishBlue,
                },
              },
            }}
          />
        </form>
      </Box>
    </Box>
  );
}
