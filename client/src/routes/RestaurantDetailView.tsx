import {useParams} from 'react-router-dom';

const RestaurantDetailView: React.FC = (): JSX.Element => {
  const params = useParams();
  return <>{`Restaurant ID "${params.id}"`}</>;
};

export default RestaurantDetailView;