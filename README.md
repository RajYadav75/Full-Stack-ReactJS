# Full-Stack-ReactJS

React 
- HTML, CSS, JavaScript
- Basic to Advanced
- 2 Projects
- MERN Stack
	
		M		MongoDB
		E		Express JS
		R		React JS
		N		Node JS

- Building, Testing, Deploying  
- Webpack, Parcel, Vite  - Building 
- Testing - JEST Framework
- Deploying - GIT, Firebase, AWS, AZURE

1. What is React?
A. React is a JavaScript library used to build Web and Native UI.

2. What is difference between React and Angular?
A. React is Library
    Angular is a Framework 

3. Is there difference between React & React JS?
A. No. 

4. What is React Native?
A. Mobile Framework for React, You can also use "ionic, native script etc."

5. Which React version ?
A. React up to 17x is legacy.		https://legacy.reactjs.org/
    React 18x is latest.			https://react.dev/

6. Why we need React or Angular like libraries & framework?
A. To address the challenges in modern web development.

7. What are the challenges in modern web development?
A. 
	1. Unified UX
	2. Fluid UX
	3. Loosely Coupled & Extensible 

8. What is the solution?
A. By building SPA [Single Page Application] & PWA [Progressive Web Application]


9. How to build SPA & PWA?
A.  You can build using JavaScript, jQuery, React, Angular, Vue, Knockout Js, BackBone, Ember JS.

10. What are issues in building a SPA with JS & jQuery?
A.
	- Lot of DOM manipulations
	- Lot of DOM interactions
	- Lot of explicit Ajax
	- Heavy
	- Slow
	- Legacy 

11. What are the Features of React?


Features of React:
1. React is Component based.
2. It is easy to reuse, extend and test. 
3. Good reusability, extensibility, testability and maintainability.
4. It is modular. 
5. It uses less memory.
6. It loads application specific framework.
7. It makes application light weight.
8. It renders faster. 
9. It is loosely coupled and extensible. 
10. It uses "Virtual DOM".
11. It uses one way binding. 

FAQ's:
1. What is DOM?
A. DOM is a hierarchy of elements in page.

2. What is Shadow DOM?
A. Shadow DOM is a hierarchy of elements in a component. 

3. What is Virtual DOM?
A. It is a copy of actual DOM is memory, React uses virtual DOM to update the UI.
    It makes the rendering and presentation look faster than normal. 


Issues with React:
- It is not designed for what you are using.
- Hence lot of GAP's.
- Lot of 3rd party implementations are required 


					Setup Environment for React
Setup Environment for React:

1. Download and Install Node JS on your PC

	- Node JS is used to create web apps, servers, scripting tools etc.
			https://nodejs.org/en
	- Node JS provides a package manager called NPM [Node Package Manager]
	- Package Manager is tool used by developer to install, upgrade and uninstall any
	  library required for project.		
				Yarn
				Bower
				NuGet
				Ruby GEMS
				Composer
				NPM

	- Open command prompt on your PC and test

		C:\> node  -v				
		C:\> npm  -v

	Note: Make sure that you have the latest version of Node 20x & Npm 10x.

2. Download Visual Studio Code Editor 

		https://code.visualstudio.com/

3. Download extensions of VS Code

		a) Live Server
		b) vscode-icons
		c) IntelliSense for CSS class names in HTML
		d) ESLint

React in existing web application:

1. Create a new folder for web application

		E:\web-app

2. Open folder in VS Code and setup environment for Web application

	- Open Terminal and run the command

			>npm init -y				// generates  "package.json"

	- Add a new file into project by name
	
			"README.md"
	
	- Add folders

			a) public		: It used to keep static resources: HTML, images, videos..
			b) src		: It used for dynamic resources: CSS, SCSS, JS, TS.. 

	- Add "index.html" in public folder
	- Add "home.html" in public folder

3. Setup React library for "home.html"

	- In order to use React in any page you need 3 libraries

			a) react.js			: core library for react
			b) react-dom.js		: library for virtual DOM
			c) babel.js			: compiler for react

	- You need all these libraries and approach for react up to version "17x".

	- You can get the libraries from CDN or download using package manager.

	- CDN is available for React from legacy repository 

		https://legacy.reactjs.org/docs/cdn-links.html
	
	- Babel CDN link : copy babel standalone library

		https://babeljs.io/docs/babel-standalone

	- Create an element for actual DOM 

			<div id="root"> </div>
	
	- Create virtual DOM and render into actual DOM by using the method

			ReactDOM.render()

Syntax:
	 ReactDOM.render("component", target_on_actual_DOM)

	- React uses JSX [JavaScript Extension] as language. Hence the type of script
	  must be "JSX or Babel".

Syntax:
		<script type="text/babel">  </script>
		<script type="text/jsx"> </script>

Ex:
1. index.html

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Index</title>
</head>
<body>
    <h2>Index</h2>
    <p>React is in <a href="home.html">Home</a> Page</p>
</body>
</html>

2. home.html

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Home</title>
    <script crossorigin src="https://unpkg.com/react@18/umd/react.development.js"></script>
    <script crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>
    <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
    <script type="text/babel">
        ReactDOM.render("Welcome to React", document.getElementById("root"));
    </script>
</head>
<body>
    <noscript>Please enable JavaScript on your browser</noscript>
    <h2>Home</h2>
    <div id="root"></div>
</body>
</html>

1. Setup Node JS
2. VS Code
3. Extensions
4. Create a new web application
5. Add Pages
6. Add React to a Page using CDN 

Install React & Babel library for Project:
1. Open Terminal in your project

2. Install libraries by using following commands

	> npm  install  react  --save
	> npm  install  react-dom --save
	> npm  install  @babel/standalone --save

3. All library files are copied into "node_modules" folder and project is using a module
    system called "UMD" [Universal Module Distribution]. There are various other module systems like:
		a) Common JS
		b) Require JS
		c) AMD
		d) ESModule

4. Link the following file to your HTML page [home.html]

  <script src="../node_modules/react/umd/react.development.js"> </script>
  <script src="../node_modules/react-dom/umd/react-dom.development.js"> </script>
  <script src="../node_modules/@babel/standalone/babel.js"> </script>

Ex:
home.html

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Home</title>
    <script src="../node_modules/react/umd/react.development.js"></script>
    <script src="../node_modules/react-dom/umd/react-dom.development.js"></script>
    <script src="../node_modules/@babel/standalone/babel.js"></script>
    <script type="text/babel">
        ReactDOM.render("Welcome to React", document.getElementById("root"));
    </script>
</head>
<body>
    <noscript>Please enable JavaScript on your browser</noscript>
    <h2>Home</h2>
    <div id="root"></div>
</body>
</html>

						 React Components
- React is component based.
- Components are considered as building blocks for SPA. [Single Page Application]
- Component is like a template with 3 basic elements
	a) Design
	b) Styles
	c) Logic [Functionality]

- Design is created using HTML.
- Styles are defined with CSS.
- Logic is configure with JavaScript or TypeScript [JSX, TSX]
- Components in React are created by using  
	a) JavaScript Functions
	b) JavaScript Classes

Note: Classes are still supported in React, but not recommended for new Code.

JavaScript Functions:
- Function Declaration
- Function Expression
- Function Signature
- Function Parameters
- Rest Parameters
- Spread Operator in Functions
- Formal Parameters
- Actual Parameters
- Function Closure 
- Anonymous Function
- Function Generator
- Function Call Back
- Function Promises 
- Async Functions
- Arrow Functions
- Function Recursion 

Rules for Creating a component with JS function:
- Component function name must start with upper case letter.
Syntax:
		function  Login()
		{
		}

		function login() { }		=> invalid

- Component function must return JSX element.
- It can't be void type.
- JSX is returned by using anonymous function.

Syntax:
		function Login()
		{
		   return (
			      <markup> </markup>		// JSX
		    );
		}

JSX Rules:
- JSX can't render multiple containers. 
- Make sure that JSX is rendering only one container into virtual DOM.

		(
		  <h2> </h2>				=> invalid
		  <p> </p>
		)

		(
		 <div>
		   <h2> </h2>				=> valid
		   <p> </p>
		</div>
		)

- JSX can't have void element syntax. 
- In JSX every element must have end token.

		<input type="text">	 </input>
		<input type="text" />

		<img> </img>
		<img />
		
		<br />
		<br> </br>

- JSX element can't use attributes, it requires only properties. 

Syntax:
		<div  class="container">			// invalid

		<div className="container">	// valid

Note: You can define a JSX fragment using various techniques.
		
		a) You can use HTML containers
			<div> <header> <section> <main> <nav> etc..
		
		b) You can use Empty fragment
			< >
	
			</>
		c) You can also use React.Fragment

			<React.Fragment>

			</React.Fragment>

Ex:
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>React Demo</title>
    <style>
        nav {
            display: flex;
            justify-content: space-between;
            padding: 20px;
            border:1px solid gray;
            border-radius: 5px;
        }
        .brand-title {
            font-family: Arial;
            font-weight: bold;
            font-size: 20px;
        }
        nav span {
            font-family: Arial;
            margin: 0px 20px 0px 20px;
        }
    </style>
    <script src="../node_modules/react/umd/react.development.js"></script>
    <script src="../node_modules/react-dom/umd/react-dom.development.js"></script>
    <script src="../node_modules/@babel/standalone/babel.js"></script>
    <script type="text/babel">

            function Navbar(){
                return(
                    <nav>
                        <div className="brand-title"> Shopper. </div>
                        <div> 
                           <span>Home</span>    
                           <span>Shop</span>
                           <span>Pages</span>
                           <span>Blog</span>
                        </div>
                        <div>
                            <input type="text" placeholder="Search shopper.com" />
                            <button>Search</button>
                        </div>
                    </nav>
                )
            }

           ReactDOM.render(<header> <Navbar/> <Navbar/> </header>, document.getElementById("root"));
    </script>
</head>
<body>
    <noscript>Please enable JavaScript on your browser</noscript>
    <div id="root"></div>
</body>
</html>

Setup Project with Bootstrap:

1. Download and install bootstrap & bootstrap icons for project using NPM

		> npm  install  bootstrap  bootstrap-icons  --save


2. Link the following file to your webpage

 <link rel="stylesheet" href="../node_modules/bootstrap/dist/css/bootstrap.css">
 <link rel="stylesheet" href="../node_modules/bootstrap-icons/font/bootstrap-icons.css">
 <script src="../node_modules/bootstrap/dist/js/bootstrap.bundle.js">

  www.getbootstrap.com
  icons.getbootstrap.com

Ex: 
home.html

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Home</title>
    <link rel="stylesheet" href="../node_modules/bootstrap-icons/font/bootstrap-icons.css">
    <link rel="stylesheet" href="../node_modules/bootstrap/dist/css/bootstrap.css">
    <script src="../node_modules/bootstrap/dist/js/bootstrap.bundle.js"></script>

    <script src="../node_modules/react/umd/react.development.js"></script>
    <script src="../node_modules/react-dom/umd/react-dom.development.js"></script>
    <script src="../node_modules/@babel/standalone/babel.js"></script>
    <script type="text/babel">

        function Login(){
            return (
               <div className="d-flex justify-content-center">
                  <div>
                    <form className="border border-2 p-4 rounded rounded-2 mt-4 alert alert-dismissible">
                        <h2 className="bi bi-person-fill">User Login </h2>
                        <button type="button" data-bs-dismiss="alert" className="btn btn-close"> </button>
                        <dl>
                            <dt>User Name</dt> 
                            <dd> <input type="text" className="form-control" /> </dd>
                            <dt>Password</dt> 
                            <dd><input type="password" className="form-control" /> </dd>
                        </dl>
                        <button className="btn btn-warning w-100">Login </button>
                    </form>
                  </div>
               </div>
            )
        }

        ReactDOM.render( <section> <Login /> </section> , document.getElementById("root"));
    </script>
</head>
<body class="container-fluid">
    <noscript>Please enable JavaScript on your browser</noscript>
    <div id="root"></div>
</body>
</html>

Ex: Netflix


<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Netflix | Watch Movies</title>
    <style>
        body {
            background-size: cover;
        }
        .shade {
            background-color: rgba(0,0,0,0.4);
            height: 100vh;
        }
        .brand-title {
            color:red;
            font-size: 30px;
            font-weight: bold;
        }
        main {
            margin-top: 100px;
        }
    </style>
    <link rel="stylesheet" href="../node_modules/bootstrap/dist/css/bootstrap.css">
    <link rel="stylesheet" href="../node_modules/bootstrap-icons/font/bootstrap-icons.css">
    <script src="../node_modules/bootstrap/dist/js/bootstrap.bundle.js"></script>
    <script src="../node_modules/react/umd/react.development.js"></script>
    <script src="../node_modules/react-dom/umd/react-dom.development.js"></script>
    <script src="../node_modules/@babel/standalone/babel.js"></script>
    <script type="text/babel">

         function NetflixHeader(){
             return(
                <nav className="d-flex justify-content-between p-4">
                    <div className="brand-title"> NETFLIX </div>
                    <div className="d-flex justify-content-between">
                        <div>
                            <div className="input-group">
                            <span className="bi bi-translate input-group-text"></span>
                            <select>
                                <option>English</option>
                                <option>हिंदी</option>
                            </select>
                            </div>    
                        </div>
                        <button className="btn ms-2  btn-danger">Sign In</button>
                    </div>
                </nav>
             )
         }

         function NetflixMain(){
            return(
                <main className="text-center text-white">
                    <div className="h1"> Unlimited movies, TV shows and more </div>
                    <div className="h4"> Watch anywhere. Cancel anytime. </div>
                    <div className="d-flex justify-content-center">
                        <NetflixRegister />
                    </div>
                </main>
            )
         }

         function NetflixRegister(){
            return(
                <div className="w-50 mt-4">
                    <p> Ready to watch? Enter your email to create or restart your membership. </p>
                    <div className="input-group input-group-lg">
                        <input type="email" placeholder="Your email address" className="form-control" />
                        <button className="btn btn-danger"> Get Started <span className="bi bi-chevron-right"></span> </button>
                    </div>
                </div>
            )
         }


          function NetflixIndex(){
             return(
                <div className="shade">
                    <header>
                        <NetflixHeader />    
                    </header>
                    <section className="text-white"> 
                        <NetflixMain />
                        
                    </section>
                </div>
             )
          }
          ReactDOM.render(<NetflixIndex />, document.getElementById("root"));
    </script>
</head>
<body background="./images/netflix-background.jpg">
    <noscript>Please enable JavaScript on your browser</noscript>
    <div id="root"></div>
</body>
</html>


Ex:

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Netflix | Watch Movies</title>
    <style>
        body {
            background-size: cover;
        }
        .shade {
            background-color: rgba(0,0,0,0.4);
            height: 100vh;
        }
        .brand-title {
            color:red;
            font-size: 30px;
            font-weight: bold;
        }
        main {
            margin-top: 100px;
        }
    </style>
    <link rel="stylesheet" href="../node_modules/bootstrap/dist/css/bootstrap.css">
    <link rel="stylesheet" href="../node_modules/bootstrap-icons/font/bootstrap-icons.css">
    <script src="../node_modules/bootstrap/dist/js/bootstrap.bundle.js"></script>
    <script src="../node_modules/react/umd/react.development.js"></script>
    <script src="../node_modules/react-dom/umd/react-dom.development.js"></script>
    <script src="../node_modules/@babel/standalone/babel.js"></script>
    <script type="text/babel">

         function NetflixHeader(){
             return(
                <nav className="d-flex justify-content-between p-4">
                    <div className="brand-title"> <button data-bs-target="#menu" data-bs-toggle="offcanvas" className="btn bi bi-justify btn-light"></button> NETFLIX </div>
                    <div className="offcanvas offcanvas-start" id="menu">
                        <div className="offcanvas-header">
                            <h2>Netflix</h2>
                            <button className="btn btn-close" data-bs-dismiss="offcanvas"></button>
                        </div>
                        <div className="offcanvas-body">
                            <ul>
                                <li>Movies</li>
                                <li>TV Shows</li> 
                                <li>Membership</li> 
                                <li>Your Account</li>
                            </ul>
                        </div>
                    </div>
                    <div className="d-flex justify-content-between">
                        <div>
                            <div className="input-group">
                            <span className="bi bi-translate input-group-text"></span>
                            <select>
                                <option>English</option>
                                <option>हिंदी</option>
                            </select>
                            </div>    
                        </div>
                        <button className="btn ms-2  btn-danger">Sign In</button>
                    </div>
                </nav>
             )
         }

         function NetflixMain(){
            return(
                <main className="text-center text-white">
                    <div className="h1"> Unlimited movies, TV shows and more </div>
                    <div className="h4"> Watch anywhere. Cancel anytime. </div>
                    <div className="d-flex justify-content-center">
                        <NetflixRegister />
                    </div>
                </main>
            )
         }

         function NetflixRegister(){
            return(
                <div className="w-50 mt-4">
                    <p> Ready to watch? Enter your email to create or restart your membership. </p>
                    <div className="input-group input-group-lg">
                        <input type="email" placeholder="Your email address" className="form-control" />
                        <button className="btn btn-danger"> Get Started <span className="bi bi-chevron-right"></span> </button>
                    </div>
                </div>
            )
         }


          function NetflixIndex(){
             return(
                <div className="shade">
                    <header>
                        <NetflixHeader />    
                    </header>
                    <section className="text-white"> 
                        <NetflixMain />
                        
                    </section>
                </div>
             )
          }
          ReactDOM.render(<NetflixIndex />, document.getElementById("root"));
    </script>
</head>
<body background="./images/netflix-background.jpg">
    <noscript>Please enable JavaScript on your browser</noscript>
    <div id="root"></div>
</body>
</html>


					Creating React 18x Application
- React application can be built by using various bundling tools.
		
		a) Webpack
		b) Parcel 
		c) Vite

- Bundling tools allow to configure a complete web application for environments like
		a) Development
		b) Quality [Testing]
		c) Production 

- Node JS provides support for Webpack bundler, hence you can create a react application by using Webpack bundler if Node is installed on your PC.

- Create project by using the following command 


	  F:\> npx   create-react-app    app-name[react-shopping]
	  	 
- Open Project folder in VS code

- React Application File System comprises of the following

 File / Folder		Description
 -------------------------------------------------------------------------------------------------------
  public			contains static resources like html, images, docs, etc. 

  src				contains dynamic resources like scss, css, js, jsx, ts, tsx etc.

  node_modules	contains all library files installed using NPM package manager. 

  package.json		contains project meta data.

  package.lock.json	  contains complete dependencies list that are used for project.

  .gitignore		configures the resources to ignore while publishing on to GIT.

  README.md		contains help documentation 

  
- To start a react application you have to run a batch program

	>npm start


				   Components in React 18x Environment

- Every component comprises of 3 files
		a) component.jsx | js
		b) component.css
		c) component.test.js
			     (or)
		    component.spec.js

- ".jsx" comprises of design and logic.
- ".css" comprises of styles
- ".test.js" comprises test cases [JEST Framework]

Note: Import CSS into JSX component. 

	  import   "./file.css";

- Every component must be in "src" folder.
- Every static resources like images, docs, json files, etc must be in "public".

Ex:
1. Add a new folder by name  "components" into "src"
2. Add following files into "login" folder

			login.component.jsx
			login.component.css
			login.component.test.js

login.component.jsx

import "./login.component.css";

export function LoginComponent()
{
    return(
        <div className="login-container">
            <form className="login-form">
                <h2>User Login</h2>
                <dl>
                    <dt>User Name</dt>
                    <dd><input type="text" /></dd>
                    <dt>Password</dt>
                    <dd><input type="password" /></dd>
                </dl>
                <button>Login</button>
            </form>
        </div>
    )
}

login.component.css

.login-form {
    border:1px solid gray;
    padding: 20px;
    border-radius: 10px;
}
.login-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
}

3. Go to "index.js" and set login as startup

	<React.StrictMode>
		
		<LoginComponent />

	</React.StrictMode>

Setup Bootstrap for React Application:

1. Install bootstrap and icons for project

		>npm  install  bootstrap  bootstrap-icons --save


2. Go to "index.js" and import 

	import  '../node_modules/bootstrap/dist/css/bootstrap.css';
	import  '../node_modules/bootstrap-icons/font/bootstrap-icons.css';

	import bootstrap from "bootstrap";		// imports all components of bootstrap
									   [carousel, navbar, offcanvas, modals,..]
Ex:
 login.component.jsx

import "./login.component.css";

export function LoginComponent()
{
    return(
        <div className="login-container">
            <form className="login-form alert alert-warning alert-dismissible">
                <h2 className="bi bi-person-fill">User Login</h2>
                <button type="button" className="btn btn-close" data-bs-dismiss="alert"></button>
                <dl>
                    <dt>User Name</dt>
                    <dd><input type="text" className="form-control" /></dd>
                    <dt>Password</dt>
                    <dd><input type="password" className="form-control" /></dd>
                </dl>
                <button className="btn btn-warning w-100">Login</button>
            </form>
        </div>
    )
}

					            DataBinding in React

- Data Binding is a technique of accessing data from source and binding to UI elements.
- It also involves identifying the changes in data from UI and update back into source.
- However React JS will not support Two-Way-Data binding implicitly.
- It supports only One-Way-Binding. 
- JavaScript requires various DOM methods to handle data binding.
- React uses data binding expression "{  }".

Syntax:
		var username = "John";

		<p>  Hello ! { username },  welcome to React </p>

Binding various Data Types:
- JavaScript Primitive types
	1. number
	2. string
	3. Boolean
	4. null
	5. undefined
	6. symbol
	7. bigint 

- JavaScript Non-Primitive types
	1. Array
	2. Object
	3. Map & Set
- Additional Type
	1. Date
	2. Regular Expression


							Number Type
- JavaScript number includes 
	signed integer			- 32
	unsigned integer		32
	float 				4.5
	double				23.556
	decimal				21340.4440
	bigint 				99488483828n
	exponent				2e3  [2000]	
	binary				0b1010
	hexadecimal			0x4130	
	octa					0o743
- Number binding can use various JS methods to convert a number into string or with factions. 

	a) toFixed()
	b) toLocaleString()

Syntax:
		var price = 56000.00;

		{ price.toFixed(2) }

		{ price.toLocaleString('en-in', { style:'currency', currency:'INR' }) }

- Converting numeric string into number requires

	a) parseInt()
	b) parseFloat()

						 Boolean

- React can't display "true" or "false" as value in UI.
- You have to logically handle.
- JSX will not allow any type of statements in UI.

Syntax:
	var  stock = true;

	{  (stock==true) ? "true" : "false"  }

				
						String 

Note: Variables are not recommended to handle data for component. 
          Variables are immutable and component can't handle data with immutable 	 
          reference. 

						State in Component

- Web applications use "HTTP" or "HTTPS"  as protocol.
- HTTP is state less protocol.
- State less nature of HTTP is good for server as it manages the memory with less overload. 
- It is not good to handle data across requests as server can't remember the data across requests. 
- Hence web application require various "State Management" techniques. 
- State Management is classified into 2 types
	a) Client Side State
	b) Server Side State
- React uses various client side state management techniques 
	a) Query String
	b) Local Storage
	c) Session Storage
	d) Cookies
- React also provides state for "Virtual DOM".
- React provides various "Hooks" [functions] to manage state for a component

	a) useState()
	b) useContext()
	c) useRef()
	d) useMemo()
	e) useCallBack()
	f) useReducer()
	etc..

- State is mutable.
- The local state is defined by using "useState()"  hook.
- Local state is configured while creating the component and destroyed when user navigates to another component. 

Syntax:
	import { useState }  from  "react";

	const [getter, setter] = useState();

- useState() will allocate memory for component, which is controlled by accessors
	a) getter		: to read value from memory [state].
	b) setter		: to assign value into memory [state].

