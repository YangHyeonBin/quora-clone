import { ReactComponent as Logo } from '../../assets/login/logo.svg';
import { ReactComponent as GoogleLogo } from '../../assets/login/google.svg';
import { ReactComponent as FacebookLogo } from '../../assets/login/facebook.svg';
import Card from '../UI/Card';

import styles from './Login.module.css';

const Login = () => {
  return (
    <section className={styles.wrapper}>
      <h1 className={styles['sr-only']}>Login to visit Quora</h1>
      <header aria-label="Quora logo" className={styles.logo}>
        <Logo />
        <p className={styles['logo-description']}>
          A place to share knowledge and better understand the world
        </p>
      </header>
      <main>
        <div className={styles['main-box']}>
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
            <button type="button" className={styles['sign-up-button']}>
              Sign up with email
            </button>
          </section>
        </div>
        <form className={styles['main-box']}>
          <header className={styles['login-header']}>Login</header>
          <div className={styles['input-container']}>
            <label htmlFor="email" className={styles['input-label']}>
              Email
            </label>
            <input type="text" id="email" placeholder="Your email" />
          </div>
          <div className={styles['input-container']}>
            <label htmlFor="password" className={styles['input-label']}>
              Password
            </label>
            <input type="text" id="password" placeholder="Your password" />
          </div>
          <div className={styles['button-container']}>
            <button disabled className={styles['login-button']}>
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
        <span className={styles.copyright}>© Quora, Inc. 2022</span>
      </footer>
    </section>
  );
};

export default Login;
