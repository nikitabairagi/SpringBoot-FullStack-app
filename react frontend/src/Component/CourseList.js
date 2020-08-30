import React from "react";

class CourseList extends React.Component{
    constructor(props) {
        super(props);
        this.state={
            courses:[],
            message:null,
        }
    }
    componentDidMount() {
       this.getAllCourse();
    }

    getAllCourse(){
        fetch('http://localhost:8080/instructors/Nikita/courses',{
            method:"Get"
        }).then(res => res.json())
            .then((data) => {
                console.log(data);
                this.setState({
                    courses: data,
                })
            })
            .catch(e => console.error(e));
    }

    deleteCourse(id){
        fetch("http://localhost:8080/instructors/Nikita/courses/"+id,{
            method: "delete"
        })
            .then((data) => {
                this.setState({
                    message: 'Delete course success',
                })
                this.getAllCourse();
            })
            .catch(e => console.error(e));
    }
    updateCourse(id){
        console.log('update ' + id)
        this.props.history.push(`/courses/${id}`);
    }
    addCourse(){
        this.props.history.push(`/courses/-1`);
    }
    render(){
        return(
            <div className="container">
                <h3>All Courses</h3>
                {this.state.message && <div className="alert alert-success">{this.state.message}</div>}
                <div className="container">
                    <table className="table">
                        <thead>
                        <tr>
                            <th>ID</th>
                            <th>Decription</th>
                        </tr>
                        </thead>
                        <tbody>
                        {
                            this.state.courses.map(
                            course =>
                                <tr key={course.id}>
                                    <td>{course.id}</td>
                                    <td>{course.description}</td>
                                    <td>
                                        <button className="btn btn-warning" onClick={()=>this.deleteCourse(course.id)}>
                                            Delete
                                        </button>
                                    </td>
                                    <td>
                                        <button className="btn btn-primary" onClick={()=>this.updateCourse(course.id)}>
                                            Update
                                        </button>
                                    </td>
                                </tr>
                            )
                        }
                        </tbody>
                    </table>
                    <div className="row">
                        <button className="btn btn-success" onClick={this.addCourse}>Add</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default CourseList;