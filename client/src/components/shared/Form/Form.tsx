import React, { FormEvent } from 'react';

interface Props {
  className?: string;
  onSubmit?(evt: FormEvent): void;
}

const Form: React.FC<Props> = ({ className, children, onSubmit }) => {
  const submit = (evt: FormEvent) => {
    evt.preventDefault();

    if (typeof onSubmit === 'function') {
      onSubmit(evt);
    }
  };

  return (
    <form onSubmit={submit} className={className}>
      {children}
    </form>
  );
};

export default Form;