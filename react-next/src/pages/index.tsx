// import Comp1 from '@/exercices/renderOrder';
import { Debounce } from '@/exercices/debounce';
import { ParentContainer } from '@/exercices/reconciliation';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
	return (
		<>
			{/* <Comp1 /> */}
			<Debounce />
			{/* <ParentContainer /> */}
		</>
	);
}
