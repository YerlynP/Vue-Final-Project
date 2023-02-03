<template>
  <html>
    <body>
      <div
        style="
          height: 100%;
          width: 100%;
          display: inline-block;
          background-color: #e9c891;
        "
      >
        <div class="splitdiv" id="leftdiv">
          <div id="leftdivcard">
            <h1 style="padding-top: 20px; text-align: center">Sign Up</h1>
            <input type="Username" placeholder="Username" />
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <div style="text-align: center">
              <button
                id="leftbutton"
                class="ripple2"
                @click="$router.push('/')"
              >
                Sign-up
              </button>
            </div>
          </div>
        </div>

        <div class="splitdiv" id="rightdiv">
          <div id="rightdivcard">
            <h1
              style="
                padding-top: 20px;
                text-align: center;
                color: #ae431e;
                font-style: normal;
                font-weight: 400;
                font-size: 80px;
                line-height: 100px;
                /* or 62% */
                text-align: center;
              "
            >
              Welcome to MOODify!
            </h1>
            <p style="color: white; text-align: center">
              Already have an account? Sign-in now!
            </p>
            <div style="text-align: center">
              <button
                id="rightbutton"
                class="ripple"
                @click="$router.push('/')"
              >
                Sign In
              </button>
            </div>
          </div>
        </div>
      </div>
    </body>
  </html>
</template>

<style scoped>
@import url("https://fonts.googleapis.com/css?family=Acme|Lobster");

/* This allow me to have the full width of the page without the initial padding/margin*/
body,
html {
  margin: 0;
  padding: 0;
  height: 100%;
  width: 100%;
  font-family: Acme;
  min-width: 700px;
}

.splitdiv {
  height: 100%;
  width: 50%;
}

/* This part contains all of the left side of the screen */
/* ----------------------------------------- */
#leftdiv {
  float: right;
  background-color: #db9367;
  border-radius: 100px 10px 10px 100px;
}

#leftdivcard {
  margin: 0 auto;
  width: 50%;
  background-color: white;
  margin-top: 50vh;
  transform: translateY(-50%);
  box-shadow: 10px 10px 1px 0px rgba(78, 205, 196, 0.2);
  border-radius: 10px;
}

#leftbutton {
  background-color: #9e865c;
  border-radius: 5px;
  color: #fafafa;
}

/* ----------------------------------------- */

/* This part contains all of the left side of the screen */
/* ----------------------------------------- */
#rightdiv {
  float: right;
  background-color: #e9c891;
}

#rightdivcard {
  margin: 0 auto;
  width: 50%;
  margin-top: 50vh;
  transform: translateY(-50%);
  background-image: linear-gradient(
    to right,
    rgb(170, 44, 5) 33%,
    rgba(255, 255, 255, 0) 0%
  );
  background-position: bottom;
  background-size: 20px 2px;
  background-repeat: repeat-x;
}

#rightbutton {
  background-color: #9e865c;
  border-radius: 5px;
  color: #fafafa;
}
/* ----------------------------------------- */

/* Basic styling */
/* ----------------------------------------- */

h1 {
  font-family: Rockwell;
  color: #ae431e;
  font-size: 3em;
  font-weight: lighter;
}

input {
  font-family: Acme;
  font-size: 16px;
}

input {
  width: 85%;
  height: 40px;
  padding: 10px;
  margin-left: 4%;
  margin-right: 2%;
  margin-top: 10px;
  margin-bottom: 10px;
  display: inline-block;
  background-color: #e9c891;
  border: none;
  border-radius: 40px;
}

input:focus {
  outline: none !important;
  border: 1px solid #e9c891;
  box-shadow: 0 0 5px #e9c891;
}

button {
  outline: none !important;
  font-family: Lobster;
  margin-bottom: 15px;
  border: none;
  font-size: 20px;
  padding: 8px;
  padding-left: 20px;
  padding-right: 20px;
}

/* ----------------------------------------- */

/* Animation for the buttons from 
  
  https://codepen.io/finnhvman/pen/jLXKJw
  
  */

.ripple {
  background-position: center;
  transition: background 0.8s;
}
.ripple:hover {
  background: #ae431e radial-gradient(circle, transparent 1%, #ae431e 1%)
    center/15000%;
}
.ripple:active {
  background-color: #ae431e;
  background-size: 100%;
  transition: background 0s;
}

.ripple2 {
  background-position: center;
  transition: background 0.8s;
}
.ripple2:hover {
  background: #ae431e radial-gradient(circle, transparent 1%, #ae431e 1%)
    center/15000%;
}
.ripple2:active {
  background-color: #ae431e;
  background-size: 100%;
  transition: background 0s;
}
</style>
