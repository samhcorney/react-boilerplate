import * as React from 'react';

export class Comment extends React.Component<any, {}> {

    constructor( props : any ) {
        super( props );
    }

    render() {
        return (
            <div className="comment">
            <h2 className="commentAuthor">
            {this.props.author}
            </h2>
            {this.props.children}
            </div>
        );
    }
}
