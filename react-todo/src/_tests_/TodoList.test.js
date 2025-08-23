import { render, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
import TodoList from '../components/TodoList'

describe('TodoList Component', () => {
  beforeEach(() => {
    render(<TodoList />)
  })

  test('renders initial todos', () => {
    expect(screen.getByText('Learn React')).toBeInTheDocument()
    expect(screen.getByText('Build a Todo App')).toBeInTheDocument()
    expect(screen.getByText('Write Tests')).toBeInTheDocument()
  })

  test('adds a new todo', () => {
    const input = screen.getByPlaceholderText('Add new todo')
    const addButton = screen.getByText('Add')

    // Simulate user input and submit
    fireEvent.change(input, { target: { value: 'New Task' } })
    fireEvent.click(addButton)

    expect(screen.getByText('New Task')).toBeInTheDocument()
  })

  test('toggles a todo completion', () => {
    const todoItem = screen.getByText('Learn React')

    // Click to toggle
    fireEvent.click(todoItem)
    expect(todoItem).toHaveStyle('text-decoration: line-through')

    // Click again to untoggle
    fireEvent.click(todoItem)
    expect(todoItem).toHaveStyle('text-decoration: none')
  })

  test('deletes a todo', () => {
    const todoItem = screen.getByText('Build a Todo App')
    const deleteButton = todoItem.nextSibling

    fireEvent.click(deleteButton)
    expect(screen.queryByText('Build a Todo App')).not.toBeInTheDocument()
  })
})
