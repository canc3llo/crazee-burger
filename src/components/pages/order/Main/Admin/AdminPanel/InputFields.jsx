import styled from "styled-components"
import TextInput from "../../../../../reusable-ui/TextInput.jsx"
import { getProductsInputs } from "./getProductsInputs.jsx";

export default function InputFields({ product, onChange, ref }) {
	const inputs = getProductsInputs(product, onChange)

	return (
		<InputFieldsStyled>
			{inputs.map(input => (
				<TextInput 
					key={input.id}
					name={input.name}
					Icon={input.Icon}
					value={input.value}
					onChange={input.onChange}
					placeholder={input.placeholder}
					className={input.className}
					version={input.version}
					ref={input.name === "title" ? ref : null}
					// {...input}
				/>
			))}
		</InputFieldsStyled>
	)
}

const InputFieldsStyled = styled.div`
	width: 100%;
	height: 100%;
	gap: 8px 0;
	grid-area: 1/2 / 4/3;
	display: flex;
	flex-direction: column;
`
