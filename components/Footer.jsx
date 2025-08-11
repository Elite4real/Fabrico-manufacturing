export default function Footer() {
  return (
    <footer className="bg-[var(--ink-900)] text-white">
      <div className="container-px mx-auto py-12">
        <div className="grid md:grid-cols-4 gap-8 text-sm">
          <div>
            <div className="font-semibold">Fabrico</div>
            <p className="mt-2 text-white/70">Integrated manufacturing platform.</p>
          </div>
          <div>
            <div className="font-semibold">Company</div>
            <ul className="mt-3 space-y-2 text-white/70">
              <li><a href="#">About</a></li>
              <li><a href="#">Careers</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </div>
          <div>
            <div className="font-semibold">Product</div>
            <ul className="mt-3 space-y-2 text-white/70">
              <li><a href="#services">Services</a></li>
              <li><a href="#pricing">Pricing</a></li>
              <li><a href="#integrations">Integrations</a></li>
            </ul>
          </div>
          <div>
            <div className="font-semibold">Legal</div>
            <ul className="mt-3 space-y-2 text-white/70">
              <li><a href="#">Privacy</a></li>
              <li><a href="#">Terms</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-8 text-xs text-white/50">
          &copy; {new Date().getFullYear()} Fabrico. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
