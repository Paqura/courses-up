import { Link } from 'react-router-dom';

import styled from 'styled-components';

export const Header = styled.header`
  background-color: #f8f8f8;
  padding: 16px;

  display: flex;
  align-items: center;

  margin-bottom: 32px;
`;

export const List = styled.ul`
  padding: 0;
  margin: 0;
  list-style-type: none;

  display: flex;
`;

export const ListItem = styled.li``;

export const Linker = styled(Link)`
  text-decoration: none;
  color: #4a3434;

  padding: 8px;

  font-size: 22px;
  font-weight: medium;

  &:hover {
    background-color: #fff;
  }
`;