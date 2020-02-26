import React from 'react';
import { EditorTitle, useStyles } from './Edit.styled';
import { FormControl, TextField, InputLabel, Select, MenuItem } from '@material-ui/core';


const Edit = () => {
  const classes = useStyles();

  return (
    <>
      <header>
        <EditorTitle>Edit card</EditorTitle>
      </header>

      <FormControl className={classes.control}>
        <TextField id="standard-basic" label="Title" />
      </FormControl>

      <FormControl className={classes.control}>
        <TextField id="standard-description" label="Description" />
      </FormControl>

      <FormControl className={classes.control}>
        <InputLabel id="demo-simple-select-label">State</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={2}
          onChange={() => { }}
        >
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>

      <FormControl className={classes.control}>
        <InputLabel id="priority">Prioriy</InputLabel>
        <Select
          labelId="priority"
          id="priority"
          value={2}
          onChange={() => { }}
        >
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
    </>
  )
};

export default Edit;