FAQ's:

1. Why developers prefer using "const" for configuring useState?
A. State must be initialized for a component, which is secured and safe for memory.
     let & var allows assignment, which is not good for state. 

2. If you configure state using const how you will assign a new value?
A. const will not allow assignment, but allows changing the value in memory by re-initializing the memory. Setter re-initializes the memory and stores a new value into state.

Syntax:
		var [name, setName] = useState();

		setName = newname;			// invalid
		
		setName(newname);			// valid  - re-initializing 

3. When to setState ?
A. State can't set values while creating a component. You have to configure values 
     into state after component is created, which can be "mount" or any element event.


4. How to define a mount phase for component in React?
A. By using "useEffect()" hook.

Syntax:
		useEffect(()=>{ 


		}, [ dependencies ]);

		useEffect(function(){ }, [ ]);

Note: useEffect() can handle 2 phases
		a) Mount
		b) Unmount 

	  Every component mounts only once, you have to define the dependency to 
	  mount again. You can configure multiple dependencies for a component.

Ex:
data-binding.jsx

import { useEffect, useState } from "react";

export function DataBinding(){

    const [price, setPrice] = useState(40000.44);

    useEffect(()=>{

        setPrice(70000.44);

    },[])

    return(
        <div>
            <h2>Data Binding</h2>
            Price : { price }
        </div>
    )
}

						 Binding String Type
- ES5+ versions support string with
	a) Single Quote		'  '
	b) Double Quote		" "
	c) Backtick 			` `
- Backtick allows a string with embedded expression.
- Data binding embedded expression is defined by using  "${ }"

Syntax:
		`string ${expression}` 
		
FAQ: What is difference between "{ }"  & "${ }" ?
Ans:
	  {  }		react binding expression for JSX 
	  ${ }		JavaScript binding expression for string with backtick.

Ex:
data-binding.jsx

import { useEffect, useState } from "react";

export function DataBinding(){

    const [productName, setProductName] = useState();
    const [bgStyle, setBgStyle] = useState('');

    useEffect(()=>{

        setProductName("Samsung TV");
        setBgStyle('bg-warning');

    }, []);

    return(
        <div className="container-fluid">
            <h2 className={`text-center text-danger ${bgStyle}`} >Data Binding</h2>
            <dl>
                <dt>Name</dt>
                <dd>{productName}</dd>
            </dl>
        </div>
    )
}

- All JS string methods are same to use in React.
	a) String Formatting
	b) String Manipulation 

Formatting:
	bold(), italics(), fontsize(), fontcolor(), toUpperCase(), toLowerCase() etc.. 

Manipulation:
	length, indexOf(), lastIndexOf(), charAt(), charCodeAt(), match(), slice(),
	substring(), substr(), etc..


React Hooks [Functions]
- useState()
- useEffect()

Data Binding
- Number
- Boolean
- String


						   Undefined Type
- JS references are implicitly typed.
- The data type will be determined according to the value assigned. 
- If value is not assigned or initialized then JS sets as "undefined".

Syntax:
		var x ;
		document.write("x=" + x);		//  x = undefined

		if(x) {
		     //return true if value is defined.
		}

Syntax:
	const  [age] = useState();
	
	{ age }			=> age = undefined

Ex: 
data-binding.jsx

import { useEffect, useState } from "react";

export function DataBinding(){
    
    const [age, setAge] = useState();

    useEffect(()=>{

       setAge(22);

    }, []);

    return(
        <div className="container-fluid">
              <p>{(age)?age:"Please enter age"}</p>
        </div>
    )
}

							Null Type
- Null is a type returned when value is not provided into reference at runtime of application. 
- "null" is the keyword used to verify null reference. 

Syntax:
	const [age, setAge] = useState();

	setAge(prompt("Enter Age"));		// returns null on cancel

	{ (age==null)?"Enter Age":age) }


							Symbol
- It creates a hidden key for object.
- Hidden keys are ignored over iterations but are accessible individually. 

Syntax:
	var Id = Symbol();
	
	var product = {
	    [Id] : 1,
	    Name: "TV"
	}

	document.write("Id=" + product[Id]);

Summary:
- Number
- Boolean
- String
- Null
- Undefined 
- Symbol 
- BIGINT

					Binding Non-Primitive Types

1. Array Type

- Array Configuration 
	a) Meta character
	b) Array Constructor 

	var  values = [ ];				// static memory
	var  values = new Array();		// dynamic memory 

FAQ: What is difference between [ ]  & Array()?
Ans:  [ ] defines static memory, which is continuous memory. 
         Array() defines dynamic memory, which is discreet memory. 

FAQ: When to use [ ] & Array()?
Ans:  When you want operations on data continuously then declare by using "[ ]".
	  When you want disconnected operations on data then declare using Array().

Array Methods:
1. Reading
	
		toString()
		join()
		slice()
		map()
		find()
		filter()
		forEach()

2. Add 
		push()
		unshift()
		splice()

3. Remove
		pop()
		shift()
		splice()

4. Sort
		sort()
		reverse()

 etc.. 	


Ex:
data-binding.jsx

import { useEffect, useState } from "react";
import './data-binding.css';

export function DataBinding(){


    const [categories] = useState(["All", "Electronics", "Fashion", "Footwear", "Kids Fashion"]);

    return(
        <div className="container-fluid">
              <h2>Categories</h2>
              <nav className="d-flex justify-content-between bg-light border border-1 p-2 m-2">
                 {
                    categories.map(category => <a className="btn btn-warning" key={category} href={`/${category}`}>{category}</a>)
                 }
              </nav>
              <ol className="list-unstyled checklist">
                  {
                     categories.map((category, index)=> <li key={index}> <input type="checkbox" /> <label> {category} </label> </li> )
                  }
              </ol>

              <select>
                 {
                    categories.map(category=> <option key={category} value={category}>{category}</option>)
                 }
              </select>
        </div>
    )
}

data-binding.css


.checklist {
   height: 80px;
   width: 200px;
   overflow: auto;
   border:1px solid gray;
   padding: 10px;
}

							Object




						         Object
- Object is used to keep all related data and logic together. 
- It is key and value collection.
- Key is string type and value can be any type.

Syntax:
	var refName = {

			"Key": value,
			"Key": value
	}

- You can access the member of object within object by using "this" keyword.
- You can access the members of object outside by using reference of object name.

Syntax:
	 var product = {  Id:1, Name: "TV" };

	 product.Id;
	 product.Name;

FAQ's:
1. How to access all keys of an object?
A. By using "Object.keys()" or you can use "for..in" iterator. 

Syntax:
		Object.keys(product)[ ]


2. How to check the existence of a Key in object?
A. By using JS "in" operator.

Syntax:
		"key" in objectName;		// true or false
		"Id"  in product;			// true

3. How to remove a key from object?
A. By using JS "delete" operator.

Syntax:
		delete    objectName.key;
		delete    product.Id;

4. How to know the type of data stored in a key?
A. By using JS "typeof" operator.

Syntax:
		typeof   product[key]

- To access data from JSON file you need various "Ajax" techniques 

	1. XMLHttpRequest
	2. fetch()
	3. jQuery Ajax methods
	4. 3rd Party Ajax methods

XMLHttpRequest:
- It is the native ajax method used by browsers. 
- It provides various properties, methods and events to connect with remote file or URL and access the data. 

Syntax:	
		var http = new XMLHttpRequest();

		http.open("method", "url / file_path", async:boolean);

		http.send();

		http.onreadystatechange = function() {

			 if(http.readyState==4)
			 {
				  // you can access the response by using
				     http.responseText
				     http.responseXML
			 }	

		}

Ex:
ajax-demo.jsx

import { useEffect, useState } from "react"

export function AjaxDemo(){


    const [product, setProduct] = useState({title:'', price:0, rating:{rate:0, reviews:0, ratings:0}, offers:[], image:''});

    function LoadData(){
         
        var http = new XMLHttpRequest();

        http.open("get", "product.json", true);

        http.send();

        http.onreadystatechange = function(){

              if(http.readyState==4){
                   setProduct(JSON.parse(http.responseText));
              }

        }


    }


    useEffect(()=>{
        LoadData();
    },[])

    return(
        <div className="container-fluid">
            <div className="row mt-4">
                <div className="col-3">
                    <img src={product.image} width="100%" />
                </div>
                <div className="col-9">
                    <div className="h4">{product.title}</div>
                    <div className="mt-3">
                        <div className="badge bg-success rounded">
                             {product.rating.rate} <span className="bi bi-star-fill"></span> 
                        </div>
                        <span className="fw-bold text-secondary"> {product.rating.ratings.toLocaleString()} ratings & {product.rating.reviews.toLocaleString()} reviews </span>
                    </div>
                    <div className="mt-4 h3">
                        {product.price.toLocaleString('en-in', {style:'currency', currency:'INR'})}
                    </div>
                    <div>
                        <ul className="list-unstyled">
                            {
                                product.offers.map(offer=> <li className="bi bi-tag-fill text-success my-3" key={offer}> <span className="text-secondary">{offer}</span> </li>)
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}


public/product.json

{
    "title": "Apple iPhone 15 (Black, 128 GB)",
    "price": 65499,
    "rating": {"rate":4.6, "ratings":45131, "reviews":2430},
    "offers": [
        "Bank Offer10% off up to ₹1,000 on ICICI Bank Credit Card Transactions, on orders of ₹5,000 and aboveT&C",
        "Bank Offer10% off up to ₹1,500 on ICICI Bank Credit Card EMI Transactions, on orders of ₹5,000 and aboveT&C",
        "Bank Offer10% off up to ₹750 on ICICI Bank Debit Card Transactions, on orders of ₹5,000 and aboveT&C",
        "Special PriceGet extra ₹12401 off (price inclusive of cashback/coupon)T&C"
    ],
    "image": "iphone-black.jpg"
}

Issues with XMLHttpRequest Object:

- It is "Synchronous" by default.
- You have to explicitly configure "Async".
- It requires various parsing techniques to parse data.
- It returns the data in text format or optionally XML.
- Data in text format can be blocked by firewall.
- CORS issues [Cross Origin Resource Sharing]
- It is not very good in error handling. 

2. fetch
- fetch() is JavaScript promise.
- Promise is async by default. 
- It returns every data in binary format.
- You have to convert the binary data into JSON.
- It is better in handling CORS.
- It is better in handling errors.


Syntax:
	fetch("url / file_path")
	.then(function(response){  })
	.catch(function(error){ })
	.finally(function() { always })

Ex:
ajax-demo.jsx

import { useEffect, useState } from "react"

export function AjaxDemo(){


    const [product, setProduct] = useState({title:'', price:0, rating:{rate:0, reviews:0, ratings:0}, offers:[], image:''});

    function LoadData(){
         
           fetch("product.json")
           .then(response => response.json())
           .then(product=> {
               setProduct(product);
           })


    }


    useEffect(()=>{
        LoadData();
    },[])

    return(
        <div className="container-fluid">
            <div className="row mt-4">
                <div className="col-3">
                    <img src={product.image} width="100%" />
                </div>
                <div className="col-9">
                    <div className="h4">{product.title}</div>
                    <div className="mt-3">
                        <div className="badge bg-success rounded">
                             {product.rating.rate} <span className="bi bi-star-fill"></span> 
                        </div>
                        <span className="fw-bold text-secondary"> {product.rating.ratings.toLocaleString()} ratings & {product.rating.reviews.toLocaleString()} reviews </span>
                    </div>
                    <div className="mt-4 h3">
                        {product.price.toLocaleString('en-in', {style:'currency', currency:'INR'})}
                    </div>
                    <div>
                        <ul className="list-unstyled">
                            {
                                product.offers.map(offer=> <li className="bi bi-tag-fill text-success my-3" key={offer}> <span className="text-secondary">{offer}</span> </li>)
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

Ajax Techniques
- XMLHttpRequest
- fetch()

						    jQuery Ajax
- jQuery is JavaScript library.
- It provides various methods for DOM and BOM.
- jQuery provides Ajax methods to handle interactions with external files and API.
- jQuery Ajax methods provides tracking of complete life cycle of Ajax request.

		$.ajax()
		$.getJSON()
		.ajaxStart()
		.ajaxSuccess()
		.ajaxComplete()
		.ajaxStop()
		.ajaxError()

Features:
- It provides complete life cycle tracking.
- It is good in tracking errors.
- It returns response data directly in the format provided by source. 
- It doesn't require parsing techniques. 
- It can manage CORS.

1. Install jQuery for your project				

		> npm install jquery --save

2.  Import  "$" from jQuery library in the component where you want to use the Ajax methods.

3. Configure Ajax method

		  $.ajax({ 
			 method: "",
			 url: " ",
			 data: " ",
			 success: function(){ },
			 error: function(){ }
		   })

	method		: It refers to Http Verbs,  GET, POST, PUT, PATCH, DELETE
	url			: It refers to file or remote URL of resource. 
	data			: It is the data to send on POST, PUT, PATCH.
	success		: It is a callback that gets response on success. 

						response.status			200, 404
						response.statusText		OK,  Not Found
						response					Resource data [JSON, XML]
						response.headers			Content Type, Request Type

	error			: It is a callback that returns error log.

Ex:
ajax-demo.jsx

import { useEffect, useState } from "react";
import $ from "jquery";

export function AjaxDemo(){


    const [product, setProduct] = useState({title:'', price:0, rating:{rate:0, reviews:0, ratings:0}, offers:[], image:''});

    function LoadData(){
         
          $.ajax({
            method: 'get',
            url: 'product.json',
            success: (response) => {
                 setProduct(response);
            }, 
            error: (ex)=>{
                 console.log(ex);
            }
          })

    }


    useEffect(()=>{
        LoadData();
    },[])

    return(
        <div className="container-fluid">
            <div className="row mt-4">
                <div className="col-3">
                    <img src={product.image} width="100%" />
                </div>
                <div className="col-9">
                    <div className="h4">{product.title}</div>
                    <div className="mt-3">
                        <div className="badge bg-success rounded">
                             {product.rating.rate} <span className="bi bi-star-fill"></span> 
                        </div>
                        <span className="fw-bold text-secondary"> {product.rating.ratings.toLocaleString()} ratings & {product.rating.reviews.toLocaleString()} reviews </span>
                    </div>
                    <div className="mt-4 h3">
                        {product.price.toLocaleString('en-in', {style:'currency', currency:'INR'})}
                    </div>
                    <div>
                        <ul className="list-unstyled">
                            {
                                product.offers.map(offer=> <li className="bi bi-tag-fill text-success my-3" key={offer}> <span className="text-secondary">{offer}</span> </li>)
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

Note: XMLHttpRequest, fetch() & jQuery Ajax methods all of them use actual DOM. Hence React developers use various 3rd party libraries which can use "Virtual DOM".

			a) axios
			b) WhatwgFetch
			c) Telerik 	
			etc..
	  You can explore more 3rd party libraries in  "npmjs.com"

Axios Features:
- It avoids explicit conversions.
- It can cancel the requests.
- It is promise based API.
- It prevents XSRF & XSS
  [Cross Site Request Forgery]
  [Cross Site Scripting Attacks]
- It can handle multiple requests simultaneously at the same time.

		axios({ })			=> single request
		axios([{ }, { }])		=> multiple requests 

1. Install axios for React project

		> npm  install axios  --save

2. Import axios from "axios" module

	import   axios    from   "axios";

3. Configure axios request.

	   axios({ setings })			=> settings include method, url, data.
	   axios.get()
	   axios.post()
	   axios.put()
	   axios.delete()

    It is promise based, hence it contains then(), catch(), finally().

Syntax:
	axios.get("url / file_path")
		.then( response=> response.data)
		.catch(error => { })
		.finally(()=>{ })

	response.status
	response.statusText
	response.headers
	response.data


Ex:
ajax-demo.jsx

import { useEffect, useState } from "react";
import axios from "axios";


export function AjaxDemo(){


    const [product, setProduct] = useState({title:'', price:0, rating:{rate:0, reviews:0, ratings:0}, offers:[], image:''});

    function LoadData(){
        
        axios.get("product.json").then(response=>{
             setProduct(response.data);
        })

    }


    useEffect(()=>{
        LoadData();
    },[])

    return(
        <div className="container-fluid">
            <div className="row mt-4">
                <div className="col-3">
                    <img src={product.image} width="100%" />
                </div>
                <div className="col-9">
                    <div className="h4">{product.title}</div>
                    <div className="mt-3">
                        <div className="badge bg-success rounded">
                             {product.rating.rate} <span className="bi bi-star-fill"></span> 
                        </div>
                        <span className="fw-bold text-secondary"> {product.rating.ratings.toLocaleString()} ratings & {product.rating.reviews.toLocaleString()} reviews </span>
                    </div>
                    <div className="mt-4 h3">
                        {product.price.toLocaleString('en-in', {style:'currency', currency:'INR'})}
                    </div>
                    <div>
                        <ul className="list-unstyled">
                            {
                                product.offers.map(offer=> <li className="bi bi-tag-fill text-success my-3" key={offer}> <span className="text-secondary">{offer}</span> </li>)
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

Ex:
courses.json

[
    {
        "title": "DevOps with AWS",
        "rating": 5,
        "start": "12 Aug 2024",
        "faculty": "Mr. Veera Babu",
        "duration": "3 Months",
        "image": "devops.png"
    },
    {
        "title": "Fullstack Data Science & AI",
        "rating": 4,
        "start": "12 Aug 2024",
        "faculty": "Mr. Daniel",
        "duration": "4 Months",
        "image": "ds.png"
    },
    {
        "title": "Fullstack .NET",
        "rating": 4.5,
        "start": "12 Aug 2024",
        "faculty": "Mr. Daniel",
        "duration": "4 Months",
        "image": "dotnet.png"
    },
    {
        "title": "Oracle",
        "rating": 3.4,
        "start": "12 Aug 2024",
        "faculty": "Mr. Daniel",
        "duration": "4 Months",
        "image": "oracle.png"
    }

]


courses.jsx

import axios from "axios";
import { useEffect, useState } from "react"

export function Courses()
{

    const [courses, setCourses] = useState([{title:'', rating:0, faculty:'', duration:'', start:'', image:''}]);

    useEffect(()=>{

        axios.get('courses.json')
        .then(response=>{
             setCourses(response.data);
        })

    },[])

    return(
        <div className="container-fluid">
            <main className="d-flex">
                {
                    courses.map(course => 
                        <div className="card p-2 m-2" key={course.title}>
                            <img className="card-img-top" src={course.image} height="130" />
                            <div className="card-header text-center">
                                <div>{course.title}</div>
                            </div>
                            <div className="card-body">
                                <div className="text-center">
                                    <span className="bi bi-star-fill text-warning"></span>
                                    <span className="bi bi-star-fill text-warning"></span>
                                    <span className="bi bi-star-fill text-warning"></span>
                                    <span className="bi bi-star-fill text-warning"></span>
                                    <span className="bi bi-star-fill text-warning"></span>
                                    <span>{course.rating}</span>
                                </div>
                                <dl className="row">
                                    <dt className="col-5">Start</dt>
                                    <dd className="col-7">{course.start}</dd>
                                    <dt className="col-5">Duration</dt>
                                    <dd className="col-7">{course.duration}</dd>
                                    <dt className="col-5">By</dt>
                                    <dt className="col-7">{course.faculty}</dt>
                                </dl>
                            </div>
                        </div>
                    )
                }
            </main>
        </div>
    )
}


Ex:
nested-demo.jsx

import { useState } from "react"


export function NestedDemo(){

    const [data] = useState(
        [
            {Category:"Electronics", Products:["Televisions", "Mobile"]},
            {Category:"Footwear", Products:["Casuals", "Sneakers", "Boots"]}
        ]
    );


    return(
        <div className="container-fluid">
            <h2>Nested List</h2>
            <ol>
                {
                    data.map(item=>
                        <li key={item}>
                            {item.Category}
                            <ul>
                                {
                                    item.Products.map(product=> <li key={product}> {product} </li>)
                                }
                            </ul>
                        </li>
                    )
                }
            </ol>
            <select>
                {
                    data.map(item=>
                        <optgroup key={item.Category} label={item.Category}>
                            {
                                item.Products.map(product=> <option key={product}>{product}</option>)
                            }
                        </optgroup>
                    )
                }
            </select>
        </div>
    )
}

						        Map Type

Issues with Object type:
- It is key and value collection
- Key must be string type
- Value can be any type
- It requires lot of explicit operators and functions to handle interactions.
- It is slow in interactions 

Map Type:
- It is also a key and value collection.
- Key can any type and value also any type.
- It provides implicit methods and properties to handle interactions 
- Hence it is faster than object.
- However it is schema less. 

Syntax:
	var  data = new Map();
	data.set(key, value);
	data.get(key);
	data.keys()
	data.values()
	data.entries()
	data.delete(key)
	data.clear()
	data.has()
	data.size
	
						     Date Type
- React can configure date and time values by using Date() constructor. 
- It allocates memory to store current date and time.

Syntax:
	const [now] = useState(Date());

	<p> { now } </p>

- React requires various 3rd party date libraries to handle date and time values, the most commonly uses date adapters are
		a) dayjs
		b) moment
		c) luxon 

Ex:
1. Install  moment for React project

	>npm install  moment  --save

2. Import moment into component

	import   moment  from  "moment";

3. Apply date and time format using  "format()" method

	{   moment(yourDate).format('pre-defined-format') }

	D		single digit date value
	DD		double digit date value
	
	ddd		short weekday name
	dddd	long weekday name

	MM		month number
	MMM	short month name
	MMMM	long month name
	
	yy / yyyy	Full Year

Syntax:
	const  [mfd]  = useState(Date());

	{  moment(mfd).format('dddd DD  MMMM, yyyy')  }


					Regular Expression Type

- Regular expression is used to verify the format of a value.
- Expression is defined with meta characters and quantifiers.
- Regular expression is enclosed in "/  regExp /".
- Regular expression is verified by using "match()" method of string.

Syntax:
	const [regExp]  = useState(/ meta_chars_quantifier /);

	value.match(regExp)		// returns true if value is matching with expression.

Ex:
nested-demo.jsx

import { useEffect, useState } from "react"

export function NestedDemo(){


    const [mobile, setMobile] = useState("9876543210");
    const [regExp] = useState(/\+\(1\)\(\d{3}\)\s\d{3}-\d{4}/);

    useEffect(()=>{
        setMobile(prompt('Enter Mobile Number'));
    },[])

    return(
        <div className="container-fluid">
             {
                (mobile.match(regExp))?"Mobile Verified":"Invalid Mobile : US Format +(1)(000) 000-0000"
             }
        </div>
    )
}

Summary: 
- Primitive Types
	number
	string
	Boolean 
	null
	undefined 
	symbol 
	BIGINT
- Non Primitive 
	array
	object
	map
- Additional 
	date
	regExp

						Event Binding in React

1. What is Event?
A. Event is a message sent by sender to its subscriber in order to notify the change.
    Event uses a "delegate" mechanism, function pointer mechanism.
    Event follows a software design pattern called "Observer".
    "Observer" is a communication pattern.

2. What is sender and subscriber?
A. Sender sends a notification from element.
	 <button onclick="InsertClick()">

    Subscriber defines the actions to perform.

	  function  InsertClick()
	  {
	  }

3. What is Event Handler?
A. It is a "delegate", function pointer.

	onclick="InsertClick()"			// Event Handler
	onclick						// Event
 
    Event handler triggers notification to a specific function on particular event.
    You can define a handler for any element that is static.

4. What is Event Listener? 
A. Event Listener is defined for elements that are added to page dynamically and also to existing elements on specific actions.
    You can configure listener for elements according to state and situation, so that
     they are registered only when they are required.

Syntax:
	document.querySelect("button").addEventListener("Event", function(){

	})

5. What is difference between onclick & click?
A.  "onclick" is a handler event.
     "click" is listener event.

Ex:
<!DOCTYPE html>
<html lang="en">
<head>
     <meta charset="UTF-8">
     <meta name="viewport" content="width=device-width, initial-scale=1.0">
     <title>Document</title>
     <script>
          function InsertClick(){
               document.write("Record Inserted");
          }
          function bodyload(){
               var btnDelete = document.createElement("button");
               btnDelete.innerHTML = "Delete";
               btnDelete.addEventListener("click", function(){
                    document.write("Record Deleted");
               })
               document.querySelector("body").appendChild(btnDelete);

               document.getElementById("btnUpdate").addEventListener("click",()=>{
                    document.write("Record Updated Successfully..");
               })

          }
     </script>
</head>
<body onload="bodyload()">
     <button id="btnUpdate">Update</button>
     <button onclick="InsertClick()">Insert</button>

</body>
</html>

6. What are Event Arguments?
A. Event argument defines the "Payload" of event. 
    Every event have 2 default arguments to define in handler
		a) this
		b) event
 
    "this" contains information about the current element like
		a) id
		b) name
		c) className
		d) src
		f) href etc..
    "event" container information about current event like
		a) clientX 
		b) clientY 
		c) keycode
		d) charCode
		e) which etc..

