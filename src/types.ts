import { ReactNode } from "react";

export type TodoItemProps = {
  task: TodoItemType;
  handleEdit:(task:TodoItemType) => void
  children: ReactNode
};

export type TodoItemType = {
  id: string;
  title: string;
  isCompleted: boolean;
  category: string
};


export type TodoProps = {
  task: TodoItemType, addTask: React.Dispatch<React.SetStateAction<TodoItemType>>,
  setVisible: React.Dispatch<React.SetStateAction<boolean>>,
  visible: boolean
}

export type Action = 
{type:'ADD-TODO', payload: TodoItemType} | 
 {type:'EDIT-TODO', payload: TodoItemType} | 
 {type:'FETCH-TODOS',payload: TodoItemType[]} |
{type:'DELETE-TODO', payload: string}

export interface State  {
  todos: [] | TodoItemType[]
}

export type EventType = React.ChangeEvent<HTMLSelectElement>
