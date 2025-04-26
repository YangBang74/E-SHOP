<script setup>
import ToggleCategory from './ToggleCategory.vue'
import { ref } from 'vue'
</script>
<template>
  <header class="header">
    <div class="container">
      <div class="header__wrap">
        <div class="header__left">
          <div class="header__logo">
            <a href="/">E-SHOP</a>
          </div>
          <nav class="header__menu">
            <a href="/" class="header__menu-link">Home</a>
            <a href="/collections" class="header__menu-link">Collections</a>
            <a href="/news" class="header__menu-link">News</a>
            <a href="/about-us" class="header__menu-link">About us</a>
          </nav>
        </div>
        <div class="header__actions">
          <div class="header__search">
            <input type="text" placeholder="Search..." />
          </div>
          <div class="header__item favorites">
            <a href="/favorites">
              <svg
                width="18"
                height="18"
                viewBox="0 0 17 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11.8059 15.6943L11.7597 14.9458L11.8059 15.6943ZM6.33268 5.82443L6.27619 6.5723C6.4795 6.58766 6.68029 6.51958 6.83234 6.38375C6.98439 6.24792 7.07458 6.05605 7.08216 5.8523L6.33268 5.82443ZM15.5254 12.3716L16.264 12.5015L15.5254 12.3716ZM11.7597 14.9458C10.1685 15.0438 8.53441 15.2341 6.93558 15.0486C5.37521 14.8676 3.93302 14.3326 2.75939 13.0189L1.64075 14.0182C3.12626 15.6811 4.95231 16.3286 6.76272 16.5386C8.53468 16.7442 10.3739 16.534 11.852 16.4429L11.7597 14.9458ZM2.75939 13.0189C1.61677 11.7398 1.3858 10.0269 1.96459 8.70578C2.52252 7.43233 3.89677 6.39259 6.27619 6.5723L6.38916 5.07656C3.45773 4.85516 1.43611 6.17414 0.59067 8.10384C-0.233913 9.98593 0.124246 12.3206 1.64075 14.0182L2.75939 13.0189ZM11.852 16.4429C12.3848 16.4101 12.9662 16.3726 13.4961 16.265C14.0257 16.1575 14.5862 15.9652 15.0342 15.565L14.0349 14.4464C13.8709 14.5929 13.6086 14.7116 13.1976 14.795C12.7869 14.8784 12.3101 14.9118 11.7597 14.9458L11.852 16.4429ZM16.264 12.5015C16.5206 11.043 16.936 9.23899 16.9307 7.45517C16.9254 5.63262 16.4871 3.74539 15.0016 2.08251L13.8829 3.08183C15.0566 4.3956 15.4261 5.88874 15.4307 7.45957C15.4355 9.06912 15.0629 10.6715 14.7867 12.2417L16.264 12.5015ZM15.0016 2.08251C13.4851 0.384932 11.2054 -0.233189 9.2426 0.374781C7.23015 0.998132 5.69245 2.85881 5.5832 5.79656L7.08216 5.8523C7.17084 3.46776 8.35835 2.21898 9.68642 1.80762C11.0641 1.38087 12.7403 1.80277 13.8829 3.08183L15.0016 2.08251ZM14.7867 12.2417C14.6912 12.7847 14.6044 13.2548 14.4754 13.6535C14.3464 14.0525 14.199 14.2998 14.0349 14.4464L15.0342 15.565C15.4823 15.1647 15.7363 14.6293 15.9026 14.1152C16.069 13.6007 16.1716 13.0272 16.264 12.5015L14.7867 12.2417Z"
                  fill="currentColor"
                />
              </svg>
            </a>
          </div>
          <div class="header__item cart">
            <a href="/cart">
              <svg
                width="18"
                height="18"
                viewBox="0 0 16 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1.58287 12.8256C2.51504 14 4.24996 14 7.7198 14H8.2802C11.75 14 13.485 14 14.4171 12.8256M1.58287 12.8256C0.650708 11.6511 0.970433 9.86813 1.60989 6.30212C2.06463 3.76617 2.292 2.49819 3.15523 1.74909M1.58287 12.8256C1.58287 12.8256 1.58287 12.8256 1.58287 12.8256ZM14.4171 12.8256C15.3493 11.6511 15.0296 9.86813 14.3901 6.30213C13.9354 3.76617 13.708 2.49819 12.8448 1.74909M14.4171 12.8256C14.4171 12.8256 14.4171 12.8256 14.4171 12.8256ZM12.8448 1.74909C11.9816 1 10.7478 1 8.2802 1H7.7198C5.25223 1 4.01845 1 3.15523 1.74909M12.8448 1.74909C12.8448 1.7491 12.8448 1.74909 12.8448 1.74909ZM3.15523 1.74909C3.15523 1.7491 3.15523 1.74909 3.15523 1.74909Z"
                  stroke="currentColor"
                  stroke-width="1.5"
                />
                <path
                  d="M6 4C6.29112 5.16519 7.07665 6 8 6C8.92335 6 9.70888 5.16519 10 4"
                  stroke="currentColor"
                  stroke-width="1.5"
                  stroke-linecap="round"
                />
              </svg>
            </a>
          </div>
          <div class="header__item profile">
            <a href="/profile">
              <svg
                width="18"
                height="18"
                viewBox="0 0 14 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  cx="6.99998"
                  cy="4.42857"
                  r="3.42857"
                  stroke="currentColor"
                  stroke-width="1.5"
                />
                <path
                  d="M13 13.8571C13 11.9636 10.3137 10.4286 7 10.4286C3.68629 10.4286 1 11.9636 1 13.8571"
                  stroke="currentColor"
                  stroke-width="1.5"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<style scoped>
.header {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  z-index: 50;
  background: #ffffff;
}

.header__wrap {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
}

.header__left {
  display: flex;
  align-items: center;
  gap: 1.25rem;
}

.header__logo a {
  font-weight: 700;
  font-size: 20px;
  color: #000000;
}

.header__menu {
  display: flex;
  gap: 1.25rem;
}

.header__menu-link {
  font-weight: 500;
  font-size: 16px;
  color: #000000;
  text-decoration: none;
}

.header__menu-link:hover,
.header__menu-link:visited {
  color: #797979;
}

.header__actions {
  display: flex;
  align-items: center;
  gap: 1.25rem;
}

.header__search input {
  width: 200px;
  padding: 5px 20px;
  border: 1px solid #000000;
  border-radius: 50px;
  font-size: 1rem;
}

.header__item a {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background-color: #000000;
  border-radius: 50%;
  color: #ffffff;
  transition: 0.2s;
}

.header__item.favorites a {
  transform: rotate(40deg);
}

.header__item a:hover {
  background-color: #bbbbbb;
  color: #000000;
}
</style>
