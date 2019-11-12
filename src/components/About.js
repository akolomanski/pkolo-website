import React from 'react';
import styled from 'styled-components';
import { DialogOverlay, DialogContent } from '@reach/dialog';
import '@reach/dialog/styles.css';
import portrait from '../images/portrait-bg.png';

const StyledWrapper = styled.div`
	button {
		border: none;
		background-color: white;
		cursor: pointer;
		font-family: 'Barlow';
		font-size: 1.8rem;
		padding: 10px;
	}
    [data-reach-dialog-content] {
        background-color: red;
    }
    
`;

const MyDialogContent = styled(DialogContent)`
    display: flex;
    height: auto;
    [data-reach-dialog-content] {
        background-color: red;
    }
   
    p{
        width: 40%;
        font-size: 1.2rem;
        margin-top: 100px;
    }
    img{
        width: 60%;
        height: auto;
        max-height: 100%;
        object-fit: contain;
       
        
    }
    button{
        background-color: transparent;
        border: none;
        position: absolute;
        right: 26%;
        top: 11%;
        font-size: 25px;
    }
`;

const About = (props) => {
	const [ showDialog, setShowDialog ] = React.useState(false);
	const open = () => setShowDialog(true);
	const close = () => setShowDialog(false);

	return (
		<StyledWrapper>
			<button onClick={open}>O Autorze</button>

			<DialogOverlay style={{ background: 'hsla(0, 100%, 100%, 0.9)' }} isOpen={showDialog} onDismiss={close}>
				<MyDialogContent style={{ boxShadow: '0px 10px 50px hsla(0, 0%, 0%, 0.33)' }}>
					<button onClick={close}>X</button>
					<p>
						Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae, omnis molestiae? Iusto maxime ut ratione dicta! Sapiente iste a quas.
					</p>
					<img src={portrait} alt="portret" />
				</MyDialogContent>
			</DialogOverlay>
		</StyledWrapper>
	);
};

export default About;
