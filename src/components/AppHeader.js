import React, { useState } from 'react';
import { Link } from "gatsby";
import ThemeToggle from './ThemeToggle';

export default function AppHeader({seo}) {
  const [isActive, setisActive] = useState(false)

  const twitterMessage = seo?.title ?
  `I have just published "${seo.title}"` :
  "Join the CODE_VAULT!"

  const twitterUrl = seo?.url || "" 

  return (
    <nav className="navbar is-transparent mb-5 p-5">
      <div className="navbar-brand">
        <Link className="navbar-item pl-0" to="/">
          <h1 className="title">CODE-VAULT</h1>
        </Link>
        <button
          onClick={() => {
            setisActive(!isActive)
          }}
          className={`navbar-burger burger ${isActive ? 'is-active' : ''}`}
          aria-label='menu'
          aria-expanded='false'
          data-target='navbarBasicExample'
        >
          <span aria-hidden='true'></span>
          <span aria-hidden='true'></span>
          <span aria-hidden='true'></span>
        </button>
      </div>

      <div id="navbarExampleTransparentExample" className={`navbar-menu ${isActive ? 'is-active' : ''}`}>
        <div className="navbar-start">
          <Link className="navbar-item" to="/">
            Home
          </Link>
          <Link className="navbar-item" to="/blogs">
            Blogs
          </Link>
          <Link className="navbar-item" to="/about">
            About
          </Link>
          <Link className="navbar-item" to="/contact">
            Contact
          </Link>
        </div>

        <div className="navbar-end">
          <div className="navbar-item">
            <div className="field is-grouped">
              <ThemeToggle className="is-flex is-align-self-center mr-5"/>
              <p className="control">
                <a
                  className="button is-primary"
                  data-social-network="Twitter"
                  data-social-action="tweet"
                  data-social-target="https://eincode.com"
                  rel="noreferrer"
                  target="_blank"
                  href={`https://twitter.com/intent/tweet?text=${twitterMessage}&hashtags=codespace&url=${process.env.BASE_URL}${twitterUrl}`}>
                  <span>
                    Tweet
                  </span>
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}