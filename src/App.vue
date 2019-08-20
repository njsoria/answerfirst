<template>
  <div id="app">
    <div id="nav">
      <img class="logo" alt="CANN & Co. logo" src="./assets/logo.png" />
      <router-link to="/orders"><button class="btn btn-success ">Orders</button></router-link> |
      <router-link to="/schedule"><button class="btn btn-primary ">Schedule</button></router-link> |
      <router-link to="/mailing"><button class="btn btn-warning ">Mailing List</button></router-link> |
      <router-link to="/returns"><button class="btn btn-danger ">Returns/Refunds</button></router-link>
    </div>
    <router-view />
  </div>
</template>

<style>
.form{
  align-items:center;
  justify-content:space-around;
  display:flex;
}

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 5px;
  border-bottom: 5px solid #88b14b;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

.logo{
  max-width: 150px;
  padding-right: 10px;
}

.window-frame{
  display: block;
  width: 100vw;
  height: 90vh;
  max-width: 100%;
  margin: 0;
  padding: 0;
  border: 0 none;
  box-sizing: border-box;
}

#mc_embed_signup{
  background:#fff; 
  clear:left; 
  font:14px Helvetica,Arial,sans-serif; 
}
</style>
