
export default function BlogCard({ blogId, imgPath, title, created, content }) {
  return (
    <a className="blog-card" href={`/blog/${blogId}`}> 
      <img className="blog-card-image" src={imgPath} alt={title} />
      <div>
        <p className="blog-card-title">{title}</p>
        <p className="blog-card-created">{created}</p>
        <p className="blog-card-content">{content}</p>
      </div>
    </a>
  )
};