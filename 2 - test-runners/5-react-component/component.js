import 'react'

const App = (props) => {
  return (
    <div>
      <HelloComponent name={props.name || 'World'} />
    </div>
  )
}

const HelloComponent = (props) => {
  if (typeof props.name !== 'string') throw new Error('Name is not a string')
  return (
    <div>
      <p>Hello {props.name}!</p>
    </div>
  )
}

module.exports = App
