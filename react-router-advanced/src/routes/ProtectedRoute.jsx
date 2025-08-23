import { Navigate, Outlet, useLocation } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

export default function ProtectedRoute() {
  const { user } = useAuth()
  const location = useLocation()

  if (!user) {
    // Keep where the user came from to return after login
    return <Navigate to="/login" replace state={{ from: location }} />
  }
  return <Outlet />
      }
