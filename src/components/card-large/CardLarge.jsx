import PropTypes from "prop-types";

function CardLarge({ title, phrase, img }) {
  return (
    <div className="bg-black2 flex items-center gap-5">
      <section className="">
        <img
          src={img}
          alt="phrase of dot daged"
          className="h-96 w-96 rounded-full  filter grayscale "
        />
      </section>
      <section>
        <h3> {title} </h3>
        <p className="text-[white] "> {phrase} </p>
      </section>
    </div>
  );
}

CardLarge.propTypes = {
  title: PropTypes.string.isRequired,
  phrase: PropTypes.node.isRequired,
  img: PropTypes.string.isRequired,
};
export default CardLarge;
