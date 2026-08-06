export default function Footer() {
  return (
    <footer className="border-t border-hairline mt-24">
      <div className="max-w-page mx-auto px-5 sm:px-8 py-10 flex flex-col sm:flex-row sm:items-start sm:justify-between gap-8">
        <div className="text-lg font-semibold tracking-tight lowercase text-ink/60">
          intuitui
        </div>

        <div className="flex flex-col sm:flex-row gap-8 sm:gap-24">
          <div>
            <p className="text-xs tracking-widest text-muted mb-2">CONTACT</p>
            <p className="text-sm">(123) 123-1234</p>
            <a
              href="mailto:contact@intuitui.com"
              className="text-sm underline underline-offset-2"
            >
              contact@intuitui.com
            </a>
          </div>
          <div>
            <p className="text-xs tracking-widest text-muted mb-2">SOCIAL</p>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              className="text-sm underline underline-offset-2"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
