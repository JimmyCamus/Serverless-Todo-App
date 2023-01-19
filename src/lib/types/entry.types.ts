import React, { Dispatch, ReactNode, SetStateAction } from "react";
import { RegisterFormValuesType } from "./auth.types";

export type InputEntry = {
  label: string;
  type: React.HTMLInputTypeAttribute;
  placeholder: string;
  className?: string;
  required?: boolean;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
};

export type ButtonEntry = {
  onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined;
  type?: "button" | "reset" | "submit" | undefined;
  className?: string;
  children?: ReactNode;
};

export type RegisterFormEntry = {
  registerFormValues: RegisterFormValuesType;
  setRegisterFormValues: Dispatch<SetStateAction<RegisterFormValuesType>>;
  handleSubmit: React.FormEventHandler<HTMLFormElement>;
};
