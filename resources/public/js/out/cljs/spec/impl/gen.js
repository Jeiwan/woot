// Compiled by ClojureScript 1.9.521 {}
goog.provide('cljs.spec.impl.gen');
goog.require('cljs.core');
goog.require('cljs.core');

/**
* @constructor
 * @implements {cljs.core.IDeref}
*/
cljs.spec.impl.gen.LazyVar = (function (f,cached){
this.f = f;
this.cached = cached;
this.cljs$lang$protocol_mask$partition0$ = 32768;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.spec.impl.gen.LazyVar.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if(!((self__.cached == null))){
return self__.cached;
} else {
var x = self__.f.call(null);
if((x == null)){
} else {
self__.cached = x;
}

return x;
}
});

cljs.spec.impl.gen.LazyVar.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),cljs.core.with_meta(new cljs.core.Symbol(null,"cached","cached",-1216707864,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null))], null);
});

cljs.spec.impl.gen.LazyVar.cljs$lang$type = true;

cljs.spec.impl.gen.LazyVar.cljs$lang$ctorStr = "cljs.spec.impl.gen/LazyVar";

cljs.spec.impl.gen.LazyVar.cljs$lang$ctorPrWriter = (function (this__25905__auto__,writer__25906__auto__,opt__25907__auto__){
return cljs.core._write.call(null,writer__25906__auto__,"cljs.spec.impl.gen/LazyVar");
});

cljs.spec.impl.gen.__GT_LazyVar = (function cljs$spec$impl$gen$__GT_LazyVar(f,cached){
return (new cljs.spec.impl.gen.LazyVar(f,cached));
});

cljs.spec.impl.gen.quick_check_ref = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check.quick_check !== 'undefined')){
return clojure.test.check.quick_check;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check","quick-check","clojure.test.check/quick-check",-810344251,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check","quick-check","clojure.test.check/quick-check",-810344251,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
cljs.spec.impl.gen.quick_check = (function cljs$spec$impl$gen$quick_check(var_args){
var args__26414__auto__ = [];
var len__26407__auto___33313 = arguments.length;
var i__26408__auto___33314 = (0);
while(true){
if((i__26408__auto___33314 < len__26407__auto___33313)){
args__26414__auto__.push((arguments[i__26408__auto___33314]));

var G__33315 = (i__26408__auto___33314 + (1));
i__26408__auto___33314 = G__33315;
continue;
} else {
}
break;
}

var argseq__26415__auto__ = ((((0) < args__26414__auto__.length))?(new cljs.core.IndexedSeq(args__26414__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic(argseq__26415__auto__);
});

cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.impl.gen.quick_check_ref),args);
});

cljs.spec.impl.gen.quick_check.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.quick_check.cljs$lang$applyTo = (function (seq33312){
return cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq33312));
});

cljs.spec.impl.gen.for_all_STAR__ref = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.properties.for_all_STAR_ !== 'undefined')){
return clojure.test.check.properties.for_all_STAR_;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.properties","for-all*","clojure.test.check.properties/for-all*",67088845,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.properties","for-all*","clojure.test.check.properties/for-all*",67088845,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Dynamically loaded clojure.test.check.properties/for-all*.
 */
cljs.spec.impl.gen.for_all_STAR_ = (function cljs$spec$impl$gen$for_all_STAR_(var_args){
var args__26414__auto__ = [];
var len__26407__auto___33317 = arguments.length;
var i__26408__auto___33318 = (0);
while(true){
if((i__26408__auto___33318 < len__26407__auto___33317)){
args__26414__auto__.push((arguments[i__26408__auto___33318]));

var G__33319 = (i__26408__auto___33318 + (1));
i__26408__auto___33318 = G__33319;
continue;
} else {
}
break;
}

var argseq__26415__auto__ = ((((0) < args__26414__auto__.length))?(new cljs.core.IndexedSeq(args__26414__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__26415__auto__);
});

cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.impl.gen.for_all_STAR__ref),args);
});

cljs.spec.impl.gen.for_all_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.for_all_STAR_.cljs$lang$applyTo = (function (seq33316){
return cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq33316));
});

var g_QMARK__33320 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generator_QMARK_ !== 'undefined')){
return clojure.test.check.generators.generator_QMARK_;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
var g_33321 = (new cljs.spec.impl.gen.LazyVar(((function (g_QMARK__33320){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generate !== 'undefined')){
return clojure.test.check.generators.generate;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
});})(g_QMARK__33320))
,null));
var mkg_33322 = (new cljs.spec.impl.gen.LazyVar(((function (g_QMARK__33320,g_33321){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.__GT_Generator !== 'undefined')){
return clojure.test.check.generators.__GT_Generator;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
});})(g_QMARK__33320,g_33321))
,null));
cljs.spec.impl.gen.generator_QMARK_ = ((function (g_QMARK__33320,g_33321,mkg_33322){
return (function cljs$spec$impl$gen$generator_QMARK_(x){
return cljs.core.deref.call(null,g_QMARK__33320).call(null,x);
});})(g_QMARK__33320,g_33321,mkg_33322))
;

cljs.spec.impl.gen.generator = ((function (g_QMARK__33320,g_33321,mkg_33322){
return (function cljs$spec$impl$gen$generator(gfn){
return cljs.core.deref.call(null,mkg_33322).call(null,gfn);
});})(g_QMARK__33320,g_33321,mkg_33322))
;

/**
 * Generate a single value using generator.
 */
cljs.spec.impl.gen.generate = ((function (g_QMARK__33320,g_33321,mkg_33322){
return (function cljs$spec$impl$gen$generate(generator){
return cljs.core.deref.call(null,g_33321).call(null,generator);
});})(g_QMARK__33320,g_33321,mkg_33322))
;
cljs.spec.impl.gen.delay_impl = (function cljs$spec$impl$gen$delay_impl(gfnd){
return cljs.spec.impl.gen.generator.call(null,(function (rnd,size){
return new cljs.core.Keyword(null,"gen","gen",142575302).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,gfnd)).call(null,rnd,size);
}));
});
var g__33284__auto___33342 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.hash_map !== 'undefined')){
return clojure.test.check.generators.hash_map;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/hash-map
 */
cljs.spec.impl.gen.hash_map = ((function (g__33284__auto___33342){
return (function cljs$spec$impl$gen$hash_map(var_args){
var args__26414__auto__ = [];
var len__26407__auto___33343 = arguments.length;
var i__26408__auto___33344 = (0);
while(true){
if((i__26408__auto___33344 < len__26407__auto___33343)){
args__26414__auto__.push((arguments[i__26408__auto___33344]));

var G__33345 = (i__26408__auto___33344 + (1));
i__26408__auto___33344 = G__33345;
continue;
} else {
}
break;
}

var argseq__26415__auto__ = ((((0) < args__26414__auto__.length))?(new cljs.core.IndexedSeq(args__26414__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic(argseq__26415__auto__);
});})(g__33284__auto___33342))
;

cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__33284__auto___33342){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__33284__auto___33342),args);
});})(g__33284__auto___33342))
;

cljs.spec.impl.gen.hash_map.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.hash_map.cljs$lang$applyTo = ((function (g__33284__auto___33342){
return (function (seq33323){
return cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq33323));
});})(g__33284__auto___33342))
;


var g__33284__auto___33346 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.list !== 'undefined')){
return clojure.test.check.generators.list;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/list
 */
cljs.spec.impl.gen.list = ((function (g__33284__auto___33346){
return (function cljs$spec$impl$gen$list(var_args){
var args__26414__auto__ = [];
var len__26407__auto___33347 = arguments.length;
var i__26408__auto___33348 = (0);
while(true){
if((i__26408__auto___33348 < len__26407__auto___33347)){
args__26414__auto__.push((arguments[i__26408__auto___33348]));

var G__33349 = (i__26408__auto___33348 + (1));
i__26408__auto___33348 = G__33349;
continue;
} else {
}
break;
}

var argseq__26415__auto__ = ((((0) < args__26414__auto__.length))?(new cljs.core.IndexedSeq(args__26414__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic(argseq__26415__auto__);
});})(g__33284__auto___33346))
;

cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic = ((function (g__33284__auto___33346){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__33284__auto___33346),args);
});})(g__33284__auto___33346))
;

