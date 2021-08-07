
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';
import {
    Avatar,
    Button
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from '../auth/login';
// import SignUp from '../auth/SignUp';
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
    avatar: {
        height: "100%",
        borderRadius: 0,
    },
}))
function Header() {
    const classes = useStyles();
    return (
        <>
            <Navbar bg="warning" expand="lg">
                <Navbar.Brand href="#home">
                    <Avatar
                        src="assets/images/logo/mangalmurthi.png"
                        className={classes.avatar}
                    />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <NavDropdown title="Home" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title="Products" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    {/* <SignUp /> */}
                    <Link to="/signup" >
                        <Button variant="contained" className="mr-4" color="primary" >
                            Sign Up
                        </Button>
                    </Link>
                    <Login />
                </Navbar.Collapse>
            </Navbar>
        </>
    )
}

export default Header