import React from 'react';
import { StatItem } from '../styles/StatisticsStyles'
import PropTypes from "prop-types";

const Stat = ({ label, percentage }) => {
  return (
    <StatItem>
      <span class="label">{label}</span>
      <span class="percentage">{percentage}%</span>
    </StatItem>
  );
};

Stat.propTypes = {
  label: PropTypes.string,
  percentage: PropTypes.number,
}
export default Stat;
