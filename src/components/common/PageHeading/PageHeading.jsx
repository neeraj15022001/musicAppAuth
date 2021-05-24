import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css"

function PageHeading({title}) {
    return (
        <div>
            <p className="mb-5 text-center display-3 fw-bold text-themeColor font-spicy-rice">{title}</p>
        </div>
    )
}

export default PageHeading
