import React from "react";
import CourseList from "./CourseList";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Course from './Course';

class InstructorApp extends React.Component{
    render(){
        return(
            <Router>
                <div>
                <h1>Instructor Application</h1><br/>
                    <Switch>
                        <Route path='/' exact component={CourseList}/>
                        <Route path='/courses' exact component={CourseList}/>
                        <Route path='/courses/:id' exact component={Course}/>

                    </Switch>
                </div>
            </Router>
        );
    }
}

export default InstructorApp;