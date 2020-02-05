import React, { FormEvent } from 'react';

interface Props {
  onSubmit?(evt: FormEvent): void;
}

const Form: React.FC<Props> = ({ children, onSubmit }) => {
  const submit = (evt: FormEvent) => {
    evt.preventDefault();

    if (typeof onSubmit === 'function') {
      onSubmit(evt);
    }
  };

  return (
    <form onSubmit={submit}>
      {children}
    </form>
  );
};

export default Form;