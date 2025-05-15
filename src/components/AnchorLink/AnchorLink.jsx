import { useLocation, useNavigate } from 'react-router-dom';

function AnchorLink({ to = '/', hash = '', children, className }) {
  const location = useLocation();
  const navigate = useNavigate();

  const handleClick = (e) => {
    e.preventDefault();

    if (location.pathname === to) {
      const el = document.getElementById(hash);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      navigate(to, { state: { scrollTo: hash } });
    }
  };

  return (
    <a href={`${to}#${hash}`} onClick={handleClick} className={className}>
      {children}
    </a>
  );
}

export default AnchorLink;
