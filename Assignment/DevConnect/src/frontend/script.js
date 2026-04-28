const API = "http://localhost:5000/api";
let token = "";


// REGISTER
async function register() {
  await fetch(`${API}/auth/register`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      name: name.value,
      email: email.value,
      password: password.value,
    }),
  });
  alert("Registered!");
}

// LOGIN
async function login() {
  const res = await fetch(`${API}/auth/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      email: loginEmail.value,
      password: loginPassword.value,
    }),
  });

  const data = await res.json();

   localStorage.setItem("token", data.token);
   window.location.href = "dashboard.html";

  alert("Logged in!");
  window.location.href = "dashboard.html"; // ✅ REDIRECT
}
// async function login() {
//   const res = await fetch(`${API}/auth/login`, {
//     method: "POST",
//     headers: { "Content-Type": "application/json" },
//     body: JSON.stringify({
//       email: loginEmail.value,
//       password: loginPassword.value,
//     }),
//   });

//   const data = await res.json();
//   token = data.token;
//   alert("Logged in!");
// }


function showRegister() {
  document.getElementById("loginBox").classList.add("hidden");
  document.getElementById("registerBox").classList.remove("hidden");
}

function showLogin() {
  document.getElementById("loginBox").classList.remove("hidden");
  document.getElementById("registerBox").classList.add("hidden");
}
// CREATE POST
async function createPost() {
  await fetch(`${API}/posts`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: token,
    },
    body: JSON.stringify({
      title: title.value,
      content: content.value,
    }),
  });
  alert("Post created!");
}

// GET POSTS
async function getPosts() {
  const res = await fetch(`${API}/posts`);
  const data = await res.json();

  posts.innerHTML = "";

  data.forEach((p) => {
    const li = document.createElement("li");
    li.innerText = `${p.title} - ${p.content}`;
    posts.appendChild(li);
  });
}