cljs.spec.impl.gen.list.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.list.cljs$lang$applyTo = ((function (g__33284__auto___33346){
return (function (seq33324){
return cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq33324));
});})(g__33284__auto___33346))
;


var g__33284__auto___33350 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.map !== 'undefined')){
return clojure.test.check.generators.map;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/map
 */
cljs.spec.impl.gen.map = ((function (g__33284__auto___33350){
return (function cljs$spec$impl$gen$map(var_args){
var args__26414__auto__ = [];
var len__26407__auto___33351 = arguments.length;
var i__26408__auto___33352 = (0);
while(true){
if((i__26408__auto___33352 < len__26407__auto___33351)){
args__26414__auto__.push((arguments[i__26408__auto___33352]));

var G__33353 = (i__26408__auto___33352 + (1));
i__26408__auto___33352 = G__33353;
continue;
} else {
}
break;
}

var argseq__26415__auto__ = ((((0) < args__26414__auto__.length))?(new cljs.core.IndexedSeq(args__26414__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic(argseq__26415__auto__);
});})(g__33284__auto___33350))
;

cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__33284__auto___33350){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__33284__auto___33350),args);
});})(g__33284__auto___33350))
;

cljs.spec.impl.gen.map.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.map.cljs$lang$applyTo = ((function (g__33284__auto___33350){
return (function (seq33325){
return cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq33325));
});})(g__33284__auto___33350))
;


var g__33284__auto___33354 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.not_empty !== 'undefined')){
return clojure.test.check.generators.not_empty;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/not-empty
 */
cljs.spec.impl.gen.not_empty = ((function (g__33284__auto___33354){
return (function cljs$spec$impl$gen$not_empty(var_args){
var args__26414__auto__ = [];
var len__26407__auto___33355 = arguments.length;
var i__26408__auto___33356 = (0);
while(true){
if((i__26408__auto___33356 < len__26407__auto___33355)){
args__26414__auto__.push((arguments[i__26408__auto___33356]));

var G__33357 = (i__26408__auto___33356 + (1));
i__26408__auto___33356 = G__33357;
continue;
} else {
}
break;
}

var argseq__26415__auto__ = ((((0) < args__26414__auto__.length))?(new cljs.core.IndexedSeq(args__26414__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic(argseq__26415__auto__);
});})(g__33284__auto___33354))
;

cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic = ((function (g__33284__auto___33354){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__33284__auto___33354),args);
});})(g__33284__auto___33354))
;

cljs.spec.impl.gen.not_empty.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.not_empty.cljs$lang$applyTo = ((function (g__33284__auto___33354){
return (function (seq33326){
return cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq33326));
});})(g__33284__auto___33354))
;


var g__33284__auto___33358 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.set !== 'undefined')){
return clojure.test.check.generators.set;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/set
 */
cljs.spec.impl.gen.set = ((function (g__33284__auto___33358){
return (function cljs$spec$impl$gen$set(var_args){
var args__26414__auto__ = [];
var len__26407__auto___33359 = arguments.length;
var i__26408__auto___33360 = (0);
while(true){
if((i__26408__auto___33360 < len__26407__auto___33359)){
args__26414__auto__.push((arguments[i__26408__auto___33360]));

var G__33361 = (i__26408__auto___33360 + (1));
i__26408__auto___33360 = G__33361;
continue;
} else {
}
break;
}

var argseq__26415__auto__ = ((((0) < args__26414__auto__.length))?(new cljs.core.IndexedSeq(args__26414__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic(argseq__26415__auto__);
});})(g__33284__auto___33358))
;

cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic = ((function (g__33284__auto___33358){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__33284__auto___33358),args);
});})(g__33284__auto___33358))
;

cljs.spec.impl.gen.set.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.set.cljs$lang$applyTo = ((function (g__33284__auto___33358){
return (function (seq33327){
return cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq33327));
});})(g__33284__auto___33358))
;


var g__33284__auto___33362 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector !== 'undefined')){
return clojure.test.check.generators.vector;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector
 */
cljs.spec.impl.gen.vector = ((function (g__33284__auto___33362){
return (function cljs$spec$impl$gen$vector(var_args){
var args__26414__auto__ = [];
var len__26407__auto___33363 = arguments.length;
var i__26408__auto___33364 = (0);
while(true){
if((i__26408__auto___33364 < len__26407__auto___33363)){
args__26414__auto__.push((arguments[i__26408__auto___33364]));

var G__33365 = (i__26408__auto___33364 + (1));
i__26408__auto___33364 = G__33365;
continue;
} else {
}
break;
}

var argseq__26415__auto__ = ((((0) < args__26414__auto__.length))?(new cljs.core.IndexedSeq(args__26414__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic(argseq__26415__auto__);
});})(g__33284__auto___33362))
;

cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic = ((function (g__33284__auto___33362){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__33284__auto___33362),args);
});})(g__33284__auto___33362))
;

cljs.spec.impl.gen.vector.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.vector.cljs$lang$applyTo = ((function (g__33284__auto___33362){
return (function (seq33328){
return cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq33328));
});})(g__33284__auto___33362))
;


var g__33284__auto___33366 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector_distinct !== 'undefined')){
return clojure.test.check.generators.vector_distinct;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector-distinct
 */
cljs.spec.impl.gen.vector_distinct = ((function (g__33284__auto___33366){
return (function cljs$spec$impl$gen$vector_distinct(var_args){
var args__26414__auto__ = [];
var len__26407__auto___33367 = arguments.length;
var i__26408__auto___33368 = (0);
while(true){
if((i__26408__auto___33368 < len__26407__auto___33367)){
args__26414__auto__.push((arguments[i__26408__auto___33368]));

var G__33369 = (i__26408__auto___33368 + (1));
i__26408__auto___33368 = G__33369;
continue;
} else {
}
break;
}

var argseq__26415__auto__ = ((((0) < args__26414__auto__.length))?(new cljs.core.IndexedSeq(args__26414__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(argseq__26415__auto__);
});})(g__33284__auto___33366))
;

cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic = ((function (g__33284__auto___33366){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__33284__auto___33366),args);
});})(g__33284__auto___33366))
;

cljs.spec.impl.gen.vector_distinct.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.vector_distinct.cljs$lang$applyTo = ((function (g__33284__auto___33366){
return (function (seq33329){
return cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq33329));
});})(g__33284__auto___33366))
;


var g__33284__auto___33370 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.fmap !== 'undefined')){
return clojure.test.check.generators.fmap;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/fmap
 */
cljs.spec.impl.gen.fmap = ((function (g__33284__auto___33370){
return (function cljs$spec$impl$gen$fmap(var_args){
var args__26414__auto__ = [];
var len__26407__auto___33371 = arguments.length;
var i__26408__auto___33372 = (0);
while(true){
if((i__26408__auto___33372 < len__26407__auto___33371)){
args__26414__auto__.push((arguments[i__26408__auto___33372]));

var G__33373 = (i__26408__auto___33372 + (1));
i__26408__auto___33372 = G__33373;
continue;
} else {
}
break;
}

var argseq__26415__auto__ = ((((0) < args__26414__auto__.length))?(new cljs.core.IndexedSeq(args__26414__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic(argseq__26415__auto__);
});})(g__33284__auto___33370))
;

cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic = ((function (g__33284__auto___33370){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__33284__auto___33370),args);
});})(g__33284__auto___33370))
;

