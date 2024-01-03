// import Reserve from "../statics/icons/reserve.svg";
import PropTypes from "prop-types";

const InfoCard = (props) => {
  const { label, num, image, style, bgColor } = props;
  return (
    <div
      className={
        "card h-36 w-[10rem] rounded-lg grid p-6 justify-start shadow-inner shadow-lg shadown-slate-4000 "
      }
    >
      <h1 className="links">{label}</h1>
      <section className="flex justify-between place-items-center w-[10rem] mt-24">
        <h2 className="links">{num}</h2>
        <img src={image} alt="Image" className={style} />
      </section>
    </div>
  );
};

InfoCard.propTypes = {
  label: PropTypes.string.isRequired,
  num: PropTypes.string.isRequired,
  style: PropTypes.string.isRequired,
  bgColor: PropTypes.string.isRequired,
};

export default InfoCard;
