import './BuildCard.css';

function Card({ build }) {
  return (
    <div className="card">
      <span className={`icon icon_size_l icon_${build.status}`} />
      <div className="first-block">
        <span className={`build__id ${build.status}`}>#{build.id}</span>
        <span className="build__message">{build.message}</span>
      </div>
      <div className="second-block">
        <span className="build__commit-info">
          <span className="icon icon_size_m icon_commit label__icon" />
          <span className="build__branch">{build.branch}</span>
          <span className="build__commit">{build.commit}</span>
        </span>

        <span className="build__author">
          <span className="icon icon_size_m icon_user label__icon" />
          {build.author}
        </span>
      </div>
      <div className="third-block">
        <span className="build__date">
          <span className="icon icon_size_m icon_calendar label__icon" />
          {build.date}
        </span>
        <span className="build__time">
          <span className="icon icon_size_m icon_stopwatch label__icon" />
          {build.time}
        </span>
      </div>
    </div>
  );
}

export default Card;