cljs.spec.impl.gen.fmap.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.fmap.cljs$lang$applyTo = ((function (g__33284__auto___33370){
return (function (seq33330){
return cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq33330));
});})(g__33284__auto___33370))
;


var g__33284__auto___33374 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.elements !== 'undefined')){
return clojure.test.check.generators.elements;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/elements
 */
cljs.spec.impl.gen.elements = ((function (g__33284__auto___33374){
return (function cljs$spec$impl$gen$elements(var_args){
var args__26414__auto__ = [];
var len__26407__auto___33375 = arguments.length;
var i__26408__auto___33376 = (0);
while(true){
if((i__26408__auto___33376 < len__26407__auto___33375)){
args__26414__auto__.push((arguments[i__26408__auto___33376]));

var G__33377 = (i__26408__auto___33376 + (1));
i__26408__auto___33376 = G__33377;
continue;
} else {
}
break;
}

var argseq__26415__auto__ = ((((0) < args__26414__auto__.length))?(new cljs.core.IndexedSeq(args__26414__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic(argseq__26415__auto__);
});})(g__33284__auto___33374))
;

cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic = ((function (g__33284__auto___33374){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__33284__auto___33374),args);
});})(g__33284__auto___33374))
;

cljs.spec.impl.gen.elements.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.elements.cljs$lang$applyTo = ((function (g__33284__auto___33374){
return (function (seq33331){
return cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq33331));
});})(g__33284__auto___33374))
;


var g__33284__auto___33378 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.bind !== 'undefined')){
return clojure.test.check.generators.bind;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/bind
 */
cljs.spec.impl.gen.bind = ((function (g__33284__auto___33378){
return (function cljs$spec$impl$gen$bind(var_args){
var args__26414__auto__ = [];
var len__26407__auto___33379 = arguments.length;
var i__26408__auto___33380 = (0);
while(true){
if((i__26408__auto___33380 < len__26407__auto___33379)){
args__26414__auto__.push((arguments[i__26408__auto___33380]));

var G__33381 = (i__26408__auto___33380 + (1));
i__26408__auto___33380 = G__33381;
continue;
} else {
}
break;
}

var argseq__26415__auto__ = ((((0) < args__26414__auto__.length))?(new cljs.core.IndexedSeq(args__26414__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic(argseq__26415__auto__);
});})(g__33284__auto___33378))
;

cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic = ((function (g__33284__auto___33378){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__33284__auto___33378),args);
});})(g__33284__auto___33378))
;

cljs.spec.impl.gen.bind.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.bind.cljs$lang$applyTo = ((function (g__33284__auto___33378){
return (function (seq33332){
return cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq33332));
});})(g__33284__auto___33378))
;


var g__33284__auto___33382 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.choose !== 'undefined')){
return clojure.test.check.generators.choose;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/choose
 */
cljs.spec.impl.gen.choose = ((function (g__33284__auto___33382){
return (function cljs$spec$impl$gen$choose(var_args){
var args__26414__auto__ = [];
var len__26407__auto___33383 = arguments.length;
var i__26408__auto___33384 = (0);
while(true){
if((i__26408__auto___33384 < len__26407__auto___33383)){
args__26414__auto__.push((arguments[i__26408__auto___33384]));

var G__33385 = (i__26408__auto___33384 + (1));
i__26408__auto___33384 = G__33385;
continue;
} else {
}
break;
}

var argseq__26415__auto__ = ((((0) < args__26414__auto__.length))?(new cljs.core.IndexedSeq(args__26414__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic(argseq__26415__auto__);
});})(g__33284__auto___33382))
;

cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic = ((function (g__33284__auto___33382){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__33284__auto___33382),args);
});})(g__33284__auto___33382))
;

cljs.spec.impl.gen.choose.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.choose.cljs$lang$applyTo = ((function (g__33284__auto___33382){
return (function (seq33333){
return cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq33333));
});})(g__33284__auto___33382))
;


var g__33284__auto___33386 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.one_of !== 'undefined')){
return clojure.test.check.generators.one_of;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/one-of
 */
cljs.spec.impl.gen.one_of = ((function (g__33284__auto___33386){
return (function cljs$spec$impl$gen$one_of(var_args){
var args__26414__auto__ = [];
var len__26407__auto___33387 = arguments.length;
var i__26408__auto___33388 = (0);
while(true){
if((i__26408__auto___33388 < len__26407__auto___33387)){
args__26414__auto__.push((arguments[i__26408__auto___33388]));

var G__33389 = (i__26408__auto___33388 + (1));
i__26408__auto___33388 = G__33389;
continue;
} else {
}
break;
}

var argseq__26415__auto__ = ((((0) < args__26414__auto__.length))?(new cljs.core.IndexedSeq(args__26414__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic(argseq__26415__auto__);
});})(g__33284__auto___33386))
;

cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic = ((function (g__33284__auto___33386){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__33284__auto___33386),args);
});})(g__33284__auto___33386))
;

cljs.spec.impl.gen.one_of.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.one_of.cljs$lang$applyTo = ((function (g__33284__auto___33386){
return (function (seq33334){
return cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq33334));
});})(g__33284__auto___33386))
;


var g__33284__auto___33390 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.such_that !== 'undefined')){
return clojure.test.check.generators.such_that;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/such-that
 */
cljs.spec.impl.gen.such_that = ((function (g__33284__auto___33390){
return (function cljs$spec$impl$gen$such_that(var_args){
var args__26414__auto__ = [];
var len__26407__auto___33391 = arguments.length;
var i__26408__auto___33392 = (0);
while(true){
if((i__26408__auto___33392 < len__26407__auto___33391)){
args__26414__auto__.push((arguments[i__26408__auto___33392]));

var G__33393 = (i__26408__auto___33392 + (1));
i__26408__auto___33392 = G__33393;
continue;
} else {
}
break;
}

var argseq__26415__auto__ = ((((0) < args__26414__auto__.length))?(new cljs.core.IndexedSeq(args__26414__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic(argseq__26415__auto__);
});})(g__33284__auto___33390))
;

cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic = ((function (g__33284__auto___33390){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__33284__auto___33390),args);
});})(g__33284__auto___33390))
;

cljs.spec.impl.gen.such_that.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.such_that.cljs$lang$applyTo = ((function (g__33284__auto___33390){
return (function (seq33335){
return cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq33335));
});})(g__33284__auto___33390))
;


var g__33284__auto___33394 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.tuple !== 'undefined')){
return clojure.test.check.generators.tuple;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/tuple
 */
cljs.spec.impl.gen.tuple = ((function (g__33284__auto___33394){
return (function cljs$spec$impl$gen$tuple(var_args){
var args__26414__auto__ = [];
var len__26407__auto___33395 = arguments.length;
var i__26408__auto___33396 = (0);
while(true){
if((i__26408__auto___33396 < len__26407__auto___33395)){
args__26414__auto__.push((arguments[i__26408__auto___33396]));

var G__33397 = (i__26408__auto___33396 + (1));
i__26408__auto___33396 = G__33397;
continue;
} else {
}
break;
}

var argseq__26415__auto__ = ((((0) < args__26414__auto__.length))?(new cljs.core.IndexedSeq(args__26414__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic(argseq__26415__auto__);
});})(g__33284__auto___33394))
;

cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic = ((function (g__33284__auto___33394){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__33284__auto___33394),args);
});})(g__33284__auto___33394))
;

cljs.spec.impl.gen.tuple.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.tuple.cljs$lang$applyTo = ((function (g__33284__auto___33394){
return (function (seq33336){
return cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq33336));
});})(g__33284__auto___33394))
;


