function Card({ icon, title, text }) {
  return (
    <article className="rounded-lg gap-5 py-10 min-h-[500px]  h-max bg-terciary flex flex-col justify-around items-center">
      <img src={icon} alt="" className=" h-36 w-36 rounded-full   " />
      <section className="px-5 py-2  text-center flex flex-col justify-around  flex-1 ">
        <h5 className="text-white pb-3"> {title} </h5>
        <p>{text}</p>
      </section>
    </article>
  );
}
export default Card;
