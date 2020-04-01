import React, { useRef } from 'react'
import { Modal } from '../shared/Modal'
import { useHistory } from 'react-router-dom';
import { push } from 'connected-react-router';
import { Form } from '../shared/Form';
import { TextField } from '@material-ui/core';
import { isTypeOfString } from '../../utils/isTypeof';
import { useDispatch, useSelector } from 'react-redux';
import { registerFormRequest } from '../../actions/session/register';
import { selectSession } from '../../selectors/session';

// TODO add validation

interface RegisterData {
  name: string;
  password: string;
}

const Register = () => {
  const { goBack } = useHistory();

  const { hasRegister, isLoading } = useSelector(selectSession);

  const nameRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const dispatch = useDispatch();

  const redirectToLogin = () => dispatch(push('/login'));

  const register = () => {
    const name = nameRef.current?.value;
    const password = passwordRef.current?.value;

    if (isTypeOfString(name) && isTypeOfString(password)) {
      dispatch(registerFormRequest({ name, password }));
    }
  };

  if (hasRegister) {
    redirectToLogin();
  }

  return (
    <div>
      <Modal
        isOpen
        title="Register"
        ok={register}
        close={goBack}
        isLoading={isLoading}
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

