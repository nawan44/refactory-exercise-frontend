import { TextField, Button, Typography, InputAdornment } from "@material-ui/core";
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import LockOpenIcon from '@material-ui/icons/LockOpen';

import '../../Assets/style/login.css'
export default function Register() {
    return (
        <div className="container-login" >
            <div className="container-login-left" >
                <div className="logo-contact">
                </div>
            </div>
            <div className="container-login-right" >
                <div className="box-login">
                    <Typography className="typography">REGISTER</Typography>
                    <TextField InputProps={{
                        className: "input-props",

                        startAdornment: (
                            <InputAdornment position="start">
                                <MailOutlineIcon style={{ color: "#fff" }} />
                            </InputAdornment>
                        ),
                    }} placeholder="Name" variant="outlined" className="textfield" />
                    <TextField InputProps={{
                        className: "input-props",

                        startAdornment: (
                            <InputAdornment position="start">
                                <MailOutlineIcon style={{ color: "#fff" }} />
                            </InputAdornment>
                        ),
                    }} placeholder="Email" variant="outlined" className="textfield" />
                    <TextField InputProps={{
                        className: "input-props",

                        startAdornment: (
                            <InputAdornment position="start">
                                <LockOpenIcon style={{ color: "#fff" }} />
                            </InputAdornment>
                        ),
                    }} placeholder="Password" variant="outlined" className="textfield" />
                    <Button className="btn-register">REGISTER</Button>
                </div>
            </div>
        </div>
    );
}