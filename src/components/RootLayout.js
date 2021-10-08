import React from "react"

import './../../node_modules/bulma/css/bulma.min.css'
import "./../../node_modules/prismjs/themes/prism-solarizedlight.css"
import './../styles/global.scss'

export default function RootLayout({children}) {

  return (
    <div className="theme-provider">
      {children}
    </div>
  )
}