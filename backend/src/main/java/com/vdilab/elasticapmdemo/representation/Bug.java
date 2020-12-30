package com.vdilab.elasticapmdemo;

public class Bug {
    private final String id;
    private final String name;
    private final String description;

    public Bug(String id, String name, String message) {
        this.id = id;
        this.name = name;
        this.description = message;
    }

    public String getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public String getDescription() {
        return description;
    }
}