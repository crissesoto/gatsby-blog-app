import React from 'react';
import { Link } from "gatsby";

function Copyright() {
  return (
    <footer>
      {'Copyright © '}
      <Link color="inherit" to="/">
        CODE_VAULT
      </Link>{' '}
      {new Date().getFullYear()}
      {' by Crisse Soto'}
    </footer>
  );
}

export default function Footer(props) {
  return (
    <footer>
      <div className="p-5">
        <nav className="level mb-1">
          <div className="level-item has-text-centered">
            <Copyright />
          </div>
        </nav>
        <div className="has-text-centered">
          <a
          rel="noreferrer"
          target="_blank"
          href={`https://feedspot.com/infiniterss.php?q=site:${process.env.BASE_URL}/rss.xml`}
          className="has-text-primary">
          Follow RSS
          </a>
        </div>
      </div>
    </footer>
  );
}