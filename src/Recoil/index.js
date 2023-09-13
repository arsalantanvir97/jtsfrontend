import { atom, selector } from 'recoil'
import { recoilPersist } from 'recoil-persist'
const { persistAtom } = recoilPersist()

export const userInfo = atom({
  key: 'userData',
  default: null,
  effects_UNSTABLE: [persistAtom],
})

export const loggedInState = atom({
  key: 'logged_in',
  default: false,
})

export const getUserLocal = selector({
  key: 'getUserLocal', // unique ID (with respect to other atoms/selectors)
  get: ({ get }) => get(userInfo),
})

export const getLoginState = selector({
  key: 'isLoggedIn',
  get: ({ get }) => get(loggedInState),
})
