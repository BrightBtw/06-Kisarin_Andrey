import defaultUserPhoto from './assets/photo-default.svg';
import './App.css';

function App() {
  const userProfile = {
    userName: 'Дэн', // обязательное свойство
    protoUrl: null, // необязательное свойство
    userDescription: 'Любитель React и фронтенд разработки', // обязательное свойство
    openForWork: true, // необязательное свойство
    contactInfo: {
      // обязательное свойство
      email: 'abramov@example.com', // обязательное свойство
      phone: '+1234567890', // необязательное свойство
    },
    location: {
      // необязательное свойство
      city: 'Москва', // обязательное свойство
      country: 'Россия', // обязательное свойство
      address: 'Большая полянка 44', // необязательное свойство
    },
    interests: ['программирование', 'путешествия', 'фотография'], // необязательное свойство
  };

  return (
    <>
      <div className="description">
        <img className="photo--default" src={defaultUserPhoto} />
        <h4>{userProfile.userName}</h4>
        <p>{userProfile.userDescription}</p>
      </div>
      <div className="main">
        <div className="card">
          <div className="card-header">Контактная информация</div>
          <div className="card-content"></div>
        </div>
        <div className="card">
          <div className="card-header">Местоположение</div>
          <div className="card-content"></div>
        </div>
        <div className="card">
          <div className="card-header">Интересы</div>
          <div className="card-content"></div>
        </div>
      </div>
    </>
  );
}

export default App;
