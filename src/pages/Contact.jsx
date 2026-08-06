export default function Contact() {
  return (
    <div className="max-w-page mx-auto px-5 sm:px-8 pt-14 pb-24">
      <p className="text-sm text-muted mb-2">Contact</p>
      <h1 className="text-3xl sm:text-5xl font-semibold tracking-tight mb-8">
        Let's work together.
      </h1>
      <div className="max-w-md space-y-6">
        <div>
          <p className="text-xs tracking-widest text-muted mb-2">EMAIL</p>
          <a
            href="mailto:contact@intuitui.com"
            className="text-lg underline underline-offset-4"
          >
            contact@intuitui.com
          </a>
        </div>
        <div>
          <p className="text-xs tracking-widest text-muted mb-2">PHONE</p>
          <p className="text-lg">(123) 123-1234</p>
        </div>
        <div>
          <p className="text-xs tracking-widest text-muted mb-2">SOCIAL</p>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noreferrer"
            className="text-lg underline underline-offset-4"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </div>
  );
}
