import Icon from "./Icon";

export default function UserCard({img, name, position}){

  return (
    <>
      <div className="user-card-container">
        <Icon icon={img}/>
        <div className="user-card-inner-container">
          <p className="text-highlight">{name}</p>
          <p>{position}</p>
        </div>
      </div>
    </>
  );
}