Ex:
<!DOCTYPE html>
<html lang="en">
<head>
     <meta charset="UTF-8">
     <meta name="viewport" content="width=device-width, initial-scale=1.0">
     <title>Document</title>
     <script>
         function Database(btn, e){
               document.write(`Button Name: ${btn.name}<br>X Position: ${e.clientX} <br> Ctrl Key : ${e.ctrlKey}`);
         }
     </script>
</head>
<body>
    <button onclick="Database(this, event)" name="Insert">Insert</button>
    <button onclick="Database(this, event)" name="Update">Update</button>
    <button onclick="Database(this, event)" name="Delete">Delete</button>

    
</body>
</html>

Ex:
<!DOCTYPE html>
<html lang="en">
<head>
     <meta charset="UTF-8">
     <meta name="viewport" content="width=device-width, initial-scale=1.0">
     <title>Document</title>
     <script>
        function ImageClick(e) {
            console.log(e.clientX + "\n" + e.clientY);
            if((e.clientX>=40 && e.clientX<=159) && (e.clientY>=30 && e.clientY<=144)) {
                document.write("32 Pixel Dual Camera")
            } else {
               document.write("Silicon Panel");
            }
        }
     </script>
</head>
<body>
   <img src="../public/iphone-black.jpg" onclick="ImageClick(event)">
</body>
</html>

 - Event can have custom arguments. You can define along with default args or only custom args.

	<button onclick="Details('string', number, Boolean, [ ], { })"> Details </button>

	function Details(name, price, stock, cities, rating)
	{
	}

- Event listener can have only one argument that refers to "event". However event can access both event and element related information.

Syntax:

	  btnInsert.addEventListener("click", function(e) {

		   e.clientX;
		   e.clientY;
		   e.ctrlKey;

		   e.target.id;
		   e.target.name;
		   e.target.className;

	})

Ex:
<!DOCTYPE html>
<html lang="en">
<head>
     <meta charset="UTF-8">
     <meta name="viewport" content="width=device-width, initial-scale=1.0">
     <title>Document</title>
     <script>
          function bodyload(){
                document.getElementById("btnDetails").addEventListener("click", function(e){
                      document.write(`
                             Button Id: ${e.target.id} <br>
                             X Poistion: ${e.clientX} <br>
                             Ctrl : ${e.ctrlKey} <br>
                             Button Class: ${e.target.className}
                      `);
                })
          }
     </script>
</head>
<body onload="bodyload()">
     <button class="btn btn-primary" id="btnDetails">Details</button>
</body>
</html>

1. What is Event?
2. What is Event Handler?
3. What is Event Listener?
4. What are Event Args?

5. What is Event propagation?
A. Propagation is technique where the child event can simulate the parent element event. As parent and child elements use "bubble" for handling interactions. 

6. How to prevent event propagation? 
A. By using the event method "stopPropagation()".

Syntax:
		function ChildEvent(e)
		{
		   e.stopPropagation();
		}
		
		<button onclick="ChildEvent(event)">  Child </button>

Ex:
<!DOCTYPE html>
<html lang="en">
<head>
     <meta charset="UTF-8">
     <meta name="viewport" content="width=device-width, initial-scale=1.0">
     <title>Document</title>
     <style>
          nav {
               padding: 30px;
               background-color: black;
               color:white;
               font-size: 20px;
          }
     </style>
     <script>
        
     </script>
</head>
<body>
     <nav onclick="NavClick()">
          Navbar 
          <button onclick="SearchClick(event)">Search</button>
     </nav>
</body>
</html>

7. How to prevent default actions of any generic element?
A. Generic elements have default actions to perform, you can stop the default actions
     by using the event method "preventDefault()".

Syntax:
	<form onsubmit="FormSubmit(event)">

		<button type="submit"> Submit </button>
	</form>

	 function FormSubmit(e) {
		e.preventDefault();
	}
	
Ex:
<!DOCTYPE html>
<html lang="en">
<head>
     <meta charset="UTF-8">
     <meta name="viewport" content="width=device-width, initial-scale=1.0">
     <title>Document</title>
     <style>
         
     </style>
     <script>
         function FormSubmit(e){
             e.preventDefault();
             alert("Form data submitted to Server");
         }
     </script>
</head>
<body>
     <form onsubmit="FormSubmit(event)">
          User Name : <input type="text" name="User"> <button type="submit">Submit</button>
     </form>
</body>
</html>

8. Events are configured for element or browser?
A. All events used in JS are browser events defined for element. [BOM]


9. React is using virtual DOM, then how it can use browser events?
A. React will not use browser events, It have a virtual DOM events library called 
    "SyntheticEvents".

10. What are synthetic events?
A.  SyntheticEvent is base for all events used by react in virtual DOM.
     SyntheticEvents map to actual BOM events.

Syntax:
		React => onClick  => BOM => onclick
		React => onDoubleClick => BOM => ondblclick

Configuring Events in React component:

1. Event requires a subscriber defined in component function

		function  InsertClick(e) {

		}

2. JSX element use SyntheticEvent as sender.

	 <button  onClick={ InsertClick }>  Insert </button>


3. Events are registered at the time of mounting the component. Hence it uses 
    a listener with "event" argument, which can provides access to both
		a) element data
		b) event data

	 e.clientX;
	 e.ctrlKey;
	 e.target.id;
	 e.target.className;

Ex:
event-binding.jsx

export function EventDemo(){


    function InsertClick(e){
        console.log(`
               Button Id: ${e.target.id}\n 
               ClassName : ${e.target.className}\n 
               X Position : ${e.clientX}\n
               Ctrl Key : ${e.ctrlKey}
            `);
    }

     return(
        <div className="container-fluid">
            <button id="btnInsert" onClick={InsertClick}  className="btn btn-primary mt-3">Insert</button>
        </div>
     )
}

FAQ: How to configure custom arguments for event in react?
Ans: You need to define a function return with custom arguments in event handler.

	<button  onClick={ ()=> InsertClick(args) }>   Text </button>

FAQ: How to pass both default and custom args?
Ans:  The function return configured in handler can have an event parameter, which
	  provides access to default events.

	<button  onClick={  (e) => InsertClick(args, e) }> Text </button>

Ex:
event-demo.jsx



export function EventDemo(){


    function InsertClick(name, price, cities, event){
        console.log(`
                Name : ${name}\n
                Price: ${price}\n
                Cities: ${cities}\n
                Button Id: ${event.target.id}\n
                Class : ${event.target.className}
            `);
    }

     return(
        <div className="container-fluid">
            <button id="btnInsert" onClick={(e)=> InsertClick("TV", 34000, ['Delhi', 'Hyd'], e)}  className="btn btn-primary mt-3">Insert</button>
        </div>
     )
}


Mouse Events
		onMouseOver
		onMouseOut
		onMouseDown
		onMouseUp
		onMouseMove

Style Binding:
- It is a technique of configuring styles for JSX elements.
- You can bind the styles dynamically to make element interactive and responsive.
- Styles are defined using "style" property, which gets the attributes from JSON object.

Syntax:
		<h2  style={ { attributeName: 'value' } }>  Text  </h2>

- CSS attribute name must be in camel case.
- CSS attribute value must be string.

			background-color		backgroundColor
			text-align				textAlign
			font-size				fontSize
			color				color
			width				width

- Multiple attributes are separated with "," delimiter.

Syntax:
		<div  style={ { backgroundColor:'red', color:'#fff', border:'1px solid black' } }>

		</div>

Ex:
event-demo.jsx

import { useState } from "react"


export function EventDemo(){

    const [styleObj, setStyleObj] = useState({color:'black'});
    
    function handleMouseover(e){
        setStyleObj({color:e.target.id});
    }

    function handleMouseOut(){
        setStyleObj({color:'black'});
    }

     return(
        <div className="container-fluid">
             <h3>Mouse Events</h3>
             <div className="d-flex p-4 text-white text-center">
                <div onMouseOut={handleMouseOut} id="red" onMouseOver={handleMouseover} style={{width:'100px', backgroundColor:'red'}}>Red</div>
                <div onMouseOut={handleMouseOut} id="green" onMouseOver={handleMouseover} style={{width:'100px', backgroundColor:'green'}}>Green</div>
                <div onMouseOut={handleMouseOut} id="blue" onMouseOver={handleMouseover} style={{width:'100px', backgroundColor:'blue'}}>Blue</div>
             </div>
             <h1 style={styleObj}>Sample Text</h1>
        </div>
     )
}

Ex:
event-demo.css


.thumbnail {
    border: 2px solid gray;
}
.thumbnail:hover {
    border:2px solid blue;
    cursor: grab;
}

event-demo.jsx

import axios from "axios";
import { useEffect, useState } from "react";
import './event-demo.css';


export function EventDemo(){

    const [mobiles, setMobiles] = useState([{img_src:''}]); 
    const [preview, setPreview] = useState('m1.jpg');
  

    useEffect(()=>{

        axios.get("mobiles.json")
        .then(response=> {
             setMobiles(response.data);
        })

    },[])

    function handleMouseOver(e){
        setPreview(e.target.src);
    }


     return(
        <div className="container-fluid">
             <div className="mt-4 row">
                <nav className="col-2">
                    {
                        mobiles.map(mobile=>
                            <div className="my-4 thumbnail" style={{width:'75px'}} key={mobile.img_src}>
                                <img onMouseOver={handleMouseOver}  width="70" height="70" src={mobile.img_src} />
                            </div>
                        )
                    }
                </nav>
                <main className="col-10">
                    <img src={preview} width="35%" height="400"/>
                </main>
             </div>
        </div>
     )
}

Ex:
event-demo.css


@keyframes Rotate
{
    from {
         transform: rotate(0deg);
    }
    to {
        transform: rotate(360deg);
    }
}

.logo {
    animation-name: Rotate;
    animation-duration:5s;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
}
.logo:hover {
    animation-name: Rotate;
    animation-duration: 1s;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
}


event-demo.jsx


import './event-demo.css';


export function EventDemo(){

  

     return(
        <div className="container-fluid">
            <div className='d-flex bg-dark justify-content-center align-items-center' style={{height:'100vh'}}>
                 <img className='logo' src='logo192.png' />
            </div>
        </div>
     )
}

Ex:
event-demo.css


@keyframes Rotate
{
    from {
         transform: rotate(0deg);
    }
    to {
        transform: rotate(360deg);
    }
}

@keyframes Zoom {
    form {
        transform: scale(1) rotate(0deg);
    }
    to {
        transform: scale(3) rotate(360deg);
    }
}

event-demo.jsx


import { useState } from 'react';
import './event-demo.css';


export function EventDemo(){

  
    const [styleObj, setStyleObj] = useState({animationName:'Rotate', animationDuration:'5s', animationIterationCount:'infinite', animationTimingFunction:'linear'});

    function handlMouseOver(){
        setStyleObj({animationName:'Rotate', animationDuration:'1s', animationIterationCount:'infinite', animationTimingFunction:'linear'});
    }
    function handlMouseOut(){
        setStyleObj({animationName:'Rotate', animationDuration:'5s', animationIterationCount:'infinite', animationTimingFunction:'linear'});
    }

    function handleMouseDown(){
        setStyleObj({animationName:'Zoom', animationDuration:'5s', animationTimingFunction:'linear', animationIterationCount:'infinite'});
    }

     return(
        <div className="container-fluid">
            <div className='d-flex bg-dark justify-content-center align-items-center' style={{height:'100vh'}}>
                 <img onMouseDown={handleMouseDown} onMouseOut={handlMouseOut} onMouseOver={handlMouseOver} style={styleObj} src='logo192.png' />
            </div>
        </div>
     )
}

Ex: mouse-move

event-demo.jsx


import { useState } from 'react';
import './event-demo.css';


export function EventDemo(){

  
    const [styleObj, setStyleObj] = useState({position:'', left:'', top:''});
   
    function handleMouseMove(e){
         setStyleObj({position:'fixed', left:e.clientX + 'px', top:e.clientY + 'px'});
    }

     return(
        <div className="container-fluid" onMouseMove={handleMouseMove}>
            <div style={{height:'1000px'}}>Move your mouse pointer to test</div>
            <img style={styleObj} src='flag.gif' width="50" height="50" />
        </div>
     )
}


Element State Events
	onChange
	onBlur
	onFocus
	onSelectStart
	onSelect
	
Two Way Data Binding:
- It is a technique of identifying the changes in UI elements and updating into data source. 
- React can handle two way binding only by using "onChange" event.
- onChange is an Synthetic Event of React that allows changes in value and updates into the source. 

Syntax:
	  function handleChange(e)
	  {
	      setValue(e.target.value);
	  }

	  <input type="text"  onChange={handleChange}>

Ex:
event-demo.jsx


import { useState } from 'react';
import './event-demo.css';


export function EventDemo(){

  
    const [Name, setName] = useState('TV');
    const [nameError, setNameError] = useState('');

    function handleChange(e){
        setName(e.target.value)
    }

    function handleBlur(e){
        if(e.target.value.length===0) {
            setNameError('Name Required');
        } else {
            setNameError('');
            setName(e.target.value.toUpperCase());
        }
    }

    function handleFocus(){
        setNameError('Name in Block Letters');
    }

     return(
        <div className="container-fluid">
            <h3>Two way binding</h3>
            <dl>
                <dt>Product Name</dt>
                <dd><input type="text" value={Name} onFocus={handleFocus}  onBlur={handleBlur} onChange={handleChange} /></dd>
                <dd className='text-danger'> {nameError} </dd>
            </dl>
            <h3>Details</h3>
            <dl>
                <dt>Name</dt>
                <dd>{Name}</dd>
            </dl>
        </div>
     )
}

Class Binding:
- It is a technique used to bind CSS classes to JSX elements dynamically.
- You can change the class dynamically.

Syntax:
	<div  className={ 'cssClassName '  + dynamicName }> 
	<div  className={ `cssClassName ${dynamicName}` }


Ex:

import { useState } from 'react';
import './event-demo.css';


export function EventDemo(){

  
    const [theme, setTheme] = useState('bg-light');
    const [btnTheme, setbtnTheme] = useState('btn btn-dark w-100');

    function handleThemeChange(e){
         if(e.target.checked){
             setTheme('bg-dark text-white');
             setbtnTheme('btn btn-light w-100');
         } else {
             setTheme('bg-light'); 
             setbtnTheme('btn btn-dark w-100');
         }
    }

     return(
        <div className="container-fluid d-flex justify-content-center">
            <form className={`mt-4 p-4 border border-1 rounded ${theme}`}>
                <div className='form-switch'>
                    <input type='checkbox' onChange={handleThemeChange} className='form-check-input' /> 
                    <label className='form-check-label ms-2'> Dark Theme </label>
                </div>
                <h3 className='bi bi-person-fill'> Signin </h3>
                <dl>
                    <dt>User Name</dt>
                    <dd><input type="text" className='form-control'/></dd>
                    <dt>Password</dt>
                    <dd><input type="password" className='form-control' /></dd>
                </dl>
                <button className={btnTheme}>Login</button>
            </form>
        </div>
     )
}

Ex: EMI Calculator


import { useState } from "react"


export function EMICalculator(){

    const [amount, setAmount] = useState(100000);
    const [years, setYears] = useState(1);
    const [rate, setRate] = useState(10.45);
    const [emi, setEMI] = useState(0);
    const [toggle, showToggle] = useState('d-none');

    function handleAmountChange(e){
        setAmount(e.target.value);
    }

    function handleYearChange(e){ 
        setYears(e.target.value);
    }

    function handleRateChange(e) {
        setRate(e.target.value);
    }

    function handleCalculateClick(){
        var P = parseInt(amount);
        var R = parseFloat(rate)/12/100;
        var N = parseInt(years) * 12;
        var EMI = P * R * (Math.pow(1+R, N)) / (Math.pow(1+R,N) - 1);
        setEMI(Math.round(EMI).toLocaleString('en-in', {style:'currency', currency:'INR'}));
        showToggle('d-block');
    }

    return(
        <div className="container-fluid bg-secondary" style={{height:'100vh'}}>
            <h3 className="text-white text-center">Personal Load EMI Calculator</h3>
            <div className="bg-light m-4 p-4">
                <div className="row my-3">
                    <div className="col">
                        Amount you need &#8377; <input onChange={handleAmountChange} type="text" size="15" value={amount} />
                    </div>
                    <div className="col">
                        for <input type="text" size="2" onChange={handleYearChange} value={years} /> years
                    </div>
                    <div className="col">
                        Interest rate <input type="text" onChange={handleRateChange} size="4" value={rate} /> %
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <input type="range" onChange={handleAmountChange} className="form-range" min="100000" max="1000000" value={amount}/>
                        <div>
                            <span>&#8377; 1,00,000</span>
                            <span className="float-end">&#8377; 10,00,000</span>
                        </div>
                    </div>
                    <div className="col">
                        <input type="range" onChange={handleYearChange} className="form-range" min="1" max="5" value={years}/>
                        <div>
                            <span>1</span>
                            <span className="float-end">5</span>
                        </div>
                    </div>
                    <div className="col">
                        <input type="range" onChange={handleRateChange} className="form-range" min="10.45" max="18.45" step="0.01" value={rate}/>
                        <div>
                            <span>10.45%</span>
                            <span className="float-end">18.45%</span>
                        </div>
                    </div>
                </div>
                <div className="row my-3">
                    <div className="col text-end">
                        <button onClick={handleCalculateClick} className="btn btn-primary">Calculate</button>
                    </div>
                </div>
                <div className="row my-4">
                    <div className="col text-center">
                         <div className={toggle}>Your monthly EMI is <span className="fs-4 fw-bold text-primary">{emi}</span> for next {years*12} months </div>
                    </div>
                </div>
            </div>
        </div>
    )
}



Mouse Event
Element State Events
Two Way Binding - onChange


						    Keyboard Events
onKeyUp
onKeyDown
onKeyPress

- KeyUp & KeyDown are events that fire up actions immediately when user key-in any character. 
- KeyPress is executed when user finish a key and key-in another key.
- KeyUp & KeyDown are the events used while working with the chars.
- KeyPress is used while working with the ASCII code of chars.

			A = 65, Z=90
			a = 97, z = 122

- You can identify the keys by using the following event properties
	
			keyCode
			charCode
			shiftKey
			which
			altKey 
			ctrlKey

- keyCode, charCode and which all return the actual keycode, how ever "which" is compatible with all types of keyboard layouts. 

- shift, ctrl, alt are modifiers keys that return Boolean true or false. 

Ex:
key-demo.jsx


import axios from "axios"
import { useState } from "react"

export function KeyDemo(){


    const [error, setError] = useState('');    
    const [validClass, setValidClass] = useState('');
    const [toggle, setToggle] = useState('d-none');
    const [styleObj, setStyleObj] = useState({width:''});
    const [progressColor, setProgressColor] = useState('');
    const [msg, setMsg] = useState('');

    function VerifyUserId(e){
        axios.get("users.json")
        .then(response=> {
             var user = response.data.find(item=> item.UserId===e.target.value);
             if(user) {
                if(user.UserId===e.target.value){
                    setError('User Id Taken - Try Another');
                    setValidClass('text-danger');
                }
             } else {
                setError('User Id Available');
                setValidClass('text-success');
             }
        })
    }

    function handleCaps(e) {
        if(e.which>=65 && e.which<=90) {
            setToggle('d-block');
        } else {
            setToggle('d-none');
        }
    }

    function handlePassword(e){
            if(e.target.value.match(/(?=.*[A-Z])\w{4,15}/))
            {
                setStyleObj({width:'100%'});
                setProgressColor('bg-success');
                setMsg('Strong');
            } else {
                if(e.target.value.length<4) {
                    setStyleObj({width:'20%'});
                    setProgressColor('bg-danger');
                    setMsg('Poor');
                } else {
                    setStyleObj({width:'70%'});
                    setProgressColor('bg-warning');
                    setMsg('Weak');
                }
            }
    }


    return(
        <div className="container-fluid">
            <h2>Register User</h2>
            <dl className="w-25">
                <dt>User Id</dt>
                <dd><input type="text" className="form-control" onKeyUp={VerifyUserId} /></dd>
                <dd className={validClass}>{error}</dd>
                <dt>Password</dt>
                <dd>
                    <input type="password" onKeyUp={handlePassword} onKeyPress={handleCaps} className="form-control" />
                </dd>
                <dd>
                    <div className="progress">
                        <div style={styleObj} className={`progress-bar progress-bar-animated progress-bar-striped ${progressColor}`}>
                            {msg}
                        </div>
                    </div>
                </dd>
                <dd className={toggle}>
                    <span className="bi bi-exclamation-triangle-fill text-warning"> Warning : CAPS is ON </span>
                </dd>
            </dl>
        </div>
    )
}

users.json

[
    {
        "UserId":"john"
    },
    {
        "UserId":"john12"
    },
    {
        "UserId":"john1234"
    },
    {
        "UserId":"john_nit"
    },
    {
        "UserId":"david"
    }
    
]

						    Button Events

onClick				single click - left button
onDoubleClick		double click - left button
onContextMenu		right click - right button

Note: You can disable any DOM event by using a function that returns false. 

Ex:
button-demo.jsx


export function ButtonDemo(){


    function handleDoubleClick(){
        window.open('iphone-black.jpg','Iphone', 'width=400 height=500');
    }

    function handleContext(){
        alert('Right Click no allowed in this page');
        document.oncontextmenu = function(){
            return false;
        }
    }

    return(
        <div className="container-fluid" onContextMenu={handleContext}>
            <img onDoubleClick={handleDoubleClick} src="iphone-black.jpg" width="100" height="100" />
            <p>Double click to view large</p>
        </div>
    )
}

						       Timer Events


						     Timer Events

setTimeOut()
clearTimeOut()
setInterval()
clearInterval()

setTimeOut():
- It is a timer event used to control "bounce" in devices that use keyboard. 
- Bounce is a mechanism where task is loaded into memory and released immediately into process. 
- setTimeOut() can de-bounce. It can lock the task in memory for a specific duration of time and release into process. 

Syntax:
	setTimeOut(function(){ }, interval);

clearTimeOut():
- It is a timer event uses to remove a task from memory before it is released into process. 
- It requires a memory reference where the task is loaded. 

Syntax:
	clearTimeOut(referenceName);


							  useRef()

- It a new hook into React 17x versions.
- It is used to create a memory reference, which is intended for process.
- You can configure reference memory to store a value or function, which is used internally in the process and not for presentation. 

Syntax:
	  let  refName =  useRef(null);

	  refName.current = value / function(){};

- "current" is a property that refers to current thread process. 

Ex: 
timeout-demo.jsx

import { useRef, useState } from "react"


