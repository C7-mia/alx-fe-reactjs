import { useState } from 'react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import PostsComponent from './components/PostsComponent.jsx'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      // “Fresh” for 60s (no refetch on mount/navigate/focus during this time)
      staleTime: 60 * 1000,
      // Keep cache for 5 minutes after unused
      gcTime: 5 * 60 * 1000,
      refetchOnWindowFocus: true,
      refetchOnReconnect: true,
      retry: 2,
    },
  },
})

export default function App() {
  const [showPosts, setShowPosts] = useState(true)

  return (
    <QueryClientProvider client={queryClient}>
      <div style={{ padding: 16, fontFamily: 'system-ui, Arial' }}>
        <h1>React Query Demo — JSONPlaceholder Posts</h1>

        <div style={{ display: 'flex', gap: 8, marginBottom: 16 }}>
          <button onClick={() => setShowPosts((v) => !v)}>
            {showPosts ? 'Navigate Away' : 'Go to Posts'}
          </button>

          <button
            onClick={() => {
              // Example: prefetch posts before navigating back
              queryClient.prefetchQuery({
                queryKey: ['posts'],
                queryFn: () =>
                  fetch('https://jsonplaceholder.typicode.com/posts').then((r) => {
                    if (!r.ok) throw new Error('Network response was not ok')
                    return r.json()
                  }),
              })
            }}
          >
            Prefetch Posts
          </button>
        </div>

        {showPosts ? (
          <PostsComponent />
        ) : (
          <div>
            <p>
              You are “away” from the posts screen. Navigate back within 60 seconds and
              the list will come from cache without a network call (watch your Network
              tab).
            </p>
          </div>
        )}
      </div>

      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  )
      }
