import "./App.css";
import image from "./images/nesrine-image.jpg";
import facebook from "./images/045-facebook.svg";
import instagram from "./images/034-instagram.svg";
import youtube from "./images/002-youtube.svg";
import linkedIn from "./images/031-linkedin.svg";
import ticktok from "./images/tik-tok.svg";

function App() {
  return (
    <div className="app">
      <div className="app__imgbox">
        <img src={image} alt="nesrine bedhief" />
      </div>
      <h1>👑 NESRINE BEDHIEF |نسرين بالضياف 👑</h1>
      <div className="app__info">
        <span> Motivational Speaker 🎤🚀 </span>
        <span>Personal and Professional Growth Coach 🎯</span>
        <span>Infopreneur </span>
        <span className="tag">#Youngentrepreneur </span>
        <span className="tag">#Procoach </span>
        <span className="tag">💪 #BelieveInYourself 💪</span>
      </div>
      <h4>👇 I'm available on social media 👇</h4>
      <div className="app__buttons">
        {/* <div>
          <a
            href="https://www.groupado.tn/fr/experience/pzyC8vcP/business-mkhk-yaqf?fbclid=IwAR3156mEMC7_YBntG4GswAExQsrXIo1TjUytmikoCn0xMiD-hMUaSFaENUg"
            target="_blank"
            className="business"
          >
            <strong className="book">Book Now</strong> 👉 business مخك ياقف 🚀🚀
          </a>
        </div> */}

        <div>
          <a
            href="https://www.groupado.tn/fr/experience/lvjfZAhG/rhlt-altshafy-aldhaty-llrwh-w-aljsd?fbclid=IwAR38onc1_o4t_e7QRclzB27cToTzFaFT2O74ZkE5RVNCM9-QZgMJPz-gup8"
            target="_blank"
          >
            رحلة التشافي الذاتي للروح و الجسد 🎯🔥
          </a>
        </div>

        {/* <div>
          <a
            href="https://www.groupado.tn/fr/experience/AQ9hWnIG/etudiant-responsable?fbclid=IwAR1E2Z7DgTz5qNZLUhfQmyyqqYVF_lPZ5EAWqparnQWAATopfntsjc05lCM"
            target="_blank"
          >
            Etudiant Responsable🎯🔥
          </a>
        </div> */}

        <div>
          <a
            href="https://m.facebook.com/groups/968318753699477/?ref=group_browse"
            target="_blank"
          >
            Groupe VIP 🎯💰🔥
          </a>
        </div>

        <div>
          <img src={instagram} alt="instagram" />
          <a href="https://www.instagram.com/nesrine_bedhief/" target="_blank">
            Instagram
          </a>
        </div>

        <div>
          <img src={facebook} alt="facebook" />
          <a href="https://www.facebook.com/ena.ena.5815" target="_blank">
            Facebook
          </a>
        </div>

        <div>
          <img src={linkedIn} alt="linkedIn" />
          <a
            href="https://l.facebook.com/l.php?u=https%3A%2F%2Fwww.linkedin.com%2Fin%2Fnesrine-bedhief-2b54771a6%3Ffbclid%3DIwAR0p9xD8ij6ioZFr38RDg8Ea2do-itP8q-K3aWfKxJTcN_1C3D3ioxwmWCY&h=AT2eDeA1qK2THk20HdX6rbys2302VEIDWJ6saQP2OLijfG-6A_024FntiuirDsbDLCydCACVzSyLZAFYhEnVcNTKDtkb3xKx6LAveJo4DlaBiHTq_LKIiUOSdvG2Ol-L9e1oAw"
            target="_blank"
          >
            LinkedIn
          </a>
        </div>

        <div className="app__buttons">
          <img src={youtube} alt="Youtube" />
          <a
            href="https://l.facebook.com/l.php?u=https%3A%2F%2Fyoutube.com%2Fchannel%2FUCae5QmRz-41xFk9p0z466BA%3Ffbclid%3DIwAR3Py_nRIn7tzklA-YuwYjMQ2xoMtcpoIrXJUftLPyEv1zT3ZY_OugCCuRc&h=AT2eDeA1qK2THk20HdX6rbys2302VEIDWJ6saQP2OLijfG-6A_024FntiuirDsbDLCydCACVzSyLZAFYhEnVcNTKDtkb3xKx6LAveJo4DlaBiHTq_LKIiUOSdvG2Ol-L9e1oAw"
            target="_blank"
          >
            I'm on Youtube
          </a>
        </div>

        <div className="app__buttons">
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