export  function TimeoutDemo(){

    const [msg, setMsg] = useState('');

    let thread2 = useRef(null);

    function Msg1(){
        setMsg('Hello !');
    }
    function Msg2(){
        setMsg('How are you?');
    }
    function Msg3(){
        setMsg('Welcome to React');
    }

    
    function handleClick(){
         setTimeout(Msg1, 3000);
         thread2.current = setTimeout(Msg2, 6000);
         setTimeout(Msg3, 10000);
    }

    function handleCancelClick(){
        clearTimeout(thread2.current);
    }

    return(
        <div className="container-fluid">
            <button onClick={handleClick} className="btn btn-primary mt-2">Display Messages</button>
            <button onClick={handleCancelClick} className="btn btn-danger mt-2 ms-1">Cancel Message 2</button>
            <p className="fs-4 text-center">{msg}</p>
        </div>
    )
}

setInterval():
- It is a timer event used to load task into memory and release a copy of task into process.
- It performs the task repeatedly at regular time intervals, until removed from memory.

Syntax:
	setInterval(function(){}, interval);

clearInterval():
- It removes the task from memory, which is using the reference of setInterval.

Syntax:
	clearInterval(referenceName);


FAQ: What is difference between timeout and interval?
Ans:  Timeout sets the task to execute once.
	  Interval sets the task to execute repeatedly.



						 Distributed Computing
- Distributed computing allows communication between two different applications running on two different machines.
- It is also about the communication between two different objects running in two different process of same machine.
- To build distributed applications various distributed technologies are required.
- Some of the popular distributed technologies are

			CORBA			Common Object Request Broken Architecture
			DCOM			Distribute Component Object Model
			RMI				Remote Method Invocation
			EJB				Enterprise Java Beans
			Web Service
			Remoting 
			etc..

- Web Service is one of the popular distributed computing technology known to all software systems like Java, .NET, PHP, Python etc..

Issues with Web Service: 
- It can use only SOAP as specification.
- It can run only on web server.
- It can use only "http" as protocol

Web Service Specifications:
a) SOAP
b) REST
c) JSON

SOAP 
- Service Oriented Architecture Protocol
- Consumer sends an XML request

	<Products>
		<Product>
		   <Id>1</Id>
		</Product>
	</Products>

- Provides sends an XML response
	<Products>
	    	<Product>
			<Id>1</Id>
			<Name>TV</Name>
			<Price>34000</Price>
		</Product>
	</Products>

REST
- Representational State Transfer
- Consumer sends a query request

	http://server.com/products?id=1

- Provider sends XML or JSON response. 

	{
	  "Id":1,
	 "Name": "TV",
	 "Price": 34000.44
	}

JSON
- JavaScript Object Notation
- Consumer sends a JSON request.
- Provider sends JSON response.


						        Web API
- Application Programming Interface 
- API provides a programming interface that handles communication in distributed applications.
- It is intention is to make the data available to any OS service and any Device.
- Features
	a) It uses REST & JSON
	b) It can run on any server
	c) It can use any protocol
	d) Light weight
	e) Modular
	f) Faster


- What is distributed computing?
- Various distributed computing technologies?
- Web Service & API

						        Fakestore API
- It provides REST full services for ERP [Enterprise Resource Planning].
- API Routes

	Route						Description
	--------------------------------------------------------------------------------------------------------------
	/products						returns [ ] of products. Every product is { }.
	/products/2					returns specific id product. { }
	/products/categories			returns [ ] of all categories. [ " " ].
	/products/category/electronics	returns [ ] of specific category products. [ { } ]

Syntax:
	https://fakestoreapi.com/products

Object:
	  {
		id,				
		title,
		price,
		image,
		description,
		rating: {rate, count}
	}

Ex:
fakestore-carousel.jsx

import axios from "axios";
import { useEffect, useRef, useState } from "react"

export function FakestoreCarousel(){

    const [product, setProduct] = useState({id:0, title:'', price:0, category:'', description:'', image:'', rating: {rate:0, count:0}});
    const [status, setStatus] = useState('Manual');

    let  count = useRef(1);
    let  thread = useRef(null);

    function LoadProduct(id) {
        axios.get(`https://fakestoreapi.com/products/${id}`)
        .then(response=>{
             setProduct(response.data);
        })
    }

    function LoadProductAuto(){
        count.current = count.current + 1;
        axios.get(`https://fakestoreapi.com/products/${count.current}`)
        .then(response=> {
            setProduct(response.data);
        })
    }

    useEffect(()=>{
        LoadProduct(1);
    },[])

    function handleNextClick(){
        count.current = count.current + 1;
        LoadProduct(count.current);
    }

    function handlePreviousClick(){
        count.current = count.current - 1;
        LoadProduct(count.current);
    }

    function handlePlayClick(){
        thread.current = setInterval(LoadProductAuto, 5000);
        setStatus('Slide Show Running');
    }
    function handlePauseClick(){
        clearInterval(thread.current);
        setStatus('Slide Show Paused');
    }

    function handleSliderChange(e){
        count.current = e.target.value;
        LoadProduct(count.current);
    }

    return(
        <div className="container-fluid">
            <div className="d-flex justify-content-center">
                <div className="card p-2 mt-4 w-50">
                    <div className="card-header text-center">
                         {product.title}
                         <div className="fw-bold">
                             {status}
                         </div>
                    </div>
                    <div className="card-body">
                        <div className="row">
                            <div className="col-1 d-flex flex-column justify-content-center align-items-center">
                                <button onClick={handlePreviousClick} className="bi bi-chevron-left btn btn-dark"></button>
                            </div>
                            <div className="col-10 position-relative">
                                <div className="position-absolute p-3 badge bg-danger rounded rounded-circle end-0 top-0">
                                    {product.price.toLocaleString('en-us', {style:'currency', currency:'USD'})}
                                </div>
                                <img width="100%" height="350" src={product.image} />
                                <div className="my-2">
                                    <input onChange={handleSliderChange} min="1" max="20" value={count.current} type="range"  className="form-range" />
                                </div>
                            </div>
                            <div className="col-1 d-flex flex-column justify-content-center align-items-center">
                            <button onClick={handleNextClick} className="bi bi-chevron-right btn btn-dark"></button>
                            </div>
                        </div>
                    </div>
                    <div className="card-footer text-center">
                        <button onClick={handlePlayClick} className="bi bi-play btn btn-primary mx-2"></button>
                        <button onClick={handlePauseClick} className="bi bi-pause btn btn-danger mx-2"></button>
                    </div>
                </div>
            </div>
        </div>
    )
}

Ex: 
interval-demo.jsx

import { useRef, useState } from "react"


export function IntervalDemo(){


    const [toggleButton, setToggleButton] = useState('d-block');
    const [toggleProgress, setToggleProgress] = useState('d-none');
    const [toggleImage, setToggleImage] = useState('d-none');
    const [progressValue, setProgressValue] = useState(1);
    
    let thread = useRef(null);
    let count = useRef(1);

    
    function StartProgress(){
        count.current = count.current + 1;
        setProgressValue(count.current);
        if(count.current==100){
            setToggleProgress('d-none');
            setToggleImage('d-block');
        }
    }
    

    function handleLoadClick(){
        setToggleButton('d-none');
        setToggleProgress('d-block');
        thread.current = setInterval(StartProgress,100);
    }
    function handlePauseClick(){
        clearInterval(thread.current);
    }
    function handlePlayClick(){
        thread.current = setInterval(StartProgress,100);
    }

    return(
        <div className="container-fluid">
            <div className="d-flex justify-content-center align-items-center" style={{height:'100vh'}}>
                <div className="text-center">
                    <div className={toggleButton}>
                        <button onClick={handleLoadClick} className="btn btn-primary">Load Image</button>
                    </div>
                    <div className={toggleProgress}>
                        <progress min="1" max="100" value={progressValue} style={{width:'400px', height:'30px'}}></progress>
                        <div>
                            {progressValue} % Completed
                        </div>
                        <div className="mt-2">
                            <button onClick={handlePauseClick} className="btn btn-warning bi bi-pause"></button>
                            <button onClick={handlePlayClick} className="btn btn-success ms-1 bi bi-play"></button>
                        </div>
                    </div>
                    <div className={toggleImage}>
                        <img src="iphone-black.jpg" width="300" height="400" />
                    </div>
                </div>
            </div>
        </div>
    )
}

						  Form Events
- Form events are defined for <form> element.
- They are generic events that handle submit and reset functionality with generic buttons.

Syntax:
	  <form  onSubmit={ }   onReset={ }>

	  </form>

- React developers use various 3rd party libraries to handle form interactions

	a) Formik
	b) Telerik Forms
	c) React Hook Form
	    etc..


Form Events
- onSubmit
- onReset

Ex: React Default Form Handling

form-demo.jsx

import { useState } from "react"

export function FormDemo(){


    const [user, setUser] = useState({UserName:'', Age:0, City:''});

    function handleNameChange(e){
        setUser({
            UserName: e.target.value, 
            Age: user.Age,
            City: user.City
        })
    }

    function handleAgeChange(e){
        setUser({
            UserName: user.UserName, 
            Age: e.target.value, 
            City: user.City
        })
    }

    function handleCityChange(e){
        setUser({
            UserName: user.UserName, 
            Age: user.Age, 
            City: e.target.value
        })
    }

    function handleSubmit(e){
        e.preventDefault();
        console.log(user);
    }

    return(
        <div className="container-fluid">
            <form onSubmit={handleSubmit}>
                <h3>Register</h3>
                <dl>
                    <dt>User Name</dt>
                    <dd><input type="text" onChange={handleNameChange} /></dd>
                    <dt>Age</dt>
                    <dd><input type="number" onChange={handleAgeChange} /></dd>
                    <dt>City</dt>
                    <dd>
                        <select onChange={handleCityChange}>
                            <option>Select City</option>
                            <option>Delhi</option>
                            <option>Hyd</option>
                        </select>
                    </dd>
                </dl>
                <button>Submit</button>
            </form>
        </div>
    )
}

- React supports various 3rd party form libraries like
	a) Formik
	b) React Hook Form
	c) Telerik Form
	etc..

						    Formik Library
- It is a 3rd party library for React forms.
- It provides pre-defined functions and components to handle form interactions.
- It is easy to extend and validate the forms.
- It provides several internal security features that prevent Scripting attacks, Request Forgery and Cross page posting.

1. Install formik library for project

		> npm  install  formik  --save

2. Formik library provides "useFormik()"  hook to configure a form.

3. Import "useFormik" from formik. 

	import   { useFormik } from  "formik";

4. Configure form with options

	const  formik = useFormik({
	
		    initialValues: { },
		    validation: function(){ },
		    validationSchema: function(){ },
		    onSubmit: function() { },
		    enableReInitialization: Boolean,
		    … 
	})
	
	initialValues		: Defines the values that a form have to handle. 
					  It is key and value collection. { Key:value }
					  Key refers to element Name.

	validation			: It defines a function, where you can manually configure
					  validations for elements in form.

	validationSchema	: It defines pre-defined validation structure from 3rd parties.
	
	onSubmit			: It collects the data from form and perform submit action.

	onBlur			: It defines actions on blur.

	onChange		: It defines actions on change. 

	enableReInitialize	: It allows to change the initialized values in form elements.



5. Define events for form and form elements

	<form  onSubmit={ formik.handleSubmit }>

	<input type="text" name="UserName" onChange={formik.handleChange}>
	 
	<select onChange={formik.handleChange}>

	<input type="text"  name="UserName" onChange={formik.handleChange} onBlur={formik.handleBlur}>

Ex:
form-demo.jsx

import { useState } from "react"
import { useFormik } from "formik";

export function FormDemo(){


    const formik = useFormik({
         initialValues: {
            UserName: '',
            Age: 0,
            City: ''
         },
         onSubmit: (user) => {
            console.log(user);
         }
    })
   
    return(
        <div className="container-fluid">
            <form onSubmit={formik.handleSubmit}>
                <h3>Register</h3>
                <dl>
                    <dt>User Name</dt>
                    <dd><input type="text" name="UserName" onChange={formik.handleChange} /></dd>
                    <dt>Age</dt>
                    <dd><input type="number" onChange={formik.handleChange} name="Age" /></dd>
                    <dt>City</dt>
                    <dd>
                        <select name="City" onChange={formik.handleChange} >
                            <option>Select City</option>
                            <option>Delhi</option>
                            <option>Hyd</option>
                        </select>
                    </dd>
                </dl>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}



Ex:
import { useState } from "react"
import { useFormik } from "formik";

export function FormDemo(){


    const formik = useFormik({
         initialValues: {
            UserName: '',
            Age: 0,
            City: '',
            Gender:''
         },
         onSubmit: (user) => {
            console.log(user);
         }
    })
   
    return(
        <div className="container-fluid">
            <form onSubmit={formik.handleSubmit}>
                <h3>Register</h3>
                <dl>
                    <dt>User Name</dt>
                    <dd><input type="text" name="UserName" onChange={formik.handleChange} /></dd>
                    <dt>Age</dt>
                    <dd><input type="number" onChange={formik.handleChange} name="Age" /></dd>
                    <dt>City</dt>
                    <dd>
                        <select name="City" onChange={formik.handleChange} >
                            <option>Select City</option>
                            <option>Delhi</option>
                            <option>Hyd</option>
                        </select>
                    </dd>
                    <dt>Gender</dt>
                    <dd>
                        <input onChange={formik.handleChange} type="radio" name="Gender" value="Male" /> <label>Male</label>
                        <input onChange={formik.handleChange} type="radio" name="Gender" value="Female" /> <label>Female</label>
                    </dd>
                </dl>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

Form Events
 onSubmit
 onReset
Handling Forms using 3rd Party
 - Formik

						        Validations
- Validation is the process of verifying user input.
- Validation is required to ensure that contradictory and unauthorized data is not get stored into database.
- Formik supports validation function and validation schema. 

Validation Function:
- You have to write validation function explicitly and validate the input values.
- It requires all JavaScript data type verification, string functions, regular expression etc.

Syntax:
1. You have to configure a function that takes form data as input and returns errors object.

		function ValidateUser(formData)
		{
		      var errors = {  };

		      return errors;
		}

2. "formData" is an object type parameter that contains  "key-value" collection, Key is
     field name. [defined in initialValues]

3. You have to write validations manually for every field and report errors in error object.

		if(formData.fieldName==="")
		{
		    errors.fieldName = "Error Message";
		}

4. Assign the validation function to formik validation.

	  const formik = useFormik({
			initialValues: {  },
			validation: Validation_Function,
	   })

5. You can access the errors and display in UI by using "formik.errors".

	   { formik.errors.fieldName }

Ex:
form-demo.jsx

import { useState } from "react"
import { useFormik } from "formik";

export function FormDemo(){

    function ValidateUser(formData){
        var errors = {UserName:'', Age:'', City:'', Mobile:''};

        if(formData.UserName.length===0) {
            errors.UserName = 'User Name Required';
        } else {
            if(formData.UserName.length<4){
                errors.UserName = 'Name too short';
            } else {
                errors.UserName = ' ';
            }
        }

        if(formData.Age==="") {
            errors.Age = 'Age Required';
        } else {
            if(isNaN(formData.Age)){
                errors.Age = 'Age must be a number';
            } else {
                errors.Age = ' ';
            }
        }

        if(formData.City==='-1') {
            errors.City = 'Please select your city';
        } else {
            errors.City = ' ';
        }

        if(formData.Mobile.match(/\+91\d{10}/)) {
            errors.Mobile = '';
        } else {
            errors.Mobile = 'Invalid Mobile';
        }

        return errors;
    }

    const formik = useFormik({
         initialValues: {
            UserName: '',
            Age: 0,
            City: '',
            Mobile:''
         },
         validate : ValidateUser,
         onSubmit: (user) => {
            console.log(user);
         }
    })
   
    return(
        <div className="container-fluid">
            <form onSubmit={formik.handleSubmit}>
                <h3>Register</h3>
                <dl>
                    <dt>User Name</dt>
                    <dd><input type="text" name="UserName" onChange={formik.handleChange} /></dd>
                    <dd className="text-danger">{formik.errors.UserName}</dd>
                    <dt>Age</dt>
                    <dd><input type="text" onChange={formik.handleChange} name="Age" /></dd>
                    <dd className="text-danger">{formik.errors.Age}</dd>
                    <dt>City</dt>
                    <dd>
                        <select name="City" onChange={formik.handleChange} >
                            <option value="-1">Select City</option>
                            <option value="Delhi">Delhi</option>
                            <option value="Hyd">Hyd</option>
                        </select>
                    </dd>
                    <dd className="text-danger">{formik.errors.City}</dd>
                    <dt>Mobile</dt>
                    <dd><input type="text" name="Mobile" onChange={formik.handleChange} /></dd>
                    <dd className="text-danger">{formik.errors.Mobile}</dd>
                </dl>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

						Yup Validation Library

- Yup provides a validation schema.
- It comprises of pre-defined validation functions, which you can use to validate the input values.

1. Install Yup library

	>npm install yup  --save

2. Import the validation schemas into component

	import   { required, min, max, matches } from "yup";
	
					(or)
	
	import  * as yup from "yup";

3. Configure the validation schema using "yup.object()"

	useFormik({
	
		initialValues: { },
		
		validationSchema: yup.object({

			FieldName: yup.dataType().required().min().matches()….
			
		})
	})

4. Validation errors are displayed using  "formik.errors" object

	{ formik.errors.fieldName }

Ex:
form-demo.jsx

import { useState } from "react"
import { useFormik } from "formik";
import * as yup from "yup";

export function FormDemo(){

 

    const formik = useFormik({
         initialValues: {
            UserName: '',
            Age: 0,
            City: '',
            Mobile:''
         },
         validationSchema : yup.object({
              UserName: yup.string().required('User Name Required').min(4, 'Name too short'),
              Age: yup.number().required('Age Required').min(15, 'Age min 15').max(30, 'Age max 30'),
              Mobile: yup.string().required('Mobile Required').matches(/\+91\d{10}/, 'Invalid Mobile')
         }) ,
         onSubmit: (user) => {
            console.log(user);
         }
    })
   
    return(
        <div className="container-fluid">
            <form onSubmit={formik.handleSubmit}>
                <h3>Register</h3>
                <dl>
                    <dt>User Name</dt>
                    <dd><input type="text" name="UserName" onChange={formik.handleChange} /></dd>
                    <dd className="text-danger">{formik.errors.UserName}</dd>
                    <dt>Age</dt>
                    <dd><input type="text" onChange={formik.handleChange} name="Age" /></dd>
                    <dd className="text-danger">{formik.errors.Age}</dd>
                    <dt>City</dt>
                    <dd>
                        <select name="City" onChange={formik.handleChange} >
                            <option value="-1">Select City</option>
                            <option value="Delhi">Delhi</option>
                            <option value="Hyd">Hyd</option>
                        </select>
                    </dd>
                    <dd className="text-danger">{formik.errors.City}</dd>
                    <dt>Mobile</dt>
                    <dd><input type="text" name="Mobile" onChange={formik.handleChange} /></dd>
                    <dd className="text-danger">{formik.errors.Mobile}</dd>
                </dl>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}


Note: The default validations fire up on the formik change event. You can configure for blur event.

  <input type="text"  onChange={formik.handleChange} onBlur={formik.handleBlur} />

		
				               Formik Spread Approach 

- If you have to write validations for all events supported by formik then you can use "spread" operator method   "getFieldProps()".

Syntax:

 <input type="text"  { ...formik.getFieldProps("fieldname") }  />

- It handles onBlur and onChange events implicitly for every element.

Ex:
form-demo.jsx

import { useState } from "react"
import { useFormik } from "formik";
import * as yup from "yup";

export function FormDemo(){

 

    const formik = useFormik({
         initialValues: {
            UserName: '',
            Age: 0,
            City: '',
            Mobile:''
         },
         validationSchema : yup.object({
              UserName: yup.string().required('User Name Required').min(4, 'Name too short'),
              Age: yup.number().required('Age Required').min(15, 'Age min 15').max(30, 'Age max 30'),
              Mobile: yup.string().required('Mobile Required').matches(/\+91\d{10}/, 'Invalid Mobile')
         }) ,
         onSubmit: (user) => {
            console.log(user);
         }
    })
   
    return(
        <div className="container-fluid">
            <form onSubmit={formik.handleSubmit}>
                <h3>Register</h3>
                <dl>
                    <dt>User Name</dt>
                    <dd><input type="text" {...formik.getFieldProps("UserName")} name="UserName" /></dd>
                    <dd className="text-danger">{formik.errors.UserName}</dd>
                    <dt>Age</dt>
                    <dd><input type="text" {...formik.getFieldProps("Age")} name="Age" /></dd>
                    <dd className="text-danger">{formik.errors.Age}</dd>
                    <dt>City</dt>
                    <dd>
                        <select name="City" {...formik.getFieldProps("City")} >
                            <option value="-1">Select City</option>
                            <option value="Delhi">Delhi</option>
                            <option value="Hyd">Hyd</option>
                        </select>
                    </dd>
                    <dd className="text-danger">{formik.errors.City}</dd>
                    <dt>Mobile</dt>
                    <dd><input type="text" {...formik.getFieldProps("Mobile")} name="Mobile" /></dd>
                    <dd className="text-danger">{formik.errors.Mobile}</dd>
                </dl>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

						 Formik Components
- Formik provides pre-defined components for form and validation.
- Implicitly these components can build the UI and set validation.

		<Formik>
		<Form>
		<Field>
		<ErrorMessage>

Syntax:
	<Formik   initialValues={ }   validate={ }  validationSchema={ }  onSubmit={ }>

		<Form>

			<Field type="text|number|password" />
			<ErrorMessage name="fieldname" />

		</Form>

	</Formik>


Ex:
form-demo.jsx

import { useState } from "react"
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";

export function FormDemo(){

 

    return(
        <div className="container-fluid">
            <h2>Register User</h2>
            <Formik initialValues={{UserName:'', Age:0, Mobile:''}} validationSchema={yup.object({UserName:yup.string().required('Name Required'), Age: yup.number().required('Age Required')})} onSubmit={(values)=>{console.log(values)}} >
                <Form>
                    <dl>
                        <dt>User Name</dt>
                        <dd> <Field name="UserName" type="text" /> </dd>
                        <dd className="text-danger"> <ErrorMessage name="UserName" /> </dd>
                        <dt>Age</dt>
                        <dd> <Field name="Age" type="text" /> </dd>
                        <dd className="text-danger"> <ErrorMessage name="Age" /> </dd>
                        <dt>Mobile</dt>
                        <dd> <Field name="Mobile" type="text" /> </dd>
                        <dd className="text-danger"> <ErrorMessage name="Mobile" /> </dd>
                    </dl>
                    <button type="Submit">Submit</button>
                </Form>
            </Formik>
        </div>
    )
}



Summary:
- Formik  useFormik
- Yup for validations
- Formik Components

		<Formik>
		<Form>
		<Field>
		<ErrorMessage>

Form State Validation:
- Validation have 2 states
	a) Input State
	b) Form State
- Input state is verifying every field individually.
- Form state is verifying all fields in the form simultaneously at the same time.
- Formik provides pre-defined services for Form State.
- <Form> component can return the form state, which contains services like
		a) pristine		not touched
		b) dirty			modified
		c) valid			all fields valid
		d) invalid			any one field invalid
		etc.. 
- All validation services return Boolean true / false.

Syntax:
	<Formik>
	      {
		form => <Form>  </Form>
	      }
	</Formik>

	  form.dirty
	  form.isInvalid
	  form.isValid
	  etc..

Ex:
form-demo.jsx

import { useState } from "react"
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";

export function FormDemo(){

 

    return(
        <div className="container-fluid">
            <h2>Register User</h2>
            <Formik initialValues={{UserName:'', Age:0, Mobile:''}} validationSchema={yup.object({UserName:yup.string().required('Name Required'), Age: yup.number().required('Age Required')})} onSubmit={(values)=>{console.log(values)}} >
                {
                    form =>
                        <Form>
                        <dl>
                            <dt>User Name</dt>
                            <dd> <Field name="UserName" type="text" /> </dd>
                            <dd className="text-danger"> <ErrorMessage name="UserName" /> </dd>
                            <dt>Age</dt>
                            <dd> <Field name="Age" type="text" /> </dd>
                            <dd className="text-danger"> <ErrorMessage name="Age" /> </dd>
                            <dt>Mobile</dt>
                            <dd> <Field name="Mobile" type="text" /> </dd>
                            <dd className="text-danger"> <ErrorMessage name="Mobile" /> </dd>
                        </dl>
                        <button disabled={!form.isValid} type="Submit">Submit</button>
                        <button className={(form.dirty)?'d-inline':'d-none'} >Save</button>
                    </Form>
                }
            </Formik>
        </div>
    )
}


						    React Hook Form

https://react-hook-form.com/


Clipboard Events:

	onCut
	onCopy
	onPaste

- Clipboard is the temporary memory of your device where it keeps the content you cut or copy from any location.
- You can configure status on cut, copy and paste. And you can also disable the clipboard actions.

Syntax:
		function handlePaste()
		{
		  document.onpaste = function(){
		      return false;
		    }
		}

		<input type="text"  onPaste={handlePaste} />

Ex:
form-demo.jsx

import { useState } from "react"

export function FormDemo(){

    const [msg, setMsg] = useState('');

    function handleCopy(){
        setMsg('Number Copied');
    }
    function handleBlur(){
        setMsg('');
    }

    function handlePaste(){
        document.onpaste = function(){
            return false;
        }
    }

    return(
        <div className="container-fluid">
            <h2>Register User</h2>
            <dl>
                <dt>Account Number</dt>
                <dd><input type="text" onCopy={handleCopy} onBlur={handleBlur} /></dd>
                <dd>{msg}</dd>
                <dt>Verify Account Number</dt>
                <dd><input type="text" onPaste={handlePaste} /></dd>
            </dl>
        </div>
    )
}

Touch Events:
	onTouchStart
	onTouchEnd
	onTouchMove

- Touch event arguments are different from the default event arguments of other events.
- It provides "toches" array [ ] gives access to default event properties like
		a) clientX
		b) clientY 

