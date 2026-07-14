export const profile = {
  name: "Rapolu Eswara Balu",
  first: "Rapolu",
  role: "AI/ML Engineer & Researcher",
  focus: "Agentic AI · LLMs · Deep Learning",
  location: "India",
  available: true,
  email: "balu123456sbb@gmail.com",
  github: "https://github.com/MrArrogant2002",
  photo: "/profile.jpg",
  tagline:
    "I build autonomous agents, RAG systems, and deep-learning models — and ship them as products people can actually use.",
  about: [
    "I'm an AI/ML engineer and researcher focused on agentic systems, large language models, and deep learning. My day-to-day is designing agent loops, retrieval pipelines, and models — then wrapping them in interfaces that make the intelligence usable.",
    "I write IEEE-style research and care about clean, secure code. The work below is real and deployed: an autonomous research agent, an in-browser RAG system, and a full-stack product — all built end-to-end.",
  ],
};

export const stats = [
  { value: "05", label: "products, live" },
  { value: "IEEE", label: "research track" },
  { value: "∞", label: "always learning" },
];

export type Project = {
  slug: string;
  name: string;
  kind: string;
  year: string;
  featured: boolean;
  tagline: string;
  description: string;
  tech: string[];
  href: string;
  gradient: [string, string];
};

export const projects: Project[] = [
  {
    slug: "scout",
    name: "Scout",
    kind: "Agentic AI",
    year: "2026",
    featured: true,
    tagline: "An autonomous research agent.",
    description:
      "Give it a topic and it plans sub-questions, searches sources, reads them, and writes a structured, cited report — streaming every step of its reasoning live. A real plan → tool-use → synthesize loop.",
    tech: ["Agent loop", "Gemma", "Tool use", "Streaming", "Next.js"],
    href: "https://deep-research-agent-silk.vercel.app/",
    gradient: ["#bef264", "#5eead4"],
  },
  {
    slug: "cite",
    name: "Cite",
    kind: "LLM · RAG",
    year: "2026",
    featured: true,
    tagline: "Private, in-browser RAG.",
    description:
      "Documents are embedded and searched entirely on-device with transformers.js; answers stream back grounded in real, clickable citations. Retrieval-augmented generation with nothing leaving your browser.",
    tech: ["RAG", "transformers.js", "Embeddings", "Gemini", "Vector search"],
    href: "https://chat-with-doc-omega.vercel.app/",
    gradient: ["#5eead4", "#5b8cff"],
  },
  {
    slug: "slotly",
    name: "Slotly",
    kind: "Full-stack engineering",
    year: "2026",
    featured: true,
    tagline: "A production SaaS, end-to-end.",
    description:
      "A multi-tenant booking platform with authentication, an owner dashboard, and a timezone-correct scheduling engine — proof I can ship the whole stack around a model, not just the model.",
    tech: ["Next.js", "Appwrite", "TypeScript", "Server Actions"],
    href: "https://booking-saas-phi.vercel.app/",
    gradient: ["#5b8cff", "#7c8cff"],
  },
  {
    slug: "veraine",
    name: "VERAINE",
    kind: "Front-end concept",
    year: "2026",
    featured: false,
    tagline: "Fashion e-commerce UI.",
    description: "A motion-rich storefront concept.",
    tech: ["Next.js", "Tailwind"],
    href: "https://fashion-web-three.vercel.app/",
    gradient: ["#6b7280", "#9ca3af"],
  },
  {
    slug: "ember-oak",
    name: "Ember & Oak",
    kind: "Front-end concept",
    year: "2026",
    featured: false,
    tagline: "Restaurant marketing site.",
    description: "A warm bistro site with reservations.",
    tech: ["Next.js", "Tailwind"],
    href: "https://reserve-a-table-sigma.vercel.app/",
    gradient: ["#6b7280", "#9ca3af"],
  },
];

export const capabilities = [
  {
    title: "Agentic AI",
    body: "Autonomous agents that plan, call tools, execute, and self-correct — with transparent, streamed reasoning.",
  },
  {
    title: "LLM & RAG systems",
    body: "Retrieval-augmented apps and LLM features that stay grounded and cite their sources — on-device or server-side.",
  },
  {
    title: "AI / Machine Learning",
    body: "Deep learning and NLP, from training and evaluation to deployable models. Segmentation, transformers, and state-space models.",
  },
  {
    title: "Full-stack engineering",
    body: "The whole product around a model: auth, databases, real business logic, and a secure, observable backend.",
  },
  {
    title: "Interfaces",
    body: "When it matters, I design the front-end too — accessible, responsive, and fast.",
  },
];

export const skillGroups = [
  {
    label: "Agentic & LLM",
    items: ["LLM agents", "RAG", "Tool use", "Vector search", "Gemini / Gemma", "Prompting"],
  },
  {
    label: "ML / Deep Learning",
    items: ["PyTorch", "Hugging Face", "Transformers", "Mamba / SSMs", "Segmentation", "NLP"],
  },
  { label: "Languages", items: ["Python", "TypeScript", "Dart", "SQL", "LaTeX"] },
  { label: "Web", items: ["Next.js", "React", "Tailwind", "Node.js", "Appwrite"] },
  { label: "Tooling", items: ["Docker", "Git", "W&B", "MLflow", "Kaggle", "Ollama"] },
];

export const research = [
  {
    title: "Agentic AI & code intelligence",
    body: "Agents that plan, use tools, and write, run, and repair their own code through verification loops.",
  },
  {
    title: "Medical image segmentation",
    body: "Boundary-aware and efficient architectures for segmenting biomedical images.",
  },
  {
    title: "Adversarial biomedical NLP",
    body: "Robustness and adversarial behaviour of language models on clinical and biomedical text.",
  },
  {
    title: "State-space models for vision",
    body: "Applying Mamba-style sequence models beyond text — into visual and structured domains.",
  },
];

export const marqueeItems = [
  "Agentic AI",
  "LLMs",
  "RAG",
  "Deep Learning",
  "PyTorch",
  "Transformers",
  "NLP",
  "Mamba",
  "Segmentation",
  "Hugging Face",
  "Vector Search",
  "Next.js",
  "IEEE Research",
];
