import "./style.css";

const SwiperBtn = ({ cta, href = "#" }) => {
  return (
    <div id="wrapper">
      <div className="col">
        <a className="button" href={href}>
          <span className="text ">{cta}</span>
        </a>
      </div>
    </div>
  );
};

export default SwiperBtn;
