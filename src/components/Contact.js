import React from 'react';
import styled from 'styled-components';
import { DialogOverlay, DialogContent } from '@reach/dialog';
import '@reach/dialog/styles.css';
import GlobalStyles from '../components/Global';
import { useTransition, animated } from 'react-spring';

const StyledWrapper = styled.div`
	button {
		border: none;
		background-color: #444444;
		color: white;
		cursor: pointer;
		font-family: 'Barlow';
		font-size: 1.8rem;
		padding: 10px;
	}
`;

const MyDialogContent = styled(animated(DialogContent))`
    display: flex;
    align-items: center;
    justify-content: center;
	flex-direction: column;
    height: auto;
	font-family: 'Barlow';
    
	h3{
		font-weight: 400;
		font-size: 30px
	}
	form{
		display: flex;
		align-items: center;
    	justify-content: center;
		flex-direction: column;
	}
	input{
		margin-top: 20px;
		border: none;
		border-bottom: 3px solid hsla(0, 0%, 100%, .1); 
		width: 70vw;
		font-family: 'Barlow';
		background-color: hsla(0, 0%, 20%, 1);
		
		&[type=submit]{
			background-color: hsla(0, 0%, 100%, .1);
			color:hsla(0, 0%, 100%, 1);
			border: none;
			padding: 10px 20px;
			width: 200px;
			cursor: pointer;
		}
		&::-webkit-input-placeholder { /* Chrome/Opera/Safari */
  			color: hsla(0, 0%, 100%, .5);
		}
		&::-moz-placeholder { /* Firefox 19+ */
  			color: hsla(0, 0%, 100%, .5);
		}
		&::-ms-input-placeholder { /* IE 10+ */
  			color: hsla(0, 0%, 100%, .5);
		}
		&::-moz-placeholder { /* Firefox 18- */
  			color: hsla(0, 0%, 100%, .5);
		}
	}
	textarea{
		margin-top: 20px;
		border: none;
		border-bottom: 3px solid hsla(0, 0%, 100%, .1); 
		width: 70vw;
		resize: none;
		font-family: 'Barlow';
		background-color: hsla(0, 0%, 20%, 1);
		&::-webkit-input-placeholder { /* Chrome/Opera/Safari */
  			color: hsla(0, 0%, 100%, .5);
		}
		&::-moz-placeholder { /* Firefox 19+ */
  			color: hsla(0, 0%, 100%, .5);
		}
		&::-ms-input-placeholder { /* IE 10+ */
  			color: hsla(0, 0%, 100%, .5);
		}
		&::-moz-placeholder { /* Firefox 18- */
  			color: hsla(0, 0%, 100%, .5);
		}
	}
   
    button{
        background-color: transparent;
        border: none;
        position: absolute;
        right: 9%;
        top: 11%;
        font-size: 25px;
		color: white;
        cursor: pointer;
    }

	
`;

const Contact = () => {
	const AnimatedDialogOverlay = animated(DialogOverlay);
	/* const MyDialogContent = animated(DialogContent); */
	const [ showDialog, setShowDialog ] = React.useState(false);
	const open = () => setShowDialog(true);
	const close = () => setShowDialog(false);
	const transitions = useTransition(showDialog, null, {
		from: { opacity: 0 },
		enter: { opacity: 1 },
		leave: { opacity: 0 }
	});

	return (
		<div>
			<GlobalStyles />
			<StyledWrapper>
				<button onClick={open}>O Autorze</button>

				{transitions.map(
					({ item, key, props: styles }) =>
						item && (
							<AnimatedDialogOverlay
								style={{ background: 'hsla(0, 0%, 27%, 0.9)', opacity: styles.opacity }}
								isOpen={showDialog}
								onDismiss={close}
							>
								<MyDialogContent
									style={{
										boxShadow: '0px 10px 50px hsla(0, 0%, 27%, 0.33)',
										background: 'hsla(0, 0%, 20%, 1)',
										width: '90vw',
										maxWidth: '1600px'
									}}
								>
									<button onClick={close}> X</button>
									<h3>Kontakt</h3>
									<form action="">
										<input type="text" name="name" id="name" placeholder="Jan Kowalski" />
										<input type="email" name="email" id="email" placeholder="email@email.pl" />
										<textarea name="message" id="message" rows="10" placeholder="Twoja wiadomość" />
										<input type="submit" value="Wyślij" />
									</form>
								</MyDialogContent>
							</AnimatedDialogOverlay>
						)
				)}
			</StyledWrapper>
		</div>
	);
};

export default Contact;
