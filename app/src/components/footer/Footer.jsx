import "./Footer.css";

const socials = [
  { social: "Facebook", id: 1 },
  { social: "Instagram", id: 2 },
  { social: "TikTok", id: 3 },
];

export default function Footerlist() {
  const listItems = socials.map((social) => (
    <li key={social.id}>{socials.social}</li>
  ));
  return (
    <>
      <footer className="site-footer">
        <div className="find-us-on">
          <p> Find us on:</p>
          <ul>{listItems}</ul>
        </div>

        <div className="info">
          <p>
            © Fireplace Palace <br />
            <u>info@firepalace.co.uk</u>
          </p>
        </div>
      </footer>
    </>
  );
}
