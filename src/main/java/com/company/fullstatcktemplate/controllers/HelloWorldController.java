package com.company.fullstatcktemplate.controllers;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HelloWorldController {

    @GetMapping("/ping")
    public String pong() {
        return "pong";
    }
}