Syntax:
		e.touches[0].clientX

Ex:
form-demo.jsx

import { useState } from "react"

export function FormDemo(){

    const [msg, setMsg] = useState('');
    const [styleObj, setStyleObj] = useState({position:'', top:'', left:''});

    function GetDetails(data, e){
        setMsg(data);
        console.log(e.touches[0].clientX);
    }

    function handleTouchMove(e){
        setStyleObj({
            position: 'fixed',
            top: e.touches[0].clientY + 'px',
            left: e.touches[0].clientX + 'px'
        })
    }

    return(
        <div className="container-fluid">
              <aside style={styleObj} onTouchMove={handleTouchMove} className="border border-4 border-primary p-2 w-25">
                  <figure>
                      <img src="m1.jpg" width="100" height="100" />
                      <figcaption>Ads</figcaption>
                  </figure>
              </aside>
              <div className="mt-4">
                    <img src="ds.png" onTouchStart={(e) => GetDetails('Data Science - New Batch Starts 29-Aug-2024', e)} width="200" height="200" className="me-4" />
                    <img src="dotnet.png" onTouchStart={(e) => GetDetails('.NET Fullstack (C#) - New Batch Starts 30-Aug-2024', e)} width="200" height="200" />
              </div>
              <h2>{msg}</h2>
        </div>
    )
}

Summary:
- Mouse Events
	onMouseOver
	onMouseOut
	onMouseDown
	onMouseUp
- Keyboard Events
	onKeyUp
	onKeyDown
	onKeyPress
- Button Events
	onClick
	onDoubleClick
	onContextMenu
- Element State Events
	onFocus
	onBlur
	onSelectStart
- Timer Events
	setTimeOut
	clearTimeOut
	setInterval
	clearInterval
- Clipboard Events
	onCut
	onCopy
	onPaste
- Form Events
	onSubmit
	onReset
- Touch Events
	onTouchStart		
	onTouchEnd
	onTouchMove

Ex:
 fakestore.jsx

import axios from "axios";
import { useEffect, useState } from "react"


export function FakeStore()
{

    const [categories, setCategories] = useState([]);
    const [products, setProducts] = useState([{id:0, title:'', price:0, description:'', image:'', rating:{rate:0, count:0}}]);


    function LoadCategories(){
        axios.get(`https://fakestoreapi.com/products/categories`)
        .then(response=>{
            response.data.unshift('all');
            setCategories(response.data);
        })
    }

    function LoadProducts(){
        axios.get(`https://fakestoreapi.com/products`)
        .then(response=>{
            setProducts(response.data);
        })
    }

    useEffect(()=>{
        LoadCategories();
        LoadProducts();
    },[])

    return(
        <div className="container-fluid">
            <header className="d-flex bg-dark text-light fs-5 justify-content-between p-2 border mt-2">
                <div>
                    <span className="fs-4">Fakestore</span>
                </div>
                <nav>
                    <span> Electronics </span>
                    <span className="mx-2"> Men's Clothing </span>
                    <span> Women Fashon </span>
                    <span className="ms-2"> Jewelery </span>
                </nav>
                <div>
                    <button className="btn btn-light"><span className="bi bi-person"></span></button>
                    <button className="btn btn-light mx-2"><span className="bi bi-heart"></span></button>
                    <button className="btn btn-light"><span className="bi bi-cart"></span></button>
                </div>
            </header>
            <section className="mt-3 row">
                <nav className="col-2">
                    <div>
                        <label className="form-label fw-bold">Select Category</label>
                        <div>
                            <select className="form-select">
                                {
                                    categories.map(category=><option value={category} key={category}>{category.toUpperCase()}</option>)
                                }
                            </select>
                        </div>
                    </div>
                </nav>
                <main className="col-10 d-flex flex-wrap overflow-auto" style={{height:'500px'}}>
                    {
                        products.map(product=>

                            <div key={product.id} className="card p-2 m-2" style={{width:'200px'}}>
                                <img className="card-img-top" height="120" src={product.image} />
                                <div className="card-header" style={{height:'100px'}}>
                                    {product.title}
                                </div>
                                <div className="card-body">
                                    <dl>
                                        <dt>Price</dt>
                                        <dd>{product.price}</dd>
                                        <dt>Rating</dt>
                                        <dd> {product.rating.rate} <span className="bi bi-star-fill text-success"></span> </dd>
                                    </dl>
                                </div>
                                <div className="card-footer">
                                    <button className="btn btn-warning w-100"> <span className="bi bi-cart4"> Add to Cart </span> </button>
                                </div>
                            </div>

                        )
                    }
                </main>
            </section>
        </div>
    )
}


Ex:
fakestore.jsx

import axios from "axios";
import { useEffect, useState } from "react"


export function FakeStore()
{

    const [categories, setCategories] = useState([]);
    const [products, setProducts] = useState([{id:0, title:'', price:0, description:'', image:'', rating:{rate:0, count:0}}]);
    const [cartItems, setCartItems] = useState([]);
    const [cartCount, setCartCount] = useState();

    function GetCartCount(){
        setCartCount(cartItems.length);
    }


    function LoadCategories(){
        axios.get(`https://fakestoreapi.com/products/categories`)
        .then(response=>{
            response.data.unshift('all');
            setCategories(response.data);
        })
    }

    function LoadProducts(url){
        axios.get(url)
        .then(response=>{
            setProducts(response.data);
        })
    }

    useEffect(()=>{
        LoadCategories();
        LoadProducts('https://fakestoreapi.com/products');
        GetCartCount();
    },[])

    function handleCategoryChange(e){
        if(e.target.value==="all") {
            LoadProducts('https://fakestoreapi.com/products');
        } else {
            LoadProducts(`https://fakestoreapi.com/products/category/${e.target.value}`);
        }
    }

    function handleAddToCartClick(id){
         axios.get(`https://fakestoreapi.com/products/${id}`)
         .then(response=>{
              cartItems.push(response.data);
              alert(`${response.data.title}\nAdded to Cart`);
              GetCartCount();
         })
    }

    return(
        <div className="container-fluid">
            <header className="d-flex bg-dark text-light fs-5 justify-content-between p-2 border mt-2">
                <div>
                    <span className="fs-4">Fakestore</span>
                </div>
                <nav>
                    <span> Electronics </span>
                    <span className="mx-2"> Men's Clothing </span>
                    <span> Women Fashon </span>
                    <span className="ms-2"> Jewelery </span>
                </nav>
                <div>
                    <button className="btn btn-light"><span className="bi bi-person"></span></button>
                    <button className="btn btn-light mx-2"><span className="bi bi-heart"></span></button>
                    <button data-bs-toggle="modal" data-bs-target="#cart" className="btn btn-light bi bi-cart position-relative"><span className="badge bg-danger rounded rounded-circle position-absolute">{cartCount}</span></button>
                    <div className="modal fade" id="cart">
                        <div className="modal-dialog">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h3 className="text-primary">Your Cart Items</h3>
                                    <button className="btn btn-close" data-bs-dismiss="modal"></button>
                                </div>
                                <div className="modal-body">
                                    <table className="table table-hover">
                                        <thead>
                                            <tr>
                                                <th>Title</th>
                                                <th>Preview</th>
                                                <th>Price</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                cartItems.map(item=> 
                                                    <tr key={item.id}>
                                                        <td>{item.title}</td>
                                                        <td><img src={item.image} width="50" height="50" /></td>
                                                        <td>{item.price}</td>
                                                    </tr>
                                                )
                                            }
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            <section className="mt-3 row">
                <nav className="col-2">
                    <div>
                        <label className="form-label fw-bold">Select Category</label>
                        <div>
                            <select onChange={handleCategoryChange} className="form-select">
                                {
                                    categories.map(category=><option value={category} key={category}>{category.toUpperCase()}</option>)
                                }
                            </select>
                        </div>
                    </div>
                </nav>
                <main className="col-10 d-flex flex-wrap overflow-auto" style={{height:'500px'}}>
                    {
                        products.map(product=>

                            <div key={product.id} className="card p-2 m-2" style={{width:'200px'}}>
                                <img className="card-img-top" height="120" src={product.image} />
                                <div className="card-header" style={{height:'100px'}}>
                                    {product.title}
                                </div>
                                <div className="card-body">
                                    <dl>
                                        <dt>Price</dt>
                                        <dd>{product.price}</dd>
                                        <dt>Rating</dt>
                                        <dd> {product.rating.rate} <span className="bi bi-star-fill text-success"></span> </dd>
                                    </dl>
                                </div>
                                <div className="card-footer">
                                    <button onClick={()=> handleAddToCartClick(product.id)} className="btn btn-warning w-100"> <span className="bi bi-cart4"> Add to Cart </span> </button>
                                </div>
                            </div>

                        )
                    }
                </main>
            </section>
        </div>
    )
}

Task:
1. Display total amount of items added to cart.
2. Add delete button for every product in cart items list, which deletes the product
    from list and updates count, total etc.
3. Add a search bar to search the products based on category and title.
    [word found in the product title].

4. Add a track bar to filter the products based on price.

5. Add a track bar to filter the products based on rating. or checkboxes like flipkart 



import axios from "axios";
import { useEffect, useState } from "react"


export function FakeStore()
{

    const [categories, setCategories] = useState([]);
    const [products, setProducts] = useState([{id:0, title:'', price:0, description:'', image:'', rating:{rate:0, count:0}}]);
    const [cartItems, setCartItems] = useState([]);
    const [cartCount, setCartCount] = useState();
    const [searchString, setSearchString] = useState('');

    function GetCartCount(){
        setCartCount(cartItems.length);
    }


    function LoadCategories(){
        axios.get(`https://fakestoreapi.com/products/categories`)
        .then(response=>{
            response.data.unshift('all');
            setCategories(response.data);
        })
    }

    function LoadProducts(url){
        axios.get(url)
        .then(response=>{
            setProducts(response.data);
        })
    }

    useEffect(()=>{
        LoadCategories();
        LoadProducts('https://fakestoreapi.com/products');
        GetCartCount();
    },[])

    function handleCategoryChange(e){
        if(e.target.value==="all") {
            LoadProducts('https://fakestoreapi.com/products');
        } else {
            LoadProducts(`https://fakestoreapi.com/products/category/${e.target.value}`);
        }
    }

    function handleAddToCartClick(id){
         axios.get(`https://fakestoreapi.com/products/${id}`)
         .then(response=>{
              cartItems.push(response.data);
              alert(`${response.data.title}\nAdded to Cart`);
              GetCartCount();
         })
    }
    function handleSearchChange(e){
        setSearchString(e.target.value.toLowerCase());
    }
    function handleSearchClick(){
        LoadProducts(`https://fakestoreapi.com/products/category/${searchString}`);
    }

    function handleRatingChange(e){
        axios.get('https://fakestoreapi.com/products')
        .then(response=>{
            var filteredProducts = response.data.filter(product=> product.rating.rate>e.target.value);
            console.log(filteredProducts);
        })
        
    }

    return(
        <div className="container-fluid">
            <header className="d-flex bg-dark text-light fs-6 justify-content-between p-2 border mt-2">
                <div>
                    <span className="fs-4">Fakestore</span>
                </div>
                <div>
                    <div className="input-group">
                        <input onChange={handleSearchChange} type="text" placeholder="Search by category" className="form-control"/>
                        <button onClick={handleSearchClick} className="btn btn-warning bi bi-search"></button>
                    </div>
                </div>
                <nav>
                    <span> Electronics </span>
                    <span className="mx-2"> Men's Clothing </span>
                    <span> Women Fashon </span>
                    <span className="ms-2"> Jewelery </span>
                </nav>
                <div>
                    <button className="btn btn-light"><span className="bi bi-person"></span></button>
                    <button className="btn btn-light mx-2"><span className="bi bi-heart"></span></button>
                    <button data-bs-toggle="modal" data-bs-target="#cart" className="btn btn-light bi bi-cart position-relative"><span className="badge bg-danger rounded rounded-circle position-absolute">{cartCount}</span></button>
                    <div className="modal fade" id="cart">
                        <div className="modal-dialog">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h3 className="text-primary">Your Cart Items</h3>
                                    <button className="btn btn-close" data-bs-dismiss="modal"></button>
                                </div>
                                <div className="modal-body">
                                    <table className="table table-hover">
                                        <thead>
                                            <tr>
                                                <th>Title</th>
                                                <th>Preview</th>
                                                <th>Price</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                cartItems.map(item=> 
                                                    <tr key={item.id}>
                                                        <td>{item.title}</td>
                                                        <td><img src={item.image} width="50" height="50" /></td>
                                                        <td>{item.price}</td>
                                                        <td> <button className="bi bi-trash btn btn-danger"></button> </td>
                                                    </tr>
                                                )
                                            }
                                        </tbody>
                                        <tfoot>
                                            <tr>
                                                <th colSpan="3">Total Amount</th>
                                                <th> &nbsp; </th>
                                            </tr>
                                        </tfoot>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            <section className="mt-3 row">
                <nav className="col-2">
                    <div className="mb-3">
                        <label className="form-label fw-bold">Select Category</label>
                        <div>
                            <select onChange={handleCategoryChange} className="form-select">
                                {
                                    categories.map(category=><option value={category} key={category}>{category.toUpperCase()}</option>)
                                }
                            </select>
                        </div>
                    </div>
                    <div className="my-3">
                        <label>Rating</label>
                        <div>
                            <div>
                            <input onChange={handleRatingChange} type="checkbox" value={4} /> <span>4 <span className="bi bi-star-fill"></span> above </span>
                            </div>
                            <div>
                            <input onChange={handleRatingChange} type="checkbox" value={3} /> <span>3 <span className="bi bi-star-fill"></span> above </span>
                            </div>
                        </div>
                    </div>
                </nav>
                <main className="col-10 d-flex flex-wrap overflow-auto" style={{height:'500px'}}>
                    {
                        products.map(product=>

                            <div key={product.id} className="card p-2 m-2" style={{width:'200px'}}>
                                <img className="card-img-top" height="120" src={product.image} />
                                <div className="card-header" style={{height:'100px'}}>
                                    {product.title}
                                </div>
                                <div className="card-body">
                                    <dl>
                                        <dt>Price</dt>
                                        <dd>{product.price}</dd>
                                        <dt>Rating</dt>
                                        <dd> {product.rating.rate} <span className="bi bi-star-fill text-success"></span> </dd>
                                    </dl>
                                </div>
                                <div className="card-footer">
                                    <button onClick={()=> handleAddToCartClick(product.id)} className="btn btn-warning w-100"> <span className="bi bi-cart4"> Add to Cart </span> </button>
                                </div>
                            </div>

                        )
                    }
                </main>
            </section>
        </div>
    )
}

					        React Hook Form

1. Install React Hook form

	> npm  install  react-hook-form    --save

2. It provides "useForm()" hook to configure a form with validations.


   const { formName, handleSubmit, formState: { errors } } = useForm();


3. Configure submit function to submit form values

	const  submit = (values) => {
		console.log(values);
	}

4. Form element must execute submit function

	<form  onSubmit={handleSubmit(submit)}>

	</form>

5. Bind the validation rules with form element

	<input type="text"  { …register("FieldName", { validations }) }  name="Name" />

6. Display Errors 

	{ 
	  (errors.fieldName?.type==="required")? " " : " " 
	}


Ex :
hook-form-demo.jsx

import { useForm } from "react-hook-form"


export function HookFormDemo(){

    const {register, handleSubmit, formState:{errors}} = useForm();

    const submit = (values)=> {
        console.log(values);
    }

    return(
        <div className="container-fluid">
            <form onSubmit={handleSubmit(submit)} >
                <h3>Register</h3>
                <dl>
                    <dt>User Name</dt>
                    <dd><input {...register("Name", {required:true, minLength:4} )} type="text" name="Name" /></dd>
                    <dd className="text-danger">
                        {
                            (errors.Name?.type==="required")?<span>Name Required</span>:<span></span> && (errors.Name?.type==="minLength")?<span>Name too short..</span>:<span></span>
                        }
                    </dd>
                    <dt>Age</dt>
                    <dd><input type="text" name="Age" {...register("Age",{required:true, min:15, max:30})} /></dd>
                </dl>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

						React Hooks



- React Components
- Data Binding
- Style Binding
- Class Binding
- Event Binding

						      React Hooks
- Hook is service.
- Service is a pre-defined business logic, which you can inject, customize and implement according to the requirements. 
- Service enables
	a) Reusability
	b) Extensibility
	c) Testability
	d) Maintainability 
- Service uses "Single Ton" pattern.
- An object is created for the first request and same object is used across requests.
- Service implements "Dependency Injection" mechanism. [DI]
- DI comprises various components
	a) Consumer
	b) Provider
	c) Injector etc..
- Consumer is a component that uses the service.
- Provider is a component responsible for locating the reference & value in memory.
- Injector injects the value into component. 
- React from 17x version provides pre-defined Hooks to handle various functionalities
		useState()
		useEffect()
		useRef()
		useMemo()
		useCallback()
		useContext()
		useReducer() etc..
- React allows to create custom hooks.

Rules for creating and using hooks:
1. Hook is a function of JavaScript.
2. Hook function can't be void.
3. It must return any functionality or value.
4. It is configured and used only at high level in code snippet. You can't define at block level.

	      {
		function LoadProducts()
		{
		   const [msg, setMsg] = useState(' ');	// invalid
		}
	     }

5. Hook function name must use a camel case.

6. Hook is recommended to start with prefix "use".

7. You can use all react hooks and 3rd party libraries inside hook.

8. You can't use hooks in class component.

9. Hooks can run only in function component.

10. Hooks are available from 17x version, hence you can't import and use hooks 
      in earlier versions.

11. Hook function can be parameter less or parameterized. If hook is parameterized then every parameter is a required parameter. 


Ex:
1. Add a new folder  "hooks"

2. Add new files 

		captcha.hook.js



export function useCaptcha()
{
    var code = '';
    code = `${Math.round(Math.random()*10)} ${Math.round(Math.random()*10)} ${Math.round(Math.random()*10)} ${Math.round(Math.random()*10)} ${Math.round(Math.random()*10)} ${Math.round(Math.random()*10)}`
    return code;
}

		fetch-api-hook.js

import axios from "axios";
import { useEffect, useState } from "react";

export function useFetch(url)
{
    const [data, setData] = useState([]);
    useEffect(()=>{
        axios.get(url)
        .then(response=>{
            setData(response.data);
        })
    },[url]);
    return data;
}

Ex:

import "./login.component.css";
import  { useCaptcha } from '../../hooks/captcha-hook'; 
import { useFetch } from "../../hooks/fetch-api-hook";

export function LoginComponent()
{
    let code = useCaptcha();

    let categories = useFetch('https://fakestoreapi.com/products/categories');

    return(
        <div className="login-container">
            <form className="login-form alert alert-warning alert-dismissible">
                <h2 className="bi bi-person-fill">User Login</h2>
                <button type="button" className="btn btn-close" data-bs-dismiss="alert"></button>
                <dl>
                    <dt>User Name</dt>
                    <dd><input type="text" className="form-control" /></dd>
                    <dt>Password</dt>
                    <dd><input type="password" className="form-control" /></dd>
                    <dt>Verify Code</dt>
                    <dd>{code}</dd>
                    <dt>Categories</dt>
                    <dd>
                        <select className="form-select">
                            {
                                categories.map(category=><option key={category}>{category}</option>)
                            }
                        </select>
                    </dd>
                </dl>
                <button className="btn btn-warning w-100">Login</button>
            </form>
        </div>
    )
}
 
						React Built-in Hooks

1. useState()
- It configures a local state for component.
- Local state is available for component across requests. 
- Data stored in local state is not accessible to other components.

Syntax:
	const [getter, setter] = useState(anyData);

	setter(newValue);

2. useRef()
- It creates a reference memory.
- It can store value or function memory.
- It is intended to use in the process instead of using in presentation. 


Syntax:
	let  thread = useRef(null);
	thread.current = value / function;


3. useEffect()
- It defines actions to perform at the time of mount and unmount.
- Every component mounts only once. 
- It uses dependencies that specify when a component have to mount again. 

Syntax:
	useEffect(()=>{

		// actions on mount
	
		return()=>{  
			// actions on unmount
		}

	},[dependencies])

FAQ: When a component will unmount?
Ans:  A component unmount when you request another component or when you close
	 the application.

FAQ: How to define unmount for component?
Ans: By configuring return function for useEffect() hook.

Syntax:
		useEffect(()=>{

			return()=>{ 

			}

		},[])

Ex: 
mount-demo.jsx

import { useEffect, useState } from "react"

export function Login(){

    useEffect(()=>{
        console.log(`Login Component Mounted`);
        return()=>{
            console.log(`Login Component Unmounted`);
        }
    },[])

    return(
        <div>
            <h3>User Login</h3>
        </div>
    );
}

export function Register(){
    useEffect(()=>{
        console.log(`Register Component Mounted`);
        return()=>{
            console.log(`Register Component Unmounted`);
        }
    },[])

    return(
        <div>
            <h3>Register User</h3>
        </div>
    )
}

export function MountDemo(){

    const [component, setComponent] = useState();

    function handleLoginClick(){
        setComponent(<Login />);
    }

    function handleRegisterClick(){
        setComponent(<Register />);
    }

    return(
        <div className="container-fluid">
            <div className="mt-3">
                <button onClick={handleLoginClick} className="btn btn-primary me-2">Login</button>
                <button onClick={handleRegisterClick} className="btn btn-warning">Register</button>
                <div className="mt-4">
                        {
                            component
                        }
                </div>
            </div>
        </div>
    )
}


