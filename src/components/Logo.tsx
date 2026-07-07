import Link from "next/link";
import Image from "next/image";

export default function Logo({
  className = "",
  textClassName = "text-[var(--foreground)]",
}: {
  className?: string;
  textClassName?: string;
}) {
  return (
    <Link href="/" className={`flex items-center gap-2.5 ${className}`}>
      <Image
        src="/icon-mark.png"
        alt="Techifyed icon"
        width={34}
        height={34}
        className="h-[34px] w-[34px] shrink-0"
        priority
      />
      <span
        className={`font-[family-name:var(--font-heading)] text-lg font-bold tracking-tight ${textClassName}`}
      >
        Techifyed
      </span>
    </Link>
  );
}
