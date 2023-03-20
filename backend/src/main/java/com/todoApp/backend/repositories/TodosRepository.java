package com.todoApp.backend.repositories;

import com.todoApp.backend.models.Todo;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TodosRepository extends JpaRepository<Todo, Integer> {
}
