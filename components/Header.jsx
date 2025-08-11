import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <header className="bg-[var(--ink-100)]">
      <div className="container-px mx-auto">
        <div className="h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <div className="relative w-7 h-7">
              <Image src="/logo.svg" alt="logo" fill sizes="28px" />
            </div>
            <span className="font-semibold">Fabrico</span>
          </Link>

          <nav className="hidden md:flex items-center gap-8 text-sm text-black/70">
            <a href="#services" className="hover:text-black">Services</a>
            <a href="#benefits" className="hover:text-black">Benefits</a>
            <a href="#pricing" className="hover:text-black">Pricing</a>
            <a href="#integrations" className="hover:text-black">Integrations</a>
            <a href="#" className="hover:text-black">About</a>
          </nav>

          <a className="btn btn-primary" href="#pricing">Get Started</a>
        </div>
      </div>
    </header>
  );
}
