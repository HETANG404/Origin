// components/base_ui/ProfileIcon.tsx

import React from "react";
import Link from "next/link";
import clsx from "clsx";

type ProfileIconProps = {
  imageUrl: string;
  alt?: string;
  className?: string;
  href?: string;
  onClick?: () => void;
};

export default function ProfileIcon({
  imageUrl,
  alt = "User Profile",
  className = "",
  href,
  onClick,
}: ProfileIconProps) {
  const baseStyles = clsx(
    "w-[50px] h-[50px] rounded-full overflow-hidden cursor-pointer shadow",
    className
  );

  const imgElement = (
    <img
      src={imageUrl}
      alt={alt}
      className="w-full h-full object-cover block"
    />
  );

  if (href) {
    return (
      <Link href={href} className={baseStyles}>
        {imgElement}
      </Link>
    );
  }

  return (
    <div onClick={onClick} className={baseStyles}>
      {imgElement}
    </div>
  );
}
