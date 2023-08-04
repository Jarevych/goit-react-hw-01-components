import styled from 'styled-components';

export const ProfileContainer = styled.div`
  display: flex;
  width: 300px;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-family: Roboto, sans-serif;
  background-color: #fFF;
  border-radius: 8px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
`;

export const ProfileBlock = styled.div`
  display: flex;
  width: 260px;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-family: Arial, sans-serif;
  background-color: #fFF;
  border-radius: 8px;
  padding: 20px;
`

export const Avatar = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  margin-bottom: 10px;
`;

export const Name = styled.p`
  font-size: 24px;
  font-weight: bold;
  margin: 0;
`;

export const Tag = styled.p`
  font-size: 16px;
  color: #666;
  margin: 0;
`;

export const Location = styled.p`
  font-size: 16px;
  margin: 10px 0;
`;

export const StatsList = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  font-size: 0;
  background-color: #e5e7eb;
`;

export const StatItem = styled.li`
  width: 98px;
  padding: 10px 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  border: 1px solid #cbd5e1;

  .label {
    font-size: 16px;
    color: #666;
  }

  .quantity {
    font-size: 24px;
    font-weight: bold;
  }
`;