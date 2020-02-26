import React, { MouseEvent } from 'react';
import { Backdrop, DialogActions, Button } from '@material-ui/core';
import { Form } from '../Form';
import { useStyles } from './SidebarEditor.styled';

interface Props {
  close(): void;
  // TODO
  save: any;
}

const SidebarEditor: React.FC<Props> = ({ close, children, save }) => {
  const classes = useStyles();

  const onSave = (evt: MouseEvent) => {
    evt.stopPropagation();

    // after all of actions
    save();
  };

  return (
    <Backdrop className={classes.backdrop} open={true}>
      <Form className={classes.form}>
        {children}

        <DialogActions>
          <Button onClick={close} color="secondary">
            Cancel
          </Button>

          <Button onClick={onSave} color="primary" autoFocus>
            Agree
          </Button>
        </DialogActions>
      </Form>
    </Backdrop>
  )
};

export default SidebarEditor;
