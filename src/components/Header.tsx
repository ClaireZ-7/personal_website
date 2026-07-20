import Link from "next/link";
import { navigation } from "@/site";

export function Header() {
  return (
    <header className="site-header">
      <div className="header-inner">
        <Link className="brand" href="/" aria-label="Yi Fan home">
          <span className="brand-name">Yi FAN</span>
          <span className="brand-cn">樊漪</span>
        </Link>
        <input className="nav-toggle" type="checkbox" id="nav-toggle" aria-label="Open navigation" />
        <label className="nav-trigger" htmlFor="nav-toggle"><span /><span /><span /></label>
        <nav className="main-nav" aria-label="Main navigation">
          {navigation.map((item) => <Link key={item.href} href={item.href}>{item.label}</Link>)}
        </nav>
      </div>
    </header>
  );
}
