import ProfileCard from "./ProfileCard";

function App() {
  return (
    <div>
      <h1>Personal Digital Assistants</h1>

      <ProfileCard title="Alexa" handle="@alexa" />
      <ProfileCard title="SpaceX" handle="@elonboy69420" />
      <ProfileCard title="Shopify" handle="@shopify" />
    </div>
  );
}

export default App;
