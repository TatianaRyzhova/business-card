import React from "react";

function InputField(props) {
  return (
    <div className="input-field">

      <label className="input-field__label">{props.label}
        <span className="input-field__label_start"> *</span>
      </label>

      <input type={props.type} name={props.name} id={props.id} className="input-field__contact-form"
             placeholder={props.placeholder} onChange={props.handleChange}
             value={props.value || ''} required
      />

      <span id={`${props.name}-input-error`} className="input-error">
        {props.errorName || ''}
      </span>

    </div>
  )
}

export default InputField;
