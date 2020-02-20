import React, { useRef } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import { Board } from '../Boards.entities';

interface Props {
  isOpen: boolean;
  close(): void;
  save(name: string): void;

  defaults?: Partial<Board>;
}

const FormDialog: React.FC<Props> = ({ close, isOpen, save, defaults }) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const onSave = () => {
    const boardName = inputRef?.current?.value ?? '';
    save(boardName);
  };

  const title = defaults ? 'Update board' : 'Create board';

  return (
    <Dialog open={isOpen} onClose={close} aria-labelledby="form-dialog-title">
      <DialogTitle id="form-dialog-title">{title}</DialogTitle>
      <DialogContent>
        <TextField
          autoFocus
          margin="dense"
          id="name"
          label="Board name"
          type="text"
          fullWidth
          inputRef={inputRef}
          defaultValue={defaults?.name}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={close} color="primary">
          Cancel
        </Button>
        <Button onClick={onSave} color="primary">
          Save
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default FormDialog;
