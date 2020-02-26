import React, { MouseEvent, ReactNode } from 'react';
import { Backdrop, DialogActions, Button } from '@material-ui/core';
import { Form } from '../Form';
import { useStyles } from './SidebarEditor.styled';
import { connect } from 'react-redux';
import { RootState } from '../../../redux/configureStore';
import { FullUpdateMutationData } from '../../Cards/Cards.entities';
import { ExecutionResult } from 'react-apollo';

interface ReduxState {
  formData: Partial<FullUpdateMutationData>;
}

interface OwnProps {
  close(): void;
  save(formData: Partial<FullUpdateMutationData>): Promise<ExecutionResult<any>>;
  formName: string;
  children: ReactNode;
}

type Props = ReduxState & OwnProps;

const SidebarEditor: React.FC<Props> = ({ close, children, save, formData }) => {
  const classes = useStyles();

  const onSave = (evt: MouseEvent) => {
    evt.stopPropagation();

    save(formData).then(close);
  };

  return (
    <Backdrop className={classes.backdrop} open={true}>
      <Form className={classes.form}>
        {children}

        <DialogActions>
          <Button onClick={close} color="secondary">
            Cancel
          </Button>

          <Button onClick={onSave} color="primary" autoFocus>
            Agree
          </Button>
        </DialogActions>
      </Form>
    </Backdrop>
  )
};

export default connect((state: RootState, ownProps: OwnProps) => ({
  // @ts-ignore
  formData: state.forms[ownProps.formName],
}))(SidebarEditor);
