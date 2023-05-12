import React from "react";
const CardContainer = ({id , name , email}) => {
  return (
     <div className="robo_container">
      <img alt='robot' src={`https://robohash.org/${id}${name}150x150`} />
      <div>
        <h2>{name}</h2>
        <p>robo Email for use : <h4> {email}</h4> </p>
      </div>
    </div>
  );
}

const Card = ({ robots }) => {
  return (
    <div>
      {
        robots.map((users , i) => {
          return (
            <CardContainer
              key={i}
              id={robots[i].id}
              name={robots[i].name}
              email={robots[i].email}
              />
          );
        })
      }
    </div>
  );
}
export default Card;