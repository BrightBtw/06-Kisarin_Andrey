type InterestsInfoType = {
    interests?: string[];
  };
  
  export default function InterestsInfo({ interests }: InterestsInfoType) {
    if (!interests || interests.length === 0) {
      return <p>Не указаны</p>;
    }
    return (
      <ul>
        {interests.map((interest) => (
          <li key={interest}>{interest}</li>
        ))}
      </ul>
    );
  }
  