const blogData = {
  name: "Rahul Lynel D'Souza",
  role: "Senior DevOps / Site Reliability Engineer",
  blogHome: "https://medium.com/",
  posts: [
    {
      title: "How I Approach Reliable Platform Engineering",
      summary: "A practical look at reducing operational toil while improving deployment safety and reliability.",
      date: "Add date",
      url: "https://example.com/blog-post-1"
    },
    {
      title: "Kubernetes Observability: What Actually Matters",
      summary: "Key signals and dashboards I rely on for production incident response and service health.",
      date: "Add date",
      url: "https://example.com/blog-post-2"
    }
  ]
};

const blogsGrid = document.getElementById("blogs-grid");
const blogHomeLink = document.getElementById("blog-home-link");
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
  link.target = "_blank";
  link.rel = "noopener";
  link.textContent = "Read Blog";

  card.append(title, date, summary, link);
  blogsGrid.appendChild(card);
});

blogHomeLink.href = blogData.blogHome;
blogHomeLink.target = "_blank";
blogHomeLink.rel = "noopener";

footerText.textContent = `© ${new Date().getFullYear()} ${blogData.name} • ${blogData.role}`;

document.querySelectorAll(".reveal").forEach((el) => {
  const delay = Number(el.getAttribute("data-delay") || 0);
  el.style.setProperty("--delay", `${delay}ms`);
});
