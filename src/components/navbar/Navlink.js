export const Navlink = ({ text, href, active, onClick }) => {
  return (
    <li className="nav-item">
      <a
        className={`nav-link ${active ? "active" : ""}`}
        href={`#${href}`}
        onClick={onClick}
      >
        <p className="fs-4" data-i18n={`nav_${href}`}>
          {text}
        </p>
      </a>
    </li>
  );
};
