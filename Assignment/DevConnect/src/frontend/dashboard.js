const API = "http://localhost:5000/api";
const token = localStorage.getItem("token");

if (!token) {
  window.location.href = "index.html";
}

function logout() {
  localStorage.removeItem("token");
  window.location.href = "index.html";
}

async function createPost() {
  try {
    const formData = new FormData();

    formData.append("title", title.value);
    formData.append("image", image.files[0]);

    const res = await fetch(`${API}/posts`, {
      method: "POST",
      headers: {
        Authorization: "Bearer " + token,
      },
      body: formData,
    });

    const data = await res.json();

    if (!res.ok) {
      alert(data.message || "Error creating post");
      return;
    }

    alert("Post created!");
    getPosts();
  } catch (err) {
    console.error(err);
    alert("Error creating post");
  }
}

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

async function getPosts() {
  try {
    const res = await fetch(`${API}/posts/me`, {
      headers: {
        Authorization: "Bearer " + token,
      },
    });

    const data = await res.json();

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
      ${p.image ? `<img src="http://localhost:5000/uploads/${p.image}" width="200">` : ""}
      ${p.author?.name ? `<small>By: ${p.author.name}</small><br>` : ""}
  
      <button onclick="deletePost('${p._id}')">Delete</button>`;
      
      postsDiv.appendChild(div);
    });
  } catch (err) {
    console.error(err);
    alert("Failed to load posts");
  }
}