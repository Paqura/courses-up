import React from 'react';
import { useHistory } from 'react-router-dom';
import { Button } from '@material-ui/core';

const GoBack = () => {
  const { goBack } = useHistory();
  return <Button onClick={goBack}>Go back</Button>
};

export default GoBack;
