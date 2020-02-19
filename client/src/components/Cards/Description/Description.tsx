import React, { forwardRef, useState, Ref } from 'react';
import { Button, TextField } from '@material-ui/core';
import { Card, FullUpdateMutationData } from '../Cards.entities';
import { DescriptionText, EditorWrapper } from './Description.styled';
import { Add } from './Add';

interface Props {
  ref?: Ref<HTMLTextAreaElement> | null;
  change(id: string, data: Partial<FullUpdateMutationData>): void;
  item: Card;
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
    if (typeof ref === 'function') {
      return;
    }

    change(item.id, { description: ref?.current?.value ?? '' });
    setIsEditorShown(!isEditorShown);
  };

  if (!isEditorShown) {
    return item.description.length > 0
      ? <DescriptionText onClick={toggleView}>{item.description}</DescriptionText>
      : <Add onClick={toggleView} />
  }

  return (
    <EditorWrapper>
      <TextField
        multiline
        variant="filled"
        defaultValue={item.description}
        inputRef={ref}
      />

      <Button onClick={onChange}>Save</Button>
    </EditorWrapper>
  );
});
