import React, { Component } from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import LaunchItems from './LaunchItems';


const LAUNCHES_QUERY = gql`
  query LaunchesQuery{
    launches{
        flight_number
        mission_name
        launch_year
        launch_date_local
        launch_success
    }
  }
`

export class Launches extends Component {
  render() {
    return(
     <React.Fragment>
      <div>
        <h1 className='display-4 my-3'>Launches</h1>
        <Query query={LAUNCHES_QUERY}>
          {
            ({ loading, error, data }) => {
              if(loading) return <h4>Loading...</h4>
              if(error) console.log(error)
              

              return <React.Fragment> 
                {
                  data.launches.map(launch => {
                    <LaunchItems key={launch.flight_number} />
                  })
                }
              </React.Fragment>
            }
          }
        </Query>
      </div>
      </React.Fragment>  
    )
  }
}

export default Launches;