import React, {Component} from "react";





class List extends Component {

  render(){
    let people = this.props.people
    

    return(
      <div>
      {


        people.map((person, i) => { 

            return (
                <div>
                    <h1>{person.name}</h1>
                      <img className = 'photo' src ={`Images/${person.name.replace(/ /g,"_")}.png`} alt={person.name} />
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



// {
//   images.map((image) => { 
//     return (<div><p>{image.id}</p></div>)
//   })
// }
