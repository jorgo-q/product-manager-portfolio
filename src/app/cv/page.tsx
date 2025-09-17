import Link from "next/link";

export default function CVPage() {
  const driveUrl =
    "https://drive.google.com/file/d/1ybRDEVkO64_nWk2E025gmkm5b1RMVhYa/preview";

  return (
    <div className="min-h-dvh bg-[var(--color-background)] text-[var(--color-foreground)]">
      {/* Header */}
      <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/60 border-b border-[var(--color-border)]">
        <div className="mx-auto max-w-5xl px-6 py-4 flex items-center justify-between">
          <Link href="/" className="font-semibold tracking-tight">Jorgo Qirjaj</Link>
          <nav className="hidden sm:flex items-center gap-6 text-sm">
            <Link href="/" className="hover:opacity-70 transition-opacity">Home</Link>
            <a href="https://drive.google.com/file/d/1ybRDEVkO64_nWk2E025gmkm5b1RMVhYa/preview" download className="hover:opacity-70 transition-opacity">Download CV</a>
          </nav>
        </div>
      </header>

      <main className="mx-auto max-w-5xl px-6 py-10 sm:py-14">
        <div className="flex items-baseline justify-between gap-4">
          <h1 className="text-2xl sm:text-3xl font-semibold tracking-tight">Curriculum Vitae</h1>
          <div className="flex items-center gap-3 text-sm">
            <a
              href="/Jorgo_Qirjaj_CV.pdf"
              download
              className="rounded-full border border-[var(--color-border)] px-4 py-2 hover:bg-[var(--color-secondary)] transition-colors"
            >
              Download PDF
            </a>
            <Link
              href="/"
              className="rounded-full border border-[var(--color-border)] px-4 py-2 hover:bg-[var(--color-secondary)] transition-colors"
            >
              Back to site
            </Link>
          </div>
        </div>

        {/* Embedded viewer: tries local PDF, otherwise shows Drive embed */}
        <div className="mt-6 rounded-lg border border-[var(--color-border)] overflow-hidden">
          <object
            data="/Jorgo_Qirjaj_CV.pdf"
            type="application/pdf"
            className="w-full h-[80vh]"
          >
            <iframe
              src={driveUrl}
              className="w-full h-[80vh]"
              title="CV Preview"
            />
          </object>
        </div>

        <p className="mt-4 text-sm text-[var(--color-muted-foreground)]">
          If the PDF does not display in your browser, you can
          {" "}
          <a
            href="/Jorgo_Qirjaj_CV.pdf"
            download
            className="underline underline-offset-4"
          >
            download it directly
          </a>
          {" "}
          or view it on
          {" "}
          <a
            href="https://drive.google.com/file/d/1ybRDEVkO64_nWk2E025gmkm5b1RMVhYa/view?usp=sharing"
            target="_blank"
            className="underline underline-offset-4"
          >
            Google Drive
          </a>
          .
        </p>
      </main>

      <footer className="border-t border-[var(--color-border)] mt-10">
        <div className="mx-auto max-w-5xl px-6 py-10 text-sm flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Jorgo Qirjaj</p>
          <div className="flex items-center gap-4">
            <Link href="/" className="hover:opacity-70">Home</Link>
            <a href="/Jorgo_Qirjaj_CV.pdf" download className="hover:opacity-70">Download CV</a>
          </div>
        </div>
      </footer>
    </div>
  );
}