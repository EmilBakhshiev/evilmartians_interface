import { FC } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import '../styles/Login.scss';
import { IAuthProps, IAuthValues } from './Auth';
import toast from 'react-hot-toast';

const Login: FC<IAuthProps> = ({ setIsAuth }) => {
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email('Неккоректный email')
        .required('Обязательное поле'),
      password: Yup.string().required('Обязательное поле'),
    }),

    onSubmit: (values: IAuthValues): void => {
      const savedUser: IAuthValues = JSON.parse(
        localStorage.getItem('martians')!
      );

      if (
        values.email === savedUser.email &&
        values.password === savedUser.password
      ) {
        setIsAuth(true);
      } else {
        toast.error('Неверный email или пароль');
      }
    },
  });

  return (
    <div className='form-container sign-in-container'>
      <form className='form' noValidate onSubmit={formik.handleSubmit}>
        <h1 className='title'>Войти</h1>
        <p className='subtitle'>введите почту и пароль от вашего аккаунта</p>
        <input
          name='email'
          className='input'
          type='email'
          onChange={formik.handleChange}
          placeholder='Email'
        />
        {formik.errors.email && (
          <span className='error'>{formik.errors.email}</span>
        )}

        <input
          name='password'
          className='input'
          type='password'
          onChange={formik.handleChange}
          placeholder='Пароль'
        />
        {formik.errors.password && (
          <span className='error'>{formik.errors.password}</span>
        )}

        <button type='submit' className='login-btn'>
          Войти
        </button>
      </form>
    </div>
  );
};

export default Login;
