import debounce from 'lodash.debounce';
import { useCallback, useMemo, useState } from 'react';

const Debounce = () => {
	const [loading, setIsLoading] = useState(false);
	const [input, setInput] = useState('');

	const someAsyncOperation = async (value) => {
		setIsLoading(() => true);
		const result = await new Promise((resolve) =>
			setTimeout(() => resolve(`RESOLVED: ${value}`), 0)
		);
		setIsLoading(false);
		return result;
	};

	// eslint-disable-next-line react-hooks/exhaustive-deps
	const makeRequest = useCallback(
		debounce(async (value) => {
			const result = await someAsyncOperation(value);
			console.log(result);
		}, 1000),
		[]
	);

	const onChange = async (value) => {
		setInput(value);
		makeRequest(value);
	};

	return (
		<>
			<input onChange={(e) => onChange(e.target.value)} value={input} />
		</>
	);
};

export { Debounce };
