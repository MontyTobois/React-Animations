import React from 'react'
import { Spring } from "react-spring"

export default function Component1() {
  return (
    <Spring 
    from={{ opacity: 0, marginTop: -500 }}
    to={{ opacity: 1, marginTop: 0 }}>
    
      {props => (
        <div style={props}>
          <div style={a1style}>
            <h1>Component 1</h1>
            <p>"quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"</p>
          </div>
        </div>
      )}
    </Spring>
  )
}

const a1style = {
  background: 'lightgreen',
  color:  'black',
  padding: '1.5rem'
}