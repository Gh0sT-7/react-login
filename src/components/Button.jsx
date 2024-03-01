import { styled } from "styled-components";

const Button = styled.button`
	border: none;
	border-radius: 6px;
	border-radius: 0.25rem;
	padding: 1rem 2rem;
	background-color: #f0b322;
	font-weight: 600;
	text-transform: uppercase;
	color: #1f2937;

	&:hover {
		background-color: #f0920e;
	}
`;

export default Button;