import { makeStyles, Theme, createStyles } from '@material-ui/core';
import styled from 'styled-components';

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    control: {
      margin: '8px',
    },
  }),
);

export const EditorTitle = styled.h3`
  color: black;
`;
