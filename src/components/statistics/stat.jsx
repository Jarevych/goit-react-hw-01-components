import Stat from './statistics';
import { StatContainer, StatList } from '../styles/StatisticsStyles';
import PropTypes from "prop-types";

const Statistic = ({ statData }) => {
  return (
    <StatContainer>
      <StatList>
        {statData.map(({ id, label, percentage }) => {
          return <Stat id={id} label={label} percentage={percentage} />;
        })}
      </StatList>
    </StatContainer>
  );
};
Statistic.propTypes = {
  id: PropTypes.number,
  label: PropTypes.string,
  percentage: PropTypes.number,
}
export default Statistic;
