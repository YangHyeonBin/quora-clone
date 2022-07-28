import { useSelector } from 'react-redux';
import { selectUser } from './store/auth';

import Main from './components/main/Main';
import Login from './components/login/Login';

import './App.css';

function App() {
  const auth = useSelector(selectUser); // 유저 정보 state를 가져옴

  return (
    <div className='App'>
      {auth ? <Main /> : <Login />}
    </div>
  );
}

export default App;
