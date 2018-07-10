<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-md-3 align-self-start pt-3 sticky-top bg-white">
        <a class="navbar-brand text-secondary" href="https://github.com/long-woo/vue-bootstrap-selectpicker">vue-bootstrap-selecticker</a>
        <a href="https://github.com/long-woo/vue-bootstrap-selectpicker/releases">
          <img src="https://img.shields.io/npm/v/vue-bootstrap-selectpicker.svg?style=for-the-badge" alt="version">
        </a>
        <a href="https://github.com/long-woo/vue-bootstrap-selectpicker">
          <img src="https://img.shields.io/github/stars/long-woo/vue-bootstrap-selectpicker.svg?style=for-the-badge&label=Stars" alt="github stars">
        </a>
        <hr/>
        <ul class="nav flex-column text-left">
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
                <a class="nav-link">size</a>
              </li>
              <li class="nav-item">
                <a class="nav-link">is-dropdown</a>
              </li>
            </ul>
          </li>
          <li class="nav-item">
            <router-link class="nav-link nav-item-title" to="/getstart/events" :class="{'active': $route.name === 'Events'}">事件</router-link>
            <ul class="nav flex-column nav-sub-item" v-show="$route.name === 'Events'">
              <li class="nav-item">
                <a class="nav-link">changeSelect</a>
              </li>
            </ul>
          </li>
        </ul>
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
  name: 'GetStart'
}
</script>

<style scoped>
.navbar-brand {
  text-overflow: ellipsis;
  overflow: hidden;
  width: 100%;
}

.nav-item-title {
  color: #2c3e50;
  font-weight: bold;
}

.nav-item-title.active {
  color: #47B784;
}

.nav-sub-item {
  padding-left: 1rem;
}
</style>
