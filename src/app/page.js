export default function Home() {
  return (
    <section className="space-y-6">
      <p className="text-xs text-[var(--muted)]"> ~/sejal/home </p>
      <p>
      Hi 👋🏼
      </p>
      <p className="text-xs max-w-2xl leading-7 text-[var(--muted)]">
        I&apos;m Sejal. This site showcases a selection of my hobby projects, published software, and various app and web experiments I tinker with in my free time. I enjoy building scalable software for both mobile and web platforms and love experimenting and implementing new ideas from scratch.
        With over 7+ years of experience as a  Fullstack Engineer, I have strong expertise in Node.js, Golang, React, and Ruby. I strive to keep things minimal and focus on delivering great products.
      </p>

      <div className="space-y-4">
        <p className="text-xs tracking-[0.2em] text-[var(--muted)]">TIMELINE</p>
        <div className="space-y-5">
          <div className="border-l border-[var(--border)] pl-4">
            <p className="text-xs text-[var(--muted)]">Oct 2021 - Present</p>
            <p className="text-sm text-[var(--foreground)]">supervity.ai</p>
            <p className="text-sm text-[var(--muted)]">Senior Solution Engineer-T2 (Core Team)</p>
          </div>
          <div className="border-l border-[var(--border)] pl-4">
            <p className="text-xs text-[var(--muted)]">Jun 2019 - Sep 2021</p>
            <p className="text-sm text-[var(--foreground)]">BrowserStack</p>
            <p className="text-sm text-[var(--muted)]">Fullstack Engineer (Growth Team)</p>
          </div>
          <div className="border-l border-[var(--border)] pl-4">
            <p className="text-xs text-[var(--muted)]">Mar 2018 - Jun 2019</p>
            <p className="text-sm text-[var(--foreground)]">techforce.ai</p>
            <p className="text-sm text-[var(--muted)]">Product Engineer (Core Team)</p>
          </div>
          <div className="border-l border-[var(--border)] pl-4">
            <p className="text-xs text-[var(--muted)]">May 2017 - Feb 2018</p>
            <p className="text-sm text-[var(--foreground)]">binarynumbers.io</p>
            <p className="text-sm text-[var(--muted)]">Fullstack Developer</p>
          </div>
        </div>
      </div>
      {/* <div className="rounded-md border border-[var(--border)] bg-[var(--surface)] p-5 text-sm text-[var(--muted)]">
        Explore my background in <a className="underline underline-offset-4" href="/resume">/resume</a> and selected work in{" "}
        <a className="underline underline-offset-4" href="/projects">/projects</a>.
      </div> */}
    </section>
  );
}
