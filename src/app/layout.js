import { Geist, Geist_Mono, Instrument_Serif, Gilda_Display } from "next/font/google";
import Link from "next/link";
import Script from "next/script";
import "./globals.css";
import ThemeToggle from './components/theme-toggle'
import DinoGame from "./components/dino-game";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const instrumentSerief = Gilda_Display({
  variable: "--font-instrument-serief",
  weight: "400",
});

export const metadata = {
  title: "Sejal Chougule | Fullstack Engineer | India",
  description: "Fullstack Javascript Engineer",
  keywords: ["Sejal Chougule", "sejal", "chougule", "sejalchougule"],
  verification: {
    google: "7EljSZU82WRhIHxH5vi0b_n9HLnR99R5pEBrndvNmcw",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${instrumentSerief.variable} antialiased font-mono`}
      >
        <div className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
          <header className="">
            <nav className="mx-auto  w-full max-w-3xl items-center justify-between px-6 py-5 text-xl">
              <h1 className="tracking-wide [font-family:var(--font-instrument-serief)]" style={{ fontSize: 36, lineHeight: 3, letterSpacing: 1.2, }}>
                sejal.c
              </h1>

              <div className="flex gap-6 text-base" style={{ justifyContent: "end" }}>
                <Link className="text-xs text-[var(--muted)] hover:text-[var(--foreground)]" style={{ letterSpacing: 1.5 }} href="/">
                  HOME
                </Link>
                <Link className="text-xs  text-[var(--muted)] hover:text-[var(--foreground)]" style={{ letterSpacing: 1.5 }} href="/resume">
                  RESUME
                </Link>
                <Link className="text-xs text-[var(--muted)] hover:text-[var(--foreground)]" style={{ letterSpacing: 1.5 }} href="/projects">
                  PROJECTS
                </Link>

                <div className="text-xs text-[var(--muted)] hover:text-[var(--foreground)]" style={{ letterSpacing: 1.5 }}>
                  <ThemeToggle />
                </div>
              </div>

            </nav>
          </header>
          <main className="mx-auto w-full max-w-3xl px-6 py-12">{children}</main>
          <footer className="mx-auto w-full max-w-3xl px-6 py-1">
            <h2 className="text-sm py-4 text-[var(--muted)]"> Let&apos;s connect ?</h2>
            <div className="mb-4 flex flex-wrap items-center gap-x-8 gap-y-2 text-xs text-[var(--muted)]">
              <a className="inline-flex items-center gap-1 hover:text-[var(--foreground)]" href="mailto:hello@sejal.dev">
                <svg aria-hidden="true" viewBox="0 0 24 24" className="h-3.5 w-3.5 fill-current">
                  <path d="M3 5h18a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1Zm0 2v.5l9 5.5 9-5.5V7l-9 5.5L3 7Z" />
                </svg>
                hello@sejal.dev
              </a>
              <a className="inline-flex items-center gap-1 hover:text-[var(--foreground)]" href="tel:+1234567890">
                <svg aria-hidden="true" viewBox="0 0 24 24" className="h-3.5 w-3.5 fill-current">
                  <path d="M6.62 10.79a15.05 15.05 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.02-.24c1.12.37 2.33.56 3.57.56a1 1 0 0 1 1 1V21a1 1 0 0 1-1 1C10.4 22 2 13.6 2 3a1 1 0 0 1 1-1h4.5a1 1 0 0 1 1 1c0 1.24.2 2.45.56 3.57a1 1 0 0 1-.25 1.02l-2.2 2.2Z" />
                </svg>
                +1 (234) 567-890
              </a>
              <a
                className="inline-flex items-center gap-1 hover:text-[var(--foreground)]"
                href="https://www.linkedin.com/in/sejal"
                target="_blank"
                rel="noreferrer"
              >
                <svg aria-hidden="true" viewBox="0 0 24 24" className="h-3.5 w-3.5 fill-current">
                  <path d="M6.94 8.5A1.56 1.56 0 1 1 6.94 5.4a1.56 1.56 0 0 1 0 3.1ZM5.6 19h2.68V9.6H5.6V19Zm4.34 0h2.67v-4.74c0-1.25.24-2.47 1.78-2.47 1.52 0 1.54 1.42 1.54 2.56V19H18.6v-5.2c0-2.56-.55-4.53-3.54-4.53-1.43 0-2.39.79-2.78 1.53h-.04V9.6H9.94c.03.77 0 9.4 0 9.4Z" />
                </svg>
                linkedin.com/in/sejal
              </a>
              <a
                className="inline-flex items-center gap-1 hover:text-[var(--foreground)]"
                href="https://github.com/sejal"
                target="_blank"
                rel="noreferrer"
              >
                <svg aria-hidden="true" viewBox="0 0 24 24" className="h-3.5 w-3.5 fill-current">
                  <path d="M12 .5a12 12 0 0 0-3.79 23.39c.6.11.82-.26.82-.58v-2.02c-3.34.73-4.04-1.42-4.04-1.42-.55-1.4-1.33-1.77-1.33-1.77-1.1-.75.08-.73.08-.73 1.2.08 1.84 1.24 1.84 1.24 1.08 1.84 2.82 1.3 3.5 1 .1-.79.42-1.3.77-1.6-2.67-.3-5.48-1.34-5.48-5.94 0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.52.12-3.17 0 0 1-.33 3.3 1.23a11.5 11.5 0 0 1 6 0c2.3-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.87.12 3.17.77.84 1.24 1.9 1.24 3.22 0 4.6-2.81 5.64-5.49 5.93.43.38.82 1.1.82 2.24v3.32c0 .32.22.7.83.58A12 12 0 0 0 12 .5Z" />
                </svg>
                github.com/sejal
              </a>
            </div>

            <div className="game py-22">
              <DinoGame />
            </div>

            <h1
              className="[font-family:var(--font-instrument-serief)] bg-clip-text text-transparent"
              style={{
                textAlign: "center",
                overflow: "clip",
                letterSpacing: "20px",
                fontSize: "8rem",
                backgroundImage:
                  "linear-gradient(to bottom, var(--foreground) 0%, var(--background) 100%)",
              }}
            >
              sejal
            </h1>


          </footer>
        </div>
        <Script
          id="google-analytics-inline"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-ERZZB5WKJL');
            `,
          }}
        />
      </body>

    </html>
  );
}
