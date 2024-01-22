import Header from "./components/Header";
import SearchSideBar from "./components/SearchSideBar";
import RestaurantCard from "./components/RestaurantCard";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const fatchRestaurantByCity = (city: string | undefined) => {
  const select = {
    id: true,
    name: true,
    main_image: true,
    price: true,
    cuisine: true,
    location: true,
    slug: true,
  };

  if (!city) return prisma.restaurant.findMany();

  return prisma.restaurant.findMany({
    where: {
      location: {
        name: {
          equals: city.toLocaleLowerCase(),
        },
      },
    },
    select,
  });
};

const Search = async ({ searchParams }: { searchParams: { city: string } }) => {
  const restaurant = await fatchRestaurantByCity(searchParams.city);
  console.log({ restaurant });
  return (
    <>
      <Header />
      <div className="flex py-4 m-auto w-2/3 justify-between items-start">
        <SearchSideBar />

        <div className="w-5/6">
          {restaurant.length > 1 ? (
            <RestaurantCard />
          ) : (
            <p>죄송합니다 이 지역의 레스토랑 정보가 없습니다.</p>
          )}
        </div>
      </div>
    </>
  );
};

export default Search;