Note: Remove <React.StrictMode> from index.js to test mount and unmount.

4. useContext()
- Context refers to "Context Memory".
- Context memory is allocated for a component and it is accessible to component that run with in the context of parent.
- Context is explicitly create in React by using "createContext()"

	let   contextName = createContext(null);

- Context requires a scope with provider.

	<contextName  provider={ value }>

		… child components … 

	</contextName>



- Child component can access and use context memory by using the hook
	"useContext()"

Syntax:
	       let  refName = useContext(contextName);

Ex:
context-demo.jsx

import { createContext, useContext, useState } from "react"

let UserContext = createContext(null);

export function Level1Component(){

    let context = useContext(UserContext);

    return(
        <div className="m-4 p-4 bg-danger text-white">
            <h2>Level-1 Component</h2>
            {context}
            <Level2Component />
        </div>
    )
}

export function Level2Component(){

    let context = useContext(UserContext);

    return(
        <div className="m-4 p-4 bg-warning text-dark">
            <h2>Level-2 Component</h2>
            <p>{context}</p>
        </div>
    )
}

export function ContextDemo()
{
    const [msg, setMsg] = useState();

    function handleNameChange(e){
        setMsg(e.target.value)
    }

    return (
        <div className="container-fluid bg-dark text-white p-4">
            <UserContext.Provider  value={msg}>
                <h1>Parent - <input type="text" onChange={handleNameChange}/> </h1>
                <Level1Component />
            </UserContext.Provider>
        </div>
    )
}

					  Uncontrolled & Controlled Components
- useState
- useEffect
- useContext
- useRef

						Controlled Components

- A controlled component is manipulated by its parent.
- The functionality, design and behaviour of component is defined from parent.
- A controlled component will not have any individual behaviour.
- A component can be controlled by using "Properties".
- Properties are configured as parameters.

Syntax:
	function  Component(props)
	{
		return (<div> </div>);
	}

- "props" is an object type with key and value reference.
- Every key is designated as property of component

		props.title
		props.items
		props.src

	<Component   title=" "   items={ [ ] }  src=" " />

- Property value type can be Primitive or Non Primitive.
- Key is a dynamic type, which is resolved at runtime of application. 
- Every property is not a required property, mostly string type are optional. 

Ex:
1. Add a new folder  "custom-components"

2. Add a new file  "navbar.jsx"  

export function NavBar(props)
{
    return(
        <nav className={`d-flex justify-content-between p-3 m-2 border border-1 ${props.theme}`}>
            <div className="fw-bold fs-4"> <img src={props.logo} width="30" height="30" /> {props.title}</div>
            <div className="fs-5">
                {
                    props.menuItems.map(item=> <span key={item} className="mx-3"><a>{item}</a></span> )
                }
            </div>
            <div>
                <button className="btn btn-warning bi bi-person-circle"> Signin </button>
            </div>
        </nav>
    )
}

3. Controlled-Demo.jsx

import { NavBar } from "../../custom-components/navbar";

export function ControlledDemo(){
    return(
        <div className="container-fluid">
            <h2>Controlled Demo</h2>
            <NavBar theme="bg-dark text-white" title="Shopper." menuItems={['Home', 'Shop', 'Products', 'Docs']} logo="logo192.png" />
            <NavBar theme="bg-danger text-white" title="NareshIT" menuItems={['Home', 'Courses', 'New Batches']} logo="m1.jpg" />
        </div>
    )
}

FAQ: How to transport data from parent to child component?
Ans:  a) By using Context
	  b) By using Properties

FAQ: When to use context?
Ans: Context is required when the child component is  uncontrolled component.
         Props are required when child component is controlled component.

Ex:
user-control.jsx



export function UserControl(props){
    return(
        <div>
            <label className="form-label fw-bold">{props.label}</label> 
            <div>
                <input type={props.type} className="form-control" />
            </div>
        </div>
    )
}


	   <div className="w-25">
                <UserControl label="Departure" type="date" />
                <UserControl label="Your Photo" type="file" />
                <UserControl label="Fav Color" type="color" />
            </div>

Ex:
grid.jsx



export function Grid(props){
    return(
        <div className="container-fluid">
            <table className="table table-hover">
                <thead>
                    <tr>
                        {
                            props.fields.map(field=><th  key={field}>{field} <span className="dropdown"><button data-bs-toggle="dropdown" className="bi bi-three-dots-vertical btn"> <ul className="dropdown-menu"><li className="dropdown-item"> <span className="bi bi-sort-alpha-down"> Sort Ascending</span> </li> <li className="dropdown-item"><span className="bi bi-sort-alpha-up">Sort Descending</span></li> </ul> </button></span> </th>)
                        }
                    </tr>
                </thead>
                <tbody>
                    {
                        props.data.map(item=>
                            <tr key={item}>
                                {
                                    Object.keys(item).map(key => <td key={key}> {item[key]} </td> )
                                }
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    )
}



controlled-demo.jsx

import { Grid } from "../../custom-components/grid";
import { NavBar } from "../../custom-components/navbar";
import { UserControl } from "../../custom-components/user-control";

export function ControlledDemo(){
    return(
        <div className="container-fluid">
            <h2>Products</h2>
            <Grid  fields={['Name', 'Price', 'Stock']} data={[{Name:'TV', Price:24000.44, Stock:'Available'}, {Name:'Mobile', Price:12300.44, Stock:'Out of Stock'}]} />
            <h2>Employee</h2>
            <Grid  fields={['First Name', 'Designation']} data={[{FirstName:'John', Designation:'Manager'}]} />
        </div>
    )
}

					       Conditional Rendering

					   Conditional Rendering
- Conditional rendering is the process of rendering different content according to state and situation. 
- A component can render different JSX elements according to situation. 

Syntax:
	(condition) ? <component1 /> : <component2 />

Ex: Conditional Rendering in Uncontrolled component

conditional-rendering.jsx

import { useEffect, useState } from "react"

export function ConditionalRendering(){

    const [signedIn, setSignedIn] = useState(false);

  
    function handleSignIn(){
        setSignedIn(true);
    }
    function handleSignout(){
        setSignedIn(false);
    }

    return(
        <div className="container-fluid">
            <nav className="d-flex justify-content-between p-2 mt-3">
                <div className="fs-5 fw-bold">Shopper.</div>
                 {
                    (signedIn===true)? <div className="fs-5">
                    <span className="mx-3">Home</span>
                    <span className="mx-3">Shop</span>
                    <span className="mx-3">Pages</span>
                    <span className="mx-3">Blog</span>
                    </div>
                    : <div></div>
                 }
                <div>
                    {
                        (signedIn===true)?<button onClick={handleSignout} className="btn btn-danger">Signout</button>:<button className="btn btn-primary" onClick={handleSignIn}>Signin</button>
                    }
                </div>
            </nav>
        </div>
    )
}

Ex: Conditional rendering in controlled component

	function Component(props)
	{
	    if(props.key===value)
	    {
		return ( <JSX> </JSX>);
	    }
	   else {
		return (<JSX> </JSX>);
	   }
	}

1. Go to custom-components and add 

		data-grid.jsx

export function DataGrid(props){
    if(props.layout==="grid"){
        return(
            <div>
                <table className="table table-hover">
                    <thead>
                        <tr>
                            {
                                props.fields.map(field=><th key={field}>{field}</th>)
                            }
                        </tr>
                    </thead>
                    <tbody>
                        {
                            props.data.map(item=>
                                <tr key={item}>
                                    {
                                        Object.keys(item).map(key=> <td key={key}>{item[key]}</td>)
                                    }
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        )
    } else if(props.layout==="card") {
        return (
            <div className="d-flex flex-wrap">
                {
                    props.data.map(item=>
                        <div className="card m-2 p-2" style={{width:'200px'}} key={item}>
                            <div className="card-header">
                                {item[Object.keys(item)[0]]}
                            </div>
                            <div className="card-body">
                              <dl>
                                <dt>{Object.keys(item)[1]}</dt>
                                <dd>{item[Object.keys(item)[1]]}</dd>
                              </dl>
                            </div>
                            <div className="card-footer">
                                <button className="btn btn-warning bi bi-cart4 w-100"> Buy </button>
                            </div>
                        </div>
                    )
                }
            </div>
        )
    } else {
        return (
            <div>
                <h3>Please Select a Layout</h3>
            </div>
        )
    }
}

2. conditional-rendering.jsx

import { useEffect, useState } from "react"
import { DataGrid } from "../../custom-components/data-grid";


export function ConditionalRendering(){

    const [signedIn, setSignedIn] = useState(false);
    const [layout, setLayout] = useState('');

  
    function handleSignIn(){
        setSignedIn(true);
    }
    function handleSignout(){
        setSignedIn(false);
    }

    function handleLayoutChange(e){
        setLayout(e.target.value);
    }

    return(
        <div className="container-fluid">
            <nav className="d-flex justify-content-between p-2 mt-3">
                <div className="fs-5 fw-bold">Shopper.</div>
                 {
                    (signedIn===true)? <div className="fs-5">
                    <span className="mx-3">Home</span>
                    <span className="mx-3">Shop</span>
                    <span className="mx-3">Pages</span>
                    <span className="mx-3">Blog</span>
                    </div>
                    : <div></div>
                 }
                <div>
                    {
                        (signedIn===true)?<button onClick={handleSignout} className="btn btn-danger">Signout</button>:<button className="btn btn-primary" onClick={handleSignIn}>Signin</button>
                    }
                </div>
            </nav>
            <section className="mt-4">
                <div className="my-2">
                    <select onChange={handleLayoutChange} className="form-select w-25" >
                        <option>Select Layout</option>
                        <option value="grid">Grid</option>
                        <option value="card">Card</option>
                    </select>
                </div>
                <DataGrid layout={layout} fields={["Name", "Price"]} data={[{Name:"Samsung TV", Price: 45000.44}, {Name:"Mobile", Price:13000.44}]} />
            </section>
        </div>
    )
}

							useReducer()
- It maintains a global state.
- Global state is referred as "Application State".
- Usually application contains data from application start to application end.
- Data in application state is accessible to all sessions. 
- Application state is global and requires features for developer like
	a) Predictable 
	b) Extensible 
	c) Debuggable 
	e) Centralized 
	f) Cross platform
- At large scale these features are supported by a JavaScript library called "Redux".
- Application State is managed by using following components

	a) Store
	b) State
	c) Reducer 

- Store is a location where the data is kept. It is a global location for application.
- State is a component used to access the data from store provide to UI. 
- Reducer comprises of actions that identify the changes in UI and update to store.
Configuring Global State

1. Create a store as initialState 

	 let   initialState =  { count : 0 }


2. Create a reducer function with state and actions  

	function reducer(state, action)
	{
		// write logic for action type and 
		   data to update
	}

3. Configure reducer in component

	const [state, dispatch] = useReducer(reducer, initialState);

	=> state collects payload [data] from store and updates into store.
	=> dispatch defines the action type configured in reducer. 

Syntax:
	   function handleEvent()
	   {
		dispatch({type: 'Add'});
	   }


Ex:
reducer-demo.jsx

import { useReducer } from "react";

let initialState = {wishList: 0};

function reducer(state, action){
    switch(action.type){
        case "addToWhishList": 
        return {wishList: state.wishList + 1};
        case "removeFromWhishList":
        return {wishList: state.wishList - 1};
    }
}

export function ReducerDemo(){

    const [state, dispatch ] = useReducer(reducer, initialState);

    function handleWishListClick(){
        dispatch({type:'addToWhishList'});
    }
    function handleRemoveWhishList(){
        dispatch({type:'removeFromWhishList'});
    }

    return(
        <div>
            <h3>Shopping</h3>
            <button className="btn btn-warning bi bi-heart" style={{position:'fixed', top:'50px', right:'50px'}}>
                <span className="badge bg-danger position-absolute rounded rounded-circle"> {state.wishList}</span>
            </button>
            <div className="card" style={{width:'250px'}}>
                <img src="iphone-black.jpg"  className="card-img-top" height="200"/>
                <div className="card-header">
                    <div>iPhone 14 (Black) 128 GB</div>
                </div>
                <div className="card-footer">
                    <button onClick={handleWishListClick} className="btn btn-success bi bi-heart"></button>
                    <button className="btn btn-warning bi bi-cart4 ms-2"></button>
                    <button onClick={handleRemoveWhishList} className="btn btn-danger bi ms-2 bi-trash">Whishlist</button>
                </div>
            </div>
        </div>
    )
}

FAQ: What are the browser storages?
Ans:
	a) local storage
	b) session storage
	c) cookies

Session Storage:
- It is temporary storage of browser.
- It is accessible only from current tab.
- It not available across tabs.
- It is deleted automatically when browser is closed. 

	sessionStorage.setItem("key", value);
	sessionStorage.getItem("key");
	sessionStorage.removeItem("key");


LocalStorage:
- It is permanent storage.
- It is available for access even after browser is closed.
- It is accessible across tabs.
- It is removed explicitly.

	localStorage.setItem()
	localStorage.getItem()
	localStorage.removeItem()

Ex: 
storage-demo.jsx

import { useEffect, useState } from "react"


export function StorageDemo(){

    const [user, setUser] = useState('');

    function handleIdChange(e){
        setUser(e.target.value);
    }
    function removeSession(){
        alert('Your session expired');
        sessionStorage.removeItem('userid');
        window.location.reload();
    }

    useEffect(()=>{
        setTimeout(removeSession, 10000);
    },[])

    function handleLogin(){
        sessionStorage.setItem("userid", user);
        alert('Your ID Saved');
        setTimeout(removeSession, 10000);
    }

    return(
        <div>
            <h2>Storage</h2>
            <input type="text" onChange={handleIdChange} placeholder="UserId" /> 
            <button onClick={handleLogin} >Login</button>
            <p className="fw-bold mt-4">{sessionStorage.getItem('userid')} logged in</p>
        </div>
    )
}

						   Class Components 

						JavaScript Classes 
- Programming technologies use various types systems in real world application development.
	a) POPS
	b) OBPS
	c) OOPS

POPS
- Process Oriented Programming System
- It supports low level features.
- It can directly interact hardware services.
- It uses less memory.
- It is faster in interactions.

Ex: C, Pascal

- Reusability issues 
- Extensibility issues
- Dynamic memory problems 

OBPS
- Object Based Programming System
- Supports reusability, extensibility [limited], dynamic memory

Ex: JavaScript, VB

- No dynamic polymorphism
- No code level security


OOPS
- Object Oriented Programming System
- Reusability
- Extensibility
- Code Level Security
- Dynamic Polymorphism 

Ex: C++, Java, C#

- Don't support low level features
- Can't directly interact with hardware services.
- Need more memory.
- Slow in interactions. 
- It is tedious.

Note: JavaScript is not an OOP language, it supports few features of OOP.

What is a Class?
- Class is a program template. 
- A template provides pre-defined data and logic, which you can implement and customize according to requirements. 
- Class have various behaviours like "Entity" & "Modal".
- If a class is designed for business requirements then it is known as "Entity".
- If a class is designed for data requirements then it is known as "Modal".
- It is often known as a blue print for creating multiple instances. 

How a class is configured?
- You can configure class using 2 techniques 
	
	a) Class Declaration
	b) Class Expression

Syntax: Declaration

	class  Product
	{
	}

Syntax: Expression

	var Product = class {

	}

What are class members?
- Class is a template.
- Its members must be mutable. 
- JavaScript class member can be any one of the following
	a) Property
	b) Accessor
	c) Constructor 
	d) Method

FAQ: Can we have a variable as class member?
Ans: No. 

FAQ: Can we have variable in class?
Ans: Yes.

FAQ: Why we can't have a variable as class member?
Ans: Variables are immutable. And class can have only mutable member.

						     Property
- A property is mutable.
- It is used to store data for class. 
- It can store any type of data
	a) Primitive
	b) Non Primitive 

Syntax:
	class Name
	{
	  Property = number/string/Boolean/array/object/date etc..;
	}

- You can access class member with in class by using "this" keyword. 
- You can access class member outside class by using instance of class.

	let  obj = new ClassName();
	obj.Property

Ex:
<script>
    class Demo 
    {
        Name = "Samsung TV";
        Price = 45000;
        Stock = true;
        Cities = ["Delhi", "Hyd"];
        Rating = {Rate: 3.5}
    }
    let obj = new Demo();
    document.write(`${obj.Name}<br>${obj.Price}`);
</script>

						Accessors
- Accessors give a fine grained control over property. 
- They can handle read-write operations on property.
- Accessors are of 2 types

		a) get()		getter
		b) set()		setter

- getter is used to read and return value of a property.
- setter is used to store a new value into property.

Syntax:
		get  aliasName()
		{
		  return  Property_Value;
		}

		set  aliasName(newValue)
		{
			Property = newValue;
		}

Ex:
<script>
    var username = prompt("Enter Name");
    var role = prompt("Enter Your Role", "admin|customer");
    class Product
    {
        _productName;

        get ProductName(){
            return this._productName;
        }

        set ProductName(newName) {
            if(role==="admin"){
                this._productName = newName;
            } else {
                document.write(`Hello ! ${username} you are not authorized to set product name`);
            }
        }
    }

    let obj = new Product();
    obj.ProductName = prompt("Enter Product Name");
    if(obj.ProductName)
    {
        document.write(`Product Name : ${obj.ProductName}`);
    }
</script>
JavaScript Classes 
- Class Declaration
- Class Expression
- Class Members
- Property
- Accessors

			     Methods
- A method defines actions to perform.
- Class will not allow function as class member.
- Function is immutable.
- The actions in class are defined by using method.

Syntax:
	class  Name
	{
	   method(){ 
	   }
	}

- Method can be void or can return a value. 
- It is similar to a function with all functional features like
	- Closure
	- Parameters
	- Spread & Rest etc..

Ex:
<script>
    class Product
    {
       
        Name = "Samsung TV";
        Price = 45000.44;
        Qty = 1;
        Total(){
            return this.Qty * this.Price;
        }
        Print(){
            document.write(`Name=${this.Name}<br>Price=${this.Price}<br>Qty=${this.Qty}<br>Total=${this.Total()}`);
        }
    }
    let obj = new Product();
    obj.Print();
</script>


FAQ: What is difference between function and method?
Ans:  Function is intended to return a value.
         Method is always a void type.
         However in JavaScript function and method have similar behaviour. 
         Function is immutable and method is mutable.

Note: Function is a not allowed as class member.  But a class can have function.


			  Constructor
- Constructor is a special type of sub-routine in class.
- It is responsible for instantiation. [Creating object for class]
- Constructor is a design pattern, that defines how an object can be created for class.
- Every class have an implicit constructor. 
- JavaScript class can have explicit constructor to define actions that are performed while creating object for class.
- JS constructor is anonymous and defined with "constructor" keyword.

Syntax:
	class  Name
	{
	   constructor(){
	    }
	}

- Constructor executes automatically for every object.
- Constructor can be parameterized or parameter less. 
- If it is parameterized then the values are passed at the time of allocating memory for class.

Syntax:
	class Name
	{
	   constructor(param)
                     {
	    }
	}

	let obj = new Name(value);

Ex:
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <script>
        class Database
        {
            constructor(dbName){
                document.write(`Connected to ${dbName} <br>`);
            }
            Insert(){
                document.write("Record Inserted");
            }
            Update(){
                document.write("Record Updated Successfully..");
            }
        }
        function InsertClick(){
            let obj = new Database(document.querySelector("select").value);
            obj.Insert();
        }
        function UpdateClick(){
            let obj = new Database(document.querySelector("select").value);
            obj.Update();
        }
    </script>
</head>
<body>
    <select>
        <option>Select Database</option>
        <option>Oracle</option>
        <option>MySql</option>
        <option>MongoDB</option>
    </select>
    <button onclick="InsertClick()">Insert</button>
    <button onclick="UpdateClick()">Update</button>
</body>
</html>


Summary:
- Property
- Accessor
- Method
- Constructor 

		        Code Reusability & Extensibility 
- OOP support 2 techniques to handle resuability an extensibility

	1. Aggregation 
	2. Inheritance 

Aggregation:
- It is a technique of accessing members of one class in another without configuring any relation between classes. 
- It is referred as "Object-to-Object" communication.
- It is known as "Has-A-Relation".

Ex:
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <script>
        class HDFC_Bank_Version1
        {
            Personal = "Personal Banking Services<br>";
            Print(){
                document.write(this.Personal);
            }
        }
        class HDFC_Bank_Version2 
        {
            NRI = "NRI Banking Services<br>";
            Print(){
                let obj = new HDFC_Bank_Version1();
                obj.Print();
                document.write(this.NRI);
            }
        }
        class HDFC_Bank_Version3 
        {
            Loans = "Housing Loan, Personal Loan<br>";
            Print(){
                let obj = new HDFC_Bank_Version2();
                obj.Print();
                document.write(this.Loans);
            }
        }
        function InstallClick(){
            var ver = document.querySelector("select").value;

            switch(ver){
                case "ver1": 
                document.write(`<h2>Version 1 Installed </h2>`);
                let obj1 = new HDFC_Bank_Version1();
                obj1.Print();
                break;
                case "ver2": 
                document.write(`<h2>Version 2 Installed </h2>`);
                let obj2 = new HDFC_Bank_Version2();
                obj2.Print();
                break;
                case "ver3": 
                document.write(`<h2>Version 3 Installed </h2>`);
                let obj3 = new HDFC_Bank_Version3();
                obj3.Print();
                break;
                default: 
                document.write("Please select a version");
            }
        }
    </script>
</head>
<body>
    <select>
        <option>Select Version</option>
        <option value="ver1">Version-1 [2022]</option>
        <option value="ver2">Version-2 [2023]</option>
        <option value="ver3">Version-3 [Latest]</option>
    </select>
    <button onclick="InstallClick()">Install</button>
</body>
</html>


Inheritance: 
- It is the process of configuring relation between classes in order to access members of one class in another.
- Existing class is known as "Super" class.
- Extended class is known as "Derived" class.
- Accessing with relation is often called as "Is-A-Relation".

Syntax:
	class  Super
	{
	}
	class Derived extends Super
	{
	}

- Derived class can access super class members by using "super" keyword.

Ex:
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <script>
        class HDFC_Bank_Version1
        {
            Personal = "Personal Banking Services<br>";
            Print(){
                document.write(this.Personal);
            }
        }
        class HDFC_Bank_Version2 extends HDFC_Bank_Version1
        {
            NRI = "NRI Banking Services<br>";
            Print(){
                super.Print();
                document.write(this.NRI);
            }
        }
        class HDFC_Bank_Version3 extends HDFC_Bank_Version2
        {
            Loans = "Housing Loan, Personal Loan<br>";
            Print(){
                super.Print();
                document.write(this.Loans);
            }
        }
        function InstallClick(){
            var ver = document.querySelector("select").value;

            switch(ver){
                case "ver1": 
                document.write(`<h2>Version 1 Installed </h2>`);
                let obj1 = new HDFC_Bank_Version1();
                obj1.Print();
                break;
                case "ver2": 
                document.write(`<h2>Version 2 Installed </h2>`);
                let obj2 = new HDFC_Bank_Version2();
                obj2.Print();
                break;
                case "ver3": 
                document.write(`<h2>Version 3 Installed </h2>`);
                let obj3 = new HDFC_Bank_Version3();
                obj3.Print();
                break;
                default: 
                document.write("Please select a version");
            }
        }
    </script>
</head>
<body>
    <select>
        <option>Select Version</option>
        <option value="ver1">Version-1 [2022]</option>
        <option value="ver2">Version-2 [2023]</option>
        <option value="ver3">Version-3 [Latest]</option>
    </select>
    <button onclick="InstallClick()">Install</button>
</body>
</html>

