import { makeStyles, Theme, createStyles } from '@material-ui/core';

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    backdrop: {
      zIndex: theme.zIndex.drawer + 1,
      color: '#fff',
    },
    form: {
      position: 'fixed',
      top: '10%',
      left: '0',
      minWidth: '400px',
      display: 'flex',
      flexDirection: 'column',
      background: '#fff',
      padding: '16px',
      border: '2px solid #aaaae3',
    },
  }),
);
