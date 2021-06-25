import { TextField, Button, Typography, InputAdornment } from "@material-ui/core";
import TableContact from "../../Component/TableContact"
import CardContact from "../../Component/CardContact"
import { Topbar } from "../../Component";
 function Favorit() {
    return (
        <div >
            <Topbar/>
            Favorit
            <TableContact/>
            <CardContact/>
        </div>
    );
}
export default Favorit