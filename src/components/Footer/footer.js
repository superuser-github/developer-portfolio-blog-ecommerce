import React from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "gatsby";

const Footer = () => {
    const useStyles = makeStyles((theme) => ({
        footer: {
            backgroundColor: theme.palette.secondary.main,
            padding: theme.spacing(1),
            "& a": {
                textDecoration: "none",
                color: theme.palette.text.primary,
                "&:hover": {
                    color: theme.palette.secondary.light
                }
            }
        },
    }));
    const classes = useStyles();
    return (
        <footer className={classes.footer}>
            <Typography variant="body2" color="textPrimary" align="center">
                {"Copyright © "}
                <a color="inherit" href="https://rajeshroyal.com/" target="_blank">
                    Rajesh Royal
                </a>{" "}
                {new Date().getFullYear()}
                {"."}
            </Typography>
        </footer>
    );
};
export default Footer;