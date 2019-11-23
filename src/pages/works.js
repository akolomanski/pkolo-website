import React from 'react';
import WorksList from '../components/Works/Works';
import Layout from '../components/Layout';
import GlobalStyles from '../components/Global'
import {useSpring, animated} from 'react-spring'



const Works = () => {
	const props = useSpring(
		
		{
		config:{
			mass: 100,
			clamp:true
		},
		to: async (next, cancel) => {
		  await next({opacity: 1})
		  
		},
		from: {opacity: 0}
	  })

	return(
		<animated.div style={props}>
			<GlobalStyles />
			<Layout />
			<WorksList />
		</animated.div>
	)
};

export default Works;
