import "./App.css";
import image from "./images/nesrine-image.jpg";
import facebook from "./images/023-facebook.svg";
import instagram from "./images/044-instagram.svg";
import youtube from "./images/116-youtube.svg";
import snapchat from "./images/080-snapchat.svg";
import telegram from "./images/089-telegram.svg";
import whatsupp from "./images/109-whatsapp.svg";

function App() {
  return (
    <div className="app">
      <img src={image} alt="nesrine bedhief" />
      <span>@nesrine_bedhief</span>
      <div className="app__info">
        <span>Leadership and charisma coach 🚀 </span>
        <span>Life and business strategist 🎯</span>
        <span>Speaker 🎤</span>
        <span>Industrial Engineer 📈</span>
      </div>
      <h1>👇 I'm available in social media 👇</h1>
      <div className="app__buttons">
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
          <img src={whatsupp} alt="whatsupp" />
          <a href="#" target="_blank">
            whatsapp
          </a>
        </div>
        <div>
          <img src={youtube} alt="Youtube" />
          <a href="#" target="_blank">
            Youtube
          </a>
        </div>
        <div>
          <img src={snapchat} alt="snapchat" />
          <a href="#" target="_blank">
            Snapchat
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;
