import React from 'react';
import Layout from '../../shared/components/layout';
import { LoaderState, State } from '../../shared/interface';
import { connect } from 'react-redux';

function Dashboard() {
  const cards = new Array(6).fill(0);

  return (
    <div className="grid grid-cols-3 gap-2 p-4">
      {cards.map((c, idx) => (
        <div className="rounded overflow-hidden shadow-md" key={idx}>
          <img className="w-full" src="/images/card.png" alt="Sunset in the mountains" />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
            <p className="text-gray-700 text-base">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla!
              Maiores et perferendis eaque, exercitationem praesentium nihil.
            </p>
          </div>
          <div className="px-6 pt-4 pb-2">
            <span
              className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
            <span
              className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
          </div>
        </div>
      ))}
    </div>
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
