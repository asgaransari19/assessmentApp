import { makeStyles } from '@material-ui/styles';


const useStyles = makeStyles((theme) => ({

    root: {
        // border: '1px solid',
        height: 'auto',
        width: '90%',
        margin: '100px auto auto auto',
        display: 'flex',
        justifyContent: 'flex-Start',
        [theme.breakpoints.down('xs')]: {
            width: '100%'
        }

    },
    heading: {
        color: 'blue',
        // border: '1px solid',
        height: '40px',
        width: '90%',
        broder: '2px solid',
        [theme.breakpoints.only('xs')]: {
            margin: '5px'
        }
    },
    btn: {
        // border: '2px solid',
        height: '40px',
        width: '50%',
        justifyContent: 'flex-start',
        display: 'flex',
        [theme.breakpoints.only('xs')]: {
            flexDirection: 'row',
            justifyContent: 'space-Around',
            display: 'flex',
        }
    },
    button: {
        color: 'blue',
        "&:hover": {
            background: 'red',
            color: 'white'
        },
        marginLeft: '5px',
        minHeight: '30px',
        minWidth: '30px',
        border: '1px solid',
        borderRadius: '50%',
        textAlign: 'center'
    },
    question: {
        height: '250px',
        width: '90%',
        // border: '1px solid',
        margin: '40px auto auto auto',

        [theme.breakpoints.only('xs')]: {
            flexDirection: 'column',
            display: 'flex',

        }

    },
    choice: {
        height: '170px',
        width: '90%',
        margin: '40px auto auto auto',
        // border: '1px solid',
        display: 'flex',
        flexDirection: 'column'

    },
    nextbtn: {
        height: '40px',
        width: '60px',
        // border: '1px solid',
        background: 'green',
        color: 'white',
        textTransform: 'none',
        fontWeight: 'bold',
        "&:hover": {
            background: 'green',
        }

    },

    Buttons: {
        height: '60px',
        // border: '1px solid',
        display: 'flex',
        justifyContent: 'space-Between',
        width: '50%',
        marginLeft: 'auto',
        marginRight: 'auto'
    },
    activebtn: {
        background: 'black',
        color: 'white',
        minHeight: '40px',
        minWidth: '40px',
        borderRadius: '50%',
    },

    submitbtn: {
        background: 'black',
        height: '40px',
        width: '60px',
        marginLeft: '40%',
        color: 'white',
        textTransform: 'none',
        fontWeight: 'bold',
        "&:hover": {
            background: 'black',

        }
    },
    timer: {
        height: '20px',
        width: '80px',
        border: '2px solid',
        marginLeft: '70%',
        fontWeight: 'bold',
        textAlign: 'center',
        borderRadius: '20px',
        justifyContent: 'center',
        alignItems: 'center'

    }

}));
export default useStyles;