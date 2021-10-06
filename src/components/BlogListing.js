import React from "react"
import Blog from "./Blog"

export default function BlogListing({blogs, search: SearchBox}) {

  return (
    <>
    {
      SearchBox && <SearchBox />
    }
      <div className="columns is-multiline">
        { blogs.map(({id, frontmatter}) => {
            return (
                <div key={id} className="column is-9">
                    <Blog
                    title={frontmatter.title}
                    subtitle={frontmatter.subtitle}
                    slug={frontmatter.slug}
                    date={frontmatter.date}
                    />
                </div>
            )
        })
        }
      </div>
    </>
  )
}