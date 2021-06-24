import { TextField, Button, Typography, InputAdornment } from "@material-ui/core";
import TableContact from "../../Component/TableContact"
import CardContact from "../../Component/CardContact"

 function Contact() {
    return (
        <div className="container-dashboard" >
            Contact

            <TableContact/>
            <CardContact/>

        </div>
    );
}
export default Contact