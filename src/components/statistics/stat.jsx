import Stat from '../data/statistics';

const Statistic = ({ statData }) => {
  return (
    <div>
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