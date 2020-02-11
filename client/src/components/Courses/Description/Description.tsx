import React, { forwardRef, useState, Ref } from 'react';
import { Button, TextField } from '@material-ui/core';
import { Course } from '../Courses.entities';

interface Props {
  ref?: Ref<HTMLTextAreaElement> | null;
  change(id: string, value: string): void;
  item: Course;
}

export const Description = forwardRef<HTMLTextAreaElement, Props>((
  { change, item },
  ref,
) => {
  const [isEditorShown, setIsEditorShown] = useState(false);

  const toggleView = () => {
    setIsEditorShown(!isEditorShown);
  };

  const onChange = () => {
    // странный хак, пока не понял в чём прикол
    if (typeof ref === 'function') {
      return;
    }

    change(item.id, ref?.current?.value ?? '');
    setIsEditorShown(!isEditorShown);
  };

  if (!isEditorShown) {
    return <p onClick={toggleView} style={{ height: '60px', backgroundColor: 'blue' }}>{item.description}</p>;
  }

  return (
    <>
      <TextField
        multiline
        variant="filled"
        defaultValue={item.description}
        inputRef={ref}
      />

      <Button onClick={onChange}>Save</Button>
    </>
  );
});
