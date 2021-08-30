import { makeStyles, Box, TextField, Grid } from '@material-ui/core';
import React from 'react';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { pagePaths } from '../../utils/constant';
import { useHistory } from 'react-router-dom';
import Header from '../../Componants/Header';


const useStyles = makeStyles(theme => ({

    box: {
        height: '400px',
        width: '90%',
        border: '1px solid',
        borderRadius: '10px',
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: '150px',
        boxShadow: '2px 3px 10px black'
    },
    title2: {
        margin: '40px 0 0 60px',
        width: '200px',

        fontWeight: 'bold'
    },
    inputBox: {
        // boxShadow: '2px 3px 10px black',
        height: '50px',
        width: '40%',
        // border: '2px solid',
        borderRadius: '10px',
        marginTop: '100px',
        marginLeft: '10%',
        marginRight: 'auto',
        display: 'flex',
        justifyContent: 'space-Around',
        placeItems: 'center',
        [theme.breakpoints.down('sm')]: {
        width: '90%',
        marginLeft: 'auto',
        marginRight: 'auto'
           
        },
    },
    TextField: {
        boxShadow: '2px 3px 10px black',
        justifyContent: 'center',
        borderRadius: '5px',
        height: '40px',
        width: '80%',
        textAlign: 'center',
        border: '1px solid',
        "& .MuiInput-underline:after": {
            borderBottom: 'none'
        },
        "& .MuiInput-underline:before": {
            borderBottom: 'none'
        },
        "& .MuiInput-underline:hover:not(.Mui-disabled):before": {
            borderBottom: 'none'
        },
    },

    Continue: {
        textTransform: 'none',
        boxShadow: '2px 3px 10px black',

        height: '40px',
        width: '20%',
        background: 'green',
        color: 'white',
        fontSize: '12px',
        fontWeight: 'bold',
        borderRadius: '5px',
        "&:hover": {
            background: 'black'
        }
    }

}))


export default function LogIn() {
    const classes = useStyles();
    const history = useHistory();
    const [email, setEmail] = React.useState("");
    const [error, setError] = React.useState("");

    const handleSubmit = () => {
        if (!email) {
            setError("Enter your gmail ")
        }
        else {
            setError('')
            history.push({
                pathname: pagePaths.selectassessment,
                state: { email }
            });
        }
    }

    return (
        <Box>
            <Header />
            <Box className={classes.box}>
                <Typography variant="h4" className={classes.title2}>
                    Write A Test
                </Typography>

                <Grid item down sm={10}>

                    <Box className={classes.inputBox}>
                        <TextField placeholder='Enter your email' type='email' className={classes.TextField} value={email} onChange={(e) => setEmail(e.target.value)} />
                        <small>{error}</small>


                        <Button
                            type='button'
                            className={classes.Continue}
                            onClick={handleSubmit}
                        >continue</Button>

                    </Box>
                </Grid>
            </Box>

        </Box>
    )
}

