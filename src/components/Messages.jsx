import { Component } from "react";
import Divider from '@mui/material/Divider';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import DeleteIcon from '@mui/icons-material/Delete';

class Messages extends Component{
    render() {
        return(
            <div>
                <div style={{fontSize: '25px', fontWeight: "bold", marginTop:"2%"}}>
                    <Divider textAlign="left" style={{marginTop: "2%"}}>
                        Retreive Messages
                    </Divider>
                </div>

                <div style={{marginTop: '6%', marginBottom: '5%', marginLeft: '10%'}}>
                    <Card sx={{ maxWidth: 945 }} elevation={3}>
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                Lizard
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Lizards are a widespread group of squamate reptiles, with over 6,000
                                species, ranging across all continents except Antarctica
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button variant="contained" startIcon={<DeleteIcon />} style={{background: 'red', marginLeft:"45%", marginBottom:"2%"}}>
                                Delete
                            </Button>
                        </CardActions>
                    </Card>  
                </div>    

            </div>
        )
    }
}

export default Messages;