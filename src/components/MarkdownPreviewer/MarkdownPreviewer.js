import React, { Component } from 'react';
import Editor from './Editor';
import Preview from './Preview';
import './MarkdownPreviewer.scss';

class MarkdownPreviewer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            contentInEditor: ''
        }
        this.changeEditor = this.changeEditor.bind(this);
    }
    changeEditor(inputString) {
        this.setState({contentInEditor: inputString});
    }
    render() {
        return (
            <div id="markdown-preview-container">
                <Editor onChange={this.changeEditor}></Editor>
                <Preview preContent={this.state.contentInEditor}></Preview>
            </div>
        );
    }
}

export default MarkdownPreviewer;
