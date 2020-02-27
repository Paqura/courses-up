import React, { MouseEvent, ReactNode } from 'react';
import { Backdrop, DialogActions, Button } from '@material-ui/core';
import { Form } from '../Form';
import { useStyles } from './SidebarEditor.styled';
import { connect } from 'react-redux';
import { RootState } from '../../../redux/configureStore';
import { FullUpdateMutationData } from '../../../entities/card';
import { ExecutionResult } from 'react-apollo';
import { FormName } from '../../../actions/forms';
import { getFormsByName } from '../../../selectors/formSelectors';

interface ReduxState {
  formData: Partial<FullUpdateMutationData>;
}

interface OwnProps {
  close(): void;
  save(formData: Partial<FullUpdateMutationData>): Promise<ExecutionResult<any>>;
  formName: FormName;
  children: ReactNode;
}

type Props = ReduxState & OwnProps;

const SidebarEditor: React.FC<Props> = ({ close, children, save, formData }) => {
  const classes = useStyles();

  const onSave = async (evt: MouseEvent) => {
    evt.stopPropagation();
    // TODO show notification -> Success | Error
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

const mapStateToProps = (state: RootState, { formName }: OwnProps) => ({
  formData: getFormsByName(state, formName),
});

export default connect(mapStateToProps)(SidebarEditor);
