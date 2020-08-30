import React from "react";
import InstructorApp from "./Component/InstructorApp";
import './App.css';

class App extends React.Component{
    render(){
        return(
            <div className="container">
                <InstructorApp/>
            </div>
        );
    }
}

export default App;