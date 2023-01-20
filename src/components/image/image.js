import "./image.css";
const Image = ({
  height,
  width,
  animation,
  src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmrq5hoYf9sOH3Y9LqIUpPP_qhbqc44z6_ODToME-5W5sYEVZBTvT0YiB5ViuprgNeuWI&usqp=CAU",
}) => {
  return (
    <img
      height={height}
      width={width}
      className={animation ? "animate-img shape" : ""}
      src={src.toString()}
      alt=""
      style={{ minWidth: width }}
    ></img>
  );
};
export default Image;
