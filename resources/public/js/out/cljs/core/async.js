// Compiled by ClojureScript 1.9.521 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var args27551 = [];
var len__26407__auto___27557 = arguments.length;
var i__26408__auto___27558 = (0);
while(true){
if((i__26408__auto___27558 < len__26407__auto___27557)){
args27551.push((arguments[i__26408__auto___27558]));

var G__27559 = (i__26408__auto___27558 + (1));
i__26408__auto___27558 = G__27559;
continue;
} else {
}
break;
}

var G__27553 = args27551.length;
switch (G__27553) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args27551.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async27554 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27554 = (function (f,blockable,meta27555){
this.f = f;
this.blockable = blockable;
this.meta27555 = meta27555;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async27554.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27556,meta27555__$1){
var self__ = this;
var _27556__$1 = this;
return (new cljs.core.async.t_cljs$core$async27554(self__.f,self__.blockable,meta27555__$1));
});

cljs.core.async.t_cljs$core$async27554.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27556){
var self__ = this;
var _27556__$1 = this;
return self__.meta27555;
});

cljs.core.async.t_cljs$core$async27554.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async27554.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async27554.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async27554.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async27554.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta27555","meta27555",-31019484,null)], null);
});

cljs.core.async.t_cljs$core$async27554.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async27554.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27554";

cljs.core.async.t_cljs$core$async27554.cljs$lang$ctorPrWriter = (function (this__25905__auto__,writer__25906__auto__,opt__25907__auto__){
return cljs.core._write.call(null,writer__25906__auto__,"cljs.core.async/t_cljs$core$async27554");
});

cljs.core.async.__GT_t_cljs$core$async27554 = (function cljs$core$async$__GT_t_cljs$core$async27554(f__$1,blockable__$1,meta27555){
return (new cljs.core.async.t_cljs$core$async27554(f__$1,blockable__$1,meta27555));
});

}

return (new cljs.core.async.t_cljs$core$async27554(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var args27563 = [];
var len__26407__auto___27566 = arguments.length;
var i__26408__auto___27567 = (0);
while(true){
if((i__26408__auto___27567 < len__26407__auto___27566)){
args27563.push((arguments[i__26408__auto___27567]));

var G__27568 = (i__26408__auto___27567 + (1));
i__26408__auto___27567 = G__27568;
continue;
} else {
}
break;
}

var G__27565 = args27563.length;
switch (G__27565) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args27563.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("buffer must be supplied when transducer is"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("buf-or-n")].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var args27570 = [];
var len__26407__auto___27573 = arguments.length;
var i__26408__auto___27574 = (0);
while(true){
if((i__26408__auto___27574 < len__26407__auto___27573)){
args27570.push((arguments[i__26408__auto___27574]));

var G__27575 = (i__26408__auto___27574 + (1));
i__26408__auto___27574 = G__27575;
continue;
} else {
}
break;
}

var G__27572 = args27570.length;
switch (G__27572) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args27570.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var args27577 = [];
var len__26407__auto___27580 = arguments.length;
var i__26408__auto___27581 = (0);
while(true){
if((i__26408__auto___27581 < len__26407__auto___27580)){
args27577.push((arguments[i__26408__auto___27581]));

var G__27582 = (i__26408__auto___27581 + (1));
i__26408__auto___27581 = G__27582;
continue;
} else {
}
break;
}

var G__27579 = args27577.length;
switch (G__27579) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args27577.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_27584 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_27584);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_27584,ret){
return (function (){
return fn1.call(null,val_27584);
});})(val_27584,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var args27585 = [];
var len__26407__auto___27588 = arguments.length;
var i__26408__auto___27589 = (0);
while(true){
if((i__26408__auto___27589 < len__26407__auto___27588)){
args27585.push((arguments[i__26408__auto___27589]));

var G__27590 = (i__26408__auto___27589 + (1));
i__26408__auto___27589 = G__27590;
continue;
} else {
}
break;
}

var G__27587 = args27585.length;
switch (G__27587) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args27585.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4655__auto__)){
var ret = temp__4655__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4655__auto__)){
var retb = temp__4655__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4655__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__4655__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__26217__auto___27592 = n;
var x_27593 = (0);
while(true){
if((x_27593 < n__26217__auto___27592)){
(a[x_27593] = (0));

var G__27594 = (x_27593 + (1));
x_27593 = G__27594;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__27595 = (i + (1));
i = G__27595;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async27599 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27599 = (function (flag,meta27600){
this.flag = flag;
this.meta27600 = meta27600;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async27599.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_27601,meta27600__$1){
var self__ = this;
var _27601__$1 = this;
return (new cljs.core.async.t_cljs$core$async27599(self__.flag,meta27600__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async27599.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_27601){
var self__ = this;
var _27601__$1 = this;
return self__.meta27600;
});})(flag))
;

cljs.core.async.t_cljs$core$async27599.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async27599.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async27599.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async27599.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async27599.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta27600","meta27600",-1361422868,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async27599.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async27599.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27599";

cljs.core.async.t_cljs$core$async27599.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__25905__auto__,writer__25906__auto__,opt__25907__auto__){
return cljs.core._write.call(null,writer__25906__auto__,"cljs.core.async/t_cljs$core$async27599");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async27599 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async27599(flag__$1,meta27600){
return (new cljs.core.async.t_cljs$core$async27599(flag__$1,meta27600));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async27599(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async27605 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27605 = (function (flag,cb,meta27606){
this.flag = flag;
this.cb = cb;
this.meta27606 = meta27606;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async27605.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27607,meta27606__$1){
var self__ = this;
var _27607__$1 = this;
return (new cljs.core.async.t_cljs$core$async27605(self__.flag,self__.cb,meta27606__$1));
});

cljs.core.async.t_cljs$core$async27605.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27607){
var self__ = this;
var _27607__$1 = this;
return self__.meta27606;
});

cljs.core.async.t_cljs$core$async27605.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async27605.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async27605.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async27605.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async27605.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta27606","meta27606",-403145087,null)], null);
});

cljs.core.async.t_cljs$core$async27605.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async27605.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27605";

cljs.core.async.t_cljs$core$async27605.cljs$lang$ctorPrWriter = (function (this__25905__auto__,writer__25906__auto__,opt__25907__auto__){
return cljs.core._write.call(null,writer__25906__auto__,"cljs.core.async/t_cljs$core$async27605");
});

cljs.core.async.__GT_t_cljs$core$async27605 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async27605(flag__$1,cb__$1,meta27606){
return (new cljs.core.async.t_cljs$core$async27605(flag__$1,cb__$1,meta27606));
});

}

