// 'use client'
// import { useEffect, useState } from "react";
import { DateTime } from 'luxon';
import { getAllBlogs, getAllKeywords } from "@/database/database";
import BlogCard from '@/components/BlogCard';

export default async function BlogSpot() {
  let blogs = await getAllBlogs();
  let keywords = await getAllKeywords();

  // async function onSubmit(e) {
  //   e.preventDefault()
  // }

  return (
    <div className='blogspot'>
      <div className="blogspot-filter">
        <i id="blogspotFilter" className="fa-solid fa-sliders"></i>
      </div>
      <div className="blogspot-grid">
        <div className='blogspot-blogs'>
          {blogs.map(blog => {
            let date = DateTime.fromJSDate(blog.blog_created);
            date = date.toLocaleString(DateTime.DATE_MED)

            return (<BlogCard 
              key={blog}
              blogId={blog.blog_id}
              imgPath={blog.blog_thumbnail}
              title={blog.blog_title}
              created={date}
              content={blog.blog_content}
            />)
            })
          }
        </div>
        <div className='blogspot-keywords'>
          {/* <form onSubmit={onSubmit}> */}
            {keywords.map(keyword => {
              return (
                <div className='keyword' key={keyword}>
                  <input className='keyword-input' name="keyword" type='checkbox'/>
                  <label className='keyword-label' htmlFor="keyword">{keyword.keyword}</label>
                </div>
              ) 
            })}
          {/* </form> */}
        </div>
      </div>
    </div>
  );
}