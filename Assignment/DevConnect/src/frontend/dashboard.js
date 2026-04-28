const API = "http://localhost:5000/api";
const token = localStorage.getItem("token");

// 🚫 If not logged in
if (!token) {
  window.location.href = "index.html";
}

// LOGOUT
function logout() {
  localStorage.removeItem("token");
  window.location.href = "index.html";
}

// CREATE POST
async function createPost() {
  try {
    const res = await fetch("http://localhost:5000/api/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
      body: JSON.stringify({
        title: title.value,
        content: content.value,
      }),
    });

    const data = await res.json();
    console.log("Created:", data);

    alert("Post created!");

    getPosts(); // ✅ refresh automatically
  } catch (err) {
    console.error(err);
    alert("Error creating post");
  }
}

// GET POSTS
// async function getPosts() {
//   const res = await fetch(`${API}/posts`);
//   const data = await res.json();

//   posts.innerHTML = "";

//   data.forEach((p) => {
//     const li = document.createElement("li");

//     li.innerHTML = `
//       <b>${p.title}</b><br>
//       ${p.content}<br>
//       <small>By: ${p.author?.name || "Unknown"}</small><br>
//       <button onclick="deletePost('${p._id}')">Delete</button>
//       <hr>
//     `;

//     posts.appendChild(li);
//   });
// }

// DELETE POST
async function deletePost(id) {
  await fetch(`${API}/posts/${id}`, {
    method: "DELETE",
    headers: {
      Authorization: "Bearer " + token,
    },
  });

  alert("Deleted!");
  getPosts();
}

// Load posts automatically
async function getPosts() {
  try {
    console.log("Fetching posts..."); // DEBUG

    const res = await fetch("http://localhost:5000/api/posts");

    console.log("Response:", res); // DEBUG

    const data = await res.json();

    console.log("Data:", data); // DEBUG

    const postsDiv = document.getElementById("posts");
    postsDiv.innerHTML = "";

    if (data.length === 0) {
      postsDiv.innerHTML = "<p>No posts found</p>";
      return;
    }

    data.forEach((p) => {
      const div = document.createElement("div");
      div.className = "post";

      div.innerHTML = `
        <h3>${p.title}</h3>
        <p>${p.content}</p>
        <small>By: ${p.author?.name || "Unknown"}</small><br>
        <button class="delete-btn" onclick="deletePost('${p._id}')">Delete</button>
      `;

      postsDiv.appendChild(div);
    });
  } catch (err) {
    console.error("ERROR:", err);
    alert("Failed to load posts");
  }
}

async function createPost() {
  try {
    const res = await fetch("http://localhost:5000/api/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
      body: JSON.stringify({
        title: title.value,
        content: content.value,
      }),
    });

    const data = await res.json();
    console.log("Created:", data);

    alert("Post created!");

    getPosts(); // ✅ refresh automatically
  } catch (err) {
    console.error(err);
    alert("Error creating post");
  }
}