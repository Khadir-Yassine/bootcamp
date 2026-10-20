export class TodoList {
  #tasks=[]; #nextId=1;
  addTask(title){if(typeof title!=='string'||!title.trim())throw new Error('Title required');const task={id:this.#nextId++,title:title.trim(),completed:false};this.#tasks.push(task);return {...task};}
  completeTask(id){const task=this.#tasks.find(t=>t.id===id);if(!task)throw new Error('Task not found');task.completed=true;}
  listTasks(){return this.#tasks.map(t=>({...t}));}
}
