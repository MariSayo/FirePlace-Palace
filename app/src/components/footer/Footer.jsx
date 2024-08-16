import styles from './Footer.module.css'

const socials = [
  { social: "Facebook", id: 1 },
  { social: "Instagram", id: 2 },
  { social: "TikTok", id: 3 },
];

export default function Footerlist() {
  const listItems = socials.map((item) => <li key={item.id}>{item.social}</li>);
  return (
    <>
      <footer className={styles.siteFooter}>
        <div className="findUsOn">
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
