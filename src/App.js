import React, {Component} from "react";
import Axios from "axios";
import List from './List'


class App extends Component {
  constructor(props){
    super(props);
  
    this.state = {
      people: []
    }
    this.getPeople = this.getPeople.call(this)
  } 
  getPeople(){
    return Axios.get("https://swapi.co/api/people")
    .then((response) => {
      console.log(response.data.results)
      this.setState( {people: response.data.results} )
    })
  }
  componentDidMount(){

  }

  render(){
    const {people} = this.state
    return(
      <div>
        <h1>Hello</h1>
        <List people = {people} />
      </div>
    )
  }
}

export default App