export interface ITodo {
  body: string;
  deadline: number;
  taskId: string;
  completed: boolean;
}

export interface IState {
  todoList:  ITodo[] ;
  visibility: string;
}
