module.exports = (srv) => {

    // Reply mock data for Books...
    srv.on ('READ', 'Risks', function(req,b,c,d){
        // req.user.is('admin') || req.reject(403)
        debugger;
    })
   
    // Reply mock data for Authors...
    srv.on ('READ', 'Mitigations', function(a,b,c,d){
        // debugger;
    })
   
   }