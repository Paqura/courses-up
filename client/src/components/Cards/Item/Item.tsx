import React, { useState } from 'react';
import { Card, CardActions } from '../Cards.entities';
import { Controls, CardItem } from './Item.styled';
import { Button } from '@material-ui/core';
import { Description } from '../../shared/Description';
import { Title } from '../../shared/Title';
import { Modal } from '../../shared/Modal';
import { SidebarEditor } from '../../shared/SidebarEditor';
import { Edit } from '../Edit';
import { useMutation } from 'react-apollo';
import { UPDATE_CARD } from '../graphql/mutations/updateCard';
import { FormName } from '../../../actions/forms';

interface Props {
  actions: CardActions;
  item: Card;
}

const Item: React.FC<Props> = ({
  actions: { deleteCard },
  item,
}) => {
  const [isEdit, setIsEdit] = useState(false);
  const [isAlertOpen, setIsAlertOpen] = useState(false);
  const [updateCardMutation] = useMutation(UPDATE_CARD);

  const openAlert = () => {
    setIsAlertOpen(true);
  };

  const toggleAlert = () => {
    setIsAlertOpen(!isAlertOpen);
  };

  const onDelete = () => {
    deleteCard(item.id);
  };

  const onUpdate = (data: any) => {
    return updateCardMutation({
      variables: {
        data,
        id: { id: item.id }
      },
    });
  };

  return (
    <CardItem>
      <Title title={item.title} />
      <Description description={item.description}/>

      {isEdit && <SidebarEditor
        close={() => setIsEdit(!isEdit)}
        save={onUpdate}
        formName={FormName.Card}
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

      <Modal
        isOpen={isAlertOpen}
        title="Delete card"
        description="Are you sure you want to delete the card?"
        ok={onDelete}
        close={toggleAlert}
      />
    </CardItem>
  );
}

export default Item;
