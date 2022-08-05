import { Fragment } from 'react';
import ReactDOM from 'react-dom';

import { ReactComponent as CloseBtn } from '../../assets/sign-up/close.svg';

import Card from '../UI/Card';
import styles from './SignUp.module.css';

const Backdrop = (props) => {
  return <div className={styles.backdrop} onClick={props.onHideSignUp} />;
}

const SignUpOverlay = (props) => {
  return (
    <Card className={styles['sign-up']}>
      <button onClick={props.onHideSignUp}>
        <CloseBtn />
      </button>

    </Card>
  );
};

const SignUp = (props) => {
  const portalElement = document.getElementById('modal-root');

  return (
    <Fragment>
      {ReactDOM.createPortal(
        <Backdrop onHideSignUp={props.onHideSignUp} />,
        portalElement
      )}
      {ReactDOM.createPortal(
        <SignUpOverlay onHideSignUp={props.onHideSignUp}>{props.children}</SignUpOverlay>,
        portalElement
      )}
    </Fragment>
  );
};

export default SignUp;