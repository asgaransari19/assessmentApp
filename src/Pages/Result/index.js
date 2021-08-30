import { Box, Grid, Typography } from '@material-ui/core';
import React from 'react';
import useStyles from './style';
import Header from '../../Componants/Header';
import { useState, useEffect } from 'react';




export default function Result() {
    const classes = useStyles();
    const [results, setResults] = useState([]);

    useEffect(() => {
        const data = JSON.parse(localStorage.getItem('results'));
        setResults(data ? data : [])
        console.log("data : ", data)
    }, [])

    const renderResultItem = (result, i) => {
        return <Grid item kay={i} sm={12} className={classes.Grid}>
            <Box className={classes.box1}>
                <Typography variant='h6'>total Questions</Typography>
                <Typography variant='body1'>{result.totalQuestions}</Typography>
            </Box>

            <Box className={classes.box1}>
                <Typography variant='h6'>score</Typography>
                <Typography variant='body1'>{result.correct}</Typography>
            </Box>
            <Box className={classes.box1}>
                <Typography variant='h6'>Attempted</Typography>
                <Typography variant='body1'>{result.attempted}</Typography>
            </Box>
            <Box className={classes.box1}>
                <Typography variant='h6'>wrong</Typography>
                <Typography variant='body1'>{result.incorrect}</Typography>
            </Box>
        </Grid>
    }



    return (
        <Box>
            <div className={classes.header}><Header /></div>
            <Typography className={classes.heading} variant='h4'>Result.?</Typography>
            <Box className={classes.root}>
                <Typography className={classes.title} variant='h5'> My First Assessment</Typography>
                <Grid item className={classes.Grid}>
                    {results && results.map((r, i) => renderResultItem(r, i))}
                </Grid>
            </Box>
        </Box>
    )
}