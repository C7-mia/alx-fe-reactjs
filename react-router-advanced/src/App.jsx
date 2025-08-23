import { Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar'
import { AuthProvider } from './context/AuthContext'

import Home from './pages/Home'
import Blog from './pages/Blog'
import Post from './pages/Post'
import BlogPost from './pages/BlogPost'   // import BlogPost
import Login from './pages/Login'
import Profile from './pages/Profile'
import ProfileDetails from './pages/ProfileDetails'
import ProfileSettings from './pages/ProfileSettings'
import NotFound from './pages/NotFound'
import ProtectedRoute from './routes/ProtectedRoute'

export default function App() {
  return (
    <AuthProvider>
      <div style={{ fontFamily: 'system-ui, Arial', padding: 16 }}>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />

          {/* Blog Routes */}
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:postId" element={<Post />} />
          <Route path="/blog/:id" element={<BlogPost />} /> {/*  new dynamic route */}

          {/* Login */}
          <Route path="/login" element={<Login />} />

          {/* Protected + Nested */}
          <Route element={<ProtectedRoute />}>
            <Route path="/profile" element={<Profile />}>
              <Route index element={<ProfileDetails />} />
              <Route path="details" element={<ProfileDetails />} />
              <Route path="settings" element={<ProfileSettings />} />
            </Route>
          </Route>

          {/* Not Found */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </AuthProvider>
  )
  }
