export default function PostItem({ post }) {
  return (
    <li style={{ padding: 12, border: '1px solid #e5e7eb', borderRadius: 8 }}>
      <h3 style={{ margin: '0 0 6px' }}>
        #{post.id} — {post.title}
      </h3>
      <p style={{ margin: 0 }}>{post.body}</p>
    </li>
  )
      }
