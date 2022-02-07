import React from 'react';

//Materials Components
import { Box, Typography, Button, Card, CardMedia, CardContent, CardActions, Chip} from '@material-ui/core'

//icons
import LocationOnIcon from '@material-ui/icons/LocationOn';
import PhoneIcon from '@material-ui/icons/Phone';
import Rating from '@material-ui/lab/Rating';

import useStyles from './styles';

const Details = ({place,selected,refProp}) => {

  const classes = useStyles();

  if(selected) refProp?.current?.scrollIntoView({behavior:"smooth", block: "start"})
  return (
    <Card elevation={6}>
      <CardMedia
        style={{height:250}}
        image={place.photo? place.photo.images.large.url : 
          '../images/img.jpeg'}
        title={place.name}
      />
      <CardContent>
        <Typography gutterBottom variant="h4">
          {place.name}
        </Typography>

        <Box display="flex" justifyContent="space-between">
          <Rating size="small" value={Number(place.rating)} readOnly /> 
          <Typography variant="subtitle1">{place.num_reviews}</Typography>
        </Box>

        <Box display="flex" justifyContent="space-between">
          <Typography variant="subtitle1">Price</Typography>
          <Typography gutterBottom variant="subtitle1">{place.price_level}</Typography>
        </Box>
        
        
        <Box display="flex" justifyContent="space-between">
          <Typography variant="subtitle1">Ranking</Typography>
          <Typography gutterBottom variant="subtitle2">{place.ranking}</Typography>
        </Box>

        {place?.awards?.map((award) => (
          <Box  my={1} display="flex" justifyContent="space-between" alignItems="center">
            <img src={award.images.small} alt={award.display_name} />
            <Typography variant="subtitle2" color="textSecondary">{award.display_name}</Typography>
          </Box>
        ))}

        {place?.cusine?.map((cuisine) => (
          <Chip key={cuisine} size="smaller" label="cuisine" className={classes.chip} />
        ))}

        {place?.address && (
          <Typography gutterBottom variant="subtitle2" color="textSecondary" className={classes.subtitle}>
          <LocationOnIcon/> {place.address}
          </Typography>
        )}

        {place?.phone && (
          <Typography gutterBottom variant="subtitle2" color="textSecondary" className={classes.subtitle}>
          <PhoneIcon/> {place.phone}
          </Typography>
        )}

        <CardActions>
          <Button size="small" color="primary" onClick={() => window.open(place.web_url,'_blank')}>
            Tr
          </Button>
          <Button size="small" color="primary" onClick={() => window.open(place.website,'_blank')}>
            Website
          </Button>
        </CardActions>
      </CardContent>
    </Card>
  );
}

export default Details;