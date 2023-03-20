package com.todoApp.backend.controllers;

import com.todoApp.backend.exception.TodoNotFoundException;
import com.todoApp.backend.models.Todo;
import com.todoApp.backend.repositories.TodosRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/todos")
public class TodosController {

    @Autowired
    TodosRepository todosRepository;

    @GetMapping(path="/all")
    public @ResponseBody Iterable<Todo> getAllTodos() {
        return todosRepository.findAll();
    }

    @PostMapping(path="/add")
    public @ResponseBody String addNewTodo (
            @RequestParam String title,
            @RequestParam String details
    ) {
        Todo todo = new Todo();
        todo.setTitle(title);
        todo.setDetails(details);
        todosRepository.save(todo);
        return "Saved";
    }

    @GetMapping("/{id}")
    Todo getTodoById(@PathVariable Integer id) {
        return todosRepository.findById(id)
                .orElseThrow(() -> new TodoNotFoundException(id));
    }

    @PutMapping("/{id}")
    Todo updateTodoById(@RequestBody Todo newTodo, @PathVariable Integer id) {

        return todosRepository.findById(id)
                .map(employee -> {
                    employee.setTitle(newTodo.getTitle());
                    employee.setDetails(newTodo.getDetails());
                    return todosRepository.save(employee);
                })
                .orElseGet(() -> {
                    newTodo.setId(id);
                    return todosRepository.save(newTodo);
                });
    }

    @DeleteMapping("/{id}")
    void deleteTodoById(@PathVariable Integer id) {
        todosRepository.deleteById(id);
    }

}
