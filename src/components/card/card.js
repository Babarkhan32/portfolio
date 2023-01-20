import "./card.css";
const Card = ({ title, description, number = 1 }) => {
  return (
    <div style={{ marginTop: "20px" }}>
      <div className="inner_elements">
        <span className="number">{number}</span>
        <h3 className="title">{title}</h3>
        <p className="card_description">{description}</p>
      </div>
    </div>
  );
};
export default Card;
