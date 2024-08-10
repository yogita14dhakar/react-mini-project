import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import './InfoBox.css';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import WbSunnyIcon from '@mui/icons-material/WbSunny';

export default function InfoBox({info}) {
    
    return(
        <div className="infobox">
            <div className='cardContainer'>
            <Card sx={{ maxWidth: 345 }}>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {info.city} {info.humidity > 80 ? <ThunderstormIcon/> : info.temp > 15 ? <WbSunnyIcon/> : <AcUnitIcon/>}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" component={"span"}>
                        <p>Temperature: {info.temp}</p>
                        <p>Humidity: {info.humidity}</p>
                        <p>Minimum Temperature: {info.tempMin}</p>
                        <p>Maximum Temperature: {info.tempMax}</p>
                        <p>The weather can be described as {info.weather} and feels like {info.feelsLike}</p>
                    </Typography>
                </CardContent>
            </Card>
            </div>
            
        </div>
    )
}