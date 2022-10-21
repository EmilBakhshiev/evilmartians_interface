import React, { FC } from 'react';

interface IOverlaysProps {
  handleClickSignIn: () => void;
  handleClickSignUp: () => void;
}

const Overlays: FC<IOverlaysProps> = ({handleClickSignIn,handleClickSignUp}) => {
  return (
    <div className='overlay-container'>
      <div className='overlay'>
        <div className='overlay-panel overlay-left'>
          <h1 className='glitch-text glitch layers' data-text='Добро пожаловать на землю!'><span>Добро пожаловать на землю!</span></h1>
          <p className='subtitle'>Если у вас есть земной аккаунт, пройдите авторизацию</p>
          <button className='btn' onClick={handleClickSignIn}>
            Авторизоваться
          </button>
        </div>
        <div className='overlay-panel overlay-right'>
          <h1 className='glitch-text glitch layers' data-text='Привет, злые марсиане'>
            <span>Привет, злые марсиане!</span>
          </h1>
          <p className='subtitle'>Если у вас нет земного аккаунта, пройдите регистрацию</p>
          <button className='btn' onClick={handleClickSignUp}>
            Регистрация
          </button>
        </div>
      </div>
    </div>
  );
};

export default Overlays;
