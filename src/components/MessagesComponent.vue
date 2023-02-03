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
          Messages
        </p>
        <div class="message-body">
          <div class="contacts">
            <p
              style="
                font-weight: bold;
                font-family: 'Rockwell';
                color: #ae431e;
                text-align: center;
                font-size: 20px;
              "
            >
              Contacts
            </p>
            <div
              class="contact"
              active-class="selected"
              exact
              v-for="contact in contacts"
              @click="selectContact(contact)"
            >
              {{ contact.name }}
            </div>
          </div>
          <div class="messages">
            <div v-if="selectedContact">
              <h2>{{ selectedContact.name }}</h2>
              <div v-for="message in selectedContact.messages" :key="message">
                <div
                  class="message-bubble"
                  v-if="message.from === 'contact'"
                  :style="{
                    backgroundColor: 'white',
                    float: 'left',
                    clear: 'both',
                    margin: '10px',
                    padding: '10px',
                  }"
                >
                  {{ message.text }}
                </div>
                <div
                  class="message-bubble"
                  v-else
                  :style="{
                    backgroundColor: '#E9C891',
                    float: 'right',
                    clear: 'both',
                    margin: '10px',
                    padding: '10px',
                  }"
                >
                  {{ message.text }}
                </div>
              </div>
            </div>
            <div class="input-area">
              <input type="text" v-model="newMessageText" />
              <button @click="sendMessage">Send</button>
            </div>
          </div>
        </div>
      </div>
    </router-view>
  </div>
</template>

<script>
export default {
  data() {
    return {
      contacts: [
        {
          name: "Glee",
          messages: [
            {
              from: "contact",
              text: "Just one small positive thought in the morning can change your whole day!",
            },
            { from: "user", text: "Thanks! :)" },
            { from: "contact", text: "How are you?" },
            { from: "user", text: "I'm doing well, thank you!" },
            { from: "contact", text: "Goodbye!" },
            { from: "user", text: "See you later!" },
          ],
        },
        {
          name: "Lavvvv",
          messages: [
            { from: "contact", text: "Hi!" },
            { from: "user", text: "Hello! How's your day going?" },
            { from: "contact", text: "I'm doing well, thank you!" },
            { from: "user", text: "That's great to hear!" },
            { from: "contact", text: "See you later!" },
            { from: "user", text: "Goodbye!" },
          ],
        },
      ],
      selectedContact: null,
      newMessageText: "",
    };
  },
  methods: {
    selectContact(contact) {
      this.selectedContact = contact;
    },
    sendMessage() {
      if (this.newMessageText) {
        this.selectedContact.messages.push({
          from: "user",
          text: this.newMessageText,
        });
        this.newMessageText = "";
      }
    },
  },
};
</script>

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
.contact.selected {
  border-bottom: 2px solid white;
}
.message-body {
  display: flex;
  height: 500px;
}

.contacts {
  width: 20%;
  padding: 20px;
  flex-direction: column;
  justify-content: space-between;
  margin: 10px;
  height: 400px;
  border-radius: 10px;
  background: rgba(174, 67, 30, 0.24);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 30px;
  height: 450px;
}

.contact {
  cursor: pointer;
  margin-bottom: 10px;
  background: rgba(174, 67, 30, 0.24);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 30px;
  width: 100%;
  height: 10%;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-family: "Rockwell";
  color: #ae431e;
  text-align: center;
}

.messages {
  width: 80%;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  background: rgba(174, 67, 30, 0.24);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 30px;
  font-family: "Rockwell";
  color: #ae431e;
  overflow-y: auto;
}

.message-bubble {
  padding: 10px 20px;
  border-radius: 20px;
  margin-bottom: 10px;
}

h2 {
  text-align: center;
}
.input-area {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 0;
  padding: 10px;
}

.input-area input[type="text"] {
  flex-grow: 1;
  padding: 10px;
  font-size: 16px;
  border-radius: 10px;
}

.input-area button {
  padding: 10px 20px;
  background-color: #ae431e;
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
}
</style>