var g__33284__auto___33398 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.sample !== 'undefined')){
return clojure.test.check.generators.sample;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/sample
 */
cljs.spec.impl.gen.sample = ((function (g__33284__auto___33398){
return (function cljs$spec$impl$gen$sample(var_args){
var args__26414__auto__ = [];
var len__26407__auto___33399 = arguments.length;
var i__26408__auto___33400 = (0);
while(true){
if((i__26408__auto___33400 < len__26407__auto___33399)){
args__26414__auto__.push((arguments[i__26408__auto___33400]));

var G__33401 = (i__26408__auto___33400 + (1));
i__26408__auto___33400 = G__33401;
continue;
} else {
}
break;
}

var argseq__26415__auto__ = ((((0) < args__26414__auto__.length))?(new cljs.core.IndexedSeq(args__26414__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic(argseq__26415__auto__);
});})(g__33284__auto___33398))
;

cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic = ((function (g__33284__auto___33398){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__33284__auto___33398),args);
});})(g__33284__auto___33398))
;

cljs.spec.impl.gen.sample.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.sample.cljs$lang$applyTo = ((function (g__33284__auto___33398){
return (function (seq33337){
return cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq33337));
});})(g__33284__auto___33398))
;


var g__33284__auto___33402 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.return$ !== 'undefined')){
return clojure.test.check.generators.return$;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/return
 */
cljs.spec.impl.gen.return$ = ((function (g__33284__auto___33402){
return (function cljs$spec$impl$gen$return(var_args){
var args__26414__auto__ = [];
var len__26407__auto___33403 = arguments.length;
var i__26408__auto___33404 = (0);
while(true){
if((i__26408__auto___33404 < len__26407__auto___33403)){
args__26414__auto__.push((arguments[i__26408__auto___33404]));

var G__33405 = (i__26408__auto___33404 + (1));
i__26408__auto___33404 = G__33405;
continue;
} else {
}
break;
}

var argseq__26415__auto__ = ((((0) < args__26414__auto__.length))?(new cljs.core.IndexedSeq(args__26414__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic(argseq__26415__auto__);
});})(g__33284__auto___33402))
;

cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__33284__auto___33402){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__33284__auto___33402),args);
});})(g__33284__auto___33402))
;

cljs.spec.impl.gen.return$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.return$.cljs$lang$applyTo = ((function (g__33284__auto___33402){
return (function (seq33338){
return cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq33338));
});})(g__33284__auto___33402))
;


var g__33284__auto___33406 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer_STAR_ !== 'undefined')){
return clojure.test.check.generators.large_integer_STAR_;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/large-integer*
 */
cljs.spec.impl.gen.large_integer_STAR_ = ((function (g__33284__auto___33406){
return (function cljs$spec$impl$gen$large_integer_STAR_(var_args){
var args__26414__auto__ = [];
var len__26407__auto___33407 = arguments.length;
var i__26408__auto___33408 = (0);
while(true){
if((i__26408__auto___33408 < len__26407__auto___33407)){
args__26414__auto__.push((arguments[i__26408__auto___33408]));

var G__33409 = (i__26408__auto___33408 + (1));
i__26408__auto___33408 = G__33409;
continue;
} else {
}
break;
}

var argseq__26415__auto__ = ((((0) < args__26414__auto__.length))?(new cljs.core.IndexedSeq(args__26414__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__26415__auto__);
});})(g__33284__auto___33406))
;

cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__33284__auto___33406){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__33284__auto___33406),args);
});})(g__33284__auto___33406))
;

cljs.spec.impl.gen.large_integer_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.large_integer_STAR_.cljs$lang$applyTo = ((function (g__33284__auto___33406){
return (function (seq33339){
return cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq33339));
});})(g__33284__auto___33406))
;


var g__33284__auto___33410 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double_STAR_ !== 'undefined')){
return clojure.test.check.generators.double_STAR_;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/double*
 */
cljs.spec.impl.gen.double_STAR_ = ((function (g__33284__auto___33410){
return (function cljs$spec$impl$gen$double_STAR_(var_args){
var args__26414__auto__ = [];
var len__26407__auto___33411 = arguments.length;
var i__26408__auto___33412 = (0);
while(true){
if((i__26408__auto___33412 < len__26407__auto___33411)){
args__26414__auto__.push((arguments[i__26408__auto___33412]));

var G__33413 = (i__26408__auto___33412 + (1));
i__26408__auto___33412 = G__33413;
continue;
} else {
}
break;
}

var argseq__26415__auto__ = ((((0) < args__26414__auto__.length))?(new cljs.core.IndexedSeq(args__26414__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__26415__auto__);
});})(g__33284__auto___33410))
;

cljs.spec.impl.gen.double_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__33284__auto___33410){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__33284__auto___33410),args);
});})(g__33284__auto___33410))
;

cljs.spec.impl.gen.double_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.double_STAR_.cljs$lang$applyTo = ((function (g__33284__auto___33410){
return (function (seq33340){
return cljs.spec.impl.gen.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq33340));
});})(g__33284__auto___33410))
;


var g__33284__auto___33414 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.frequency !== 'undefined')){
return clojure.test.check.generators.frequency;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","frequency","clojure.test.check.generators/frequency",2090703177,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","frequency","clojure.test.check.generators/frequency",2090703177,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/frequency
 */
cljs.spec.impl.gen.frequency = ((function (g__33284__auto___33414){
return (function cljs$spec$impl$gen$frequency(var_args){
var args__26414__auto__ = [];
var len__26407__auto___33415 = arguments.length;
var i__26408__auto___33416 = (0);
while(true){
if((i__26408__auto___33416 < len__26407__auto___33415)){
args__26414__auto__.push((arguments[i__26408__auto___33416]));

var G__33417 = (i__26408__auto___33416 + (1));
i__26408__auto___33416 = G__33417;
continue;
} else {
}
break;
}

var argseq__26415__auto__ = ((((0) < args__26414__auto__.length))?(new cljs.core.IndexedSeq(args__26414__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.frequency.cljs$core$IFn$_invoke$arity$variadic(argseq__26415__auto__);
});})(g__33284__auto___33414))
;

cljs.spec.impl.gen.frequency.cljs$core$IFn$_invoke$arity$variadic = ((function (g__33284__auto___33414){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__33284__auto___33414),args);
});})(g__33284__auto___33414))
;

cljs.spec.impl.gen.frequency.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.frequency.cljs$lang$applyTo = ((function (g__33284__auto___33414){
return (function (seq33341){
return cljs.spec.impl.gen.frequency.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq33341));
});})(g__33284__auto___33414))
;

var g__33297__auto___33439 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any !== 'undefined')){
return clojure.test.check.generators.any;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any
 */
cljs.spec.impl.gen.any = ((function (g__33297__auto___33439){
return (function cljs$spec$impl$gen$any(var_args){
var args__26414__auto__ = [];
var len__26407__auto___33440 = arguments.length;
var i__26408__auto___33441 = (0);
while(true){
if((i__26408__auto___33441 < len__26407__auto___33440)){
args__26414__auto__.push((arguments[i__26408__auto___33441]));

var G__33442 = (i__26408__auto___33441 + (1));
i__26408__auto___33441 = G__33442;
continue;
} else {
}
break;
}

var argseq__26415__auto__ = ((((0) < args__26414__auto__.length))?(new cljs.core.IndexedSeq(args__26414__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic(argseq__26415__auto__);
});})(g__33297__auto___33439))
;

cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic = ((function (g__33297__auto___33439){
return (function (args){
return cljs.core.deref.call(null,g__33297__auto___33439);
});})(g__33297__auto___33439))
;

cljs.spec.impl.gen.any.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.any.cljs$lang$applyTo = ((function (g__33297__auto___33439){
return (function (seq33418){
return cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq33418));
});})(g__33297__auto___33439))
;


var g__33297__auto___33443 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any_printable !== 'undefined')){
return clojure.test.check.generators.any_printable;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any-printable
 */
cljs.spec.impl.gen.any_printable = ((function (g__33297__auto___33443){
return (function cljs$spec$impl$gen$any_printable(var_args){
var args__26414__auto__ = [];
var len__26407__auto___33444 = arguments.length;
var i__26408__auto___33445 = (0);
while(true){
if((i__26408__auto___33445 < len__26407__auto___33444)){
args__26414__auto__.push((arguments[i__26408__auto___33445]));

var G__33446 = (i__26408__auto___33445 + (1));
i__26408__auto___33445 = G__33446;
continue;
} else {
}
break;
}

var argseq__26415__auto__ = ((((0) < args__26414__auto__.length))?(new cljs.core.IndexedSeq(args__26414__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__26415__auto__);
});})(g__33297__auto___33443))
;

cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__33297__auto___33443){
return (function (args){
return cljs.core.deref.call(null,g__33297__auto___33443);
});})(g__33297__auto___33443))
;

