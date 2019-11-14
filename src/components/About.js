import React from 'react';
import styled from 'styled-components';
import { DialogOverlay, DialogContent } from '@reach/dialog';
import '@reach/dialog/styles.css';
import portrait from '../images/portrait-bg.png';
import GlobalStyles from '../components/Global';

const StyledWrapper = styled.div`
	
	button {
		border: none;
		background-color: #444444;
		cursor: pointer;
		font-family: 'Barlow';
		color: white;
		font-size: 1.8rem;
		padding: 10px;
	}  
	
`;

const MyDialogContent = styled(DialogContent)`
	
    display: flex;
    align-items: center;
    justify-content: center;
    height: auto;
    background-color: #444444;

	[data-reach-dialog-content]{
		background-color: #444444;
	}  
   
    p{
        width: 40%;
        font-size: 1.2rem;
        margin-top: 1em;
        
    }
    img{
        width: 60%;
        height: auto;
        max-height: 100%;
        object-fit: contain;
       
        
    }
    button{
        background-color: transparent;
		color: white;
        border: none;
        position: absolute;
        right: 26%;
        top: 11%;
        font-size: 25px;
        cursor: pointer;
    }
	@media only screen and (max-width: 800px) {
		flex-direction: column-reverse;
		text-align: center;
		img{
			width: 100%;
		}
		p{
			width: 100%;
		}
  	}
`;

const About = () => {
	const [ showDialog, setShowDialog ] = React.useState(false);
	const open = () => setShowDialog(true);
	const close = () => setShowDialog(false);

	return (
		<>
		<GlobalStyles />
		<StyledWrapper>
			<button onClick={open}>O Autorze</button>

			<DialogOverlay style={{ background: 'hsla(0, 0%, 27%, 0.9)' }} isOpen={showDialog} onDismiss={close}>
				<MyDialogContent style={{ boxShadow: '0px 10px 50px hsla(0, 0%, 27%, 0.33)', background: 'hsla(0, 0%, 20%, 1)' }}>
					<button onClick={close}>X</button>
					<p>
						Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae, omnis molestiae? Iusto maxime ut ratione dicta! Sapiente iste a quas.
					</p>
					<img src={portrait} alt="portret" />
				</MyDialogContent>
			</DialogOverlay>
		</StyledWrapper>
		</>
	);
};

export default About;
