<script setup>
import { ref } from 'vue'

const isActiveCategory = ref(false)
const isActiveColors = ref(false)

const toggleCategory = () => {
  isActiveCategory.value = !isActiveCategory.value
}
const toggleColors = () => {
  isActiveCategory.value = !isActiveCategory.value
}

const categoryTops = ref([
  { id: 1, title: 'T-Shirt', checked: 'false' },
  { id: 2, title: 'Shirt', checked: 'false' },
  { id: 3, title: 'Jackets', checked: 'false' },
  { id: 4, title: 'Hoodies', checked: 'false' },
  { id: 5, title: 'Jeans', checked: 'false' },
])

const categoryColors = ref([
  { id: 1, color: 'Black', checked: 'false' },
  { id: 2, color: 'White', checked: 'false' },
  { id: 3, color: 'Siver', checked: 'false' },
  { id: 4, color: 'Red', checked: 'false' },
  { id: 5, color: 'Pink', checked: 'false' },
  { id: 5, color: 'Yellow', checked: 'false' },
])

console.log(categoryTops.value.title)
</script>

<template>
  <aside class="toggle__menu">
    <h3 class="toggle__menu-title">Filter</h3>
    <div class="toggle__size">
      <p>Size</p>
      <div class="toggle__size-blocks">
        <button type="button" class="toggle__block-size">XS</button>
        <button type="button" class="toggle__block-size">S</button>
        <button type="button" class="toggle__block-size">M</button>
        <button type="button" class="toggle__block-size">L</button>
        <button type="button" class="toggle__block-size">XL</button>
        <button type="button" class="toggle__block-size">2X</button>
      </div>
    </div>
    <div class="toggle__category">
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
      <ul class="toggle__accardion-list" :class="{ active: isActiveColors }">
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
    <!-- <div class="toogle__colors">
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
      <ul class="toggle__accardion-list" :class="{ active: isActiveColors }">
        <li class="toggle__accardion-subitem"></li>
        <li class="toggle__accardion-subitem" v-for="list in categoryColors" :key="list.id">
          <input
            type="checkbox"
            :id="'checkbox-' + list.id"
            class="toggle__accardion-input"
            v-model="list.checked"
          />
          <label :for="'checkbox-' + list.id" class="toggle__accardion-label">
            {{ list.color }}
          </label>
        </li>
      </ul>
    </div> -->
  </aside>
</template>
<style scoped>
.toggle__menu {
  background-color: #ffffff;
  width: 50%;
  z-index: 50;
  display: flex;
  flex-direction: column;
  padding: 30px;
  gap: 20px;
  transition: 0.2s;
}

.toggle__menu-title {
  font-weight: 600;
}

.toggle__size p {
  font-weight: 500;
}

.toggle__size {
  border-bottom: 1px dashed #c9c9c9;
}

.toggle__size-blocks {
  margin: 10px 0 20px;
  display: flex;
  justify-content: start;
  align-items: center;
  gap: 10px;
}

.toggle__block-size {
  font-weight: 500;
  justify-content: center;
  align-self: center;
  height: 40px;
  width: 38px;
  border: 1px solid #a3a3a3;
  padding-top: 2px;
}

.toggle__accardion-title {
  font-weight: 500;
  display: flex;
  justify-content: space-between;
}

.toggle__accardion-title svg {
  transition: 0.2s;
}

.toggle__accardion-content {
  margin: 10px 0;
}

.toggle__accardion-item {
  display: flex;
  height: 0px;
}

.toggle__accardion-list {
  display: flex;
  flex-direction: column;
  position: relative;
  height: 0;
  opacity: 0;
  transition: all 0.3s ease-in-out;
  overflow: hidden;
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
  gap: 10px;
  margin: 5px 0;
}

.toggle__accardion-subitem input {
  width: 20px;
  height: 20px;
  border-radius: 0;
}
</style>
