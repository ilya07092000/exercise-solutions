import { useState } from 'react';

const Form = () => {
	const [isChecked, setIsChecked] = useState(false);

	return (
		<div style={{ margin: '20px' }}>
			<label for='checkbox'>
				<span>Use smth? </span>
				<input
					id='checkbox'
					type='checkbox'
					checked={isChecked}
					onChange={() => setIsChecked((curr) => !curr)}
				/>
			</label>

			<div style={{ marginTop: '40px' }}>
				{isChecked ? <Input /> : <Input />}

				<hr />
				{isChecked && <Input />}
				{!isChecked && <Input />}
			</div>
		</div>
	);
};

const ParentContainer = () => {
	return (
		<>
			<Form />
		</>
	);
};

const Input = () => {
	const [value, setValue] = useState('');

	return (
		<input
			type='text'
			value={value}
			onChange={(e) => setValue(e.target.value)}
		/>
	);
};

export { ParentContainer };
