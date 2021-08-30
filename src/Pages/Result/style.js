import { makeStyles } from '@material-ui/core'


const useStyles = makeStyles(theme => ({
    header: {
        height: '65px',
        width: '100%',
    },

    root: {
        height: 'auto',
        width: '90%',
        margin: '10px auto 0 auto',
        // border: '2px solid'
    },
    heading: {
        marginLeft: '50px',
        // fontWeight: 'bold',
        marginTop: '50px',
    },
    title: {
        marginLeft: '15px',
        // fontWeight: 'bold',
        color: '#858585',


    },
    Grid: {
        height: '200px',
        width: '100%',
        border: '1px solid',
        alignItems: 'center',
        display: 'flex',
        justifyContent: 'space-Between',

    },
    box1: {
        height: '150px',
        width: '25%',
        border: '2px solid #858585',
        borderRadius: '5px',
        margin: 'auto auto auto 5px',
        textAlign: 'center',
        justifyContent: 'space-Around',
        display: 'flex',
        alignItems: 'center',
       
        [theme.breakpoints.down('sm')]: {
            '& .MuiTypography-h6': {
                fontSize: 'small',
    
            },
        }
    }

}));
export default useStyles;