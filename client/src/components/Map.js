import React from 'react';

import {GoogleApiWrapper} from 'google-maps-react';

export class MapContainer extends React.Component {
  render() {
    if (!this.props.loaded) {
      return <div>Loading...</div>
    }
    return (
      <div>
        <Map google={this.props.google} />
      </div>
    )
  }
}

export default GoogleApiWrapper({
  apiKey: ('AIzaSyB5SgZfGfZy-pL42lgqWnq-FehmUxbyXEU')
})(MapContainer)