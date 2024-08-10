import TextField from '@mui/material/TextField';
import  Button  from '@mui/material/Button';
import './SearchBox.css'
import { useState } from 'react';
import getWeatherInfo from './ApiCall.js';
import Alert from '@mui/material/Alert';

export default function SearchBox({updateInfo}) {
    let [city, setCity] = useState("");
    let [error, setError] = useState(false);
    
    let handleCityName = (event)=> {
        setCity(event.target.value);
    }
    let handleSubmit = async (event)=> {
        try{
            setError(false);
            event.preventDefault();
            setCity("");
            let newInfo = await getWeatherInfo(city);
            updateInfo(newInfo);
        }catch(err){
            setError(true);
        }
    }
    
    return (
        <div className='searchbox'>
            {error && <Alert severity="error" className='alert'>No such place exist in our database.</Alert>}
            <form>
                <TextField id="city" label="City Name" variant="outlined" value={city} onChange={handleCityName} required/>
                <br></br><br></br>
                <Button variant="contained" type="submit" onClick={handleSubmit}>Search</Button>
            </form>
            
        </div>
    )
}