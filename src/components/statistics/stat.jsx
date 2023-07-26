import Stat from '../data/statistics';

const Statistic = ({ statData }) => {
  return (
    <div>
        {/* {title && <h2>{title}</h2>} */}
    <ul>
      {statData.map(({ id, label, percentage }) => {
          return (
            <Stat
              id={id}
              label={label}
              percentage={percentage}
            />
          );
        })
      }
    </ul>
    </div>
  );
};

export default Statistic