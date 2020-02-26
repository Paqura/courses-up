import React from 'react';
import { Backdrop, DialogActions, Button } from '@material-ui/core';
import { Form } from '../Form';
import { useStyles } from './SidebarEditor.styled';

interface Props {
  isShown: boolean;
  close(): void;
}

const SidebarEditor: React.FC<Props> = ({ isShown, close, children }) => {
  const classes = useStyles();

  return (
    <Backdrop className={classes.backdrop} open={isShown} onClick={close}>
      <Form className={classes.form}>

        {children}

        <DialogActions>
          <Button onClick={close} color="secondary">
            Cancel
          </Button>

          {/* STOP PROPAGATION */}
          <Button onClick={() => {}} color="primary" autoFocus>
            Agree
          </Button>
        </DialogActions>
      </Form>
    </Backdrop>
  )
};

export default SidebarEditor;
