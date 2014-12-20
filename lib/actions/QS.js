var QS = require('qs');

function connectQS(ctx, cbs){
    try{
        
        var urlParts = ctx.request.url.split('?');
        console.log(ctx.request);
        ctx.request.pathname = ctx.request.url.pathname;

        if(urlParts[1]){
            ctx.request.query = QS.parse(urlParts[1]);
        }else{
            ctx.request.query = {};
        }

        if(cbs && cbs.success){
            console.log('QS DONE');
            cbs.success(ctx);
        }
    }catch(e){
        console.log(e);
        if(cbs && cbs.error){
            cbs.error(e);
        }
    }
}

connectQS.flux_pipe = {
    name: 'Connect : QS',
    description: 'Passes the HTTP Request object through the Connect QS module.',
    configs:[]
};

module.exports = connectQS;