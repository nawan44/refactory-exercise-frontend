import { TextField, Button } from "@material-ui/core";
import './login.css'
export default function Login() {
    return (
        <div className="container-login" >
            <div className="container-login-left" >
                <div className="logo-contact">

                </div>
            </div>
            <div className="container-login-right" >
                <p>LOGIN</p>

                <TextField variant="outlined" className="textfiel-name" />
                <TextField variant="outlined" className="textfiel-password" />
                <Button className="btn-login">LOGIN</Button>
                <Button className="btn-register">REGISTER</Button>

            </div>
        </div>
    );
}