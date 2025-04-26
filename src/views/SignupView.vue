<script setup>
import { ref } from 'vue'

const name = ref()
const mail = ref()
const password = ref()

const checkSignup = () => {
  if (/~(?![0-9])[A-Z0-9-]{3,32}$/i.test(name.value)) {
    alert('Username is valid')
  } else {
    alert('Username is invalid')
  }
}
</script>
<template>
  <div class="signup">
    <h1>Signup</h1>
    <form>
      <div>
        <label for="username">Username:</label>
        <input type="text" id="username" name="username" v-model="name" required />
      </div>
      <div>
        <label for="email">Email:</label>
        <input type="email" id="email" name="email" v-model="mail" required />
      </div>
      <div>
        <label for="password">Password:</label>
        <input type="password" id="password" name="password" v-model="password" required />
      </div>
      <button type="submit" @click="checkSignup">Signup</button>
    </form>
  </div>
</template>
<style scoped>
.signup {
  max-width: 600px;
  margin: auto;
  padding: 20px 40px;
  border-radius: 5px;
}

.signup h1 {
  text-align: center;
  font-weight: 600;
  font-size: 22px;
}

.signup form {
  margin: 20px 0;
  display: flex;
  flex-direction: column;
  row-gap: 20px;
}

.signup form div {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  column-gap: 20px;
}

.signup form div label {
  font-weight: 500;
  font-size: 14px;
  flex: 0 1 100px;
}

.signup form input {
  background-color: #ffffff;
  border: 1px solid #000000;
  border-radius: 4px;
  padding: 5px 10px;
  width: 80%;
  font-size: 14px;
}

.signup form button {
  background-color: #007bff;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 4px;
  cursor: pointer;
  font-weight: 600;
}
</style>
