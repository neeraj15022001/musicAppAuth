import React from 'react'

function InputField({type, placeholder}) {
    return (
        <div>
            <input className="mb-4 w-100 rounded-3 border-0 py-3 px-4 fs-5" type={type} placeholder={placeholder} />
        </div>
    )
}

export default InputField
