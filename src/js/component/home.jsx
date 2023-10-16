import React from "react";
import PropType from "prop-types";

//NAVBAR
const NavBar = (props) => {
	return <div className="text-center">
		<nav className="navbar navbar-expand-lg navbar-dark text-light bg-dark mx-auto">
			<a className="navbar-brand" href="#">{props.brand}</a>
			<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
				<span className="navbar-toggler-icon"></span>
			</button>
			<div className="collapse navbar-collapse" id="navbarNav">
				<ul className="navbar-nav ms-auto">
					<li className="nav-item active">
						<a className="nav-link" href="#">{props.menuItem1} <span class="sr-only">(current)</span></a>
					</li>
					<li className="nav-item">
						<a className="nav-link" href="#">{props.menuItem2}</a>
					</li>
					<li className="nav-item">
						<a className="nav-link" href="#">{props.menuItem3}</a>
					</li>
					<li className="nav-item">
						<a className="nav-link" href="#">{props.menuItem4}</a>
					</li>
				</ul>
			</div>
		</nav>
	</div>;
};

NavBar.propTypes = {
	brand: PropType.string,
	menuItem1: PropType.string,
	menuItem2: PropType.string,
	menuItem3: PropType.string,
	menuItem4: PropType.string,
}
// JUMBOTRON
const Jumbotron = (props) => {
	return (
		<div className="jumbotron bg-light px-4 pb-5">
			<h1 className="display-4"><strong>{props.title}</strong></h1>
			<p className="lead">{props.description}</p>
			<a className="btn btn-primary btn-lg" href="#" role="button">{props.buttonText}</a>
		</div>
	);
};
NavBar.propTypes = {
	title: PropType.string,
	description: PropType.string,
	buttonText: PropType.string,
}
// Each individual card component
const Card = (props) => {
	const cardStyle = {
		width: "18rem",
		margin: "7px" // Adjust the margin value according to your preference
	};
	return (
		<div className="card text-center my-4" style={cardStyle}>
			<img className="card-img-top" src="https://picsum.photos/id/29/500/325" alt="Card image cap" />
			<div className="card-body">
				<h5 className="card-title">{props.cardTitle}</h5>
				<p className="card-text">{props.cardDescription}</p>
			</div>
			<div class="card-footer text-muted">
				<a href="#" className="btn btn-primary">{props.cardButton}</a>
			</div>
		</div>
	);
};
Card.propTypes = {
	cardTitle: PropType.string,
	cardDescription: PropType.string,
	cardButton: PropType.string,
}
// All cards together component
const CardRow = () => {
	return (
		<div className="row">
			<div className="col-sm-6 col-lg-3">
				<Card
					cardTitle="Card title 1"
					cardDescription="Some quick example text to build on the card title and make up the bulk of the card's content."
					cardButton="Find Out More!" />
			</div>
			<div className="col-sm-6 col-lg-3">
				<Card
					cardTitle="Card title 2"
					cardDescription="Some another example text to build on the second card and make sure the props are correct"
					cardButton="Find Out More!" />
			</div>
			<div className="col-sm-6 col-lg-3">
				<Card
					cardTitle="Card title 3"
					cardDescription="Some personalized card with its own content because I used props very well blah blah blah"
					cardButton="Find Out More!" />
			</div>
			<div className="col-sm-6 col-lg-3">
				<Card
					cardTitle="Card title 4"
					cardDescription="Some independant card because she wont depend on anyone just herself and the container of course"
					cardButton="Find Out More!" />
			</div>
		</div>
	);
};

const Footer = () => {
	const footerStyle = {
		paddingTop: "30px",
		paddingBottom: "5px",
		color: "white",
		marginTop: "10px"
	}
	return (
		<div class="text-center bg-dark" style={footerStyle}>
			Copyright © Your Website 2023
		</div>
	)
}

const LandingPage = () => {
	return (
		<div>
			<NavBar
				brand="Start Bootstrap"
				menuItem1="Home"
				menuItem2="About"
				menuItem3="Services"
				menuItem4="Contact" />
			<div className="container"> {/* Jumbotron and cards in the same container */}
				<Jumbotron
					title="A Warm Welcome!"
					description="This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information."
					buttonText="Call to action!" />
				<CardRow />
			</div>
			<Footer />
		</div>
	);
};

export default LandingPage;
