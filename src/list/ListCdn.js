import React, { Component } from "react";
import fromCDN from "from-cdn";
import PropTypes from "prop-types";

class ListCDN extends Component {
	constructor(props) {
		super(props);

		this.ready = fromCDN([
			"https://cdn.dhtmlx.com/suite/edge/suite.js",
			"https://cdn.dhtmlx.com/suite/edge/suite.css"
		]);
	}
	componentDidMount() {
		this.ready.then(() => {
			/* global dhx */
			this.list = new dhx.List(this.el, {
				css: "dhx_widget--bordered dhx_widget--bg_white",
				template: item => `<span><strong>${item.title}</strong> ${item.short}</span>`,
				height: 400
			});
			this.list.data.load(`${process.env.PUBLIC_URL}/static/dataview.json`);
			if (this.props.ready) {
				this.props.ready(this.list);
			}
		});
	}
	componentWillUnmount() {
		this.list && this.list.destructor();
	}
	render() {
		return (
			<div style={{height: 400, width: 400}} ref={el => this.el = el}></div>
		);
	}
}

ListCDN.propTypes = {
	data: PropTypes.oneOfType([
		PropTypes.array
	]),
	template: PropTypes.func,
	keyNavigation: PropTypes.bool,
	css: PropTypes.string,
	virtual: PropTypes.bool,
	height: PropTypes.number,
	itemHeight: PropTypes.number,
	multiselection: PropTypes.bool || PropTypes.oneOf(["click", "ctrlClick"]),
	editable: PropTypes.bool,
	dragMode: PropTypes.oneOf(["target", "source", "both"]),
	dragCopy: PropTypes.bool
};

export default ListCDN;
