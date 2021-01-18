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
      background: 'linear-gradient(to top right, rgb(4, 4, 5), rgb(16, 14, 16), rgb(27, 25, 27), rgb(39, 35, 38), rgb(51, 45, 49), rgb(63, 55, 60), rgb(74, 66, 72), rgb(86, 76, 83), rgb(98, 86, 94), rgb(110, 96, 105), rgb(121, 107, 116), rgb(133, 117, 127));',
      boxShadow: '-5px -5px 5px -5px rgba(34, 60, 80, 0.6) inset',
      outline: "none",
      border: "none",
    },
  });
function AddNewIncome() {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <Button variant="outlined"  onClick={handleClickOpen} className={classes.root}>Add new income</Button>
            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">New income</DialogTitle>

                <DialogContent>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="total"
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
                        <option>Food</option>
                        <option>Clothes</option>
                        <option>Pets</option>
                        <option>Restaurants</option>
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
                    <Button onClick={handleClose} color="primary">Add new income</Button>
                </DialogActions>

            </Dialog>
        </div>
    );
}

export default AddNewIncome;