import '@/app/globals.css';

import { Breif } from '@/components/pages/breif';
import { Expertise } from '@/components/pages/expertise';
import { MainPage } from '@/components/pages/mainPage';
import { Portfolio } from '@/components/pages/portfolio';
import { Services } from '@/components/pages/services';

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
