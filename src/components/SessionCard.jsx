export default function SessionCard({ iconCode, title, minutes, cost, button, link }) {
  return (
    <div className="sessioncard">
      <i className={`icon light-icon ${iconCode}`}></i>
      <h2>{title}</h2>
      <p>{minutes} minutes @ $ {cost}</p>
      <a className="btn btn-navy" href={link}>{button}</a>
    </div>
  )
};