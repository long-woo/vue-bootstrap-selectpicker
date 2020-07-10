<template>
  <div class="container">
    <div class="row">
      <div class="col-md-3 align-self-start pt-3 sticky-top bg-white">
        <a class="navbar-brand text-secondary" href="https://long-woo.github.io/vue-bootstrap-selectpicker">vue-bootstrap-selecticker</a>
        <div class="getstart-badge">
          <button ref="btnMenu" class="btn btn-link btn-menu" type="button" @click="toggleMenu">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30" width="30" height="30" focusable="false">
              <title>Menu</title>
              <path stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-miterlimit="10" d="M4 7h22M4 15h22M4 23h22"></path>
            </svg>
          </button>
          <a href="https://github.com/long-woo/vue-bootstrap-selectpicker">
            <img src="https://img.shields.io/github/stars/long-woo/vue-bootstrap-selectpicker.svg?style=for-the-badge&label=Stars" alt="github stars">
          </a>
        </div>
        <hr/>
        <transition name="menu" enter-active-class="slide-right" leave-active-class="slide-left">
          <ul class="nav flex-column text-left getstart-menu-container" v-show="showMenu">
            <li class="nav-item">
              <router-link class="nav-link nav-item-title" to="/getstart/use" :class="{'active': $route.name === 'Use'}">使用</router-link>
              <ul class="nav flex-column nav-sub-item" v-show="$route.name === 'Use'">
                <li class="nav-item">
                  <a class="nav-link">npm或yarn</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link">浏览器</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link">简单示例</a>
                </li>
              </ul>
            </li>
            <li class="nav-item">
              <router-link class="nav-link nav-item-title" to="/getstart/propertys" :class="{'active': $route.name === 'Propertys'}">属性</router-link>
              <ul class="nav flex-column nav-sub-item" v-show="$route.name === 'Propertys'">
                <li class="nav-item">
                  <a class="nav-link">dropdown-data</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link">v-model</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link">placeholder</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link">disabled</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link">multiple</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link">search</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link">size</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link">is-dropdown</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link">placement</a>
                </li>
              </ul>
            </li>
            <li class="nav-item">
              <router-link class="nav-link nav-item-title" to="/getstart/events" :class="{'active': $route.name === 'Events'}">事件</router-link>
              <ul class="nav flex-column nav-sub-item" v-show="$route.name === 'Events'">
                <li class="nav-item">
                  <a class="nav-link">input</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link">change</a>
                </li>
              </ul>
            </li>
          </ul>
        </transition>
      </div>
      <div class="col-md-9 pt-3 text-left">
        <h2>{{$route.meta.title || ''}}</h2>
        <router-view/>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'GetStart',
  data () {
    return {
      showMenu: true
    }
  },
  methods: {
    toggleMenu () {
      this.showMenu = !this.showMenu
    }
  }
}
</script>

<style scoped>
.navbar-brand {
  text-overflow: ellipsis;
  overflow: hidden;
  width: 100%;
}

.btn-menu {
  position: absolute;
  left: 0;
  margin-top: -0.5rem;
  display: none;
  color: #47b784;
}

.getstart-menu-container {
  overflow-y: auto;
}

.nav-item-title {
  color: #2c3e50;
  font-weight: bold;
}

.nav-item-title.active {
  color: #47b784;
}

.nav-sub-item {
  padding-left: 1rem;
}

.slide-right {
  animation: slideRight 0.3s ease-in;
}

.slide-left {
  animation: slideLeft 0.3s ease-in;
}

@media (max-width: 576px) {
  hr {
    margin-bottom: 0;
  }

  .btn-menu {
    display: block;
  }
}

@keyframes slideRight {
  0% {
    transform: translateX(0);
  }

  50% {
    transform: translateX(105%);
  }

  100% {
    transform: translateX(100%);
  }
}

@keyframes slideLeft {
  0% {
    transform: translateX(100%);
  }

  50% {
    transform: translateX(105%);
  }

  100% {
    transform: translateX(0);
  }
}
</style>
