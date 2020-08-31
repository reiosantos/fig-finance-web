import React from 'react';
import { connect } from 'react-redux';
import { LoaderState, State } from '../../interface';
import CircularIntegration from '../../components/spinner';

/**
 * Notification - this component uses **MUI Snack bar** to show notification
 * whenever it receives a message from props, and a flag, to toggle it's state,
 * it adds a notification to Snackbar
 * depending on notification type
 * @param props
 */
const PageLoader: React.FC<LoaderState> = (props: LoaderState) => {
  const { loading, success } = props;

  return (
    <React.Fragment>
      <CircularIntegration loading={loading} success={success}/>
    </React.Fragment>
  );
};

const mapStateToProps = (state: State): LoaderState => ({
  ...state.common.loader
});

// connect<StateProps, DispatchProps, OwnProps, DefaultStateProps>
export default connect<LoaderState, {}, {}, State>(mapStateToProps)(PageLoader);
