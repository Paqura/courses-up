import styled from 'styled-components';
import { CourseStatus } from '../Courses.entities';
import { getStatusColor } from './Item.utils';

interface ItemStatus {
  status: CourseStatus;
}

export const Status = styled.span<ItemStatus>`
  color: #ffffff;
  background-color: ${({ status }) => getStatusColor(status)};
  padding: 4px 8px;
`;

export const Controls = styled.div`
  display: flex;
`;

export const CourseItem = styled.li`
  padding: 16px;
  box-shadow: 1px 8px 13px 2px #0000004d;

  &:not(:last-child) {
    margin-bottom: 16px;
  }
`;