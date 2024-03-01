import { styled } from 'styled-components';

const Label = styled.label`
	display: block;
	margin-bottom: 0.5rem;
	font-size: 0.75rem;
	font-weight: 700;
	text-transform: uppercase;
	letter-spacing: 0.1em;
	color: ${({ $invalid }) => ($invalid ? '#f87171' : '#6b7280')};
`;

const Input = styled.input`
	box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
	border: 1px solid ${({ $invalid }) => ($invalid ? '#f73f3f' : 'transparent')};
	border-radius: 0.25rem;
	width: 100%;
	padding: 0.75rem 1rem;
	background-color: ${({ $invalid }) => ($invalid ? '#fed2d2' : '#d1d5db')};
	line-height: 1.5;
	color: ${({ $invalid }) => ($invalid ? '#ef4444' : '#374151')};
`;

export default function CustomInput({label, invalid, ...props}) {
    return <p>
        <Label $invalid={invalid}>{label}</Label>
        <Input $invalid={invalid} {...props} />
    </p>
};