- Inhertiance rule for constructor in JS is to access and call super class constructor in derived class.

Ex:
<script>
    class Super
    {
        constructor(){
            document.write("Super Class Constructor<br>");
        }
    }
    class Derived extends Super 
    {
        constructor(){
            super();
            document.write("Derived Class Constructor");
        }
    }
    let obj = new Derived();
</script>

		              Polymorphism

			Polymorphism
- Poly means "Many".
- Morphos means "Forms".
- A single base class object can use the memory of multiple derived classes. 

Syntax:
        var baseObject = new Array(new Super1(), new Super2());

Ex:
<script>
   class Employee
   {
       FirstName;
       LastName;
       Designation;
       Print(){
          document.write(`${this.FirstName} ${this.LastName} - ${this.Designation}<br>`);
       }
   }
   class Developer extends Employee
   {
       FirstName = "Rajesh";
       LastName = "Kumar";
       Designation = "Developer";
       Role = "Developer Role : Build, Debug, Test";
       Print(){
         super.Print();
         document.write(this.Role);
       }
   }
   class Admin extends Employee
   {
       FirstName = "Kiran";
       LastName = "Kumar";
       Designation = "Admin";
       Role = "Admin Role : Authorizations";
       Print(){
         super.Print();
         document.write(this.Role);
       }
   }
   class Manager extends Employee
   {
       FirstName = "Tom";
       LastName = "Hanks";
       Designation = "Manager";
       Role = "Manager Role : Approvals";
       Print(){
         super.Print();
         document.write(this.Role);
       }
   }

   let employees = new Array(new Developer(), new Admin(), new Manager());

   var designation = prompt("Enter Designation");

   for(var employee of employees){
      if(employee.Designation===designation){
          employee.Print();
      }
   }


</script>

		           React Class Components

1. React class component is a JavaScript class that extends
	a) React.Component
	b) React.PureComponent

2. Component & PureComponent are super classes that provide component behaviour. 

	export   class  Login extends React.Component | React.PureComponent
	{

	}

  - React.Component mounts complete component when ever any change occurred
    in component.
  - React.PureComponent updates only the changes without mounting the complete
    component.

3. React class component must have a constructor that calls the super constructor.

            export  class  Login extends  React.Component
             {
	 constructor(){
	    super();
	 }
             }


4. Class component returns JSX by using "render()" method. It is a built-in method
    of React.Component class


	{
	    render() {
	         return( <JSX> </JSX>);
	    }
	}

Ex:
import React from "react";

export class RegisterUser extends React.Component
{
     constructor(){
        super();
     }
     render(){
        return(
            <div>
                <h3>Register User</h3>
            </div>
        )
     }
}

Data Binding in Class Component
- You can configure data in property.
- Property in class component is immutable. 
- You can use the binding expression "{  }" to bind data with UI elements.

Syntax:
	{
	  UserName = "John";
	}

	<p>  { this.UserName } </p>

- It is not recommended to property for storing data.

State in Class Component:

- Class components are statefull components.
- A class component have implicit state.
- You can't use hooks in class component.
- You have to configure implicit state with data.
- State must be configured while creating object for component.
- You can access the state by using "this.state"
- "this.state" is an object type

Syntax:
	constructor()
	{
                    super();
	   this.state = {
	          key : value,
	          key : value
	   }
	}

	<p> { this.state.key } </p>

- You can store any type of data in state.
- Class component can have only one state configuration.
- Every state can have multiple keys with various types of values.

Ex:
import React from "react";


export class RegisterUser extends React.Component
{
     constructor(){
        super();
        this.state = {
            UserName: "David",
            Categories: ["All", "Electronics", "Fashion"]
        }
     }
     
     render(){
        return(
            <div className="container-fluid">
                <h3>Hello ! {this.state.UserName}</h3>
                <select>
                    {
                        this.state.Categories.map(category=><option key={category}>{category}</option>)
                    }
                </select>
            </div>
        )
     }
}

- You can set state by using "setState" method of class component. 
- It is recommended to setState while mounting or on any specific event.
- The mount phase for class component is defined by using the methods

	a) componentWillMount()
	b) componentDidMount()

Syntax:

	componentDidMount() {
	
	       this.setState({ Key:value })		
	
	}

Ex:
import React from "react";


export class RegisterUser extends React.Component
{
     constructor(){
        super();
        this.state = {
           UserName: "",
           Price: 0,
           Stock: false
        }
        
     }
     
     componentDidMount(){
        this.setState({UserName: "David", Price:65700, Stock:true});
     }
     

     render(){
        return(
            <div className="container-fluid">
                <h2>Hello ! { this.state.UserName }</h2>
                <p>
                    Price : {this.state.Price} <br /> 
                    Stock : {(this.state.Stock===true)?"Available":"Out of Stock"}
                </p>
            </div>
        )
     }
}

Class & Style Binding
- Style and Class Binding are same as you defined into function components.

Syntax:
	<div style={ {height:'200px' } }> </div>

	<div className={ `border ${this.state.theme}` }>  </div>

EX:
import React from "react";


export class RegisterUser extends React.Component
{
     constructor(){
        super();
        this.state = {
           UserName: "",
           Price: 0,
           Stock: false,
           theme: 'bg-light'
        }
        
     }
     
     componentDidMount(){
        this.setState({UserName: "David", Price:65700, Stock:true, theme:'bg-danger text-white'});
     }
     

     render(){
        return(
            <div className="container-fluid">
                <div className={`border p-2 border-2 w-25 mt-2 ${this.state.theme}`}>
                    <h2>Hello ! { this.state.UserName }</h2>
                    <p>
                        Price : {this.state.Price} <br /> 
                        Stock : {(this.state.Stock===true)?"Available":"Out of Stock"}
                    </p>
                </div>
            </div>
        )
     }
}

		            Event Binding in Class
- All events are same as function components.
- It uses SyntheticEvent base.
- Event will point towards a method.

	class
	{
	  handleClick() {

	  }
	}

	<button onClick={this.handleClick}> Submit </button>
React Class Components
- Define component 
- Extend PureComponent , Component
- Render method
- State in class
- Data Binding
- Style Binding
- Class Binding
- Event Binding

		         Binding methods to use State
- State is configure at the time of creating component.
- Methods are generated after mounting the component.
- Hence state can't register the methods defined in components.
- It will not allow the methods to use state. 
- You have to bind the methods to current class memory while creating component object. So that they can use the state configured at the time of creating component.

Syntax:
	constructor()
	{
	     this.handleClick = this.handleClick.bind(this);
	}

	handleClick()
	{
	}

	<button onClick={this.handleClick}>

Ex:
import React from "react";

export class RegisterUser extends React.Component
{
     constructor(){
        super();
        this.state = {
            msg: ""
        }
       this.handleInsertClick = this.handleInsertClick.bind(this);
     }

     handleInsertClick(){
      this.setState({msg: "Record Inserted"});
     }

     render(){
        return(
            <div className="container-fluid">
                <button onClick={this.handleInsertClick}>Insert</button>
                <p>{this.state.msg}</p>
            </div>
        )
     }
}

- Registering and binding an method while creating component refers to eager loading.
- You can implement lazy loading by using bind() method at the event handler. 

Syntax:

  <button  onClick={this.handleClick.bind(this)}>  

FAQ: Can we use class memory without "bind()" method?
Ans: Yes. If you can keep the method memory alive after the execution, then
         it can make use of class memory.

Syntax:
      <button onClick={ ()=> this.handleClick() }> 

- Class component event arguments are same as in function component.

Syntax:
	handleClick(e)
	{
	  e.clientX;
	  e.keyCode;
	  e.target.id;
	  e.target.className;
	}

- All SyntheticEvents are same

	a) Keyboard Events
	b) Button Events
	c) Element State Events
	d) Touch Events
	etc.. 

Ex:
import React from "react";

export class RegisterUser extends React.Component
{
     constructor(){
        super();
        this.state = {
            msg: ""
        }
       this.handleInsertClick = this.handleInsertClick.bind(this);
     }

     handleInsertClick(e){
      console.log(`${e.target.id}\n${e.target.value}\n${e.clientX}`);
      this.setState({msg: "Record Inserted"});
     }

     handleDeleteClick(){
       this.setState({msg: "Record Deleted Successfully.."});
     }

     handleUpdateClick(){
        this.setState({msg: "Record Updated.."});
     }

     render(){
        return(
            <div className="container-fluid">
                <button id="btnInsert" value="Insert" onClick={this.handleInsertClick}>Insert</button>
                <button onClick={this.handleDeleteClick.bind(this)} >Delete</button>
                <button onClick={()=> this.handleUpdateClick()}>Update</button>
                <p>{this.state.msg}</p>
            </div>
        )
     }
}

		  Properties in Class Component
- Controlled components use properties.
- Parent component controls the child component by passing values into the 
  properties.
- Class component have built-in properties object. You can use to configure properties.
- You can access the properties by using "this.props".
- It is an object type with key-value collection.

	this.props.key

	<component  key={value} />

Ex:
vertical-nav-bar.jsx

import React from "react";


export class VerticalNavbar extends React.Component
{
     constructor(){
        super();
     }
     render(){
        return(
            <div className="container-fluid">
                <nav style={{width:'150px'}} className="border p-4 border-2 border-dark">
                    <div className="h4">{this.props.title}</div>
                    <ul className="list-unstyled">
                        {
                            this.props.items.map(item=> <li className="bg-dark text-white p-2 my-3 rounded" key={item}>{item}</li>)
                        }
                    </ul>
                </nav>
            </div>
        )
     }
}


register-user.jsx

import React from "react";
import { VerticalNavbar } from "../vertical-nav-bar/vertical-nav-bar";

export class RegisterUser extends React.Component
{
     constructor(){
        super();
        this.state = {
            msg: ""
        }
       this.handleInsertClick = this.handleInsertClick.bind(this);
     }

     handleInsertClick(e){
      console.log(`${e.target.id}\n${e.target.value}\n${e.clientX}`);
      this.setState({msg: "Record Inserted"});
     }

     handleDeleteClick(){
       this.setState({msg: "Record Deleted Successfully.."});
     }

     handleUpdateClick(){
        this.setState({msg: "Record Updated.."});
     }

     render(){
        return(
            <div className="container-fluid">
                <VerticalNavbar title="Shopper" items={["Home", "Shop", "Pages", "Blog"]} />
                <button id="btnInsert" value="Insert" onClick={this.handleInsertClick}>Insert</button>
                <button onClick={this.handleDeleteClick.bind(this)} >Delete</button>
                <button onClick={()=> this.handleUpdateClick()}>Update</button>
                <p>{this.state.msg}</p>
            </div>
        )
     }
}


			Forms & Validations

Routing in React
- BrowserRouter
- Routes
- Route
- Link
- react-router-dom

		             Route Parameters
- A route is used to access any specific resource. 
- A route parameter allows to query any content in side the resource. 
- React application can configure a route parameter in side route path.

	<Route  path="name/:param1/:param2/.."   element={ } />

- The values are passed using "/" as delimeter in URL.

	http://localhost:3000/name/value1/value2

- Every route parameter is mandatory and have order dependency. 

- You can access the route parameters by using "useParams()"  hook. It returns an parameter object with key and value.

	let  params = useParams();
	
	params {
	     param1: value1,
	     param2: value2
	}

FAQ: What is difference between "Absolute & Relative" path?
Ans:  Asbolute path refers to a resource on server. 
         Relative path refers to any specific content inside resource. 

	http://localhost:3000/products

	<Link  to="electronics"> 	=> Relative Path

	http://localhost:3000/products/electronics

	<Link to="home">

	http://localhost:3000/products/home

	<Link to="/home">		=> Absolute

	http://localhost:3000/home


			 Child Routes
- A child route refers to relative path.
- Relative is with regard to the parent path.
- You can configure route to access child component within the parent.

Syntax:
	<Route  path="parent"  element={<ParentElement />}>
		
	         <Route path="child"  element={<ChildElement />} />
	         ... multiple children.... 

	</Route>

- The child route is responsible for rendering a child component into the parent.
- It requires an <Outlet /> to configure.
- <Outlet> is a component that defines where the resulting markup of child is going to
   render.

FAQ: Can we define multiple outlets?
Ans: Yes.

Route Parameters
Nested Routes

		               Authenticating Routes
- Authorization is the process of preventing access to resources in application.
- Authentication is the process of verifying user credentials like userid, password, security token etc.
- Web applications can authenticate the routes by using various state management techniques.
- Cookies are the key components used for authentication in web applications. 
- JavaScript cookies are managed by using "document" object.

Syntax:
	document.cookies = "name=someName; cookieValue=val";

- React uses various 3rd party cookie libraries.

Cookies in React App:

1. Install 3rd party cookie library

	> npm  install  react-cookie --save

2. Cookie is a service, it requires a provider to configure at application level.

     - Go to "index.js"
     - Import  "CookieProvider"
     - Configure for application

	<CookieProvider>
	       <App />
	</CookieProvider>

3. To configure and use cookie the react-cookie library provides a hook 
	"useCookies()"

Syntax:
          const  [cookies, setCookie, removeCookie] = useCookies(['cookieName']);


          cookies	: It is used to access a cookie from memory
          setCookie	: It is used to create and configure a cookie.
          removeCookie: It removes specified cookie from memory.

Note:
 - Cookie can be "in-memory", which is temporary cookie. [saved in browser memory]
 - Cookie can be "persistent", which is permanent. [saved in client HDD]

FAQ: How to handle dynamic navigation in React routing?
Ans:  By using "useNavigate()" hook.

Syntax:
	let navigate = useNavigate();

	navigate("/path");
		              MERN Stack Application

M	- MongoDB [Database]
E	- Express JS [Middleware]
R	- React [Front End]
N	- Node JS [Server Side]

			Video Library Project

Modules:
	1. Admin Module
	2. User Module

Admin Module
- Admin can login with existing credentials provided in database.
- Admin can handle following interactions
	a) Add New Video into Library
	b) Edit Video
	c) Update Video Details
	d) Delete Video
	e) Add Categories for videos


User Module
- User can register
- User can login
- User can browse videos [search]
- Save videos for watching later
- User can like, dislike video
- User can comment on video

Technologies for Video Library Project:
- Server Side Application		: Node JS
- Database			: MongoDB
- API & Middleware 			: Express JS
- UI				: React with JS
- Components Library		: Bootstrap, MUI
- State Management			: Redux


			    MongoDB
- MongoDB is an open source, cross platform database.
- It is non-SQL database [no-sql]
- It supports ORM [Object Relational Mapping].
- It is schema less [structure less]
- It is document based.
- It supports Ad-hoc queries.
- It supports indexing. 
- Data replications to mantain load. 

Setup MongoDB on your PC
- Download and Install MongoDB Community Server

    https://www.mongodb.com/try/download/community

- Select "MongoDB Compass" while install

- MongoDB compass is a GUI tool  

- Start MongoDB Server on your PC 

        Run => Services.msc  
        Programs => Services.msc => Right click on "MongoDB Server" => Start

- Open MongoDB compass and connect to server using the following connection string.

        mongodb://127.0.0.1:27017


Terminology:

	Oracle, MySQL..		MongoDB
	------------------------------------------------------------------------
	Database			Database
	
	Tables			Collections  [ ]

	Record [Row]		Document  { }

	Field			Field / Key

	Joins			Embedded Documents



MongoDB Shell Commands:

1. To view existing databases 

	> show  dbs

2. To view active database 

	> db

3. To create a new database or to change into existing database

	> use  databaseName
	
Ex:
	> use videolibrary

 Note: If you define a new name, it creates database.
           If you define existing name, it starts using the database.
           New database is displayed in list only when it have some collections.

4. Adding a new collection into database  [collection is table]

	> db.createCollection("newName", {options})
	> db.createCollection("name")

Options:
       option		type		description
       --------------------------------------------------------------------------------------------
       autoIndexId	boolean	 	It sets a unique ID for every document.
				ID is auto generated.       
 
       max		number		It defines the maximum number of docs
				allowed in a collection.

       size		number		It defines the memory to allocate.						Size is defined in bytes.

       capped	boolean		It will not allow to add new documents when
				set to true. It can replace the old documents
				when set to false.

Default:
	autoIndexId	: true
	max		: varies
	size		: varies
	capped		: true

Syntax:
> db.createCollection("admin", { autoIndexId:true, max:10, capped:true, size:4194304})

5. View Collections in database

	> show collections

6. To remove any collection

	> db.collectionName.drop()
	> db.users.drop()

7. Insert documents into collection

	a) insertOne()
	b) insertMany()

Syntax:
       > db.collectionName.insertOne({ key:value, key:value })

 - Every document is JSON. [POCO]
 - Key is string type.
 - Value is any JavaScript type
 	a) Primitive
	b) Non Primitive

Syntax:
     > db.collectionName.insertMany([ { }, { } ])

Ex:
> db.categories.insertMany([{CategoryId:2, CategoryName:'Fashion'}, {CategoryId:3, CategoryName:'Footwear'}])

8. Query Documents    
- You can query documents from any collection using "find()"
- find() uses a dynamic query expression defined in "{ }".

Syntax:
      > db.collectionName.find({})		// return all documents
      > db.categories.find({})

Query Operators:

	{ key: value }		Exact match
	
	$gt			Greater than
	$gte			Greater than or equal
	$lt			Less than
	$lte			Less than or equal
	$ne			Not Equal
	$eq			Equal
	$or			OR ||
	$and			AND &&

Query-1: Find all documents with category jewelery

	>db.products.find({category:"jewelery"})

Query-2: Find all documents with price above 600
	
	>db.products.find({ price: {$gte:600} })

Query-3:  Find all document with rating above 4.5

	>db.products.find({ 'rating.rate': {$gt:4.5} })

Query-4:  Find all jewelery products with price above 500

 > db.products.find({ $and:[ {category:'jewelery'}, {price:{$gt:500}} ] })

Query-5:  Find all products with price between 100 to 500

> db.products.find({ $and: [ {price:{$gt:100}}, {price:{$lt:500} } ] } ) 

Query-6: Find all products whose category is jewelery or rating is above 4.7

> db.products.find({$or:[ {category:'jewelery'}, {'rating.rate':{$gt:4.7}} ]})


9. Update Documents
	
	a) updateOne()
	b) updateMany()

 Update Operators

	$set		: update values
	$unset		: remove field
	$rename		: change field name

Syntax:
        >db.collectionName.updateOne({findQuery},{updateQuery})

        >db.products.updateOne({ id:3 }, { $set: { price:400, 'rating.rate':4.8 } })
   
        >db.products.updateMany({category:'jewelery'}, { $set:{'rating.rage': 4.8 }})

10. Delete Documents
	a) deleteOne()
	b) deleteMany()

Syntax:
> db.collectionName.deleteOne({ findQuery })
> db.products.deleteOne({id:3})
> db.products.deleteMany({price:{$lt:100}})

		       Server Side API
		   [Node JS & Express ]


			Server Side Scripting

- Server side scripting is a technique used in web applications to generate a response customized to every client request.
- Scripts are employed on server in order to generate response for client request.
- The popular server side scripting technologies
	CGI, JSP, ASP, PHP, Node JS etc..

			 Node JS
- It is open source and cross platform.
- It uses google chrome V8 compiler.
- It is JavaScript based. 
- It is Single Threaded. 
- It uses Async and Sync methods.
- It is modular.
- It will not use caching.
- Node JS can build web application, create server, cretate CLI tools etc.

1. Create a new project folder for server side programming

	E:\server-app


2. Open with VS code and add script file "index.js"


3. Server side programs in Node use JavaScript only as language not for DOM.

	- Variables
	- Data Types
	- Operators
	- Statements
	- Functions
	- OOP

   Syntax:
	console.log("Welcome to Node JS");	// valid
	alert("Welcome to Node";		// invalid

4. You can compile and run server side node programs using node compiler

	> node  index.js

		             Server Side Objects
- Every server side technologies handles interactions using various server side objects.

	a) Request
	b) Response
	c) Cookie
	d) Session
	e) Application etc..

- Node provides several built-in server objects

	a) os
	b) path
	c) http
	d) fs   etc..

Syntax:
	var os = require("os");		// os is a module 
	os.cpus();
	os.platform();
	os.freemem()
	
		     Creating a new Web Application

- Node can create server and host any application by using "http" object. 

1. To create a server you have to use the method "createServer()"

2. It uses a callback with "request & reponse" objects.

Syntax:
	var http = require("http");

	http.createServer( (request, response) =>{ 

	})

     - Request object is used to request data from client, which can be query string,
       form body etc.
     - Response object is used to send response to client, which can be html, text,
        json, xml, file etc.

3. Server requires an application reference to start and respond.

 Syntax:
	var  app  = http.createServer();

4. Application starts on specific port number using "listen()" method

	app.listen(portNumber);

5. Response object can send any type of content as response by using "write()"

6. The content type is defined by using "writeHead()" 

Syntax:
	response.writeHead(statusCode, { 'content-type': 'MIME type' });
	response.write(chunk);

Ex:
index.js

var http = require("http");

var app = http.createServer((request, response)=>{
    response.writeHead(200, { 'content-type':'text/html' });
    response.write("<h2>Welcome to Node Server Side Web Application</h2>");
    response.end();
});
app.listen(5000);
console.log(`Server Started : http://127.0.0.1:5000`);

> node index.js

- request from any browser
	
	http://127.0.0.1:5000  (or)    http://localhost:5000

Ex: JSON type


var http = require("http");

var app = http.createServer((request, response)=>{
    response.writeHead(200, { 'content-type':'application/json' });
    response.write(JSON.stringify([{Name:'TV', Price:56000}, {Name:'Mobile', Price:12000.33}]));
    response.end();
});
app.listen(5000);
console.log(`Server Started : http://127.0.0.1:5000`);


		            Connecting with MongoDB 
		            [Node App => MongoDB]

- To connect with any database from server application we need database "drivers".
- Every database have relative drivers, which you have to install for project.
- To install mongodb drivers

	> npm  install  mongodb --save

- MongoDB drivers library provides  "mongodb" module.
- MongoDB module provides a collection of various classes.
- "MongoClient" is a class that provides all properties and methods to connect with
   mongodb database. 

	var mongoClient = require("mongodb").MongoClient;

- mongoClient object uses "connect()" to connect with database

Syntax:
  mongoClient.connect("connectionString").then((clientObj)=>{}).catch((err)=>{ })

Syntax: [old]
  mongoClient.connect("conString", function(error, clientObject){
	if(!error) {

	}
 });

- "then()" returns a client object that can communicate with database using "db()".

Syntax:
	.then(clientObj=>{
	        var database =  clientObj.db("databaseName");
	});

- "database" reference can communicate with the collections in database.
- It can also handle all CRUD operations on the collection.

Syntax:
	database.collection("collectionName").find()
				          .insertOne()
				          .deleteOne()
				          .updateOne() etc..

Ex:
index.js

var http = require("http");
var mongoClient = require("mongodb").MongoClient;

var app = http.createServer((req, res)=>{
     res.writeHead(200, {
         'content-type': 'application/json'
     });

     mongoClient.connect("mongodb://127.0.0.1:27017")
     .then(clientObj=>{
          var database = clientObj.db("videolibrary");
          database.collection("categories").find({}).toArray().then(documents=>{
              res.write(JSON.stringify(documents));
              res.end();
          })
     })
     .catch(error=> {
        console.log(error);
     })

});
app.listen(4000);
console.log(`Server Started : http://127.0.0.1:4000`);


> node index.js

browser:   http://127.0.0.1:4000

		                   Express JS

- It is a web framework for "Node JS".
- It is a middleware framework.
- Middleware is a software framework used to handle communication in network based applications.
- Express JS provides several built in modules to configure and create API's.

Creating API with Node & Express:

1. Install Express JS framework for project

	> npm install express  --save

