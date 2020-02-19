import React, { useState, forwardRef, Ref } from 'react';
import { CardTitle } from './Title.styled';
import { TextField, Button } from '@material-ui/core';
import { Card, FullUpdateMutationData } from '../Cards.entities';

interface Props {
  ref: Ref<HTMLInputElement> | null;
  change(id: string, data: Partial<FullUpdateMutationData>): void;
  item: Card;
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
    const title = ref?.current?.value ?? '';

    change(id, { title });
    toggleEditor();
  };

  if (!isEditorShown) {
    return (
      <CardTitle onClick={toggleEditor}>
        {item.title}
      </CardTitle>
    );
  }

  return (
    <>
      <TextField defaultValue={item.title} inputRef={ref} />
      <Button onClick={onChangeTitle}>Save</Button>
    </>
  );
});
