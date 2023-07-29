import Stat from '../data/statistics';
import styled from 'styled-components';

const StatContainer = styled.div`
  display: flex;
`;
const StatList = styled.ul`
  display: flex;
  flex-direction: row;
  padding: 0;
  `;

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

export default Statistic;
