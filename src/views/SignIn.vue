<script setup>
import { ref } from 'vue'
import { useAuthStore } from '@/stores/auth'
import { useRouter } from 'vue-router'

const authStore = useAuthStore()
const router = useRouter()

const email = ref()
const password = ref()

const signin = async () => {
  await authStore.auth(
    {
      email: email.value,
      password: password.value,
    },
    'signin',
  )
  router.push('/')
}
</script>
<template>
  <div class="signin">
    <h1>Sign In</h1>
    <form>
      <p class="error" v-if="authStore.error">{{ authStore.error }}</p>
      <div>
        <label for="email">Email:</label>
        <input type="email" id="email" name="email" v-model="email" placeholder="mail" />
      </div>
      <div>
        <label for="password">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          v-model="password"
          placeholder="password"
          @keypress="
            (event) => {
              if (event.key === 'Enter') {
                signin()
              }
            }
          "
        />
      </div>
      <button type="button" @click="signin">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 200 200"
          width="25px"
          height="25px"
          v-if="authStore.loader"
        >
          <radialGradient
            id="a12"
            cx=".66"
            fx=".66"
            cy=".3125"
            fy=".3125"
            gradientTransform="scale(1.5)"
          >
            <stop offset="0" stop-color="#FFFFFF"></stop>
            <stop offset=".3" stop-color="#FFFFFF" stop-opacity=".9"></stop>
            <stop offset=".6" stop-color="#FFFFFF" stop-opacity=".6"></stop>
            <stop offset=".8" stop-color="#FFFFFF" stop-opacity=".3"></stop>
            <stop offset="1" stop-color="#FFFFFF" stop-opacity="0"></stop>
          </radialGradient>
          <circle
            transform-origin="center"
            fill="none"
            stroke="url(#a12)"
            stroke-width="15"
            stroke-linecap="round"
            stroke-dasharray="200 1000"
            stroke-dashoffset="0"
            cx="100"
            cy="100"
            r="70"
          >
            <animateTransform
              type="rotate"
              attributeName="transform"
              calcMode="spline"
              dur="0.8"
              values="360;0"
              keyTimes="0;1"
              keySplines="0 0 1 1"
              repeatCount="indefinite"
            ></animateTransform>
          </circle>
          <circle
            transform-origin="center"
            fill="none"
            opacity=".2"
            stroke="#FFFFFF"
            stroke-width="15"
            stroke-linecap="round"
            cx="100"
            cy="100"
            r="70"
          ></circle>
        </svg>
        <p v-else>Sign in</p>
      </button>
    </form>
    <div>Don't have account? <a href="/signup">Sign up</a></div>
  </div>
</template>
<style scoped>
.signin {
  max-width: 700px;
  margin: auto;
  padding: 20px 40px;
  border-radius: 5px;
}

.error {
  color: red;
  font-size: 14px;
}

.signin h1 {
  font-weight: 600;
  font-size: 22px;
}

.signin form {
  margin: 20px 0;
  display: flex;
  flex-direction: column;
  row-gap: 20px;
}

.signin form div {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  column-gap: 20px;
}

.signin form div label {
  font-weight: 500;
  font-size: 14px;
  flex: 0 1 100px;
}

.signin form input {
  background-color: #ffffff;
  border: 1px solid #000000;
  border-radius: 4px;
  padding: 5px 10px;
  width: 80%;
  font-size: 14px;
}

.signin form button {
  position: relative;
  background-color: #007bff;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 4px;
  cursor: pointer;
  font-weight: 600;
  height: 40px;
}

.signin form button svg {
  position: absolute;
  top: 50%;
  transform: translate(0, -50%);
}
</style>
