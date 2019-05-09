import React, { Component } from 'react';
import { connect } from 'react-redux';

import InputField from '../input-field/InputField';
import { login } from '../../actions/authActions';

class Auth extends Component {
	constructor(props) {
		super(props);
		this.state = {
			username: 'dd',
			age: "32"
		}
		this.onChange = this.onChange.bind(this);
		this.onSubmit = this.onSubmit.bind(this);
	}

	onSubmit(e) {
		e.preventDefault();
		this.props.login(this.state).then(
			(res) => console.log(res),
			(err) => console.log(err),
		);
	}

	onChange(e) {
		this.setState({ [e.target.name]: e.target.value });
	}

	render() {
		const { username, age } = this.state;
		console.log(username);
		return (
			<div className="card blue-grey darken-1 row">
				<div className="col s4"></div>
				<div className="card-content white-text col s4">
					<form onSubmit={this.onSubmit} className="col s12">
						<div className="center-align card-title">
							Войти
						</div>
					    <InputField
							fieldName="username"
							value={username}
							onChange={this.onChange}
						/>
						<InputField
							fieldName="age"
							value={age}
							onChange={this.onChange}
						/>
						<div className="center-align">
							<button className="btn">Submit</button>
						</div>
					</form>
				</div>
				<div className=" col s4">
				</div>
			</div>
		)
	}
}

export default connect(null, {login})(Auth);

