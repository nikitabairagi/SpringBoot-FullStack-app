import React from "react";
import CourseDataService from '../Service/CourseDataService'

class CourseList extends React.Component{
    constructor(props) {
        super(props);
        this.state={
            courses:[],
            message:null,
        }
    }
    componentDidMount() {
        fetch('http://localhost:8080/instructors/Nikita/courses')
            .then(res => res.json())
            .then((data) => {
                console.log(data);
                this.setState({
                    courses: data,
                })
            })
    }

    render(){
        return(
            <div className="container">
                <h3>All Courses</h3>
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
                                </tr>
                            )
                        }
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default CourseList;