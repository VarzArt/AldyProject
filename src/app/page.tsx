import '@/app/globals.css';

import { Breif } from '@/pages/breif';
import { Expertise } from '@/pages/expertise';
import { MainPage } from '@/pages/mainPage';
import { Portfolio } from '@/pages/portfolio';
import { Services } from '@/pages/services';

export default function Home() {
	return (
		<section>
			<MainPage></MainPage>
			<Portfolio></Portfolio>
			<Expertise></Expertise>
			<Services></Services>
			<Breif></Breif>
		</section>
	);
}
