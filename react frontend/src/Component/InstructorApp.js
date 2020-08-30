import React from "react";
import CourseList from "./CourseList";

class InstructorApp extends React.Component{
    render(){
        return(
            <div>
            <h1>Instructor Application</h1><br/>
            <CourseList/>
            </div>
        );
    }
}

export default InstructorApp;