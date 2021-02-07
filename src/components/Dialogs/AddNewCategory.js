import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import {makeStyles} from '@material-ui/core/styles';
import {connect} from "react-redux";
import addCategory from "../../Redux/actions/add-category-action";
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


const AddNewCategory = (props) => {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    const handleCategoryOnSubmit = (e) => {
        e.preventDefault();
            const newCategory = {
            id: Math.floor(Math.random() * 100),
            category: e.target[0].value,
            description: e.target[1].value,
            date: e.target[2].value
        };
        console.log(newCategory)
        props.addCategory(newCategory);
    }
    return (
        <div>
            <Button variant="outlined" onClick={handleClickOpen} className={classes.root}> Add new category</Button>
            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">New category</DialogTitle>
                <form onSubmit={handleCategoryOnSubmit}>
                    <DialogContent>

                        <TextField
                            autoFocus
                            margin="dense"
                            id="name"
                            label="Name"
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
                        <TextField
                            labelId="test"
                            id="date"
                            type="date"
                        />
                       {/* <InputLabel id="demo-controlled-open-select-label">Select icon</InputLabel>
                        <Select native onChange={handleClickOpen} labelId="demo-controlled-open-select-label">
                            <option aria-label="None" value=""/>
                            <option value={10}>Ten</option>
                            <option value={20}>Twenty</option>
                            <option value={30}>Thirty</option>
                        </Select>*/}

                    </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">Cancel</Button>
                    <Button onClick={handleClose} type='submit' color="primary">Add</Button>
                </DialogActions>
                </form>
            </Dialog>
        </div>
    );
}
const mapDispatchToProps = {
    addCategory
};
export default connect(null, mapDispatchToProps)(AddNewCategory);
