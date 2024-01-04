import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Box, CardActionArea } from '@mui/material';

import toucan1 from './components/Navbar/toucan.jpg';
import iguana from './components/Navbar/iguana.jpg';
import parrot from './components/Navbar/download.jpg';



const cards= () => {
    return(
<div>
    
    <Box sx={{
        display: 'flex',
        justifyContent: 'left',
        p: 2,
        m: 2,
        bgcolor: 'background.paper',
        borderRadius: 1,
      }}>
            
            
    <Stack direction="row" spacing={2}>
      
    
    <div>  
    <Card sx={{ maxWidth: 245 }  }>
    <CardActionArea>
      <CardMedia
        component="img"
        height="140"
        image= {iguana}                //"/static/images/cards/contemplative-reptile.jpg"
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Lizard
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
    </CardActionArea>
  </Card>
    </div>


    <div>
    <Card sx={{ maxWidth: 245 }}>
    <CardActionArea>
      <CardMedia
        component="img"
        height="140"
        image= {toucan1}                //"/static/images/cards/contemplative-reptile.jpg"
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Toucan
        </Typography>
        <Typography variant="body2" color="text.secondary">
        Toucans are Neotropical members of the near passerine bird family Ramphastidae. 
        The Ramphastidae are most closely related to the American barbets.
         
        </Typography>
      </CardContent>
    </CardActionArea>
  </Card>
    </div>
    </Stack>
    </Box> 
   </div>

    )

      }
      export default cards;
