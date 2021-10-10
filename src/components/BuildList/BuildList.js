import BuildCard from '../BuildCard/BuildCard';
import Button from '../Button/Button';
import fakeBuilds from '../../fake-data';

function BuildList({ builds }) {
  return (
    <div className="build-list">
      {fakeBuilds.map((build) => (
        <BuildCard build={build}></BuildCard>
      ))}
      <Button text="Show more" size="s" color="control" />
    </div>
  );
}

export default BuildList;
