import React, { Component } from 'react';
import { Spring } from "react-spring";

export class Component2 extends Component {
  render() {
    return (
      <Spring 
      from={{ opacity: 0}}
      to={{ opacity: 1}}
      config={{ delay: 1000, duration: 2000}}>
      
        {props => (
          <div style={props}>
            <div style={a2style}>
              <h1>Component 2</h1>
              <p>"quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"</p>
              <button style={btn}
              onClick={this.props.toggle}
              >
              Toggle Button
              </button>
            </div>
          </div>
        )}
      </Spring>
    )
  }
}

const a2style = {
  background: 'slateblue',
  color:  'white',
  padding: '1.5rem'
}
const btn = {
  background: 'yellow',
  color:  'black',
  padding: '1.5rem'
}

export default Component2
