function SocialList({ socialLinks }) {
  return (
    <ul className="social-list">
      {socialLinks.map((socialLink, idx) => (
        <li key={idx}>
          <a
            href={`${socialLink.link}`}
            className={`btn social-icon ${socialLink.channel}`}
          >
            Facebook
          </a>
        </li>
      ))}
    </ul>
  );
}

export default SocialList;
