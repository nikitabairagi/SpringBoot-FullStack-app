package com.springboot.fullstack.maven.crud.springbootfullstackcrudmaven;

import org.springframework.stereotype.Service;
import java.util.*;

@Service
public class CourseServiceManager {
    private static List<Course> courseList = new ArrayList<>();
    private static long idCounter = 0;

    static{
    courseList.add(new Course(++idCounter,"nikita", "Learn SpringBoot"));
    courseList.add(new Course(++idCounter,"nikita","Learn React"));
    courseList.add(new Course(++idCounter,"nikita","Learn Java"));
    courseList.add(new Course(++idCounter,"nikita","Learn JavaScript"));
    }


    public List<Course> findAll(){
        return courseList;
    }

    public Course deleteById(long id){
        Course course = findById(id);
        if(courseList.remove(course)){
            return course;
        }
        return null;
    }

    public Course findById(long id){
        for(Course course : courseList){
            if(course.getId() == id){
                return course;
            }
        }

        return null;
    }

    public Course save(Course course){
        if(course.getId() == -1 || course.getId() == 0){
            course.setId(++idCounter);
            courseList.add(course);
        }else{
            deleteById(course.getId());
            courseList.add(course);
        }

        return course;
    }

}