cljs.spec.impl.gen.any_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.any_printable.cljs$lang$applyTo = ((function (g__33297__auto___33443){
return (function (seq33419){
return cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq33419));
});})(g__33297__auto___33443))
;


var g__33297__auto___33447 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.boolean$ !== 'undefined')){
return clojure.test.check.generators.boolean$;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/boolean
 */
cljs.spec.impl.gen.boolean$ = ((function (g__33297__auto___33447){
return (function cljs$spec$impl$gen$boolean(var_args){
var args__26414__auto__ = [];
var len__26407__auto___33448 = arguments.length;
var i__26408__auto___33449 = (0);
while(true){
if((i__26408__auto___33449 < len__26407__auto___33448)){
args__26414__auto__.push((arguments[i__26408__auto___33449]));

var G__33450 = (i__26408__auto___33449 + (1));
i__26408__auto___33449 = G__33450;
continue;
} else {
}
break;
}

var argseq__26415__auto__ = ((((0) < args__26414__auto__.length))?(new cljs.core.IndexedSeq(args__26414__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic(argseq__26415__auto__);
});})(g__33297__auto___33447))
;

cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__33297__auto___33447){
return (function (args){
return cljs.core.deref.call(null,g__33297__auto___33447);
});})(g__33297__auto___33447))
;

cljs.spec.impl.gen.boolean$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.boolean$.cljs$lang$applyTo = ((function (g__33297__auto___33447){
return (function (seq33420){
return cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq33420));
});})(g__33297__auto___33447))
;


var g__33297__auto___33451 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char$ !== 'undefined')){
return clojure.test.check.generators.char$;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char
 */
cljs.spec.impl.gen.char$ = ((function (g__33297__auto___33451){
return (function cljs$spec$impl$gen$char(var_args){
var args__26414__auto__ = [];
var len__26407__auto___33452 = arguments.length;
var i__26408__auto___33453 = (0);
while(true){
if((i__26408__auto___33453 < len__26407__auto___33452)){
args__26414__auto__.push((arguments[i__26408__auto___33453]));

var G__33454 = (i__26408__auto___33453 + (1));
i__26408__auto___33453 = G__33454;
continue;
} else {
}
break;
}

var argseq__26415__auto__ = ((((0) < args__26414__auto__.length))?(new cljs.core.IndexedSeq(args__26414__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic(argseq__26415__auto__);
});})(g__33297__auto___33451))
;

cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__33297__auto___33451){
return (function (args){
return cljs.core.deref.call(null,g__33297__auto___33451);
});})(g__33297__auto___33451))
;

cljs.spec.impl.gen.char$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char$.cljs$lang$applyTo = ((function (g__33297__auto___33451){
return (function (seq33421){
return cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq33421));
});})(g__33297__auto___33451))
;


var g__33297__auto___33455 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alpha !== 'undefined')){
return clojure.test.check.generators.char_alpha;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alpha
 */
cljs.spec.impl.gen.char_alpha = ((function (g__33297__auto___33455){
return (function cljs$spec$impl$gen$char_alpha(var_args){
var args__26414__auto__ = [];
var len__26407__auto___33456 = arguments.length;
var i__26408__auto___33457 = (0);
while(true){
if((i__26408__auto___33457 < len__26407__auto___33456)){
args__26414__auto__.push((arguments[i__26408__auto___33457]));

var G__33458 = (i__26408__auto___33457 + (1));
i__26408__auto___33457 = G__33458;
continue;
} else {
}
break;
}

var argseq__26415__auto__ = ((((0) < args__26414__auto__.length))?(new cljs.core.IndexedSeq(args__26414__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic(argseq__26415__auto__);
});})(g__33297__auto___33455))
;

cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic = ((function (g__33297__auto___33455){
return (function (args){
return cljs.core.deref.call(null,g__33297__auto___33455);
});})(g__33297__auto___33455))
;

cljs.spec.impl.gen.char_alpha.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_alpha.cljs$lang$applyTo = ((function (g__33297__auto___33455){
return (function (seq33422){
return cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq33422));
});})(g__33297__auto___33455))
;


var g__33297__auto___33459 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alphanumeric !== 'undefined')){
return clojure.test.check.generators.char_alphanumeric;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alphanumeric
 */
cljs.spec.impl.gen.char_alphanumeric = ((function (g__33297__auto___33459){
return (function cljs$spec$impl$gen$char_alphanumeric(var_args){
var args__26414__auto__ = [];
var len__26407__auto___33460 = arguments.length;
var i__26408__auto___33461 = (0);
while(true){
if((i__26408__auto___33461 < len__26407__auto___33460)){
args__26414__auto__.push((arguments[i__26408__auto___33461]));

var G__33462 = (i__26408__auto___33461 + (1));
i__26408__auto___33461 = G__33462;
continue;
} else {
}
break;
}

var argseq__26415__auto__ = ((((0) < args__26414__auto__.length))?(new cljs.core.IndexedSeq(args__26414__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__26415__auto__);
});})(g__33297__auto___33459))
;

cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__33297__auto___33459){
return (function (args){
return cljs.core.deref.call(null,g__33297__auto___33459);
});})(g__33297__auto___33459))
;

cljs.spec.impl.gen.char_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_alphanumeric.cljs$lang$applyTo = ((function (g__33297__auto___33459){
return (function (seq33423){
return cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq33423));
});})(g__33297__auto___33459))
;


var g__33297__auto___33463 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_ascii !== 'undefined')){
return clojure.test.check.generators.char_ascii;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-ascii
 */
cljs.spec.impl.gen.char_ascii = ((function (g__33297__auto___33463){
return (function cljs$spec$impl$gen$char_ascii(var_args){
var args__26414__auto__ = [];
var len__26407__auto___33464 = arguments.length;
var i__26408__auto___33465 = (0);
while(true){
if((i__26408__auto___33465 < len__26407__auto___33464)){
args__26414__auto__.push((arguments[i__26408__auto___33465]));

var G__33466 = (i__26408__auto___33465 + (1));
i__26408__auto___33465 = G__33466;
continue;
} else {
}
break;
}

var argseq__26415__auto__ = ((((0) < args__26414__auto__.length))?(new cljs.core.IndexedSeq(args__26414__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__26415__auto__);
});})(g__33297__auto___33463))
;

cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__33297__auto___33463){
return (function (args){
return cljs.core.deref.call(null,g__33297__auto___33463);
});})(g__33297__auto___33463))
;

cljs.spec.impl.gen.char_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_ascii.cljs$lang$applyTo = ((function (g__33297__auto___33463){
return (function (seq33424){
return cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq33424));
});})(g__33297__auto___33463))
;


