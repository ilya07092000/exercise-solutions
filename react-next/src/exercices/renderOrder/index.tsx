import { useEffect } from 'react';

const Comp1 = () => {
	console.log('Comp1 not effect');
	useEffect(() => {
		console.log('COMP1 effect');
	}, []);

	return (
		<>
			<Comp2 />
		</>
	);
};

const Comp2 = () => {
	console.log('Comp2 not effect');
	useEffect(() => {
		console.log('COMP2 effect');
	}, []);

	for (let i = 0; i < 100; i += 1) {}

	return (
		<>
			<Comp3>
				<Comp4 />
			</Comp3>
		</>
	);
};

const Comp3 = ({ children }: { children: any }) => {
	console.log('Comp3 not effect');
	useEffect(() => {
		console.log('COMP3 effect');
	}, []);

	return <>{children}</>;
};

const Comp4 = () => {
	console.log('Comp4 not effect');
	useEffect(() => {
		console.log('COMP4 effect');
	}, []);

	for (let i = 0; i < 100000000; i += 1) {
		let x = Math.random() * 1000000;
	}

	return null;
};

export default Comp1;
