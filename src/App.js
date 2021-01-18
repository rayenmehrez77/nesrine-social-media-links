import "./App.css";
import image from "./images/nesrine-image.jpg";
import facebook from "./images/023-facebook.svg";
import instagram from "./images/044-instagram.svg";
import youtube from "./images/116-youtube.svg";
import linkedIn from "./images/052-linkedin.svg";
import whatsupp from "./images/109-whatsapp.svg";
import ticktok from "./images/tik-tok.svg";

function App() {
  return (
    <div className="app">
      <div className="app__imgbox">
        <img src={image} alt="nesrine bedhief" />
      </div>
      <h1>👑 Nesrine BEDHIEF 👑</h1>
      <div className="app__info">
        <span>Leadership and charisma coach 🚀 </span>
        <span>Life and business strategist 🎯</span>
        <span>Speaker 🎤</span>
        <span>Industrial Engineer 📈</span>
      </div>
      <h4>👇 I'm available on social media 👇</h4>
      <div className="app__buttons">
        <div className="app__buttons-1">
          <a
            href="https://www.groupado.tn/fr/experience/OgQUK0IE/business-mkhk-yaqf"
            target="_blank"
            className="business"
          >
            <strong className="book">Book Now</strong> 👉 business مخك ياقف 🚀🚀
          </a>
        </div>
        <div className="app__buttons-2">
          <a
            href="https://m.facebook.com/groups/968318753699477/?ref=group_browse"
            target="_blank"
          >
            Groupe VIP 🎯💰🔥
          </a>
        </div>
        <div className="app__buttons-3">
          <img src={instagram} alt="instagram" />
          <a href="https://www.instagram.com/nesrine_bedhief/" target="_blank">
            Instagram
          </a>
        </div>
        <div className="app__buttons-4">
          <img src={facebook} alt="facebook" />
          <a href="https://www.facebook.com/ena.ena.5815" target="_blank">
            Facebook
          </a>
        </div>
        <div className="app__buttons-5">
          <img src={linkedIn} alt="linkedIn" />
          <a
            href="https://l.facebook.com/l.php?u=https%3A%2F%2Fwww.linkedin.com%2Fin%2Fnesrine-bedhief-2b54771a6%3Ffbclid%3DIwAR0p9xD8ij6ioZFr38RDg8Ea2do-itP8q-K3aWfKxJTcN_1C3D3ioxwmWCY&h=AT2eDeA1qK2THk20HdX6rbys2302VEIDWJ6saQP2OLijfG-6A_024FntiuirDsbDLCydCACVzSyLZAFYhEnVcNTKDtkb3xKx6LAveJo4DlaBiHTq_LKIiUOSdvG2Ol-L9e1oAw"
            target="_blank"
          >
            LinkedIn
          </a>
        </div>
        <div className="app__buttons-6">
          <img src={youtube} alt="Youtube" />
          <a
            href="https://l.facebook.com/l.php?u=https%3A%2F%2Fyoutube.com%2Fchannel%2FUCae5QmRz-41xFk9p0z466BA%3Ffbclid%3DIwAR3Py_nRIn7tzklA-YuwYjMQ2xoMtcpoIrXJUftLPyEv1zT3ZY_OugCCuRc&h=AT2eDeA1qK2THk20HdX6rbys2302VEIDWJ6saQP2OLijfG-6A_024FntiuirDsbDLCydCACVzSyLZAFYhEnVcNTKDtkb3xKx6LAveJo4DlaBiHTq_LKIiUOSdvG2Ol-L9e1oAw"
            target="_blank"
          >
            I'm on Youtube
          </a>
        </div>
        <div className="app__buttons-7">
          <img src={ticktok} alt="Ticktok" />
          <a
            href="https://l.facebook.com/l.php?u=https%3A%2F%2Fvm.tiktok.com%2FZMJTMstyX%2F%3Ffbclid%3DIwAR0oEQ9WJsCrM18zKxM1xLN4KrOST1k0wHFuH5P1mAESUPegjH4GHN8lR0U&h=AT2eDeA1qK2THk20HdX6rbys2302VEIDWJ6saQP2OLijfG-6A_024FntiuirDsbDLCydCACVzSyLZAFYhEnVcNTKDtkb3xKx6LAveJo4DlaBiHTq_LKIiUOSdvG2Ol-L9e1oAw"
            target="_blank"
          >
            Ticktok
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;
