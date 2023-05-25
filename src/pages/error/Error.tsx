import React from "react";
import { Box, Typography } from "@mui/material";

const ErrorPage: React.FC<{}> = () => {
    return (
        <Box
            sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                height: "100vh",
                padding: "16px",
                backgroundColor: "#f0f0f0",
            }}
        >
            <Typography variant="h4" align="center">
                Error 204: No Content
            </Typography>
        </Box>
    );
};

export default ErrorPage;
