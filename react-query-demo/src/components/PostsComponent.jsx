import { useQuery, useQueryClient } from '@tanstack/react-query'
import PostItem from './PostItem.jsx'

async function fetchPosts() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts')
  if (!res.ok) throw new Error('Failed to fetch posts')
  return res.json()
}

export default function PostsComponent() {
  const queryClient = useQueryClient()

  const {
    data: posts,
    error,
    isError,
    isLoading,
    isFetching,
    refetch,
  } = useQuery({
    queryKey: ['posts'],
    queryFn: fetchPosts,
    staleTime: 60 * 1000,       // data is fresh for 1 minute
    cacheTime: 5 * 60 * 1000,   // keep unused cache for 5 minutes
    keepPreviousData: true,     // show old data while fetching new
    refetchOnWindowFocus: true, // auto refetch when tab is focused
  })

  if (isLoading) return <p>Loading posts…</p>
  if (isError) return <p style={{ color: 'crimson' }}>Error: {error.message}</p>

  return (
    <div>
      <div style={{ display: 'flex', gap: 8, alignItems: 'center', marginBottom: 12 }}>
        <button onClick={() => refetch()}>Refetch (foreground)</button>

        <button
          onClick={() => {
            queryClient.invalidateQueries({ queryKey: ['posts'] })
          }}
        >
          Invalidate Cache (background on next trigger)
        </button>

        {isFetching ? <span>Updating…</span> : null}
      </div>

      <ul style={{ display: 'grid', gap: 8, padding: 0, listStyle: 'none' }}>
        {posts?.slice(0, 20).map((p) => (
          <PostItem key={p.id} post={p} />
        ))}
      </ul>
    </div>
  )
    }
