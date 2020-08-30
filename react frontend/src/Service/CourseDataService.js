
class CourseDataService{
    retrieveAllCourses(){
        fetch('http://localhost:8080/instructors/nikita/courses')
            .then(res => res.json())
            .then((data) =>{
                return data;
            })
            .catch(console.log)
    }
}

export default new CourseDataService();