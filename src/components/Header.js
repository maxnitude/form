import React from 'react';
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';

const useStyles = makeStyles((theme) => ({
    root: {
        margin: theme.spacing(3, 0, 5),
        textAlign: "center",
        fontSize: "30px",
        color: "green",
    }
}));

const Header = ({ header }) => {
    const styles = useStyles()

    return (
        <div className="header">
            <Typography 
                className={styles.root} 
                component="h1"
                variant="h4" 
            >
                {header}
            </Typography>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        header: state.header,
    }
}

export default connect(mapStateToProps)(Header);