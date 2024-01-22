import { PrismaClient } from "@prisma/client";
import RestaurantNavBar from "./components/RestaurantNavBar";
import Title from "./components/Tilte";
import Rating from "./components/Rating";
import Discription from "./components/Discription";
import Images from "./components/Images";
import Reviews from "./components/Reviews";
import ReservationCard from "./components/ReservationCard";

const prisma = new PrismaClient();

interface Restaurant {
  id: number;
  name: string;
  images: string[];
  description: string;
  slug: string;
}

const fatchRestaurantBySlug = async (slug: string): Promise<Restaurant> => {
  const restaurant = await prisma.restaurant.findUnique({
    // 3 슬러그 값에 이치하는 값을 리턴?
    where: {
      slug,
    },
    select: {
      id: true,
      name: true,
      images: true,
      description: true,
      slug: true,
    },
  });
  if (!restaurant) throw new Error();
  return restaurant;
};
const RestaurantDetails = async ({ params }: { params: { slug: string } }) => {
  // 1 파람스 값을 받아옴 (next기능임)

  const restaurant = await fatchRestaurantBySlug(params.slug); // 2 파람스의 슬러그 값을 넘겨줌

  return (
    <>
      <div className="bg-white w-[70%] rounded p-3 shadow">
        <RestaurantNavBar slug={restaurant.slug} />
        <Title name={restaurant.name} />
        <Rating />
        <Discription description={restaurant.description} />
        <Images images={restaurant.images} />
        <Reviews />
      </div>
      <div className="w-[27%] relative text-reg">
        <ReservationCard />
      </div>
    </>
  );
};
export default RestaurantDetails;
