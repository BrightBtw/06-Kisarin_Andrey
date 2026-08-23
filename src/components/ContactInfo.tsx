type ContactInfoType = {
    email: string;
    phone?: string;
  };
  
  export default function ContactInfo({ email, phone }: ContactInfoType) {
    return (
      <>
        <p>Email: {email}</p>
        <p>Телефон: {phone ?? "не указан"}</p>
      </>
    );
  }
  