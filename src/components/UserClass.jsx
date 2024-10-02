import React from "react";

class UserClass extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            count : 2,
            count2 : 0
        }
    }

    render(){
        const {name, location, role} = this.props;
        const {count} = this.state;
        return (
            <div>
                {/* <h2>Count:{count}</h2>
                <button onClick={() => {
                    this.setState({count: this.state.count+1})
                }}>+</button> */}
                <h2>{name}</h2>
                <h3>{location}</h3>
                <h3>{role}</h3>
            </div>
        )
    }
}

export default UserClass;