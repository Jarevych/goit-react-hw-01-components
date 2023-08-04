import styled from 'styled-components';

export const StatItem = styled.li`
  display: flex;
  flex-direction: column;
  text-align: center;
  background-color: ${props => randomColor()};
  font-size: 18px;
  line-height: 1.2;
  color: #fff;
  padding: 10px 15px;
  width: 60px;
  .label {
    font-size: 16px;
    margin-bottom: 10px;
  }
  .quantity {
    font-size: 24px;
    font-weight: bold;
  }
`;
const randomColor = () => {
  const randomValue = () => Math.floor(Math.random() * 255);
  return `rgb(${randomValue()}, ${randomValue()}, ${randomValue()})`;
};
