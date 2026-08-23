type LocationInfoType = {
    city: string;
    country: string;
    address?: string;
  };
  
  export default function LocationInfo({
    city,
    country,
    address,
  }: LocationInfoType) {
    return (
      <>
        <p>Город: {city}</p>
        <p>Страна: {country}</p>
        {address && <p>Адрес: {address}</p>}
      </>
    );
  }
  