import http from "http";
import { TodolistService } from "./todolist-service.mjs";

const service = new TodolistService();

const server = http.createServer((request, response) => {
  response.setHeader("Content-Type", "application/json");

  if (request.method === "GET") {
    service.getTodoList(request, response);
  } else if (request.method === "POST") {
    service.createTodoList(request, response);
  } else if (request.method === "PUT") {
    service.updateTodoList(request, response);
  } else if (request.method === "DELETE") {
    service.deleteTodoList(request, response);
  }
});

server.listen(3000);