var g__33297__auto___33467 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double$ !== 'undefined')){
return clojure.test.check.generators.double$;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/double
 */
cljs.spec.impl.gen.double$ = ((function (g__33297__auto___33467){
return (function cljs$spec$impl$gen$double(var_args){
var args__26414__auto__ = [];
var len__26407__auto___33468 = arguments.length;
var i__26408__auto___33469 = (0);
while(true){
if((i__26408__auto___33469 < len__26407__auto___33468)){
args__26414__auto__.push((arguments[i__26408__auto___33469]));

var G__33470 = (i__26408__auto___33469 + (1));
i__26408__auto___33469 = G__33470;
continue;
} else {
}
break;
}

var argseq__26415__auto__ = ((((0) < args__26414__auto__.length))?(new cljs.core.IndexedSeq(args__26414__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic(argseq__26415__auto__);
});})(g__33297__auto___33467))
;

cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__33297__auto___33467){
return (function (args){
return cljs.core.deref.call(null,g__33297__auto___33467);
});})(g__33297__auto___33467))
;

cljs.spec.impl.gen.double$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.double$.cljs$lang$applyTo = ((function (g__33297__auto___33467){
return (function (seq33425){
return cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq33425));
});})(g__33297__auto___33467))
;


var g__33297__auto___33471 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.int$ !== 'undefined')){
return clojure.test.check.generators.int$;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/int
 */
cljs.spec.impl.gen.int$ = ((function (g__33297__auto___33471){
return (function cljs$spec$impl$gen$int(var_args){
var args__26414__auto__ = [];
var len__26407__auto___33472 = arguments.length;
var i__26408__auto___33473 = (0);
while(true){
if((i__26408__auto___33473 < len__26407__auto___33472)){
args__26414__auto__.push((arguments[i__26408__auto___33473]));

var G__33474 = (i__26408__auto___33473 + (1));
i__26408__auto___33473 = G__33474;
continue;
} else {
}
break;
}

var argseq__26415__auto__ = ((((0) < args__26414__auto__.length))?(new cljs.core.IndexedSeq(args__26414__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic(argseq__26415__auto__);
});})(g__33297__auto___33471))
;

cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__33297__auto___33471){
return (function (args){
return cljs.core.deref.call(null,g__33297__auto___33471);
});})(g__33297__auto___33471))
;

cljs.spec.impl.gen.int$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.int$.cljs$lang$applyTo = ((function (g__33297__auto___33471){
return (function (seq33426){
return cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq33426));
});})(g__33297__auto___33471))
;


var g__33297__auto___33475 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword !== 'undefined')){
return clojure.test.check.generators.keyword;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword
 */
cljs.spec.impl.gen.keyword = ((function (g__33297__auto___33475){
return (function cljs$spec$impl$gen$keyword(var_args){
var args__26414__auto__ = [];
var len__26407__auto___33476 = arguments.length;
var i__26408__auto___33477 = (0);
while(true){
if((i__26408__auto___33477 < len__26407__auto___33476)){
args__26414__auto__.push((arguments[i__26408__auto___33477]));

var G__33478 = (i__26408__auto___33477 + (1));
i__26408__auto___33477 = G__33478;
continue;
} else {
}
break;
}

var argseq__26415__auto__ = ((((0) < args__26414__auto__.length))?(new cljs.core.IndexedSeq(args__26414__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic(argseq__26415__auto__);
});})(g__33297__auto___33475))
;

cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic = ((function (g__33297__auto___33475){
return (function (args){
return cljs.core.deref.call(null,g__33297__auto___33475);
});})(g__33297__auto___33475))
;

cljs.spec.impl.gen.keyword.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.keyword.cljs$lang$applyTo = ((function (g__33297__auto___33475){
return (function (seq33427){
return cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq33427));
});})(g__33297__auto___33475))
;


var g__33297__auto___33479 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword_ns !== 'undefined')){
return clojure.test.check.generators.keyword_ns;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword-ns
 */
cljs.spec.impl.gen.keyword_ns = ((function (g__33297__auto___33479){
return (function cljs$spec$impl$gen$keyword_ns(var_args){
var args__26414__auto__ = [];
var len__26407__auto___33480 = arguments.length;
var i__26408__auto___33481 = (0);
while(true){
if((i__26408__auto___33481 < len__26407__auto___33480)){
args__26414__auto__.push((arguments[i__26408__auto___33481]));

var G__33482 = (i__26408__auto___33481 + (1));
i__26408__auto___33481 = G__33482;
continue;
} else {
}
break;
}

var argseq__26415__auto__ = ((((0) < args__26414__auto__.length))?(new cljs.core.IndexedSeq(args__26414__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__26415__auto__);
});})(g__33297__auto___33479))
;

cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__33297__auto___33479){
return (function (args){
return cljs.core.deref.call(null,g__33297__auto___33479);
});})(g__33297__auto___33479))
;

cljs.spec.impl.gen.keyword_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.keyword_ns.cljs$lang$applyTo = ((function (g__33297__auto___33479){
return (function (seq33428){
return cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq33428));
});})(g__33297__auto___33479))
;


var g__33297__auto___33483 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer !== 'undefined')){
return clojure.test.check.generators.large_integer;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/large-integer
 */
cljs.spec.impl.gen.large_integer = ((function (g__33297__auto___33483){
return (function cljs$spec$impl$gen$large_integer(var_args){
var args__26414__auto__ = [];
var len__26407__auto___33484 = arguments.length;
var i__26408__auto___33485 = (0);
while(true){
if((i__26408__auto___33485 < len__26407__auto___33484)){
args__26414__auto__.push((arguments[i__26408__auto___33485]));

var G__33486 = (i__26408__auto___33485 + (1));
i__26408__auto___33485 = G__33486;
continue;
} else {
}
break;
}

var argseq__26415__auto__ = ((((0) < args__26414__auto__.length))?(new cljs.core.IndexedSeq(args__26414__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic(argseq__26415__auto__);
});})(g__33297__auto___33483))
;

cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic = ((function (g__33297__auto___33483){
return (function (args){
return cljs.core.deref.call(null,g__33297__auto___33483);
});})(g__33297__auto___33483))
;

cljs.spec.impl.gen.large_integer.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.large_integer.cljs$lang$applyTo = ((function (g__33297__auto___33483){
return (function (seq33429){
return cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq33429));
});})(g__33297__auto___33483))
;


var g__33297__auto___33487 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.ratio !== 'undefined')){
return clojure.test.check.generators.ratio;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/ratio
 */
cljs.spec.impl.gen.ratio = ((function (g__33297__auto___33487){
return (function cljs$spec$impl$gen$ratio(var_args){
var args__26414__auto__ = [];
var len__26407__auto___33488 = arguments.length;
var i__26408__auto___33489 = (0);
while(true){
if((i__26408__auto___33489 < len__26407__auto___33488)){
args__26414__auto__.push((arguments[i__26408__auto___33489]));

var G__33490 = (i__26408__auto___33489 + (1));
i__26408__auto___33489 = G__33490;
continue;
} else {
}
break;
}

var argseq__26415__auto__ = ((((0) < args__26414__auto__.length))?(new cljs.core.IndexedSeq(args__26414__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic(argseq__26415__auto__);
});})(g__33297__auto___33487))
;

cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic = ((function (g__33297__auto___33487){
return (function (args){
return cljs.core.deref.call(null,g__33297__auto___33487);
});})(g__33297__auto___33487))
;

cljs.spec.impl.gen.ratio.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.ratio.cljs$lang$applyTo = ((function (g__33297__auto___33487){
return (function (seq33430){
return cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq33430));
});})(g__33297__auto___33487))
;


var g__33297__auto___33491 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type !== 'undefined')){
return clojure.test.check.generators.simple_type;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type
 */
cljs.spec.impl.gen.simple_type = ((function (g__33297__auto___33491){
return (function cljs$spec$impl$gen$simple_type(var_args){
var args__26414__auto__ = [];
var len__26407__auto___33492 = arguments.length;
var i__26408__auto___33493 = (0);
while(true){
if((i__26408__auto___33493 < len__26407__auto___33492)){
args__26414__auto__.push((arguments[i__26408__auto___33493]));

var G__33494 = (i__26408__auto___33493 + (1));
i__26408__auto___33493 = G__33494;
continue;
} else {
}
break;
}

var argseq__26415__auto__ = ((((0) < args__26414__auto__.length))?(new cljs.core.IndexedSeq(args__26414__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic(argseq__26415__auto__);
});})(g__33297__auto___33491))
;

cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic = ((function (g__33297__auto___33491){
return (function (args){
return cljs.core.deref.call(null,g__33297__auto___33491);
});})(g__33297__auto___33491))
;

cljs.spec.impl.gen.simple_type.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.simple_type.cljs$lang$applyTo = ((function (g__33297__auto___33491){
return (function (seq33431){
return cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq33431));
});})(g__33297__auto___33491))
;


var g__33297__auto___33495 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type_printable !== 'undefined')){
return clojure.test.check.generators.simple_type_printable;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type-printable
 */
cljs.spec.impl.gen.simple_type_printable = ((function (g__33297__auto___33495){
return (function cljs$spec$impl$gen$simple_type_printable(var_args){
var args__26414__auto__ = [];
var len__26407__auto___33496 = arguments.length;
var i__26408__auto___33497 = (0);
while(true){
if((i__26408__auto___33497 < len__26407__auto___33496)){
args__26414__auto__.push((arguments[i__26408__auto___33497]));

var G__33498 = (i__26408__auto___33497 + (1));
i__26408__auto___33497 = G__33498;
continue;
} else {
}
break;
}

var argseq__26415__auto__ = ((((0) < args__26414__auto__.length))?(new cljs.core.IndexedSeq(args__26414__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__26415__auto__);
});})(g__33297__auto___33495))
;

cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__33297__auto___33495){
return (function (args){
return cljs.core.deref.call(null,g__33297__auto___33495);
});})(g__33297__auto___33495))
;

