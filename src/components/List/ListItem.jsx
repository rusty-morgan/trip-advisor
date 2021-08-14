import React from "react";
import { Box, Typography, Card, CardMedia, CardContent, CardActions, Chip, Button } from "@material-ui/core";
import { Rating } from "@material-ui/lab";
import { LocationOn } from "@material-ui/icons";


const ListItem = ({ place }) => {
console.log(place);
    return (
        <Card elevation={6}>
            {
                (place.photo
                ?
                    <CardMedia 
                        style={{height: '350px'}}
                        image={place.photo.images.large.url}
                        title={place.name}
                    />
                :
                    null)
            }
            
            <CardContent>
                <Typography gutterBottom variant="h5">{place.name}</Typography>
                {place.address && (
                <Typography gutterBottom variant="body2" color="textSecondary">
                    <LocationOn />{place.address}
                </Typography>
                )}
                <Box display="flex" justifyContent="space-between">
                    <Typography variant="subtitle2">Price</Typography>
                    <Typography variant="subtitle2">{place.price_level}</Typography>
                </Box>
                <Box display="flex" justifyContent="space-between">
                    <Typography variant="subtitle2">Ranking</Typography>
                    <Typography variant="subtitle2">{place.ranking}</Typography>
                </Box>
                {place?.cuisine?.map(({name})=>(
                    <Chip style={{marginRight: '5px', marginBottom: '5px'}} key={name} size="small" label={name} />
                ))}
                <CardActions>
                    <Button size="small" color="primary" onClick={() => window.open(place.web_url, '_blank')}>
                        Trip Advisor
                    </Button>
                    <Button size="small" color="primary" onClick={() => window.open(place.website, '_blank')}>
                        Website
                    </Button>
                </CardActions>
            </CardContent>
        </Card>
        
    )
}

export default ListItem;