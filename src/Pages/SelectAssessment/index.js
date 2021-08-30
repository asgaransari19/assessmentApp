import React, { useEffect } from 'react';
import { useHistory, useLocation } from 'react-router-dom'
import { Link, ListItem, List, makeStyles, Typography, Box } from '@material-ui/core';
import Header from '../../Componants/Header'
import { pagePaths } from '../../utils/constant';

const list = [
    {
        text: '. my frist assessmente',
        index: (1),
        pagePaths: '/firstassessment'
    },
    {
        text: '. my second assessmente',
        index: (2),
        pagePaths: '/secondassessment'
    },
    {
        text: '. my third assessmente',
        index: (3),
        pagePaths: '/thirdassessment'
    },
];

const useStyles = makeStyles(theme => ({

    root: {
        flexGrow: 1,
        background: "black"
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
        marginLeft: '80px'
    },

    email: {
        textTransform: 'none',
        // fontWeight: 'bold',
    },

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
        margin: '50px 0 0 80px',
        width: '260px',
        color: 'green',
    },


    listitom: {
        // border: '2px solid',
        width: "80%",
        height: "10px",
        fontSize: '14px',
        fontWeight: 'bold',
        margin: "20px 0 0 80px",
        "&:hover": {
            color: 'red',
            textDecoration: 'none',
        }
    }

}))


export default function SelectAssessment() {
    const classes = useStyles();
    const history = useHistory();
    const location = useLocation();
    const [email, setEmail] = React.useState("");


    useEffect(() => {
        if (!location.state) {
            history.push({
                pathname: pagePaths.login,
                state: { message: 'Enter your gmail' }
            });
        }
        else if (!location.state.email) {
            history.push({
                pathname: pagePaths.login,
                state: { message: 'Enter your gmail' }
            })
        }
        else {
            setEmail(location.state.email)
        }

    }, [])

    return (
        <div>
            <Header email={email} />

            <Box className={classes.box}>
                <Typography variant="h6" className={classes.title2}>Select an Assessment </Typography>

                <List className={classes.list}>
                    {
                        list.map((obj, i) => {
                            return (
                                <ListItem
                                    className={classes.listitom}
                                    component={Link}
                                    href={obj.pagePaths}

                                >
                                    {obj.index}
                                    {obj.text}
                                </ListItem>
                            )
                        })
                    }


                </List>

            </Box>



        </div>
    )
}