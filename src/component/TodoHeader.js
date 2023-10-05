import React from "react";
import { Box, Typography } from "@mui/material";

export default function TodoHeader({ theme, setTheme }) {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        mb: "24px",
      }}
    >
      <Typography
        style={{
          color: "white",
          fontSize: "35px",
          letterSpacing: "8px ",
          fontWeight: "600",
        }}
      >
        TODO
      </Typography>

      <Box
        sx={{ "&:hover": { cursor: "pointer" } }}
        onClick={() =>
          setTheme(theme => theme === "dark" ? "light" : "dark")
        }
      >
        {theme === "dark" ? (
          <img src="/images/icon-sun.svg" alt="sun-icon" />
        ) : (
          <img src="/images/icon-moon.svg" alt="moon-icon" />
        )}
      </Box>
    </Box>
  );
}
