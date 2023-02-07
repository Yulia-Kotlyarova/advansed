import './styles/index.scss'
import {classNames} from 'shared/lib/classNames/classNames';
import {useTheme} from 'app/providers/ThemeProvider';
import {AppRouter} from 'app/providers/router';
import {Navbar} from 'widgets/Navbar';
import {Sidebar} from 'widgets/Sidebar';

const App = () => {
	const {theme} = useTheme();

	return (
		<div className={classNames('app', {}, [theme])}>
			<Navbar className={'header-nav'}/>
			<div className={'content-page'}>
				<Sidebar className={''}/>
				<AppRouter/>
			</div>
		</div>
	);
};

export default App;