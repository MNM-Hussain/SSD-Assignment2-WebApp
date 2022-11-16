import { Component } from "react";
import Box from '@mui/material/Box';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import FormControl from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import Divider from '@mui/material/Divider';


class UploadMessage extends Component{
    render() {
        return(
            <div>
                <div style={{fontSize: '25px', fontWeight: "bold", marginTop:"2%"}}>
                    <Divider textAlign="left" style={{marginTop: "2%"}}>
                        Send Messages
                    </Divider>
                </div>       
                <div style={{marginTop:"7%", marginLeft:'30%'}}>  
                    <Box
                        component="form"
                        sx={{
                            '& > :not(style)': {  width: 600, height: 350, maxWidth: '100%' },
                        }}
                        noValidate
                        autoComplete="off"
                    >
                        <Paper elevation={3}>
                            <div >                           
                                <FormControl  style={{marginTop:'10%', width: "70%"}}>
                                    <InputLabel htmlFor="outlined-adornment-amount">Description</InputLabel>
                                    <OutlinedInput
                                        // id="outlined-adornment-amount"
                                        // value={values.amount}
                                        // onChange={handleChange('amount')}
                                        label="Description"
                                    />
                                </FormControl>
                                <Stack direction="row" spacing={2} style={{marginTop: '10%', marginLeft: "47%"}}>
                                    <Button variant="contained" component="label" endIcon={<CloudUploadIcon />}>
                                        Upload
                                        <input hidden accept="image/*" multiple type="file" />
                                    </Button>
                                    <Button variant="contained" endIcon={<SendIcon />}>
                                        Send
                                    </Button>
                                </Stack>                           
                            </div>
                        </Paper>
                    </Box>
                </div>  
            </div>
        )
    }
}

export default UploadMessage;