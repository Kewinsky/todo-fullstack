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

    @GetMapping(path="/allTodos")
    public @ResponseBody Iterable<Todo> getAllTodos() {
        return todosRepository.findAll();
    }

    @PostMapping(path="/addTodo")
    public @ResponseBody String addNewTodo (
            @RequestParam String title,
            @RequestParam Boolean completed
    ) {
        Todo todo = new Todo();
        todo.setTitle(title);
        todo.setCompleted(completed);
        todosRepository.save(todo);
        return "Saved";
    }

    @GetMapping("/getTodoById/{id}")
    Todo getTodoById(@PathVariable Integer id) {
        return todosRepository.findById(id)
                .orElseThrow(() -> new TodoNotFoundException(id));
    }

    @PutMapping("/updateTodoById/{id}")
    Todo updateTodoById(@RequestParam String title,
                        @RequestParam Boolean completed,
                        @PathVariable Integer id) {

        return todosRepository.findById(id)
                .map(todo -> {
                    todo.setTitle(title);
                    todo.setCompleted(completed);
                    return todosRepository.save(todo);
                })
                .orElseThrow(() -> new TodoNotFoundException(id));
    }

    @DeleteMapping("/deleteTodoById/{id}")
    void deleteTodoById(@PathVariable Integer id) {
        if (todosRepository.existsById(id)){
            todosRepository.deleteById(id);
        }else{
            throw new TodoNotFoundException(id);
        }
    }

}
