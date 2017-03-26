import React, {Component} from 'react';

class Input extends Component {

    componentDidMount() {
        const initialText = '# Heading\n\n## Sub-heading\n\n### Another deeper heading\n\nText attributes _italic_, *italic*, __bold__, **bold**, `monospace`.\n\nHorizontal rule:\n\n---\n\nBullet list:\n* apples\n* oranges\n* pears\n\nNumbered list:\n1. apples\n2. oranges\n3. pears\n\nA [link](http://example.com).';
        const {handleAddInput} = this.props;
        handleAddInput(initialText);
    }

    addInput = (e) => {
        const {handleAddInput} = this.props;
        handleAddInput(e.target.value);
    }

    render() {
        const {text} = this.props;

        return (
            <div className="col-sm-6">
                <h3 className="text-center">Input</h3>
                <textarea cols="30" rows="30" className="form-control" onChange={this.addInput} value={text}></textarea>
            </div>
        )
    }
}

export default Input;
