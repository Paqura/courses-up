import styled from 'styled-components';

interface ItemStatus {
  status: string;
}

export const Status = styled.span<ItemStatus>`
  background-color: ${props => props.status === 'progress' ? 'red' : 'blue'};
`;