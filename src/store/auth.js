import { createSlice } from '@reduxjs/toolkit';

export const authSlice = createSlice({
  name: 'user',
  initialState: {
    user: null,
  },
  reducers: {
    login: (state, action) => {
      state.user = action.payload; // login 액션일 때 받아 온 유저 정보들을 state.user에 저장 // 로그인하면, 전달된 정보들이 현재 유저 상태에 저장되게 함
    },
    logout: (state) => { // action 필요 없음
      state.user = null;
    }
  }
})

export const { login, logout } = authSlice.actions; // object destructuring인 듯

export const selectUser = state => state.auth.user; // useSelector에서 이용하기 위해 selecUser 변수에 유저 정보를 저장 // 강의에선 state.user.user에 했는데 난 그렇게 하면 user가 undefined라고 오류 남 왜지? // reducer 함수 설정한 이름 때문인가? auth로 했을 땐 되네? 근데 auth 있으나 없으나 똑같이 나옴, 그럴 수가 있나..?

export default authSlice.reducer;