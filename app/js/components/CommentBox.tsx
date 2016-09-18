import * as React from 'react';

import { data } from '../data/data';
import { CommentForm } from './CommentForm';
import { CommentList } from './CommentList';

import { CommentPostData } from "../data/CommentPostData"

export class CommentBox extends React.Component<any, {}> {

    public state;

    constructor( props : any ) {
        super( props );
        this.state = { data: [] };
        this.handleCommentSubmit = this.handleCommentSubmit.bind( this );
    }

    componentDidMount() {
        this.setState( { data: data } );
    }

    handleCommentSubmit( comment: CommentPostData ) {
        comment.id = Date.now();
        data.push( comment );
        this.setState( { data: data } );
    }

    render() {
        return (
            <div className="commentBox">
            <h1>Comments</h1>
            <CommentList data={this.state.data} />
            <CommentForm onCommentSubmit={this.handleCommentSubmit} />
            </div>
        );
    }
}
