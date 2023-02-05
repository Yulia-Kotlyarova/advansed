import {Route, Routes} from 'react-router-dom';
import {AboutPage} from 'pages/AboutPage';
import {MainPage} from 'pages/MainPage';
import React, {Suspense} from 'react';
import {routeConfig} from 'app/providers/router/routeConfig/routeConfig';

const AppRouter = () => {
	return (
		<Suspense fallback={<div>...loading</div>}>
			<Routes>
				<Route path={'/about'} element={<AboutPage/>}/>
				<Route path={'/'} element={<MainPage/>}/>
				{Object.values(routeConfig).map(({path, element}) => {
					<Route key={path} path={path} element={element}/>
				})}
			</Routes>
		</Suspense>
	);
};

export default AppRouter;