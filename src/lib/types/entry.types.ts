import React, { ReactNode } from "react";

export type InputEntry = {
  label: string;
  type: React.HTMLInputTypeAttribute;
  placeholder: string;
  className?: string;
  required?: boolean;
};

export type ButtonEntry = {
  onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined;
  type?: "button" | "reset" | "submit" | undefined;
  className?: string;
  children?: ReactNode;
};
