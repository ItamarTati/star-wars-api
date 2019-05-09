import React, {Component} from "react";



class List extends Component {

  render(){
    const people = this.props.people
    
    return(
      <div>
        {
            people.map((person) => {
            console.log(person)  
            return (
                <div>
                    <h1>{person.name}</h1>
                </div>
            )
            })
        }
      </div>
    )
  }
}

export default List