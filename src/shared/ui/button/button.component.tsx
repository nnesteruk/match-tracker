import { ComponentPropsWithoutRef } from "react";

export const Button = ({
  children,
  ...props
}: ComponentPropsWithoutRef<"button"> & { children: React.ReactNode }) => {
  return <button {...props}>{children}</button>;
};
