import { ref } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'

const apiKey = import.meta.env.VITE_FIREBASE_API_KEY

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
  const auth = async (payload, type) => {
    const stringUrl = type === 'signup' ? 'signUp' : 'signInWithPassword'
    error.value = ''
    loader.value = true
    try {
      let response = await axios.post(
        `https://identitytoolkit.googleapis.com/v1/accounts:${stringUrl}?key=${apiKey}`,
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
    } catch (err) {
      switch (err.response.data.error.message) {
        case 'EMAIL_EXISTS':
          error.value = 'Email already exists!'
          break
        case 'OPERATION_NOT_ALLOWED':
          error.value = 'Password sign-in is disabled for this project.'
          break
        case 'INVALID_EMAIL':
          error.value = 'Invalid email address.'
          break
        case 'WEAK_PASSWORD : Password should be at least 6 characters':
          error.value = 'Password should be at least 6 characters.'
          break
        case 'EMAIL_NOT_FOUND':
          error.value = 'Email not found.'
          break
        case 'INVALID_PASSWORD':
          error.value = 'Invalid password.'
          break
        default:
          error.value = 'An unknown error occurred.'
          break
      }
      throw error.value
    } finally {
      loader.value = false
    }
  }

  return { auth, userInfo, error, loader }
})
