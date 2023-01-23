import React, { Dispatch, ReactNode, SetStateAction } from "react";
import { LoginFormValuesType, RegisterFormValuesType } from "./auth.types";

export type InputEntry = {
  type: React.HTMLInputTypeAttribute;
  placeholder: string;
  className?: string;
  required?: boolean;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
};

export type InputWithLabelEntry = {
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

export type LoginFormEntry = {
  loginFormValues: LoginFormValuesType;
  setLoginFormValues: Dispatch<SetStateAction<LoginFormValuesType>>;
  handleSubmit: React.FormEventHandler<HTMLFormElement>;
};

export type CheckBoxEntry = {
  onClick?: React.MouseEventHandler<HTMLInputElement>;
  checked?: boolean;
};
