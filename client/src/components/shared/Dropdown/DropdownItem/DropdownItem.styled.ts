import styled from 'styled-components';

export const GenericDropdownItem = styled.li`
  padding: 8px;
  background: #d3dbe5;

  &:not(:last-child) {
    border-bottom: 1px solid;
  }

  &:hover {
    background: #ffffff;
  }
`;