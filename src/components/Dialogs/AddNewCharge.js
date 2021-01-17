import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';

function AddNewCharge() {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <Button variant="outlined" color="primary" onClick={handleClickOpen}>Add new charge</Button>
            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">New charge</DialogTitle>

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
                    <Button onClick={handleClose} color="primary">Add new charge</Button>
                </DialogActions>

            </Dialog>
        </div>
    );
}

export default AddNewCharge;