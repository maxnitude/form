import React, { useEffect } from 'react';
import { Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@material-ui/core';
import { makeStyles } from "@material-ui/core/styles";
import { connect } from 'react-redux';
import { changeHeader} from '../actions/index';
import MainContainer from './MainContainer';


const useStyles = makeStyles({
    root: {
        marginBottom: "30px",
    },
    table: {
        marginBottom: "30px",
    },
});

const EndPage = ({changeHeader, state}) => {

    const styles = useStyles();

    useEffect(() => {
        changeHeader("Successful registration!")
    }, [changeHeader]);

    const personalData = Object.entries(state)
        .filter((item) => item[0] !== "header")
        .filter((item) => item[0] !== "password")
        .filter((item) => item[1] !== null)

    return (
        <MainContainer>
            <Typography component="h2" variant="h5">
                Your personal data
            </Typography>
            <TableContainer className={styles.root} >
                <Table className={styles.table} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Field</TableCell>
                            <TableCell align="right">Value</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>                        
                        {personalData.map((item) => (
                            <TableRow key={item[0]}>
                                <TableCell component="th" scope="row">
                                    {item[0]}
                                </TableCell>
                                <TableCell align="right">{item[1].toString()}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </MainContainer>
    )
}

const mapStateToProps = (state) => {
    return {
        state
    }
}

const mapDispatchToProps = {
    changeHeader
}

export default connect(mapStateToProps, mapDispatchToProps)(EndPage);