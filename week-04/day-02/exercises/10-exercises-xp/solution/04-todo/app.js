import {TodoList} from './todo.js';const list=new TodoList();const task=list.addTask('Learn modules');list.addTask('Practice');list.completeTask(task.id);console.log(list.listTasks());
