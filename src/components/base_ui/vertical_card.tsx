// components/base_ui/VerticalCard.tsx

import React from "react";
import Link from "next/link";
import clsx from "clsx";

type VerticalCardProps = {
  title: string;
  subtitle: string;
  backgroundImage?: string;
  href?: string; // 加上跳转支持
  className?: string;
};

export default function VerticalCard({
  title,
  subtitle,
  backgroundImage,
  href,
  className = "",
}: VerticalCardProps) {
  const content = (
    <div
      className={clsx(
        "w-[260px] h-[325px] relative rounded-[20px] bg-[#a49e9e] bg-cover bg-center overflow-hidden cursor-pointer transition duration-200 hover:scale-[1.02]",
        className
      )}
      style={{
        backgroundImage: backgroundImage ? `url(${backgroundImage})` : undefined,
      }}
    >
      <div className="w-[200px] left-[10px] top-[18px] absolute inline-flex flex-col justify-start items-center gap-1.5">
        <div className="self-stretch justify-start text-white text-2xl font-medium font-['Inter']">
          {title}
        </div>
        <div className="self-stretch h-5 justify-start text-white text-[20px] font-normal font-['Inter']">
          {subtitle}
        </div>
      </div>
    </div>
  );

  // 支持内部路由和外部链接两种形式
  if (href) {
    const isExternal = href.startsWith("http");
    return isExternal ? (
      <a href={href} target="_blank" rel="noopener noreferrer">
        {content}
      </a>
    ) : (
      <Link href={href}>{content}</Link>
    );
  }

  return content;
}
