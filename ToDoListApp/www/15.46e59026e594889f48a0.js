(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{"3WbM":function(n,t,l){"use strict";l.d(t,"a",function(){return u});var e=l("mrSG"),o=l("ZZ/e"),i=l("CcnG"),u=function(){function n(n){this.toastCtrl=n}return n.prototype.toastErrorShowWithMessage=function(n){return e.b(this,void 0,void 0,function(){return e.e(this,function(t){switch(t.label){case 0:return[4,this.toastCtrl.create({position:"top",translucent:!0,showCloseButton:!0,message:n,duration:3e3})];case 1:return t.sent().present(),[2]}})})},n.prototype.toastSuccessShowWithMessage=function(n){return e.b(this,void 0,void 0,function(){return e.e(this,function(t){switch(t.label){case 0:return[4,this.toastCtrl.create({position:"top",message:n,duration:2e3})];case 1:return t.sent().present(),[2]}})})},n.prototype.toastErrorShow=function(){return e.b(this,void 0,void 0,function(){return e.e(this,function(n){switch(n.label){case 0:return[4,this.toastCtrl.create({position:"top",translucent:!0,showCloseButton:!0,color:"red",message:"Algo ha fallado, intente nuevamente"})];case 1:return n.sent().present(),[2]}})})},n.ngInjectableDef=i.R({factory:function(){return new n(i.V(o.Nb))},token:n,providedIn:"root"}),n}()},CqUA:function(n,t,l){"use strict";l.d(t,"a",function(){return u});var e=l("mrSG"),o=l("ZZ/e"),i=l("CcnG"),u=function(){function n(n){this.loadCtrl=n}return n.prototype.loadingShow=function(){return e.b(this,void 0,void 0,function(){var n;return e.e(this,function(t){switch(t.label){case 0:return n=this,[4,this.loadCtrl.create({translucent:!0,message:"Cargando..."})];case 1:return n.load=t.sent(),this.load.present(),[2]}})})},n.prototype.loadingHide=function(){return e.b(this,void 0,void 0,function(){return e.e(this,function(n){switch(n.label){case 0:return this.load?[4,this.load.dismiss()]:[3,2];case 1:n.sent(),n.label=2;case 2:return[2]}})})},n.prototype.loadingShowWithMessage=function(n){return e.b(this,void 0,void 0,function(){var t;return e.e(this,function(l){switch(l.label){case 0:return t=this,[4,this.loadCtrl.create({translucent:!0,message:n})];case 1:return t.load=l.sent(),this.load.present(),[2]}})})},n.ngInjectableDef=i.R({factory:function(){return new n(i.V(o.Eb))},token:n,providedIn:"root"}),n}()},JLuJ:function(n,t,l){"use strict";l.r(t);var e=l("CcnG"),o=function(){return function(){}}(),i=l("pMnS"),u=l("oBZk"),r=l("ZZ/e"),s=l("Ip0R"),a=l("mrSG"),c=l("CqUA"),b=l("dVwY"),p=l("3WbM"),h=l("xSwr"),d=l("RCtl"),f=function(){function n(n,t,l,e,o,i){var u=this;this.loadService=n,this.toastService=t,this.globalService=l,this.alertCtrl=e,this.modalCtrl=o,this.event=i,this.users=[],this.loadService.loadingShow(),this.event.subscribe("actualizarUsuario",function(n){u.update(n.userEditar)}),this.event.subscribe("eliminarUsuario",function(n){u.presentAlertConfirm(n.userEliminar)})}return n.prototype.ngOnInit=function(){},n.prototype.ionViewDidEnter=function(){var n=this;setTimeout(function(){n.obtenerListaUsuarios()},1e3)},n.prototype.obtenerListaUsuarios=function(){return a.b(this,void 0,void 0,function(){var n,t=this;return a.e(this,function(l){switch(l.label){case 0:return this.modalCtrl.dismiss(),n=this,[4,this.globalService.getUserList().subscribe(function(n){t.users=n,t.loadService.loadingHide()},function(n){t.loadService.loadingHide(),t.toastService.toastErrorShowWithMessage("Fallo el cargue de los usuarios")})];case 1:return n.subscriptionService=l.sent(),[2]}})})},n.prototype.ngOnDestroy=function(){this.subscriptionService.unsubscribe()},n.prototype.delete=function(n){return a.b(this,void 0,void 0,function(){var t=this;return a.e(this,function(l){switch(l.label){case 0:return this.modalCtrl.dismiss(),this.loadService.loadingShow(),[4,this.globalService.deleteUser(n.usuarioPK).subscribe(function(){t.loadService.loadingHide(),t.toastService.toastSuccessShowWithMessage("Se elimin\xf3 al usuario: "+n.primerNombre),t.obtenerListaUsuarios()},function(l){t.loadService.loadingHide(),t.toastService.toastErrorShowWithMessage("No se pud\xf3 eliminar al usuario: "+n.primerNombre)})];case 1:return l.sent(),[2]}})})},n.prototype.update=function(n){return a.b(this,void 0,void 0,function(){var t,l=this;return a.e(this,function(e){switch(e.label){case 0:return[4,this.modalCtrl.create({component:h.a,componentProps:{usuario:n}})];case 1:return(t=e.sent()).onDidDismiss().then(function(){l.obtenerListaUsuarios()}),[4,t.present()];case 2:return[2,e.sent()]}})})},n.prototype.presentAlertConfirm=function(n){return a.b(this,void 0,void 0,function(){var t=this;return a.e(this,function(l){switch(l.label){case 0:return[4,this.alertCtrl.create({header:"Eliminar usuario",message:"Est\xe1 seguro de eliminar este usuario?",buttons:[{text:"No",role:"cancel",cssClass:"secondary"},{text:"Si",handler:function(){t.delete(n)}}]})];case 1:return[4,l.sent().present()];case 2:return l.sent(),[2]}})})},n.prototype.verDetalleUsario=function(n){return a.b(this,void 0,void 0,function(){return a.e(this,function(t){switch(t.label){case 0:return[4,this.modalCtrl.create({component:d.a,componentProps:{usuario:n}})];case 1:return[4,t.sent().present()];case 2:return[2,t.sent()]}})})},n}(),m=e.mb({encapsulation:0,styles:[[".welcome-card[_ngcontent-%COMP%]   ion-img[_ngcontent-%COMP%]{max-height:35vh;overflow:hidden}.listaUsuarios[_ngcontent-%COMP%]{font-weight:bolder;font-size:30px;color:#5252b4}.nombreUsuario[_ngcontent-%COMP%]{font-weight:bolder;color:#b97676}#iconoEditar[_ngcontent-%COMP%], #iconoEliminar[_ngcontent-%COMP%]{font-size:20px}ion-item-option[_ngcontent-%COMP%]{text-transform:capitalize}.container[_ngcontent-%COMP%]{text-align:center;margin:10px}.container[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{margin-top:30%;font-size:200px;color:grey}"]],data:{}});function v(n){return e.Fb(0,[(n()(),e.ob(0,0,null,null,1,"ion-icon",[["color","secondary"],["name","woman"],["style","font-size: 45px;"]],null,null,null,u.R,u.n)),e.nb(1,49152,null,0,r.B,[e.h,e.k],{color:[0,"color"],name:[1,"name"]},null)],function(n,t){n(t,1,0,"secondary","woman")},null)}function g(n){return e.Fb(0,[(n()(),e.ob(0,0,null,null,1,"ion-icon",[["color","tertiary"],["name","man"],["style","font-size: 45px;"]],null,null,null,u.R,u.n)),e.nb(1,49152,null,0,r.B,[e.h,e.k],{color:[0,"color"],name:[1,"name"]},null)],function(n,t){n(t,1,0,"tertiary","man")},null)}function C(n){return e.Fb(0,[(n()(),e.ob(0,0,null,null,1,"ion-icon",[["color","danger"],["name","help"],["style","font-size: 45px;"]],null,null,null,u.R,u.n)),e.nb(1,49152,null,0,r.B,[e.h,e.k],{color:[0,"color"],name:[1,"name"]},null)],function(n,t){n(t,1,0,"danger","help")},null)}function S(n){return e.Fb(0,[(n()(),e.ob(0,0,null,null,38,"ion-item-sliding",[],null,null,null,u.V,u.s)),e.nb(1,49152,null,0,r.L,[e.h,e.k],null,null),(n()(),e.ob(2,0,null,0,22,"ion-item",[],null,null,null,u.W,u.p)),e.nb(3,49152,null,0,r.G,[e.h,e.k],null,null),(n()(),e.ob(4,0,null,0,7,"ion-avatar",[["slot","start"]],null,null,null,u.F,u.b)),e.nb(5,49152,null,0,r.f,[e.h,e.k],null,null),(n()(),e.fb(16777216,null,0,1,null,v)),e.nb(7,16384,null,0,s.j,[e.N,e.K],{ngIf:[0,"ngIf"]},null),(n()(),e.fb(16777216,null,0,1,null,g)),e.nb(9,16384,null,0,s.j,[e.N,e.K],{ngIf:[0,"ngIf"]},null),(n()(),e.fb(16777216,null,0,1,null,C)),e.nb(11,16384,null,0,s.j,[e.N,e.K],{ngIf:[0,"ngIf"]},null),(n()(),e.ob(12,0,null,0,12,"div",[],null,[[null,"click"]],function(n,t,l){var e=!0;return"click"===t&&(e=!1!==n.component.verDetalleUsario(n.context.$implicit)&&e),e},null,null)),(n()(),e.ob(13,0,null,null,6,"ion-label",[["class","nombreUsuario"]],null,null,null,u.X,u.t)),e.nb(14,49152,null,0,r.M,[e.h,e.k],null,null),(n()(),e.Db(15,0,[""," "," "," ",""])),e.zb(16,1),e.zb(17,1),e.zb(18,1),e.zb(19,1),(n()(),e.ob(20,0,null,null,4,"ion-label",[],null,null,null,u.X,u.t)),e.nb(21,49152,null,0,r.M,[e.h,e.k],null,null),(n()(),e.ob(22,0,null,0,2,"small",[],null,null,null,null,null)),(n()(),e.Db(23,null,["",""])),e.zb(24,1),(n()(),e.ob(25,0,null,0,6,"ion-item-options",[["side","end"]],null,null,null,u.U,u.r)),e.nb(26,49152,null,0,r.K,[e.h,e.k],{side:[0,"side"]},null),(n()(),e.ob(27,0,null,0,4,"ion-item-option",[["color","danger"]],null,[[null,"click"]],function(n,t,l){var e=!0;return"click"===t&&(e=!1!==n.component.presentAlertConfirm(n.context.$implicit)&&e),e},u.T,u.q)),e.nb(28,49152,null,0,r.J,[e.h,e.k],{color:[0,"color"]},null),(n()(),e.ob(29,0,null,0,1,"ion-icon",[["id","iconoEliminar"],["name","trash"]],null,null,null,u.R,u.n)),e.nb(30,49152,null,0,r.B,[e.h,e.k],{name:[0,"name"]},null),(n()(),e.Db(-1,0,[" Eliminar "])),(n()(),e.ob(32,0,null,0,6,"ion-item-options",[["side","start"]],null,null,null,u.U,u.r)),e.nb(33,49152,null,0,r.K,[e.h,e.k],{side:[0,"side"]},null),(n()(),e.ob(34,0,null,0,4,"ion-item-option",[],null,[[null,"click"]],function(n,t,l){var e=!0;return"click"===t&&(e=!1!==n.component.update(n.context.$implicit)&&e),e},u.T,u.q)),e.nb(35,49152,null,0,r.J,[e.h,e.k],null,null),(n()(),e.ob(36,0,null,0,1,"ion-icon",[["id","iconoEditar"],["name","create"]],null,null,null,u.R,u.n)),e.nb(37,49152,null,0,r.B,[e.h,e.k],{name:[0,"name"]},null),(n()(),e.Db(-1,0,[" Editar "]))],function(n,t){n(t,7,0,"F"===t.context.$implicit.genero),n(t,9,0,"M"===t.context.$implicit.genero),n(t,11,0,"O"===t.context.$implicit.genero),n(t,26,0,"end"),n(t,28,0,"danger"),n(t,30,0,"trash"),n(t,33,0,"start"),n(t,37,0,"create")},function(n,t){var l=e.Eb(t,15,0,n(t,16,0,e.xb(t.parent.parent,0),null==t.context.$implicit?null:t.context.$implicit.primerNombre)),o=e.Eb(t,15,1,n(t,17,0,e.xb(t.parent.parent,0),null==t.context.$implicit?null:t.context.$implicit.segundoNombre)),i=e.Eb(t,15,2,n(t,18,0,e.xb(t.parent.parent,0),null==t.context.$implicit?null:t.context.$implicit.primerApellido)),u=e.Eb(t,15,3,n(t,19,0,e.xb(t.parent.parent,0),null==t.context.$implicit?null:t.context.$implicit.segundoApellido));n(t,15,0,l,o,i,u);var r=e.Eb(t,23,0,n(t,24,0,e.xb(t.parent.parent,1),t.context.$implicit.fechaNacimiento));n(t,23,0,r)})}function y(n){return e.Fb(0,[(n()(),e.ob(0,0,null,null,8,"ion-list",[],null,null,null,u.Z,u.u)),e.nb(1,49152,null,0,r.N,[e.h,e.k],null,null),(n()(),e.ob(2,0,null,0,4,"ion-list-header",[],null,null,null,u.Y,u.v)),e.nb(3,49152,null,0,r.O,[e.h,e.k],null,null),(n()(),e.ob(4,0,null,0,2,"ion-label",[["class","listaUsuarios"]],null,null,null,u.X,u.t)),e.nb(5,49152,null,0,r.M,[e.h,e.k],null,null),(n()(),e.Db(-1,0,["Lista de usuarios"])),(n()(),e.fb(16777216,null,0,1,null,S)),e.nb(8,278528,null,0,s.i,[e.N,e.K,e.s],{ngForOf:[0,"ngForOf"]},null)],function(n,t){n(t,8,0,t.component.users)},null)}function E(n){return e.Fb(0,[(n()(),e.ob(0,0,null,null,9,"div",[["class","container"]],null,null,null,null,null)),(n()(),e.ob(1,0,null,null,1,"div",[],null,null,null,null,null)),(n()(),e.Db(-1,null,[" Ups! "])),(n()(),e.ob(3,0,null,null,2,"div",[],null,null,null,null,null)),(n()(),e.ob(4,0,null,null,1,"ion-icon",[["name","person-add"]],null,null,null,u.R,u.n)),e.nb(5,49152,null,0,r.B,[e.h,e.k],{name:[0,"name"]},null),(n()(),e.ob(6,0,null,null,3,"div",[],null,null,null,null,null)),(n()(),e.ob(7,0,null,null,2,"ion-label",[],null,null,null,u.X,u.t)),e.nb(8,49152,null,0,r.M,[e.h,e.k],null,null),(n()(),e.Db(-1,0,["No se encontraron usuarios, crea uno"]))],function(n,t){n(t,5,0,"person-add")},null)}function w(n){return e.Fb(0,[e.yb(0,s.o,[]),e.yb(0,s.d,[e.u]),(n()(),e.ob(2,0,null,null,6,"ion-header",[],null,null,null,u.Q,u.m)),e.nb(3,49152,null,0,r.A,[e.h,e.k],null,null),(n()(),e.ob(4,0,null,0,4,"ion-toolbar",[["color","tertiary"]],null,null,null,u.hb,u.D)),e.nb(5,49152,null,0,r.Ab,[e.h,e.k],{color:[0,"color"]},null),(n()(),e.ob(6,0,null,0,2,"ion-title",[],null,null,null,u.gb,u.C)),e.nb(7,49152,null,0,r.yb,[e.h,e.k],null,null),(n()(),e.Db(-1,0,[" Lista de Usuarios "])),(n()(),e.ob(9,0,null,null,5,"ion-content",[],null,null,null,u.O,u.k)),e.nb(10,49152,null,0,r.t,[e.h,e.k],null,null),(n()(),e.fb(16777216,null,0,1,null,y)),e.nb(12,16384,null,0,s.j,[e.N,e.K],{ngIf:[0,"ngIf"]},null),(n()(),e.fb(16777216,null,0,1,null,E)),e.nb(14,16384,null,0,s.j,[e.N,e.K],{ngIf:[0,"ngIf"]},null)],function(n,t){var l=t.component;n(t,5,0,"tertiary"),n(t,12,0,l.users.length>0),n(t,14,0,0==l.users.length)},null)}function U(n){return e.Fb(0,[(n()(),e.ob(0,0,null,null,1,"app-tab1",[],null,null,null,w,m)),e.nb(1,245760,null,0,f,[c.a,p.a,b.a,r.a,r.Fb,r.d],null,null)],function(n,t){n(t,1,0)},null)}var k=e.kb("app-tab1",f,U,{},{},[]),x=l("gIcY"),D=l("ZYCi");l.d(t,"Tab1PageModuleNgFactory",function(){return M});var M=e.lb(o,[],function(n){return e.ub([e.vb(512,e.j,e.ab,[[8,[i.a,k]],[3,e.j],e.x]),e.vb(4608,s.l,s.k,[e.u,[2,s.s]]),e.vb(4608,r.b,r.b,[e.z,e.g]),e.vb(4608,r.Fb,r.Fb,[r.b,e.j,e.q,s.c]),e.vb(4608,r.Kb,r.Kb,[r.b,e.j,e.q,s.c]),e.vb(4608,x.n,x.n,[]),e.vb(1073742336,s.b,s.b,[]),e.vb(1073742336,r.Cb,r.Cb,[]),e.vb(1073742336,x.l,x.l,[]),e.vb(1073742336,x.e,x.e,[]),e.vb(1073742336,D.n,D.n,[[2,D.t],[2,D.m]]),e.vb(1073742336,o,o,[]),e.vb(1024,D.k,function(){return[[{path:"",component:f}]]},[])])})},RCtl:function(n,t,l){"use strict";l.d(t,"a",function(){return e}),l("ZZ/e");var e=function(){function n(n,t,l){this.navParams=n,this.modalCtrl=t,this.event=l,this.usuario=n.get("usuario")}return n.prototype.ngOnInit=function(){},n.prototype.cerrarModal=function(){this.modalCtrl.dismiss()},n.prototype.editar=function(){this.event.publish("actualizarUsuario",{userEditar:this.usuario})},n.prototype.eliminar=function(){this.event.publish("eliminarUsuario",{userEliminar:this.usuario})},n}()},dVwY:function(n,t,l){"use strict";var e=function(){function n(){}return n.API_ENDPOINT="http://localhost:7001/dolist-web/ApiRest/",n}(),o=l("t/Na"),i=l("CcnG"),u=function(){function n(){}return n.METHOD_POST="POST",n.METHOD_GET="GET",n.METHOD_PUT="PUT",n.USER_SERVICE="User",n.GET_USER_SUCCESS="Se consutaron los usuarios exitosamente",n.ngInjectableDef=i.R({factory:function(){return new n},token:n,providedIn:"root"}),n}();l.d(t,"a",function(){return r});var r=function(){function n(n){this.http=n,this.url=e.API_ENDPOINT,this.headers=new o.g}return n.prototype.getHeaders=function(n){switch(this.headers.append("Content-Type","application/json"),n){case"POST":case"PUT":this.headers.append("Media-Type","application/json")}return this.headers},n.prototype.getUrl=function(n){var t="";switch(n){case"User":t=this.url+"servicios/usuario"}return t},n.prototype.getParam=function(n){return"?tipoDocumento=usuarioPK.tipoDocumento="+n.tipoDocumento+"&numeroDocumento=usuarioPK.numeroDocumento="+n.numeroDocumento},n.prototype.getUserList=function(){return this.http.get(this.getUrl(u.USER_SERVICE))},n.prototype.createUser=function(n){return this.http.post(this.getUrl(u.USER_SERVICE),n,{headers:this.getHeaders(u.METHOD_POST)})},n.prototype.updateUser=function(n){return this.http.put(this.getUrl(u.USER_SERVICE),n,{headers:this.getHeaders(u.METHOD_PUT)})},n.prototype.deleteUser=function(n){var t={headers:new o.g({"Content-Type":"application/json"}),body:{tipoDocumento:n.tipoDocumento,numeroDocumento:n.numeroDocumento}};return this.http.delete(""+this.getUrl(u.USER_SERVICE),t)},n.ngInjectableDef=i.R({factory:function(){return new n(i.V(o.c))},token:n,providedIn:"root"}),n}()},xSwr:function(n,t,l){"use strict";l.d(t,"a",function(){return e}),l("ZZ/e");var e=function(){function n(n,t){this.modalCtrl=n,this.navParams=t,this.usuario=t.get("usuario")}return n.prototype.ngOnInit=function(){},n.prototype.cerrarModal=function(){this.modalCtrl.dismiss()},n}()}}]);