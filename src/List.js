import React, {Component} from "react";



class List extends Component {

  render(){
    const people = this.props.people
    
    return(
      <div>
        {
            people.map((person) => { 
            return (
                <div>
                    <h1>{person.name}</h1>
                    <p>Weight: {person.mass}</p>
                    <p>Hair Color: {person.hair_color}</p>
                    <p>Skin Color: {person.skin_color}</p>
                    <p>Eye Color: {person.eye_color}</p>
                    <p>Birth Year: {person.birth_year}</p>
                </div>
            )
            })
        }
      </div>
    )
  }
}

export default List