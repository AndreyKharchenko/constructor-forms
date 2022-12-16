import React, { useState } from 'react'
import Button from '../common/Button';
import Input from '../common/Input';
import style from './Login.module.css';
import sibdev from '../../assets/sibdev-logo.svg'
import { signUp } from '../../store/slices/loginSlice';
import { useAppDispatch } from '../../hooks/useRedux';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [form, setForm] = useState({
    username: '',
    password: ''
  })
  
  const onSubmit = async (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    e.stopPropagation();
    try {
      const res = await dispatch(signUp(form));
      if(!!res) {
        navigate('/schemes');
      }
    } catch (error) {
      
    }
    
  }

  const update = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  return (
    <>
      <div className={style.loginContainer}>
        <form className={style.loginForm}>
          <img src={sibdev} />
          <div className={style.loginFormTitle}>Вход</div>
          <Input 
            id='username' 
            label='Логин' 
            style={{marginBottom: '1rem', border: '1px solid #E5E5E5', width: '334px', height: '30px', borderRadius: '7px'}}
            value={form.username}
            onChange={update}
          />
          <Input 
            id='password' 
            label='Пароль' 
            type='password' 
            style={{marginBottom: '1rem', border: '1px solid #E5E5E5', width: '334px', height: '30px', borderRadius: '7px'}}
            value={form.password}
            onChange={update}
          />

          <Button 
            text='Войти' 
            onClick={onSubmit}
            style={{
              height: '38px',
              width: '176px',
              backgroundColor: '#1390E5',
              border: 'none',
              borderRadius: '10px',
              color: '#FFF',
              marginTop: '2rem',
              cursor: 'pointer'
            }}
          />
        </form>
        
      </div>
    </>
  )
}

export default Login