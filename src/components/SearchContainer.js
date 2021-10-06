import React, { useState, useEffect, useCallback } from "react"
import * as styles from "./SearchContainer.module.scss"
import * as JsSearch from 'js-search'
import { navigate } from "gatsby";



export default function SearchContainer({searchIndex}) {

    const [search, setSearch] = useState({
        results: [],
        engine: {},
        searchTerm: ""
    });
 
    const rebuildIndex = useCallback(() => {
        const searchEngine = new JsSearch.Search("slug");
        searchEngine.sanitizer = new JsSearch.LowerCaseSanitizer();
        searchEngine.indexStrategy = new JsSearch.PrefixIndexStrategy();
        searchEngine.searchIndex = new JsSearch.TfIdfSearchIndex("slug");

        searchEngine.addIndex("title")
        searchEngine.addIndex("subtitle")
        searchEngine.addDocuments(searchIndex.blogs)

        setSearch((prevValue) => {
            return {...prevValue, engine: searchEngine}
        })

     }, [searchIndex])

    useEffect(() => {
        rebuildIndex();
    }, [rebuildIndex])

    const handleChange = (e) => {
        e.preventDefault();

        const {value} = e.target;
        const results = search.engine.search(value);
        setSearch({...search, searchTerm: value, results});
    }

    return (
        <div className="mb-4">
        <input
            onChange={handleChange}
            value={search.searchTerm}
            style={{width: "200px"}}
            className="input"
            type="text"
            placeholder="Search" />
        { search.results.length > 0 &&
            <div
            className={`${styles.options} select is-multiple`}>
            <ul>
                { search.results.map(result => (
                <li
                    onClick={()=> navigate(`/blogs/${result.slug}`)}
                    role='presentation'
                    key={result.slug}
                    className={`${styles.option} p-2`}>
                        <p className={`${styles.title}`}>{result.title}</p>
                        <p className={`${styles.subtitle}`}>{result.subtitle}</p>
                </li>
                ))
                }
            </ul>
            </div>
        }
        </div>
    )
}