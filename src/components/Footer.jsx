
export default function Footer() {
  let currentYear = new Date().getFullYear()

  return (
    <div className="footer">
      <div className="footer-socials">
        <i className="icon light-icon fa-brands fa-facebook-square"></i>
        <i className="icon light-icon fa-brands fa-instagram"></i>
        <i className="icon light-icon fa-brands fa-linkedin"></i>
      </div>
      <p className="footer-copyright">Copyright &copy; 2014-{currentYear} Every Day Better and Better. All Rights Reserved.</p>
    </div>
  )
};