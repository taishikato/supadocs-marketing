import { Header } from "./header";

export default function Page() {
  return (
    <>
      <Header />
      <main className="flex min-h-screen px-6 flex-col container mx-auto mt-8">
        <h1 className="text-2xl md:text-3xl font-semibold border-l-3 border-purple-400 dark:border-purple-500 pl-3">
          A Next.js template for technical docs with AI chat,
          <br />
          out of the box.
        </h1>
        <div className="mt-8 text-secondary-foreground/80 text-sm md:text-base space-y-1">
          <div>
            Supadocs is your AI-friendly docs starter built with Next.js,
            Supabase, and OpenAI.
          </div>
          <div>
            Out of the box you get:
            <ul className="list-disc list-inside space-y-1">
              <li>a built-in RAG-powered chat experience</li>
              <li>
                handy extras like copy article as Markdown and download Markdown
                file
              </li>
            </ul>
          </div>
        </div>
      </main>
      <footer className="py-6 text-center text-sm text-muted-foreground">
        made by{" "}
        <a target="_blank" href="https://x.com/taishik_" className="underline">
          taishik_
        </a>
      </footer>
    </>
  );
}
