import Link from './Link';

function Sidebar() {
  const links = [
    { label: 'Dropdown', path: '/' },
    { label: 'Accordion', path: '/accordion' },
    { label: 'Buttons', path: '/buttons' }
  ];

  const renderedLinks = links.map((link, index) => {
    return (
      <Link
        to={link.path}
        key={link.label + '-' + index}
      >
        {link.label}
      </Link>
    )
  });

  return (
    <div className="sticky top-0 overflow-y-scroll flex flex-col">
      {renderedLinks}
    </div>
  )
}

export default Sidebar;
