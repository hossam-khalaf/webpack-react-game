// const validator = require('validator')
import React, { Fragment } from 'react'
import ReactDOM from 'react-dom'
import './styles/main.css'
// import isEmail from 'validator/lib/isEmail'
// import tripleMe from './tripleMe'

// console.log(isEmail('hoss@hos'))

// console.log(tripleMe(900))

// document.querySelector('h1').innerText = 'Jooda'

function App() {
	return (
		<>
			<h1>Hello from React!</h1>
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam unde
				nobis quis ea vel quam molestias ex, esse, aspernatur velit quidem amet
				dolorum eaque voluptatem cum laborum alias. Delectus, eaque?
			</p>
		</>
	)
}

ReactDOM.render(<App />, document.getElementById('app'))

if (module.hot) {
	module.hot.accept()
}
