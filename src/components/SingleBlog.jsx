import { DateTime } from "luxon";

export default function SingleBlog({title, created, content}) {
  let date = DateTime.fromJSDate(created);
  date = date.toLocaleString(DateTime.DATE_MED)

  return (
    <article className="blog">
      <div>
        <h1 className="blog-title">{title}</h1>
        <p className="blog-created">{date}</p>
      </div>
      <p className="blog-content">{content}</p>
    </article>
  )
};