cljs.spec.impl.gen.simple_type_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.simple_type_printable.cljs$lang$applyTo = ((function (g__33297__auto___33495){
return (function (seq33432){
return cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq33432));
});})(g__33297__auto___33495))
;


var g__33297__auto___33499 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string !== 'undefined')){
return clojure.test.check.generators.string;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string
 */
cljs.spec.impl.gen.string = ((function (g__33297__auto___33499){
return (function cljs$spec$impl$gen$string(var_args){
var args__26414__auto__ = [];
var len__26407__auto___33500 = arguments.length;
var i__26408__auto___33501 = (0);
while(true){
if((i__26408__auto___33501 < len__26407__auto___33500)){
args__26414__auto__.push((arguments[i__26408__auto___33501]));

var G__33502 = (i__26408__auto___33501 + (1));
i__26408__auto___33501 = G__33502;
continue;
} else {
}
break;
}

var argseq__26415__auto__ = ((((0) < args__26414__auto__.length))?(new cljs.core.IndexedSeq(args__26414__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic(argseq__26415__auto__);
});})(g__33297__auto___33499))
;

cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic = ((function (g__33297__auto___33499){
return (function (args){
return cljs.core.deref.call(null,g__33297__auto___33499);
});})(g__33297__auto___33499))
;

cljs.spec.impl.gen.string.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string.cljs$lang$applyTo = ((function (g__33297__auto___33499){
return (function (seq33433){
return cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq33433));
});})(g__33297__auto___33499))
;


var g__33297__auto___33503 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_ascii !== 'undefined')){
return clojure.test.check.generators.string_ascii;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-ascii
 */
cljs.spec.impl.gen.string_ascii = ((function (g__33297__auto___33503){
return (function cljs$spec$impl$gen$string_ascii(var_args){
var args__26414__auto__ = [];
var len__26407__auto___33504 = arguments.length;
var i__26408__auto___33505 = (0);
while(true){
if((i__26408__auto___33505 < len__26407__auto___33504)){
args__26414__auto__.push((arguments[i__26408__auto___33505]));

var G__33506 = (i__26408__auto___33505 + (1));
i__26408__auto___33505 = G__33506;
continue;
} else {
}
break;
}

var argseq__26415__auto__ = ((((0) < args__26414__auto__.length))?(new cljs.core.IndexedSeq(args__26414__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__26415__auto__);
});})(g__33297__auto___33503))
;

cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__33297__auto___33503){
return (function (args){
return cljs.core.deref.call(null,g__33297__auto___33503);
});})(g__33297__auto___33503))
;

cljs.spec.impl.gen.string_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string_ascii.cljs$lang$applyTo = ((function (g__33297__auto___33503){
return (function (seq33434){
return cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq33434));
});})(g__33297__auto___33503))
;


var g__33297__auto___33507 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_alphanumeric !== 'undefined')){
return clojure.test.check.generators.string_alphanumeric;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-alphanumeric
 */
cljs.spec.impl.gen.string_alphanumeric = ((function (g__33297__auto___33507){
return (function cljs$spec$impl$gen$string_alphanumeric(var_args){
var args__26414__auto__ = [];
var len__26407__auto___33508 = arguments.length;
var i__26408__auto___33509 = (0);
while(true){
if((i__26408__auto___33509 < len__26407__auto___33508)){
args__26414__auto__.push((arguments[i__26408__auto___33509]));

var G__33510 = (i__26408__auto___33509 + (1));
i__26408__auto___33509 = G__33510;
continue;
} else {
}
break;
}

var argseq__26415__auto__ = ((((0) < args__26414__auto__.length))?(new cljs.core.IndexedSeq(args__26414__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__26415__auto__);
});})(g__33297__auto___33507))
;

cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__33297__auto___33507){
return (function (args){
return cljs.core.deref.call(null,g__33297__auto___33507);
});})(g__33297__auto___33507))
;

cljs.spec.impl.gen.string_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string_alphanumeric.cljs$lang$applyTo = ((function (g__33297__auto___33507){
return (function (seq33435){
return cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq33435));
});})(g__33297__auto___33507))
;


var g__33297__auto___33511 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol !== 'undefined')){
return clojure.test.check.generators.symbol;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol
 */
cljs.spec.impl.gen.symbol = ((function (g__33297__auto___33511){
return (function cljs$spec$impl$gen$symbol(var_args){
var args__26414__auto__ = [];
var len__26407__auto___33512 = arguments.length;
var i__26408__auto___33513 = (0);
while(true){
if((i__26408__auto___33513 < len__26407__auto___33512)){
args__26414__auto__.push((arguments[i__26408__auto___33513]));

var G__33514 = (i__26408__auto___33513 + (1));
i__26408__auto___33513 = G__33514;
continue;
} else {
}
break;
}

var argseq__26415__auto__ = ((((0) < args__26414__auto__.length))?(new cljs.core.IndexedSeq(args__26414__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic(argseq__26415__auto__);
});})(g__33297__auto___33511))
;

cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic = ((function (g__33297__auto___33511){
return (function (args){
return cljs.core.deref.call(null,g__33297__auto___33511);
});})(g__33297__auto___33511))
;

cljs.spec.impl.gen.symbol.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.symbol.cljs$lang$applyTo = ((function (g__33297__auto___33511){
return (function (seq33436){
return cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq33436));
});})(g__33297__auto___33511))
;


var g__33297__auto___33515 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol_ns !== 'undefined')){
return clojure.test.check.generators.symbol_ns;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol-ns
 */
cljs.spec.impl.gen.symbol_ns = ((function (g__33297__auto___33515){
return (function cljs$spec$impl$gen$symbol_ns(var_args){
var args__26414__auto__ = [];
var len__26407__auto___33516 = arguments.length;
var i__26408__auto___33517 = (0);
while(true){
if((i__26408__auto___33517 < len__26407__auto___33516)){
args__26414__auto__.push((arguments[i__26408__auto___33517]));

var G__33518 = (i__26408__auto___33517 + (1));
i__26408__auto___33517 = G__33518;
continue;
} else {
}
break;
}

var argseq__26415__auto__ = ((((0) < args__26414__auto__.length))?(new cljs.core.IndexedSeq(args__26414__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__26415__auto__);
});})(g__33297__auto___33515))
;

cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__33297__auto___33515){
return (function (args){
return cljs.core.deref.call(null,g__33297__auto___33515);
});})(g__33297__auto___33515))
;

