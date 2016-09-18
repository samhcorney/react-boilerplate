import 'svgxuse';
import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { data } from './data/data';
import { CommentBox } from './components/CommentBox';

export class MyApp {

    constructor () {
        ReactDOM.render(
            <CommentBox data={data} />,
            document.getElementById( 'content' )
        );
    }
}

this.MyApp();
