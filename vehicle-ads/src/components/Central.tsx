import { ReactNode } from "react";

type ChildrenComponentProps = {
  children: ReactNode;
};
export default function Central({ children }: ChildrenComponentProps) {
  return <div className="bg-white flex flex-col">{children}</div>;
}
