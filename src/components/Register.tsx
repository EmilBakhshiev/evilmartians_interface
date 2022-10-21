import { FC } from 'react';
import '../styles/Register.scss';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { IAuthValues } from './Auth';
import toast from 'react-hot-toast';

const Register: FC = () => {
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
      localStorage.setItem('martians', JSON.stringify(values));
      toast.success(`Пользователь ${values.email} зарегестрирован`, {
        duration: 2000,
      });
    },
  });

  return (
    <div className='form-container sign-up-container'>
      <form className='form' onSubmit={formik.handleSubmit}>
        <h1 className='title'>Создать аккаунт</h1>
        <p className='subtitle'>введите вашу почту и придумайте пароль</p>
        <input
          name='email'
          onChange={formik.handleChange}
          className='input'
          type='email'
          placeholder='Email'
        />
        {formik.errors.email && (
          <span className='error'>{formik.errors.email}</span>
        )}
        <input
          name='password'
          onChange={formik.handleChange}
          className='input'
          type='password'
          placeholder='Password'
        />
        {formik.errors.password && (
          <span className='error'>{formik.errors.password}</span>
        )}
        <button type='submit' className='register-btn'>Регистрация</button>
      </form>
    </div>
  );
};

export default Register;
