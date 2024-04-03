import { getBlogById } from "@/database/database"

export default async function SingleBlog({ blogId }) {
  let blog = await getBlogById(blogId);
  return (
    <div className="blog">
      <div>
        <p className="blog-title">{blog.blog_title}</p>
        <p className="blog-created">{blog.blog_created}</p>
      </div>
      <p className="blog-content">{blog.blog_content}</p>
    </div>
  )
};