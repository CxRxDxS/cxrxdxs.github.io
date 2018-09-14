import React, { Component } from 'react';
import Navbar from '../components/Navbar/Navbar.js';
import Footer from '../components/Footer/Footer.js';
import Jumbotron from '../components/Jumbotron/Jumbotron.js';


class More extends Component{
	render() {
		return(
			<div>
				<Navbar />
				<Jumbotron title="More" subtitle="Why would you want to know more about this crappy website??" />
				<div className="container">
					<h2>Welcome to more!</h2>
					<p>Lorem ipsum dolor sit amet, 
					consectetur adipiscing elit, 
					sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
					Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
					Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
					Excepteur sint occaecat cupidatat non proident, 
					sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
				</div>
				<Footer />
			</div>
		);
	}
}

export default More;