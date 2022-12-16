import React, { LegacyRef } from 'react'
import s from './common.module.css';

interface IInput {
    id: string,
    label: string,
    error?: string,
    type?: string,
    style?: object,
    value: string,
    onChange?: (val: React.ChangeEvent<HTMLInputElement>) => void
}

const Input: React.FC<IInput> = ({id,label,error, type, style, value, onChange}) => {
  return (
    <div className={s.inputWrapper}>
        {label &&
            <label className={s.labelWrapper} htmlFor={id}>{label}</label>
        }
        <input 
            className={s.input}
            name={id}
            id={id}
            type={type}
            style={style}
            value={value}
            onChange={onChange}
        />
        {error &&
            <span className={s.inputError}>{error}</span>
        }
    </div>
  )
}

export default Input