import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import WbSunnyIcon from '@mui/icons-material/WbSunny';

const data = ({data}) => {

  let Cold_URL ="https://images.unsplash.com/photo-1542601098-8fc114e148e2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHdpbnRlcnxlbnwwfHwwfHx8MA%3D%3D";


  let Rain_URL ="https://images.unsplash.com/photo-1501691223387-dd0500403074?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cmFpbmx5fGVufDB8fDB8fHww";


  let Hot_URL ="https://images.unsplash.com/photo-1419833173245-f59e1b93f9ee?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

  return (
    <div className='mt-3 text-center  text-capitalize' >
    
      <div className='d-flex justify-content-center'>
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
          sx={{ height: 190 }}
          image={
            data.humidity > 80 
            ? Rain_URL 
            : data.temp > 15 
            ? Hot_URL 
            : Cold_URL
          } 
          title="green iguana"
        />

        <CardContent>
          <Typography gutterBottom variant="h5" component={"div"}>
          {data.city }
          {
            data.humidity > 80 
            ? <ThunderstormIcon/>
            : data.temp > 15 
            ?<WbSunnyIcon/>
            : <AcUnitIcon/>
          } 
          </Typography>
          <Typography variant="body2" color="text.secondary" component={"span"} className='lh-lg  '>
          <p>Humidity ={data.humidity}</p>
          <p>Temperature ={data.temp}&deg;C</p>
          <p>Min Temperature ={data. temp_min}&deg;C</p>
          <p>Max Temperature ={data. temp_max}&deg;C</p>
          <p>The weather can be described as  <b><i>{data.weather}</i></b> and feels like = {data. feels_like }&deg;C</p>
          </Typography>
        </CardContent>
      </Card>
      </div>
    </div>
  )
}

export default data
