import React, { useRef } from 'react'
import { Modal } from '../shared/Modal'
import { useHistory } from 'react-router-dom'
import { Form } from '../shared/Form';
import { TextField } from '@material-ui/core';
import { isTypeOfString } from '../../utils/isTypeof';
import { useDispatch, useSelector } from 'react-redux';
import { loginFormRequest } from '../../actions/login';
import { selectSession } from '../../selectors/session';

const Login = () => {
  const { goBack } = useHistory();

  const { isLoggedIn } = useSelector(selectSession);

  const nameRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const dispatch = useDispatch();

  const login = () => {
    const name = nameRef.current?.value;
    const password = passwordRef.current?.value;

    if (isTypeOfString(name) && isTypeOfString(password)) {
      dispatch(loginFormRequest({ name, password }));
    }
  };

  if (isLoggedIn) {
    goBack();
  }

  return (
    <div>
      <Modal
        isOpen
        title="Login"
        ok={login}
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

export default Login;
