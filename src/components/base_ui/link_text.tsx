import React from "react";
import Link from "next/link";
import clsx from "clsx";

type LinkTextProps = {
  children: React.ReactNode;
  className?: string;
  href?: string;
  external?: boolean;
};

export default function LinkText({
  children,
  className = "",
  href,
  external = false,
}: LinkTextProps) {
  const baseClasses =
    "text-center justify-center text-white font-normal leading-tight";

  // 如果有 href，渲染为链接
  if (href) {
    if (external) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={clsx(baseClasses, className)}
        >
          {children}
        </a>
      );
    } else {
      return (
        <Link href={href} className={clsx(baseClasses, className)}>
          {children}
        </Link>
      );
    }
  }

  // 否则就是普通文字
  return <div className={clsx(baseClasses, className)}>{children}</div>;
}
