import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const headerStyles = makeStyles((theme) => ({
    
    title: {
        flexGrow: 1,

    },
    hoverStyle: {
        backgroundColor: '#426783',
        color: 'white',
        '&:hover': {
            backgroundColor: '#03A9F4',
            color: '#white'
        }
    }
}));



export default function Header() {

    const classes = headerStyles();

    return (
        <div className={classes.root}>
            <AppBar position="static" style={{ backgroundColor: '#426783' }}>
                <Toolbar>
                    <Typography variant="h6" className={classes.title}>
                       Alumni Portal
                    </Typography>
                    <Button className={classes.hoverStyle} >Login</Button>
                </Toolbar>
            </AppBar>
        </div>
    )
}
