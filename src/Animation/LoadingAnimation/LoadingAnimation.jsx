import "./LoadingAnimation.css";

export default function LoadingAnimation() {
  return (
    <>
      {
        <div className="body">
          <div className="container">
            <span>Loading...</span>
            <div className="circle">
              <div className="ring"></div>
            </div>
          </div>
        </div>
      }
    </>
  );
}
