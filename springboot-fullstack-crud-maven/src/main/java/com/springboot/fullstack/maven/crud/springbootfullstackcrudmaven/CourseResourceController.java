package com.springboot.fullstack.maven.crud.springbootfullstackcrudmaven;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.CrossOrigin;
import java.util.*;

@CrossOrigin(origins = { "http://localhost:3000"})

@RestController
public class CourseResourceController {

    @Autowired
    private CourseServiceManager courseManager;

    @GetMapping("/instructors/{username}/courses")
    public List<Course> getAllCourses(@PathVariable String username){
        return courseManager.findAll();
    }

}
