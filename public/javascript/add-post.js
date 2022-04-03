async function formHandler(event) {
  event.preventDefault();

  const title = document.querySelector('input[name="blog-title"]').value;
  const blog_content = document
    .querySelector('textarea[name="blog_content"]')
    .value.trim();

  const response = await fetch(`/api/posts`, {
    method: "POST",
    body: JSON.stringify({
      title,
      blog_content,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (response.ok) {
    document.location.replace("/dashboard");
  } else {
    alert(response.statusText);
  }
}

document.querySelector(".blog-form").addEventListener("submit", formHandler);
