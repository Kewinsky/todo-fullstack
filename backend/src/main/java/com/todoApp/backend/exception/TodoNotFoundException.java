package com.todoApp.backend.exception;

public class TodoNotFoundException extends RuntimeException {
    public TodoNotFoundException(Integer id) {
        super("Could not find todo " + id);
    }
}
