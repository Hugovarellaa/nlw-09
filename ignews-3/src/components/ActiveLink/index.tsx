import Link, { LinkProps } from "next/link";
import { useRouter } from "next/router";
import { cloneElement, ReactElement } from "react";

interface ActiveLinkprops extends LinkProps {
  children: ReactElement;
  activeclassName: string;
}

export function ActiveLink({
  activeclassName,
  children,
  ...rest
}: ActiveLinkprops) {
  const { asPath } = useRouter();

  const className = asPath === rest.href ? activeclassName : "";

  return (
    <Link {...rest}>
      {cloneElement(children, {
        className,
      })}
    </Link>
  );
}
