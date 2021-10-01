import * as React from 'react'
import Header from './AppHeader'
import Footer from './Footer'

const Layout = ({children}) => {
    return (
        <div className="container is-max-desktop">
            <Header />
                <div className="p-5">{ children }</div>
            <Footer />
        </div>
    )
}

export default Layout