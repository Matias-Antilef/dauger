import LinkStyled from "../../components/link-styled/LinkStyled";
import {
  SVGgithub,
  SVGinstagram,
  SVGtwitch,
  SVGyoutube,
} from "../../assets/IconSVG";

function Footer() {
  return (
    <div className="relative w-full h-[250px] ">
      <img
        src="/bg.jpg"
        alt=""
        className="absolute h-full w-full object-cover"
      />
      <section className="  absolute w-full justify-center h-full  flex-col flex z-10 items-center   ">
        <div className="bg-[black]/70 p-2 rounded-lg w-max flex gap-5">
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
    </div>
  );
}
export default Footer;
