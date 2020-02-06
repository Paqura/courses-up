import styled from 'styled-components';

export const Controls = styled.div`
  display: flex;
  margin-top: 16px;
`;

export const CourseTitle = styled.span`
  display: flex;
  padding: 4px;

  &:hover {
    background-color: #f8f8f8;
    cursor: text;
  }
`;

export const CourseItem = styled.li`
  padding: 16px;
  border: 1px solid;

  position: relative;
  margin-top: 16px;
`;