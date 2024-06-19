import { createContext, useReducer } from "react";

export const TodoItemsContext = createContext({
    todoItems: [],
    addNewItem: () => {},
    deleteItem: () => {},
});


const todoItemReducer = (currntTodoItems, action) => {

    let newTodoItems = currntTodoItems;

    if (action.type === 'New_Item') {
        newTodoItems = [
            ...currntTodoItems,
            { name: action.payload.itemName, dueDate: action.payload.itemDueDate, }
        ];
    } else if (action.type === 'Delete_Item') {
        newTodoItems = currntTodoItems.filter(item => item.name !== action.payload.itemName);
    }

    return newTodoItems;
}


const TodoItemsContextProvider = ( {children }) => {
    // Insert Item
    const [ todoItems, dispatchTodoItems ] = useReducer(todoItemReducer, []);

    const addNewItem = (itemName, itemDueDate) => {
        const newItemAction = {
            type: 'New_Item',
            payload: {
                itemName,
                itemDueDate,
            }
        };
        dispatchTodoItems(newItemAction);
    };
    
    // Delete Item
    const deleteItem = (todoItemName) => {
        const deleteItemAction = {
            type: 'Delete_Item',
            payload: {
                itemName: todoItemName,
            }
        };
        dispatchTodoItems(deleteItemAction);
    };

    return <TodoItemsContext.Provider value={{
        todoItems,
        addNewItem,
        deleteItem,
        }}>
            {children}
        </TodoItemsContext.Provider>
}

export default TodoItemsContextProvider;