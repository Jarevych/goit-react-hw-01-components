import React from 'react';
import { StatItem } from '../styles/statsStyles';
import PropTypes from 'prop-types';

const Stats = ({ label, percentage }) => {
  return (
    <StatItem>
      <span className="label">{label}</span>
      <span className="percentage">{percentage}%</span>
    </StatItem>
  );
};

Stats.propTypes = {
  label: PropTypes.string,
  percentage: PropTypes.number,
};
export default Stats;
