import React from "react"

const Input = (props) => {
    return (
        <label className="form-group">
            <input
                className="form-group__input"
                type={props.type || 'text'}
                name={props.name}
                placeholder={props.placeholder}
                autoComplete={props.autoComplite}
            />
        </label>
    )
}

export default Input