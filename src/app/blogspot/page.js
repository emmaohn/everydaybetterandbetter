// 'use client'
// import { useEffect, useState } from "react";
import { DateTime } from 'luxon';
import { getAllBlogs, getAllKeywords } from "@/database/database";
import BlogCard from '@/components/BlogCard';

export default async function BlogSpot() {
  let blogs = await getAllBlogs();
  let keywords = await getAllKeywords();

  return (
    <div className='blogspot'>
      {blogs.map(blog => {
        let newDate = new DateTime(blog.blog_created);
        return (<BlogCard 
          key={blog}
          imgPath={blog.blog_thumbnail}
          title={blog.blog_title}
          created={newDate.toLocaleString(DateTime.DATE_MED)}
          content={blog.blog_content}
        />)
        })
      }
      <div className='blogspot-keywords'>
        {keywords.map(keyword => {
          return (<h3 key={keyword}>{keyword.keyword}</h3>)
          })
        }
      </div>
    </div>
  );
}