<script setup>
import { ref } from 'vue'

const menu = ref(false)
const isActiveSize = ref(false)
const isActiveCategory = ref(false)
const isActiveColors = ref(false)
const isActivePrice = ref(false)
const isActiveCollections = ref(false)

const openAside = () => {
  menu.value = !menu.value
}

const toggleSize = () => {
  isActiveSize.value = !isActiveSize.value
}

const toggleCategory = () => {
  isActiveCategory.value = !isActiveCategory.value
}
const toggleColors = () => {
  isActiveColors.value = !isActiveColors.value
}

const togglePrice = () => {
  isActivePrice.value = !isActivePrice.value
}

const toggleCollections = () => {
  isActiveCollections.value = !isActiveCollections.value
}

const categorySizes = ref([
  { id: 1, title: 'XS', checked: false },
  { id: 2, title: 'S', checked: false },
  { id: 3, title: 'M', checked: false },
  { id: 4, title: 'L', checked: false },
  { id: 5, title: 'XL', checked: false },
])

const categoryTops = ref([
  { id: 1, title: 'T-Shirt', checked: false },
  { id: 2, title: 'Shirt', checked: false },
  { id: 3, title: 'Jackets', checked: false },
  { id: 4, title: 'Hoodies', checked: false },
  { id: 5, title: 'Jeans', checked: false },
])

const categoryColors = ref([
  { id: 1, color: '#000', title: 'Black', checked: false },
  { id: 2, color: '#fff', title: 'White', checked: false },
  { id: 3, color: '#c0c0c0', title: 'Silver', checked: false },
  { id: 4, color: '#ff0000', title: 'Red', checked: false },
  { id: 5, color: 'Pink', title: 'Pink', checked: false },
  { id: 6, color: 'Yellow', title: 'Yellow', checked: false },
])

const categoryPrice = ref([
  { id: 1, title: '0-100', checked: false },
  { id: 2, title: '100-200', checked: false },
  { id: 3, title: '200-500', checked: false },
  { id: 4, title: '500-1000', checked: false },
  { id: 5, title: '1000-2000', checked: false },
  { id: 6, title: '2000+', checked: false },
])

const categoryCollections = ref([
  { id: 1, title: 'Summer Collection', checked: false },
  { id: 2, title: 'Winter Collection', checked: false },
  { id: 3, title: 'Spring Collection', checked: false },
  { id: 4, title: 'Autumn Collection', checked: false },
])
</script>

<template>
  <aside class="toggle__menu" :class="{ active: menu }">
    <h3 class="toggle__menu-title">Filters</h3>
    <div class="toggle__size border-bottom">
      <div class="toggle__accardion-title" @click="toggleSize" :class="{ active: isActiveSize }">
        <p>Sizes</p>
        <svg
          width="7"
          height="11"
          viewBox="0 0 7 11"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M1 10L6 5.5L1 1" stroke="black" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      </div>
      <div class="toggle__size-blocks" :class="{ active: isActiveSize }">
        <div v-for="size in categorySizes" class="toggle__size-wrap">
          <button class="toggle__block-size" :key="size.id">{{ size.title }}</button>
        </div>
      </div>
    </div>
    <div class="toggle__category border-bottom">
      <div
        class="toggle__accardion-title"
        @click="toggleCategory"
        :class="{ active: isActiveCategory }"
      >
        <p>Category</p>
        <svg
          width="7"
          height="11"
          viewBox="0 0 7 11"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M1 10L6 5.5L1 1" stroke="black" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      </div>
      <ul class="toggle__accardion-list" :class="{ active: isActiveCategory }">
        <li class="toggle__accardion-subitem"></li>
        <li class="toggle__accardion-subitem" v-for="list in categoryTops" :key="list.id">
          <input
            type="checkbox"
            :id="'checkbox-' + list.id"
            class="toggle__accardion-input"
            v-model="list.checked"
          />
          <label :for="'checkbox-' + list.id" class="toggle__accardion-label">
            {{ list.title }}
          </label>
        </li>
      </ul>
    </div>
    <div class="toggle__colors border-bottom">
      <div
        class="toggle__accardion-title"
        @click="toggleColors"
        :class="{ active: isActiveColors }"
      >
        <p>Colors</p>
        <svg
          width="7"
          height="11"
          viewBox="0 0 7 11"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M1 10L6 5.5L1 1" stroke="black" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      </div>
      <ul class="toggle__accardion-list list-color" :class="{ active: isActiveColors }">
        <li class="toggle__accardion-subitem" v-for="color in categoryColors" :key="color.id">
          <div class="toggle__accardion-block">
            <div
              class="category-color-item"
              :style="{ backgroundColor: color.color }"
              @click="color.checked = !color.checked"
            ></div>
            {{ color.title }}
          </div>
        </li>
      </ul>
    </div>
    <div class="toggle__price border-bottom">
      <div class="toggle__accardion-title" @click="togglePrice" :class="{ active: isActivePrice }">
        <p>Prices</p>
        <svg
          width="7"
          height="11"
          viewBox="0 0 7 11"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M1 10L6 5.5L1 1" stroke="black" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      </div>
      <ul class="toggle__accardion-list" :class="{ active: isActivePrice }">
        <li class="toggle__accardion-subitem" v-for="price in categoryPrice" :key="price.id">
          <input
            type="checkbox"
            :id="'priceCheck-' + price.id"
            class="toggle__accardion-input"
            v-model="price.checked"
          />
          <label :for="'priceCheck-' + price.id" class="toggle__accardion-label">
            {{ price.title }} $
          </label>
        </li>
      </ul>
    </div>
    <div class="toggle__collection border-bottom">
      <div
        class="toggle__accardion-title"
        @click="toggleCollections"
        :class="{ active: isActiveCollections }"
      >
        <p>Collections</p>
        <svg
          width="7"
          height="11"
          viewBox="0 0 7 11"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M1 10L6 5.5L1 1" stroke="black" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      </div>
      <ul class="toggle__accardion-list" :class="{ active: isActiveCollections }">
        <li
          class="toggle__accardion-subitem"
          v-for="colect in categoryCollections"
          :key="colect.id"
        >
          <input
            type="checkbox"
            :id="'colectionCheck-' + colect.id"
            class="toggle__accardion-input"
            v-model="colect.checked"
          />
          <label :for="'colectionCheck-' + colect.id" class="toggle__accardion-label">
            {{ colect.title }}
          </label>
        </li>
      </ul>
    </div>
  </aside>
  <button class="header__toggle" @click="openAside">
    <span class="header__toggle-line"></span>
    <span class="header__toggle-line"></span>
    <span class="header__toggle-line"></span>
  </button>
