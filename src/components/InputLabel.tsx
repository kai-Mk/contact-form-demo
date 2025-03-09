import React from 'react'

interface InputLabelProps {
    htmlFor: string;
    label: string;
    children: React.ReactNode;
}

const InputLabel = ({htmlFor, label, children}: InputLabelProps) => {
  return (
    <label htmlFor={htmlFor} className="flex mb-5 items-center">
        <span className="flex-1 text-right pr-8">{label}</span>
        {children}
    </label>
  )
}

export default InputLabel