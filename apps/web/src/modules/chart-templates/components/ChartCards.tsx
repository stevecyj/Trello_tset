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

const editFilter = () => {
  Router.push('/charts/edit-chart-filters');
};

export const ChartCards = ({chart}) => {
  return (
    <Card sx={{ cursor: 'pointer', m: 2, maxWidth: 345 }}>
      <CardMedia
        onClick={viewChart}
        component="img"
        alt="chart"
        height="140"
        image={chart.chartImage}
      />
      <CardContent onClick={viewChart}>
        <Typography gutterBottom variant="h6" component="div">
        {chart.chartName}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {chart.chartType}
        </Typography>
      </CardContent>
      <CardActions>
        <Button onClick={editFilter} size="small">Edit</Button>
      </CardActions>
    </Card>
  );
};
