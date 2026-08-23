import defaultUserPhoto from "../assets/photo-default.svg";

type UserProfileType = {
  userName: string;
  protoUrl?: string | null;
  userDescription: string;
  openForWork?: boolean;
};

export default function UserProfile({
  userName,
  protoUrl,
  userDescription,
  openForWork,
}: UserProfileType) {
  return (
    <div className="description">
      {protoUrl ? (
        <img className="avatar" src={protoUrl} />
      ) : (
        <img className="photo--default" src={defaultUserPhoto} />
      )}

      <h4>{userName}</h4>
      <p>{userDescription}</p>
      {openForWork ? <p>В поиске работы</p> : <p>Не в поиске работы</p>}
    </div>
  );
}
