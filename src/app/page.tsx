import Header from '@/components/header/Header';
import '@/app/globals.css';
import MainPage from '@/pages/mainPage/MainPage';
import Portfolio from '@/pages/portfolio/Portfolio';
import Expertise from '@/pages/expertise/Expertise';
import Services from '@/pages/services/Services';
import Breif from '@/pages/breif/Breif';
import Footer from '@/components/footer/Footer';

export default function Home() {
	return (
		<section>
			<Header className=""></Header>
			<MainPage></MainPage>
			<Portfolio></Portfolio>
			<Expertise></Expertise>
			<Services></Services>
			<Breif></Breif>
			<Footer></Footer>
		</section>
	);
}
