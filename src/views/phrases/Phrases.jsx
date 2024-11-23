import CardLarge from "../../components/card-large/CardLarge";

function Phrases() {
  return (
    <div className=" w-full bg-black2 min-h-screen text-center pb-24">
      <h1 className="pt-5 pb-20">Mis frases célebres</h1>
      <div className="flex flex-col  items-center justify-center gap-28">
        <CardLarge
          title="¿Trabajás en swift?..."
          phrase={`Si vas a escribir en swift, no te considero mi amigo y no te voy a combidar de mi pija, cométe la torta y dejaté de hinchar.`}
          img="/dager.jpg"
        />
        <CardLarge
          title="Más allá del codigo"
          phrase={`Si ganar plata querés,  puto el que lo lea, (que si, que si). Puto el que siga leyendo`}
          img="/dager.jpg"
        />
      </div>
    </div>
  );
}
export default Phrases;
