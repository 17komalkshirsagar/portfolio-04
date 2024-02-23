import { AppBar, IconButton, Toolbar } from '@mui/material';
import React, { useState } from 'react'
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import ComputerIcon from '@mui/icons-material/Computer';
import LocalPostOfficeIcon from '@mui/icons-material/LocalPostOffice';
import HandshakeIcon from '@mui/icons-material/Handshake';
const Nav = () => {
    const [active, setActive] = useState("#");

    const handleItemClick = (item) => {
        setActive(item);
    };

    const isActive = (item) => {
        return active === item ? "active" : "";
    };
    return <>
        <AppBar
            position="static"
            className="nav"
            style={{
                background: "rgba(0, 0, 0, 0.3)",
                width: "max-content",
                padding: "0.5rem 1.6rem",
                zIndex: 2,
                position: "fixed",
                bottom: "2rem",
                left: "50%",
                transform: "translateX(-50%)",
                display: "flex",
                gap: "2.8rem",
                borderRadius: "3rem",

            }}
        >
            <Toolbar>
                <IconButton
                    onClick={() => handleItemClick("#")}
                    className={`nav-icon ${isActive("#")}`}
                    style={{
                        marginLeft: "0.9rem",
                        backgroundColor: "#4799ee",
                        borderRadius: "50%",
                        padding: "0.5rem"
                    }}
                >
                    <HomeIcon sx={{ color: "white" }} />
                </IconButton>
                <IconButton
                    onClick={() => handleItemClick("#about")}
                    className={`nav-icon ${isActive("#about")}`}
                    style={{ marginLeft: "0.8rem" }}
                >
                    <PersonIcon sx={{ color: "white" }} />
                </IconButton>
                <IconButton
                    onClick={() => handleItemClick("#experience")}
                    className={`nav-icon ${isActive("#experience")}`}
                    style={{ marginLeft: "0.8rem" }}
                >
                    <HandshakeIcon sx={{ color: "white" }} />
                </IconButton>
                <IconButton
                    onClick={() => handleItemClick("#services")}
                    className={`nav-icon ${isActive("#services")}`}
                    style={{ marginLeft: "0.8rem" }}
                >
                    <LocalPostOfficeIcon sx={{ color: "white" }} />
                </IconButton>
                <IconButton
                    onClick={() => handleItemClick("#contact")}
                    className={`nav-icon ${isActive("#contact")}`}
                    style={{ marginLeft: "0.8rem" }}
                >
                    <ComputerIcon sx={{ color: "white" }} />
                </IconButton>
            </Toolbar>
        </AppBar>


    </>
}

export default Nav