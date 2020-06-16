import React,　{ Component } from 'react';

class App extends Component {
  render(){
    return (
      <div>
        <label htmlFor="bar">bar</label>
        <input type="text" onChange={() => {console.log("I am clicked")}} />
      </div>
        
  // const greeting = "Hi,Tom!";
  // const dom = <h1 className="foo">{greeting}</h1>;
  // return dom;
    )
  }
}
export default App;
