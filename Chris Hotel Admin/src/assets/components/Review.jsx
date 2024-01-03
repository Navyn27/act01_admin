import PropTypes from "prop-types";

import one_star from "../statics/icons/rev-selections/one_star.svg";
import two_star from "../statics/icons/rev-selections/two_star.svg";
import three_star from "../statics/icons/rev-selections/three_star.svg";
import four_star from "../statics/icons/rev-selections/four_star.svg";
import five_star from "../statics/icons/rev-selections/five_star.svg";
import no_star from "../statics/icons/rev-selections/no_star.svg";

const Review = (props) => {
  let output;
  switch (props.rating) {
    case 1:
      output = one_star;
      break;
    case 2:
      output = two_star;
      break;
    case 3:
      output = three_star;
      break;
    case 4:
      output = four_star;
      break;
    case 5:
      output = five_star;
      break;
    default:
      output = no_star;
      break;
  }
  return (
    <div className="grid w-[60rem] h-52 justift-evenly place-items-center pl-2 pr-2 pt-5 rounded-lg shadow-xl ">
      <div className="flex">
        <p className="links font-semibold">{props.fname + " " + props.lname}</p>
      </div>
      <p className="links">{props.email}</p>
      <p className="links">{props.review}</p>
      <img src={output} alt="Rating" className="w-36" />
    </div>
  );
};

export default Review;

Review.propTypes = {
  fname: PropTypes.string.isRequired,
  lname: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  review: PropTypes.string.isRequired,
};
