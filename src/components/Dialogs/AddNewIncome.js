import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';

import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles({
    root: {
        background: "linear-gradient(#656565, #444)",
        border: "solid 1px #535353",
        borderBottom: "solid 3px #414141",
        boxShadow: "inset 0 0 0 1px #939393",
        color: "#fff",
        textShadow: "0 1px 0 #2f2f2f"
    },
  });
function AddNewIncome(props) {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleOnSubmit = (e) => {
        e.preventDefault();
        const newRow = {
            id: Math.floor(Math.random()*1000),
            category: e.target[2].value,
            description: e.target[1].value,
            date: e.target[3].value,
            total: e.target[0].value
        };
        localStorage.setItem(`${newRow.id}`, JSON.stringify(newRow));
        props.incomes.push(newRow);
        props.handleIncomeOnSubmit();
    }

    return (
        <div>
            <Button variant="outlined"  onClick={handleClickOpen} className={classes.root}>Add new income</Button>
            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">New income</DialogTitle>
<form onSubmit={handleOnSubmit}>
                <DialogContent>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="total"
                        placeholder="only number"
                        label="Total"
                        type="text"
                        fullWidth
                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        id="description"
                        label="Description"
                        type="text"
                        fullWidth
                    />


                    <InputLabel id="demo-controlled-open-select-label">Select category</InputLabel>
                    <Select native onChange={handleClickOpen} labelId="demo-controlled-open-select-label">
                        <option aria-label="None" value="" />
                        <option>Salary</option>
                        <option>Bonuses</option>
                        <option>Deposits</option>
                        <option>Profits</option>
                        <option>Rent</option>
                        <option>Sale of property</option>
                    </Select>

                    <InputLabel id="test">Date</InputLabel>
                    <TextField
                        labelId="test"
                        id="date"
                        type="date"
                    />

                </DialogContent>

                <DialogActions>
                    <Button onClick={handleClose} color="primary">Cancel</Button>
                    <Button onClick={handleClose} type='submit' color="primary">Add new income</Button>
                </DialogActions>
</form>
            </Dialog>
        </div>
    );
}

export default AddNewIncome;