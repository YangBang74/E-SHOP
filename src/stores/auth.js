import { ref } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'

const apiKey = 'AIzaSyB1yTSKtcqud0m1rlZzq9ZGbBZVoveMYgI'

export const useAuthStore = defineStore('auth', () => {
  const userInfo = ref({
    email: '',
    token: '',
    userId: '',
    refreshToken: '',
    expiresIn: '',
  })

  const error = ref('')
  const loader = ref(false)
  const signUp = async (payload) => {
    error.value = ''
    loader.value = true
    try {
      let response = await axios.post(
        'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyB1yTSKtcqud0m1rlZzq9ZGbBZVoveMYgI',
        {
          ...payload,
          returnSecureToken: true,
        },
      )
      userInfo.value = {
        email: response.data.email,
        token: response.data.idToken,
        userId: response.data.localId,
        refreshToken: response.data.refreshToken,
        expiresIn: response.data.expiresIn,
      }
      console.log(response.data)
      loader.value = false
    } catch (err) {
      switch (err.response.data.error.message) {
        case 'EMAIL_EXISTS':
          error.value = 'Email already exists!'
          break
        case 'OPERATION_NOT_ALLOWED':
          error.value = 'Password sign-in is disabled for this project.'
          break
        case 'TOO_MANY_ATTEMPTS_TRY_LATER':
          error.value = 'Too many attempts. Try again later.'
          break
        case 'INVALID_EMAIL':
          error.value = 'Invalid email address.'
          break
        case 'WEAK_PASSWORD : Password should be at least 6 characters':
          error.value = 'Password should be at least 6 characters.'
          break
        default:
          error.value = 'An unknown error occurred.'
          break
      }
      loader.value = false
    }
  }

  return { signUp, userInfo, error, loader }
})
