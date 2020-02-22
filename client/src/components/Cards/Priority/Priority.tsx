import React from 'react'
import { FormControl, FormLabel, RadioGroup, FormControlLabel, Radio, makeStyles, Theme, createStyles } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    formControl: {
      margin: theme.spacing(3),
    },
  }),
);

const Priority = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState('very low');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue((event.target as HTMLInputElement).value);
  };

  return (
    <FormControl component="fieldset" className={classes.formControl}>
      <FormLabel component="legend">Priority</FormLabel>

      <RadioGroup aria-label="priority" name="priority" value={value} onChange={handleChange}>
        <FormControlLabel value="very low" control={<Radio />} label="Very low" />
        <FormControlLabel value="low" control={<Radio />} label="Low" />
        <FormControlLabel value="hight" control={<Radio />} label="Hight" />
      </RadioGroup>
    </FormControl>
  )
};

export default Priority;
