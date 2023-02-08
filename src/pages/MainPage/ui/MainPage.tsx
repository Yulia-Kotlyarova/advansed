import React from 'react';
import {useTranslation} from 'react-i18next';

const MainPage = () => {
	const { t } = useTranslation('main');
	return (
		<div>
			<h1> {t('main')}</h1>
			<h2> iejsofjsoefijs</h2>
		</div>
	);
};

export default MainPage;