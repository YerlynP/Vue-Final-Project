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
            text-align: center;
            color: #ae431e;
            font-style: normal;
            font-size: 30px;
            font-family: 'Rockwell';
          "
        >
          Profile
        </p>
        <div class="form-container">
          <h2>Edit Profile</h2>
          <form>
            <label>Email:</label>
            <input type="email" placeholder="Enter new email" />

            <label>Username:</label>
            <input type="text" placeholder="Enter new username" />

            <label>Password:</label>
            <input type="password" placeholder="Enter new password" />

            <input type="submit" value="Submit" />
          </form>
        </div>
        <div class="profile-container">
          <img
            src="https://i.pinimg.com/originals/47/09/a0/4709a06dfcdf78426e69a295d3ce6c51.jpg"
            class="profile-image"
          />
          <h1 class="profile-name">Yerlyn</h1>
          <p class="profile-bio">Email: yer***@gmail.com</p>
          <input type="submit" value="Log-out" @click="$router.push('/')" />
        </div>
      </div>
    </router-view>
  </div>
</template>

<style scoped>
#main {
  height: 100vh;
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

/* Add styles for the twitter-like feed here */
#feed {
  width: 80%;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.icon {
  width: 20px;
  height: 20px;
  margin-right: 10px;
  filter: invert(100%) sepia(0%) saturate(7485%) hue-rotate(240deg)
    brightness(102%) contrast(102%);
}

.profile-container {
  display: flex;
  flex-direction: column;
  margin-top: 30px;
  width: 35%;
  align-items: center;
  box-shadow: 2px 2px 5px #db9367;
  margin-left: 5%;
  padding: 10px;
  font-family: "Rockwell";
  color: #ae431e;
}

.profile-image {
  width: 200px;
  height: 200px;
  border-radius: 100px;
  object-fit: cover;
}

.profile-name {
  font-size: 36px;
  margin-top: 20px;
}

.profile-bio {
  margin-top: 10px;
  max-width: 400px;
}
.form-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #e9c891;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 2px 2px 5px #db9367;
  width: 50%;
  margin: auto;
  float: right;
  margin-right: 5%;
  font-family: "Rockwell";
  color: #ae431e;
}

form {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
}

input[type="text"],
input[type="email"],
input[type="password"] {
  width: 100%;
  padding: 10px;
  margin-bottom: 20px;
  border: none;
  border-radius: 5px;
  box-shadow: 2px 2px 5px #ae431e;
}

input[type="submit"] {
  width: 30%;
  padding: 10px;
  background-color: #ae431e;
  color: #fff;
  border: none;
  border-radius: 5px;
  box-shadow: 2px 2px 5px #333;
  cursor: pointer;
}

input[type="submit"]:hover {
  background-color: #fff;
  color: #333;
}
</style>
