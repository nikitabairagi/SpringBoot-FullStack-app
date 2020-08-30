package com.springboot.fullstack.maven.crud.springbootfullstackcrudmaven;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import javax.swing.plaf.ScrollBarUI;
import java.lang.annotation.Repeatable;
import java.util.*;
import java.net.*;

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

    @PutMapping("instructors/{username}/courses/{id}")
    public ResponseEntity<Course> updateCourse(@PathVariable String username, @PathVariable long id, @RequestBody Course course){
        Course courseUpdated = courseManager.save(course);
        return new ResponseEntity<Course>(courseUpdated, HttpStatus.OK);
    }

    @PostMapping("instructors/{username}/courses")
    public ResponseEntity<Void> createCourse(@PathVariable String username, @RequestBody Course course){
        Course createdCourse = courseManager.save(course);
        URI uri = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}").buildAndExpand(createdCourse).toUri();
        return ResponseEntity.created(uri).build();
    }



}
