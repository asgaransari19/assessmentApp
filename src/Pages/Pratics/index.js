import { Typography, Checkbox, Button } from '@material-ui/core';
import React from 'react';
import { useHistory } from 'react-router-dom';


const questions = [
    {
        Id: 'as',
        question: '34+34 = ?',
        choices: [
            {
                option: '56',
                id: 'sa'
            }, {
                option: '50',
                id: 's'
            }, {
                option: '86',
                id: 'as'
            }, {
                option: '46',
                id: 'a'
            }
        ]
    },
    {
        Id: 'as',
        question: '34+34 = ?',
        choices: [
            {
                option: '56',
                id: 'sa'
            }, {
                option: '50',
                id: 's'
            }, {
                option: '86',
                id: 'as'
            }, {
                option: '46',
                id: 'a'
            }
        ]
    },

]



export default function Pratics() {

    const history = useHistory();

    const renderQuestion = () => {
        return questions.map((obj) => {
            return <div>
                <Typography>{obj.question}</Typography>
                {renderChoice(obj.choices)}
            </div>
        })
    }


    const renderChoice = (choices) => {
        return choices.map((obj) => {
            return <div>
                <label type='Checkbox'><Checkbox /> {obj.option}</label>
            </div>
        })
    }

    const handleSubmmit = () => {
        history.push('/result');
    }


    return (
        <div>
            {renderQuestion()}
            <Button color='secondary' onClick={handleSubmmit}>sub mit</Button>
        </div>
    )
}