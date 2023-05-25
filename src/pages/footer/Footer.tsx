import React from "react";
import { Box, Link, Typography } from "@mui/material";


const Footer: React.FC<{}> = () => {
    return (
        <Box
            component="footer"
            sx={{
                marginTop: 'auto',
                textAlign: 'center',
                padding: '16px',
                color: 'white',
            }}
        >
            <Typography variant="caption">
                &copy; {new Date().getFullYear()}&nbsp;
                <Link href="https://sebastiancerutti.tech" target="_blank" rel="noopener noreferrer">
                    Seba Cerutti
                </Link>
            </Typography>
        </Box>
    );
};
export default Footer;