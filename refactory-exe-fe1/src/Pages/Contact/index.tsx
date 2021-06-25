import { TextField, Button, Grid, IconButton } from "@material-ui/core";
import TableContact from "../../Component/TableContact";
import CardContact from "../../Component/CardContact";
import { Topbar } from "../../Component";
import AddCircleIcon from '@material-ui/icons/AddCircle';
function Contact() {
  return (
    <div style={{ backgroundColor: "#E5E5E5" }}>
      <Topbar />
      <Grid container style={{ padding: "30px" }}>
      <Grid item xs={12} sm={12} spacing={3}>
      <IconButton><AddCircleIcon style={{color:"#000"}}/></IconButton> Add Contact
          </Grid>
        <Grid item xs={12} sm={9} style={{padding:"20px"}}>
          <TableContact />
        </Grid>
        <Grid item xs={12} sm={3}  style={{padding:"20px 10px"}}>
          {" "}
          <CardContact />
        </Grid>
      </Grid>
    </div>
  );
}
export default Contact;
