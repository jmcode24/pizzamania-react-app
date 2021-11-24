import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div>

<nav className="navbar navbar-expand-lg navbar-light bg-light nav-home">
    	<a className="navbar-brand nav-brand" href="#">PIZZAMANIA</a>
    	<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    		<span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
        	<ul className="navbar-nav ml-auto">
                <li className="nav-item">
                    <a className="nav-link nav-color" href="#">Home</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link nav-color" href="#">About Pizza</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link nav-color" href="#">Pizza Types</a>
                </li>
           </ul>
        </div>
    </nav>

    <div className="container-fluid">
    	<div className="row">
    		<div id="carouselExampleCaptions" className="carousel slide" data-ride="carousel">
    			<ol className="carousel-indicators">
    			 <li data-target="#carouselExampleCaptions" data-slide-to="0" className="active"></li>
                 <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
                 <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
                </ol>
                <div className="carousel-inner carousel-page">
                	<div className="carousel-item active">
                		<img src="images/pizza-1.jpg" className="d-block w-100" alt="pizza"/>
                	</div>
                	<div className="carousel-item">
                		<img src="images/pizza-2.jpg" className="d-block w-100" alt="pizza"/>
                	</div>
                	<div className="carousel-item">
                		<img src="images/pizza-3.jpg" className="d-block w-100" alt="pizza"/>
                	</div>
                </div>
                <a className="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev"><span className="carousel-control-prev-icon" aria-hidden="true"></span><span className="sr-only">Previous</span></a>
                <a className="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next"><span className="carousel-control-next-icon" aria-hidden="true"></span><span className="sr-only">Next</span></a>
            </div>
        </div>
    </div>

    <div className="container-fluid">
    	<h2 className="text-center pizza-heading mt-3 mb-2">About Pizza</h2>
    </div>

    <div className="container-fluid">
    	<div className="row">
    		<div className="col-md-6">
    		    <img src="images/pizza-4.jpg" alt="about pizza" className="img-fluid"/>	
    		</div>
    		<div className="col-md-6">
    			<h3>Pizza Is Awesome</h3>
    			<p>
    				Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
    				tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
    				quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
    				consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
    				cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
    				proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    			</p>
    			<p>
    				Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
    				tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
    				quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
    				consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
    				cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
    				proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    			</p>
    		</div>
    	</div>
    </div>

    <div className="container-fluid">
    	<h3 className="text-center pizza-heading mt-3 mb-2">Pizza Types</h3>
    </div>
    <div className="container-fluid">
    	<div className="row">
    		<div className="col-md-3">
    			<div className="card" style={{width: "18rem"}}>
    				<img src="images/pizza-5.jpg" className="card-img-top p-1" alt="asorted pizza"/>
    				<div className="card-body">
    					<h5 className="card-title text-center">ASSORTED PIZZA</h5>
    					<p className="card-text">
    					Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
    					tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
    					quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
    					consequat.</p>
    				</div>
    			</div>
    		</div>
    		<div className="col-md-3">
    			<div className="card" style={{width: "18rem"}}>
    				<img src="images/pizza-7.jpg" className="card-img-top p-1" alt="cheese pizza"/>
    				<div className="card-body">
    					<h5 className="card-title text-center">CHEESE PIZZA</h5>
    					<p className="card-text">
    						Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
    						tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
    						quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
    						consequat.</p>
    				</div>
    			</div>
    		</div>
    		<div className="col-md-3">
    			<div className="card" style={{width: "18rem"}}>
    				<img src="images/pizza-6.jpg" className="card-img-top p-1" alt="pepperoni pizza"/>
    				<div className="card-body">
    					<h5 className="card-title text-center">BOSSU PIZZA</h5>
    					<p className="card-text">
    						Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
    						tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
    						quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
    						consequat.</p>
    				</div>
    			</div>
    		</div>
    		<div className="col-md-3">
    			<div className="card" style={{width: "18rem"}}>
    				<img src="images/pizza-8.jpg" className="card-img-top p-1" alt="vegetable pizza"/>
    				<div className="card-body">
    					<h5 className="card-title text-center">VEGETABLE PIZZA</h5>
    					<p className="card-text">
    						Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
    						tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
    						quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
    						consequat.</p>
    				</div>
    			</div>
    		</div>
    	</div>
    </div>

    <div className="footer mt-5">
    	<div className="container">
    			<p className="text-center"> 
    				&copy; 2019 Pizzamania All Rights Reserved!
    			</p>
    	</div>
    </div>

    </div>
  );
}

export default App;
