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
}
