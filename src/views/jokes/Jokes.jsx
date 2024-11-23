import LinkStyled from "../../components/link-styled/LinkStyled";
import { SVGlinkedin } from "../../assets/IconSVG";

function Jokes() {
  return (
    <div className="bg-black2 h-screen flex justify-start items-center  flex-col ">
      <h1 className="py-5">Sobre mí</h1>
      <section className="relative items-center bg-black  rounded-lg   justify-center flex gap-4  w-2/3 h-[500px]   ">
        <section className="flex-1 flex px-6 gap-10 justify-center h-full flex-col items-center">
          <p className=" items-center text-[#ffffff] ">
            Soy un gordito que habla de compus. Me gusta mucho la programación y
            los 🥒 y aunque este ultimo ya la este sintiendo menos en el
            <span className="text-green-500"> c</span>orazón,
            <span className="text-green-500"> u</span>no
            <span className="text-green-500"> l</span>o
            <span className="text-green-500"> o</span>
            bserva de otra perspectiva y se da cuenta que... faltas vos bebé,
            contactáme.
          </p>
          <LinkStyled
            href="https://www.linkedin.com/in/mariano-luis-villa/"
            tooltip="Para vos bebé"
          >
            <SVGlinkedin />
          </LinkStyled>
        </section>
        <div className="relative w-1/2 h-full flex-1">
          <img
            src="/about.jpg"
            alt=""
            className=" h-full w-full rounded-lg object-cover "
          />
        </div>
      </section>
    </div>
  );
}
export default Jokes;
