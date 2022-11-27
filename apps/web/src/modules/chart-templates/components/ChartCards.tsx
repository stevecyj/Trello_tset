import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Router from 'next/router';

const viewChart = () => {
  Router.push('/charts/monthly-created-cards-group-by-label');
};

export const ChartCards = () => {
  return (
    <Card sx={{ cursor: 'pointer', m: 2, maxWidth: 345 }}>
      <CardMedia
        onClick={viewChart}
        component="img"
        alt="chart"
        height="140"
        image="https://chartio.com/assets/9bfb20/tutorials/charts/stacked-bar-charts/073137bf11f1c2226f68c3188128e28d66115622dcdecc9bc208a6d4117f53e8/stacked-bar-example-1.png"
      />
      <CardContent onClick={viewChart}>
        <Typography gutterBottom variant="h6" component="div">
          Cards created monthly (Grouped By Label)
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Stacked Bar Chart
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Edit</Button>
      </CardActions>
    </Card>
  );
};
