import { useRef } from "react";
import useWindowSize from "../../hooks/windowResize";
import "./card.css";
const Card = ({
  title,
  description,
  number = 1,
  socialCard,
  image,
  username,
  message,
  src,
}) => {
  const readMoreref = useRef();
  const { width: winSize } = useWindowSize();
  const isBigScreen = winSize > 1650;

  console.log(isBigScreen, winSize);
  if (!socialCard) {
    return (
      <div style={{ marginTop: "20px" }}>
        <div className="inner_elements">
          <span className="number">{number}</span>
          <h3 className="card_title">{title}</h3>
          <p className="card_description">{description}</p>
        </div>
        <div ref={readMoreref}></div>
      </div>
    );
  } else {
    return (
      <div className=" flip-card">
        <div className="flip-card-inner">
          <div className="flip-card-front">
            <img
              src={image}
              alt="Avatar"
              style={
                !isBigScreen
                  ? { width: "250px", height: "200px" }
                  : { width: "380px", height: "250px" }
              }
            />
          </div>
          <div class="flip-card-back">
            <h1>Babar Khan</h1>
            <a
             
              href={src}
            >
              {username}
            </a>
            <p>{message}</p>
          </div>
        </div>
      </div>
    );
  }
};

export default Card;
