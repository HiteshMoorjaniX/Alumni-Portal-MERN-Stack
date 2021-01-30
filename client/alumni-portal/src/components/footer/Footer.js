import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import { Grid } from '@material-ui/core';

const footerStyles = makeStyles((theme) => ({
    root: {
        marginTop: '70px',
    },
    backgroundStyle: {
        backgroundColor: '#426783'
    },
    iconStyle: {
        marginLeft:'10px',
        display: 'inline-flex',
        verticalAlign: 'middle',
        '&:hover' : {
            backgroundColor: '#03A9F4'
        }
    },
    textStyle : {
        marginRight: '30px'
    }


}));

export default function Footer() {

    const classes = footerStyles();

    return (
        <div className={classes.root}>
            <AppBar position="static" className={classes.backgroundStyle}>

                <Toolbar className={classes.toolbarStyle}>
                    <Grid container direction="row" alignItems="center" justify="center">
                        <Grid className={classes.textStyle}>
                            <h3> Developed by Hitesh Moorjani</h3>
                        </Grid>
                        <Grid  >
                            <InstagramIcon className={classes.iconStyle} />
                            <FacebookIcon className={classes.iconStyle} />
                            <TwitterIcon className={classes.iconStyle} />
                            <LinkedInIcon className={classes.iconStyle} />
                        </Grid>
                    </Grid>
                </Toolbar>
            </AppBar>


        </div>
    )
}
