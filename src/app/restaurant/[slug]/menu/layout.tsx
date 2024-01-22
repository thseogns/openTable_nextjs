import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Menu of Milestones Grill (Toronto) | nextOpenTable",
  description: "nextOpenTable",
};
const MenuLayout = ({ children }: { children: React.ReactNode }) => {
  return <>{children}</>;
};

export default MenuLayout;
