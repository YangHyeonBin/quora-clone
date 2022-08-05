import { ReactComponent as Logo } from '../../assets/login/logo.svg';
import { ReactComponent as GoogleLogo } from '../../assets/login/google.svg';
import { ReactComponent as FacebookLogo } from '../../assets/login/facebook.svg';

// import { auth, provider } from '../../firebase';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

import SignUp from '../sign-up/SignUp';

import styles from './Login.module.css';
import { useReducer, useState } from 'react';

// const emailReducer = (state, action) => {
//   if (action.type === 'USER_INPUT') {
//     return {
//       value: action.val,
//       isValid: action.val.includes('@'),
//     };
//   }
//   if (action.type === 'INPUT_BLUR') {
//     return {
//       value: state.value,
//       isValid: state.value.includes('@'),
//     };
//   }
//   return {
//     value: '',
//     isValid: false,
//   };
// };

const Login = () => {
  // const [emailState, dispatchEmail] = useReducer(emailReducer, {
  //   value: '',
  //   isValid: null,
  // });

  // const { isValid: emailIsValid } = emailState; // object destructuring

  // const [password, setPassword] = useState('');

  // const emailChangeHandler = (e) => {
  //   dispatchEmail({
  //     type: 'USER_INPUT',
  //     val: e.target.value,
  //   });
  //   console.log(emailState)
  // };

  // const validateEmailHandler = () => {
  //   dispatchEmail({
  //     type: 'INPUT_BLUR',
  //   });
  // };

  // const passwordIsValid = (password) => {
  //   password.trim().length > 0
  // }

  // const passwordChangeHandler = (e) => {
  //   setPassword(e.target.value);
  //   passwordIsValid(e.target.value)
  // }

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [formIsValid, setFormIsValid] = useState(false);
  const [showSignUp, setShowSignUp] = useState(false);

  const emailChangeHandler = (e) => {
    setEmail(e.target.value);
  };

  const passwordChangeHandler = (e) => {
    setPassword(e.target.value);
  }

  const formChangeHandler = (e) => {
    if (
      email.includes('@') &&
      password.trim().length > 0
    ) {
      setFormIsValid(true)
    }
  }

  const submitHandler = (e) => {
    e.preventDefault();

    const auth = getAuth();

    createUserWithEmailAndPassword(auth, email, password).then(
      userCredential => {
        const user = userCredential.user;
      }
    ).catch(error => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode, errorMessage);
    })

    console.log(email);
    console.log(password);

    setEmail('');
    setPassword('');
    setFormIsValid(false);
  }

  const signUpBtnClickHandler = () => {
    setShowSignUp(true);
  };

  const closeSignUpBtnHandler = () => {
    setShowSignUp(false);
    
  }

  return (
    <div className={styles.wrapper}>
      <section className={styles['login-page']}>
        <h1 className={styles['sr-only']}>Login to visit Quora</h1>
        <header aria-label="Quora logo" className={styles.logo}>
          <Logo />
          <p className={styles['logo-description']}>
            A place to share knowledge and better understand the world
          </p>
        </header>
        <main className={styles.main}>
          <div className={`${styles['main-box']} ${styles.left}`}>
            <p className={styles['policy-description']}>
              By continuing you indicate that you agree to Quora's{' '}
              <a href="#" target="_blank" rel="noreferrer noopener">
                Terms of Service
              </a>{' '}
              and{' '}
              <a href="#" target="_blank" rel="noreferrer noopener">
                Privacy Policy
              </a>
              .
            </p>
            <section aria-label="Login with other social services">
              <button type="button" className={styles['social-login']}>
                <GoogleLogo />
                <span className={styles['social-login-text']}>
                  Continue with Google
                </span>
              </button>
              <button type="button" className={styles['social-login']}>
                <FacebookLogo />
                <span className={styles['social-login-text']}>
                  Continue with Facebook
                </span>
              </button>
            </section>
            <section aria-label="Sign up">
              <button type="button" className={styles['sign-up-button']} onClick={signUpBtnClickHandler}>
                Sign up with email
              </button>
              {showSignUp && <SignUp onHideSignUp={closeSignUpBtnHandler} />}
            </section>
          </div>
          <form className={styles['main-box']} onChange={formChangeHandler} onSubmit={submitHandler}>
            <header className={styles['login-header']}>Login</header>
            <div className={styles['input-container']}>
              <label htmlFor="email" className={styles['input-label']}>
                Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="Your email"
                onChange={emailChangeHandler}
                value={email}
              />
            </div>
            <div className={styles['input-container']}>
              <label htmlFor="password" className={styles['input-label']}>
                Password
              </label>
              <input
                type="password"
                id="password"
                placeholder="Your password"
                onChange={passwordChangeHandler}
                value={password}
              />
            </div>
            <div className={styles['button-container']}>
              <button disabled={!formIsValid ? true : false} className={styles['login-button']}>
                Login
              </button>
              <button className={styles['forgot-password']} type="button">
                Forgot password?
              </button>
            </div>
          </form>
        </main>
        <footer className={styles.footer}>
          <section
            aria-label="More information about Quora"
            className={styles.links}
          >
            <a href="#" target="_blank" rel="noreferror noopener">
              <span className={styles['link-text']}>About</span>
            </a>
            <a href="#" target="_blank" rel="noreferror noopener">
              <span className={styles['link-text']}>Careers</span>
            </a>
            <a href="#" target="_blank" rel="noreferror noopener">
              <span className={styles['link-text']}>Privacy</span>
            </a>
            <a href="#" target="_blank" rel="noreferror noopener">
              <span className={styles['link-text']}>Terms</span>
            </a>
            <a href="#" target="_blank" rel="noreferror noopener">
              <span className={styles['link-text']}>Contact</span>
            </a>
            <a href="#" target="_blank" rel="noreferror noopener">
              <span className={styles['link-text']}>Languages</span>
            </a>
            <a href="#" target="_blank" rel="noreferror noopener">
              <span className={styles['link-text']}>Your Ad Choices</span>
            </a>
            <a href="#" target="_blank" rel="noreferror noopener">
              <span className={styles['link-text']}>Press</span>
            </a>
          </section>
          <span className={styles.copyright}>&copy; Quora, Inc. 2022</span>
        </footer>
      </section>
    </div>
  );
};

export default Login;
