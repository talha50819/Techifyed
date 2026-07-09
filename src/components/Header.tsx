"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Menu, Phone, X } from "lucide-react";
import Logo from "./Logo";
import Button from "./ui/Button";
import Container from "./ui/Container";
import { siteConfig } from "@/data/siteConfig";

export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-neutral-200/80 bg-white/85 backdrop-blur-md">
      <Container className="flex items-center justify-between py-6">
        <Logo className="h-20" />

        <div className="hidden items-center gap-8 lg:flex">
          <a
            href={`tel:${siteConfig.phoneHref}`}
            className="flex items-center gap-2 text-3xl font-semibold text-neutral-700 hover:text-primary-600"
          >
            <Phone className="h-9 w-9" />
            {siteConfig.phone}
          </a>
          <Button href="/contact" className="px-12 py-6 text-2xl">
            Get a Quote
          </Button>
        </div>

        <button
          type="button"
          onClick={() => setOpen((o) => !o)}
          className="inline-flex items-center justify-center rounded-lg p-2 text-neutral-700 hover:bg-primary-50 lg:hidden"
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          {open ? <X className="h-10 w-10" /> : <Menu className="h-10 w-10" />}
        </button>
      </Container>

      <nav className="hidden border-t border-neutral-200/80 lg:block">
        <Container className="flex items-center justify-center gap-14 py-5">
          {siteConfig.nav.map((item) => {
            const active =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`text-2xl transition-colors hover:text-primary-600 ${
                  active ? "font-bold text-primary-600" : "font-medium text-neutral-700"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </Container>
      </nav>

      {open && (
        <div className="border-t border-neutral-200 bg-white lg:hidden">
          <Container className="flex flex-col gap-1 py-4">
            {siteConfig.nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2.5 text-sm font-medium text-neutral-700 hover:bg-primary-50 hover:text-primary-600"
              >
                {item.label}
              </Link>
            ))}
            <Button href="/contact" className="mt-2 w-full" onClick={() => setOpen(false)}>
              Get a Quote
            </Button>
          </Container>
        </div>
      )}
    </header>
  );
}
