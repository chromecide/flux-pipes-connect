
//load the actions

var fluxPipesConnect = {
    actions:{
        compression: require(__dirname+'/lib/actions/compression.js'),
        cors: require(__dirname+'/lib/actions/cors.js'),
        formidable: require(__dirname+'/lib/actions/formidable.js'),
        QS: require(__dirname+'/lib/actions/QS.js')
    },
    pipes:{
        
    },
    init: function(fPipes){
        fPipes.actions.register('Connect:UseCompression', {}, this.actions.compression);
        fPipes.actions.register('Connect:UseCORS', {}, this.actions.cors);
        fPipes.actions.register('Connect:UseFormidable', {}, this.actions.formidable);
        fPipes.actions.register('Connect:UseQS', {}, this.actions.QS);
    }
};

module.exports = fluxPipesConnect;