define([], function(){
    'use strict';

    return {
        start : function start(){
            //foo starts
            window.console.log('foobar', arguments);
            window.console.log('foo', 'bar');
            window.console.log('foobaz', arguments);
            window.console.log('foo', 'baz');
        }
    };
});
