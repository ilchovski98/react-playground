import "bulma/css/bulma.css";
import ProfileCard from "./ProfileCard";
import AlexaImage from "./images/alexa.png";
import CortanaImage from "./images/cortana.png";
import SiriImage from "./images/siri.png";

function App() {
  return (
    <div>
      <div className="hero is-primary">
        <div className="hero-body">
          <p className="title">Personal Digital Assistants</p>
        </div>
      </div>

      <div className="container">
        <div className="section">
          <div className="columns">
            <div className="column is-3">
              <ProfileCard
                title="Alexa"
                handle="@alexa"
                image={AlexaImage}
                description="Alexa was created by Amazon and it helps you buy things"
              />
            </div>

            <div className="column is-3">
              <ProfileCard
                title="SpaceX"
                handle="@elonboy69420"
                image={CortanaImage}
                description="SpaceX was created by Elon Musk and it helps us become multiplanetary species"
              />
            </div>

            <div className="column is-3">
              <ProfileCard
                title="Shopify"
                handle="@shopify"
                image={SiriImage}
                description="Shopify is an ecommerce platform that makes merchants create stores easily"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
