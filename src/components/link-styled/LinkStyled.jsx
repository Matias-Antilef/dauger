import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function LinkStyled({ href, children, tooltip }) {
  return (
    <>
      <div className="group relative w-max  flex justify-center">
        <Link
          to={href}
          className="h-[var(--h4)] text-white w-max"
          target="_blank"
        >
          {children}
        </Link>
        {tooltip && (
          <span className="absolute top-10 scale-0 transition-all rounded bg-gray-800 p-2 text-xs text-white group-hover:scale-100 w-max  ">
            {tooltip}
          </span>
        )}
      </div>
    </>
  );
}

LinkStyled.propTypes = {
  href: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  tooltip: PropTypes.string,
};

export default LinkStyled;
