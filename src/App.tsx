import "./App.css";
import UserProfile from "./components/UserProfile";
import Card from "./components/Card";
import ContactInfo from "./components/ContactInfo";
import LocationInfo from "./components/LocationInfo";
import InterestsInfo from "./components/InterestsInfo";

export default function App() {
  const userProfile = {
    userName: "Дэн", // обязательное свойство
    protoUrl: null, // необязательное свойство
    userDescription: "Любитель React и фронтенд разработки", // обязательное свойство
    openForWork: true, // необязательное свойство
    contactInfo: {
      // обязательное свойство
      email: "abramov@example.com", // обязательное свойство
      phone: "+1234567890", // необязательное свойство
    },
    location: {
      // необязательное свойство
      city: "Москва", // обязательное свойство
      country: "Россия", // обязательное свойство
      address: "Большая полянка 44", // необязательное свойство
    },
    interests: ["программирование", "путешествия", "фотография"], // необязательное свойство
  };

  return (
    <>
      <UserProfile
        userName={userProfile.userName}
        userDescription={userProfile.userDescription}
        protoUrl={userProfile.protoUrl}
        openForWork={userProfile.openForWork}
      />
      <div className="main">
        <Card title={"Контактная информация"}>
          <ContactInfo
            email={userProfile.contactInfo.email}
            phone={userProfile.contactInfo.phone || "Не указан"}
          />
        </Card>
        {userProfile.location && (
          <Card title={"Местоположение"}>
            <LocationInfo
              city={userProfile.location.city}
              country={userProfile.location.country}
              address={userProfile.location.address || "Не указан"}
            />
          </Card>
        )}
        <Card title={"Интересы"}>
          <InterestsInfo interests={userProfile.interests} />
        </Card>
      </div>
    </>
  );
}
