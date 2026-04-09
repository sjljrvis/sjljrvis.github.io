const projects = [
  {
    name: "xFunc",
    link: "@github/xFunc",
    stack: "golang, docker, LLM, langchain, open-ai, rpc",
    description:
      "xFunc is an RPC-based service designed to allow users to interact seamlessly using natural language. User input in the form of natural language statements is interpreted as executable code blocks. These code blocks are processed and executed by the service, and the corresponding results are returned to the user.",
  },
  {
    name: "upweb.io",
    link: "@github/upweb",
    stack: "golang, nodeJS, pgSQL, docker, nginx, lets-encrypt(cert-bot)",
    description:
      "Developers can easily deploy static/dynamic dynamic-websites, restapi on upweb just by using a git push command and zero configurations, hosted app gets deployed on a upweb subdomain with SSL certificates. Developers can view/monitor real-time logs on upweb-dashboard.",
  },
  {
    name: "zWorker",
    link: "@github/zworker",
    stack: "nodeJS, pgSQL",
    description:
      "zWorker is a lightweight publish-subscribe (pub-sub) service built on top of a PostgreSQL datastore. It efficiently leverages PostgreSQL's capabilities to handle thread-safe read/writes transactional queries, enabling reliable communication between publishers and subscribers.",
  },
];

export default function ProjectsPage() {
  return (
    <section className="space-y-6">
      <header className="space-y-3">
        <p className="text-xs text-[var(--muted)]"> ~/sejal/projects </p>
        <h1 className="text-[var(--foreground)]">Personal Projects</h1>
      </header>

      <div className="space-y-8">
        {projects.map((project) => (
          <article key={project.name} className="rounded-md p-4">
            <div className="mb-2 space-y-1">
              <h2 className="text-sm text-[var(--foreground)]">{project.name}</h2>
              <p className="text-xs text-[var(--muted)]">
                {project.link} | {project.stack}
              </p>
            </div>
            <p className="text-xs leading-6 text-[var(--muted)]">{project.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
