import BuildCard from '../BuildCard/BuildCard';
import Button from '../Button/Button';
import fakeBuilds from '../../fake-data';
import './BuildList.css';

function BuildList({ builds }) {
  return (
    <div className="build-list">
      {fakeBuilds.map((build) => (
        <BuildCard build={build}></BuildCard>
      ))}
      <div className="btn-more__wrapper">
        <Button text="Show more" size="s" color="control" />
      </div>
    </div>
  );
}

export default BuildList;
