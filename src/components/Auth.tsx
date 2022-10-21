import React, { FC, useState } from 'react';
import Login from './Login';
import Register from './Register';
import '../styles/_Auth.scss';
import '../styles/glitch-text.scss';
import Overlays from './Overlays';

export interface IAuthValues {
  email: string;
  password: string;
}

export interface IAuthProps {
  setIsAuth: (isAuth: boolean) => void;
}

const Auth: FC<IAuthProps> = ({ setIsAuth }) => {
  const [rightPanelActive, seRightPanelActive] = useState(false);

  const handleClickSignUp = () => {
    seRightPanelActive(true);
  };

  const handleClickSignIn = () => {
    seRightPanelActive(false);
  };

  return (
    <div
      className={
        rightPanelActive ? 'container right-panel-active' : 'container'
      }
    >
      <Register />
      <Login  setIsAuth={setIsAuth}/>
      <Overlays
        handleClickSignIn={handleClickSignIn}
        handleClickSignUp={handleClickSignUp}
      />
    </div>
  );
};

export default Auth;
