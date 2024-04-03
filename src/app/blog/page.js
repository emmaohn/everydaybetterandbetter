'use client'
// import { useEffect, useState } from "react";
// import { DateTime } from 'luxon';
// import { getBlogById } from "@/database/database";
import SingleBlog from "@/components/Blog";
import { useParams } from "next/navigation";

// export async function getServerSideProps(context) {
//   const id = context.query.id;
//   console.log(id);
// }

export default async function Blog() {
  // let blog = await getBlogById(blogId);
  const params = useParams()
  console.log(params)
  
  return (
    <article>
      <SingleBlog>
        blogId={id}
      </SingleBlog>
    </article>
  )
}