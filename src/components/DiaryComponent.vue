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
          Diary
        </p>

        <div class="library">
          <div
            class="book"
            v-for="(book, index) in books"
            @click="openTextbox(book)"
          >
            <div class="book-title">{{ book.title }}</div>
          </div>
          <button class="add-button" @click="addBook()">Add</button>
          <div v-if="selectedBook" class="textbox-panel">
            <div class="textbox-header">
              <input
                v-model="selectedBook.title"
                @input="updateBookTitle()"
                placeholder="Insert Title"
                class="title-input"
              />
              <button
                style="
                  width: 100px;
                  height: 36px;
                  background: #db9367;
                  border-radius: 20px;
                  border: none;
                  cursor: pointer;
                  font-family: 'Rockwell';
                  color: #fff;
                  margin-left: 10px;
                "
                @click="deleteBook(index)"
              >
                Delete
              </button>
              <button
                style="
                  width: 100px;
                  height: 36px;
                  background: #db9367;
                  border-radius: 20px;
                  border: none;
                  cursor: pointer;
                  font-family: 'Rockwell';
                  color: #fff;
                  margin-left: 10px;
                "
                @click="closeTextbox()"
              >
                Save
              </button>
            </div>
            <div class="textbox-body">
              <textarea
                v-model="selectedBook.text"
                :style="{ height: textareaHeight + 'px' }"
              ></textarea>
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
      books: [
        { title: "New Journal", text: "Enter Text" },
        { title: "New Journal", text: "Enter Text" },
        { title: "New Journal", text: "Enter Text" },
      ],
      selectedBook: null,
    };
  },
  methods: {
    openTextbox(book) {
      this.selectedBook = book;
    },
    closeTextbox() {
      this.selectedBook = null;
    },
    addBook() {
      this.books.push({ title: "New Journal", text: "Enter Text" });
    },
    updateBookTitle() {
      // this method will be triggered when the title of the selected book is updated
    },
    deleteBook() {
      let index = this.books.indexOf(this.selectedBook);
      if (index !== -1) {
        this.books.splice(index, 1);
      }
      this.selectedBook = null;
    },
  },
};
</script>

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

.library {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  background-color: #e9c891;
  padding: 20px;
  font-family: "Rockwell";
  color: #ae431e;
}

.book {
  width: 186px;
  height: 209px;
  left: 143px;
  top: 397px;

  background: rgba(174, 67, 30, 0.24);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 30px;
  margin: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  cursor: pointer;
}

.textbox-panel {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 1000px;
  height: 500px;
  background-color: #fff;
  box-shadow: 2px 2px 2px #ccc;
}

.textbox-header {
  background-color: #ae431e;
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
}

.textbox-body {
  padding: 20px;
  height: 90%;
}

textarea {
  width: 100%;
  height: calc(100% - 60px);
  padding: 10px;
  box-sizing: border-box;
  resize: none;
}
.add-button {
  width: 122px;
  height: 36px;
  left: 158px;
  top: 658px;

  background: #ae431e;
  border-radius: 20px;
  border: none;
  cursor: pointer;
  font-family: "Rockwell";
  color: #fff;
}
textarea:focus {
  outline: none;
  border: none;
}
.title-input {
  align-items: center;
  background-color: #ae431e;
  font-family: "Cambria";
  color: #fff;
  font-size: 20px;
  width: 90%;
}
.book-title {
  display: inline-block;
}
</style>
