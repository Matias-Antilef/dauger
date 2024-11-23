import { Link } from "react-router-dom";

function MVP() {
  return (
    <div className="h-screen w-screen bg-[#000000] relative text-[#ffffff] ">
      <section className="absolute bottom-5 left-5">
        <p>holi</p>
        <Link to={"/"} replace className="text-green-500">
          volver
        </Link>
      </section>
    </div>
  );
}
export default MVP;
