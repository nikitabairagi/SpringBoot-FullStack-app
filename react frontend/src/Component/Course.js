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
        if(this.state.id == -1){
            return;
        }

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

    handleChange = (event)=> {
        this.setState({
            description: event.target.value
        });
    }

    handleSubmit(event){
        let course = {
            id: this.state.id,
            description: this.state.description,
        }
        event.preventDefault();

        if(this.state.id == -1){

            fetch("http://localhost:8080/instructors/Nikita/courses", {
                method: "post",
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(course)
            })
                .then( (response) => {
                    this.props.history.push('/courses');
                });

        }else{
            fetch("http://localhost:8080/instructors/Nikita/courses/" + this.state.id,{
                method: "put",
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(course)
            }).then(() => this.props.history.push('/courses'));
        }

    }

    render(){
        let {id, description} = this.state;
        return(
            <div>
                <h1>Course Details</h1>
                <form onSubmit={(e) => this.handleSubmit(e)}>
                    <div className="form-group">
                        <input type="text" className="form-control" name="id" disabled value={id}/>
                    </div>
                    <div className="form-group">
                        <label>Description</label>
                        <input type="text" className="form-control" name="description" value={this.state.description}
                               onChange={this.handleChange}/>
                    </div>
                    <button type="submit" className="btn btn-default" >Save</button>
                </form>
            </div>

        );
    }
}

export default Course;