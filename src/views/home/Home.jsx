import {
  SVGgithub,
  SVGinstagram,
  SVGtwitch,
  SVGyoutube,
} from "../../assets/IconSVG";
import LinkStyled from "../../components/link-styled/LinkStyled";

function Home() {
  return (
    <div className="bg-black h-screen w-screen flex items-center justify-around relative ">
      <section className="">
        <h1 className=" ">Dot Dager 🧉 </h1>
        <h3>Serial de chistes de mierda</h3>
        <h6 className="text-terciary text-sm ">y programador (secundario)</h6>
        <div className="flex gap-3 mt-6 items-center ">
          <LinkStyled
            href="https://www.twitch.tv/dagerxiv"
            tooltip="Veni a mi steam, pedazo de puto"
          >
            <SVGtwitch />
          </LinkStyled>
          <LinkStyled
            href="https://www.youtube.com/@DotDager"
            tooltip="Andá pa twitch, gil"
          >
            <SVGyoutube />
          </LinkStyled>
          <LinkStyled
            href="https://www.instagram.com/dager.32/"
            tooltip="Instagram"
          >
            <SVGinstagram />
          </LinkStyled>
          <LinkStyled href="https://github.com/MarianoVilla" tooltip="Git hub">
            <SVGgithub />
          </LinkStyled>
        </div>
      </section>
      <section>
        <img src="/dager.jpg" alt="" className="rounded-full h-96" />
      </section>
    </div>
  );
}
export default Home;
