import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

interface Props {
  ok(): void;
  close(): void;
  description?: string;
  isOpen: boolean;
  title: string;
}

const Modal: React.FC<Props> = ({
  ok,
  children,
  isOpen,
  description,
  close,
  title,
}) => {
  return (
    <div>
      <Dialog
        open={isOpen}
        onClose={close}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{title}</DialogTitle>

        <DialogContent>
          {description && <DialogContentText id="alert-dialog-description">{description}</DialogContentText>}

          {children}
        </DialogContent>

        <DialogActions>
          <Button onClick={close} color="secondary">
            Cancel
          </Button>

          <Button onClick={ok} color="primary" autoFocus>
            Agree
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default Modal;