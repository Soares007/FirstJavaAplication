package br.gov.sp.fatec.hello.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.gov.sp.fatec.hello.entities.Student;

@RestController
@RequestMapping("students")
public class StudentController {

    @GetMapping
    public List<Student> getStudents(){
      
        List<Student> list = new ArrayList<Student>();

        Student s1 = new Student();

      s1.setCourse("ADS");
      s1.setId(1);
      s1.setName("Carlos Eduardo");

      Student s2 = new Student();

      s2.setCourse("ADS");
      s2.setId(2);
      s2.setName("José Marcio");

      Student s3 = new Student();

      s3.setCourse("ADS");
      s3.setId(3);
      s3.setName("Guilherme Rodrigues");

      Student s4 = new Student();

      s4.setCourse("ADS");
      s4.setId(4);
      s4.setName("Ivan Lira");

      list.add(s1);
      list.add(s2);
      list.add(s3);
      list.add(s4);

      return list;
    }    
}
