import React, {Suspense, useContext, useState} from 'react'
import Counter from './components/Counter'
import {Routes, Route, Link} from 'react-router-dom';
import './styles/index.scss'
import {AboutPageAsync} from './pages/AboutPage/AboutPage.async';
import {MainPageAsync} from './pages/MainPage/MainPage.async';
import {Theme, ThemeContext} from './theme/ThemeContext';
import {useTheme} from './theme/useTheme';
import {classNames} from './helpers/classNames/classNames';

const App = () => {
	const {theme, toggleTheme} = useTheme();

	return (
		<div className={classNames('app', {}, [theme])}>
			<button onClick={() => toggleTheme()}> {theme} </button>
			<Link to={'/about'}>about</Link>
			<Link to={'/'}>home</Link>
			<Suspense fallback={<div>...loading</div>}>
				<Routes>
						<Route path={'/about'} element={<AboutPageAsync/>}/>
						<Route path={'/'} element={<MainPageAsync/>}/>
				</Routes>
			</Suspense>
			<Counter/>
		</div>
	);
};

export default App;