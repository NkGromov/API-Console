import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useHistory, withRouter} from 'react-router-dom';
import {authenticate} from 'src/store/actions/auth';
import {Dispatch} from 'redux';
import {LoginForm, LogoStyled, Title, Wrapper, Button} from './LoginStyle';
import {Form, Formik} from 'formik';
import Error from 'src/components/error/Error';
import * as Yup from 'yup';
import Loader from 'src/components/loader/Loader';
import Inputs from 'src/components/inputs/Inputs';

interface RootState {
  auth: {
    loading: boolean;
    sessionKey: string;
    login: string;
    sublogin: string;
    error: string;
    isFetching: boolean;
  };
}

interface MyFormValues {
  login: string;
  sublogin: string;
  password: string;
}

const LoginPage: React.FC = () => {
  const dispatch = useDispatch<Dispatch<any>>();
  const history = useHistory();

  const isLoggedIn = useSelector((state: RootState) => !!state.auth.sessionKey?.length);
  const error = useSelector((state: RootState) => state.auth.error);
  const isFetching = useSelector((state: RootState) => state.auth.isFetching);
  const initialValues: MyFormValues = {
    login: '',
    sublogin: '',
    password: '',
  };
  const LoginValidSchema = Yup.object().shape({
    login: Yup.string()
      .required('Required')
      .matches(/[^а-яА-Я]/),
    password: Yup.string()
      .required('Required')
      .matches(/[^а-яА-Я]/),
  });

  useEffect(() => {
    if (isLoggedIn) {
      history.push('/console');
    }
  }, [isLoggedIn]);

  const doLogin = (values: MyFormValues) => {
    dispatch(authenticate(values));
  };

  return (
    <Wrapper>
      <LogoStyled src="/icons/logo.svg" alt="Логотип" />
      <LoginForm>
        <Title>API-консолька</Title>
        <Formik initialValues={initialValues} validationSchema={LoginValidSchema} onSubmit={doLogin}>
          {({errors, isValid}) => (
            <Form>
              {error && <Error title="Вход не вышел" description={error} />}
              {Inputs('Логин', 'login', 'text', errors.login)}
              {Inputs('Саблогин', 'sublogin', 'text')}
              {Inputs('Пароль', 'password', 'password', errors.password)}
              <Button type="submit" disabled={!isValid}>
                {isFetching ? <Loader /> : 'Войти'}
              </Button>
            </Form>
          )}
        </Formik>
      </LoginForm>
    </Wrapper>
  );
};

export default LoginPage;
