const API = "http://localhost:5000/api";
let token = "";

async function register() {
  const nameInput = document.getElementById("name").value;
  const emailInput = document.getElementById("email").value;
  const passwordInput = document.getElementById("password").value;

  console.log(nameInput, emailInput, passwordInput);
  if (!nameInput || !emailInput || !passwordInput) {
    alert("Please fill all fields");
    return;
  }

  const res = await fetch(`${API}/auth/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: nameInput,
      email: emailInput,
      password: passwordInput,
    }),
  });

  const data = await res.json();
  alert(data.message);
}
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

  if (data.token) {
    localStorage.setItem("token", data.token);
    window.location.href = "dashboard.html";
  } else {
    alert(data.message);
  }
}

function showRegister() {
  document.querySelector(".login-card").classList.add("hidden");
  document.getElementById("registerBox").classList.remove("hidden");
}

function showLogin() {
  document.querySelector(".login-card").classList.remove("hidden");
  document.getElementById("registerBox").classList.add("hidden");
}

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
