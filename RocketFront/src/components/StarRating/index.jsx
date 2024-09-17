import { Star, StarContainer } from "./styles";
import { IoIosStarOutline, IoIosStar } from "react-icons/io";

export function StarRating({ filledStars }) {
  const starsArray = Array.from({ length: 5 }, (_, index) => {
    return index < filledStars ? "filled" : <IoIosStarOutline />;
  });

  return (
    <StarContainer>
      {starsArray.map((star, index) => (
        <Star key={index} filled={star === "filled"}>
          <IoIosStar />
        </Star>
      ))}
    </StarContainer>
  );
}
