import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Search | nextOpenTable",
  description: "nextOpenTable",
};
const SearchLayout = ({ children }: { children: React.ReactNode }) => {
  return <>{children}</>;
};

export default SearchLayout;
