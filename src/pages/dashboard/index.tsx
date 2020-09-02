import React from 'react';
import Layout from '../../shared/components/layout';
import { LoaderState, State } from '../../shared/interface';
import { connect } from 'react-redux';

function Dashboard() {
  return (
    <React.Fragment>
      <h1 className="text-green font-medium text-large text-center w-full">
        Welcome to <a href="/">Your Dashboard!</a>
      </h1>
      <h2 className="font-medium text-blue">
        Start by designing your layout in: <code>src/shared/components/layout/index.tsx</code>
      </h2>
      <h3>
        You can utilize both Material-UI and Styled components,
        both are configured for you consumption.
      </h3>
    </React.Fragment>
  );
}


// let this component use the shared layout defined
Dashboard.Layout = Layout;

const mapStateToProps = (state: State): LoaderState => ({
  ...state.common.loader
});

// connect<StateProps, DispatchProps, OwnProps, DefaultStateProps>
export default connect<LoaderState, {}, {}, State>(mapStateToProps)(Dashboard);

export async function getServerSideProps(props: any) {
  // you can do requests to fetch data that must exist before your components load, and also
  // return default props
  return {
    props: {}
  };
}
