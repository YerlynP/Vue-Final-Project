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
          Discover Stories
        </p>
        <!-- twitter-like feed design goes here -->
        <div id="feed-container">
          <div class="feed-item">
            <img
              src="https://64.media.tumblr.com/f3f02f08fb007434d4e0170c9f9d49cb/b29d1fb88dbada66-8e/s540x810/c71c71f8c19d1acf5a1fa903c241ce096bcafd15.jpg"
              class="feed-item-profile-image"
            />
            <div class="feed-item-content">
              <p class="feed-item-username">Glee</p>
              <p class="feed-item-text">
                "Not sure if anyone else does this, just looking for some
                support... I have ADHD, Anxiety, and struggle with depression
                because of it too. Life has been rough the last few months and I
                think I've just reached my breaking point. My question: Does
                anyone else just ghost work or other people when they're in that
                bad cycle? I've had my phone on do not disturb this week...I
                don't want to talk, text, or face the hard parts of working for
                this one particular client. I actively know I'm letting people
                (work) down, and I can't get out of it. I've been having nearly
                half-hour crying spells every day because of the other things
                going on, and I know my avoidance 100% comes from barely being
                able to function right now."
              </p>
              <div class="bottom-feed">
                <p
                  style="
                    float: right;
                    font-size: 10px;
                    padding-left: 4px;
                    color: #ae431e;
                  "
                >
                  14 Comments
                </p>
                <img
                  src="comment-alt-solid.svg"
                  alt=""
                  class="feed-item-comment"
                />
              </div>
            </div>
          </div>
          <div class="feed-item">
            <img
              src="https://i.pinimg.com/736x/0f/03/00/0f0300324f1f9676a97e3b3552c9ebf3.jpg"
              class="feed-item-profile-image"
            />
            <div class="feed-item-content">
              <p class="feed-item-username">Jocar</p>
              <p class="feed-item-text">
                "You gain strength, courage, and confidence by every experience
                in which you really stop to look even with fear in the face. You
                are able to say to yourself, 'I lived through this horror. I can
                take the next thing that comes along.' You must do the thing you
                think you cannot do."
              </p>
              <div class="bottom-feed">
                <p
                  style="
                    float: right;
                    font-size: 10px;
                    padding-left: 4px;
                    color: #ae431e;
                  "
                >
                  1.2k Comments
                </p>
                <img
                  src="comment-alt-solid.svg"
                  alt=""
                  class="feed-item-comment"
                />
              </div>
            </div>
          </div>
          <div class="feed-item">
            <img
              src="https://i.pinimg.com/736x/84/94/55/849455d52f8dbeb98cc7e823d9636d29.jpg"
              class="feed-item-profile-image"
            />
            <div class="feed-item-content">
              <p class="feed-item-username">Lavvvv</p>
              <p class="feed-item-text">
                It's important to remember that we all have the ability to
                overcome adversity and achieve our goals. No matter how
                difficult things may seem, never give up on your dreams. Believe
                in yourself and your abilities, and always strive to be the best
                version of yourself. Surround yourself with positive people and
                take inspiration from those who have accomplished what you wish
                to achieve. Stay focused, stay determined, and never lose sight
                of your end goal. Remember that success is not always measured
                by the destination, but by the journey, the effort, the work and
                the persistence you put in. So keep moving forward, one step at
                a time, and trust that you will get there.
              </p>
              <div class="bottom-feed">
                <p
                  style="
                    float: right;
                    font-size: 10px;
                    padding-left: 4px;
                    color: #ae431e;
                  "
                >
                  201 Comments
                </p>
                <img
                  src="comment-alt-solid.svg"
                  alt=""
                  class="feed-item-comment"
                />
              </div>
            </div>
          </div>
          <!-- additional feed items here -->
        </div>
      </div>
    </router-view>
  </div>
</template>

<style scoped>
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

.tweet {
  width: 30%;
  background-color: white;
  padding: 20px;
  margin-bottom: 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
}

.tweet img {
  width: 100%;
  border-radius: 5px 5px 0 0;
}

.tweet h3 {
  font-size: 18px;
  font-weight: bold;
  margin-top: 10px;
}

.tweet p {
  font-size: 14px;
  line-height: 1.5;
  margin-top: 10px;
}

.tweet .date {
  font-size: 12px;
  color: gray;
  margin-top: 10px;
}

.feed {
  max-width: 800px;
  margin: 0 auto;
}

#feed-container {
  width: 80%;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
}

.feed-item {
  width: 100%;
  background-color: white;
  margin: 10px 20px;
  padding: 10px 30px 10px 10px;
  border-radius: 5px;
  display: flex;
  font-family: "Cambria";
}

.feed-item-profile-image {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin-right: 10px;
}
.bottom-feed {
  display: block;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  cursor: pointer;
}
.feed-item-comment {
  width: 15px;
  height: 15px;
  float: right;
  cursor: pointer;
}

.feed-item-content {
  width: 100%;
}

.feed-item-username {
  font-weight: bold;
  font-family: "Rockwell";
  color: #ae431e;
}
</style>
