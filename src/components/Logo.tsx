import Link from "next/link";
import Image from "next/image";

export default function Logo({ className = "h-8" }: { className?: string }) {
  return (
    <Link href="/" className="flex items-center">
      <Image
        src="/logo-mark-dark.png"
        alt="Techifyed"
        width={770}
        height={109}
        className={`w-auto ${className}`}
        priority
      />
    </Link>
  );
}
