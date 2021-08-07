import React, { Fragment, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
    Card,
    CardActions,
    CardContent,
    Button,
    TextField,
    CardHeader,
    Typography
} from "@material-ui/core";
import { Grid } from "@material-ui/core";

const styles = makeStyles(theme => ({
    card: {
        minWidth: 275,
        margin: "20px 0px",
        border: "2px solid gray",
        '& .MuiCardHeader-title': {
            marginLeft: 15
        },
        '& .MuiTypography-root': {
            marginLeft: 15
        }
    },
    extendedIcon: {
        marginRight: "10px"
    },
    action: {
        marginLeft: 23
    }
}));

function SignUp() {
    const classes = styles();
    const [open, setOpen] = useState(false);
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [userInfo, setUserInfo] = useState({});
    const handleChange = name => ({ target: { value } }) =>
        name === "email" ? setEmail(value) : setPassword(value)

    const handleValidation = () => {
        return email.length > 0 && !validateEmail() && password.length > 4;
    };

    const handleKeyPress = e => {
        if (/enter/gi.test(e.key) && handleValidation()) {
            handleClick();
        }
    };

    const handleClick = () => {
        console.log(`Send ${email.toLowerCase()} && ${password}`);
    };

    const validateEmail = () => {
        if (email.length < 1) return false;
        return !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email);
    };

    return (
        <Fragment>
            <Grid
                container
                spacing={0}
                alignItems="center"
                justify="center"
                style={{ minHeight: "90vh" }}>
                <Grid item xs={10} sm={4}>
                    <Card className={classes.card}>
                        <CardHeader
                            title="Sign Up"
                        />
                        <CardContent>
                            <Typography >Please fill in this form to create an account</Typography>
                            <div className="d-flex">
                                <TextField
                                    required
                                    id="fName"
                                    className="inputField"
                                    style={{ marginRight: "10px" }}
                                    label="First Name"
                                    value={userInfo.fName}
                                    onChange={handleChange('fName')}
                                    onKeyDown={handleKeyPress}
                                    margin="dense"
                                    variant="outlined"
                                    fullWidth
                                />
                                <TextField
                                    required
                                    id="lName"
                                    className="inputField"
                                    label="Last Name"
                                    value={userInfo.lName}
                                    onChange={handleChange('lName')}
                                    onKeyDown={handleKeyPress}
                                    error={validateEmail()}
                                    margin="dense"
                                    variant="outlined"
                                    fullWidth
                                />
                            </div>
                            <TextField
                                required
                                id="phoneNo"
                                className="inputField"
                                label="phoneNo"
                                value={userInfo.phoneNo}
                                onChange={handleChange('phoneNo')}
                                onKeyDown={handleKeyPress}
                                error={validateEmail()}
                                margin="dense"
                                variant="outlined"
                                fullWidth
                            />
                            <TextField
                                required
                                id="email"
                                className="inputField"
                                label="Email"
                                value={userInfo.email}
                                onChange={handleChange('email')}
                                onKeyDown={handleKeyPress}
                                error={validateEmail()}
                                margin="dense"
                                variant="outlined"
                                fullWidth
                            />
                            <TextField
                                required
                                id="password"
                                className="inputField"
                                label="Password"
                                value={userInfo.password}
                                type="password"
                                onChange={handleChange("password")}
                                onKeyDown={handleKeyPress}
                                margin="dense"
                                variant="outlined"
                                fullWidth
                            />
                            <TextField
                                required
                                id="cPassword"
                                className="inputField"
                                label="Confirm Password"
                                value={userInfo.cPassword}
                                type="password"
                                onChange={handleChange("cPassword")}
                                onKeyDown={handleKeyPress}
                                margin="dense"
                                variant="outlined"
                                fullWidth
                            />
                        </CardContent>
                        <CardActions className={classes.action}>
                            <Button
                                id="btn_login"
                                className="inputField"
                                onClick={e => handleClick()}
                                disabled={!handleValidation()}
                                color="primary"
                                className={classes.button}
                                variant="contained">
                                Signup
                            </Button>
                        </CardActions>
                    </Card>
                </Grid>
            </Grid >
        </Fragment >
    );
}
export default SignUp;
