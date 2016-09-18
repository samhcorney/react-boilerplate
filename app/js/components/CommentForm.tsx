import * as React from 'react';

import { CommentPostData } from "../data/CommentPostData"

export class CommentForm extends React.Component<any, {}> {

  public state: CommentPostData;

    constructor(props : any) {
        super( props );
        this.state = { author: '', text: '' };
        this.handleSubmit = this.handleSubmit.bind( this );
        this.handleTextChange = this.handleTextChange.bind( this );
        this.handleAuthorChange = this.handleAuthorChange.bind( this );
    }


    handleAuthorChange(e) {
        this.setState( { author: e.target.value } );
    }

    handleTextChange(e) {
        this.setState( { text: e.target.value } );
    }

    handleSubmit(e) {
        e.preventDefault();
        var author = this.state.author.trim();
        var text = this.state.text.trim();
        if (!text || !author) {
            return;
        }
        this.props.onCommentSubmit({author: author, text: text});
        this.setState({author: '', text: ''});
    }

    render() {
        return (
            <form className="commentForm" onSubmit={this.handleSubmit}>
                <input
                type="text"
                placeholder="Your name"
                value={this.state.author}
                onChange={this.handleAuthorChange}
                />
                <input
                type="text"
                placeholder="Say something..."
                value={this.state.text}
                onChange={this.handleTextChange}
                />
                <input type="submit" value="Post" />
            </form>
        );
    }
}