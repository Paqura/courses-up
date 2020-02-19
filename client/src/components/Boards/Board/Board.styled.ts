import styled from 'styled-components';

export const BoardWrapper = styled.li`
  display: flex;
  width: 200px;
  justify-content: space-between;
  background-color: #f8f8f8;
  padding: 8px;

  &:not(:first-child) {
    margin-top: 8px;
  }
`;