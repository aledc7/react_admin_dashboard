import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import rows from "./rowsData";

function Tableresponsive() {
    return (
        <>
            <h1 className="title">Material UI - Responsive Table</h1>
            <TableContainer component={Paper}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Dessert (100g serving)</TableCell>
                            <TableCell numeric>Calories</TableCell>
                            <TableCell numeric>Fat (g)</TableCell>
                            <TableCell numeric>Carbs (g)</TableCell>
                            <TableCell numeric>Protein (g)</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map(({ id, name, calories, fat, carbs, protein }) => (
                            <TableRow key={id}>
                                <TableCell component="th" scope="row">
                                    {name}
                                </TableCell>
                                <TableCell numeric>{calories}</TableCell>
                                <TableCell numeric>{fat}</TableCell>
                                <TableCell numeric>{carbs}</TableCell>
                                <TableCell numeric>{protein}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>

        </>
    )
}



export { Tableresponsive };
