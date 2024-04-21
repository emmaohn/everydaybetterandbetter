
export default function CallToAction({ iconCode, title, button, link }) {
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
      <a className="btn btn-navy" href={link}>{button}</a>
    </div>
  )
};
