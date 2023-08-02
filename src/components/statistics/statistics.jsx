import React from 'react';
import Stats from './stats';
import { StatContainer, StatList, StatTitle } from '../styles/StatisticsStyles';
import PropTypes from 'prop-types';

const Statistics = ({ stats,title }) => {
  return (
    <StatContainer>
      {title && <StatTitle>{title}</StatTitle>}
      <StatList>
        {stats.map(({ id, label, percentage }) => {
          return <Stats id={id} label={label} percentage={percentage} />;
        })}
      </StatList>
    </StatContainer>
  );
};
Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ).isRequired,
};
export default Statistics;
