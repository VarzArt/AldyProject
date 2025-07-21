import Header from '@/components/header/Header';
import '@/app/globals.css';
import MainPage from '@/pages/mainPage/MainPage';

export default function Home() {
	return (
		<section>
			<Header className=""></Header>
			<MainPage></MainPage>
		</section>
	);
}
