<script setup>
document.title = 'E-SHOP - Home'

import { ref, onMounted } from 'vue'
import { useAuthStore } from '../stores/auth'
import axios from 'axios'

const authStore = useAuthStore()
const shirts = ref()
const showLoader = ref(false)

const getShirts = async () => {
  showLoader.value = true
  try {
    const response = await axios.get(
      `https://e-shop-8d4b7-default-rtdb.asia-southeast1.firebasedatabase.app/shirt.json?auth=${authStore.userInfo.token}`,
    )
    console.log(response.data)
    shirts.value = response.data
  } catch (error) {
    console.log('Error fetching shirts:', error)
  } finally {
    showLoader.value = false
    console.log(shirts.value)
  }
}

onMounted(async () => {
  await getShirts()
})
</script>
<template>
  <div class="loader" v-if="showLoader">
    <svg width="50" height="50" viewBox="0 0 38 38" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient x1="8.042%" y1="0%" x2="65.682%" y2="23.865%" id="a">
          <stop stop-color="#007bff" stop-opacity="0" offset="0%" />
          <stop stop-color="#007bff" stop-opacity=".631" offset="63.146%" />
          <stop stop-color="#007bff" offset="100%" />
        </linearGradient>
      </defs>
      <g fill="none" fill-rule="evenodd">
        <g transform="translate(1 1)">
          <path d="M36 18c0-9.94-8.06-18-18-18" id="Oval-2" stroke="url(#a)" stroke-width="3">
            <animateTransform
              attributeName="transform"
              type="rotate"
              from="0 18 18"
              to="360 18 18"
              dur="0.9s"
              repeatCount="indefinite"
            />
          </path>
          <circle fill="#007bff" cx="36" cy="18" r="1">
            <animateTransform
              attributeName="transform"
              type="rotate"
              from="0 18 18"
              to="360 18 18"
              dur="0.9s"
              repeatCount="indefinite"
            />
          </circle>
        </g>
      </g>
    </svg>
  </div>
  <div class="cards" v-else>
    <div class="card" v-for="shirt in shirts" :key="shirt.id">
      <img src="/public/shirts/shirt-1.jpg" :alt="shirt.name" />
      <div class="card-text">
        <h2>{{ shirt.name }}</h2>
        <p>Price: ${{ shirt.price }}</p>
        <button>Add to Cart</button>
      </div>
    </div>
  </div>
</template>
<style scoped>
.cards {
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: start;
  width: 100%;
  gap: 20px;
}

.card {
  width: 200px;
  height: 300px;
  border-radius: 10px;
  background-color: #fff;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
}

.card img {
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 10px 10px 0 0;
}

.card-text {
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 5px;
  width: 100%;
}

.card-text h2 {
  text-transform: capitalize;
  font-weight: 500;
}

.card-text button {
  justify-content: center;
  align-content: center;
  background-color: #000;
  height: 25px;
  border-radius: 4px;
  font-size: 14px;
  color: #fff;
  width: 100%;
}

.loader {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
</style>
