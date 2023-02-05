import React, {Suspense} from 'react'
import {Routes, Route, Link} from 'react-router-dom';
import './styles/index.scss'
import {AboutPage} from 'pages/AboutPage';
import {MainPage} from 'pages/MainPage';
import {classNames} from 'shared/lib/classNames/classNames';
import {useTheme} from 'app/providers/ThemeProvider';

const App = () => {
	const {theme, toggleTheme} = useTheme();

	return (
		<div className={classNames('app', {}, [theme])}>
			<button onClick={() => toggleTheme()}> {theme} </button>
			<Link to={'/about'}>about</Link>
			<Link to={'/'}>home</Link>
			<Suspense fallback={<div>...loading</div>}>
				<Routes>
						<Route path={'/about'} element={<AboutPage/>}/>
						<Route path={'/'} element={<MainPage/>}/>
				</Routes>
			</Suspense>
		</div>
	);
};

export default App;