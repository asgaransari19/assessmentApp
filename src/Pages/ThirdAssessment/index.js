import React from 'react';
import Header from '../../Componants/Header';
import useStytles from './style';
import { Box, Typography, Button, FormControlLabel, Checkbox } from '@material-ui/core';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import CheckBoxIcon from '@material-ui/icons/CheckBox';




export default function SecondAssessmenet() {
    const classes = useStytles();

    return (
        <div>

            <Header />
            <Box className={classes.root}>
                <Box className={classes.timebox}></Box>

                <Typography variant='h5' className={classes.title}>This is my Third Assessment</Typography>

                <Box className={classes.btns}>
                    <Button className={classes.btn}>1</Button>
                    <Button className={classes.btn}>2</Button>
                    <Button className={classes.btn}>3</Button>
                    <Button className={classes.btn}>4</Button>
                    <Button className={classes.btn}>5</Button>
                    <Button className={classes.btn}>6</Button>
                </Box>

                <Box className={classes.question1}>
                    <Typography className={classes.textQuestions}
                        variant='h5'
                    >3. Questions3</Typography>

                    <Box className={classes.chekbox}>


                        <FormControlLabel
                            label='choice1'
                            control={
                                <Checkbox
                                    icon={
                                        <CheckBoxOutlineBlankIcon fontSize='small' />}
                                    checkedIcon={<CheckBoxIcon fontSize='small' />}
                                    name='ckeckedI'
                                />
                            }

                        />
                        <FormControlLabel
                            label='choice2'
                            control={
                                <Checkbox
                                    icon={
                                        <CheckBoxOutlineBlankIcon fontSize='small' />}
                                    checkedIcon={<CheckBoxIcon fontSize='small' />}
                                    name='ckeckedI'
                                />
                            }

                        />
                        <FormControlLabel
                            label='choice3'
                            control={
                                <Checkbox
                                    icon={
                                        <CheckBoxOutlineBlankIcon fontSize='small' />}
                                    checkedIcon={<CheckBoxIcon fontSize='small' />}
                                    name='ckeckedI'
                                />
                            }

                        />
                        <FormControlLabel
                            label='choice4'
                            control={
                                <Checkbox
                                    icon={
                                        <CheckBoxOutlineBlankIcon fontSize='small' />}
                                    checkedIcon={<CheckBoxIcon fontSize='small' />}
                                    name='ckeckedI'
                                />
                            }

                        />
                    </Box>
                    <Button className={classes.nextbtn}>Next</Button>
                </Box>
                <Button className={classes.submitbtn}>Submit</Button>

            </Box>
        </div>
    )
}