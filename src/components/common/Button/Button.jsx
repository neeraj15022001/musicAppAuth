import React from 'react'

function Button({buttonTitle}) {
    return (
        <div>
            <button className="btn btn-themeColor mb-3 w-100 py-3 fw-normal">{buttonTitle}</button>
        </div>
    )
}
export default Button
