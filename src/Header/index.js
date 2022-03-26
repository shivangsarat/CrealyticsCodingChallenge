import React from "react";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";

export default function Header(props) {
    return (
        <AppBar position="static">
          <Toolbar>
            {/* The Typography component applies 
             default font weights and sizes */}
    
            <Typography variant="h6" 
              component="div" sx={{ flexGrow: 1 }}>
              Crealytics Coding Challenge
            </Typography>
          </Toolbar>
        </AppBar>
    );
}