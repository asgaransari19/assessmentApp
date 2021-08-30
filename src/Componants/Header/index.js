import React from 'react';
import { Toolbar, AppBar, makeStyles, Typography, Grid } from '@material-ui/core';

const useStyles = makeStyles(theme => ({

    root: {
        background: "black",
    },
    logo: {
        fontWeight: 'bold',
        fontSize: '20px',
        [theme.breakpoints.only('xs')]: {
            fontSize: '16px',
            textField: 'center',
            fontWeight: 'bold',
            marginLeft: '5px',
        },
        [theme.breakpoints.only('sm')]: {
            fontSize: '24px',
            marginLeft: '25px',
            fontWeight: 'bold',
            textField: 'center',
            //  background: 'yellow'

        },
        [theme.breakpoints.only('md')]: {
            fontSize: '24px',
            marginLeft: '25px',
            fontWeight: 'bold',
            textField: 'center',
            //  background: 'yellow'

        },
        [theme.breakpoints.only('lg')]: {
            marginLeft: '20px',
            fontWeight: 'bold',
            textField: 'center',
            //  background: 'yellow',
            fontSize: '30px',


        }

    },
    title: {
        marginLeft: '80px',
        [theme.breakpoints.only('xs')]: {
            fontSize: '16px',
            marginLeft: '15px',
            fontWeight: 'bold',
            width: '150px',
            textField: 'center',
            //  background: 'yellow'

        },
        [theme.breakpoints.only('sm')]: {
            fontSize: '20px',
            marginLeft: '25px',
            fontWeight: 'bold',
            width: '150px',
            textField: 'center',
            //  background: 'yellow'

        },
        [theme.breakpoints.only('md')]: {
            fontSize: '24px',
            marginLeft: '100px',
            fontWeight: 'bold',
            textField: 'center',
            //  background: 'yellow'

        },
        [theme.breakpoints.only('lg')]: {
            marginLeft: '120px',
            fontWeight: 'bold',
            textField: 'center',
            //  background: 'yellow',
            fontSize: '30px',


        }
    },

    email: {
        textTransform: 'none',
        [theme.breakpoints.only('xs')]: {
            fontSize: '10px',
            marginRight: '15px',
            textField: 'center',
            width: '5px',
            //  background: 'yellow'

        },
        [theme.breakpoints.only('sm')]: {
            fontSize: '12px',
            fontWeight: 'bold',
            textField: 'center',
            marginLeft: '100px',
            //  background: 'yellow'

        },
        [theme.breakpoints.only('md')]: {
            fontSize: '16px',
            marginLeft: '200px',
            fontWeight: 'bold',
            textField: 'center',
            //  background: 'yellow'

        },
        [theme.breakpoints.only('lg')]: {
            marginLeft: '200px',
            fontWeight: 'bold',
            textField: 'center',
            //  background: 'yellow',
            fontSize: '14px',


        }
    }

}))



export default function Header(props) {
    const classes = useStyles();

    return (
        <div>

            <Grid>
                <AppBar className={classes.root}>
                    <Toolbar position='fixed'>
                        <Grid Item xs={12} sm={12} md={12} lg={12}>
                            <Typography edge="start" className={classes.logo} color="inherit">
                                loGO
                            </Typography>
                        </Grid>
                        <Grid Item xs={12} sm={12} md={12} lg={12} >
                            <Typography variant="h5" className={classes.title}>
                                Assessment App
                            </Typography>
                        </Grid>
                        <Grid Item xs={12} sm={12} md={12} lg={12} >
                            <Typography className={classes.email} color="inherit" >{props.email}</Typography>
                        </Grid>
                    </Toolbar>
                </AppBar>
            </Grid>
        </div>
    )
}