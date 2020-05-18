import React from "react"
class Person extends React.Component {
    render(){
        return (
            <div>
            <ul>
                {this.props.person.map(info => (
                    <li>Name: {info.Name} Phone: {info.Phone} DOB: {info.DOB}</li>
                 ))}
            </ul>
            </div>
        )
    } 

}

export default Person;