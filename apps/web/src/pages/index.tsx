import { ChartCards } from '../modules/chart-templates/components/ChartCards';
import { NavigationMenu } from '../modules/chart-templates/components/NavigationMenu';

export const IndexPage = () => {
  return (
    <div>
      <NavigationMenu></NavigationMenu>
      <ChartCards></ChartCards>
    </div>
  );
};

export default IndexPage;
