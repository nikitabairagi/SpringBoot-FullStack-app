package com.springboot.fullstack.maven.crud.springbootfullstackcrudmaven;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.*;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class CourseResourceController {

    @Autowired
    private CourseServiceManager courseManager;

    @GetMapping("/instructors/{username}/courses")
    public List<Course> getAllCourses(@PathVariable String username){
        return courseManager.findAll();
    }

    @GetMapping("/instructors/{username}/courses/{id}")
    public Course getCourse(@PathVariable String username, @PathVariable long id){
        return courseManager.findById(id);
    }

    @DeleteMapping("/instructors/{username}/courses/{id}")
    public ResponseEntity<Void> deleteCourse(@PathVariable String username, @PathVariable long id){
        Course course = courseManager.deleteById(id);
        if(course != null){
            return ResponseEntity.noContent().build();
        }

        return ResponseEntity.notFound().build();
    }



}
