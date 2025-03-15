import { ComponentPropsWithoutRef } from "react";

export const Button = ({
  children,
  ...props
}: ComponentPropsWithoutRef<"button">) => {
  return <button {...props}>{children}</button>;
};
