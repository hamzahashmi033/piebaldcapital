import "./style.css";
const Button = ({ text, href = "#", widthFull = false }) => {
  return (
    <>
      <div id="wrapper">
        <div className="col">
          <a className="btn" href={href}>
            <span className="text">{text}</span>
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="black"
              xmlns="http://www.w3.org/2000/svg"
              // color="black"
            >
              <path
                d="M4.66669 11.3334L11.3334 4.66669"
                stroke="black"
                stroke-width="1.33333"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M4.66669 4.66669H11.3334V11.3334"
                stroke="black"
                stroke-width="1.33333"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </a>
        </div>
        {/* <div class="col">
                    <a class="btn light" href="#">
                        <span class="text">Get in Touch</span>
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.66669 11.3334L11.3334 4.66669" stroke="white" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round" /><path d="M4.66669 4.66669H11.3334V11.3334" stroke="white" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round" /></svg>
                    </a>
                </div> */}
      </div>
    </>
  );
};
export default Button;
