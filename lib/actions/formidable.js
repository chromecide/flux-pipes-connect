var formidable = require('formidable');

function connectFormidable(ctx, cbs){
    var form = new formidable.IncomingForm();

    form.parse(ctx.request, function(err, fields, files) {
        if(err){
            if(cbs && cbs.error){
                cbs.error(err);
            }
        }else{
            ctx.request.body = fields;
            ctx.request.files = files;
            if(cbs && cbs.success){
                console.log('FORMIDABLE DONE');
                cbs.success(ctx);
            }
        }
    });
}

connectFormidable.flux_pipe = {
    name: 'Connect : formidable',
    description: 'Passes the HTTP Request object through the Connect formidable IncomingForm() function.',
    configs:[]
};

module.exports = connectFormidable;