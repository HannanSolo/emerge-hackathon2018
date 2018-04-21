import React from 'react';
import {Link} from 'react-router-dom';
import logo from '../logo_black_green.svg';
import '../styles/Home.css'
import '../styles/animate.css'

//Renders Home Screen
class Home extends React.Component {
  //On Component Home Loaded
  componentDidMount() {
    //to do...
  }

  //Component Content
  render() {
    return (
      <div>
        {/*Joule Logo*/}
        <div className='animated slideInDown' id='logo-container'>
          <Link to={"/api/ping/"}>
            <img id='logo' alt='Joule Logo' src={logo} />
          </Link>
        </div>
        {/*Main Body*/}
        <div className='animated zoomIn' id="header-container">
            <p id='header-text'>Wait</p>
            {/* <input type='text' id='email' onClick={console.log(123)} /> */}
            <img id='logo' alt='Joule Logo' src={logo} />
        </div>
      </div>
    )
  }
}

export default Home;