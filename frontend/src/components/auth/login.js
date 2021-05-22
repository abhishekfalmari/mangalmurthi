import { useState } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Button, TextField, Dialog, IconButton, Typography, InputAdornment, Link } from '@material-ui/core';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import CloseIcon from '@material-ui/icons/Close';
import { Mail, Lock, Phone } from "@material-ui/icons";

const styles = (theme) => ({
    root: {
        margin: 0,
        padding: "16px",
    },
    closeButton: {
        position: 'absolute',
        right: "8px",
        top: "8px",
        color: "gray",
    },
    button: {
        margin: 20
    }
});

const DialogTitle = withStyles(styles)((props) => {
    const { children, classes, onClose, ...other } = props;
    return (
        <MuiDialogTitle disableTypography className={classes.root} {...other}>
            <Typography variant="h4" className="text-center">{children}</Typography>
            {onClose ? (
                <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
                    <CloseIcon />
                </IconButton>
            ) : null}
        </MuiDialogTitle>
    );
});

const DialogContent = withStyles((theme) => ({
    root: {
        padding: theme.spacing(2),
    },
}))(MuiDialogContent);

const DialogActions = withStyles((theme) => ({
    root: {
        margin: 0,
        padding: theme.spacing(1),
    },
}))(MuiDialogActions);

export default function Login() {
    const classes = styles();
    const [open, setOpen] = useState(false);
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const handleChange = name => ({ target: { value } }) =>
        name === "email" ? setEmail(value) : setPassword(value)

    // const handleValidation = () => {
    //     return email.length > 0 && !validateEmail() && password.length > 4;
    // };

    // const handleKeyPress = e => {
    //     if (/enter/gi.test(e.key) && handleValidation()) {
    //         handleClick();
    //     }
    // };

    const validateEmail = () => {
        if (email.length < 1) return false;
        let emailPattern = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
        let phonePattern = /^[7-9][0-9]{9}$/;
        if (!emailPattern.test(email) || !phonePattern.test(email)) {
            return false
        } else {
            return true
        }
        // return !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email);
    };
    const handleClick = () => {
        console.log(`Send ${email.toLowerCase()} && ${password}`);
    };

    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <Button variant="contained" className="mr-4" color="primary" onClick={handleClickOpen}>
                Login
            </Button>
            <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
                <DialogTitle id="customized-dialog-title" onClose={handleClose}>
                    Login
                </DialogTitle>
                <DialogContent dividers>
                    <TextField
                        required
                        id="email"
                        label="Email/Phone"
                        helperText="example@example.com"
                        value={email}
                        onChange={handleChange('email')}
                        // onKeyDown={handleKeyPress}
                        error={validateEmail()}
                        margin="dense"
                        variant="outlined"
                        fullWidth
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <Mail /> <b style={{ fontSize: '30px' }}>/</b> <Phone />
                                </InputAdornment>
                            )
                        }}
                    />
                    <TextField
                        required
                        id="password"
                        label="Password"
                        helperText=""
                        value={password}
                        type="password"
                        onChange={handleChange("password")}
                        // onKeyDown={handleKeyPress}
                        margin="dense"
                        variant="outlined"
                        fullWidth
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <Lock />
                                </InputAdornment>
                            )
                        }}
                    />
                    <Button
                        fullWidth
                        id="btn_login"
                        onClick={e => handleClick()}
                        // disabled={!handleValidation()}
                        color="primary"
                        className={classes.button}
                        style={{ marginTop: "20px", textTransform: "none" }}
                        variant="contained">
                        Login
                    </Button>
                </DialogContent>
                <DialogActions style={{ placeContent: "space-evenly" }}>
                    <Typography className="text-center">Not a member yet? <Link>Sign Up</Link></Typography>
                </DialogActions>
            </Dialog>
        </div>
    );
}