2. Import express module and create a new server side API app with express.

	var  express = require("express");

	var app = express();

	// Server side routes
	app.get('/path', (req, res) =>{ })
	app.post()
	app.put()
	app.delete()..

	app.listen("port");

3. API route provides a "response" object that sends any type response to client.
   And a "request" object to fetch any type of content from client.

	request.body	=> form body
	request.params	=> route parameters
	response.send()
	response.end()

Ex:
api.js

var express = require("express");
var mongoClient = require("mongodb").MongoClient;

var app = express();

app.get('/', (req, res)=>{
    res.send("<h2>API Home</h2>");
});

app.get("/men", (req, res)=>{
    res.send("<h2>Mens' Fashion</h2>");
});

app.get("/categories", (req, res)=>{

    mongoClient.connect("mongodb://127.0.0.1:27017")
    .then(clientObj=>{
        var database = clientObj.db("videolibrary");
        database.collection("categories").find({}).toArray().then(documents=>{
            res.send(documents);
            res.end();
        });
    });
});

app.get("*", (req, res)=>{
    res.send("Requested Path : Not Found");
});

app.listen(4000);
console.log(`API Started : http://127.0.0.1:4000`);
 	

			 Route Parameters

- Parameters allows to query any content from server.
- Route parameters a configured in route path.

Syntax:
	app.get("/path/:param1/:param2", (req, res)=>{

	})

	http://server.com/path/value1/value2

- You can access route parameters by using "request" object "params" property.

	req.params  = {
		param1 : value1,
		param2 : value2
	}

Ex:
api.js

var express = require("express");
var mongoClient = require("mongodb").MongoClient;

var app = express();
var conStr = "mongodb://127.0.0.1:27017";

app.get('/', (req, res)=>{
    res.send("<h2>API Home</h2>");
});

app.get("/men", (req, res)=>{
    res.send("<h2>Mens' Fashion</h2>");
});

app.get("/categories", (req, res)=>{

    mongoClient.connect(conStr)
    .then(clientObj=>{
        var database = clientObj.db("videolibrary");
        database.collection("categories").find({}).toArray().then(documents=>{
            res.send(documents);
            res.end();
        });
    });
});

app.get("/products/:category", (req, res)=>{

     mongoClient.connect(conStr).then(clientObj=>{
          var database = clientObj.db("videolibrary");

          database.collection("products").find({category:req.params.category}).toArray().then(documents=>{
            res.send(documents);
            res.end();
          });
     });

});

app.get("*", (req, res)=>{
    res.send("Requested Path : Not Found");
});

app.listen(4000);
console.log(`API Started : http://127.0.0.1:4000`);

Note: Download and install web debugger "Postman" or "Fiddler" for API requests. 

POST, PUT, DELETE


Creating API 
- Node
- Express
- MongoDB
	
			CRUD Operations

- Express is a middleware that sends data in JSON by default.
- Data from client need to be converted into JSON.
- Early versions of Node uses "body-parser" library.
- Express JS latest versions provide "body-parser", which application have to use to convert the input data into JSON.

Syntax:
	app.use(express.urlencoded({ extended: true }));
	app.use(express.json());

- Converting data and inserting into database, updating or deleting can be blocked
  at API level. You can control the actions by using "CORS" library.

	> npm install cors --save

	var cors = require("cors");

	app.use(cors());

Ex:
api.js


var express = require("express");
var mongoClient = require("mongodb").MongoClient;
var cors = require("cors");

var app = express();

app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(cors());

var conStr = "mongodb://127.0.0.1:27017";

app.get('/', (req, res)=>{
    res.send("<h2>API Home</h2>");
});

app.get("/men", (req, res)=>{
    res.send("<h2>Mens' Fashion</h2>");
});

app.get("/categories", (req, res)=>{

    mongoClient.connect(conStr)
    .then(clientObj=>{
        var database = clientObj.db("videolibrary");
        database.collection("categories").find({}).toArray().then(documents=>{
            res.send(documents);
            res.end();
        });
    });
});

app.post("/add-category", (req, res)=>{

     var category = {
        CategoryId: parseInt(req.body.CategoryId),
        CategoryName: req.body.CategoryName
     }

     mongoClient.connect(conStr).then(clientObj => {
        var database = clientObj.db("videolibrary");
        database.collection("categories").insertOne(category).then(()=>{
              console.log('Category Added');
              res.end();
        })
     })

})

app.put("/edit-category/:id", (req, res)=>{

    var id = parseInt(req.params.id);

    mongoClient.connect(conStr).then(clientObj=>{

        var database = clientObj.db("videolibrary");
        database.collection("categories").updateOne({CategoryId:id},{$set:{CategoryId:parseInt(req.body.CategoryId), CategoryName: req.body.CategoryName}}).then(()=>{
            console.log(`Category Updated`);
            res.end();
        });

    })


})

app.delete("/delete-category/:id", (req, res)=>{

    mongoClient.connect(conStr).then(clientObj=>{

        var database = clientObj.db("videolibrary");

        database.collection('categories').deleteOne({CategoryId:parseInt(req.params.id)}).then(()=>{
             console.log("Category Deleted");
             res.end(); 
        })

    })

})



app.get("/products/:category", (req, res)=>{

     mongoClient.connect(conStr).then(clientObj=>{
          var database = clientObj.db("videolibrary");

          database.collection("products").find({category:req.params.category}).toArray().then(documents=>{
            res.send(documents);
            res.end();
          });
     });

});

app.get("*", (req, res)=>{
    res.send("Requested Path : Not Found");
});

app.listen(4000);
console.log(`API Started : http://127.0.0.1:4000`);
		             Video Library Project

Database Models 

1. Admin Module
	Collection		: admin
	Fields		: UserId		[string] [PK]	
			  Password	[string]

2. User Module
	Collection		: users
	Fields		: UserId		[string] [PK]
			  UserName	[string]
			  Password	[string]
			  Mobile		[string]
			  Email		[string]

3. Videos Module
	Collection		: videos
	Fields		: VideoId		[number] [PK]
			  Title		[string]
			  Url		[string]
			  Likes		[number]
			  Dislikes		[number]
			  Views		[number]
			  Category	Id	[number] [FK]

	Collection		: categories
	Fields		: CategoryId	[number] [PK]
			  CategoryName	[string] 

API Routes:

GET	/admin			Returns admin user details 

GET	/videos			Returns all videos 

GET	/categories		Returns all categories

GET	/video/1			Returns specific video by id

GET	/videos/java		Returns specific category videos

GET	/users			Returns all users

POST	/register-user		Adds new user into database

POST	/add-video		Adds new video 

PUT	/edit-video/1		Edits specified video and updates

DELETE	/delete-video/1		Removes specified video


Server App:
1. Create  new folder  server-app

2. Open in VS Code

3. Install Following libraries

   	> npm install  express   mongodb   cors  --save


4. Add a new  JS file  "api.js"


var mongoClient = require("mongodb").MongoClient;
var express = require("express");
var cors = require("cors");

var conStr = "mongodb://127.0.0.1:27017";

var app = express();

app.use(cors());
app.use(express.urlencoded({extended:true}));
app.use(express.json());

// Routes

app.get("/admin",(req, res)=>{

    mongoClient.connect(conStr).then(clientObj =>{

        var database = clientObj.db("videolibrary");
        database.collection("admin").find({}).toArray().then(documents=>{

            res.send(documents);
            res.end();

        });
    });
});


app.get("/videos",(req, res)=>{

    mongoClient.connect(conStr).then(clientObj =>{

        var database = clientObj.db("videolibrary");
        database.collection("videos").find({}).toArray().then(documents=>{

            res.send(documents);
            res.end();

        });
    });
});

app.get("/categories",(req, res)=>{

    mongoClient.connect(conStr).then(clientObj =>{

        var database = clientObj.db("videolibrary");
        database.collection("categories").find({}).toArray().then(documents=>{

            res.send(documents);
            res.end();

        });
    });
});

app.get("/users",(req, res)=>{

    mongoClient.connect(conStr).then(clientObj =>{

        var database = clientObj.db("videolibrary");
        database.collection("users").find({}).toArray().then(documents=>{

            res.send(documents);
            res.end();

        });
    });
});

app.get("/video/:id",(req, res)=>{

    mongoClient.connect(conStr).then(clientObj =>{

        var database = clientObj.db("videolibrary");
        database.collection("videos").find({VideoId:parseInt(req.params.id)}).toArray().then(documents=>{

            res.send(documents);
            res.end();

        });
    });
});


app.get("/videos/:categoryid",(req, res)=>{

    mongoClient.connect(conStr).then(clientObj =>{

        var database = clientObj.db("videolibrary");
        database.collection("videos").find({CategoryId:parseInt(req.params.categoryid)}).toArray().then(documents=>{

            res.send(documents);
            res.end();

        });
    });
});

app.post("/register-user",(req, res)=>{

    var user = {
        UserId: req.body.UserId,
        UserName: req.body.UserName,
        Password: req.body.Password,
        Mobile: req.body.Mobile,
        Email: req.body.Email
    }

    mongoClient.connect(conStr).then(clientObj=>{

        var database = clientObj.db("videolibrary");

        database.collection("users").insertOne(user).then(()=>{

                console.log('User Registered');
                res.end();
        });
    });
});


app.post("/add-video",(req, res)=>{

    var video = {
        VideoId: parseInt(req.body.VideoId),
        Title: req.body.Title,
        Url: req.body.Url,
        Likes: parseInt(req.body.Likes),
        Dislikes: parseInt(req.body.Dislikes),
        Views: parseInt(req.body.Views),
        CategoryId: parseInt(req.body.CategoryId)
    }

    mongoClient.connect(conStr).then(clientObj=>{

        var database = clientObj.db("videolibrary");

        database.collection("videos").insertOne(video).then(()=>{

                console.log('Video Added');
                res.end();
        });
    });
});



app.put("/edit-video/:id",(req, res)=>{

    var video = {
        VideoId: parseInt(req.body.VideoId),
        Title: req.body.Title,
        Url: req.body.Url,
        Likes: parseInt(req.body.Likes),
        Dislikes: parseInt(req.body.Dislikes),
        Views: parseInt(req.body.Views),
        CategoryId: parseInt(req.body.CategoryId)
    }

    mongoClient.connect(conStr).then(clientObj=>{

        var database = clientObj.db("videolibrary");

        database.collection("videos").updateOne({VideoId:parseInt(req.params.id)},{$set:video}).then(()=>{

                console.log('Video Updated');
                res.end();
        });
    });
});

app.delete("/delete-video/:id",(req, res)=>{

    
    mongoClient.connect(conStr).then(clientObj=>{

        var database = clientObj.db("videolibrary");

        database.collection("videos").deleteOne({VideoId:parseInt(req.params.id)}).then(()=>{

                console.log('Video Deleted');
                res.end();
        });
    });
});

app.listen(5000);
console.log(`Server Started http://127.0.0.1:5000`);

Front End - React


useCallback()
- It can cache any function in memory.
- Caching function is required to use it repeatedly across multiple requests.
- Caching will save round trip.

Syntax:
	useCallback( (data)=>{ }, [ dependencies ])

useMemo()
- It can cache data in memory.
- It saves round trip if same data is required across requests.

Syntax:
	const data =  useMemo( ()=> { }, [dependency])


			                 Redux 
- It is a JavaScript library for managing predictable global state.
- Global state is at application level, which you can access use across components.
- Redux provides a toolkit to setup and configure global state.
- It is predictable, debggable, extensible and secured.

1. Install Redux toolkit and react support for project

	> npm install  @reduxjs/toolkit   react-redux   --save

2. Add a slicer to your project
 - Slicer is provided by redux toolkit 
 - You can use "createSlice" to create a slicer.
 - Typically slicer contains initialState and actions performed.
 - initialState configures the data to store
 - slicer creates a slice with actions used by reducer.
 - slicer configure the payload [data] to save in the store.

Syntax:

		video-slicer.jsx

     import  { createSlice  } from  "@reduxjs/toolkit";
   
     const  initialState = {
                   videos : [ ],
	  videosCount: 0
      }

     const videoSlice = createSlice({ 

	name: "video",
	initialState,
	reducers : {
	     addToSaveList : (state, action) {
	           state.videos.push[action.payload];
	           state.videosCount = state.videos.length;
	     }
	}
     })
     
    // export the video slide and actions so that you can use in another component.
  
    export const  { addToSaveList } = videoSlice.actions;
    export default videoSlice.reducer;

3. Add a new store 
	           "store.jsx"
   - Store imports the slicer and reducer
   - It stores the data and send using state.
   - It identifies the actions performed and updates data into store.
   - Create store by using "configureStore" from redux tool kit.
  
Syntax:
       import  { configureStore }  from  "@reduxjs/toolkit";

       export default configureStore({

               reducer : {
                     store: videoSlicer
               }
         })

4. Go to "index.js"
- Import store
- Import provider from redux library

      <Provider store = { store } >
                <App />
      </Provider>

5. Go to your component to access and update store

	store.getState().store; 	// { videos, videoLength }
 
    Store is updated by using  useDispatch() hook or react-redux library


Note: Install "Redux Dev Tools" for your browser



			          Testing React Application

- Testing is the process of verifying AS-IS and TO-BE.
- AS-IS refers to developers design.
- TO-BE refers to client requirements.

	AS-IS === TO-BE		=> Test Pass
	AS-IS !== TO-BE		=> Test Fail

- React is a JavaScript library, which uses "JEST" as testing framework.
- JEST provides unit-testing methods used to test every JavaScript function and Class.
- You can test React hooks and components by using JEST.
- Testing every component includes 3 phases

	1. Arrange
	2. Act
	3. Assert

- Arrange is the process of setting up the environment for testing a component.
- Act is the process of defining the parameters for testing.
- Assert is the process of exeucting the test and monitoring the results.
- JEST provides various methods for configuring and testing

	test()
	screen
	render()
	expect()
	toBe..()
Ex:
Client Requirements for Login:
- Login screen must have a title "Customer Login".
- Login screen must have a link [anchor] with text "Recover Password".
- Recover Password link must navigate to "/recover-password" route path.

1. Add a new test file for user-login component

	user-login.test.js   (or)  user-login.spec.js

2. Import the component that you want to test.

	import  { UserLogin }  from  "./user-login";

3. Import the basic test methods
	a) render		import your component
	b) screen		can read every UI element from component

4. Write a test case for every test.

Syntax:
	test( "Case Name", ()=>{
	
	          render(<Component />

	          expect(element_to_test).toBe..();

	})

  - JEST uses "data-testid" to setup reference for any UI element, so that we can access and test 
    the element.

	<h2  data-testid="title"> 
	<img data-testid="company-logo">
	<a  data-testid="recover-password">

5. Run the test

	>npm test

Ex:
import { UserLogin } from "./user-login";
import { screen, render } from "@testing-library/react";

test("Title Test", ()=>{

     render(<UserLogin />);

     var title = screen.getByTestId("title");
     expect(title).toHaveTextContent("Customer Login");

});

test("Recover Password Link Test", ()=>{

      render(<UserLogin />);

      var link = screen.getByText(/Recover Password/);
      expect(link).toBeInTheDocument();
      expect(link).toHaveAttribute("href", "/recover-password");

})
			          React with TypeScript
			         ------------------------------

FAQ: What are the issues with JavaScript?
- It is not strongly typed.
- It is not implicitly strictly typed.
- It is not an OOP language.
- Extensibility issues.

TypeScript 
- It is an alternative for JavaScript.
- Anders Hejlberg of Microsoft introduced typescript language.  [ C# ] 
- It is strongly typed and strictly typed.
- It is an OOP language.
- It is built in typescript.

Setup Environment for TypeScript

1. Install typescript on your PC

	C:\> npm install -g  typescript

2. Check the version

	C:\> tsc   -v		[typescript trans compiler]

3. Create a new folder for typescript project

	D:\typescript-project

4. Open in Visual Studio code

5. Run the command 

	> tsc  -init 			 

   [ It generates tsconfig.json file, which is a typescript configuration file ]

6. Typescript programs are written in  ".ts" file

7. Typescript programs are translated and converted into JS by using typescript compiler

	> tsc   index.ts	=> It generates index.js

8.  Run JavaScript file using node compiler

	> node index.js

			       TypeScript Language

- Variables Declaration keywords are same
	var, let, const
- Typescript variable requires data type specification
	
	var  variableName:dataType = value;

- Data Types are all JS types.
	
	var Name:string;
	var Price:number;
	var Stock:boolean;

- TypeScript supports union of types

	var  Name:string|null ;

- If data type is not defined then the default is "any" type.

	var Name;		// any

- Typescript supports type inference, it can set data type based on the value initialized.

	var Name = "TV";	// string
	Name = 4500;	// invalid

	var Name;		// any
	Name = 10;	// valid
	Name = "TV";	// valid

- All primitive types are same as in JavaScript.
- All manipulations of string, number are same.


			          TypeScript Array
- Array can be defined for same data type collection or various types.

Syntax:
	var categories:string[]  = [ ]  or new Array();
	var values:any[] = [ ];

- Array methods are same as in JS.
- Array can have union of types, but not for initialization only for assignment.

Syntax:	
	var values:string[] | number[]  = [ ];

	Initializaiton only string or number.
	Assignment both string and number.
	
			
			 Object Type
- It is collections of key and value reference.
- Key is string and value is any type.
- You can set restriction for value type.

Syntax:
     var  product:{Name:string, Price:number} = {  }

Ex:
var product:{Name:string, Price:number, Rating:{rate:number, count:number}, Cities:string[]} = {

    Name: "TV",
    Price: 45000,
    Rating: {rate:3.2, count:5000},
    Cities: ["Delhi", "Hyd"]

}
console.log(`Name=${product.Name}`)

- Every key defined for object is mandatory to implement.
- You can't ignore or add a new key.
- You have to define exactly the same keys configured for object.
- You can configure optional keys [nullable keys] by using "?". [Null reference character]

Syntax:
   var product: {Name:string, Price?:number} = {  }	// price is optional

Syntax: Array of objects   [ { }, { } ]

   var products:{Name:string, Price:number}[] = [ ];

Ex:
var products:{Name:string, Price:number}[] = [
    {Name: "TV", Price: 5000.44},
    {Name: "Mobile", Price: 24000}
]
products.map(product=> {
    console.log(product.Name);
})

			            Map Type
- JavaScript map uses key as any type and value as any type.
- TS can restrict key and value type.

Syntax:
     var data:Map<KeyType, ValueType> = new Map();
     data.set()
     data.get()

Ex:
      var data:Map<number, string> = new Map();
      data.set(1, "TV");

- All manipulations are same as in JS.

			            Date Type
- Typescript date type requires  "Date" interface.

Syntax:
          var now:Date = new Date();

- All date manipulations are same.
	
			    Regular expression Type
- TypeScript uses "RegExp" as regular expression type.
- Expression is defined in " /   / ".


Syntax:
	var pattern:RegExp = /\d{10}/;

- Regular expression is verified by using "match()".

Ex:

var pattern:RegExp  = /\+91\d{10}/;
var mobile:string = "+919876543210";

if(mobile.match(pattern)){
    console.log("Verified");
} else {
    console.log("Invalid");
}
- Operators are same
- Statements are same
- Function have Type Specification


			Type Script Functions
- Functions in typescript are configure with return type of void as type.

Syntax:
	function Name():void
	{
	}

	function Name():number 
	{
	   return  10;
	}

- Function parameter also defines the type.

Syntax:
	function Name(param:type, param:type): type
	{
	}

Ex:

function Details(id:number, Name:string, price?:number) : void{
    console.log(`Id=${id}\nName=${Name}\nPrice=${price}`);
}

function Addition(a:number, b:number):number {
    return a + b;
}

Addition(10, 30);
Details(1, "TV");

			         Interfaces
TypeScript
- Variables
- Data Types
- Union of Types
- Operators
- Statements
- Functions
- Array
- Object
- Map
- Array of Objects

			        TypeScript OOP
1. Interface
- Interface defines rules for component.
- Object or Class can implement interface. [rules]
- You can reuse or extend rules.

Syntax:
  interface  Name
  {
     property:dataType;
     method():dataType|void;
  }

- You can define optional rules
	{
	property?:dataType
	}

- You can have readonly rules

	{
	 readonly  property:dataType;
	}

- Readonly will not allow to assign a value after initialization.

Ex:
interface IProduct
{
    Name:string;
    readonly Price:number;
    Qty:number;
    Total():number;
    Print():void;
}
interface ICategory extends IProduct
{
    CategoryName:string;
}


var product:ICategory= {
    Name : "TV",
    Price: 20000,
    Qty: 2,
    CategoryName: "Electronics",
    Total: function(){
        return this.Qty * this.Price;
    },
    Print: function(){
        console.log(`Name=${this.Name}\nPrice=${this.Price}\nQty=${this.Qty}\nTotal=${this.Total()}\nCategory=${this.CategoryName}`);
    }
}
product.Qty = 4;
product.Price = 56000;		// invalid   price is read-only

product.Print();

			           TypeScript Classes
- Class Declaration
- Class Expression
- Class Members

Static and NonStatic members:
- Static uses continous memory.
- Non static uses discreet memory.
- Static members are accessed by using class name.
- Non static members are accessed by using "this" keyword within class and 
  by using instance of class outside class.

Ex:

class Demo
{
    static s=0;
    n = 0;
    constructor(){
        Demo.s = Demo.s + 1;
        this.n = this.n + 1;
    }
    Print(){
        console.count(`s=${Demo.s} n=${this.n}`);
    }
}
let obj1 = new Demo();
obj1.Print();

let obj2 = new Demo();
obj2.Print();

let obj3 = new Demo();
obj3.Print();

Access Modifers:
1. public
2. private
3. protected 

- public is accessible from any location and any object
- private is accessible only with in class.
- protected is accessible with in class and outside class. 
  Outside it is accessible only within derived class and by using derived class reference.

Ex:

class Product
{
    public Name:string  = "Samsung TV";
    private Price:number = 34000.44;
    protected Stock:boolean = true;
}
class Derived extends Product
{
     Print(){
        let obj = new Derived();
        obj.Stock; // protected
     }
}


Create a new React project with Typescript as language:

   >npx  create-react-app    app-name --template  typescript

- Your component files will have extenstion  ".tsx"
- Your index, classes and interfaces will have ".ts" 
- Complete file system is same as in Javascript.
- All hooks are same.
- useState() hook is now generic type in typescript.

Syntax:
  const [categories, setCategories] = useState<string[]>([" "]);
  const [products, setProducts] = useState<{Name:string, Price:number}[]>([ { }, { } ]);
  const [products, setProducts] = useState<IProduct[]>([{}, {}]);

	interface IProduct 
	{
	  Name:string;
	  Price:number;
	}

Ex:
1. contracts/Iproduct.ts

export interface IProduct
{
    id:number;
    title:string;
    description:string;
    image:string;
    price:number;
    rating: {rate:number, count:number},
    category:string;
}

2. data-demo.tsx

import { useEffect, useState } from "react";
import { IProduct } from "../contracts/IProduct";
import axios from "axios";

export function DataDemo(){

    const [categories, setCategories] = useState<string[]>([]);
    const [products, setProducts] = useState<IProduct[]>();

    function LoadCategories(){
        axios.get('https://fakestoreapi.com/products/categories')
        .then(response=>{
             setCategories(response.data);
        })
    }

    function LoadProducts(){
        axios.get('https://fakestoreapi.com/products')
        .then(response=>{
             setProducts(response.data);
        })
    }

    useEffect(()=>{

        LoadCategories();
        LoadProducts();
        

    },[])

    return(
        <div>
            <select>
                {
                    categories.map(category => <option key={category}>{category}</option>)
                }
            </select>
            <h3>Products</h3>
            <ol>
                {
                    products?.map(product=> <li key={product.id}>{product.title}</li>)
                }
            </ol>
        </div>
    )
}

