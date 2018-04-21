import React from 'react';
import { Link } from 'react-router-dom';
import './../scripts/animate.css';
import MapContainer from './Map.js';

//Rendersock Home Screen
export class Form extends React.Component {
  constructor(props){
    super();
  }

  componentDidMount(){
    
  }

  //Component Content
  render() {
    return (
      <div>
        <form>
          <MapContainer/>
        </form>
      </div>
    )
  }
}