</template>
<style scoped>
.header__toggle {
  display: block;
  width: 30px;
  height: 30px;
  z-index: 100;
  cursor: pointer;
}

.header__toggle-line {
  display: block;
  width: 100%;
  height: 1px;
  background-color: #000000;
  margin: 7px 0;
}

.header__toggle-line:nth-child(1) {
  margin: 4px 0 7px 0;
}

.toggle__menu {
  overflow: auto;
  top: 3.75rem;
  position: absolute;
  left: -1000%;
  background-color: #ffffff;
  width: 30%;
  height: 100vh;
  z-index: 50;
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  transition: 0.5s ease;
  padding: 1.875rem;
}

.toggle__menu::-webkit-scrollbar {
  display: none;
}

.toggle__menu.active {
  left: 0;
}

.toggle__menu-title {
  font-weight: 600;
  padding: 10px 0;
  font-size: 1.125rem;
}

.toggle__size p {
  font-weight: 500;
}

.border-bottom {
  border-bottom: 0.0625rem dashed #c9c9c9;
}

.toggle__size-blocks {
  margin: 0.625rem 0;
  display: none;
  flex-direction: row;
  justify-content: start;
  align-items: center;
  gap: 0.625rem;
  height: 0;
  opacity: 0;
  transition: 0.2s;
  padding-bottom: 0.625rem;
}

.toggle__size-blocks.active {
  display: flex;
  height: auto;
  opacity: 1;
}

.toggle__size-wrap {
  display: flex;
  justify-content: center;
  align-items: center;
}

.toggle__block-size {
  font-weight: 500;
  justify-content: center;
  align-self: center;
  height: 2.5rem;
  width: 2.375rem;
  border: 0.0625rem solid #a3a3a3;
  padding-top: 0.125rem;
}

.toggle__accardion-title {
  font-weight: 500;
  display: flex;
  justify-content: space-between;
}

.toggle__accardion-title p {
  margin: 0.625rem 0;
}

.toggle__accardion-title svg {
  transition: 0.2s;
}

.toggle__accardion-content {
  margin: 0.625rem 0;
}

.toggle__accardion-list {
  display: flex;
  flex-direction: column;
  position: relative;
  height: 0;
  opacity: 0;
  transition: all 0.3s ease-in-out;
  overflow: hidden;
  padding-bottom: 0.625rem;
}

.color--item {
  flex-wrap: wrap;
  color: #ff0000;
}

.toggle__accardion-list.active {
  height: auto;
  opacity: 1;
}

.toggle__accardion-title.active svg {
  transform: rotate(90deg);
}

.toggle__accardion-subitem {
  display: flex;
  align-items: center;
  gap: 0.625rem;
  margin: 0.3125rem 0;
}

.list-color {
  flex-direction: row;
  flex-wrap: wrap;
  gap: 2.5rem;
}

.list-color .toggle__accardion-subitem {
  width: 20;
}

.toggle__accardion-subitem input {
  width: 1.25rem;
  height: 1.25rem;
  border-radius: 0;
}

.list-color .toggle__accardion-subitem {
  justify-content: center;
}

.toggle__accardion-input {
  cursor: pointer;
}

.category-color-item {
  width: 1.25rem;
  height: 1.25rem;
  border: 0.0625rem solid #000;
  border-radius: 50%;
}

.toggle__accardion-block {
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 0.75rem;
}
</style>