cljs.spec.impl.gen.symbol_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.symbol_ns.cljs$lang$applyTo = ((function (g__33297__auto___33515){
return (function (seq33437){
return cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq33437));
});})(g__33297__auto___33515))
;


var g__33297__auto___33519 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.uuid !== 'undefined')){
return clojure.test.check.generators.uuid;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/uuid
 */
cljs.spec.impl.gen.uuid = ((function (g__33297__auto___33519){
return (function cljs$spec$impl$gen$uuid(var_args){
var args__26414__auto__ = [];
var len__26407__auto___33520 = arguments.length;
var i__26408__auto___33521 = (0);
while(true){
if((i__26408__auto___33521 < len__26407__auto___33520)){
args__26414__auto__.push((arguments[i__26408__auto___33521]));

var G__33522 = (i__26408__auto___33521 + (1));
i__26408__auto___33521 = G__33522;
continue;
} else {
}
break;
}

var argseq__26415__auto__ = ((((0) < args__26414__auto__.length))?(new cljs.core.IndexedSeq(args__26414__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic(argseq__26415__auto__);
});})(g__33297__auto___33519))
;

cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic = ((function (g__33297__auto___33519){
return (function (args){
return cljs.core.deref.call(null,g__33297__auto___33519);
});})(g__33297__auto___33519))
;

cljs.spec.impl.gen.uuid.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.uuid.cljs$lang$applyTo = ((function (g__33297__auto___33519){
return (function (seq33438){
return cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq33438));
});})(g__33297__auto___33519))
;

/**
 * Returns a generator of a sequence catenated from results of
 * gens, each of which should generate something sequential.
 */
cljs.spec.impl.gen.cat = (function cljs$spec$impl$gen$cat(var_args){
var args__26414__auto__ = [];
var len__26407__auto___33525 = arguments.length;
var i__26408__auto___33526 = (0);
while(true){
if((i__26408__auto___33526 < len__26407__auto___33525)){
args__26414__auto__.push((arguments[i__26408__auto___33526]));

var G__33527 = (i__26408__auto___33526 + (1));
i__26408__auto___33526 = G__33527;
continue;
} else {
}
break;
}

var argseq__26415__auto__ = ((((0) < args__26414__auto__.length))?(new cljs.core.IndexedSeq(args__26414__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic(argseq__26415__auto__);
});

cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic = (function (gens){
return cljs.spec.impl.gen.fmap.call(null,(function (p1__33523_SHARP_){
return cljs.core.apply.call(null,cljs.core.concat,p1__33523_SHARP_);
}),cljs.core.apply.call(null,cljs.spec.impl.gen.tuple,gens));
});

cljs.spec.impl.gen.cat.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.cat.cljs$lang$applyTo = (function (seq33524){
return cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq33524));
});

cljs.spec.impl.gen.qualified_QMARK_ = (function cljs$spec$impl$gen$qualified_QMARK_(ident){
return !((cljs.core.namespace.call(null,ident) == null));
});
cljs.spec.impl.gen.gen_builtins = (new cljs.core.Delay((function (){
var simple = cljs.spec.impl.gen.simple_type_printable.call(null);
return cljs.core.PersistentHashMap.fromArrays([cljs.core.qualified_keyword_QMARK_,cljs.core.seq_QMARK_,cljs.core.vector_QMARK_,cljs.core.any_QMARK_,cljs.core.boolean_QMARK_,cljs.core.char_QMARK_,cljs.core.inst_QMARK_,cljs.core.simple_symbol_QMARK_,cljs.core.sequential_QMARK_,cljs.core.float_QMARK_,cljs.core.set_QMARK_,cljs.core.map_QMARK_,cljs.core.empty_QMARK_,cljs.core.string_QMARK_,cljs.core.double_QMARK_,cljs.core.int_QMARK_,cljs.core.associative_QMARK_,cljs.core.keyword_QMARK_,cljs.core.indexed_QMARK_,cljs.core.zero_QMARK_,cljs.core.simple_keyword_QMARK_,cljs.core.neg_int_QMARK_,cljs.core.nil_QMARK_,cljs.core.ident_QMARK_,cljs.core.qualified_ident_QMARK_,cljs.core.true_QMARK_,cljs.core.integer_QMARK_,cljs.core.nat_int_QMARK_,cljs.core.pos_int_QMARK_,cljs.core.uuid_QMARK_,cljs.core.false_QMARK_,cljs.core.list_QMARK_,cljs.core.simple_ident_QMARK_,cljs.core.number_QMARK_,cljs.core.qualified_symbol_QMARK_,cljs.core.seqable_QMARK_,cljs.core.symbol_QMARK_,cljs.core.coll_QMARK_],[cljs.spec.impl.gen.such_that.call(null,cljs.spec.impl.gen.qualified_QMARK_,cljs.spec.impl.gen.keyword_ns.call(null)),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.return$.call(null,null),cljs.spec.impl.gen.any_printable.call(null)], null)),cljs.spec.impl.gen.boolean$.call(null),cljs.spec.impl.gen.char$.call(null),cljs.spec.impl.gen.fmap.call(null,((function (simple){
return (function (p1__33528_SHARP_){
return (new Date(p1__33528_SHARP_));
});})(simple))
,cljs.spec.impl.gen.large_integer.call(null)),cljs.spec.impl.gen.symbol.call(null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple)], null)),cljs.spec.impl.gen.double$.call(null),cljs.spec.impl.gen.set.call(null,simple),cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.elements.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.List.EMPTY,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentHashSet.EMPTY], null)),cljs.spec.impl.gen.string_alphanumeric.call(null),cljs.spec.impl.gen.double$.call(null),cljs.spec.impl.gen.large_integer.call(null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.vector.call(null,simple)], null)),cljs.spec.impl.gen.keyword_ns.call(null),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.return$.call(null,(0)),cljs.spec.impl.gen.keyword.call(null),cljs.spec.impl.gen.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max","max",61366548),(-1)], null)),cljs.spec.impl.gen.return$.call(null,null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.keyword_ns.call(null),cljs.spec.impl.gen.symbol_ns.call(null)], null)),cljs.spec.impl.gen.such_that.call(null,cljs.spec.impl.gen.qualified_QMARK_,cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.keyword_ns.call(null),cljs.spec.impl.gen.symbol_ns.call(null)], null))),cljs.spec.impl.gen.return$.call(null,true),cljs.spec.impl.gen.large_integer.call(null),cljs.spec.impl.gen.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(0)], null)),cljs.spec.impl.gen.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(1)], null)),cljs.spec.impl.gen.uuid.call(null),cljs.spec.impl.gen.return$.call(null,false),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.keyword.call(null),cljs.spec.impl.gen.symbol.call(null)], null)),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.large_integer.call(null),cljs.spec.impl.gen.double$.call(null)], null)),cljs.spec.impl.gen.such_that.call(null,cljs.spec.impl.gen.qualified_QMARK_,cljs.spec.impl.gen.symbol_ns.call(null)),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.return$.call(null,null),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.set.call(null,simple),cljs.spec.impl.gen.string_alphanumeric.call(null)], null)),cljs.spec.impl.gen.symbol_ns.call(null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.set.call(null,simple)], null))]);
}),null));
/**
 * Given a predicate, returns a built-in generator if one exists.
 */
cljs.spec.impl.gen.gen_for_pred = (function cljs$spec$impl$gen$gen_for_pred(pred){
if(cljs.core.set_QMARK_.call(null,pred)){
return cljs.spec.impl.gen.elements.call(null,pred);
} else {
return cljs.core.get.call(null,cljs.core.deref.call(null,cljs.spec.impl.gen.gen_builtins),pred);
}
});

//# sourceMappingURL=gen.js.map?rel=1494243349312