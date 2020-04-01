import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

interface Props {
  close(): void;
  description?: string;
  isLoading?: boolean;
  isOpen: boolean;
  ok(): void;
  title: string;
}

const Modal: React.FC<Props> = ({
  children,
  close,
  description,
  isOpen,
  ok,
  title,
  isLoading = false,
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
          <Button onClick={close} color="secondary" disabled={isLoading}>
            Cancel
          </Button>

          <Button onClick={ok} color="primary" autoFocus disabled={isLoading}>
            Agree
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default Modal;