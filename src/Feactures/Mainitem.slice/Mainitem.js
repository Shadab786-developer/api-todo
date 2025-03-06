import { createSlice } from "@reduxjs/toolkit";

// This is a Redux Slice file that handles the todo list state management

// Helper function to load saved items from localStorage
const loadItem = () => {
  try {
    const saveTodoItem = localStorage.getItem("Mainitem");
    return saveTodoItem ? JSON.parse(saveTodoItem) : [];
  } catch (err) {
    return [];
  }
};

// Initial state for the Redux store
const initialState = {
  Mainitem: loadItem(), // Load saved todos when the app starts
};

// Create a Redux slice for managing todo items
export const MainitemSlice = createSlice({
  name: "Mainitem",
  initialState,
  reducers: {
    // Action to add a new todo item
    addTodo: (state, action) => {
      // Create new todo with unique ID and default completed status
      const newTodo = {
        id: crypto.randomUUID(),
        text: action.payload,
        completed: false,
      };
      // Add new todo to the beginning of the list
      state.Mainitem.unshift(newTodo);
      // Save updated list to localStorage
      localStorage.setItem("Mainitem", JSON.stringify(state.Mainitem));
    },

    // Action to delete a todo item
    deleteTodo: (state, action) => {
      state.Mainitem = state.Mainitem.filter(
        (todo) => todo.id !== action.payload
      );
      localStorage.setItem("Mainitem", JSON.stringify(state.Mainitem));
    },

    // Action to toggle the completed status of a todo item
    toggleTodoComplete: (state, action) => {
      const todo = state.Mainitem.find((todo) => todo.id === action.payload);
      if (todo) {
        todo.completed = !todo.completed;
        localStorage.setItem("Mainitem", JSON.stringify(state.Mainitem));
      }
    },
  },
});

export const { addTodo, deleteTodo, toggleTodoComplete } =
  MainitemSlice.actions;

export default MainitemSlice.reducer;
