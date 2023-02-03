<template>
  <div id="main" style="background-color: #e9c891">
    <nav>
      <router-link to="/stories" class="nav-item" active-class="active" exact
        ><img style="width: 30px; height: 30px" src="home-solid.svg" alt=""
      /></router-link>

      <router-link to="/diary" class="nav-item" active-class="active"
        ><img style="width: 25px; height: 25px" src="book-solid.svg" alt=""
      /></router-link>
      <router-link to="/messages" class="nav-item" active-class="active"
        ><img
          style="width: 25px; height: 25px"
          src="comment-alt-solid.svg"
          alt=""
      /></router-link>
      <router-link to="/contact" class="nav-item" active-class="active"
        ><img
          style="width: 25px; height: 25px"
          src="phone-alt-solid (2).svg"
          alt=""
      /></router-link>
      <router-link to="/profile" class="nav-item" active-class="active"
        ><img
          style="width: 50px; height: 50px; border-radius: 50%"
          src="https://i.pinimg.com/originals/47/09/a0/4709a06dfcdf78426e69a295d3ce6c51.jpg"
          alt=""
      /></router-link>
    </nav>
    <router-view>
      <div class="feed">
        <p
          style="
            padding-top: 2px;
            text-align: left;
            color: #ae431e;
            font-style: normal;
            font-size: 30px;
            font-family: 'Rockwell';
            margin-left: 200px;
          "
        >
          Help is Available!
        </p>
        <div class="contacts">
          <p>National Center for Mental Health Crisis Hotline</p>
          <p style="font-weight: normal; margin-left: 30px">0966-351-4518</p>
          <p>HOPELINE</p>
          <p style="font-weight: normal; margin-left: 30px">0966-351-4518</p>
          <p>In Touch: Crisis Line</p>
          <p style="font-weight: normal; margin-left: 30px">02-8893-7603</p>
          <p style="font-weight: normal; margin-left: 0px; margin-top: 140px">
            Need professional help? Don’t hesitate to contact the
          </p>
          <p style="font-weight: normal; margin-left: 0px; margin-top: 1px">
            Philippine’s Mental Health Hotlines!
          </p>
        </div>
      </div>
    </router-view>
  </div>
</template>

<style scoped>
#main {
  height: 100vh;
  background-image: url("https://static.vecteezy.com/system/resources/previews/004/928/056/original/mental-health-awareness-with-meditation-background-free-vector.jpg");
  background-size: cover;
}

body,
html {
  position: relative;
  width: 1336px;
  height: 768px;

  background: #e9c891;
  border-radius: 40px;
}
nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background-color: #db9367;
  color: white;
  font-family: "Rockwell";
}

.nav-item {
  color: white;
  text-decoration: none;
  margin-right: 15px;
  font-weight: bold;
}

.nav-item.active {
  border-bottom: 2px solid white;
}
.contacts {
  padding-top: 4px;
  text-align: left;
  color: #ae431e;
  font-style: normal;
  font-size: 20px;
  font-family: "Rockwell";
  margin-left: 100px;
  font-weight: bold;
}
</style>
