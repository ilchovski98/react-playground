import classNames from 'classnames';
import useNavigation from '../hooks/use-navigation';

function Link({ to, children, className, activeClassName }) {
  const { navigate, currentPath } = useNavigation();
  const classes = classNames('text-blue-500', className, currentPath === to && activeClassName);

  const handleClick = (event, to) => {
    if (event.metaKey || event.ctrlKey) {
      return;
    }
    event.preventDefault();
    navigate(to);
  };

  return (
    <a
      href={to}
      onClick={(event) => handleClick(event, to)}
      className={classes}
    >{children}</a>
  )
}

export default Link;
