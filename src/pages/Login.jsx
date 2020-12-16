import React from 'react';
import { useDispatch } from 'react-redux';
import * as axios from 'axios';
import { NavLink } from 'react-router-dom';
import { useForm } from 'react-hook-form';

import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';

import '../css/Login/Login.css';

import { setAuthUserActionCreator } from '../redux/actions/auth.js';

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', 
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const Login = ({history}) => {
	
  const classes = useStyles();

	let dispatch = useDispatch();

  let { register, handleSubmit } = useForm();


	const submitHandler = (values) => {
		axios.get('http://localhost:3001/users')
		.then( ({data}) => {
			let user = values;
			let isAuth = data.find( el => el.login === user.login && el.password === user.password )
			if ( isAuth ) {
				dispatch(setAuthUserActionCreator(isAuth))
				history.push('/')
			}	
				else {
					alert('Вы ввели неверные данные. Повторите попытку')
			}
		})
	}

  return (
		<div className='login__wrapper'>
			
			<NavLink to='/'><button className='backToHomeFromLogin'>Вернуться на главную</button></NavLink>

    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Вход
        </Typography>
        <form className={classes.form} noValidate onSubmit={handleSubmit(submitHandler)}>
          <TextField
            inputRef={register}
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="login"
            label="Логин"
            name="login"
            autoComplete="login"
            autoFocus
          />
          <TextField
            inputRef={register}
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Пароль"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Запомнить меня"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Войти
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                Забыли пароль?
              </Link>
            </Grid>
            <Grid item>
              <Link href="#" variant="body2">
                Регистрация
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>

   </div>

	)
}



export default Login;