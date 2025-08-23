import { NavLink } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

const linkStyle = ({ isActive }) => ({
  padding: '8px 12px',
  borderRadius: 8,
  textDecoration: 'none',
  color: isActive ? '#111' : '#333',
  background: isActive ? '#e5e7eb' : 'transparent'
})

export default function NavBar() {
  const { user, logout } = useAuth()

  return (
    <nav style={{
      display: 'flex',
      gap: 8,
      alignItems: 'center',
      marginBottom: 16,
      borderBottom: '1px solid #e5e7eb',
      paddingBottom: 12
    }}>
      <NavLink to="/" style={linkStyle}>Home</NavLink>
      <NavLink to="/blog" style={linkStyle}>Blog</NavLink>
      <NavLink to="/profile" style={linkStyle}>Profile</NavLink>
      <div style={{ marginLeft: 'auto' }}>
        {user ? (
          <button onClick={logout}>Logout</button>
        ) : (
          <NavLink to="/login" style={linkStyle}>Login</NavLink>
        )}
      </div>
    </nav>
  )
    }
