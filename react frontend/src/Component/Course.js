import React from "react";

class Course extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            id: this.props.match.params.id,
            description:"",
        }
    }
    componentDidMount() {
        fetch("http://localhost:8080/instructors/Nikita/courses/" + this.state.id,{
            method: "get"
        }).then(res => res.json())
            .then((data) => {
                this.setState({
                    description: data.description,
                })
            })
            .catch(e => console.error(e));
    }

    render(){
        return(
            <div>
                <h1>Course Details</h1>
                <div>{this.state.id}</div>
                <div>{this.state.description}</div>
            </div>

        );
    }
}

export default Course;