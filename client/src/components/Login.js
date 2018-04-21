import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css'
import './../scripts/animate.css'

//Renders Home Screen
export class Login extends React.Component {
  constructor(props){
    super();
  }

  //Component Content
  render() {
    return (
      <div>
        {/*Logo*/}
        <div className='animated slideInDown' id='logo-container'>
          <Link to={"/api/ping/"}>
            <p>CITY LIGHTS</p>
          </Link>
        </div>
      </div>
    )
  }
}