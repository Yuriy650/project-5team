import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import {makeStyles} from '@material-ui/core/styles';


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


function AddNewCharge(props) {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };


    const handleClose = () => {
        setOpen(false);
    };

    /*let newRow = {
        category: '',
        description: '',
        date: '',
        money: '',
        handleCategoryOnClick(e) {
            this.category = e.target.value

        },
        handleDescriptionOnChange(e) {
            this.description = e.target.value
        },
        handleDateOnChange(e) {
            this.date = e.target.value
        },
        handleMoneyOnChange(e) {
            this.money = e.target.value
        }
    }

    this.handleCategoryOnClick = this.handleCategoryOnClick.bind(this);
    this.handleDescriptionOnChange = this.handleDescriptionOnChange.bind(this);
    this.handleDateOnChange = this.handleDateOnChange.bind(this);
    this.handleMoneyOnChange = this.handleMoneyOnChange.bind(this);
*/
    const row = {


    };
    const handleMoneyOnChange = (e) => {

       row.money = e.target.value;
       props.onMoneyChange(row.money);
      // console.log(props.onMoneyChange(row.money));

    }
    const handleDescriptionOnChange = (e) => {

        row.description = e.target.value;
        props.onDescriptionChange(row.description);
       // console.log(props.onDescriptionChange(row.description))
    }
   const handleCategoryOnClick = (e) => {

        row.category = e.target.value;
        props.onCategoryOnClick(row.category);

    }
    const handleDateOnChange = (e) => {
        row.date = e.target.value;
        props.onDateChange(row.date);
        console.log(row);


    }

    return (
        <div>
            <Button variant="outlined" onClick={handleClickOpen} className={classes.root}>Add new charge</Button>
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
                        onChange={()=>handleMoneyOnChange}
                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        id="description"
                        label="Description"
                        type="text"
                        fullWidth
                        onChange={()=>handleDescriptionOnChange}
                    />


                    <InputLabel id="demo-controlled-open-select-label">Select category</InputLabel>
                    <Select native onChange={handleClickOpen} onClick={()=>handleCategoryOnClick} labelId="demo-controlled-open-select-label">
                        <option aria-label="None" value=""/>
                        <option value='food'>Food</option>
                        <option value='clothes'>Clothes</option>
                        <option value='pets'>Pets</option>
                        <option value='restaurants'>Restaurants</option>
                        <option value='fuel'>Fuel</option>
                        <option value='utility bills'>Utility Bills</option>
                    </Select>

                    <InputLabel id="test">Date</InputLabel>
                    <TextField
                        labelId="test"
                        id="date"
                        type="date"
                        onChange={() => handleDateOnChange}
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