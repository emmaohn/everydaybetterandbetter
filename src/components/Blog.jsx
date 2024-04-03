// import { getBlogById } from "@/database/database"

export default function SingleBlog() {
  // let blog = await getBlogById(blogId);
  return (
    <div className="blog">
      <div>
        <p className="blog-title">{title}</p>
        <p className="blog-created">{created}</p>
      </div>
      <p className="blog-content">{content}</p>
    </div>
  )
};