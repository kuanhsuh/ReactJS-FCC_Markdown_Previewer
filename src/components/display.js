import React, { Component } from 'react'; // eslint-disable-line no-unused-vars

class Display extends Component {

  createMarkup() { return {__html:marked(this.props.text)}; } // eslint-disable-line

  render() {
    return (
      <div className="col-sm-6">
        <h3 className="text-center">Preview</h3>
        <p className="display" dangerouslySetInnerHTML={this.createMarkup()} />
      </div>
    );
  }
}

export default Display;
