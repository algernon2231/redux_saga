import React, {Component} from 'react'
import { connect } from 'react-redux'

class App extends Component {
  
   render(){
    return (
      <div className="App">
       <h1>Age: {this.props.age}</h1>
       <button onClick = {this.props.handleUp}>Age Up</button>
       <button onClick= {this.props.handeDown}>Age Down</button>
       
      
      </div>
    );
   }
}
const mapStateToProps = (state) => {
  return {
    age : state.age,
    
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    handleUp: () => dispatch({type: 'UP',value: 10}),
    handeDown : () => dispatch({type: 'DOWN', value: 10}),
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(App)