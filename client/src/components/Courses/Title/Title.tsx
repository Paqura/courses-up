import React, { useState, forwardRef, Ref } from 'react';
import { CourseTitle } from './Title.styled';
import { TextField, Button } from '@material-ui/core';
import { Course } from '../Courses.entities';
import { FullUpdateMutationData } from '../Courses';

interface Props {
  ref: Ref<HTMLInputElement> | null;
  change(id: string, data: Partial<FullUpdateMutationData>): void;
  item: Course;
}

export const Title = forwardRef<HTMLInputElement, Props>(({ change, item }, ref) => {
  const [isEditorShown, setIsEditorShown] = useState(false);

  const toggleEditor = () => {
    setIsEditorShown(!isEditorShown);
  };

  const onChangeTitle = () => {
    if (typeof ref === 'function') {
      return;
    }

    const { id } = item;
    change(id, { title: ref?.current?.value ?? '' });
    toggleEditor();
  };

  if (!isEditorShown) {
    return (
      <CourseTitle onClick={toggleEditor}>
        {item.title}
      </CourseTitle>
    );
  }

  return (
    <>
      <TextField defaultValue={item.title} inputRef={ref} />
      <Button onClick={onChangeTitle}>Save</Button>
    </>
  );
});
