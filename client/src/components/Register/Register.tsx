import React, { useRef } from 'react'
import { Modal } from '../shared/Modal'
import { useHistory } from 'react-router-dom'
import { Form } from '../shared/Form';
import { TextField } from '@material-ui/core';
import { isTypeOfString } from '../../utils/isTypeof';

// TODO add validation

interface RegisterData {
  name: string;
  password: string;
}

const Register = () => {
  const { goBack } = useHistory();

  const nameRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const register = () => {
    const name = nameRef.current?.value;
    const password = passwordRef.current?.value;

    if (isTypeOfString(name) && isTypeOfString(password)) {
      // registerRequest -> to server request
    }
  };

  return (
    <div>
      <Modal
        isOpen
        title="Register"
        ok={register}
        close={goBack}
      >
        <Form>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Name"
            type="text"
            fullWidth
            inputRef={nameRef}
          />

          <TextField
            margin="dense"
            id="password"
            label="Password"
            type="password"
            fullWidth
            inputRef={passwordRef}
          />
        </Form>
      </Modal>
    </div>
  )
}

export default Register;

