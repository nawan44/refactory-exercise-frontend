import { TextField, Button, Typography, InputAdornment } from "@material-ui/core";
import TableContact from "../../Component/TableContact"
import CardContact from "../../Component/CardContact"
 function Favorit() {
    return (
        <div className="container-dashboard" >
            Favorit
            <TableContact/>
            <CardContact/>
        </div>
    );
}
export default Favorit