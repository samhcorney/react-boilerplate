import * as React from 'react';
import { Comment } from './Comment';

import { CommentPostData } from "../data/CommentPostData"

export class CommentList extends React.Component<any, {}> {

    constructor( props : any ) {
        super( props );
    }

    render() {

        var commentNodes = this.props.data.map( ( comment: CommentPostData ) => {
            return (
                <Comment author={comment.author} key={comment.id}>
                {comment.text}
                </Comment>
            );
        });

        return (
            <div className="commentList">
            {commentNodes}
            </div>
        );
    }
}
