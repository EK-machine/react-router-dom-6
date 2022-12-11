import { ReactElement } from "react";
import { NavigateOptions, URLSearchParamsInit } from "react-router-dom";

export interface PostBody {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export interface BtnProps {
  onClick?: () => void;
  text: string;
  extraClassName?: string;
  type?: "button" | "submit" | "reset";
}

export interface RequireAuthProps {
  children: ReactElement;
}

export interface AuthProviderProps extends RequireAuthProps {}

export type ContextSignInType = (newUser: string, cb: () => void) => void;

export interface ContextType {
  user: string | null;
  signIn: ContextSignInType;
  signOut: () => void;
}

export interface SearchParamsType {
  post: string;
  latest: boolean;
}

declare type SetURLSearchParams = (nextInit?: URLSearchParamsInit | ((prev: URLSearchParams) => URLSearchParamsInit), navigateOpts?: NavigateOptions) => void;

export interface PostFilterProps {
  setSearchParams: SetURLSearchParams;
  postQuery: string;
  latest: boolean;
}




