# REAÇT TODO LIST📝

# Project Overview

This project implements a Todo List application using React (Vite) as the frontend framework and Jest + React Testing Library for unit/integration testing.
The objective is to practice state management, component composition, and automated testing to ensure reliable functionality across core features:

Adding todos

Toggling completion status

Deleting todos


This project is part of the ALX Frontend Engineering capstone practice.

# Technical Stack

Frontend Framework: React 18 (bootstrapped with Vite)

Language: JavaScript (ESM modules)

Testing:

Jest → Test runner

React Testing Library → DOM testing utilities


Build Tool: Vite

Package Manager: npm

#Project Structure

react-todo/
├── package.json             # Project metadata + scripts
├── vite.config.js           # Vite configuration
├── index.html               # App entry HTML
└── src/
    ├── main.jsx             # Root file - renders App
    ├── App.jsx              # High-level wrapper component
    ├── components/
    │   ├── TodoList.jsx     # Displays todos, handles toggle & delete
    │   └── AddTodoForm.jsx  # Controlled form for adding todos
    └── __tests__/
        └── TodoList.test.js # Unit + integration tests


---

# component Design

🔹 TodoList.jsx

State: Maintains todos as an array of objects ({ id, text, completed }).

Functions:

addTodo(text) → Pushes new todo into state.

toggleTodo(id) → Flips completion status.

deleteTodo(id) → Removes todo from list.


UI:

Renders todos as <li> items.

Completed todos have strikethrough styling.

Each todo has a delete button.



🔹 AddTodoForm.jsx

Controlled form component.

Input field + submit button.

Calls onAddTodo (prop callback) to add todos to TodoList
# Testing Strategy

All tests are located under src/__tests__/.

Frameworks

Jest → Provides describe, test, expect.

React Testing Library → Used for rendering, querying, and simulating user events (fireEvent).

Coverage

# Initial Render

Verify demo todos appear in the DOM.

Ensure list is not empty.



# Adding a Todo

Simulate user typing a new todo and clicking "Add".

Assert the new todo appears in the list.

# Toggling a Todo

Click on a todo item.

Verify strikethrough styling (text-decoration: line-through).


# Deleting a Todo

Click delete button on a todo.

Ensure it is removed from the DOM.

# Setup & Run

🔹 Installation

git clone https://github.com/C7-mia/alx-fe-reactjs.git
cd alx-fe-reactjs/react-todo
npm install

🔹 Development

npm run dev

Access at: http://localhost:5173

🔹 Testing

npm test

# Future Enhancements (Optional)

Persistent storage with localStorage.

Edit todo functionality.

Filter views: All | Completed | Active.

Improved accessibility (ARIA roles, keyboard navigation).


# License

This project is part of the ALX Frontend Engineering learning program and is intended for educational purposes.
