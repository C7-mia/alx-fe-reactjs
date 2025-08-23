import { useQuery, useQueryClient } from '@tanstack/react-query'
import PostItem from './PostItem.jsx'

async function fetchPosts() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts')
  if (!res.ok) throw new Error('Failed to fetch posts')
  // Simulate latency for demo:
  // await new Promise((r) => setTimeout(r, 600))
  return res.json()
}

export default function PostsComponent() {
  const queryClient = useQueryClient()

  const {
    data: posts,
    error,
    isError,
    isLoading,
    isFetching, // true during background refetch
    refetch,
  } = useQuery({
    queryKey: ['posts'],
    queryFn: fetchPosts,
    // Demonstrate manual control as needed:
    // refetchOnMount: true,
    // refetchOnWindowFocus: false,
  })

  if (isLoading) return <p>Loading posts…</p>
  if (isError) return <p style={{ color: 'crimson' }}>Error: {error.message}</p>

  return (
    <div>
      <div style={{ display: 'flex', gap: 8, alignItems: 'center', marginBottom: 12 }}>
        <button onClick={() => refetch()}>Refetch (foreground)</button>

        <button
          onClick={() => {
            // Mark cache as stale and trigger background refresh on next mount/focus
            queryClient.invalidateQueries({ queryKey: ['posts'] })
          }}
        >
        Invalidate Cache (background on next trigger)
        </button>

        {isFetching ? <span>Updating…</span> : null}
      </div>

      <ul style={{ display: 'grid', gap: 8, padding: 0, listStyle: 'none' }}>
        {posts.slice(0, 20).map((p) => (
          <PostItem key={p.id} post={p} />
        ))}
      </ul>
    </div>
  )
               }
