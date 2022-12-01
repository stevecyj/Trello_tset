import Box from '@mui/material/Box';
import { chartDataForUsers } from '../data/data-charts-of-user';
import { ChartCards } from '../modules/chart-templates/components/ChartCards';
import { NavigationMenu } from '../modules/chart-templates/components/NavigationMenu';

export const IndexPage = () => {
  return (
    <div>
      <NavigationMenu />
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row'
        }}
      >
      {chartDataForUsers.map(eachChart =>
        <ChartCards chart={eachChart}></ChartCards>
      )}
      </Box>
      
    </div>
  );
};

export default IndexPage;
