/* InboxHero AI – client-side loader and demo simulator */

const components = [
  "header",
  "hero",
  "demo",
  "features",
  "pricing",
  "faq",
  "contact",
  "footer"
];

// dynamically inject each component into its matching #id
window.addEventListener("DOMContentLoaded", async () => {
  for (const name of components) {
    try {
      const res = await fetch(`/components/${name}.html`);
      const html = await res.text();
      document.getElementById(name).innerHTML = html;
    } catch (err) {
      console.error("Could not load", name, err);
    }
  }

  // observe hero button once loaded
  setTimeout(() => {
    const btn = document.querySelector("#hero-section .btn-primary");
    if (btn) btn.addEventListener("click", runDemo);
  }, 400);
});

function runDemo() {
  const out = document.querySelector(".demo-output");
  const bar = document.querySelector(".progress > span");
  if (!out || !bar) return;

  out.innerHTML = "";
  const lines = [
    "⚡ Initializing AI workflow engine...",
    "📬 Connecting inbox and client dashboard...",
    "🤖 Training smart response models...",
    "🪄 Automating follow-ups and lead scoring...",
    "✅ InboxHero AI ready. Flow achieved."
  ];

  let step = 0;
  bar.style.width = "0%";
  const interval = setInterval(() => {
    if (step < lines.length) {
      const p = document.createElement("div");
      p.className = "demo-line";
      p.textContent = lines[step];
      out.appendChild(p);
      setTimeout(() => p.classList.add("show"), 50);
      bar.style.width = `${((step + 1) / lines.length) * 100}%`;
      step++;
    } else {
      clearInterval(interval);
    }
  }, 1200);
}
