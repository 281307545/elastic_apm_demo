package com.vdilab.elasticapmdemo;
import java.util.*;
import java.util.concurrent.atomic.AtomicLong;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "*")
public class GreetingController {

    private static final String template = "Hello, %s!";
    private final AtomicLong counter = new AtomicLong();

    @GetMapping("/tracking")
    public List<Bug> greeting() {
        counter.incrementAndGet();
        ArrayList<Bug> bugs = new ArrayList<Bug>();
        bugs.add(new Bug(counter.toString(), "test", "test_desc"));
        return bugs;
    }
}