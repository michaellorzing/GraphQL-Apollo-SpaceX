import React, { Component } from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import { Link } from 'react-router-dom';
import classNames from 'classnames';

const LAUNCH_QUERY=gql`
  query LaunchQuery($flight_number: Int!) {
    launch(flight_number: $flight_number){
        flight_number
        mission_name
        launch_year
        launch_success
        launch_date_local
        rocket {
            rocket_id
            rocket_name
            rocket_type
        }
    }
  }
`;

export class Launch extends Component{
  render() {
    let { flight_number } = this.props.match.params;
    console.log(flight_number)
    flight_number = parseInt(flight_number);
    return(
      <React.Fragment>
        <Query query={LAUNCH_QUERY} variable={{ flight_number }}>
          {
            ({ loading, error, data }) => {
              if (loading) return <h4>Loading..</h4>
              if (error) console.log(error)
              console.log(data)

              return <h1>Test</h1>
            }
          }
        </Query>
      </React.Fragment>
    )
  }
}

export default Launch;