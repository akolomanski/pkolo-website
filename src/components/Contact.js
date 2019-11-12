import React from 'react';
import styled from 'styled-components';
import { DialogOverlay, DialogContent } from '@reach/dialog';
import '@reach/dialog/styles.css';

const StyledWrapper = styled.div`
	button {
		border: none;
		background-color: white;
		cursor: pointer;
		font-family: 'Barlow';
		font-size: 1.8rem;
		padding: 10px;
	}
`;

const Contact = () => {
    const [ showDialog, setShowDialog ] = React.useState(false);
	const open = () => setShowDialog(true);
	const close = () => setShowDialog(false);


	return (
		<StyledWrapper>
			<button onClick={open}>Kontakt</button>

			<DialogOverlay style={{ background: 'hsla(0, 100%, 100%, 0.9)' }} isOpen={showDialog} onDismiss={close}>
				<DialogContent style={{ boxShadow: '0px 10px 50px hsla(0, 0%, 0%, 0.33)' }}>
					<p>The overlay styles are a white fade instead of the default black fade.</p>
					<button onClick={close}>Very nice.</button>
				</DialogContent>
			</DialogOverlay>
		</StyledWrapper>
	);
};

export default Contact;
