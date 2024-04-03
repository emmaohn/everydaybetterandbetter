// import { useEffect, useState } from "react";
import { DateTime } from 'luxon';
import { getAllBlogs, getAllKeywords } from "@/database/database";
import BlogCard from '@/components/BlogCard';

export default async function BlogSpot() {
  let blogs = await getAllBlogs();
  let keywords = await getAllKeywords();

  return (
    <div className='blogspot'>
      <i id="blogspotFilter" className="blogspot-filter fa-solid fa-sliders"></i>
      <div className="blogspot-grid">
        <div className='blogspot-blogs'>
          {blogs.map(blog => {
            let newDate = new Date(blog.blog_created);
            let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
            let date = `${months[newDate.getMonth() - 1]} ${newDate.getDate()}, ${newDate.getFullYear()}`;
            return (<BlogCard 
              key={blog}
              blogID={blog.blog_id}
              imgPath={blog.blog_thumbnail}
              title={blog.blog_title}
              created={date}
              content={blog.blog_content}
            />)
            })
          }
        </div>
        <div className='blogspot-keywords'>
          {keywords.map(keyword => {
            return (<h3 key={keyword}>{keyword.keyword}</h3>)
            })
          }
        </div>
      </div>
    </div>
  );
}