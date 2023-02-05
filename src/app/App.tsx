import {Link} from 'react-router-dom';
import './styles/index.scss'
import {classNames} from 'shared/lib/classNames/classNames';
import {useTheme} from 'app/providers/ThemeProvider';
import {AppRouter} from 'app/providers/router';

const App = () => {
	const {theme, toggleTheme} = useTheme();

	return (
		<div className={classNames('app', {}, [theme])}>
			<button onClick={() => toggleTheme()}> {theme} </button>
			<Link to={'/about'}>about</Link>
			<Link to={'/'}>home</Link>
			<AppRouter/>
		</div>
	);
};

export default App;