import { FC, useState } from 'react';
import './styles/App.scss';
import Auth from './components/Auth';
import { Toaster } from 'react-hot-toast';

const App: FC = () => {
  const [isAuth, setIsAuth] = useState<boolean>(false);

  return (
    <div className='app-container'>
      {isAuth ? (
        <h1
          className='title-cyberpunk glitch-text glitch layers'
          data-text='Welcome to Eart'
        >
          <span>Welcome to Earth</span>
        </h1>
      ) : (
        <Auth setIsAuth={setIsAuth} />
      )}

      <div className='background'></div>
      <Toaster />
    </div>
  );
};

export default App;
