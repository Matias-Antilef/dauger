import Card from "../../components/card/Card";
import LinkStyled from "../../components/link-styled/LinkStyled";

function About() {
  return (
    <div className="bg-black min-h-screen h-max text-center pb-20 ">
      <h1 className="py-10">Sobre mí</h1>
      <div
        className=" px-5 grid gap-4 
grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 "
      >
        <Card
          icon={"/filosoraptor.jpg"}
          title={"Filosofía"}
          text={`Me gusta filosofar sobre la filosofia que se filosofa en la filosofía`}
        />
        <Card icon={"/gato.jpeg"} title={"Gatos"} text={`🐈`} />
        <Card
          icon={"/filosoraptor.jpg"}
          title={"Chistes de mierda"}
          text={`Si necesitas un programa para programar programas... ¿Cómo programas un programa para programar un programa para programar programas?`}
        />
      </div>
      <section className="py-20 justify-center flex flex-col items-center gap-5">
        <h2>Mi mejor proyecto hasta la fecha: </h2>
        <LinkStyled href="/proyect">
          <h3 className="bg-primary text-white rounded-xl px-3 py-1 ">
            VER DEMO
          </h3>
        </LinkStyled>
      </section>
      <p>
        No me quemés, vi el video tarde e hice lo que pude a las 2 de la mañana
        pá, para la prox me pongo serio
      </p>
    </div>
  );
}
export default About;
