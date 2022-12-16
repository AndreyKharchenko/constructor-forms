import React from 'react'

interface IButton {
    text: string,
    onClick?: (e: React.MouseEvent<HTMLElement>) => void,
    style?: object,
    type?: 'submit' | undefined
}

const Button: React.FC<IButton> = ({text, style, type, onClick}) => {
  return (
    <button onClick={onClick} style={style} type={type}>{text}</button>
  )
}

export default Button