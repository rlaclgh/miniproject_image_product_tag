package com.rlaclgh.server;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class IndexController {

  @GetMapping("")
  public String helloWorld() {

    return "Hello World!!";

  }
}
