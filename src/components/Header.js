import * as React from 'react'
import { Link } from 'gatsby'

import {headerTitle} from './Header.module.scss';

const Header = () => {
    return(
        <>
            <h2 className={headerTitle}>Im header</h2>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/blogs">Blogs</Link>
        </>
    )
}


export default Header