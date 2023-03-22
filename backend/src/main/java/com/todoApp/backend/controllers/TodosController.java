package com.todoApp.backend.controllers;

import com.todoApp.backend.exception.TodoNotFoundException;
import com.todoApp.backend.models.Todo;
import com.todoApp.backend.repositories.TodosRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/todos")
@CrossOrigin(origins = "*")
public class TodosController {

    @Autowired
    TodosRepository todosRepository;

    @GetMapping(path="/allTodos")
    public @ResponseBody Iterable<Todo> getAllTodos() {
        return todosRepository.findAll();
    }

    @PostMapping(path="/addTodo")
    public String addNewTodo (
            @RequestBody Todo todo
    ) {
        todosRepository.save(todo);
        return "Todo saved: " + todo;
    }

    @GetMapping("/getTodoById/{id}")
    Todo getTodoById(@PathVariable Integer id) {
        return todosRepository.findById(id)
                .orElseThrow(() -> new TodoNotFoundException(id));
    }

    @PutMapping("/updateTodoById/{id}")
    Todo updateTodoById(@RequestBody Todo newTodo,
                        @PathVariable Integer id) {

        return todosRepository.findById(id)
                .map(todo -> {
                    todo.setTitle(newTodo.getTitle());
                    todo.setCompleted(newTodo.getCompleted());
                    return todosRepository.save(todo);
                })
                .orElseThrow(() -> new TodoNotFoundException(id));
    }

    @DeleteMapping("/deleteTodoById/{id}")
    String deleteTodoById(@PathVariable Integer id) {
        if (!todosRepository.existsById(id)){
            throw new TodoNotFoundException(id);
        }
        todosRepository.deleteById(id);
        return "Todo " + id + " has been removed.";
    }

}
