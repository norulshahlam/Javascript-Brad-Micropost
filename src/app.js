//common js moduel syntax
// const person = require("./tutorial1");

//es2015 module
import { person, sayHello } from "./tutorial2";
// console.log(person.name);
// console.log(sayHello());

//same as above but no need for braces
import greeting from "./tutorial2";
// console.log(greeting);

// if u 1 2 import everything without having to sspecifying one by one, u can do the below:
import * as mod from "./tutorial2";
// console.log(mod.person.name);
// console.log(mod.sayHello());

import { http } from "./http";
import { ui } from "./ui";

//get posts on DOM load
document.addEventListener("DOMContentLoaded", getPosts);

//listen for new post submitted
document.querySelector(".post-submit").addEventListener("click", submitPost);

//listen for delete
document.querySelector("#posts").addEventListener("click", deletePost);

//listem for edit state
document.querySelector("#posts").addEventListener("click", enableEdit);

//listem for cancel btn during edit state
document.querySelector(".card-form").addEventListener("click", cancelEdit);

function getPosts() {
  http
    .get("http://localhost:3000/posts")
    .then((data) => ui.showPosts(data))
    .catch((err) => console.log(err));
}

//submitPost
function submitPost() {
  const title = document.querySelector("#title").value;
  const body = document.querySelector("#body").value;
  const id = document.querySelector("#id").value;

  const data = {
    title,
    body,
  };

  //validate input fields b4 submit
  if (title === "" || body === "") {
    ui.showAlert("Please fill in all fields", "alert alert-danger");
  } else {
    //check for id
    if (id === "") {
      //create post

      //create post
      http
        .post("http://localhost:3000/posts", data)
        .then((data) => {
          ui.showAlert("Post Added", "alert alert-success");
          ui.clearFields();
          getPosts();
        })
        .catch((err) => console.log(err));
    } else {
      //update post

      //create post
      http
        .put(`http://localhost:3000/posts/${id}`, data)
        .then((data) => {
          ui.showAlert("Post Updated", "alert alert-success");
          ui.changeFormState("add");
          getPosts();
        })
        .catch((err) => console.log(err));
    }
  }
}

function deletePost(e) {
  if (e.target.parentElement.classList.contains("delete")) {
    const id = e.target.parentElement.dataset.id;
    // console.log(e.target.parentElement.datset.id);
    if (confirm("Are you sure?")) {
      http
        .delete(`http://localhost:3000/posts/${id}`)
        .then((data) => {
          ui.showAlert("Post Removed", "alert alert-success");
          getPosts();
        })
        .catch((err) => console.log(err));
    }
  }

  e.preventDefault();
}

function enableEdit(e) {
  if (e.target.parentElement.classList.contains("edit")) {
    const id = e.target.parentElement.dataset.id;

    const title =
      e.target.parentElement.previousElementSibling.previousElementSibling
        .textContent;

    const body = e.target.parentElement.previousElementSibling.textContent;

    const data = {
      id,
      title,
      body,
    };

    //fill form with current post
    ui.fillForm(data);
  }

  e.preventDefault();
}

function cancelEdit(e) {
  if (e.target.classList.contains("post-cancel")) {
    ui.changeFormState("add");
  }
  e.preventDefault();
}
