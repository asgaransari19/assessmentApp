import React, { useEffect, useState } from 'react';
import useStyles from './style';
import Checkbox from '@material-ui/core/Checkbox';
import { Box, Grid, Typography, Button } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import Header from '../../Componants/Header';
import Timer from '../../Componants/Timer'
import clsx from 'clsx';


const adminQuestions = [
    {
        id: 'asfas',
        Question: '2+2-2*0',
        isQuestionBooleanType: false,
        choices: [
            {
                id: '1',
                name: '6',
                isTrue: false,

            },
            {
                id: '1',
                name: '4',
                isTrue: true,

            }, {
                id: '1',
                name: '4',
                isTrue: true,

            }, {
                id: '1',
                name: '2',
                isTrue: false,

            },
        ]

    },
    {
        id: 'asfas',
        Question: '2+2-2*2',
        isQuestionBooleanType: false,
        choices: [
            {
                id: '1',
                name: '6',
                isTrue: false,

            },
            {
                id: '1',
                name: '0',
                isTrue: true,

            }, {
                id: '1',
                name: '0',
                isTrue: true,

            }, {
                id: '1',
                name: '2',
                isTrue: false,

            },

        ]

    },
    {
        id: 'asfas',
        Question: '2+2-2',
        isQuestionBooleanType: false,
        choices: [
            {
                id: '1',
                name: '6',
                isTrue: false,

            },
            {
                id: '1',
                name: '2',
                isTrue: true,

            }, {
                id: '1',
                name: '2',
                isTrue: true,

            }, {
                id: '1',
                name: '0',
                isTrue: false,

            },
        ]

    },

];

export default function FirstAssessmenet() {
    const classes = useStyles();
    const history = useHistory();
    const [currentQuestion, setCurrentQuestion] = useState();
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [questions, setQuestions] = useState([]);
    const [startQuestions, setStartQuestions] = useState(false);


    const handleCheckbox = (qIndex, cIndex) => {
        questions.forEach((q, i) => {
            if (i === qIndex) {
                q.choices.forEach((c, ci) => {
                    if (ci === cIndex)
                        c.isTrue = !c.isTrue
                })
            }
        })
        setCurrentQuestion((old) => ({ ...old, ...questions[qIndex] }))
    }

    const rendercheckbox = (choices) => {
        return <Grid Item xs={12}>
            <Box className={classes.choice}>
                {startQuestions && choices && choices.map((obj, ci) => {
                    return <label type='checkbox'> <Checkbox onChange={() => handleCheckbox(currentQuestionIndex, ci)} checked={obj.isTrue} />{obj.name}</label>
                })}
            </Box>
        </Grid>
    }

    const renderQuestion = () => {
        return currentQuestion && <Grid Item xs={12} sm={10}>
            <Box className={classes.question}>
                <Typography
                    variant='h5'
                    className={classes.text}>
                    {currentQuestion.Question}
                </Typography>
                {rendercheckbox(currentQuestion.choices)}
            </Box>
        </Grid>

    }

    useEffect(() => {
        const userQuestions = [
            {
                id: 'asfas',
                Question: ' 2+2-2*0',
                isQuestionBooleanType: false,
                choices: [
                    {
                        id: '1',
                        name: '6',
                        isTrue: false,

                    },
                    {
                        id: '1',
                        name: '4',
                        isTrue: false,

                    }, {
                        id: '1',
                        name: '4',
                        isTrue: false,

                    }, {
                        id: '1',
                        name: '2',
                        isTrue: false,

                    },
                ]

            },

            {
                id: 'asfas',
                Question: '2+2-2*2',
                isQuestionBooleanType: false,
                choices: [
                    {
                        id: '1',
                        name: '6',
                        isTrue: false,

                    },
                    {
                        id: '1',
                        name: '0',
                        isTrue: false,

                    }, {
                        id: '1',
                        name: '0',
                        isTrue: false,

                    }, {
                        id: '1',
                        name: '2',
                        isTrue: false,

                    },

                ]

            },

            {
                id: 'asfas',
                Question: '2+2-2',
                isQuestionBooleanType: false,
                choices: [
                    {
                        id: '1',
                        name: '6',
                        isTrue: false,

                    },
                    {
                        id: '1',
                        name: '2',
                        isTrue: false,

                    }, {
                        id: '1',
                        name: '2',
                        isTrue: false,

                    }, {
                        id: '1',
                        name: '0',
                        isTrue: false,

                    },
                ]

            },

        ];

        if (questions.length === 0) {
            setQuestions(userQuestions)
        }
        if (!currentQuestion)
            setCurrentQuestion(() => questions[0]);
    }, [questions[0]]);

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

    const handleSubmmit = (qIndex, cIndex) => {
        let correct = 0;
        let attempted = 0;
        adminQuestions.forEach((a, aI) => {
            let falseCount = 0;
            let attemptedCount = 0;

            a.choices.forEach((c, ci) => {
                const c1 = questions[aI].choices[ci];
                if (c1.isTrue) {
                    attemptedCount += 1;
                }
                if ((c.isTrue && !c1.isTrue) || (!c.isTrue && c1.isTrue)) {
                    ++falseCount;
                }
            });
            if (attemptedCount > 0)
                attempted += 1;
            if (falseCount === 0) {
                correct += 1;
            }

        });
        const result = {
            assessmentName: 'assessment name should be here.....',
            totalQuestions: questions.length,
            correct: correct,
            incorrect: attempted - correct,
            attempted
        }

        const data = JSON.parse(localStorage.getItem('results'));
        if (data && data.length !== 'undefined') {
            localStorage.clear();
            localStorage.getItem('results', JSON.stringify([...data, result]));
        } else {
            localStorage.setItem('results', JSON.stringify([result]))
        }

        history.push('/result');

    }


    return (
        <div>
            <div>
                <Header />
            </div>

            <Grid container className={classes.root}>
                <Box className={classes.timer}>
                    <Typography>{startQuestions && <Timer />}</Typography>
                </Box>
                <Grid Item xs={12} sm={12} className={classes.heading}>
                    <Typography variant='h5'>
                        This is My FirstAssessment
                    </Typography>
                </Grid>
                <Grid Item xs={12} md={6} lg={6} sm={8} className={classes.btn} >
                    {
                        questions.map((q, i) => <Button
                            className={clsx((classes.button, currentQuestionIndex === i && classes.activebtn))} key={i} onClick={() => changeQuestion(i)}>{i + 1}</Button>)
                    }

                </Grid>
            </Grid>
            {renderQuestion()}
            <Box className={classes.Buttons}>
                {(currentQuestionIndex !== 0) && startQuestions && <Button color='primary' className={classes.nextbtn} onClick={() => changeQuestion()}>previous</Button>}

                {(currentQuestionIndex !== questions.length - 1) && startQuestions && <Button className={classes.nextbtn} color='secondary' onClick={() => changeQuestion(undefined, 'next')}>
                    {setStartQuestions && true}
                    Next</Button>}

            </Box>


            {startQuestions && <Button
                className={classes.submitbtn} onClick={handleSubmmit}>Submit</Button>
            }


            {!startQuestions && <Button className={classes.submitbtn} onClick={() => setStartQuestions(true)}

            >start</Button>}
        </div>
    )
}