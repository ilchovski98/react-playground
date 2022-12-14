import classNames from 'classnames';
import useNavigation from '../hooks/use-navigation';

function Link({ to, children }) {
  const { navigate } = useNavigation();
  console.log('navigate', navigate);
  const classes = classNames('text-blue-500');
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
