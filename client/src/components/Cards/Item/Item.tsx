import React, { useState } from 'react';
import { Card, CardActions } from '../Cards.entities';
import { Controls, CardItem } from './Item.styled';
import { Button } from '@material-ui/core';
import { Description } from '../Description';
import { Title } from '../Title';
import { AlertDialog } from '../AlertDialog';
import { SidebarEditor } from '../../shared/SidebarEditor';
import { Edit } from '../Edit';

interface Props {
  actions: CardActions;
  item: Card;
}

const Item: React.FC<Props> = ({
  actions: { updateCard, deleteCard },
  item,
}) => {
  const [isEdit, setIsEdit] = useState(false);
  const [isAlertOpen, setIsAlertOpen] = useState(false);

  const openAlert = () => {
    setIsAlertOpen(true);
  };

  const toggleAlert = () => {
    setIsAlertOpen(!isAlertOpen);
  };

  const onDelete = () => {
    deleteCard(item.id);
  };

  return (
    <CardItem>
      <Title title={item.title} />
      <Description description={item.description}/>

      {isEdit && <SidebarEditor
        close={() => setIsEdit(!isEdit)}
        save={() => {}}
      >
        <Edit cardId={item.id} />
      </SidebarEditor>}

      <Controls>
        <Button onClick={openAlert} color="secondary" variant="outlined" size="small">Delete</Button>
        {/* TODO move styles to useStyles from material */}
        <Button onClick={() => setIsEdit(!isEdit)} variant="outlined" size="small" style={{ marginLeft: '16px' }}>Edit</Button>
      </Controls>

      {/* TODO create the state of priority editor */}
      {/* color for each of the state */}
      {/* icons for each of the state */}
      {/* <Priority /> */}
      <span>
        priority: {item.priority}
      </span>

      <AlertDialog
        isOpen={isAlertOpen}
        title="Delete card"
        description="Are you sure you want to delete the card?"
        close={toggleAlert}
        agreeAction={onDelete}
      />
    </CardItem>
  );
}

export default Item;
