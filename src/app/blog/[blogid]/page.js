// import { useEffect, useState } from "react";
// import { DateTime } from 'luxon';
import { getBlogById } from "@/database/database";
import SingleBlog from "@/components/SingleBlog";

export default async function Blog({ params }) {
  let blog = await getBlogById(parseInt(params.blogid));

  return (
    <div>
      <SingleBlog
        title={blog.blog_title}
        created={blog.blog_created}
        content={blog.blog_content}
      />
    </div>
  )
}