var CORS = require('CORS');
var fn = CORS();

function connectCORS(ctx, cbs){
    try{
        fn(ctx.request, ctx.response, function(){
            if(cbs && cbs.success){
                console.log('CORS DONE');
                cbs.success(ctx);
            }
        });
    }catch(e){
        if(cbs && cbs.error){
            cbs.error(e);
        }
    }
}

connectCORS.flux_pipe = {
    name: 'Connect : CORS',
    description: 'Passes the HTTP Request object through the Connect CORS module.',
    configs:[]
};

module.exports = connectCORS;