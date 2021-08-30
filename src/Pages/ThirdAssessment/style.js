import {makeStyles} from '@material-ui/core';

export default makeStyles({

    root: {
        height: '600px',
        borderRadius: '5px',
        width: '90%',
        border: '1px solid',
        marginTop: '100px',
        marginLeft: 'auto',
        marginRight: 'auto',
        boxShadow: '2px 3px 10px black'

    },
    title: {
        // border: '2px solid',
        fontWeight: 'bold',
        color: 'blue',
        height: '40px',
        width: '400px',
        margin: '0 0 0 80px'
    },
    timebox: {
        height: '40px',
        width: '150px',
        borderRadius: '20px',
        border: '2px solid',
        marginLeft: 'auto',
        marginTop: '10px',
        marginRight: '10px',
        background: 'orange'
    },
    btns: {
        height: '60px',
        width: '450px',
        marginLeft: '80px',
        // border: '1px solid',
        alignItems: 'center',
        display: 'flex',
        justifyContent: 'space-Between'
    },

    btn: {
        height: '60px',
        width: '60px',
        borderRadius: '50%',
        alignItems: 'center',
        background: 'gray',
        color: 'blue',
        fontWeight: 'bold',
        "&:hover": {
            background: 'green',
            color: 'white'
        }
    },
    question1: {
        height: '250px',
        width: '60%',
        margin: "20px 0 0 50px",
        // border: '2px solid'
    },
    textQuestions: {
        marginLeft: '50px',
        matginTop: '10px'
    },
    chekbox: {
        width: '100px',
        // border: '2px solid',
        marginLeft: '80px',
    },
    nextbtn: {
        height: '40px',
        width: '60px',
        background: 'green',
        fontWeight: 'bold',
        color: 'white',
        textTransform: 'none',
        marginLeft: '70%',
        borderRadius: '10px',
        "&:hover": {
            background: 'green',

        }

    },


    perivousbtn:{
        height: '40px',
          width: '80px',
        background: 'green',
        fontWeight: 'bold',
        color: 'white',
        textTransform: 'none',
         borderRadius: '15px',
         marginTop: '20px',
        "&:hover": {
            background: 'green',

        }
    },

    submitbtn: {
        marginLeft: '25%',
        marginTop: '20px',
          height: '50px',
        width: '100px',
        border: '1px solid black',
       background: 'yellow',
       borderRadius: '10px',
       fontWeight: 'bold',
       textTransform: 'none',
       color: 'white',
    //    boxShadow: '2px 3px 10px black',
       "&:hover":{
           background: 'black'
       }
    }

});