
export default function Qualification({ number, content, doesIncrement }) {
  let finalNumber;
  if (doesIncrement === 'true') {
    let year = new Date().getFullYear();
    finalNumber = year - number;
  } else {
    finalNumber = number;
  }
  return (
    <div className="qual">
      <p className="qual-number">{finalNumber}</p>
      <p className="qual-content">{content}</p>
    </div>
  )
};