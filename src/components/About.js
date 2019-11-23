import React from 'react';
import styled from 'styled-components';
import { DialogOverlay, DialogContent } from '@reach/dialog';
import '@reach/dialog/styles.css';
import GlobalStyles from '../components/Global';
import AboutPortrait from './AboutPortrait';

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

	
   
    p{
        width: 70%;
        font-size: 1.2rem;
        margin-top: 1em;
		padding-right: 50px;
        
    }
	.photoWrapper{
		width: 100%;
	}
    img{
        width: 30%;
        height: auto;
        max-height: 100%;
        object-fit: contain;
		
        
    }
    button{
        background-color: transparent;
		color: white;
        border: none;
        position: absolute;
        right: 6%;
        top: 11%;
        font-size: 25px;
        cursor: pointer;
    }
	@media only screen and (max-width: 800px) {
		flex-direction: column-reverse;
		text-align: center;
		img{
			padding: 20px;
			
		}
		p{
			margin-top: -20px;
			width: 100%;
			padding: 20px;
			text-align: left;
		}
  	}
`;

const About = () => {
	const [ showDialog, setShowDialog ] = React.useState(false);
	const open = () => setShowDialog(true);
	const close = () => setShowDialog(false);

	return (
		<div>
			<GlobalStyles />
			<StyledWrapper>
				<button onClick={open}>O Autorze</button>

				<DialogOverlay style={{ background: 'hsla(0, 0%, 27%, 0.9)' }} isOpen={showDialog} onDismiss={close}>
					<MyDialogContent
						style={{
							boxShadow: '0px 10px 50px hsla(0, 0%, 27%, 0.33)',
							background: 'hsla(0, 0%, 20%, 1)',
							width: '90vw'
						}}
					>
						<button onClick={close}>X</button>
						<p>
							Ur. 19.10.1961. Studia w ASP we Wrocławiu na wydziale ceramiki i szkła. Dyplom z zakresu
							projektowania ceramiki w 1991 r. Od 1993 roku pracownik dydaktyczny ASP we Wrocławiu.
							Prowadzi zajęcia dla studentów od III do V roku ceramiki studiów dziennych, oraz zajęcia z
							projektowania ceramiki użytkowej dla studentów od II do III roku wieczorowych studiów
							licencjackich, oraz uzupełniających magisterskich studiów wieczorowych. Udział w wielu
							wystawach zbiorowych i indywidualnych w kraju i za granicą. <br/><br/>Nagrody:<br/> Bronz Award - 3
							Międzynarodowy Festiwal Ceramiki MINO'92 - Japonia<br/><br/> "GRAND PRIX" ex eqo -Międzynarodowy
							Konkurs Ceramiki "CEVIDER 93" - VALENCJA - Hiszpania<br/><br/> I miejsce w konkursie "Fason Hotelowy"
							ZPS "Tułowice - Polska
						</p>

						<div className="photoWrapper">
							<AboutPortrait />
						</div>
					</MyDialogContent>
				</DialogOverlay>
			</StyledWrapper>
		</div>
	);
};

export default About;
