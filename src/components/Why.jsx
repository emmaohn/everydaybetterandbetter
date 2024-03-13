
export default function Why({ iconCode, title, content }) {
  return (
    <div className="why">
      <i className={`why-icon ${iconCode}`}></i>
      <p className="why-title">{title}</p>
      <p className="why-content">{content}</p>
    </div>
  )
};