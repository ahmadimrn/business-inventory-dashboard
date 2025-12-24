import React, { useState } from "react";
import { BrowserRouter, Routes, Route, Link, Outlet } from "react-router";
import {
    AppBar,
    Toolbar,
    Typography,
    Drawer,
    List,
    ListItem,
    ListItemText,
    ListItemButton,
    Box,
    CssBaseline,
    Container,
    Table,
    TableHead,
    TableRow,
    TableCell,
    TableBody,
    Paper,
    Grid,
} from "@mui/material";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

const AuthLayout = () => {
    return (
        <>
            <CssBaseline />
            <Navbar />

            <Toolbar />
            <Box sx={{ display: "flex" }}>
                <Outlet />
            </Box>
        </>
    );
};

export default AuthLayout;
