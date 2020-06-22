import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
}));

export default function NavBar() {
    const classes = useStyles();

    return (
        <div className="navbar transparent navbar-inverse navbar-fixed-top">
            <nav className="navbar-inner">
                <Toolbar>
                    <Typography variant="h6" className={classes.title}>
                        News
                    </Typography>
                    <Button color="inherit">About me</Button>
                    <Button color="inherit">Projects</Button>
                    <Button color="inherit">Contact me</Button>
                    <Button color="inherit">Education</Button>
                    <Button color="inherit">Technical skills</Button>
                    <Button color="inherit">Certifications</Button>
                </Toolbar>
            </nav>
        </div>
    );
}
