import React, { useEffect, useState } from 'react';
import { Checkbox, Grid, Typography, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';


const questions = [

    {
        question: '2-2=?',
        id: 'as',
        choices: [
            {
                name: 'coice1',
                id: 'sa'
            },
            {
                name: 'coice2',
                id: 'sa'
            },
            {
                name: 'coice3',
                id: 'sa'
            }
        ]
    },
    {
        question: '2+2=?',
        id: 'as',
        choices: [
            {
                name: 'coice1',
                id: 'sa'
            },
            {
                name: 'coice2',
                id: 'sa'
            },
            {
                name: 'coice3',
                id: 'sa'
            }
        ]
    }, {
        question: '2+22=?',
        id: 'as',
        choices: [
            {
                name: 'coice1',
                id: 'sa'
            },
            {
                name: 'coice2',
                id: 'sa'
            },
            {
                name: 'coice3',
                id: 'sa'
            }
        ]
    }

];
const useStyles = makeStyles({

});



export default function Example() {
    const classes = useStyles();
    const [currentQuestion, setCurrentQuestion] = useState();
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

    const renderQuestion = () => {
        return currentQuestion && <div>
            <Typography>{currentQuestion.question}</Typography>
            {renderChoice(currentQuestion.choices)}
        </div>


    }

    const renderChoice = (choices) => {
        return <div>
            {
                choices.map((obj) => {
                    return <label type='checkbox'> <Checkbox />{obj.name} </label>
                })
            }
        </div>
    }

    useEffect(() => {
        setCurrentQuestion(questions[0]);

    }, [])


    const changeQuestion = (i, direction) => {
        if (i) {
            setCurrentQuestion(questions[i]);
            setCurrentQuestionIndex(i)
        }
        else if (direction === 'next') {
            setCurrentQuestion(questions[currentQuestionIndex + 1]);
            setCurrentQuestionIndex(currentQuestionIndex + 1)
        }
        else {
            setCurrentQuestion(questions[currentQuestionIndex - 1]);
            setCurrentQuestionIndex(currentQuestionIndex - 1)
        }
    }
    return (
        <Grid>
            {renderQuestion()}
            <div className={classes.btn}> {
                questions.map((q, i) => 
                <Button key={i} onClick={() => changeQuestion(i)}>{i + 1}</Button>)
            }</div>

            {(currentQuestionIndex !== 0) && <Button color='primary' onClick={() => changeQuestion()}>previous</Button>}

            {(currentQuestionIndex !== questions.length - 1) && <Button color='secondary' onClick={() => changeQuestion(undefined , 'next')}>next</Button>}
        </Grid>
    )
}