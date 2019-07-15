
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Sidebar as SidebarDHX, TreeCollection } from 'dhx-suite';
import 'dhx-suite/codebase/suite.css';

class SidebarConfigured extends Component {
  componentDidMount() {
    this.sidebar = new SidebarDHX(this.el, {
      css: 'dhx_widget--bordered dhx_widget--bg_white',
      width: 300,
      minWidth: 120,
      collapsed: false
    });
    this.sidebar.data.load('./static/sidebar.json')
  }
  componentWillUnmount() {
    this.sidebar.destructor();
  }
  render() {
    return (
      <div ref={el => this.el = el}></div>
    );
  }
}
SidebarConfigured.propTypes = {
  css: PropTypes.string,
  width: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]),
  minWidth: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]),
  collapsed: PropTypes.bool, 
  data: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.instanceOf(TreeCollection)
  ])
};

export default SidebarConfigured;