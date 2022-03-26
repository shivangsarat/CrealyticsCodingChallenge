import React from "react";

import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

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