import React from 'react';


const Stat = ({ id, label, percentage }) => {
  // const  = StatData;
  return (
    <li class="item">
      <span class="label">{label}</span>
      <span class="percentage">{percentage}</span>
    </li>
  );
};
export default Stat;
