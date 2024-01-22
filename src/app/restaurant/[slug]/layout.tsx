import Header from "./components/Header";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Milestones Grill (Toronto) | nextOpenTable",
  description: "nextOpenTable",
};
const RestaurantLayout = ({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { slug: string };
}) => {
  return (
    <main>
      <Header name={params.slug} />
      <div className="flex m-auto w-2/3 justify-between items-start 0 -mt-11">
        {children}
      </div>
    </main>
  );
};

export default RestaurantLayout;
