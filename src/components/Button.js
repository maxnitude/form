import React from 'react'
import {makeStyles}  from '@material-ui/core/styles';
import { Button } from '@material-ui/core';


const useStyles = makeStyles(() => ({
    root: {
        width: "150px",
        height: "50px",
        margin: "20px auto"
    }
}));

export const ControlButton = ({ children, ...props}) => {
    
    const styles = useStyles();
    
    return (
        <Button type="submit" variant="contained" color="primary" className={styles.root} {...props}>
            {children}
        </Button>
    )
};
