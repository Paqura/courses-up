import React, { Ref, forwardRef } from 'react';

interface Props {
  ref?: Ref<HTMLInputElement>;
  type?: string;
  placeholder?: string;
}

const Field: React.FC<Props> = forwardRef(
  ({
    placeholder = '',
    type = 'text',
  },
  ref: Ref<HTMLInputElement>
) => {
  return (
    <input
      ref={ref}
      type={type}
      placeholder={placeholder}
    />
  );
});

export default Field;