import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import { FormControl, Select, MenuItem, InputLabel } from '@material-ui/core';
import { Board } from '../../Boards/Boards.entities';
import { useStyles } from './MoveDialog.styled';
import { isTypeOfString } from '../../../utils/isTypeof';

interface Props {
  boards: Board[];
  close(): void;
  isOpen: boolean;
  save(id: string): void;
}


const MoveDialog: React.FC<Props> = ({ boards, close, isOpen, save }) => {
  const classes = useStyles();
  const [id, setId] = useState<string | null>(null);

  const onChange = (evt: React.ChangeEvent<{ value: unknown }>) => {
    const id = evt.target.value;

    if (isTypeOfString(id)) {
      setId(id);
    }
  };

  const onSave = () => {
    if (isTypeOfString(id)) {
      save(id);
    }
  };

  return (
    <Dialog open={isOpen} onClose={close} aria-labelledby="form-dialog-title">
      <DialogTitle id="form-dialog-title">Select the Board to moving</DialogTitle>

      <DialogContent>
        <FormControl className={classes.formControl}>
          <InputLabel htmlFor="move-select">Change The Board</InputLabel>
          <Select
            id="move-select"
            onChange={onChange}
            value={id || ''}
          >
            {boards.map(board => (
              <MenuItem key={board.id} value={board.uid}>{board.name}</MenuItem>
            ))}
          </Select>
        </FormControl>
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

export default MoveDialog;
