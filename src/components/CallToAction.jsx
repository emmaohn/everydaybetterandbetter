
export default function CallToAction({ iconCode, title, button }) {
  return (
    <div className="cta">
      <div className="cta-div1">
        <div className="cta-dark-circle">
          <div className="cta-light-circle">
            <i className={`icon dark-icon ${iconCode}`}></i>
          </div>
        </div>
      </div>
      <h2>{title}</h2>
      <button className="btn btn-navy">{button}</button>
    </div>
  )
};
