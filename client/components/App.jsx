import React from 'react'
import {connect} from 'react-redux'

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {

    }
  }

  componentDidMount() {
  }

  render() {
    return (
      <>
      <h1>React development has begun!</h1>
      </>
    )
  }
}

function mapReduxStateToProps(reduxState) {
  return {

  }
}

export default connect(mapReduxStateToProps)(App)
