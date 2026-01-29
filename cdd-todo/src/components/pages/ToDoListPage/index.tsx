import { ToDoList } from 'components/templates/ToDoList'
import { useContext } from 'react'
import {ToDoListContext} from 'context/ToDoList'

export const ToDoListPage = () => {
    const {toDoList, onDelete} = useContext(ToDoListContext);

    return <ToDoList toDoList={toDoList} onDelete={onDelete}/>
}