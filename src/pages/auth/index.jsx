import { Box } from '@mui/material';
import LoginPage from './Login/Login';
import RegisterPage from './Register/Register';
import { useLocation, useNavigate } from 'react-router-dom';
import { LoginSchema, RegisterSchema } from '../../utils/yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import styles from './styles.css';

function AuthRootComponent() {
  const location = useLocation();
  const navigate = useNavigate();

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    resolver: yupResolver(location.pathname === '/login' ? LoginSchema : RegisterSchema),
  });

  const handleSubmitForm = () => {
    console.log('Пошел конект с бекндом блять йееааа!');
  };

  return (
    <div className={styles.root}>
      <div className={styles.form} onSubmit={handleSubmit(handleSubmitForm)}>
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          flexDirection="column"
          maxWidth={640}
          margin="auto"
          padding={5}
          borderRadius={5}
          boxShadow={'-3px -2px 20px #202020'}>
          {location.pathname === '/login' ? (
            <LoginPage navigate={navigate} register={register} errors={errors} />
          ) : location.pathname === '/register' ? (
            <RegisterPage navigate={navigate} register={register} errors={errors} />
          ) : null}
        </Box>
      </div>
    </div>
  );
}

export default AuthRootComponent;
