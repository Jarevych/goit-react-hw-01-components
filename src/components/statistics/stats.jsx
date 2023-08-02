import React from 'react';
import { StatItem } from '../styles/StatisticsStyles'
import PropTypes from "prop-types";

const Stats = ({ label, percentage, title }) => {
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
  title: PropTypes.string,
}
export default Stats;
