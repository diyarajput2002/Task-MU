
import { Card, CardContent, CardMedia, Typography } from "@mui/material";

const CardItem = ({ title, description, image }) => (
  <Card sx={{ maxWidth: 345, m: 2 }}>
    <CardMedia component="img" height="140" image={image} alt={title} />
    <CardContent>
      <Typography variant="h6">{title}</Typography>
      <Typography variant="body2" color="textSecondary">
        {description}
      </Typography>
    </CardContent>
  </Card>
);

export default CardItem;
