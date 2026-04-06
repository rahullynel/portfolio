const blogData = {
  name: "Rahul Lynel D'Souza",
  role: "Senior DevOps / Site Reliability Engineer",
  posts: [
    {
      title: "RAG vs Long-Context: If Models Can Read More, Do We Still Need Retrieval?",
      summary: "A practical reflection on the tradeoffs between retrieval-augmented generation and long-context prompting, and why hybrid systems are likely the real path.",
      date: "April 6, 2026",
      url: "blog-rag-vs-long-context.html",
      external: false
    }
  ]
};

const blogsGrid = document.getElementById("blogs-grid");
const footerText = document.getElementById("footer-text");

blogData.posts.forEach((post) => {
  const card = document.createElement("article");
  card.className = "card";

  const title = document.createElement("h3");
  title.textContent = post.title;

  const date = document.createElement("p");
  date.className = "meta";
  date.textContent = post.date;

  const summary = document.createElement("p");
  summary.textContent = post.summary;

  const link = document.createElement("a");
  link.className = "text-link repo-link";
  link.href = post.url;
  if (post.external) {
    link.target = "_blank";
    link.rel = "noopener";
  }
  link.textContent = "Read Blog";

  card.append(title, date, summary, link);
  blogsGrid.appendChild(card);
});

footerText.textContent = `© ${new Date().getFullYear()} ${blogData.name} • ${blogData.role}`;

document.querySelectorAll(".reveal").forEach((el) => {
  const delay = Number(el.getAttribute("data-delay") || 0);
  el.style.setProperty("--delay", `${delay}ms`);
});
