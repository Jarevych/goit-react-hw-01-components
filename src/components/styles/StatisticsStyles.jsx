import styled from 'styled-components';

export const StatItem = styled.li`
  display: flex;
  flex-direction: column;
  text-align: center;
  background-color: ${(props) => randomColor()};
  font-size: 18px;
  line-height: 1.2;
  color: #FFF;
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
`
export const StatContainer = styled.div`
  display: flex;
`;
export const StatList = styled.ul`
  display: flex;
  flex-direction: row;
  padding: 0;
  `;

  const randomColor = () => {
    const randomValue = () => Math.floor(Math.random() * 255);
    return `rgb(${randomValue()}, ${randomValue()}, ${randomValue()})`;
  };