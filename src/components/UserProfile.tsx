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
      <img
        className={protoUrl ? "avatar" : "photo--default"}
        src={protoUrl || defaultUserPhoto}
      />
      <h4>{userName}</h4>
      <p>{userDescription}</p>
      {typeof openForWork === "boolean" && (
        <p>{openForWork ? "В поиске работы " : "Не в поиске работы"}</p>
      )}
    </div>
  );
}
