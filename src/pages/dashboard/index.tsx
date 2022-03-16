import React, {useEffect, useState} from 'react';
import Layout from '../../shared/components/layout';
import { LoaderState, State } from '../../shared/interface';
import { connect } from 'react-redux';
import {API_CONFIG} from "../../shared/constants/constants";

function Dashboard() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetch(API_CONFIG.PATH.EVENTS)
      .then(res => res.json())
      .then(results => {
        setEvents(results);
      })
  }, [])

  return (
    <div className="grid grid-cols-3 gap-2 p-4">
      {events.map((event: any, idx) => (
        <div className="rounded overflow-hidden shadow-md" key={idx}>
          <img className="w-full" src="/images/card.png" alt="Sunset in the mountains" />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">{ event.name }</div>
            <p className="text-gray-700 text-base">
              { event.description }
            </p>
          </div>
          <div className="px-6 pt-4 pb-2">
            <div className="flex flex-row">
              <span>{event.category}</span>
              <span>{event.address}</span>
              <span>{event.date}</span>
            </div>
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
