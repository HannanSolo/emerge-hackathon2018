import React, {Component} from 'react';

//Pings Server (Hello World Example)
class Ping extends React.Component {
  state = {
    response: ''
  };

  componentDidMount(){
    this.callApi()
    .then(res => this.setState({ response: res.express }))
    .catch(err => console.log(err));
  }

  callApi = async() => {
    const response = await fetch('/api/hello');
    const body = await response.json();

    if(response.status !== 200) throw Error(body.message)
    
    console.log(body);

    return body;
  }

  render() {
    return(<p>I Ping Server</p>)
  }
}
export default Ping;