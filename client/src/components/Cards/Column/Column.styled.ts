import styled, { css } from 'styled-components';
import { CardState } from '../Cards.entities';

export const getHeaderStyle = (status: CardState) => ({
  [CardState.Open]: {
    backgroundColor: '#c8c8c8',
  },
  [CardState.Progress]: {
    backgroundColor: '#8383e2',
  },
  [CardState.Done]: {
    backgroundColor: '#a4e4a4',
  },
  [CardState.Archive]: {
    backgroundColor: '#f9f9f9',
  },
})[status];

export const Wrapper = styled.ul`
  margin: 0;
  padding: 0;
  list-style-type: none;
  max-width: 320px;
  height: fit-content;
`;

export const Header = styled.header<any>`
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;

  color: #4a3434;

  ${({ status }) => css`
    ${getHeaderStyle(status)}
  `}
`;

export const Title = styled.h3`
  text-align: center;
`;