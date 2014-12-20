var compression = require('compression');
var fn = compression();

function connectCompression(ctx, cbs){
    try{
        fn(ctx.request, ctx.response, function(){
            if(cbs && cbs.success){
                console.log('COMPRESSION DONE');
                cbs.success(ctx);
            }
        });
    }catch(e){
        if(cbs && cbs.error){
            cbs.error(e);
        }
    }
}

connectCompression.flux_pipe = {
    name: 'Connect : Compression',
    description: 'Passes the HTTP Request object through the Connect compression module.',
    configs:[]
};

module.exports = connectCompression;