return (new cljs.core.async.t_cljs$core$async27605(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__27608_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__27608_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__27609_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__27609_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__25294__auto__ = wport;
if(cljs.core.truth_(or__25294__auto__)){
return or__25294__auto__;
} else {
return port;
}
})()], null));
} else {
var G__27610 = (i + (1));
i = G__27610;
continue;
}
} else {
return null;
}
break;
}
})();
var or__25294__auto__ = ret;
if(cljs.core.truth_(or__25294__auto__)){
return or__25294__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4657__auto__ = (function (){var and__25282__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__25282__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__25282__auto__;
}
})();
if(cljs.core.truth_(temp__4657__auto__)){
var got = temp__4657__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__26414__auto__ = [];
var len__26407__auto___27616 = arguments.length;
var i__26408__auto___27617 = (0);
while(true){
if((i__26408__auto___27617 < len__26407__auto___27616)){
args__26414__auto__.push((arguments[i__26408__auto___27617]));

var G__27618 = (i__26408__auto___27617 + (1));
i__26408__auto___27617 = G__27618;
continue;
} else {
}
break;
}

var argseq__26415__auto__ = ((((1) < args__26414__auto__.length))?(new cljs.core.IndexedSeq(args__26414__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__26415__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__27613){
var map__27614 = p__27613;
var map__27614__$1 = ((((!((map__27614 == null)))?((((map__27614.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27614.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27614):map__27614);
var opts = map__27614__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq27611){
var G__27612 = cljs.core.first.call(null,seq27611);
var seq27611__$1 = cljs.core.next.call(null,seq27611);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__27612,seq27611__$1);
});

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var args27619 = [];
var len__26407__auto___27669 = arguments.length;
var i__26408__auto___27670 = (0);
while(true){
if((i__26408__auto___27670 < len__26407__auto___27669)){
args27619.push((arguments[i__26408__auto___27670]));

var G__27671 = (i__26408__auto___27670 + (1));
i__26408__auto___27670 = G__27671;
continue;
} else {
}
break;
}

var G__27621 = args27619.length;
switch (G__27621) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args27619.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__27506__auto___27673 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27506__auto___27673){
return (function (){
var f__27507__auto__ = (function (){var switch__27441__auto__ = ((function (c__27506__auto___27673){
return (function (state_27645){
var state_val_27646 = (state_27645[(1)]);
if((state_val_27646 === (7))){
var inst_27641 = (state_27645[(2)]);
var state_27645__$1 = state_27645;
var statearr_27647_27674 = state_27645__$1;
(statearr_27647_27674[(2)] = inst_27641);

(statearr_27647_27674[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27646 === (1))){
var state_27645__$1 = state_27645;
var statearr_27648_27675 = state_27645__$1;
(statearr_27648_27675[(2)] = null);

(statearr_27648_27675[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27646 === (4))){
var inst_27624 = (state_27645[(7)]);
var inst_27624__$1 = (state_27645[(2)]);
var inst_27625 = (inst_27624__$1 == null);
var state_27645__$1 = (function (){var statearr_27649 = state_27645;
(statearr_27649[(7)] = inst_27624__$1);

return statearr_27649;
})();
if(cljs.core.truth_(inst_27625)){
var statearr_27650_27676 = state_27645__$1;
(statearr_27650_27676[(1)] = (5));

} else {
var statearr_27651_27677 = state_27645__$1;
(statearr_27651_27677[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27646 === (13))){
var state_27645__$1 = state_27645;
var statearr_27652_27678 = state_27645__$1;
(statearr_27652_27678[(2)] = null);

(statearr_27652_27678[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27646 === (6))){
var inst_27624 = (state_27645[(7)]);
var state_27645__$1 = state_27645;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27645__$1,(11),to,inst_27624);
} else {
if((state_val_27646 === (3))){
var inst_27643 = (state_27645[(2)]);
var state_27645__$1 = state_27645;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27645__$1,inst_27643);
} else {
if((state_val_27646 === (12))){
var state_27645__$1 = state_27645;
var statearr_27653_27679 = state_27645__$1;
(statearr_27653_27679[(2)] = null);

(statearr_27653_27679[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27646 === (2))){
var state_27645__$1 = state_27645;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27645__$1,(4),from);
} else {
if((state_val_27646 === (11))){
var inst_27634 = (state_27645[(2)]);
var state_27645__$1 = state_27645;
if(cljs.core.truth_(inst_27634)){
var statearr_27654_27680 = state_27645__$1;
(statearr_27654_27680[(1)] = (12));

} else {
var statearr_27655_27681 = state_27645__$1;
(statearr_27655_27681[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27646 === (9))){
var state_27645__$1 = state_27645;
var statearr_27656_27682 = state_27645__$1;
(statearr_27656_27682[(2)] = null);

(statearr_27656_27682[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27646 === (5))){
var state_27645__$1 = state_27645;
if(cljs.core.truth_(close_QMARK_)){
var statearr_27657_27683 = state_27645__$1;
(statearr_27657_27683[(1)] = (8));

} else {
var statearr_27658_27684 = state_27645__$1;
(statearr_27658_27684[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27646 === (14))){
var inst_27639 = (state_27645[(2)]);
var state_27645__$1 = state_27645;
var statearr_27659_27685 = state_27645__$1;
(statearr_27659_27685[(2)] = inst_27639);

(statearr_27659_27685[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27646 === (10))){
var inst_27631 = (state_27645[(2)]);
var state_27645__$1 = state_27645;
var statearr_27660_27686 = state_27645__$1;
(statearr_27660_27686[(2)] = inst_27631);

(statearr_27660_27686[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27646 === (8))){
var inst_27628 = cljs.core.async.close_BANG_.call(null,to);
var state_27645__$1 = state_27645;
var statearr_27661_27687 = state_27645__$1;
(statearr_27661_27687[(2)] = inst_27628);

(statearr_27661_27687[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__27506__auto___27673))
;
return ((function (switch__27441__auto__,c__27506__auto___27673){
return (function() {
var cljs$core$async$state_machine__27442__auto__ = null;
var cljs$core$async$state_machine__27442__auto____0 = (function (){
var statearr_27665 = [null,null,null,null,null,null,null,null];
(statearr_27665[(0)] = cljs$core$async$state_machine__27442__auto__);

(statearr_27665[(1)] = (1));

return statearr_27665;
});
var cljs$core$async$state_machine__27442__auto____1 = (function (state_27645){
while(true){
var ret_value__27443__auto__ = (function (){try{while(true){
var result__27444__auto__ = switch__27441__auto__.call(null,state_27645);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27444__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27444__auto__;
}
break;
}
}catch (e27666){if((e27666 instanceof Object)){
var ex__27445__auto__ = e27666;
var statearr_27667_27688 = state_27645;
(statearr_27667_27688[(5)] = ex__27445__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27645);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27666;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27443__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27689 = state_27645;
state_27645 = G__27689;
continue;
} else {
return ret_value__27443__auto__;
}
break;
}
});
cljs$core$async$state_machine__27442__auto__ = function(state_27645){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27442__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27442__auto____1.call(this,state_27645);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__27442__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27442__auto____0;
cljs$core$async$state_machine__27442__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27442__auto____1;
return cljs$core$async$state_machine__27442__auto__;
})()
;})(switch__27441__auto__,c__27506__auto___27673))
})();
var state__27508__auto__ = (function (){var statearr_27668 = f__27507__auto__.call(null);
(statearr_27668[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27506__auto___27673);

return statearr_27668;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27508__auto__);
});})(c__27506__auto___27673))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__27877){
var vec__27878 = p__27877;
var v = cljs.core.nth.call(null,vec__27878,(0),null);
var p = cljs.core.nth.call(null,vec__27878,(1),null);
var job = vec__27878;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__27506__auto___28064 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27506__auto___28064,res,vec__27878,v,p,job,jobs,results){
return (function (){
var f__27507__auto__ = (function (){var switch__27441__auto__ = ((function (c__27506__auto___28064,res,vec__27878,v,p,job,jobs,results){
return (function (state_27885){
var state_val_27886 = (state_27885[(1)]);
if((state_val_27886 === (1))){
var state_27885__$1 = state_27885;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27885__$1,(2),res,v);
} else {
if((state_val_27886 === (2))){
var inst_27882 = (state_27885[(2)]);
var inst_27883 = cljs.core.async.close_BANG_.call(null,res);
var state_27885__$1 = (function (){var statearr_27887 = state_27885;
(statearr_27887[(7)] = inst_27882);

return statearr_27887;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27885__$1,inst_27883);
} else {
return null;
}
}
});})(c__27506__auto___28064,res,vec__27878,v,p,job,jobs,results))
;
return ((function (switch__27441__auto__,c__27506__auto___28064,res,vec__27878,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__27442__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__27442__auto____0 = (function (){
var statearr_27891 = [null,null,null,null,null,null,null,null];
(statearr_27891[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__27442__auto__);

(statearr_27891[(1)] = (1));

return statearr_27891;
});
var cljs$core$async$pipeline_STAR__$_state_machine__27442__auto____1 = (function (state_27885){
while(true){
var ret_value__27443__auto__ = (function (){try{while(true){
var result__27444__auto__ = switch__27441__auto__.call(null,state_27885);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27444__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27444__auto__;
}
break;
}
}catch (e27892){if((e27892 instanceof Object)){
var ex__27445__auto__ = e27892;
var statearr_27893_28065 = state_27885;
(statearr_27893_28065[(5)] = ex__27445__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27885);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27892;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27443__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28066 = state_27885;
state_27885 = G__28066;
continue;
} else {
return ret_value__27443__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__27442__auto__ = function(state_27885){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__27442__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__27442__auto____1.call(this,state_27885);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__27442__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__27442__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__27442__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__27442__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__27442__auto__;
})()
;})(switch__27441__auto__,c__27506__auto___28064,res,vec__27878,v,p,job,jobs,results))
})();
var state__27508__auto__ = (function (){var statearr_27894 = f__27507__auto__.call(null);
(statearr_27894[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27506__auto___28064);

return statearr_27894;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27508__auto__);
});})(c__27506__auto___28064,res,vec__27878,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__27895){
var vec__27896 = p__27895;
var v = cljs.core.nth.call(null,vec__27896,(0),null);
var p = cljs.core.nth.call(null,vec__27896,(1),null);
var job = vec__27896;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__26217__auto___28067 = n;
var __28068 = (0);
while(true){
if((__28068 < n__26217__auto___28067)){
var G__27899_28069 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__27899_28069) {
case "compute":
var c__27506__auto___28071 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__28068,c__27506__auto___28071,G__27899_28069,n__26217__auto___28067,jobs,results,process,async){
return (function (){
var f__27507__auto__ = (function (){var switch__27441__auto__ = ((function (__28068,c__27506__auto___28071,G__27899_28069,n__26217__auto___28067,jobs,results,process,async){
return (function (state_27912){
var state_val_27913 = (state_27912[(1)]);
if((state_val_27913 === (1))){
var state_27912__$1 = state_27912;
var statearr_27914_28072 = state_27912__$1;
(statearr_27914_28072[(2)] = null);

(statearr_27914_28072[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27913 === (2))){
var state_27912__$1 = state_27912;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27912__$1,(4),jobs);
} else {
if((state_val_27913 === (3))){
var inst_27910 = (state_27912[(2)]);
var state_27912__$1 = state_27912;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27912__$1,inst_27910);
} else {
if((state_val_27913 === (4))){
var inst_27902 = (state_27912[(2)]);
var inst_27903 = process.call(null,inst_27902);
var state_27912__$1 = state_27912;
if(cljs.core.truth_(inst_27903)){
var statearr_27915_28073 = state_27912__$1;
(statearr_27915_28073[(1)] = (5));

} else {
var statearr_27916_28074 = state_27912__$1;
(statearr_27916_28074[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27913 === (5))){
var state_27912__$1 = state_27912;
var statearr_27917_28075 = state_27912__$1;
(statearr_27917_28075[(2)] = null);

(statearr_27917_28075[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27913 === (6))){
var state_27912__$1 = state_27912;
var statearr_27918_28076 = state_27912__$1;
(statearr_27918_28076[(2)] = null);

(statearr_27918_28076[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27913 === (7))){
var inst_27908 = (state_27912[(2)]);
var state_27912__$1 = state_27912;
var statearr_27919_28077 = state_27912__$1;
(statearr_27919_28077[(2)] = inst_27908);

(statearr_27919_28077[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__28068,c__27506__auto___28071,G__27899_28069,n__26217__auto___28067,jobs,results,process,async))
;
return ((function (__28068,switch__27441__auto__,c__27506__auto___28071,G__27899_28069,n__26217__auto___28067,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__27442__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__27442__auto____0 = (function (){
var statearr_27923 = [null,null,null,null,null,null,null];
(statearr_27923[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__27442__auto__);

(statearr_27923[(1)] = (1));

return statearr_27923;
});
var cljs$core$async$pipeline_STAR__$_state_machine__27442__auto____1 = (function (state_27912){
while(true){
var ret_value__27443__auto__ = (function (){try{while(true){
var result__27444__auto__ = switch__27441__auto__.call(null,state_27912);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27444__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27444__auto__;
}
break;
}
}catch (e27924){if((e27924 instanceof Object)){
var ex__27445__auto__ = e27924;
var statearr_27925_28078 = state_27912;
(statearr_27925_28078[(5)] = ex__27445__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27912);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27924;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27443__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28079 = state_27912;
state_27912 = G__28079;
continue;
} else {
return ret_value__27443__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__27442__auto__ = function(state_27912){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__27442__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__27442__auto____1.call(this,state_27912);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__27442__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__27442__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__27442__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__27442__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__27442__auto__;
})()
;})(__28068,switch__27441__auto__,c__27506__auto___28071,G__27899_28069,n__26217__auto___28067,jobs,results,process,async))
})();
var state__27508__auto__ = (function (){var statearr_27926 = f__27507__auto__.call(null);
(statearr_27926[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27506__auto___28071);

return statearr_27926;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27508__auto__);
});})(__28068,c__27506__auto___28071,G__27899_28069,n__26217__auto___28067,jobs,results,process,async))
);


break;
case "async":
var c__27506__auto___28080 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__28068,c__27506__auto___28080,G__27899_28069,n__26217__auto___28067,jobs,results,process,async){
return (function (){
var f__27507__auto__ = (function (){var switch__27441__auto__ = ((function (__28068,c__27506__auto___28080,G__27899_28069,n__26217__auto___28067,jobs,results,process,async){
return (function (state_27939){
var state_val_27940 = (state_27939[(1)]);
if((state_val_27940 === (1))){
var state_27939__$1 = state_27939;
var statearr_27941_28081 = state_27939__$1;
(statearr_27941_28081[(2)] = null);

(statearr_27941_28081[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27940 === (2))){
var state_27939__$1 = state_27939;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27939__$1,(4),jobs);
} else {
if((state_val_27940 === (3))){
var inst_27937 = (state_27939[(2)]);
var state_27939__$1 = state_27939;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27939__$1,inst_27937);
} else {
if((state_val_27940 === (4))){
var inst_27929 = (state_27939[(2)]);
var inst_27930 = async.call(null,inst_27929);
var state_27939__$1 = state_27939;
if(cljs.core.truth_(inst_27930)){
var statearr_27942_28082 = state_27939__$1;
(statearr_27942_28082[(1)] = (5));

} else {
var statearr_27943_28083 = state_27939__$1;
(statearr_27943_28083[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27940 === (5))){
var state_27939__$1 = state_27939;
var statearr_27944_28084 = state_27939__$1;
(statearr_27944_28084[(2)] = null);

(statearr_27944_28084[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27940 === (6))){
var state_27939__$1 = state_27939;
var statearr_27945_28085 = state_27939__$1;
(statearr_27945_28085[(2)] = null);

(statearr_27945_28085[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27940 === (7))){
var inst_27935 = (state_27939[(2)]);
var state_27939__$1 = state_27939;
var statearr_27946_28086 = state_27939__$1;
(statearr_27946_28086[(2)] = inst_27935);

(statearr_27946_28086[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__28068,c__27506__auto___28080,G__27899_28069,n__26217__auto___28067,jobs,results,process,async))
;
return ((function (__28068,switch__27441__auto__,c__27506__auto___28080,G__27899_28069,n__26217__auto___28067,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__27442__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__27442__auto____0 = (function (){
var statearr_27950 = [null,null,null,null,null,null,null];
(statearr_27950[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__27442__auto__);

(statearr_27950[(1)] = (1));

return statearr_27950;
});
var cljs$core$async$pipeline_STAR__$_state_machine__27442__auto____1 = (function (state_27939){
while(true){
var ret_value__27443__auto__ = (function (){try{while(true){
var result__27444__auto__ = switch__27441__auto__.call(null,state_27939);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27444__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27444__auto__;
}
break;
}
}catch (e27951){if((e27951 instanceof Object)){
var ex__27445__auto__ = e27951;
var statearr_27952_28087 = state_27939;
(statearr_27952_28087[(5)] = ex__27445__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27939);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27951;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27443__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28088 = state_27939;
state_27939 = G__28088;
continue;
} else {
return ret_value__27443__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__27442__auto__ = function(state_27939){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__27442__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__27442__auto____1.call(this,state_27939);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__27442__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__27442__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__27442__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__27442__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__27442__auto__;
})()
;})(__28068,switch__27441__auto__,c__27506__auto___28080,G__27899_28069,n__26217__auto___28067,jobs,results,process,async))
})();
var state__27508__auto__ = (function (){var statearr_27953 = f__27507__auto__.call(null);
(statearr_27953[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27506__auto___28080);

return statearr_27953;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27508__auto__);
});})(__28068,c__27506__auto___28080,G__27899_28069,n__26217__auto___28067,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("No matching clause: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(type)].join('')));

}

var G__28089 = (__28068 + (1));
__28068 = G__28089;
continue;
} else {
}
break;
}

var c__27506__auto___28090 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27506__auto___28090,jobs,results,process,async){
return (function (){
var f__27507__auto__ = (function (){var switch__27441__auto__ = ((function (c__27506__auto___28090,jobs,results,process,async){
return (function (state_27975){
var state_val_27976 = (state_27975[(1)]);
if((state_val_27976 === (1))){
var state_27975__$1 = state_27975;
var statearr_27977_28091 = state_27975__$1;
(statearr_27977_28091[(2)] = null);

(statearr_27977_28091[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27976 === (2))){
var state_27975__$1 = state_27975;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27975__$1,(4),from);
} else {
if((state_val_27976 === (3))){
var inst_27973 = (state_27975[(2)]);
var state_27975__$1 = state_27975;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27975__$1,inst_27973);
} else {
if((state_val_27976 === (4))){
var inst_27956 = (state_27975[(7)]);
var inst_27956__$1 = (state_27975[(2)]);
var inst_27957 = (inst_27956__$1 == null);
var state_27975__$1 = (function (){var statearr_27978 = state_27975;
(statearr_27978[(7)] = inst_27956__$1);

return statearr_27978;
})();
if(cljs.core.truth_(inst_27957)){
var statearr_27979_28092 = state_27975__$1;
(statearr_27979_28092[(1)] = (5));

} else {
var statearr_27980_28093 = state_27975__$1;
(statearr_27980_28093[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27976 === (5))){
var inst_27959 = cljs.core.async.close_BANG_.call(null,jobs);
var state_27975__$1 = state_27975;
var statearr_27981_28094 = state_27975__$1;
(statearr_27981_28094[(2)] = inst_27959);

(statearr_27981_28094[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27976 === (6))){
var inst_27956 = (state_27975[(7)]);
var inst_27961 = (state_27975[(8)]);
var inst_27961__$1 = cljs.core.async.chan.call(null,(1));
var inst_27962 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_27963 = [inst_27956,inst_27961__$1];
var inst_27964 = (new cljs.core.PersistentVector(null,2,(5),inst_27962,inst_27963,null));
var state_27975__$1 = (function (){var statearr_27982 = state_27975;
(statearr_27982[(8)] = inst_27961__$1);

return statearr_27982;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27975__$1,(8),jobs,inst_27964);
} else {
if((state_val_27976 === (7))){
var inst_27971 = (state_27975[(2)]);
var state_27975__$1 = state_27975;
var statearr_27983_28095 = state_27975__$1;
(statearr_27983_28095[(2)] = inst_27971);

(statearr_27983_28095[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27976 === (8))){
var inst_27961 = (state_27975[(8)]);
var inst_27966 = (state_27975[(2)]);
var state_27975__$1 = (function (){var statearr_27984 = state_27975;
(statearr_27984[(9)] = inst_27966);

return statearr_27984;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27975__$1,(9),results,inst_27961);
} else {
if((state_val_27976 === (9))){
var inst_27968 = (state_27975[(2)]);
var state_27975__$1 = (function (){var statearr_27985 = state_27975;
(statearr_27985[(10)] = inst_27968);

return statearr_27985;
})();
var statearr_27986_28096 = state_27975__$1;
(statearr_27986_28096[(2)] = null);

(statearr_27986_28096[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
});})(c__27506__auto___28090,jobs,results,process,async))
;
return ((function (switch__27441__auto__,c__27506__auto___28090,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__27442__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__27442__auto____0 = (function (){
var statearr_27990 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_27990[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__27442__auto__);

(statearr_27990[(1)] = (1));

return statearr_27990;
});
var cljs$core$async$pipeline_STAR__$_state_machine__27442__auto____1 = (function (state_27975){
while(true){
var ret_value__27443__auto__ = (function (){try{while(true){
var result__27444__auto__ = switch__27441__auto__.call(null,state_27975);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27444__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27444__auto__;
}
break;
}
}catch (e27991){if((e27991 instanceof Object)){
var ex__27445__auto__ = e27991;
var statearr_27992_28097 = state_27975;
(statearr_27992_28097[(5)] = ex__27445__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27975);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27991;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27443__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28098 = state_27975;
state_27975 = G__28098;
continue;
} else {
return ret_value__27443__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__27442__auto__ = function(state_27975){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__27442__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__27442__auto____1.call(this,state_27975);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__27442__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__27442__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__27442__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__27442__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__27442__auto__;
})()
;})(switch__27441__auto__,c__27506__auto___28090,jobs,results,process,async))
})();
var state__27508__auto__ = (function (){var statearr_27993 = f__27507__auto__.call(null);
(statearr_27993[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27506__auto___28090);

return statearr_27993;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27508__auto__);
});})(c__27506__auto___28090,jobs,results,process,async))
);


var c__27506__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27506__auto__,jobs,results,process,async){
return (function (){
var f__27507__auto__ = (function (){var switch__27441__auto__ = ((function (c__27506__auto__,jobs,results,process,async){
return (function (state_28031){
var state_val_28032 = (state_28031[(1)]);
if((state_val_28032 === (7))){
var inst_28027 = (state_28031[(2)]);
var state_28031__$1 = state_28031;
var statearr_28033_28099 = state_28031__$1;
(statearr_28033_28099[(2)] = inst_28027);

(statearr_28033_28099[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28032 === (20))){
var state_28031__$1 = state_28031;
var statearr_28034_28100 = state_28031__$1;
(statearr_28034_28100[(2)] = null);

(statearr_28034_28100[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28032 === (1))){
var state_28031__$1 = state_28031;
var statearr_28035_28101 = state_28031__$1;
(statearr_28035_28101[(2)] = null);

(statearr_28035_28101[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28032 === (4))){
var inst_27996 = (state_28031[(7)]);
var inst_27996__$1 = (state_28031[(2)]);
var inst_27997 = (inst_27996__$1 == null);
var state_28031__$1 = (function (){var statearr_28036 = state_28031;
(statearr_28036[(7)] = inst_27996__$1);

return statearr_28036;
})();
if(cljs.core.truth_(inst_27997)){
var statearr_28037_28102 = state_28031__$1;
(statearr_28037_28102[(1)] = (5));

} else {
var statearr_28038_28103 = state_28031__$1;
(statearr_28038_28103[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28032 === (15))){
var inst_28009 = (state_28031[(8)]);
var state_28031__$1 = state_28031;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28031__$1,(18),to,inst_28009);
} else {
if((state_val_28032 === (21))){
var inst_28022 = (state_28031[(2)]);
var state_28031__$1 = state_28031;
var statearr_28039_28104 = state_28031__$1;
(statearr_28039_28104[(2)] = inst_28022);

(statearr_28039_28104[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28032 === (13))){
var inst_28024 = (state_28031[(2)]);
var state_28031__$1 = (function (){var statearr_28040 = state_28031;
(statearr_28040[(9)] = inst_28024);

return statearr_28040;
})();
var statearr_28041_28105 = state_28031__$1;
(statearr_28041_28105[(2)] = null);

(statearr_28041_28105[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28032 === (6))){
var inst_27996 = (state_28031[(7)]);
var state_28031__$1 = state_28031;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28031__$1,(11),inst_27996);
} else {
if((state_val_28032 === (17))){
var inst_28017 = (state_28031[(2)]);
var state_28031__$1 = state_28031;
if(cljs.core.truth_(inst_28017)){
var statearr_28042_28106 = state_28031__$1;
(statearr_28042_28106[(1)] = (19));

} else {
var statearr_28043_28107 = state_28031__$1;
(statearr_28043_28107[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28032 === (3))){
var inst_28029 = (state_28031[(2)]);
var state_28031__$1 = state_28031;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28031__$1,inst_28029);
} else {
if((state_val_28032 === (12))){
var inst_28006 = (state_28031[(10)]);
var state_28031__$1 = state_28031;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28031__$1,(14),inst_28006);
} else {
if((state_val_28032 === (2))){
var state_28031__$1 = state_28031;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28031__$1,(4),results);
} else {
if((state_val_28032 === (19))){
var state_28031__$1 = state_28031;
var statearr_28044_28108 = state_28031__$1;
(statearr_28044_28108[(2)] = null);

(statearr_28044_28108[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28032 === (11))){
var inst_28006 = (state_28031[(2)]);
var state_28031__$1 = (function (){var statearr_28045 = state_28031;
(statearr_28045[(10)] = inst_28006);

return statearr_28045;
})();
var statearr_28046_28109 = state_28031__$1;
(statearr_28046_28109[(2)] = null);

(statearr_28046_28109[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28032 === (9))){
var state_28031__$1 = state_28031;
var statearr_28047_28110 = state_28031__$1;
(statearr_28047_28110[(2)] = null);

(statearr_28047_28110[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28032 === (5))){
var state_28031__$1 = state_28031;
if(cljs.core.truth_(close_QMARK_)){
var statearr_28048_28111 = state_28031__$1;
(statearr_28048_28111[(1)] = (8));

} else {
var statearr_28049_28112 = state_28031__$1;
(statearr_28049_28112[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28032 === (14))){
var inst_28011 = (state_28031[(11)]);
var inst_28009 = (state_28031[(8)]);
var inst_28009__$1 = (state_28031[(2)]);
var inst_28010 = (inst_28009__$1 == null);
var inst_28011__$1 = cljs.core.not.call(null,inst_28010);
var state_28031__$1 = (function (){var statearr_28050 = state_28031;
(statearr_28050[(11)] = inst_28011__$1);

(statearr_28050[(8)] = inst_28009__$1);

return statearr_28050;
})();
if(inst_28011__$1){
var statearr_28051_28113 = state_28031__$1;
(statearr_28051_28113[(1)] = (15));

} else {
var statearr_28052_28114 = state_28031__$1;
(statearr_28052_28114[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28032 === (16))){
var inst_28011 = (state_28031[(11)]);
var state_28031__$1 = state_28031;
var statearr_28053_28115 = state_28031__$1;
(statearr_28053_28115[(2)] = inst_28011);

(statearr_28053_28115[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28032 === (10))){
var inst_28003 = (state_28031[(2)]);
var state_28031__$1 = state_28031;
var statearr_28054_28116 = state_28031__$1;
(statearr_28054_28116[(2)] = inst_28003);

(statearr_28054_28116[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28032 === (18))){
var inst_28014 = (state_28031[(2)]);
var state_28031__$1 = state_28031;
var statearr_28055_28117 = state_28031__$1;
(statearr_28055_28117[(2)] = inst_28014);

(statearr_28055_28117[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28032 === (8))){
var inst_28000 = cljs.core.async.close_BANG_.call(null,to);
var state_28031__$1 = state_28031;
var statearr_28056_28118 = state_28031__$1;
(statearr_28056_28118[(2)] = inst_28000);

(statearr_28056_28118[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__27506__auto__,jobs,results,process,async))
;
return ((function (switch__27441__auto__,c__27506__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__27442__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__27442__auto____0 = (function (){
var statearr_28060 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28060[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__27442__auto__);

(statearr_28060[(1)] = (1));

return statearr_28060;
});
var cljs$core$async$pipeline_STAR__$_state_machine__27442__auto____1 = (function (state_28031){
while(true){
var ret_value__27443__auto__ = (function (){try{while(true){
var result__27444__auto__ = switch__27441__auto__.call(null,state_28031);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27444__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27444__auto__;
}
break;
}
}catch (e28061){if((e28061 instanceof Object)){
var ex__27445__auto__ = e28061;
var statearr_28062_28119 = state_28031;
(statearr_28062_28119[(5)] = ex__27445__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28031);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28061;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27443__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28120 = state_28031;
state_28031 = G__28120;
continue;
} else {
return ret_value__27443__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__27442__auto__ = function(state_28031){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__27442__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__27442__auto____1.call(this,state_28031);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__27442__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__27442__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__27442__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__27442__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__27442__auto__;
})()
;})(switch__27441__auto__,c__27506__auto__,jobs,results,process,async))
})();
var state__27508__auto__ = (function (){var statearr_28063 = f__27507__auto__.call(null);
(statearr_28063[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27506__auto__);

return statearr_28063;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27508__auto__);
});})(c__27506__auto__,jobs,results,process,async))
);

return c__27506__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var args28121 = [];
var len__26407__auto___28124 = arguments.length;
var i__26408__auto___28125 = (0);
while(true){
if((i__26408__auto___28125 < len__26407__auto___28124)){
args28121.push((arguments[i__26408__auto___28125]));

var G__28126 = (i__26408__auto___28125 + (1));
i__26408__auto___28125 = G__28126;
continue;
} else {
}
break;
}

var G__28123 = args28121.length;
switch (G__28123) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args28121.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var args28128 = [];
var len__26407__auto___28131 = arguments.length;
var i__26408__auto___28132 = (0);
while(true){
if((i__26408__auto___28132 < len__26407__auto___28131)){
args28128.push((arguments[i__26408__auto___28132]));

var G__28133 = (i__26408__auto___28132 + (1));
i__26408__auto___28132 = G__28133;
continue;
} else {
}
break;
}

var G__28130 = args28128.length;
switch (G__28130) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args28128.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var args28135 = [];
var len__26407__auto___28188 = arguments.length;
var i__26408__auto___28189 = (0);
while(true){
if((i__26408__auto___28189 < len__26407__auto___28188)){
args28135.push((arguments[i__26408__auto___28189]));

var G__28190 = (i__26408__auto___28189 + (1));
i__26408__auto___28189 = G__28190;
continue;
} else {
}
break;
}

var G__28137 = args28135.length;
switch (G__28137) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args28135.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__27506__auto___28192 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27506__auto___28192,tc,fc){
return (function (){
var f__27507__auto__ = (function (){var switch__27441__auto__ = ((function (c__27506__auto___28192,tc,fc){
return (function (state_28163){
var state_val_28164 = (state_28163[(1)]);
if((state_val_28164 === (7))){
var inst_28159 = (state_28163[(2)]);
var state_28163__$1 = state_28163;
var statearr_28165_28193 = state_28163__$1;
(statearr_28165_28193[(2)] = inst_28159);

(statearr_28165_28193[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28164 === (1))){
var state_28163__$1 = state_28163;
var statearr_28166_28194 = state_28163__$1;
(statearr_28166_28194[(2)] = null);

(statearr_28166_28194[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28164 === (4))){
var inst_28140 = (state_28163[(7)]);
var inst_28140__$1 = (state_28163[(2)]);
var inst_28141 = (inst_28140__$1 == null);
var state_28163__$1 = (function (){var statearr_28167 = state_28163;
(statearr_28167[(7)] = inst_28140__$1);

return statearr_28167;
})();
if(cljs.core.truth_(inst_28141)){
var statearr_28168_28195 = state_28163__$1;
(statearr_28168_28195[(1)] = (5));

} else {
var statearr_28169_28196 = state_28163__$1;
(statearr_28169_28196[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28164 === (13))){
var state_28163__$1 = state_28163;
var statearr_28170_28197 = state_28163__$1;
(statearr_28170_28197[(2)] = null);

(statearr_28170_28197[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28164 === (6))){
var inst_28140 = (state_28163[(7)]);
var inst_28146 = p.call(null,inst_28140);
var state_28163__$1 = state_28163;
if(cljs.core.truth_(inst_28146)){
var statearr_28171_28198 = state_28163__$1;
(statearr_28171_28198[(1)] = (9));

} else {
var statearr_28172_28199 = state_28163__$1;
(statearr_28172_28199[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28164 === (3))){
var inst_28161 = (state_28163[(2)]);
var state_28163__$1 = state_28163;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28163__$1,inst_28161);
} else {
if((state_val_28164 === (12))){
var state_28163__$1 = state_28163;
var statearr_28173_28200 = state_28163__$1;
(statearr_28173_28200[(2)] = null);

(statearr_28173_28200[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28164 === (2))){
var state_28163__$1 = state_28163;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28163__$1,(4),ch);
} else {
if((state_val_28164 === (11))){
var inst_28140 = (state_28163[(7)]);
var inst_28150 = (state_28163[(2)]);
var state_28163__$1 = state_28163;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28163__$1,(8),inst_28150,inst_28140);
} else {
if((state_val_28164 === (9))){
var state_28163__$1 = state_28163;
var statearr_28174_28201 = state_28163__$1;
(statearr_28174_28201[(2)] = tc);

(statearr_28174_28201[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28164 === (5))){
var inst_28143 = cljs.core.async.close_BANG_.call(null,tc);
var inst_28144 = cljs.core.async.close_BANG_.call(null,fc);
var state_28163__$1 = (function (){var statearr_28175 = state_28163;
(statearr_28175[(8)] = inst_28143);

return statearr_28175;
})();
var statearr_28176_28202 = state_28163__$1;
(statearr_28176_28202[(2)] = inst_28144);

(statearr_28176_28202[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28164 === (14))){
var inst_28157 = (state_28163[(2)]);
var state_28163__$1 = state_28163;
var statearr_28177_28203 = state_28163__$1;
(statearr_28177_28203[(2)] = inst_28157);

(statearr_28177_28203[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28164 === (10))){
var state_28163__$1 = state_28163;
var statearr_28178_28204 = state_28163__$1;
(statearr_28178_28204[(2)] = fc);

(statearr_28178_28204[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28164 === (8))){
var inst_28152 = (state_28163[(2)]);
var state_28163__$1 = state_28163;
if(cljs.core.truth_(inst_28152)){
var statearr_28179_28205 = state_28163__$1;
(statearr_28179_28205[(1)] = (12));

} else {
var statearr_28180_28206 = state_28163__$1;
(statearr_28180_28206[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__27506__auto___28192,tc,fc))
;
return ((function (switch__27441__auto__,c__27506__auto___28192,tc,fc){
return (function() {
var cljs$core$async$state_machine__27442__auto__ = null;
var cljs$core$async$state_machine__27442__auto____0 = (function (){
var statearr_28184 = [null,null,null,null,null,null,null,null,null];
(statearr_28184[(0)] = cljs$core$async$state_machine__27442__auto__);

(statearr_28184[(1)] = (1));

return statearr_28184;
});
var cljs$core$async$state_machine__27442__auto____1 = (function (state_28163){
while(true){
var ret_value__27443__auto__ = (function (){try{while(true){
var result__27444__auto__ = switch__27441__auto__.call(null,state_28163);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27444__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27444__auto__;
}
break;
}
}catch (e28185){if((e28185 instanceof Object)){
var ex__27445__auto__ = e28185;
var statearr_28186_28207 = state_28163;
(statearr_28186_28207[(5)] = ex__27445__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28163);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28185;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27443__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28208 = state_28163;
state_28163 = G__28208;
continue;
} else {
return ret_value__27443__auto__;
}
break;
}
});
cljs$core$async$state_machine__27442__auto__ = function(state_28163){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27442__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27442__auto____1.call(this,state_28163);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__27442__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27442__auto____0;
cljs$core$async$state_machine__27442__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27442__auto____1;
return cljs$core$async$state_machine__27442__auto__;
})()
;})(switch__27441__auto__,c__27506__auto___28192,tc,fc))
})();
var state__27508__auto__ = (function (){var statearr_28187 = f__27507__auto__.call(null);
(statearr_28187[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27506__auto___28192);

return statearr_28187;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27508__auto__);
});})(c__27506__auto___28192,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__27506__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27506__auto__){
return (function (){
var f__27507__auto__ = (function (){var switch__27441__auto__ = ((function (c__27506__auto__){
return (function (state_28272){
var state_val_28273 = (state_28272[(1)]);
if((state_val_28273 === (7))){
var inst_28268 = (state_28272[(2)]);
var state_28272__$1 = state_28272;
var statearr_28274_28295 = state_28272__$1;
(statearr_28274_28295[(2)] = inst_28268);

(statearr_28274_28295[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28273 === (1))){
var inst_28252 = init;
var state_28272__$1 = (function (){var statearr_28275 = state_28272;
(statearr_28275[(7)] = inst_28252);

return statearr_28275;
})();
var statearr_28276_28296 = state_28272__$1;
(statearr_28276_28296[(2)] = null);

(statearr_28276_28296[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28273 === (4))){
var inst_28255 = (state_28272[(8)]);
var inst_28255__$1 = (state_28272[(2)]);
var inst_28256 = (inst_28255__$1 == null);
var state_28272__$1 = (function (){var statearr_28277 = state_28272;
(statearr_28277[(8)] = inst_28255__$1);

return statearr_28277;
})();
if(cljs.core.truth_(inst_28256)){
var statearr_28278_28297 = state_28272__$1;
(statearr_28278_28297[(1)] = (5));

} else {
var statearr_28279_28298 = state_28272__$1;
(statearr_28279_28298[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28273 === (6))){
var inst_28259 = (state_28272[(9)]);
var inst_28252 = (state_28272[(7)]);
var inst_28255 = (state_28272[(8)]);
var inst_28259__$1 = f.call(null,inst_28252,inst_28255);
var inst_28260 = cljs.core.reduced_QMARK_.call(null,inst_28259__$1);
var state_28272__$1 = (function (){var statearr_28280 = state_28272;
(statearr_28280[(9)] = inst_28259__$1);

return statearr_28280;
})();
if(inst_28260){
var statearr_28281_28299 = state_28272__$1;
(statearr_28281_28299[(1)] = (8));

} else {
var statearr_28282_28300 = state_28272__$1;
(statearr_28282_28300[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28273 === (3))){
var inst_28270 = (state_28272[(2)]);
var state_28272__$1 = state_28272;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28272__$1,inst_28270);
} else {
if((state_val_28273 === (2))){
var state_28272__$1 = state_28272;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28272__$1,(4),ch);
} else {
if((state_val_28273 === (9))){
var inst_28259 = (state_28272[(9)]);
var inst_28252 = inst_28259;
var state_28272__$1 = (function (){var statearr_28283 = state_28272;
(statearr_28283[(7)] = inst_28252);

return statearr_28283;
})();
var statearr_28284_28301 = state_28272__$1;
(statearr_28284_28301[(2)] = null);

(statearr_28284_28301[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28273 === (5))){
var inst_28252 = (state_28272[(7)]);
var state_28272__$1 = state_28272;
var statearr_28285_28302 = state_28272__$1;
(statearr_28285_28302[(2)] = inst_28252);

(statearr_28285_28302[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28273 === (10))){
var inst_28266 = (state_28272[(2)]);
var state_28272__$1 = state_28272;
var statearr_28286_28303 = state_28272__$1;
(statearr_28286_28303[(2)] = inst_28266);

(statearr_28286_28303[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28273 === (8))){
var inst_28259 = (state_28272[(9)]);
var inst_28262 = cljs.core.deref.call(null,inst_28259);
var state_28272__$1 = state_28272;
var statearr_28287_28304 = state_28272__$1;
(statearr_28287_28304[(2)] = inst_28262);

(statearr_28287_28304[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});})(c__27506__auto__))
;
return ((function (switch__27441__auto__,c__27506__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__27442__auto__ = null;
var cljs$core$async$reduce_$_state_machine__27442__auto____0 = (function (){
var statearr_28291 = [null,null,null,null,null,null,null,null,null,null];
(statearr_28291[(0)] = cljs$core$async$reduce_$_state_machine__27442__auto__);

(statearr_28291[(1)] = (1));

return statearr_28291;
});
var cljs$core$async$reduce_$_state_machine__27442__auto____1 = (function (state_28272){
while(true){
var ret_value__27443__auto__ = (function (){try{while(true){
var result__27444__auto__ = switch__27441__auto__.call(null,state_28272);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27444__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27444__auto__;
}
break;
}
}catch (e28292){if((e28292 instanceof Object)){
var ex__27445__auto__ = e28292;
var statearr_28293_28305 = state_28272;
(statearr_28293_28305[(5)] = ex__27445__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28272);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28292;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27443__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28306 = state_28272;
state_28272 = G__28306;
continue;
} else {
return ret_value__27443__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__27442__auto__ = function(state_28272){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__27442__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__27442__auto____1.call(this,state_28272);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$reduce_$_state_machine__27442__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__27442__auto____0;
cljs$core$async$reduce_$_state_machine__27442__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__27442__auto____1;
return cljs$core$async$reduce_$_state_machine__27442__auto__;
})()
;})(switch__27441__auto__,c__27506__auto__))
})();
var state__27508__auto__ = (function (){var statearr_28294 = f__27507__auto__.call(null);
(statearr_28294[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27506__auto__);

return statearr_28294;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27508__auto__);
});})(c__27506__auto__))
);

return c__27506__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var args28307 = [];
var len__26407__auto___28359 = arguments.length;
var i__26408__auto___28360 = (0);
while(true){
if((i__26408__auto___28360 < len__26407__auto___28359)){
args28307.push((arguments[i__26408__auto___28360]));

var G__28361 = (i__26408__auto___28360 + (1));
i__26408__auto___28360 = G__28361;
continue;
} else {
}
break;
}

var G__28309 = args28307.length;
switch (G__28309) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args28307.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__27506__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27506__auto__){
return (function (){
var f__27507__auto__ = (function (){var switch__27441__auto__ = ((function (c__27506__auto__){
return (function (state_28334){
var state_val_28335 = (state_28334[(1)]);
if((state_val_28335 === (7))){
var inst_28316 = (state_28334[(2)]);
var state_28334__$1 = state_28334;
var statearr_28336_28363 = state_28334__$1;
(statearr_28336_28363[(2)] = inst_28316);

(statearr_28336_28363[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28335 === (1))){
var inst_28310 = cljs.core.seq.call(null,coll);
var inst_28311 = inst_28310;
var state_28334__$1 = (function (){var statearr_28337 = state_28334;
(statearr_28337[(7)] = inst_28311);

return statearr_28337;
})();
var statearr_28338_28364 = state_28334__$1;
(statearr_28338_28364[(2)] = null);

(statearr_28338_28364[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28335 === (4))){
var inst_28311 = (state_28334[(7)]);
var inst_28314 = cljs.core.first.call(null,inst_28311);
var state_28334__$1 = state_28334;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28334__$1,(7),ch,inst_28314);
} else {
if((state_val_28335 === (13))){
var inst_28328 = (state_28334[(2)]);
var state_28334__$1 = state_28334;
var statearr_28339_28365 = state_28334__$1;
(statearr_28339_28365[(2)] = inst_28328);

(statearr_28339_28365[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28335 === (6))){
var inst_28319 = (state_28334[(2)]);
var state_28334__$1 = state_28334;
if(cljs.core.truth_(inst_28319)){
var statearr_28340_28366 = state_28334__$1;
(statearr_28340_28366[(1)] = (8));

} else {
var statearr_28341_28367 = state_28334__$1;
(statearr_28341_28367[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28335 === (3))){
var inst_28332 = (state_28334[(2)]);
var state_28334__$1 = state_28334;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28334__$1,inst_28332);
} else {
if((state_val_28335 === (12))){
var state_28334__$1 = state_28334;
var statearr_28342_28368 = state_28334__$1;
(statearr_28342_28368[(2)] = null);

(statearr_28342_28368[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28335 === (2))){
var inst_28311 = (state_28334[(7)]);
var state_28334__$1 = state_28334;
if(cljs.core.truth_(inst_28311)){
var statearr_28343_28369 = state_28334__$1;
(statearr_28343_28369[(1)] = (4));

} else {
var statearr_28344_28370 = state_28334__$1;
(statearr_28344_28370[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28335 === (11))){
var inst_28325 = cljs.core.async.close_BANG_.call(null,ch);
var state_28334__$1 = state_28334;
var statearr_28345_28371 = state_28334__$1;
(statearr_28345_28371[(2)] = inst_28325);

(statearr_28345_28371[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28335 === (9))){
var state_28334__$1 = state_28334;
if(cljs.core.truth_(close_QMARK_)){
var statearr_28346_28372 = state_28334__$1;
(statearr_28346_28372[(1)] = (11));

} else {
var statearr_28347_28373 = state_28334__$1;
(statearr_28347_28373[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28335 === (5))){
var inst_28311 = (state_28334[(7)]);
var state_28334__$1 = state_28334;
var statearr_28348_28374 = state_28334__$1;
(statearr_28348_28374[(2)] = inst_28311);

(statearr_28348_28374[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28335 === (10))){
var inst_28330 = (state_28334[(2)]);
var state_28334__$1 = state_28334;
var statearr_28349_28375 = state_28334__$1;
(statearr_28349_28375[(2)] = inst_28330);

(statearr_28349_28375[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28335 === (8))){
var inst_28311 = (state_28334[(7)]);
var inst_28321 = cljs.core.next.call(null,inst_28311);
var inst_28311__$1 = inst_28321;
var state_28334__$1 = (function (){var statearr_28350 = state_28334;
(statearr_28350[(7)] = inst_28311__$1);

return statearr_28350;
})();
var statearr_28351_28376 = state_28334__$1;
(statearr_28351_28376[(2)] = null);

(statearr_28351_28376[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__27506__auto__))
;
return ((function (switch__27441__auto__,c__27506__auto__){
return (function() {
var cljs$core$async$state_machine__27442__auto__ = null;
var cljs$core$async$state_machine__27442__auto____0 = (function (){
var statearr_28355 = [null,null,null,null,null,null,null,null];
(statearr_28355[(0)] = cljs$core$async$state_machine__27442__auto__);

(statearr_28355[(1)] = (1));

return statearr_28355;
});
var cljs$core$async$state_machine__27442__auto____1 = (function (state_28334){
while(true){
var ret_value__27443__auto__ = (function (){try{while(true){
var result__27444__auto__ = switch__27441__auto__.call(null,state_28334);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27444__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27444__auto__;
}
break;
}
}catch (e28356){if((e28356 instanceof Object)){
var ex__27445__auto__ = e28356;
var statearr_28357_28377 = state_28334;
(statearr_28357_28377[(5)] = ex__27445__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28334);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28356;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27443__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28378 = state_28334;
state_28334 = G__28378;
continue;
} else {
return ret_value__27443__auto__;
}
break;
}
});
cljs$core$async$state_machine__27442__auto__ = function(state_28334){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27442__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27442__auto____1.call(this,state_28334);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__27442__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27442__auto____0;
cljs$core$async$state_machine__27442__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27442__auto____1;
return cljs$core$async$state_machine__27442__auto__;
})()
;})(switch__27441__auto__,c__27506__auto__))
})();
var state__27508__auto__ = (function (){var statearr_28358 = f__27507__auto__.call(null);
(statearr_28358[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27506__auto__);

return statearr_28358;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27508__auto__);
});})(c__27506__auto__))
);

return c__27506__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__25962__auto__ = (((_ == null))?null:_);
var m__25963__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__25962__auto__)]);
if(!((m__25963__auto__ == null))){
return m__25963__auto__.call(null,_);
} else {
var m__25963__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__25963__auto____$1 == null))){
return m__25963__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__25962__auto__ = (((m == null))?null:m);
var m__25963__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__25962__auto__)]);
if(!((m__25963__auto__ == null))){
return m__25963__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__25963__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__25963__auto____$1 == null))){
return m__25963__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__25962__auto__ = (((m == null))?null:m);
var m__25963__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__25962__auto__)]);
if(!((m__25963__auto__ == null))){
return m__25963__auto__.call(null,m,ch);
} else {
var m__25963__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__25963__auto____$1 == null))){
return m__25963__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__25962__auto__ = (((m == null))?null:m);
var m__25963__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__25962__auto__)]);
if(!((m__25963__auto__ == null))){
return m__25963__auto__.call(null,m);
} else {
var m__25963__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__25963__auto____$1 == null))){
return m__25963__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async28604 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28604 = (function (ch,cs,meta28605){
this.ch = ch;
this.cs = cs;
this.meta28605 = meta28605;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async28604.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_28606,meta28605__$1){
var self__ = this;
var _28606__$1 = this;
return (new cljs.core.async.t_cljs$core$async28604(self__.ch,self__.cs,meta28605__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async28604.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_28606){
var self__ = this;
var _28606__$1 = this;
return self__.meta28605;
});})(cs))
;

cljs.core.async.t_cljs$core$async28604.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async28604.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async28604.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async28604.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async28604.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async28604.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async28604.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta28605","meta28605",-234209597,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async28604.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async28604.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28604";

cljs.core.async.t_cljs$core$async28604.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__25905__auto__,writer__25906__auto__,opt__25907__auto__){
return cljs.core._write.call(null,writer__25906__auto__,"cljs.core.async/t_cljs$core$async28604");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async28604 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async28604(ch__$1,cs__$1,meta28605){
return (new cljs.core.async.t_cljs$core$async28604(ch__$1,cs__$1,meta28605));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async28604(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__27506__auto___28829 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27506__auto___28829,cs,m,dchan,dctr,done){
return (function (){
var f__27507__auto__ = (function (){var switch__27441__auto__ = ((function (c__27506__auto___28829,cs,m,dchan,dctr,done){
return (function (state_28741){
var state_val_28742 = (state_28741[(1)]);
if((state_val_28742 === (7))){
var inst_28737 = (state_28741[(2)]);
var state_28741__$1 = state_28741;
var statearr_28743_28830 = state_28741__$1;
(statearr_28743_28830[(2)] = inst_28737);

(statearr_28743_28830[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28742 === (20))){
var inst_28640 = (state_28741[(7)]);
var inst_28652 = cljs.core.first.call(null,inst_28640);
var inst_28653 = cljs.core.nth.call(null,inst_28652,(0),null);
var inst_28654 = cljs.core.nth.call(null,inst_28652,(1),null);
var state_28741__$1 = (function (){var statearr_28744 = state_28741;
(statearr_28744[(8)] = inst_28653);

return statearr_28744;
})();
if(cljs.core.truth_(inst_28654)){
var statearr_28745_28831 = state_28741__$1;
(statearr_28745_28831[(1)] = (22));

} else {
var statearr_28746_28832 = state_28741__$1;
(statearr_28746_28832[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28742 === (27))){
var inst_28609 = (state_28741[(9)]);
var inst_28689 = (state_28741[(10)]);
var inst_28684 = (state_28741[(11)]);
var inst_28682 = (state_28741[(12)]);
var inst_28689__$1 = cljs.core._nth.call(null,inst_28682,inst_28684);
var inst_28690 = cljs.core.async.put_BANG_.call(null,inst_28689__$1,inst_28609,done);
var state_28741__$1 = (function (){var statearr_28747 = state_28741;
(statearr_28747[(10)] = inst_28689__$1);

return statearr_28747;
})();
if(cljs.core.truth_(inst_28690)){
var statearr_28748_28833 = state_28741__$1;
(statearr_28748_28833[(1)] = (30));

} else {
var statearr_28749_28834 = state_28741__$1;
(statearr_28749_28834[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28742 === (1))){
var state_28741__$1 = state_28741;
var statearr_28750_28835 = state_28741__$1;
(statearr_28750_28835[(2)] = null);

(statearr_28750_28835[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28742 === (24))){
var inst_28640 = (state_28741[(7)]);
var inst_28659 = (state_28741[(2)]);
var inst_28660 = cljs.core.next.call(null,inst_28640);
var inst_28618 = inst_28660;
var inst_28619 = null;
var inst_28620 = (0);
var inst_28621 = (0);
var state_28741__$1 = (function (){var statearr_28751 = state_28741;
(statearr_28751[(13)] = inst_28659);

(statearr_28751[(14)] = inst_28620);

(statearr_28751[(15)] = inst_28621);

(statearr_28751[(16)] = inst_28619);

(statearr_28751[(17)] = inst_28618);

return statearr_28751;
})();
var statearr_28752_28836 = state_28741__$1;
(statearr_28752_28836[(2)] = null);

(statearr_28752_28836[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28742 === (39))){
var state_28741__$1 = state_28741;
var statearr_28756_28837 = state_28741__$1;
(statearr_28756_28837[(2)] = null);

(statearr_28756_28837[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28742 === (4))){
var inst_28609 = (state_28741[(9)]);
var inst_28609__$1 = (state_28741[(2)]);
var inst_28610 = (inst_28609__$1 == null);
var state_28741__$1 = (function (){var statearr_28757 = state_28741;
(statearr_28757[(9)] = inst_28609__$1);

return statearr_28757;
})();
if(cljs.core.truth_(inst_28610)){
var statearr_28758_28838 = state_28741__$1;
(statearr_28758_28838[(1)] = (5));

} else {
var statearr_28759_28839 = state_28741__$1;
(statearr_28759_28839[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28742 === (15))){
var inst_28620 = (state_28741[(14)]);
var inst_28621 = (state_28741[(15)]);
var inst_28619 = (state_28741[(16)]);
var inst_28618 = (state_28741[(17)]);
var inst_28636 = (state_28741[(2)]);
var inst_28637 = (inst_28621 + (1));
var tmp28753 = inst_28620;
var tmp28754 = inst_28619;
var tmp28755 = inst_28618;
var inst_28618__$1 = tmp28755;
var inst_28619__$1 = tmp28754;
var inst_28620__$1 = tmp28753;
var inst_28621__$1 = inst_28637;
var state_28741__$1 = (function (){var statearr_28760 = state_28741;
(statearr_28760[(14)] = inst_28620__$1);

(statearr_28760[(18)] = inst_28636);

(statearr_28760[(15)] = inst_28621__$1);

(statearr_28760[(16)] = inst_28619__$1);

(statearr_28760[(17)] = inst_28618__$1);

return statearr_28760;
})();
var statearr_28761_28840 = state_28741__$1;
(statearr_28761_28840[(2)] = null);

(statearr_28761_28840[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28742 === (21))){
var inst_28663 = (state_28741[(2)]);
var state_28741__$1 = state_28741;
var statearr_28765_28841 = state_28741__$1;
(statearr_28765_28841[(2)] = inst_28663);

(statearr_28765_28841[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28742 === (31))){
var inst_28689 = (state_28741[(10)]);
var inst_28693 = done.call(null,null);
var inst_28694 = cljs.core.async.untap_STAR_.call(null,m,inst_28689);
var state_28741__$1 = (function (){var statearr_28766 = state_28741;
(statearr_28766[(19)] = inst_28693);

return statearr_28766;
})();
var statearr_28767_28842 = state_28741__$1;
(statearr_28767_28842[(2)] = inst_28694);

(statearr_28767_28842[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28742 === (32))){
var inst_28681 = (state_28741[(20)]);
var inst_28684 = (state_28741[(11)]);
var inst_28682 = (state_28741[(12)]);
var inst_28683 = (state_28741[(21)]);
var inst_28696 = (state_28741[(2)]);
var inst_28697 = (inst_28684 + (1));
var tmp28762 = inst_28681;
var tmp28763 = inst_28682;
var tmp28764 = inst_28683;
var inst_28681__$1 = tmp28762;
var inst_28682__$1 = tmp28763;
var inst_28683__$1 = tmp28764;
var inst_28684__$1 = inst_28697;
var state_28741__$1 = (function (){var statearr_28768 = state_28741;
(statearr_28768[(20)] = inst_28681__$1);

(statearr_28768[(22)] = inst_28696);

(statearr_28768[(11)] = inst_28684__$1);

(statearr_28768[(12)] = inst_28682__$1);

(statearr_28768[(21)] = inst_28683__$1);

return statearr_28768;
})();
var statearr_28769_28843 = state_28741__$1;
(statearr_28769_28843[(2)] = null);

(statearr_28769_28843[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28742 === (40))){
var inst_28709 = (state_28741[(23)]);
var inst_28713 = done.call(null,null);
var inst_28714 = cljs.core.async.untap_STAR_.call(null,m,inst_28709);
var state_28741__$1 = (function (){var statearr_28770 = state_28741;
(statearr_28770[(24)] = inst_28713);

return statearr_28770;
})();
var statearr_28771_28844 = state_28741__$1;
(statearr_28771_28844[(2)] = inst_28714);

(statearr_28771_28844[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28742 === (33))){
var inst_28700 = (state_28741[(25)]);
var inst_28702 = cljs.core.chunked_seq_QMARK_.call(null,inst_28700);
var state_28741__$1 = state_28741;
if(inst_28702){
var statearr_28772_28845 = state_28741__$1;
(statearr_28772_28845[(1)] = (36));

} else {
var statearr_28773_28846 = state_28741__$1;
(statearr_28773_28846[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28742 === (13))){
var inst_28630 = (state_28741[(26)]);
var inst_28633 = cljs.core.async.close_BANG_.call(null,inst_28630);
var state_28741__$1 = state_28741;
var statearr_28774_28847 = state_28741__$1;
(statearr_28774_28847[(2)] = inst_28633);

(statearr_28774_28847[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28742 === (22))){
var inst_28653 = (state_28741[(8)]);
var inst_28656 = cljs.core.async.close_BANG_.call(null,inst_28653);
var state_28741__$1 = state_28741;
var statearr_28775_28848 = state_28741__$1;
(statearr_28775_28848[(2)] = inst_28656);

(statearr_28775_28848[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28742 === (36))){
var inst_28700 = (state_28741[(25)]);
var inst_28704 = cljs.core.chunk_first.call(null,inst_28700);
var inst_28705 = cljs.core.chunk_rest.call(null,inst_28700);
var inst_28706 = cljs.core.count.call(null,inst_28704);
var inst_28681 = inst_28705;
var inst_28682 = inst_28704;
var inst_28683 = inst_28706;
var inst_28684 = (0);
var state_28741__$1 = (function (){var statearr_28776 = state_28741;
(statearr_28776[(20)] = inst_28681);

(statearr_28776[(11)] = inst_28684);

(statearr_28776[(12)] = inst_28682);

(statearr_28776[(21)] = inst_28683);

return statearr_28776;
})();
var statearr_28777_28849 = state_28741__$1;
(statearr_28777_28849[(2)] = null);

(statearr_28777_28849[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28742 === (41))){
var inst_28700 = (state_28741[(25)]);
var inst_28716 = (state_28741[(2)]);
var inst_28717 = cljs.core.next.call(null,inst_28700);
var inst_28681 = inst_28717;
var inst_28682 = null;
var inst_28683 = (0);
var inst_28684 = (0);
var state_28741__$1 = (function (){var statearr_28778 = state_28741;
(statearr_28778[(20)] = inst_28681);

(statearr_28778[(11)] = inst_28684);

(statearr_28778[(27)] = inst_28716);

(statearr_28778[(12)] = inst_28682);

(statearr_28778[(21)] = inst_28683);

return statearr_28778;
})();
var statearr_28779_28850 = state_28741__$1;
(statearr_28779_28850[(2)] = null);

(statearr_28779_28850[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28742 === (43))){
var state_28741__$1 = state_28741;
var statearr_28780_28851 = state_28741__$1;
(statearr_28780_28851[(2)] = null);

(statearr_28780_28851[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28742 === (29))){
var inst_28725 = (state_28741[(2)]);
var state_28741__$1 = state_28741;
var statearr_28781_28852 = state_28741__$1;
(statearr_28781_28852[(2)] = inst_28725);

(statearr_28781_28852[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28742 === (44))){
var inst_28734 = (state_28741[(2)]);
var state_28741__$1 = (function (){var statearr_28782 = state_28741;
(statearr_28782[(28)] = inst_28734);

return statearr_28782;
})();
var statearr_28783_28853 = state_28741__$1;
(statearr_28783_28853[(2)] = null);

(statearr_28783_28853[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28742 === (6))){
var inst_28673 = (state_28741[(29)]);
var inst_28672 = cljs.core.deref.call(null,cs);
var inst_28673__$1 = cljs.core.keys.call(null,inst_28672);
var inst_28674 = cljs.core.count.call(null,inst_28673__$1);
var inst_28675 = cljs.core.reset_BANG_.call(null,dctr,inst_28674);
var inst_28680 = cljs.core.seq.call(null,inst_28673__$1);
var inst_28681 = inst_28680;
var inst_28682 = null;
var inst_28683 = (0);
var inst_28684 = (0);
var state_28741__$1 = (function (){var statearr_28784 = state_28741;
(statearr_28784[(29)] = inst_28673__$1);

(statearr_28784[(30)] = inst_28675);

(statearr_28784[(20)] = inst_28681);

(statearr_28784[(11)] = inst_28684);

(statearr_28784[(12)] = inst_28682);

(statearr_28784[(21)] = inst_28683);

return statearr_28784;
})();
var statearr_28785_28854 = state_28741__$1;
(statearr_28785_28854[(2)] = null);

(statearr_28785_28854[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28742 === (28))){
var inst_28700 = (state_28741[(25)]);
var inst_28681 = (state_28741[(20)]);
var inst_28700__$1 = cljs.core.seq.call(null,inst_28681);
var state_28741__$1 = (function (){var statearr_28786 = state_28741;
(statearr_28786[(25)] = inst_28700__$1);

return statearr_28786;
})();
if(inst_28700__$1){
var statearr_28787_28855 = state_28741__$1;
(statearr_28787_28855[(1)] = (33));

} else {
var statearr_28788_28856 = state_28741__$1;
(statearr_28788_28856[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28742 === (25))){
var inst_28684 = (state_28741[(11)]);
var inst_28683 = (state_28741[(21)]);
var inst_28686 = (inst_28684 < inst_28683);
var inst_28687 = inst_28686;
var state_28741__$1 = state_28741;
if(cljs.core.truth_(inst_28687)){
var statearr_28789_28857 = state_28741__$1;
(statearr_28789_28857[(1)] = (27));

} else {
var statearr_28790_28858 = state_28741__$1;
(statearr_28790_28858[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28742 === (34))){
var state_28741__$1 = state_28741;
var statearr_28791_28859 = state_28741__$1;
(statearr_28791_28859[(2)] = null);

(statearr_28791_28859[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28742 === (17))){
var state_28741__$1 = state_28741;
var statearr_28792_28860 = state_28741__$1;
(statearr_28792_28860[(2)] = null);

(statearr_28792_28860[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28742 === (3))){
var inst_28739 = (state_28741[(2)]);
var state_28741__$1 = state_28741;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28741__$1,inst_28739);
} else {
if((state_val_28742 === (12))){
var inst_28668 = (state_28741[(2)]);
var state_28741__$1 = state_28741;
var statearr_28793_28861 = state_28741__$1;
(statearr_28793_28861[(2)] = inst_28668);

(statearr_28793_28861[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28742 === (2))){
var state_28741__$1 = state_28741;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28741__$1,(4),ch);
} else {
if((state_val_28742 === (23))){
var state_28741__$1 = state_28741;
var statearr_28794_28862 = state_28741__$1;
(statearr_28794_28862[(2)] = null);

(statearr_28794_28862[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28742 === (35))){
var inst_28723 = (state_28741[(2)]);
var state_28741__$1 = state_28741;
var statearr_28795_28863 = state_28741__$1;
(statearr_28795_28863[(2)] = inst_28723);

(statearr_28795_28863[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28742 === (19))){
var inst_28640 = (state_28741[(7)]);
var inst_28644 = cljs.core.chunk_first.call(null,inst_28640);
var inst_28645 = cljs.core.chunk_rest.call(null,inst_28640);
var inst_28646 = cljs.core.count.call(null,inst_28644);
var inst_28618 = inst_28645;
var inst_28619 = inst_28644;
var inst_28620 = inst_28646;
var inst_28621 = (0);
var state_28741__$1 = (function (){var statearr_28796 = state_28741;
(statearr_28796[(14)] = inst_28620);

(statearr_28796[(15)] = inst_28621);

(statearr_28796[(16)] = inst_28619);

(statearr_28796[(17)] = inst_28618);

return statearr_28796;
})();
var statearr_28797_28864 = state_28741__$1;
(statearr_28797_28864[(2)] = null);

(statearr_28797_28864[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28742 === (11))){
var inst_28640 = (state_28741[(7)]);
var inst_28618 = (state_28741[(17)]);
var inst_28640__$1 = cljs.core.seq.call(null,inst_28618);
var state_28741__$1 = (function (){var statearr_28798 = state_28741;
(statearr_28798[(7)] = inst_28640__$1);

return statearr_28798;
})();
if(inst_28640__$1){
var statearr_28799_28865 = state_28741__$1;
(statearr_28799_28865[(1)] = (16));

} else {
var statearr_28800_28866 = state_28741__$1;
(statearr_28800_28866[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28742 === (9))){
var inst_28670 = (state_28741[(2)]);
var state_28741__$1 = state_28741;
var statearr_28801_28867 = state_28741__$1;
(statearr_28801_28867[(2)] = inst_28670);

(statearr_28801_28867[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28742 === (5))){
var inst_28616 = cljs.core.deref.call(null,cs);
var inst_28617 = cljs.core.seq.call(null,inst_28616);
var inst_28618 = inst_28617;
var inst_28619 = null;
var inst_28620 = (0);
var inst_28621 = (0);
var state_28741__$1 = (function (){var statearr_28802 = state_28741;
(statearr_28802[(14)] = inst_28620);

(statearr_28802[(15)] = inst_28621);

(statearr_28802[(16)] = inst_28619);

(statearr_28802[(17)] = inst_28618);

return statearr_28802;
})();
var statearr_28803_28868 = state_28741__$1;
(statearr_28803_28868[(2)] = null);

(statearr_28803_28868[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28742 === (14))){
var state_28741__$1 = state_28741;
var statearr_28804_28869 = state_28741__$1;
(statearr_28804_28869[(2)] = null);

(statearr_28804_28869[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28742 === (45))){
var inst_28731 = (state_28741[(2)]);
var state_28741__$1 = state_28741;
var statearr_28805_28870 = state_28741__$1;
(statearr_28805_28870[(2)] = inst_28731);

(statearr_28805_28870[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28742 === (26))){
var inst_28673 = (state_28741[(29)]);
var inst_28727 = (state_28741[(2)]);
var inst_28728 = cljs.core.seq.call(null,inst_28673);
var state_28741__$1 = (function (){var statearr_28806 = state_28741;
(statearr_28806[(31)] = inst_28727);

return statearr_28806;
})();
if(inst_28728){
var statearr_28807_28871 = state_28741__$1;
(statearr_28807_28871[(1)] = (42));

} else {
var statearr_28808_28872 = state_28741__$1;
(statearr_28808_28872[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28742 === (16))){
var inst_28640 = (state_28741[(7)]);
var inst_28642 = cljs.core.chunked_seq_QMARK_.call(null,inst_28640);
var state_28741__$1 = state_28741;
if(inst_28642){
var statearr_28809_28873 = state_28741__$1;
(statearr_28809_28873[(1)] = (19));

} else {
var statearr_28810_28874 = state_28741__$1;
(statearr_28810_28874[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28742 === (38))){
var inst_28720 = (state_28741[(2)]);
var state_28741__$1 = state_28741;
var statearr_28811_28875 = state_28741__$1;
(statearr_28811_28875[(2)] = inst_28720);

(statearr_28811_28875[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28742 === (30))){
var state_28741__$1 = state_28741;
var statearr_28812_28876 = state_28741__$1;
(statearr_28812_28876[(2)] = null);

(statearr_28812_28876[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28742 === (10))){
var inst_28621 = (state_28741[(15)]);
var inst_28619 = (state_28741[(16)]);
var inst_28629 = cljs.core._nth.call(null,inst_28619,inst_28621);
var inst_28630 = cljs.core.nth.call(null,inst_28629,(0),null);
var inst_28631 = cljs.core.nth.call(null,inst_28629,(1),null);
var state_28741__$1 = (function (){var statearr_28813 = state_28741;
(statearr_28813[(26)] = inst_28630);

return statearr_28813;
})();
if(cljs.core.truth_(inst_28631)){
var statearr_28814_28877 = state_28741__$1;
(statearr_28814_28877[(1)] = (13));

} else {
var statearr_28815_28878 = state_28741__$1;
(statearr_28815_28878[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28742 === (18))){
var inst_28666 = (state_28741[(2)]);
var state_28741__$1 = state_28741;
var statearr_28816_28879 = state_28741__$1;
(statearr_28816_28879[(2)] = inst_28666);

(statearr_28816_28879[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28742 === (42))){
var state_28741__$1 = state_28741;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28741__$1,(45),dchan);
} else {
if((state_val_28742 === (37))){
var inst_28709 = (state_28741[(23)]);
var inst_28609 = (state_28741[(9)]);
var inst_28700 = (state_28741[(25)]);
var inst_28709__$1 = cljs.core.first.call(null,inst_28700);
var inst_28710 = cljs.core.async.put_BANG_.call(null,inst_28709__$1,inst_28609,done);
var state_28741__$1 = (function (){var statearr_28817 = state_28741;
(statearr_28817[(23)] = inst_28709__$1);

return statearr_28817;
})();
if(cljs.core.truth_(inst_28710)){
var statearr_28818_28880 = state_28741__$1;
(statearr_28818_28880[(1)] = (39));

} else {
var statearr_28819_28881 = state_28741__$1;
(statearr_28819_28881[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28742 === (8))){
var inst_28620 = (state_28741[(14)]);
var inst_28621 = (state_28741[(15)]);
var inst_28623 = (inst_28621 < inst_28620);
var inst_28624 = inst_28623;
var state_28741__$1 = state_28741;
if(cljs.core.truth_(inst_28624)){
var statearr_28820_28882 = state_28741__$1;
(statearr_28820_28882[(1)] = (10));

} else {
var statearr_28821_28883 = state_28741__$1;
(statearr_28821_28883[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__27506__auto___28829,cs,m,dchan,dctr,done))
;
return ((function (switch__27441__auto__,c__27506__auto___28829,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__27442__auto__ = null;
var cljs$core$async$mult_$_state_machine__27442__auto____0 = (function (){
var statearr_28825 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28825[(0)] = cljs$core$async$mult_$_state_machine__27442__auto__);

(statearr_28825[(1)] = (1));

return statearr_28825;
});
var cljs$core$async$mult_$_state_machine__27442__auto____1 = (function (state_28741){
while(true){
var ret_value__27443__auto__ = (function (){try{while(true){
var result__27444__auto__ = switch__27441__auto__.call(null,state_28741);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27444__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27444__auto__;
}
break;
}
}catch (e28826){if((e28826 instanceof Object)){
var ex__27445__auto__ = e28826;
var statearr_28827_28884 = state_28741;
(statearr_28827_28884[(5)] = ex__27445__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28741);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28826;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27443__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28885 = state_28741;
state_28741 = G__28885;
continue;
} else {
return ret_value__27443__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__27442__auto__ = function(state_28741){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__27442__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__27442__auto____1.call(this,state_28741);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mult_$_state_machine__27442__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__27442__auto____0;
cljs$core$async$mult_$_state_machine__27442__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__27442__auto____1;
return cljs$core$async$mult_$_state_machine__27442__auto__;
})()
;})(switch__27441__auto__,c__27506__auto___28829,cs,m,dchan,dctr,done))
})();
var state__27508__auto__ = (function (){var statearr_28828 = f__27507__auto__.call(null);
(statearr_28828[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27506__auto___28829);

return statearr_28828;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27508__auto__);
});})(c__27506__auto___28829,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var args28886 = [];
var len__26407__auto___28889 = arguments.length;
var i__26408__auto___28890 = (0);
while(true){
if((i__26408__auto___28890 < len__26407__auto___28889)){
args28886.push((arguments[i__26408__auto___28890]));

var G__28891 = (i__26408__auto___28890 + (1));
i__26408__auto___28890 = G__28891;
continue;
} else {
}
break;
}

var G__28888 = args28886.length;
switch (G__28888) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args28886.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__25962__auto__ = (((m == null))?null:m);
var m__25963__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__25962__auto__)]);
if(!((m__25963__auto__ == null))){
return m__25963__auto__.call(null,m,ch);
} else {
var m__25963__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__25963__auto____$1 == null))){
return m__25963__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__25962__auto__ = (((m == null))?null:m);
var m__25963__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__25962__auto__)]);
if(!((m__25963__auto__ == null))){
return m__25963__auto__.call(null,m,ch);
} else {
var m__25963__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__25963__auto____$1 == null))){
return m__25963__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__25962__auto__ = (((m == null))?null:m);
var m__25963__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__25962__auto__)]);
if(!((m__25963__auto__ == null))){
return m__25963__auto__.call(null,m);
} else {
var m__25963__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__25963__auto____$1 == null))){
return m__25963__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__25962__auto__ = (((m == null))?null:m);
var m__25963__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__25962__auto__)]);
if(!((m__25963__auto__ == null))){
return m__25963__auto__.call(null,m,state_map);
} else {
var m__25963__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__25963__auto____$1 == null))){
return m__25963__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__25962__auto__ = (((m == null))?null:m);
var m__25963__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__25962__auto__)]);
if(!((m__25963__auto__ == null))){
return m__25963__auto__.call(null,m,mode);
} else {
var m__25963__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__25963__auto____$1 == null))){
return m__25963__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__26414__auto__ = [];
var len__26407__auto___28903 = arguments.length;
var i__26408__auto___28904 = (0);
while(true){
if((i__26408__auto___28904 < len__26407__auto___28903)){
args__26414__auto__.push((arguments[i__26408__auto___28904]));

var G__28905 = (i__26408__auto___28904 + (1));
i__26408__auto___28904 = G__28905;
continue;
} else {
}
break;
}

var argseq__26415__auto__ = ((((3) < args__26414__auto__.length))?(new cljs.core.IndexedSeq(args__26414__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__26415__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__28897){
var map__28898 = p__28897;
var map__28898__$1 = ((((!((map__28898 == null)))?((((map__28898.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28898.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28898):map__28898);
var opts = map__28898__$1;
var statearr_28900_28906 = state;
(statearr_28900_28906[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4657__auto__ = cljs.core.async.do_alts.call(null,((function (map__28898,map__28898__$1,opts){
return (function (val){
var statearr_28901_28907 = state;
(statearr_28901_28907[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__28898,map__28898__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4657__auto__)){
var cb = temp__4657__auto__;
var statearr_28902_28908 = state;
(statearr_28902_28908[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq28893){
var G__28894 = cljs.core.first.call(null,seq28893);
var seq28893__$1 = cljs.core.next.call(null,seq28893);
var G__28895 = cljs.core.first.call(null,seq28893__$1);
var seq28893__$2 = cljs.core.next.call(null,seq28893__$1);
var G__28896 = cljs.core.first.call(null,seq28893__$2);
var seq28893__$3 = cljs.core.next.call(null,seq28893__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__28894,G__28895,G__28896,seq28893__$3);
});

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async29076 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29076 = (function (out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,meta29077){
this.out = out;
this.cs = cs;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.solo_mode = solo_mode;
this.change = change;
this.changed = changed;
this.pick = pick;
this.calc_state = calc_state;
this.meta29077 = meta29077;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async29076.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_29078,meta29077__$1){
var self__ = this;
var _29078__$1 = this;
return (new cljs.core.async.t_cljs$core$async29076(self__.out,self__.cs,self__.solo_modes,self__.attrs,self__.solo_mode,self__.change,self__.changed,self__.pick,self__.calc_state,meta29077__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async29076.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_29078){
var self__ = this;
var _29078__$1 = this;
return self__.meta29077;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async29076.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async29076.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async29076.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async29076.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async29076.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async29076.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async29076.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async29076.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("mode must be one of: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(solo-modes mode)")].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async29076.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"meta29077","meta29077",-1499021459,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async29076.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async29076.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29076";

cljs.core.async.t_cljs$core$async29076.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__25905__auto__,writer__25906__auto__,opt__25907__auto__){
return cljs.core._write.call(null,writer__25906__auto__,"cljs.core.async/t_cljs$core$async29076");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async29076 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async29076(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta29077){
return (new cljs.core.async.t_cljs$core$async29076(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta29077));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async29076(out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__27506__auto___29243 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27506__auto___29243,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__27507__auto__ = (function (){var switch__27441__auto__ = ((function (c__27506__auto___29243,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_29180){
var state_val_29181 = (state_29180[(1)]);
if((state_val_29181 === (7))){
var inst_29095 = (state_29180[(2)]);
var state_29180__$1 = state_29180;
var statearr_29182_29244 = state_29180__$1;
(statearr_29182_29244[(2)] = inst_29095);

(statearr_29182_29244[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29181 === (20))){
var inst_29107 = (state_29180[(7)]);
var state_29180__$1 = state_29180;
var statearr_29183_29245 = state_29180__$1;
(statearr_29183_29245[(2)] = inst_29107);

(statearr_29183_29245[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29181 === (27))){
var state_29180__$1 = state_29180;
var statearr_29184_29246 = state_29180__$1;
(statearr_29184_29246[(2)] = null);

(statearr_29184_29246[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29181 === (1))){
var inst_29082 = (state_29180[(8)]);
var inst_29082__$1 = calc_state.call(null);
var inst_29084 = (inst_29082__$1 == null);
var inst_29085 = cljs.core.not.call(null,inst_29084);
var state_29180__$1 = (function (){var statearr_29185 = state_29180;
(statearr_29185[(8)] = inst_29082__$1);

return statearr_29185;
})();
if(inst_29085){
var statearr_29186_29247 = state_29180__$1;
(statearr_29186_29247[(1)] = (2));

} else {
var statearr_29187_29248 = state_29180__$1;
(statearr_29187_29248[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29181 === (24))){
var inst_29140 = (state_29180[(9)]);
var inst_29131 = (state_29180[(10)]);
var inst_29154 = (state_29180[(11)]);
var inst_29154__$1 = inst_29131.call(null,inst_29140);
var state_29180__$1 = (function (){var statearr_29188 = state_29180;
(statearr_29188[(11)] = inst_29154__$1);

return statearr_29188;
})();
if(cljs.core.truth_(inst_29154__$1)){
var statearr_29189_29249 = state_29180__$1;
(statearr_29189_29249[(1)] = (29));

} else {
var statearr_29190_29250 = state_29180__$1;
(statearr_29190_29250[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29181 === (4))){
var inst_29098 = (state_29180[(2)]);
var state_29180__$1 = state_29180;
if(cljs.core.truth_(inst_29098)){
var statearr_29191_29251 = state_29180__$1;
(statearr_29191_29251[(1)] = (8));

} else {
var statearr_29192_29252 = state_29180__$1;
(statearr_29192_29252[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29181 === (15))){
var inst_29125 = (state_29180[(2)]);
var state_29180__$1 = state_29180;
if(cljs.core.truth_(inst_29125)){
var statearr_29193_29253 = state_29180__$1;
(statearr_29193_29253[(1)] = (19));

} else {
var statearr_29194_29254 = state_29180__$1;
(statearr_29194_29254[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29181 === (21))){
var inst_29130 = (state_29180[(12)]);
var inst_29130__$1 = (state_29180[(2)]);
var inst_29131 = cljs.core.get.call(null,inst_29130__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_29132 = cljs.core.get.call(null,inst_29130__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_29133 = cljs.core.get.call(null,inst_29130__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_29180__$1 = (function (){var statearr_29195 = state_29180;
(statearr_29195[(12)] = inst_29130__$1);

(statearr_29195[(10)] = inst_29131);

(statearr_29195[(13)] = inst_29132);

return statearr_29195;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_29180__$1,(22),inst_29133);
} else {
if((state_val_29181 === (31))){
var inst_29162 = (state_29180[(2)]);
var state_29180__$1 = state_29180;
if(cljs.core.truth_(inst_29162)){
var statearr_29196_29255 = state_29180__$1;
(statearr_29196_29255[(1)] = (32));

} else {
var statearr_29197_29256 = state_29180__$1;
(statearr_29197_29256[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29181 === (32))){
var inst_29139 = (state_29180[(14)]);
var state_29180__$1 = state_29180;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29180__$1,(35),out,inst_29139);
} else {
if((state_val_29181 === (33))){
var inst_29130 = (state_29180[(12)]);
var inst_29107 = inst_29130;
var state_29180__$1 = (function (){var statearr_29198 = state_29180;
(statearr_29198[(7)] = inst_29107);

return statearr_29198;
})();
var statearr_29199_29257 = state_29180__$1;
(statearr_29199_29257[(2)] = null);

(statearr_29199_29257[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29181 === (13))){
var inst_29107 = (state_29180[(7)]);
var inst_29114 = inst_29107.cljs$lang$protocol_mask$partition0$;
var inst_29115 = (inst_29114 & (64));
var inst_29116 = inst_29107.cljs$core$ISeq$;
var inst_29117 = (cljs.core.PROTOCOL_SENTINEL === inst_29116);
var inst_29118 = (inst_29115) || (inst_29117);
var state_29180__$1 = state_29180;
if(cljs.core.truth_(inst_29118)){
var statearr_29200_29258 = state_29180__$1;
(statearr_29200_29258[(1)] = (16));

} else {
var statearr_29201_29259 = state_29180__$1;
(statearr_29201_29259[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29181 === (22))){
var inst_29140 = (state_29180[(9)]);
var inst_29139 = (state_29180[(14)]);
var inst_29138 = (state_29180[(2)]);
var inst_29139__$1 = cljs.core.nth.call(null,inst_29138,(0),null);
var inst_29140__$1 = cljs.core.nth.call(null,inst_29138,(1),null);
var inst_29141 = (inst_29139__$1 == null);
var inst_29142 = cljs.core._EQ_.call(null,inst_29140__$1,change);
var inst_29143 = (inst_29141) || (inst_29142);
var state_29180__$1 = (function (){var statearr_29202 = state_29180;
(statearr_29202[(9)] = inst_29140__$1);

(statearr_29202[(14)] = inst_29139__$1);

return statearr_29202;
})();
if(cljs.core.truth_(inst_29143)){
var statearr_29203_29260 = state_29180__$1;
(statearr_29203_29260[(1)] = (23));

} else {
var statearr_29204_29261 = state_29180__$1;
(statearr_29204_29261[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29181 === (36))){
var inst_29130 = (state_29180[(12)]);
var inst_29107 = inst_29130;
var state_29180__$1 = (function (){var statearr_29205 = state_29180;
(statearr_29205[(7)] = inst_29107);

return statearr_29205;
})();
var statearr_29206_29262 = state_29180__$1;
(statearr_29206_29262[(2)] = null);

(statearr_29206_29262[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29181 === (29))){
var inst_29154 = (state_29180[(11)]);
var state_29180__$1 = state_29180;
var statearr_29207_29263 = state_29180__$1;
(statearr_29207_29263[(2)] = inst_29154);

(statearr_29207_29263[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29181 === (6))){
var state_29180__$1 = state_29180;
var statearr_29208_29264 = state_29180__$1;
(statearr_29208_29264[(2)] = false);

(statearr_29208_29264[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29181 === (28))){
var inst_29150 = (state_29180[(2)]);
var inst_29151 = calc_state.call(null);
var inst_29107 = inst_29151;
var state_29180__$1 = (function (){var statearr_29209 = state_29180;
(statearr_29209[(7)] = inst_29107);

(statearr_29209[(15)] = inst_29150);

return statearr_29209;
})();
var statearr_29210_29265 = state_29180__$1;
(statearr_29210_29265[(2)] = null);

(statearr_29210_29265[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29181 === (25))){
var inst_29176 = (state_29180[(2)]);
var state_29180__$1 = state_29180;
var statearr_29211_29266 = state_29180__$1;
(statearr_29211_29266[(2)] = inst_29176);

(statearr_29211_29266[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29181 === (34))){
var inst_29174 = (state_29180[(2)]);
var state_29180__$1 = state_29180;
var statearr_29212_29267 = state_29180__$1;
(statearr_29212_29267[(2)] = inst_29174);

(statearr_29212_29267[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29181 === (17))){
var state_29180__$1 = state_29180;
var statearr_29213_29268 = state_29180__$1;
(statearr_29213_29268[(2)] = false);

(statearr_29213_29268[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29181 === (3))){
var state_29180__$1 = state_29180;
var statearr_29214_29269 = state_29180__$1;
(statearr_29214_29269[(2)] = false);

(statearr_29214_29269[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29181 === (12))){
var inst_29178 = (state_29180[(2)]);
var state_29180__$1 = state_29180;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29180__$1,inst_29178);
} else {
if((state_val_29181 === (2))){
var inst_29082 = (state_29180[(8)]);
var inst_29087 = inst_29082.cljs$lang$protocol_mask$partition0$;
var inst_29088 = (inst_29087 & (64));
var inst_29089 = inst_29082.cljs$core$ISeq$;
var inst_29090 = (cljs.core.PROTOCOL_SENTINEL === inst_29089);
var inst_29091 = (inst_29088) || (inst_29090);
var state_29180__$1 = state_29180;
if(cljs.core.truth_(inst_29091)){
var statearr_29215_29270 = state_29180__$1;
(statearr_29215_29270[(1)] = (5));

} else {
var statearr_29216_29271 = state_29180__$1;
(statearr_29216_29271[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29181 === (23))){
var inst_29139 = (state_29180[(14)]);
var inst_29145 = (inst_29139 == null);
var state_29180__$1 = state_29180;
if(cljs.core.truth_(inst_29145)){
var statearr_29217_29272 = state_29180__$1;
(statearr_29217_29272[(1)] = (26));

} else {
var statearr_29218_29273 = state_29180__$1;
(statearr_29218_29273[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29181 === (35))){
var inst_29165 = (state_29180[(2)]);
var state_29180__$1 = state_29180;
if(cljs.core.truth_(inst_29165)){
var statearr_29219_29274 = state_29180__$1;
(statearr_29219_29274[(1)] = (36));

} else {
var statearr_29220_29275 = state_29180__$1;
(statearr_29220_29275[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29181 === (19))){
var inst_29107 = (state_29180[(7)]);
var inst_29127 = cljs.core.apply.call(null,cljs.core.hash_map,inst_29107);
var state_29180__$1 = state_29180;
var statearr_29221_29276 = state_29180__$1;
(statearr_29221_29276[(2)] = inst_29127);

(statearr_29221_29276[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29181 === (11))){
var inst_29107 = (state_29180[(7)]);
var inst_29111 = (inst_29107 == null);
var inst_29112 = cljs.core.not.call(null,inst_29111);
var state_29180__$1 = state_29180;
if(inst_29112){
var statearr_29222_29277 = state_29180__$1;
(statearr_29222_29277[(1)] = (13));

} else {
var statearr_29223_29278 = state_29180__$1;
(statearr_29223_29278[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29181 === (9))){
var inst_29082 = (state_29180[(8)]);
var state_29180__$1 = state_29180;
var statearr_29224_29279 = state_29180__$1;
(statearr_29224_29279[(2)] = inst_29082);

(statearr_29224_29279[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29181 === (5))){
var state_29180__$1 = state_29180;
var statearr_29225_29280 = state_29180__$1;
(statearr_29225_29280[(2)] = true);

(statearr_29225_29280[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29181 === (14))){
var state_29180__$1 = state_29180;
var statearr_29226_29281 = state_29180__$1;
(statearr_29226_29281[(2)] = false);

(statearr_29226_29281[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29181 === (26))){
var inst_29140 = (state_29180[(9)]);
var inst_29147 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_29140);
var state_29180__$1 = state_29180;
var statearr_29227_29282 = state_29180__$1;
(statearr_29227_29282[(2)] = inst_29147);

(statearr_29227_29282[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29181 === (16))){
var state_29180__$1 = state_29180;
var statearr_29228_29283 = state_29180__$1;
(statearr_29228_29283[(2)] = true);

(statearr_29228_29283[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29181 === (38))){
var inst_29170 = (state_29180[(2)]);
var state_29180__$1 = state_29180;
var statearr_29229_29284 = state_29180__$1;
(statearr_29229_29284[(2)] = inst_29170);

(statearr_29229_29284[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29181 === (30))){
var inst_29140 = (state_29180[(9)]);
var inst_29131 = (state_29180[(10)]);
var inst_29132 = (state_29180[(13)]);
var inst_29157 = cljs.core.empty_QMARK_.call(null,inst_29131);
var inst_29158 = inst_29132.call(null,inst_29140);
var inst_29159 = cljs.core.not.call(null,inst_29158);
var inst_29160 = (inst_29157) && (inst_29159);
var state_29180__$1 = state_29180;
var statearr_29230_29285 = state_29180__$1;
(statearr_29230_29285[(2)] = inst_29160);

(statearr_29230_29285[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29181 === (10))){
var inst_29082 = (state_29180[(8)]);
var inst_29103 = (state_29180[(2)]);
var inst_29104 = cljs.core.get.call(null,inst_29103,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_29105 = cljs.core.get.call(null,inst_29103,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_29106 = cljs.core.get.call(null,inst_29103,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_29107 = inst_29082;
var state_29180__$1 = (function (){var statearr_29231 = state_29180;
(statearr_29231[(16)] = inst_29105);

(statearr_29231[(7)] = inst_29107);

(statearr_29231[(17)] = inst_29104);

(statearr_29231[(18)] = inst_29106);

return statearr_29231;
})();
var statearr_29232_29286 = state_29180__$1;
(statearr_29232_29286[(2)] = null);

(statearr_29232_29286[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29181 === (18))){
var inst_29122 = (state_29180[(2)]);
var state_29180__$1 = state_29180;
var statearr_29233_29287 = state_29180__$1;
(statearr_29233_29287[(2)] = inst_29122);

(statearr_29233_29287[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29181 === (37))){
var state_29180__$1 = state_29180;
var statearr_29234_29288 = state_29180__$1;
(statearr_29234_29288[(2)] = null);

(statearr_29234_29288[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29181 === (8))){
var inst_29082 = (state_29180[(8)]);
var inst_29100 = cljs.core.apply.call(null,cljs.core.hash_map,inst_29082);
var state_29180__$1 = state_29180;
var statearr_29235_29289 = state_29180__$1;
(statearr_29235_29289[(2)] = inst_29100);

(statearr_29235_29289[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__27506__auto___29243,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__27441__auto__,c__27506__auto___29243,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__27442__auto__ = null;
var cljs$core$async$mix_$_state_machine__27442__auto____0 = (function (){
var statearr_29239 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29239[(0)] = cljs$core$async$mix_$_state_machine__27442__auto__);

(statearr_29239[(1)] = (1));

return statearr_29239;
});
var cljs$core$async$mix_$_state_machine__27442__auto____1 = (function (state_29180){
while(true){
var ret_value__27443__auto__ = (function (){try{while(true){
var result__27444__auto__ = switch__27441__auto__.call(null,state_29180);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27444__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27444__auto__;
}
break;
}
}catch (e29240){if((e29240 instanceof Object)){
var ex__27445__auto__ = e29240;
var statearr_29241_29290 = state_29180;
(statearr_29241_29290[(5)] = ex__27445__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29180);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29240;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27443__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29291 = state_29180;
state_29180 = G__29291;
continue;
} else {
return ret_value__27443__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__27442__auto__ = function(state_29180){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__27442__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__27442__auto____1.call(this,state_29180);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mix_$_state_machine__27442__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__27442__auto____0;
cljs$core$async$mix_$_state_machine__27442__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__27442__auto____1;
return cljs$core$async$mix_$_state_machine__27442__auto__;
})()
;})(switch__27441__auto__,c__27506__auto___29243,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__27508__auto__ = (function (){var statearr_29242 = f__27507__auto__.call(null);
(statearr_29242[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27506__auto___29243);

return statearr_29242;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27508__auto__);
});})(c__27506__auto___29243,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__25962__auto__ = (((p == null))?null:p);
var m__25963__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__25962__auto__)]);
if(!((m__25963__auto__ == null))){
return m__25963__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__25963__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__25963__auto____$1 == null))){
return m__25963__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__25962__auto__ = (((p == null))?null:p);
var m__25963__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__25962__auto__)]);
if(!((m__25963__auto__ == null))){
return m__25963__auto__.call(null,p,v,ch);
} else {
var m__25963__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__25963__auto____$1 == null))){
return m__25963__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args29292 = [];
var len__26407__auto___29295 = arguments.length;
var i__26408__auto___29296 = (0);
while(true){
if((i__26408__auto___29296 < len__26407__auto___29295)){
args29292.push((arguments[i__26408__auto___29296]));

var G__29297 = (i__26408__auto___29296 + (1));
i__26408__auto___29296 = G__29297;
continue;
} else {
}
break;
}

var G__29294 = args29292.length;
switch (G__29294) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args29292.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__25962__auto__ = (((p == null))?null:p);
var m__25963__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__25962__auto__)]);
if(!((m__25963__auto__ == null))){
return m__25963__auto__.call(null,p);
} else {
var m__25963__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__25963__auto____$1 == null))){
return m__25963__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__25962__auto__ = (((p == null))?null:p);
var m__25963__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__25962__auto__)]);
if(!((m__25963__auto__ == null))){
return m__25963__auto__.call(null,p,v);
} else {
var m__25963__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__25963__auto____$1 == null))){
return m__25963__auto____$1.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var args29300 = [];
var len__26407__auto___29425 = arguments.length;
var i__26408__auto___29426 = (0);
while(true){
if((i__26408__auto___29426 < len__26407__auto___29425)){
args29300.push((arguments[i__26408__auto___29426]));

var G__29427 = (i__26408__auto___29426 + (1));
i__26408__auto___29426 = G__29427;
continue;
} else {
}
break;
}

var G__29302 = args29300.length;
switch (G__29302) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args29300.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__25294__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__25294__auto__)){
return or__25294__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__25294__auto__,mults){
return (function (p1__29299_SHARP_){
if(cljs.core.truth_(p1__29299_SHARP_.call(null,topic))){
return p1__29299_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__29299_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__25294__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async29303 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29303 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta29304){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta29304 = meta29304;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async29303.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_29305,meta29304__$1){
var self__ = this;
var _29305__$1 = this;
return (new cljs.core.async.t_cljs$core$async29303(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta29304__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async29303.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_29305){
var self__ = this;
var _29305__$1 = this;
return self__.meta29304;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async29303.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async29303.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async29303.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async29303.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async29303.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4657__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4657__auto__)){
var m = temp__4657__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async29303.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async29303.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async29303.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta29304","meta29304",-1619812908,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async29303.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async29303.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29303";

cljs.core.async.t_cljs$core$async29303.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__25905__auto__,writer__25906__auto__,opt__25907__auto__){
return cljs.core._write.call(null,writer__25906__auto__,"cljs.core.async/t_cljs$core$async29303");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async29303 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async29303(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta29304){
return (new cljs.core.async.t_cljs$core$async29303(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta29304));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async29303(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__27506__auto___29429 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27506__auto___29429,mults,ensure_mult,p){
return (function (){
var f__27507__auto__ = (function (){var switch__27441__auto__ = ((function (c__27506__auto___29429,mults,ensure_mult,p){
return (function (state_29377){
var state_val_29378 = (state_29377[(1)]);
if((state_val_29378 === (7))){
var inst_29373 = (state_29377[(2)]);
var state_29377__$1 = state_29377;
var statearr_29379_29430 = state_29377__$1;
(statearr_29379_29430[(2)] = inst_29373);

(statearr_29379_29430[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29378 === (20))){
var state_29377__$1 = state_29377;
var statearr_29380_29431 = state_29377__$1;
(statearr_29380_29431[(2)] = null);

(statearr_29380_29431[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29378 === (1))){
var state_29377__$1 = state_29377;
var statearr_29381_29432 = state_29377__$1;
(statearr_29381_29432[(2)] = null);

(statearr_29381_29432[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29378 === (24))){
var inst_29356 = (state_29377[(7)]);
var inst_29365 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_29356);
var state_29377__$1 = state_29377;
var statearr_29382_29433 = state_29377__$1;
(statearr_29382_29433[(2)] = inst_29365);

(statearr_29382_29433[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29378 === (4))){
var inst_29308 = (state_29377[(8)]);
var inst_29308__$1 = (state_29377[(2)]);
var inst_29309 = (inst_29308__$1 == null);
var state_29377__$1 = (function (){var statearr_29383 = state_29377;
(statearr_29383[(8)] = inst_29308__$1);

return statearr_29383;
})();
if(cljs.core.truth_(inst_29309)){
var statearr_29384_29434 = state_29377__$1;
(statearr_29384_29434[(1)] = (5));

} else {
var statearr_29385_29435 = state_29377__$1;
(statearr_29385_29435[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29378 === (15))){
var inst_29350 = (state_29377[(2)]);
var state_29377__$1 = state_29377;
var statearr_29386_29436 = state_29377__$1;
(statearr_29386_29436[(2)] = inst_29350);

(statearr_29386_29436[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29378 === (21))){
var inst_29370 = (state_29377[(2)]);
var state_29377__$1 = (function (){var statearr_29387 = state_29377;
(statearr_29387[(9)] = inst_29370);

return statearr_29387;
})();
var statearr_29388_29437 = state_29377__$1;
(statearr_29388_29437[(2)] = null);

(statearr_29388_29437[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29378 === (13))){
var inst_29332 = (state_29377[(10)]);
var inst_29334 = cljs.core.chunked_seq_QMARK_.call(null,inst_29332);
var state_29377__$1 = state_29377;
if(inst_29334){
var statearr_29389_29438 = state_29377__$1;
(statearr_29389_29438[(1)] = (16));

} else {
var statearr_29390_29439 = state_29377__$1;
(statearr_29390_29439[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29378 === (22))){
var inst_29362 = (state_29377[(2)]);
var state_29377__$1 = state_29377;
if(cljs.core.truth_(inst_29362)){
var statearr_29391_29440 = state_29377__$1;
(statearr_29391_29440[(1)] = (23));

} else {
var statearr_29392_29441 = state_29377__$1;
(statearr_29392_29441[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29378 === (6))){
var inst_29356 = (state_29377[(7)]);
var inst_29358 = (state_29377[(11)]);
var inst_29308 = (state_29377[(8)]);
var inst_29356__$1 = topic_fn.call(null,inst_29308);
var inst_29357 = cljs.core.deref.call(null,mults);
var inst_29358__$1 = cljs.core.get.call(null,inst_29357,inst_29356__$1);
var state_29377__$1 = (function (){var statearr_29393 = state_29377;
(statearr_29393[(7)] = inst_29356__$1);

(statearr_29393[(11)] = inst_29358__$1);

return statearr_29393;
})();
if(cljs.core.truth_(inst_29358__$1)){
var statearr_29394_29442 = state_29377__$1;
(statearr_29394_29442[(1)] = (19));

} else {
var statearr_29395_29443 = state_29377__$1;
(statearr_29395_29443[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29378 === (25))){
var inst_29367 = (state_29377[(2)]);
var state_29377__$1 = state_29377;
var statearr_29396_29444 = state_29377__$1;
(statearr_29396_29444[(2)] = inst_29367);

(statearr_29396_29444[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29378 === (17))){
var inst_29332 = (state_29377[(10)]);
var inst_29341 = cljs.core.first.call(null,inst_29332);
var inst_29342 = cljs.core.async.muxch_STAR_.call(null,inst_29341);
var inst_29343 = cljs.core.async.close_BANG_.call(null,inst_29342);
var inst_29344 = cljs.core.next.call(null,inst_29332);
var inst_29318 = inst_29344;
var inst_29319 = null;
var inst_29320 = (0);
var inst_29321 = (0);
var state_29377__$1 = (function (){var statearr_29397 = state_29377;
(statearr_29397[(12)] = inst_29320);

(statearr_29397[(13)] = inst_29318);

(statearr_29397[(14)] = inst_29321);

(statearr_29397[(15)] = inst_29343);

(statearr_29397[(16)] = inst_29319);

return statearr_29397;
})();
var statearr_29398_29445 = state_29377__$1;
(statearr_29398_29445[(2)] = null);

(statearr_29398_29445[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29378 === (3))){
var inst_29375 = (state_29377[(2)]);
var state_29377__$1 = state_29377;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29377__$1,inst_29375);
} else {
if((state_val_29378 === (12))){
var inst_29352 = (state_29377[(2)]);
var state_29377__$1 = state_29377;
var statearr_29399_29446 = state_29377__$1;
(statearr_29399_29446[(2)] = inst_29352);

(statearr_29399_29446[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29378 === (2))){
var state_29377__$1 = state_29377;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29377__$1,(4),ch);
} else {
if((state_val_29378 === (23))){
var state_29377__$1 = state_29377;
var statearr_29400_29447 = state_29377__$1;
(statearr_29400_29447[(2)] = null);

(statearr_29400_29447[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29378 === (19))){
var inst_29358 = (state_29377[(11)]);
var inst_29308 = (state_29377[(8)]);
var inst_29360 = cljs.core.async.muxch_STAR_.call(null,inst_29358);
var state_29377__$1 = state_29377;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29377__$1,(22),inst_29360,inst_29308);
} else {
if((state_val_29378 === (11))){
var inst_29332 = (state_29377[(10)]);
var inst_29318 = (state_29377[(13)]);
var inst_29332__$1 = cljs.core.seq.call(null,inst_29318);
var state_29377__$1 = (function (){var statearr_29401 = state_29377;
(statearr_29401[(10)] = inst_29332__$1);

return statearr_29401;
})();
if(inst_29332__$1){
var statearr_29402_29448 = state_29377__$1;
(statearr_29402_29448[(1)] = (13));

} else {
var statearr_29403_29449 = state_29377__$1;
(statearr_29403_29449[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29378 === (9))){
var inst_29354 = (state_29377[(2)]);
var state_29377__$1 = state_29377;
var statearr_29404_29450 = state_29377__$1;
(statearr_29404_29450[(2)] = inst_29354);

(statearr_29404_29450[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29378 === (5))){
var inst_29315 = cljs.core.deref.call(null,mults);
var inst_29316 = cljs.core.vals.call(null,inst_29315);
var inst_29317 = cljs.core.seq.call(null,inst_29316);
var inst_29318 = inst_29317;
var inst_29319 = null;
var inst_29320 = (0);
var inst_29321 = (0);
var state_29377__$1 = (function (){var statearr_29405 = state_29377;
(statearr_29405[(12)] = inst_29320);

(statearr_29405[(13)] = inst_29318);

(statearr_29405[(14)] = inst_29321);

(statearr_29405[(16)] = inst_29319);

return statearr_29405;
})();
var statearr_29406_29451 = state_29377__$1;
(statearr_29406_29451[(2)] = null);

(statearr_29406_29451[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29378 === (14))){
var state_29377__$1 = state_29377;
var statearr_29410_29452 = state_29377__$1;
(statearr_29410_29452[(2)] = null);

(statearr_29410_29452[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29378 === (16))){
var inst_29332 = (state_29377[(10)]);
var inst_29336 = cljs.core.chunk_first.call(null,inst_29332);
var inst_29337 = cljs.core.chunk_rest.call(null,inst_29332);
var inst_29338 = cljs.core.count.call(null,inst_29336);
var inst_29318 = inst_29337;
var inst_29319 = inst_29336;
var inst_29320 = inst_29338;
var inst_29321 = (0);
var state_29377__$1 = (function (){var statearr_29411 = state_29377;
(statearr_29411[(12)] = inst_29320);

(statearr_29411[(13)] = inst_29318);

(statearr_29411[(14)] = inst_29321);

(statearr_29411[(16)] = inst_29319);

return statearr_29411;
})();
var statearr_29412_29453 = state_29377__$1;
(statearr_29412_29453[(2)] = null);

(statearr_29412_29453[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29378 === (10))){
var inst_29320 = (state_29377[(12)]);
var inst_29318 = (state_29377[(13)]);
var inst_29321 = (state_29377[(14)]);
var inst_29319 = (state_29377[(16)]);
var inst_29326 = cljs.core._nth.call(null,inst_29319,inst_29321);
var inst_29327 = cljs.core.async.muxch_STAR_.call(null,inst_29326);
var inst_29328 = cljs.core.async.close_BANG_.call(null,inst_29327);
var inst_29329 = (inst_29321 + (1));
var tmp29407 = inst_29320;
var tmp29408 = inst_29318;
var tmp29409 = inst_29319;
var inst_29318__$1 = tmp29408;
var inst_29319__$1 = tmp29409;
var inst_29320__$1 = tmp29407;
var inst_29321__$1 = inst_29329;
var state_29377__$1 = (function (){var statearr_29413 = state_29377;
(statearr_29413[(12)] = inst_29320__$1);

(statearr_29413[(13)] = inst_29318__$1);

(statearr_29413[(14)] = inst_29321__$1);

(statearr_29413[(17)] = inst_29328);

(statearr_29413[(16)] = inst_29319__$1);

return statearr_29413;
})();
var statearr_29414_29454 = state_29377__$1;
(statearr_29414_29454[(2)] = null);

(statearr_29414_29454[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29378 === (18))){
var inst_29347 = (state_29377[(2)]);
var state_29377__$1 = state_29377;
var statearr_29415_29455 = state_29377__$1;
(statearr_29415_29455[(2)] = inst_29347);

(statearr_29415_29455[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29378 === (8))){
var inst_29320 = (state_29377[(12)]);
var inst_29321 = (state_29377[(14)]);
var inst_29323 = (inst_29321 < inst_29320);
var inst_29324 = inst_29323;
var state_29377__$1 = state_29377;
if(cljs.core.truth_(inst_29324)){
var statearr_29416_29456 = state_29377__$1;
(statearr_29416_29456[(1)] = (10));

} else {
var statearr_29417_29457 = state_29377__$1;
(statearr_29417_29457[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__27506__auto___29429,mults,ensure_mult,p))
;
return ((function (switch__27441__auto__,c__27506__auto___29429,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__27442__auto__ = null;
var cljs$core$async$state_machine__27442__auto____0 = (function (){
var statearr_29421 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29421[(0)] = cljs$core$async$state_machine__27442__auto__);

(statearr_29421[(1)] = (1));

return statearr_29421;
});
var cljs$core$async$state_machine__27442__auto____1 = (function (state_29377){
while(true){
var ret_value__27443__auto__ = (function (){try{while(true){
var result__27444__auto__ = switch__27441__auto__.call(null,state_29377);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27444__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27444__auto__;
}
break;
}
}catch (e29422){if((e29422 instanceof Object)){
var ex__27445__auto__ = e29422;
var statearr_29423_29458 = state_29377;
(statearr_29423_29458[(5)] = ex__27445__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29377);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29422;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27443__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29459 = state_29377;
state_29377 = G__29459;
continue;
} else {
return ret_value__27443__auto__;
}
break;
}
});
cljs$core$async$state_machine__27442__auto__ = function(state_29377){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27442__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27442__auto____1.call(this,state_29377);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__27442__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27442__auto____0;
cljs$core$async$state_machine__27442__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27442__auto____1;
return cljs$core$async$state_machine__27442__auto__;
})()
;})(switch__27441__auto__,c__27506__auto___29429,mults,ensure_mult,p))
})();
var state__27508__auto__ = (function (){var statearr_29424 = f__27507__auto__.call(null);
(statearr_29424[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27506__auto___29429);

return statearr_29424;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27508__auto__);
});})(c__27506__auto___29429,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var args29460 = [];
var len__26407__auto___29463 = arguments.length;
var i__26408__auto___29464 = (0);
while(true){
if((i__26408__auto___29464 < len__26407__auto___29463)){
args29460.push((arguments[i__26408__auto___29464]));

var G__29465 = (i__26408__auto___29464 + (1));
i__26408__auto___29464 = G__29465;
continue;
} else {
}
break;
}

var G__29462 = args29460.length;
switch (G__29462) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args29460.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var args29467 = [];
var len__26407__auto___29470 = arguments.length;
var i__26408__auto___29471 = (0);
while(true){
if((i__26408__auto___29471 < len__26407__auto___29470)){
args29467.push((arguments[i__26408__auto___29471]));

var G__29472 = (i__26408__auto___29471 + (1));
i__26408__auto___29471 = G__29472;
continue;
} else {
}
break;
}

var G__29469 = args29467.length;
switch (G__29469) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args29467.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var args29474 = [];
var len__26407__auto___29545 = arguments.length;
var i__26408__auto___29546 = (0);
while(true){
if((i__26408__auto___29546 < len__26407__auto___29545)){
args29474.push((arguments[i__26408__auto___29546]));

var G__29547 = (i__26408__auto___29546 + (1));
i__26408__auto___29546 = G__29547;
continue;
} else {
}
break;
}

var G__29476 = args29474.length;
switch (G__29476) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args29474.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__27506__auto___29549 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27506__auto___29549,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__27507__auto__ = (function (){var switch__27441__auto__ = ((function (c__27506__auto___29549,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_29515){
var state_val_29516 = (state_29515[(1)]);
if((state_val_29516 === (7))){
var state_29515__$1 = state_29515;
var statearr_29517_29550 = state_29515__$1;
(statearr_29517_29550[(2)] = null);

(statearr_29517_29550[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29516 === (1))){
var state_29515__$1 = state_29515;
var statearr_29518_29551 = state_29515__$1;
(statearr_29518_29551[(2)] = null);

(statearr_29518_29551[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29516 === (4))){
var inst_29479 = (state_29515[(7)]);
var inst_29481 = (inst_29479 < cnt);
var state_29515__$1 = state_29515;
if(cljs.core.truth_(inst_29481)){
var statearr_29519_29552 = state_29515__$1;
(statearr_29519_29552[(1)] = (6));

} else {
var statearr_29520_29553 = state_29515__$1;
(statearr_29520_29553[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29516 === (15))){
var inst_29511 = (state_29515[(2)]);
var state_29515__$1 = state_29515;
var statearr_29521_29554 = state_29515__$1;
(statearr_29521_29554[(2)] = inst_29511);

(statearr_29521_29554[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29516 === (13))){
var inst_29504 = cljs.core.async.close_BANG_.call(null,out);
var state_29515__$1 = state_29515;
var statearr_29522_29555 = state_29515__$1;
(statearr_29522_29555[(2)] = inst_29504);

(statearr_29522_29555[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29516 === (6))){
var state_29515__$1 = state_29515;
var statearr_29523_29556 = state_29515__$1;
(statearr_29523_29556[(2)] = null);

(statearr_29523_29556[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29516 === (3))){
var inst_29513 = (state_29515[(2)]);
var state_29515__$1 = state_29515;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29515__$1,inst_29513);
} else {
if((state_val_29516 === (12))){
var inst_29501 = (state_29515[(8)]);
var inst_29501__$1 = (state_29515[(2)]);
var inst_29502 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_29501__$1);
var state_29515__$1 = (function (){var statearr_29524 = state_29515;
(statearr_29524[(8)] = inst_29501__$1);

return statearr_29524;
})();
if(cljs.core.truth_(inst_29502)){
var statearr_29525_29557 = state_29515__$1;
(statearr_29525_29557[(1)] = (13));

} else {
var statearr_29526_29558 = state_29515__$1;
(statearr_29526_29558[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29516 === (2))){
var inst_29478 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_29479 = (0);
var state_29515__$1 = (function (){var statearr_29527 = state_29515;
(statearr_29527[(7)] = inst_29479);

(statearr_29527[(9)] = inst_29478);

return statearr_29527;
})();
var statearr_29528_29559 = state_29515__$1;
(statearr_29528_29559[(2)] = null);

(statearr_29528_29559[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29516 === (11))){
var inst_29479 = (state_29515[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_29515,(10),Object,null,(9));
var inst_29488 = chs__$1.call(null,inst_29479);
var inst_29489 = done.call(null,inst_29479);
var inst_29490 = cljs.core.async.take_BANG_.call(null,inst_29488,inst_29489);
var state_29515__$1 = state_29515;
var statearr_29529_29560 = state_29515__$1;
(statearr_29529_29560[(2)] = inst_29490);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29515__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29516 === (9))){
var inst_29479 = (state_29515[(7)]);
var inst_29492 = (state_29515[(2)]);
var inst_29493 = (inst_29479 + (1));
var inst_29479__$1 = inst_29493;
var state_29515__$1 = (function (){var statearr_29530 = state_29515;
(statearr_29530[(7)] = inst_29479__$1);

(statearr_29530[(10)] = inst_29492);

return statearr_29530;
})();
var statearr_29531_29561 = state_29515__$1;
(statearr_29531_29561[(2)] = null);

(statearr_29531_29561[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29516 === (5))){
var inst_29499 = (state_29515[(2)]);
var state_29515__$1 = (function (){var statearr_29532 = state_29515;
(statearr_29532[(11)] = inst_29499);

return statearr_29532;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29515__$1,(12),dchan);
} else {
if((state_val_29516 === (14))){
var inst_29501 = (state_29515[(8)]);
var inst_29506 = cljs.core.apply.call(null,f,inst_29501);
var state_29515__$1 = state_29515;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29515__$1,(16),out,inst_29506);
} else {
if((state_val_29516 === (16))){
var inst_29508 = (state_29515[(2)]);
var state_29515__$1 = (function (){var statearr_29533 = state_29515;
(statearr_29533[(12)] = inst_29508);

return statearr_29533;
})();
var statearr_29534_29562 = state_29515__$1;
(statearr_29534_29562[(2)] = null);

(statearr_29534_29562[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29516 === (10))){
var inst_29483 = (state_29515[(2)]);
var inst_29484 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_29515__$1 = (function (){var statearr_29535 = state_29515;
(statearr_29535[(13)] = inst_29483);

return statearr_29535;
})();
var statearr_29536_29563 = state_29515__$1;
(statearr_29536_29563[(2)] = inst_29484);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29515__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29516 === (8))){
var inst_29497 = (state_29515[(2)]);
var state_29515__$1 = state_29515;
var statearr_29537_29564 = state_29515__$1;
(statearr_29537_29564[(2)] = inst_29497);

(statearr_29537_29564[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__27506__auto___29549,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__27441__auto__,c__27506__auto___29549,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__27442__auto__ = null;
var cljs$core$async$state_machine__27442__auto____0 = (function (){
var statearr_29541 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29541[(0)] = cljs$core$async$state_machine__27442__auto__);

(statearr_29541[(1)] = (1));

return statearr_29541;
});
var cljs$core$async$state_machine__27442__auto____1 = (function (state_29515){
while(true){
var ret_value__27443__auto__ = (function (){try{while(true){
var result__27444__auto__ = switch__27441__auto__.call(null,state_29515);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27444__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27444__auto__;
}
break;
}
}catch (e29542){if((e29542 instanceof Object)){
var ex__27445__auto__ = e29542;
var statearr_29543_29565 = state_29515;
(statearr_29543_29565[(5)] = ex__27445__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29515);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29542;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27443__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29566 = state_29515;
state_29515 = G__29566;
continue;
} else {
return ret_value__27443__auto__;
}
break;
}
});
cljs$core$async$state_machine__27442__auto__ = function(state_29515){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27442__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27442__auto____1.call(this,state_29515);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__27442__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27442__auto____0;
cljs$core$async$state_machine__27442__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27442__auto____1;
return cljs$core$async$state_machine__27442__auto__;
})()
;})(switch__27441__auto__,c__27506__auto___29549,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__27508__auto__ = (function (){var statearr_29544 = f__27507__auto__.call(null);
(statearr_29544[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27506__auto___29549);

return statearr_29544;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27508__auto__);
});})(c__27506__auto___29549,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var args29568 = [];
var len__26407__auto___29626 = arguments.length;
var i__26408__auto___29627 = (0);
while(true){
if((i__26408__auto___29627 < len__26407__auto___29626)){
args29568.push((arguments[i__26408__auto___29627]));

var G__29628 = (i__26408__auto___29627 + (1));
i__26408__auto___29627 = G__29628;
continue;
} else {
}
break;
}

var G__29570 = args29568.length;
switch (G__29570) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args29568.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__27506__auto___29630 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27506__auto___29630,out){
return (function (){
var f__27507__auto__ = (function (){var switch__27441__auto__ = ((function (c__27506__auto___29630,out){
return (function (state_29602){
var state_val_29603 = (state_29602[(1)]);
if((state_val_29603 === (7))){
var inst_29581 = (state_29602[(7)]);
var inst_29582 = (state_29602[(8)]);
var inst_29581__$1 = (state_29602[(2)]);
var inst_29582__$1 = cljs.core.nth.call(null,inst_29581__$1,(0),null);
var inst_29583 = cljs.core.nth.call(null,inst_29581__$1,(1),null);
var inst_29584 = (inst_29582__$1 == null);
var state_29602__$1 = (function (){var statearr_29604 = state_29602;
(statearr_29604[(7)] = inst_29581__$1);

(statearr_29604[(8)] = inst_29582__$1);

(statearr_29604[(9)] = inst_29583);

return statearr_29604;
})();
if(cljs.core.truth_(inst_29584)){
var statearr_29605_29631 = state_29602__$1;
(statearr_29605_29631[(1)] = (8));

} else {
var statearr_29606_29632 = state_29602__$1;
(statearr_29606_29632[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29603 === (1))){
var inst_29571 = cljs.core.vec.call(null,chs);
var inst_29572 = inst_29571;
var state_29602__$1 = (function (){var statearr_29607 = state_29602;
(statearr_29607[(10)] = inst_29572);

return statearr_29607;
})();
var statearr_29608_29633 = state_29602__$1;
(statearr_29608_29633[(2)] = null);

(statearr_29608_29633[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29603 === (4))){
var inst_29572 = (state_29602[(10)]);
var state_29602__$1 = state_29602;
return cljs.core.async.ioc_alts_BANG_.call(null,state_29602__$1,(7),inst_29572);
} else {
if((state_val_29603 === (6))){
var inst_29598 = (state_29602[(2)]);
var state_29602__$1 = state_29602;
var statearr_29609_29634 = state_29602__$1;
(statearr_29609_29634[(2)] = inst_29598);

(statearr_29609_29634[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29603 === (3))){
var inst_29600 = (state_29602[(2)]);
var state_29602__$1 = state_29602;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29602__$1,inst_29600);
} else {
if((state_val_29603 === (2))){
var inst_29572 = (state_29602[(10)]);
var inst_29574 = cljs.core.count.call(null,inst_29572);
var inst_29575 = (inst_29574 > (0));
var state_29602__$1 = state_29602;
if(cljs.core.truth_(inst_29575)){
var statearr_29611_29635 = state_29602__$1;
(statearr_29611_29635[(1)] = (4));

} else {
var statearr_29612_29636 = state_29602__$1;
(statearr_29612_29636[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29603 === (11))){
var inst_29572 = (state_29602[(10)]);
var inst_29591 = (state_29602[(2)]);
var tmp29610 = inst_29572;
var inst_29572__$1 = tmp29610;
var state_29602__$1 = (function (){var statearr_29613 = state_29602;
(statearr_29613[(10)] = inst_29572__$1);

(statearr_29613[(11)] = inst_29591);

return statearr_29613;
})();
var statearr_29614_29637 = state_29602__$1;
(statearr_29614_29637[(2)] = null);

(statearr_29614_29637[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29603 === (9))){
var inst_29582 = (state_29602[(8)]);
var state_29602__$1 = state_29602;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29602__$1,(11),out,inst_29582);
} else {
if((state_val_29603 === (5))){
var inst_29596 = cljs.core.async.close_BANG_.call(null,out);
var state_29602__$1 = state_29602;
var statearr_29615_29638 = state_29602__$1;
(statearr_29615_29638[(2)] = inst_29596);

(statearr_29615_29638[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29603 === (10))){
var inst_29594 = (state_29602[(2)]);
var state_29602__$1 = state_29602;
var statearr_29616_29639 = state_29602__$1;
(statearr_29616_29639[(2)] = inst_29594);

(statearr_29616_29639[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29603 === (8))){
var inst_29572 = (state_29602[(10)]);
var inst_29581 = (state_29602[(7)]);
var inst_29582 = (state_29602[(8)]);
var inst_29583 = (state_29602[(9)]);
var inst_29586 = (function (){var cs = inst_29572;
var vec__29577 = inst_29581;
var v = inst_29582;
var c = inst_29583;
return ((function (cs,vec__29577,v,c,inst_29572,inst_29581,inst_29582,inst_29583,state_val_29603,c__27506__auto___29630,out){
return (function (p1__29567_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__29567_SHARP_);
});
;})(cs,vec__29577,v,c,inst_29572,inst_29581,inst_29582,inst_29583,state_val_29603,c__27506__auto___29630,out))
})();
var inst_29587 = cljs.core.filterv.call(null,inst_29586,inst_29572);
var inst_29572__$1 = inst_29587;
var state_29602__$1 = (function (){var statearr_29617 = state_29602;
(statearr_29617[(10)] = inst_29572__$1);

return statearr_29617;
})();
var statearr_29618_29640 = state_29602__$1;
(statearr_29618_29640[(2)] = null);

(statearr_29618_29640[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__27506__auto___29630,out))
;
return ((function (switch__27441__auto__,c__27506__auto___29630,out){
return (function() {
var cljs$core$async$state_machine__27442__auto__ = null;
var cljs$core$async$state_machine__27442__auto____0 = (function (){
var statearr_29622 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29622[(0)] = cljs$core$async$state_machine__27442__auto__);

(statearr_29622[(1)] = (1));

return statearr_29622;
});
var cljs$core$async$state_machine__27442__auto____1 = (function (state_29602){
while(true){
var ret_value__27443__auto__ = (function (){try{while(true){
var result__27444__auto__ = switch__27441__auto__.call(null,state_29602);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27444__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27444__auto__;
}
break;
}
}catch (e29623){if((e29623 instanceof Object)){
var ex__27445__auto__ = e29623;
var statearr_29624_29641 = state_29602;
(statearr_29624_29641[(5)] = ex__27445__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29602);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29623;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27443__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29642 = state_29602;
state_29602 = G__29642;
continue;
} else {
return ret_value__27443__auto__;
}
break;
}
});
cljs$core$async$state_machine__27442__auto__ = function(state_29602){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27442__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27442__auto____1.call(this,state_29602);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__27442__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27442__auto____0;
cljs$core$async$state_machine__27442__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27442__auto____1;
return cljs$core$async$state_machine__27442__auto__;
})()
;})(switch__27441__auto__,c__27506__auto___29630,out))
})();
var state__27508__auto__ = (function (){var statearr_29625 = f__27507__auto__.call(null);
(statearr_29625[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27506__auto___29630);

return statearr_29625;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27508__auto__);
});})(c__27506__auto___29630,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var args29643 = [];
var len__26407__auto___29692 = arguments.length;
var i__26408__auto___29693 = (0);
while(true){
if((i__26408__auto___29693 < len__26407__auto___29692)){
args29643.push((arguments[i__26408__auto___29693]));

var G__29694 = (i__26408__auto___29693 + (1));
i__26408__auto___29693 = G__29694;
continue;
} else {
}
break;
}

var G__29645 = args29643.length;
switch (G__29645) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args29643.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__27506__auto___29696 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27506__auto___29696,out){
return (function (){
var f__27507__auto__ = (function (){var switch__27441__auto__ = ((function (c__27506__auto___29696,out){
return (function (state_29669){
var state_val_29670 = (state_29669[(1)]);
if((state_val_29670 === (7))){
var inst_29651 = (state_29669[(7)]);
var inst_29651__$1 = (state_29669[(2)]);
var inst_29652 = (inst_29651__$1 == null);
var inst_29653 = cljs.core.not.call(null,inst_29652);
var state_29669__$1 = (function (){var statearr_29671 = state_29669;
(statearr_29671[(7)] = inst_29651__$1);

return statearr_29671;
})();
if(inst_29653){
var statearr_29672_29697 = state_29669__$1;
(statearr_29672_29697[(1)] = (8));

} else {
var statearr_29673_29698 = state_29669__$1;
(statearr_29673_29698[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29670 === (1))){
var inst_29646 = (0);
var state_29669__$1 = (function (){var statearr_29674 = state_29669;
(statearr_29674[(8)] = inst_29646);

return statearr_29674;
})();
var statearr_29675_29699 = state_29669__$1;
(statearr_29675_29699[(2)] = null);

(statearr_29675_29699[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29670 === (4))){
var state_29669__$1 = state_29669;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29669__$1,(7),ch);
} else {
if((state_val_29670 === (6))){
var inst_29664 = (state_29669[(2)]);
var state_29669__$1 = state_29669;
var statearr_29676_29700 = state_29669__$1;
(statearr_29676_29700[(2)] = inst_29664);

(statearr_29676_29700[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29670 === (3))){
var inst_29666 = (state_29669[(2)]);
var inst_29667 = cljs.core.async.close_BANG_.call(null,out);
var state_29669__$1 = (function (){var statearr_29677 = state_29669;
(statearr_29677[(9)] = inst_29666);

return statearr_29677;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29669__$1,inst_29667);
} else {
if((state_val_29670 === (2))){
var inst_29646 = (state_29669[(8)]);
var inst_29648 = (inst_29646 < n);
var state_29669__$1 = state_29669;
if(cljs.core.truth_(inst_29648)){
var statearr_29678_29701 = state_29669__$1;
(statearr_29678_29701[(1)] = (4));

} else {
var statearr_29679_29702 = state_29669__$1;
(statearr_29679_29702[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29670 === (11))){
var inst_29646 = (state_29669[(8)]);
var inst_29656 = (state_29669[(2)]);
var inst_29657 = (inst_29646 + (1));
var inst_29646__$1 = inst_29657;
var state_29669__$1 = (function (){var statearr_29680 = state_29669;
(statearr_29680[(8)] = inst_29646__$1);

(statearr_29680[(10)] = inst_29656);

return statearr_29680;
})();
var statearr_29681_29703 = state_29669__$1;
(statearr_29681_29703[(2)] = null);

(statearr_29681_29703[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29670 === (9))){
var state_29669__$1 = state_29669;
var statearr_29682_29704 = state_29669__$1;
(statearr_29682_29704[(2)] = null);

(statearr_29682_29704[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29670 === (5))){
var state_29669__$1 = state_29669;
var statearr_29683_29705 = state_29669__$1;
(statearr_29683_29705[(2)] = null);

(statearr_29683_29705[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29670 === (10))){
var inst_29661 = (state_29669[(2)]);
var state_29669__$1 = state_29669;
var statearr_29684_29706 = state_29669__$1;
(statearr_29684_29706[(2)] = inst_29661);

(statearr_29684_29706[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29670 === (8))){
var inst_29651 = (state_29669[(7)]);
var state_29669__$1 = state_29669;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29669__$1,(11),out,inst_29651);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__27506__auto___29696,out))
;
return ((function (switch__27441__auto__,c__27506__auto___29696,out){
return (function() {
var cljs$core$async$state_machine__27442__auto__ = null;
var cljs$core$async$state_machine__27442__auto____0 = (function (){
var statearr_29688 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_29688[(0)] = cljs$core$async$state_machine__27442__auto__);

(statearr_29688[(1)] = (1));

return statearr_29688;
});
var cljs$core$async$state_machine__27442__auto____1 = (function (state_29669){
while(true){
var ret_value__27443__auto__ = (function (){try{while(true){
var result__27444__auto__ = switch__27441__auto__.call(null,state_29669);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27444__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27444__auto__;
}
break;
}
}catch (e29689){if((e29689 instanceof Object)){
var ex__27445__auto__ = e29689;
var statearr_29690_29707 = state_29669;
(statearr_29690_29707[(5)] = ex__27445__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29669);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29689;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27443__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29708 = state_29669;
state_29669 = G__29708;
continue;
} else {
return ret_value__27443__auto__;
}
break;
}
});
cljs$core$async$state_machine__27442__auto__ = function(state_29669){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27442__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27442__auto____1.call(this,state_29669);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__27442__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27442__auto____0;
cljs$core$async$state_machine__27442__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27442__auto____1;
return cljs$core$async$state_machine__27442__auto__;
})()
;})(switch__27441__auto__,c__27506__auto___29696,out))
})();
var state__27508__auto__ = (function (){var statearr_29691 = f__27507__auto__.call(null);
(statearr_29691[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27506__auto___29696);

return statearr_29691;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27508__auto__);
});})(c__27506__auto___29696,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async29716 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29716 = (function (f,ch,meta29717){
this.f = f;
this.ch = ch;
this.meta29717 = meta29717;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async29716.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29718,meta29717__$1){
var self__ = this;
var _29718__$1 = this;
return (new cljs.core.async.t_cljs$core$async29716(self__.f,self__.ch,meta29717__$1));
});

cljs.core.async.t_cljs$core$async29716.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29718){
var self__ = this;
var _29718__$1 = this;
return self__.meta29717;
});

cljs.core.async.t_cljs$core$async29716.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async29716.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async29716.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async29716.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async29716.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async29719 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29719 = (function (f,ch,meta29717,_,fn1,meta29720){
this.f = f;
this.ch = ch;
this.meta29717 = meta29717;
this._ = _;
this.fn1 = fn1;
this.meta29720 = meta29720;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async29719.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_29721,meta29720__$1){
var self__ = this;
var _29721__$1 = this;
return (new cljs.core.async.t_cljs$core$async29719(self__.f,self__.ch,self__.meta29717,self__._,self__.fn1,meta29720__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async29719.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_29721){
var self__ = this;
var _29721__$1 = this;
return self__.meta29720;
});})(___$1))
;

cljs.core.async.t_cljs$core$async29719.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async29719.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async29719.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async29719.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__29709_SHARP_){
return f1.call(null,(((p1__29709_SHARP_ == null))?null:self__.f.call(null,p1__29709_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async29719.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta29717","meta29717",1707188506,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async29716","cljs.core.async/t_cljs$core$async29716",1991903713,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta29720","meta29720",-380821866,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async29719.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async29719.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29719";

cljs.core.async.t_cljs$core$async29719.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__25905__auto__,writer__25906__auto__,opt__25907__auto__){
return cljs.core._write.call(null,writer__25906__auto__,"cljs.core.async/t_cljs$core$async29719");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async29719 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async29719(f__$1,ch__$1,meta29717__$1,___$2,fn1__$1,meta29720){
return (new cljs.core.async.t_cljs$core$async29719(f__$1,ch__$1,meta29717__$1,___$2,fn1__$1,meta29720));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async29719(self__.f,self__.ch,self__.meta29717,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__25282__auto__ = ret;
if(cljs.core.truth_(and__25282__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__25282__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async29716.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async29716.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async29716.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta29717","meta29717",1707188506,null)], null);
});

cljs.core.async.t_cljs$core$async29716.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async29716.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29716";

cljs.core.async.t_cljs$core$async29716.cljs$lang$ctorPrWriter = (function (this__25905__auto__,writer__25906__auto__,opt__25907__auto__){
return cljs.core._write.call(null,writer__25906__auto__,"cljs.core.async/t_cljs$core$async29716");
});

cljs.core.async.__GT_t_cljs$core$async29716 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async29716(f__$1,ch__$1,meta29717){
return (new cljs.core.async.t_cljs$core$async29716(f__$1,ch__$1,meta29717));
});

}

return (new cljs.core.async.t_cljs$core$async29716(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async29725 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29725 = (function (f,ch,meta29726){
this.f = f;
this.ch = ch;
this.meta29726 = meta29726;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async29725.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29727,meta29726__$1){
var self__ = this;
var _29727__$1 = this;
return (new cljs.core.async.t_cljs$core$async29725(self__.f,self__.ch,meta29726__$1));
});

cljs.core.async.t_cljs$core$async29725.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29727){
var self__ = this;
var _29727__$1 = this;
return self__.meta29726;
});

cljs.core.async.t_cljs$core$async29725.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async29725.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async29725.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async29725.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async29725.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async29725.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async29725.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta29726","meta29726",-454982164,null)], null);
});

cljs.core.async.t_cljs$core$async29725.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async29725.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29725";

cljs.core.async.t_cljs$core$async29725.cljs$lang$ctorPrWriter = (function (this__25905__auto__,writer__25906__auto__,opt__25907__auto__){
return cljs.core._write.call(null,writer__25906__auto__,"cljs.core.async/t_cljs$core$async29725");
});

cljs.core.async.__GT_t_cljs$core$async29725 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async29725(f__$1,ch__$1,meta29726){
return (new cljs.core.async.t_cljs$core$async29725(f__$1,ch__$1,meta29726));
});

}

return (new cljs.core.async.t_cljs$core$async29725(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async29731 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29731 = (function (p,ch,meta29732){
this.p = p;
this.ch = ch;
this.meta29732 = meta29732;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async29731.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29733,meta29732__$1){
var self__ = this;
var _29733__$1 = this;
return (new cljs.core.async.t_cljs$core$async29731(self__.p,self__.ch,meta29732__$1));
});

cljs.core.async.t_cljs$core$async29731.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29733){
var self__ = this;
var _29733__$1 = this;
return self__.meta29732;
});

cljs.core.async.t_cljs$core$async29731.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async29731.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async29731.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async29731.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async29731.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async29731.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async29731.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async29731.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta29732","meta29732",-1516632499,null)], null);
});

cljs.core.async.t_cljs$core$async29731.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async29731.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29731";

cljs.core.async.t_cljs$core$async29731.cljs$lang$ctorPrWriter = (function (this__25905__auto__,writer__25906__auto__,opt__25907__auto__){
return cljs.core._write.call(null,writer__25906__auto__,"cljs.core.async/t_cljs$core$async29731");
});

cljs.core.async.__GT_t_cljs$core$async29731 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async29731(p__$1,ch__$1,meta29732){
return (new cljs.core.async.t_cljs$core$async29731(p__$1,ch__$1,meta29732));
});

}

return (new cljs.core.async.t_cljs$core$async29731(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var args29734 = [];
var len__26407__auto___29778 = arguments.length;
var i__26408__auto___29779 = (0);
while(true){
if((i__26408__auto___29779 < len__26407__auto___29778)){
args29734.push((arguments[i__26408__auto___29779]));

var G__29780 = (i__26408__auto___29779 + (1));
i__26408__auto___29779 = G__29780;
continue;
} else {
}
break;
}

var G__29736 = args29734.length;
switch (G__29736) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args29734.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__27506__auto___29782 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27506__auto___29782,out){
return (function (){
var f__27507__auto__ = (function (){var switch__27441__auto__ = ((function (c__27506__auto___29782,out){
return (function (state_29757){
var state_val_29758 = (state_29757[(1)]);
if((state_val_29758 === (7))){
var inst_29753 = (state_29757[(2)]);
var state_29757__$1 = state_29757;
var statearr_29759_29783 = state_29757__$1;
(statearr_29759_29783[(2)] = inst_29753);

(statearr_29759_29783[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29758 === (1))){
var state_29757__$1 = state_29757;
var statearr_29760_29784 = state_29757__$1;
(statearr_29760_29784[(2)] = null);

(statearr_29760_29784[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29758 === (4))){
var inst_29739 = (state_29757[(7)]);
var inst_29739__$1 = (state_29757[(2)]);
var inst_29740 = (inst_29739__$1 == null);
var state_29757__$1 = (function (){var statearr_29761 = state_29757;
(statearr_29761[(7)] = inst_29739__$1);

return statearr_29761;
})();
if(cljs.core.truth_(inst_29740)){
var statearr_29762_29785 = state_29757__$1;
(statearr_29762_29785[(1)] = (5));

} else {
var statearr_29763_29786 = state_29757__$1;
(statearr_29763_29786[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29758 === (6))){
var inst_29739 = (state_29757[(7)]);
var inst_29744 = p.call(null,inst_29739);
var state_29757__$1 = state_29757;
if(cljs.core.truth_(inst_29744)){
var statearr_29764_29787 = state_29757__$1;
(statearr_29764_29787[(1)] = (8));

} else {
var statearr_29765_29788 = state_29757__$1;
(statearr_29765_29788[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29758 === (3))){
var inst_29755 = (state_29757[(2)]);
var state_29757__$1 = state_29757;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29757__$1,inst_29755);
} else {
if((state_val_29758 === (2))){
var state_29757__$1 = state_29757;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29757__$1,(4),ch);
} else {
if((state_val_29758 === (11))){
var inst_29747 = (state_29757[(2)]);
var state_29757__$1 = state_29757;
var statearr_29766_29789 = state_29757__$1;
(statearr_29766_29789[(2)] = inst_29747);

(statearr_29766_29789[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29758 === (9))){
var state_29757__$1 = state_29757;
var statearr_29767_29790 = state_29757__$1;
(statearr_29767_29790[(2)] = null);

(statearr_29767_29790[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29758 === (5))){
var inst_29742 = cljs.core.async.close_BANG_.call(null,out);
var state_29757__$1 = state_29757;
var statearr_29768_29791 = state_29757__$1;
(statearr_29768_29791[(2)] = inst_29742);

(statearr_29768_29791[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29758 === (10))){
var inst_29750 = (state_29757[(2)]);
var state_29757__$1 = (function (){var statearr_29769 = state_29757;
(statearr_29769[(8)] = inst_29750);

return statearr_29769;
})();
var statearr_29770_29792 = state_29757__$1;
(statearr_29770_29792[(2)] = null);

(statearr_29770_29792[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29758 === (8))){
var inst_29739 = (state_29757[(7)]);
var state_29757__$1 = state_29757;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29757__$1,(11),out,inst_29739);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__27506__auto___29782,out))
;
return ((function (switch__27441__auto__,c__27506__auto___29782,out){
return (function() {
var cljs$core$async$state_machine__27442__auto__ = null;
var cljs$core$async$state_machine__27442__auto____0 = (function (){
var statearr_29774 = [null,null,null,null,null,null,null,null,null];
(statearr_29774[(0)] = cljs$core$async$state_machine__27442__auto__);

(statearr_29774[(1)] = (1));

return statearr_29774;
});
var cljs$core$async$state_machine__27442__auto____1 = (function (state_29757){
while(true){
var ret_value__27443__auto__ = (function (){try{while(true){
var result__27444__auto__ = switch__27441__auto__.call(null,state_29757);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27444__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27444__auto__;
}
break;
}
}catch (e29775){if((e29775 instanceof Object)){
var ex__27445__auto__ = e29775;
var statearr_29776_29793 = state_29757;
(statearr_29776_29793[(5)] = ex__27445__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29757);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29775;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27443__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29794 = state_29757;
state_29757 = G__29794;
continue;
} else {
return ret_value__27443__auto__;
}
break;
}
});
cljs$core$async$state_machine__27442__auto__ = function(state_29757){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27442__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27442__auto____1.call(this,state_29757);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__27442__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27442__auto____0;
cljs$core$async$state_machine__27442__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27442__auto____1;
return cljs$core$async$state_machine__27442__auto__;
})()
;})(switch__27441__auto__,c__27506__auto___29782,out))
})();
var state__27508__auto__ = (function (){var statearr_29777 = f__27507__auto__.call(null);
(statearr_29777[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27506__auto___29782);

return statearr_29777;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27508__auto__);
});})(c__27506__auto___29782,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args29795 = [];
var len__26407__auto___29798 = arguments.length;
var i__26408__auto___29799 = (0);
while(true){
if((i__26408__auto___29799 < len__26407__auto___29798)){
args29795.push((arguments[i__26408__auto___29799]));

var G__29800 = (i__26408__auto___29799 + (1));
i__26408__auto___29799 = G__29800;
continue;
} else {
}
break;
}

var G__29797 = args29795.length;
switch (G__29797) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args29795.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__27506__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27506__auto__){
return (function (){
var f__27507__auto__ = (function (){var switch__27441__auto__ = ((function (c__27506__auto__){
return (function (state_29967){
var state_val_29968 = (state_29967[(1)]);
if((state_val_29968 === (7))){
var inst_29963 = (state_29967[(2)]);
var state_29967__$1 = state_29967;
var statearr_29969_30010 = state_29967__$1;
(statearr_29969_30010[(2)] = inst_29963);

(statearr_29969_30010[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29968 === (20))){
var inst_29933 = (state_29967[(7)]);
var inst_29944 = (state_29967[(2)]);
var inst_29945 = cljs.core.next.call(null,inst_29933);
var inst_29919 = inst_29945;
var inst_29920 = null;
var inst_29921 = (0);
var inst_29922 = (0);
var state_29967__$1 = (function (){var statearr_29970 = state_29967;
(statearr_29970[(8)] = inst_29920);

(statearr_29970[(9)] = inst_29944);

(statearr_29970[(10)] = inst_29922);

(statearr_29970[(11)] = inst_29919);

(statearr_29970[(12)] = inst_29921);

return statearr_29970;
})();
var statearr_29971_30011 = state_29967__$1;
(statearr_29971_30011[(2)] = null);

(statearr_29971_30011[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29968 === (1))){
var state_29967__$1 = state_29967;
var statearr_29972_30012 = state_29967__$1;
(statearr_29972_30012[(2)] = null);

(statearr_29972_30012[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29968 === (4))){
var inst_29908 = (state_29967[(13)]);
var inst_29908__$1 = (state_29967[(2)]);
var inst_29909 = (inst_29908__$1 == null);
var state_29967__$1 = (function (){var statearr_29973 = state_29967;
(statearr_29973[(13)] = inst_29908__$1);

return statearr_29973;
})();
if(cljs.core.truth_(inst_29909)){
var statearr_29974_30013 = state_29967__$1;
(statearr_29974_30013[(1)] = (5));

} else {
var statearr_29975_30014 = state_29967__$1;
(statearr_29975_30014[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29968 === (15))){
var state_29967__$1 = state_29967;
var statearr_29979_30015 = state_29967__$1;
(statearr_29979_30015[(2)] = null);

(statearr_29979_30015[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29968 === (21))){
var state_29967__$1 = state_29967;
var statearr_29980_30016 = state_29967__$1;
(statearr_29980_30016[(2)] = null);

(statearr_29980_30016[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29968 === (13))){
var inst_29920 = (state_29967[(8)]);
var inst_29922 = (state_29967[(10)]);
var inst_29919 = (state_29967[(11)]);
var inst_29921 = (state_29967[(12)]);
var inst_29929 = (state_29967[(2)]);
var inst_29930 = (inst_29922 + (1));
var tmp29976 = inst_29920;
var tmp29977 = inst_29919;
var tmp29978 = inst_29921;
var inst_29919__$1 = tmp29977;
var inst_29920__$1 = tmp29976;
var inst_29921__$1 = tmp29978;
var inst_29922__$1 = inst_29930;
var state_29967__$1 = (function (){var statearr_29981 = state_29967;
(statearr_29981[(8)] = inst_29920__$1);

(statearr_29981[(10)] = inst_29922__$1);

(statearr_29981[(14)] = inst_29929);

(statearr_29981[(11)] = inst_29919__$1);

(statearr_29981[(12)] = inst_29921__$1);

return statearr_29981;
})();
var statearr_29982_30017 = state_29967__$1;
(statearr_29982_30017[(2)] = null);

(statearr_29982_30017[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29968 === (22))){
var state_29967__$1 = state_29967;
var statearr_29983_30018 = state_29967__$1;
(statearr_29983_30018[(2)] = null);

(statearr_29983_30018[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29968 === (6))){
var inst_29908 = (state_29967[(13)]);
var inst_29917 = f.call(null,inst_29908);
var inst_29918 = cljs.core.seq.call(null,inst_29917);
var inst_29919 = inst_29918;
var inst_29920 = null;
var inst_29921 = (0);
var inst_29922 = (0);
var state_29967__$1 = (function (){var statearr_29984 = state_29967;
(statearr_29984[(8)] = inst_29920);

(statearr_29984[(10)] = inst_29922);

(statearr_29984[(11)] = inst_29919);

(statearr_29984[(12)] = inst_29921);

return statearr_29984;
})();
var statearr_29985_30019 = state_29967__$1;
(statearr_29985_30019[(2)] = null);

(statearr_29985_30019[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29968 === (17))){
var inst_29933 = (state_29967[(7)]);
var inst_29937 = cljs.core.chunk_first.call(null,inst_29933);
var inst_29938 = cljs.core.chunk_rest.call(null,inst_29933);
var inst_29939 = cljs.core.count.call(null,inst_29937);
var inst_29919 = inst_29938;
var inst_29920 = inst_29937;
var inst_29921 = inst_29939;
var inst_29922 = (0);
var state_29967__$1 = (function (){var statearr_29986 = state_29967;
(statearr_29986[(8)] = inst_29920);

(statearr_29986[(10)] = inst_29922);

(statearr_29986[(11)] = inst_29919);

(statearr_29986[(12)] = inst_29921);

return statearr_29986;
})();
var statearr_29987_30020 = state_29967__$1;
(statearr_29987_30020[(2)] = null);

(statearr_29987_30020[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29968 === (3))){
var inst_29965 = (state_29967[(2)]);
var state_29967__$1 = state_29967;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29967__$1,inst_29965);
} else {
if((state_val_29968 === (12))){
var inst_29953 = (state_29967[(2)]);
var state_29967__$1 = state_29967;
var statearr_29988_30021 = state_29967__$1;
(statearr_29988_30021[(2)] = inst_29953);

(statearr_29988_30021[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29968 === (2))){
var state_29967__$1 = state_29967;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29967__$1,(4),in$);
} else {
if((state_val_29968 === (23))){
var inst_29961 = (state_29967[(2)]);
var state_29967__$1 = state_29967;
var statearr_29989_30022 = state_29967__$1;
(statearr_29989_30022[(2)] = inst_29961);

(statearr_29989_30022[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29968 === (19))){
var inst_29948 = (state_29967[(2)]);
var state_29967__$1 = state_29967;
var statearr_29990_30023 = state_29967__$1;
(statearr_29990_30023[(2)] = inst_29948);

(statearr_29990_30023[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29968 === (11))){
var inst_29919 = (state_29967[(11)]);
var inst_29933 = (state_29967[(7)]);
var inst_29933__$1 = cljs.core.seq.call(null,inst_29919);
var state_29967__$1 = (function (){var statearr_29991 = state_29967;
(statearr_29991[(7)] = inst_29933__$1);

return statearr_29991;
})();
if(inst_29933__$1){
var statearr_29992_30024 = state_29967__$1;
(statearr_29992_30024[(1)] = (14));

} else {
var statearr_29993_30025 = state_29967__$1;
(statearr_29993_30025[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29968 === (9))){
var inst_29955 = (state_29967[(2)]);
var inst_29956 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_29967__$1 = (function (){var statearr_29994 = state_29967;
(statearr_29994[(15)] = inst_29955);

return statearr_29994;
})();
if(cljs.core.truth_(inst_29956)){
var statearr_29995_30026 = state_29967__$1;
(statearr_29995_30026[(1)] = (21));

} else {
var statearr_29996_30027 = state_29967__$1;
(statearr_29996_30027[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29968 === (5))){
var inst_29911 = cljs.core.async.close_BANG_.call(null,out);
var state_29967__$1 = state_29967;
var statearr_29997_30028 = state_29967__$1;
(statearr_29997_30028[(2)] = inst_29911);

(statearr_29997_30028[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29968 === (14))){
var inst_29933 = (state_29967[(7)]);
var inst_29935 = cljs.core.chunked_seq_QMARK_.call(null,inst_29933);
var state_29967__$1 = state_29967;
if(inst_29935){
var statearr_29998_30029 = state_29967__$1;
(statearr_29998_30029[(1)] = (17));

} else {
var statearr_29999_30030 = state_29967__$1;
(statearr_29999_30030[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29968 === (16))){
var inst_29951 = (state_29967[(2)]);
var state_29967__$1 = state_29967;
var statearr_30000_30031 = state_29967__$1;
(statearr_30000_30031[(2)] = inst_29951);

(statearr_30000_30031[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29968 === (10))){
var inst_29920 = (state_29967[(8)]);
var inst_29922 = (state_29967[(10)]);
var inst_29927 = cljs.core._nth.call(null,inst_29920,inst_29922);
var state_29967__$1 = state_29967;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29967__$1,(13),out,inst_29927);
} else {
if((state_val_29968 === (18))){
var inst_29933 = (state_29967[(7)]);
var inst_29942 = cljs.core.first.call(null,inst_29933);
var state_29967__$1 = state_29967;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29967__$1,(20),out,inst_29942);
} else {
if((state_val_29968 === (8))){
var inst_29922 = (state_29967[(10)]);
var inst_29921 = (state_29967[(12)]);
var inst_29924 = (inst_29922 < inst_29921);
var inst_29925 = inst_29924;
var state_29967__$1 = state_29967;
if(cljs.core.truth_(inst_29925)){
var statearr_30001_30032 = state_29967__$1;
(statearr_30001_30032[(1)] = (10));

} else {
var statearr_30002_30033 = state_29967__$1;
(statearr_30002_30033[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__27506__auto__))
;
return ((function (switch__27441__auto__,c__27506__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__27442__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__27442__auto____0 = (function (){
var statearr_30006 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30006[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__27442__auto__);

(statearr_30006[(1)] = (1));

return statearr_30006;
});
var cljs$core$async$mapcat_STAR__$_state_machine__27442__auto____1 = (function (state_29967){
while(true){
var ret_value__27443__auto__ = (function (){try{while(true){
var result__27444__auto__ = switch__27441__auto__.call(null,state_29967);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27444__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27444__auto__;
}
break;
}
}catch (e30007){if((e30007 instanceof Object)){
var ex__27445__auto__ = e30007;
var statearr_30008_30034 = state_29967;
(statearr_30008_30034[(5)] = ex__27445__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29967);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30007;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27443__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30035 = state_29967;
state_29967 = G__30035;
continue;
} else {
return ret_value__27443__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__27442__auto__ = function(state_29967){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__27442__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__27442__auto____1.call(this,state_29967);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mapcat_STAR__$_state_machine__27442__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__27442__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__27442__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__27442__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__27442__auto__;
})()
;})(switch__27441__auto__,c__27506__auto__))
})();
var state__27508__auto__ = (function (){var statearr_30009 = f__27507__auto__.call(null);
(statearr_30009[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27506__auto__);

return statearr_30009;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27508__auto__);
});})(c__27506__auto__))
);

return c__27506__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args30036 = [];
var len__26407__auto___30039 = arguments.length;
var i__26408__auto___30040 = (0);
while(true){
if((i__26408__auto___30040 < len__26407__auto___30039)){
args30036.push((arguments[i__26408__auto___30040]));

var G__30041 = (i__26408__auto___30040 + (1));
i__26408__auto___30040 = G__30041;
continue;
} else {
}
break;
}

var G__30038 = args30036.length;
switch (G__30038) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args30036.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var args30043 = [];
var len__26407__auto___30046 = arguments.length;
var i__26408__auto___30047 = (0);
while(true){
if((i__26408__auto___30047 < len__26407__auto___30046)){
args30043.push((arguments[i__26408__auto___30047]));

var G__30048 = (i__26408__auto___30047 + (1));
i__26408__auto___30047 = G__30048;
continue;
} else {
}
break;
}

var G__30045 = args30043.length;
switch (G__30045) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args30043.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var args30050 = [];
var len__26407__auto___30101 = arguments.length;
var i__26408__auto___30102 = (0);
while(true){
if((i__26408__auto___30102 < len__26407__auto___30101)){
args30050.push((arguments[i__26408__auto___30102]));

var G__30103 = (i__26408__auto___30102 + (1));
i__26408__auto___30102 = G__30103;
continue;
} else {
}
break;
}

var G__30052 = args30050.length;
switch (G__30052) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args30050.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__27506__auto___30105 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27506__auto___30105,out){
return (function (){
var f__27507__auto__ = (function (){var switch__27441__auto__ = ((function (c__27506__auto___30105,out){
return (function (state_30076){
var state_val_30077 = (state_30076[(1)]);
if((state_val_30077 === (7))){
var inst_30071 = (state_30076[(2)]);
var state_30076__$1 = state_30076;
var statearr_30078_30106 = state_30076__$1;
(statearr_30078_30106[(2)] = inst_30071);

(statearr_30078_30106[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30077 === (1))){
var inst_30053 = null;
var state_30076__$1 = (function (){var statearr_30079 = state_30076;
(statearr_30079[(7)] = inst_30053);

return statearr_30079;
})();
var statearr_30080_30107 = state_30076__$1;
(statearr_30080_30107[(2)] = null);

(statearr_30080_30107[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30077 === (4))){
var inst_30056 = (state_30076[(8)]);
var inst_30056__$1 = (state_30076[(2)]);
var inst_30057 = (inst_30056__$1 == null);
var inst_30058 = cljs.core.not.call(null,inst_30057);
var state_30076__$1 = (function (){var statearr_30081 = state_30076;
(statearr_30081[(8)] = inst_30056__$1);

return statearr_30081;
})();
if(inst_30058){
var statearr_30082_30108 = state_30076__$1;
(statearr_30082_30108[(1)] = (5));

} else {
var statearr_30083_30109 = state_30076__$1;
(statearr_30083_30109[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30077 === (6))){
var state_30076__$1 = state_30076;
var statearr_30084_30110 = state_30076__$1;
(statearr_30084_30110[(2)] = null);

(statearr_30084_30110[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30077 === (3))){
var inst_30073 = (state_30076[(2)]);
var inst_30074 = cljs.core.async.close_BANG_.call(null,out);
var state_30076__$1 = (function (){var statearr_30085 = state_30076;
(statearr_30085[(9)] = inst_30073);

return statearr_30085;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30076__$1,inst_30074);
} else {
if((state_val_30077 === (2))){
var state_30076__$1 = state_30076;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30076__$1,(4),ch);
} else {
if((state_val_30077 === (11))){
var inst_30056 = (state_30076[(8)]);
var inst_30065 = (state_30076[(2)]);
var inst_30053 = inst_30056;
var state_30076__$1 = (function (){var statearr_30086 = state_30076;
(statearr_30086[(10)] = inst_30065);

(statearr_30086[(7)] = inst_30053);

return statearr_30086;
})();
var statearr_30087_30111 = state_30076__$1;
(statearr_30087_30111[(2)] = null);

(statearr_30087_30111[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30077 === (9))){
var inst_30056 = (state_30076[(8)]);
var state_30076__$1 = state_30076;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30076__$1,(11),out,inst_30056);
} else {
if((state_val_30077 === (5))){
var inst_30056 = (state_30076[(8)]);
var inst_30053 = (state_30076[(7)]);
var inst_30060 = cljs.core._EQ_.call(null,inst_30056,inst_30053);
var state_30076__$1 = state_30076;
if(inst_30060){
var statearr_30089_30112 = state_30076__$1;
(statearr_30089_30112[(1)] = (8));

} else {
var statearr_30090_30113 = state_30076__$1;
(statearr_30090_30113[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30077 === (10))){
var inst_30068 = (state_30076[(2)]);
var state_30076__$1 = state_30076;
var statearr_30091_30114 = state_30076__$1;
(statearr_30091_30114[(2)] = inst_30068);

(statearr_30091_30114[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30077 === (8))){
var inst_30053 = (state_30076[(7)]);
var tmp30088 = inst_30053;
var inst_30053__$1 = tmp30088;
var state_30076__$1 = (function (){var statearr_30092 = state_30076;
(statearr_30092[(7)] = inst_30053__$1);

return statearr_30092;
})();
var statearr_30093_30115 = state_30076__$1;
(statearr_30093_30115[(2)] = null);

(statearr_30093_30115[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__27506__auto___30105,out))
;
return ((function (switch__27441__auto__,c__27506__auto___30105,out){
return (function() {
var cljs$core$async$state_machine__27442__auto__ = null;
var cljs$core$async$state_machine__27442__auto____0 = (function (){
var statearr_30097 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_30097[(0)] = cljs$core$async$state_machine__27442__auto__);

(statearr_30097[(1)] = (1));

return statearr_30097;
});
var cljs$core$async$state_machine__27442__auto____1 = (function (state_30076){
while(true){
var ret_value__27443__auto__ = (function (){try{while(true){
var result__27444__auto__ = switch__27441__auto__.call(null,state_30076);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27444__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27444__auto__;
}
break;
}
}catch (e30098){if((e30098 instanceof Object)){
var ex__27445__auto__ = e30098;
var statearr_30099_30116 = state_30076;
(statearr_30099_30116[(5)] = ex__27445__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30076);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30098;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27443__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30117 = state_30076;
state_30076 = G__30117;
continue;
} else {
return ret_value__27443__auto__;
}
break;
}
});
cljs$core$async$state_machine__27442__auto__ = function(state_30076){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27442__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27442__auto____1.call(this,state_30076);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__27442__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27442__auto____0;
cljs$core$async$state_machine__27442__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27442__auto____1;
return cljs$core$async$state_machine__27442__auto__;
})()
;})(switch__27441__auto__,c__27506__auto___30105,out))
})();
var state__27508__auto__ = (function (){var statearr_30100 = f__27507__auto__.call(null);
(statearr_30100[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27506__auto___30105);

return statearr_30100;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27508__auto__);
});})(c__27506__auto___30105,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args30118 = [];
var len__26407__auto___30188 = arguments.length;
var i__26408__auto___30189 = (0);
while(true){
if((i__26408__auto___30189 < len__26407__auto___30188)){
args30118.push((arguments[i__26408__auto___30189]));

var G__30190 = (i__26408__auto___30189 + (1));
i__26408__auto___30189 = G__30190;
continue;
} else {
}
break;
}

var G__30120 = args30118.length;
switch (G__30120) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args30118.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__27506__auto___30192 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27506__auto___30192,out){
return (function (){
var f__27507__auto__ = (function (){var switch__27441__auto__ = ((function (c__27506__auto___30192,out){
return (function (state_30158){
var state_val_30159 = (state_30158[(1)]);
if((state_val_30159 === (7))){
var inst_30154 = (state_30158[(2)]);
var state_30158__$1 = state_30158;
var statearr_30160_30193 = state_30158__$1;
(statearr_30160_30193[(2)] = inst_30154);

(statearr_30160_30193[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30159 === (1))){
var inst_30121 = (new Array(n));
var inst_30122 = inst_30121;
var inst_30123 = (0);
var state_30158__$1 = (function (){var statearr_30161 = state_30158;
(statearr_30161[(7)] = inst_30122);

(statearr_30161[(8)] = inst_30123);

return statearr_30161;
})();
var statearr_30162_30194 = state_30158__$1;
(statearr_30162_30194[(2)] = null);

(statearr_30162_30194[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30159 === (4))){
var inst_30126 = (state_30158[(9)]);
var inst_30126__$1 = (state_30158[(2)]);
var inst_30127 = (inst_30126__$1 == null);
var inst_30128 = cljs.core.not.call(null,inst_30127);
var state_30158__$1 = (function (){var statearr_30163 = state_30158;
(statearr_30163[(9)] = inst_30126__$1);

return statearr_30163;
})();
if(inst_30128){
var statearr_30164_30195 = state_30158__$1;
(statearr_30164_30195[(1)] = (5));

} else {
var statearr_30165_30196 = state_30158__$1;
(statearr_30165_30196[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30159 === (15))){
var inst_30148 = (state_30158[(2)]);
var state_30158__$1 = state_30158;
var statearr_30166_30197 = state_30158__$1;
(statearr_30166_30197[(2)] = inst_30148);

(statearr_30166_30197[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30159 === (13))){
var state_30158__$1 = state_30158;
var statearr_30167_30198 = state_30158__$1;
(statearr_30167_30198[(2)] = null);

(statearr_30167_30198[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30159 === (6))){
var inst_30123 = (state_30158[(8)]);
var inst_30144 = (inst_30123 > (0));
var state_30158__$1 = state_30158;
if(cljs.core.truth_(inst_30144)){
var statearr_30168_30199 = state_30158__$1;
(statearr_30168_30199[(1)] = (12));

} else {
var statearr_30169_30200 = state_30158__$1;
(statearr_30169_30200[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30159 === (3))){
var inst_30156 = (state_30158[(2)]);
var state_30158__$1 = state_30158;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30158__$1,inst_30156);
} else {
if((state_val_30159 === (12))){
var inst_30122 = (state_30158[(7)]);
var inst_30146 = cljs.core.vec.call(null,inst_30122);
var state_30158__$1 = state_30158;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30158__$1,(15),out,inst_30146);
} else {
if((state_val_30159 === (2))){
var state_30158__$1 = state_30158;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30158__$1,(4),ch);
} else {
if((state_val_30159 === (11))){
var inst_30138 = (state_30158[(2)]);
var inst_30139 = (new Array(n));
var inst_30122 = inst_30139;
var inst_30123 = (0);
var state_30158__$1 = (function (){var statearr_30170 = state_30158;
(statearr_30170[(10)] = inst_30138);

(statearr_30170[(7)] = inst_30122);

(statearr_30170[(8)] = inst_30123);

return statearr_30170;
})();
var statearr_30171_30201 = state_30158__$1;
(statearr_30171_30201[(2)] = null);

(statearr_30171_30201[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30159 === (9))){
var inst_30122 = (state_30158[(7)]);
var inst_30136 = cljs.core.vec.call(null,inst_30122);
var state_30158__$1 = state_30158;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30158__$1,(11),out,inst_30136);
} else {
if((state_val_30159 === (5))){
var inst_30122 = (state_30158[(7)]);
var inst_30123 = (state_30158[(8)]);
var inst_30126 = (state_30158[(9)]);
var inst_30131 = (state_30158[(11)]);
var inst_30130 = (inst_30122[inst_30123] = inst_30126);
var inst_30131__$1 = (inst_30123 + (1));
var inst_30132 = (inst_30131__$1 < n);
var state_30158__$1 = (function (){var statearr_30172 = state_30158;
(statearr_30172[(12)] = inst_30130);

(statearr_30172[(11)] = inst_30131__$1);

return statearr_30172;
})();
if(cljs.core.truth_(inst_30132)){
var statearr_30173_30202 = state_30158__$1;
(statearr_30173_30202[(1)] = (8));

} else {
var statearr_30174_30203 = state_30158__$1;
(statearr_30174_30203[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30159 === (14))){
var inst_30151 = (state_30158[(2)]);
var inst_30152 = cljs.core.async.close_BANG_.call(null,out);
var state_30158__$1 = (function (){var statearr_30176 = state_30158;
(statearr_30176[(13)] = inst_30151);

return statearr_30176;
})();
var statearr_30177_30204 = state_30158__$1;
(statearr_30177_30204[(2)] = inst_30152);

(statearr_30177_30204[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30159 === (10))){
var inst_30142 = (state_30158[(2)]);
var state_30158__$1 = state_30158;
var statearr_30178_30205 = state_30158__$1;
(statearr_30178_30205[(2)] = inst_30142);

(statearr_30178_30205[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30159 === (8))){
var inst_30122 = (state_30158[(7)]);
var inst_30131 = (state_30158[(11)]);
var tmp30175 = inst_30122;
var inst_30122__$1 = tmp30175;
var inst_30123 = inst_30131;
var state_30158__$1 = (function (){var statearr_30179 = state_30158;
(statearr_30179[(7)] = inst_30122__$1);

(statearr_30179[(8)] = inst_30123);

return statearr_30179;
})();
var statearr_30180_30206 = state_30158__$1;
(statearr_30180_30206[(2)] = null);

(statearr_30180_30206[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__27506__auto___30192,out))
;
return ((function (switch__27441__auto__,c__27506__auto___30192,out){
return (function() {
var cljs$core$async$state_machine__27442__auto__ = null;
var cljs$core$async$state_machine__27442__auto____0 = (function (){
var statearr_30184 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30184[(0)] = cljs$core$async$state_machine__27442__auto__);

(statearr_30184[(1)] = (1));

return statearr_30184;
});
var cljs$core$async$state_machine__27442__auto____1 = (function (state_30158){
while(true){
var ret_value__27443__auto__ = (function (){try{while(true){
var result__27444__auto__ = switch__27441__auto__.call(null,state_30158);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27444__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27444__auto__;
}
break;
}
}catch (e30185){if((e30185 instanceof Object)){
var ex__27445__auto__ = e30185;
var statearr_30186_30207 = state_30158;
(statearr_30186_30207[(5)] = ex__27445__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30158);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30185;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27443__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30208 = state_30158;
state_30158 = G__30208;
continue;
} else {
return ret_value__27443__auto__;
}
break;
}
});
cljs$core$async$state_machine__27442__auto__ = function(state_30158){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27442__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27442__auto____1.call(this,state_30158);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__27442__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27442__auto____0;
cljs$core$async$state_machine__27442__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27442__auto____1;
return cljs$core$async$state_machine__27442__auto__;
})()
;})(switch__27441__auto__,c__27506__auto___30192,out))
})();
var state__27508__auto__ = (function (){var statearr_30187 = f__27507__auto__.call(null);
(statearr_30187[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27506__auto___30192);

return statearr_30187;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27508__auto__);
});})(c__27506__auto___30192,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args30209 = [];
var len__26407__auto___30283 = arguments.length;
var i__26408__auto___30284 = (0);
while(true){
if((i__26408__auto___30284 < len__26407__auto___30283)){
args30209.push((arguments[i__26408__auto___30284]));

var G__30285 = (i__26408__auto___30284 + (1));
i__26408__auto___30284 = G__30285;
continue;
} else {
}
break;
}

var G__30211 = args30209.length;
switch (G__30211) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args30209.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__27506__auto___30287 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27506__auto___30287,out){
return (function (){
var f__27507__auto__ = (function (){var switch__27441__auto__ = ((function (c__27506__auto___30287,out){
return (function (state_30253){
var state_val_30254 = (state_30253[(1)]);
if((state_val_30254 === (7))){
var inst_30249 = (state_30253[(2)]);
var state_30253__$1 = state_30253;
var statearr_30255_30288 = state_30253__$1;
(statearr_30255_30288[(2)] = inst_30249);

(statearr_30255_30288[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30254 === (1))){
var inst_30212 = [];
var inst_30213 = inst_30212;
var inst_30214 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_30253__$1 = (function (){var statearr_30256 = state_30253;
(statearr_30256[(7)] = inst_30214);

(statearr_30256[(8)] = inst_30213);

return statearr_30256;
})();
var statearr_30257_30289 = state_30253__$1;
(statearr_30257_30289[(2)] = null);

(statearr_30257_30289[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30254 === (4))){
var inst_30217 = (state_30253[(9)]);
var inst_30217__$1 = (state_30253[(2)]);
var inst_30218 = (inst_30217__$1 == null);
var inst_30219 = cljs.core.not.call(null,inst_30218);
var state_30253__$1 = (function (){var statearr_30258 = state_30253;
(statearr_30258[(9)] = inst_30217__$1);

return statearr_30258;
})();
if(inst_30219){
var statearr_30259_30290 = state_30253__$1;
(statearr_30259_30290[(1)] = (5));

} else {
var statearr_30260_30291 = state_30253__$1;
(statearr_30260_30291[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30254 === (15))){
var inst_30243 = (state_30253[(2)]);
var state_30253__$1 = state_30253;
var statearr_30261_30292 = state_30253__$1;
(statearr_30261_30292[(2)] = inst_30243);

(statearr_30261_30292[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30254 === (13))){
var state_30253__$1 = state_30253;
var statearr_30262_30293 = state_30253__$1;
(statearr_30262_30293[(2)] = null);

(statearr_30262_30293[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30254 === (6))){
var inst_30213 = (state_30253[(8)]);
var inst_30238 = inst_30213.length;
var inst_30239 = (inst_30238 > (0));
var state_30253__$1 = state_30253;
if(cljs.core.truth_(inst_30239)){
var statearr_30263_30294 = state_30253__$1;
(statearr_30263_30294[(1)] = (12));

} else {
var statearr_30264_30295 = state_30253__$1;
(statearr_30264_30295[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30254 === (3))){
var inst_30251 = (state_30253[(2)]);
var state_30253__$1 = state_30253;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30253__$1,inst_30251);
} else {
if((state_val_30254 === (12))){
var inst_30213 = (state_30253[(8)]);
var inst_30241 = cljs.core.vec.call(null,inst_30213);
var state_30253__$1 = state_30253;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30253__$1,(15),out,inst_30241);
} else {
if((state_val_30254 === (2))){
var state_30253__$1 = state_30253;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30253__$1,(4),ch);
} else {
if((state_val_30254 === (11))){
var inst_30221 = (state_30253[(10)]);
var inst_30217 = (state_30253[(9)]);
var inst_30231 = (state_30253[(2)]);
var inst_30232 = [];
var inst_30233 = inst_30232.push(inst_30217);
var inst_30213 = inst_30232;
var inst_30214 = inst_30221;
var state_30253__$1 = (function (){var statearr_30265 = state_30253;
(statearr_30265[(7)] = inst_30214);

(statearr_30265[(11)] = inst_30231);

(statearr_30265[(8)] = inst_30213);

(statearr_30265[(12)] = inst_30233);

return statearr_30265;
})();
var statearr_30266_30296 = state_30253__$1;
(statearr_30266_30296[(2)] = null);

(statearr_30266_30296[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30254 === (9))){
var inst_30213 = (state_30253[(8)]);
var inst_30229 = cljs.core.vec.call(null,inst_30213);
var state_30253__$1 = state_30253;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30253__$1,(11),out,inst_30229);
} else {
if((state_val_30254 === (5))){
var inst_30214 = (state_30253[(7)]);
var inst_30221 = (state_30253[(10)]);
var inst_30217 = (state_30253[(9)]);
var inst_30221__$1 = f.call(null,inst_30217);
var inst_30222 = cljs.core._EQ_.call(null,inst_30221__$1,inst_30214);
var inst_30223 = cljs.core.keyword_identical_QMARK_.call(null,inst_30214,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_30224 = (inst_30222) || (inst_30223);
var state_30253__$1 = (function (){var statearr_30267 = state_30253;
(statearr_30267[(10)] = inst_30221__$1);

return statearr_30267;
})();
if(cljs.core.truth_(inst_30224)){
var statearr_30268_30297 = state_30253__$1;
(statearr_30268_30297[(1)] = (8));

} else {
var statearr_30269_30298 = state_30253__$1;
(statearr_30269_30298[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30254 === (14))){
var inst_30246 = (state_30253[(2)]);
var inst_30247 = cljs.core.async.close_BANG_.call(null,out);
var state_30253__$1 = (function (){var statearr_30271 = state_30253;
(statearr_30271[(13)] = inst_30246);

return statearr_30271;
})();
var statearr_30272_30299 = state_30253__$1;
(statearr_30272_30299[(2)] = inst_30247);

(statearr_30272_30299[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30254 === (10))){
var inst_30236 = (state_30253[(2)]);
var state_30253__$1 = state_30253;
var statearr_30273_30300 = state_30253__$1;
(statearr_30273_30300[(2)] = inst_30236);

(statearr_30273_30300[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30254 === (8))){
var inst_30221 = (state_30253[(10)]);
var inst_30217 = (state_30253[(9)]);
var inst_30213 = (state_30253[(8)]);
var inst_30226 = inst_30213.push(inst_30217);
var tmp30270 = inst_30213;
var inst_30213__$1 = tmp30270;
var inst_30214 = inst_30221;
var state_30253__$1 = (function (){var statearr_30274 = state_30253;
(statearr_30274[(7)] = inst_30214);

(statearr_30274[(8)] = inst_30213__$1);

(statearr_30274[(14)] = inst_30226);

return statearr_30274;
})();
var statearr_30275_30301 = state_30253__$1;
(statearr_30275_30301[(2)] = null);

(statearr_30275_30301[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__27506__auto___30287,out))
;
return ((function (switch__27441__auto__,c__27506__auto___30287,out){
return (function() {
var cljs$core$async$state_machine__27442__auto__ = null;
var cljs$core$async$state_machine__27442__auto____0 = (function (){
var statearr_30279 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30279[(0)] = cljs$core$async$state_machine__27442__auto__);

(statearr_30279[(1)] = (1));

return statearr_30279;
});
var cljs$core$async$state_machine__27442__auto____1 = (function (state_30253){
while(true){
var ret_value__27443__auto__ = (function (){try{while(true){
var result__27444__auto__ = switch__27441__auto__.call(null,state_30253);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27444__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27444__auto__;
}
break;
}
}catch (e30280){if((e30280 instanceof Object)){
var ex__27445__auto__ = e30280;
var statearr_30281_30302 = state_30253;
(statearr_30281_30302[(5)] = ex__27445__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30253);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30280;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27443__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30303 = state_30253;
state_30253 = G__30303;
continue;
} else {
return ret_value__27443__auto__;
}
break;
}
});
cljs$core$async$state_machine__27442__auto__ = function(state_30253){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27442__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27442__auto____1.call(this,state_30253);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__27442__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27442__auto____0;
cljs$core$async$state_machine__27442__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27442__auto____1;
return cljs$core$async$state_machine__27442__auto__;
})()
;})(switch__27441__auto__,c__27506__auto___30287,out))
})();
var state__27508__auto__ = (function (){var statearr_30282 = f__27507__auto__.call(null);
(statearr_30282[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27506__auto___30287);

return statearr_30282;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27508__auto__);
});})(c__27506__auto___30287,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1494243343395