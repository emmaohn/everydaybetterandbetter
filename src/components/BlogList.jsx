'use client'
import { useEffect, useState } from "react";
import { DateTime } from 'luxon';
import BlogCard from '@/components/BlogCard';

export default function BlogList({blogs, keywords}) {
  let [filteredBlogs, setFilteredBlogs] = useState(blogs);
  let selectedKeywords = [];

  function handleFilter(e) {
    // e.preventDefault()
    // console.log(e.target.checked)

    if (e.target.checked) {
      // console.log(`adding ${e.target.value} to ${selectedKeywords}`)
      selectedKeywords.push(parseInt(e.target.value));
    } else {
      selectedKeywords.splice(selectedKeywords.indexOf(e.target.value), 1);
    }

    let newlist = blogs.filter(blog => {
      for (let i = 0; i < blog.blog_keyword.length; i++) {
        let keyword = blog.blog_keyword[i];
        if (selectedKeywords.indexOf(keyword.keyword_id) > -1 || selectedKeywords.length == 0) {
          return true
        }
      }
      return false
    })

    setFilteredBlogs(newlist)
  }

  // console.log(keywords)

  return (
    <div className="blogspot-grid">
      <div className='blogspot-blogs'>
        {filteredBlogs.map(blog => {
          let date = DateTime.fromJSDate(blog.blog_created);
          date = date.toLocaleString(DateTime.DATE_MED)

          return (<BlogCard 
            key={blog.blog_id}
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
        <form>
          <p className='blogspot-keywords-prompt'>Search by:</p>
          {keywords.map(keyword => {
            return (
              <div className='keyword' key={keyword.keyword}>
                <input onClick={handleFilter} value={keyword.keyword_id} className='keyword-input' name="keyword" type='checkbox'/>
                <label className='keyword-label' htmlFor="keyword">{keyword.keyword}</label>
              </div>
            ) 
          })}
        </form>
      </div>
    </div>
  )
}