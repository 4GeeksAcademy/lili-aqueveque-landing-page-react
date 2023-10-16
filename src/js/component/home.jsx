import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const NavBar = () => {
	const NavBarStyle = {
		paddingRight: "160px",
		paddingLeft: "160px",
	};
	return <div className="text-center">
		<nav className="navbar navbar-expand-lg navbar-dark text-light bg-dark mx-auto" style={NavBarStyle}>
			<a className="navbar-brand" href="#">Start Bootstrap</a>
			<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
				<span className="navbar-toggler-icon"></span>
			</button>
			<div className="collapse navbar-collapse" id="navbarNav">
				<ul className="navbar-nav ms-auto">
					<li className="nav-item active">
						<a className="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
					</li>
					<li className="nav-item">
						<a className="nav-link" href="#">About</a>
					</li>
					<li className="nav-item">
						<a className="nav-link" href="#">Services</a>
					</li>
					<li className="nav-item">
						<a className="nav-link" href="#">Contact</a>
					</li>
				</ul>
			</div>
		</nav>
	</div>;
};
// Jumbotron Component
const Jumbotron = () => {
	return (
		<div className="jumbotron bg-light px-4 pb-5">
			<h1 className="display-4"><strong>A Warm Welcome!</strong></h1>
			<p className="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
			<a className="btn btn-primary btn-lg" href="#" role="button">Call to action!</a>
		</div>
	);
};
// Each individual card component
const Card = () => {
	const cardStyle = {
		width: "18rem",
		margin: "7px" // Adjust the margin value according to your preference
	};
	return (
		<div className="card text-center my-4" style={cardStyle}>
			<img className="card-img-top" src="https://picsum.photos/id/29/500/325" alt="Card image cap" />
			<div className="card-body">
				<h5 className="card-title">Card title</h5>
				<p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
			</div>
			<div class="card-footer text-muted">
				<a href="#" className="btn btn-primary">Find Out More!</a>
			</div>
		</div>
	);
};
// All cards together component
const CardRow = () => {
	return (
		<div className="row">
			<div className="col-sm-6 col-lg-3">
				<Card />
			</div>
			<div className="col-sm-6 col-lg-3">
				<Card />
			</div>
			<div className="col-sm-6 col-lg-3">
				<Card />
			</div>
			<div className="col-sm-6 col-lg-3">
				<Card />
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
			<NavBar />
			<div className="container"> {/* Jumbotron and cards in the same container */}
				<Jumbotron />
				<CardRow />
			</div>
			<Footer />
		</div>
	);
};

export default LandingPage;
