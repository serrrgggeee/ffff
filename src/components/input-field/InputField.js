import React, { Component } from 'react';

export default class InputField extends Component {
	render() {
		const { fieldName,  value, onChange} = this.props;
		return (
			<div className="inputfield">
				<div className="row">
					<input 
						placeholder={fieldName} 
						className="validate" 
						name={fieldName} 
						value={value}
						onChange={onChange}
					/>
					<label htmlFor={fieldName}>{fieldName}</label>
				</div>
		 	</div>
		)
	}
}
