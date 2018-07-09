<template>
  <div id="app">
    <router-view />
    <a href="https://github.com/long-woo" target="_blank"><img style="position: fixed; top: 0; right: 0; border: 0; z-index: 1992" src="https://s3.amazonaws.com/github/ribbons/forkme_right_red_aa0000.png" alt="Fork me on GitHub"></a>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
h2 {
  margin-bottom: 2rem;
}

h4 {
  border-bottom: 0.05rem solid #e5e5e5;
  margin-bottom: 1.5rem;
  margin-top: 2rem;
  padding-bottom: 0.5rem;
}

pre {
  border-radius: 0.25rem;
  transition: all 0.3ms ease-out;
}

pre:hover {
  box-shadow: 0 0 1.5rem rgba(71, 183, 132, 0.6);
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
