// Compiled by ClojureScript 1.9.521 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('figwheel.client.utils');
goog.require('goog.Uri');
goog.require('goog.string');
goog.require('goog.object');
goog.require('goog.net.jsloader');
goog.require('clojure.string');
goog.require('clojure.set');
goog.require('cljs.core.async');
goog.require('goog.async.Deferred');
if(typeof figwheel.client.file_reloading.figwheel_meta_pragmas !== 'undefined'){
} else {
figwheel.client.file_reloading.figwheel_meta_pragmas = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.on_cssload_custom_event = (function figwheel$client$file_reloading$on_cssload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.css-reload",files);
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__25294__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string')) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__25294__auto__){
return or__25294__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.name__GT_path = (function figwheel$client$file_reloading$name__GT_path(ns){

return (goog.dependencies_.nameToPath[ns]);
});
figwheel.client.file_reloading.provided_QMARK_ = (function figwheel$client$file_reloading$provided_QMARK_(ns){
return (goog.dependencies_.written[figwheel.client.file_reloading.name__GT_path.call(null,ns)]);
});
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(name){
var or__25294__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, ["svgpan.SvgPan",null,"far.out",null,"testDep.bar",null,"someprotopackage.TestPackageTypes",null,"goog",null,"an.existing.path",null,"cljs.core",null,"ns",null,"dup.base",null], null), null).call(null,name);
if(cljs.core.truth_(or__25294__auto__)){
return or__25294__auto__;
} else {
return cljs.core.some.call(null,cljs.core.partial.call(null,goog.string.startsWith,name),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["goog.","cljs.","clojure.","fake.","proto2."], null));
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__32240_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__32240_SHARP_));
}),goog.object.getKeys((goog.dependencies_.requires[figwheel.client.file_reloading.name__GT_path.call(null,ns)]))));
});
if(typeof figwheel.client.file_reloading.dependency_data !== 'undefined'){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = (function figwheel$client$file_reloading$path_to_name_BANG_(path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.createAsIfByAssoc([name], true));
});
/**
 * Setup a path to name dependencies map.
 * That goes from path -> #{ ns-names }
 */
figwheel.client.file_reloading.setup_path__GT_name_BANG_ = (function figwheel$client$file_reloading$setup_path__GT_name_BANG_(){
var nameToPath = goog.object.filter(goog.dependencies_.nameToPath,(function (v,k,o){
return goog.string.startsWith(v,"../");
}));
return goog.object.forEach(nameToPath,((function (nameToPath){
return (function (v,k,o){
return figwheel.client.file_reloading.path_to_name_BANG_.call(null,v,k);
});})(nameToPath))
);
});
/**
 * returns a set of namespaces defined by a path
 */
figwheel.client.file_reloading.path__GT_name = (function figwheel$client$file_reloading$path__GT_name(path){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null));
});
figwheel.client.file_reloading.name_to_parent_BANG_ = (function figwheel$client$file_reloading$name_to_parent_BANG_(ns,parent_ns){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.createAsIfByAssoc([parent_ns], true));
});
/**
 * This reverses the goog.dependencies_.requires for looking up ns-dependents.
 */
figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_ = (function figwheel$client$file_reloading$setup_ns__GT_dependents_BANG_(){
var requires = goog.object.filter(goog.dependencies_.requires,(function (v,k,o){
return goog.string.startsWith(k,"../");
}));
return goog.object.forEach(requires,((function (requires){
return (function (v,k,_){
return goog.object.forEach(v,((function (requires){
return (function (v_SINGLEQUOTE_,k_SINGLEQUOTE_,___$1){
var seq__32245 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__32246 = null;
var count__32247 = (0);
var i__32248 = (0);
while(true){
if((i__32248 < count__32247)){
var n = cljs.core._nth.call(null,chunk__32246,i__32248);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__32249 = seq__32245;
var G__32250 = chunk__32246;
var G__32251 = count__32247;
var G__32252 = (i__32248 + (1));
seq__32245 = G__32249;
chunk__32246 = G__32250;
count__32247 = G__32251;
i__32248 = G__32252;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__32245);
if(temp__4657__auto__){
var seq__32245__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32245__$1)){
var c__26113__auto__ = cljs.core.chunk_first.call(null,seq__32245__$1);
var G__32253 = cljs.core.chunk_rest.call(null,seq__32245__$1);
var G__32254 = c__26113__auto__;
var G__32255 = cljs.core.count.call(null,c__26113__auto__);
var G__32256 = (0);
seq__32245 = G__32253;
chunk__32246 = G__32254;
count__32247 = G__32255;
i__32248 = G__32256;
continue;
} else {
var n = cljs.core.first.call(null,seq__32245__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__32257 = cljs.core.next.call(null,seq__32245__$1);
var G__32258 = null;
var G__32259 = (0);
var G__32260 = (0);
seq__32245 = G__32257;
chunk__32246 = G__32258;
count__32247 = G__32259;
i__32248 = G__32260;
continue;
}
} else {
return null;
}
}
break;
}
});})(requires))
);
});})(requires))
);
});
figwheel.client.file_reloading.ns__GT_dependents = (function figwheel$client$file_reloading$ns__GT_dependents(ns){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null));
});
figwheel.client.file_reloading.build_topo_sort = (function figwheel$client$file_reloading$build_topo_sort(get_deps){
var get_deps__$1 = cljs.core.memoize.call(null,get_deps);
var topo_sort_helper_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_topo_sort_helper_STAR_(x,depth,state){
var deps = get_deps__$1.call(null,x);
if(cljs.core.empty_QMARK_.call(null,deps)){
return null;
} else {
return topo_sort_STAR_.call(null,deps,depth,state);
}
});})(get_deps__$1))
;
var topo_sort_STAR_ = ((function (get_deps__$1){
return (function() {
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = null;
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1 = (function (deps){
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.call(null,deps,(0),cljs.core.atom.call(null,cljs.core.sorted_map.call(null)));
});
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3 = (function (deps,depth,state){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentHashSet.EMPTY),deps);

var seq__32311_32322 = cljs.core.seq.call(null,deps);
var chunk__32312_32323 = null;
var count__32313_32324 = (0);
var i__32314_32325 = (0);
while(true){
if((i__32314_32325 < count__32313_32324)){
var dep_32326 = cljs.core._nth.call(null,chunk__32312_32323,i__32314_32325);
topo_sort_helper_STAR_.call(null,dep_32326,(depth + (1)),state);

var G__32327 = seq__32311_32322;
var G__32328 = chunk__32312_32323;
var G__32329 = count__32313_32324;
var G__32330 = (i__32314_32325 + (1));
seq__32311_32322 = G__32327;
chunk__32312_32323 = G__32328;
count__32313_32324 = G__32329;
i__32314_32325 = G__32330;
continue;
} else {
var temp__4657__auto___32331 = cljs.core.seq.call(null,seq__32311_32322);
if(temp__4657__auto___32331){
var seq__32311_32332__$1 = temp__4657__auto___32331;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32311_32332__$1)){
var c__26113__auto___32333 = cljs.core.chunk_first.call(null,seq__32311_32332__$1);
var G__32334 = cljs.core.chunk_rest.call(null,seq__32311_32332__$1);
var G__32335 = c__26113__auto___32333;
var G__32336 = cljs.core.count.call(null,c__26113__auto___32333);
var G__32337 = (0);
seq__32311_32322 = G__32334;
chunk__32312_32323 = G__32335;
count__32313_32324 = G__32336;
i__32314_32325 = G__32337;
continue;
} else {
var dep_32338 = cljs.core.first.call(null,seq__32311_32332__$1);
topo_sort_helper_STAR_.call(null,dep_32338,(depth + (1)),state);

var G__32339 = cljs.core.next.call(null,seq__32311_32332__$1);
var G__32340 = null;
var G__32341 = (0);
var G__32342 = (0);
seq__32311_32322 = G__32339;
chunk__32312_32323 = G__32340;
count__32313_32324 = G__32341;
i__32314_32325 = G__32342;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,depth,(0))){
return elim_dups_STAR_.call(null,cljs.core.reverse.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,state))));
} else {
return null;
}
});
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = function(deps,depth,state){
switch(arguments.length){
case 1:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1.call(this,deps);
case 3:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3.call(this,deps,depth,state);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1;
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$3 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3;
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_;
})()
;})(get_deps__$1))
;
var elim_dups_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__32315){
var vec__32319 = p__32315;
var seq__32320 = cljs.core.seq.call(null,vec__32319);
var first__32321 = cljs.core.first.call(null,seq__32320);
var seq__32320__$1 = cljs.core.next.call(null,seq__32320);
var x = first__32321;
var xs = seq__32320__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__32319,seq__32320,first__32321,seq__32320__$1,x,xs,get_deps__$1){
return (function (p1__32261_SHARP_){
return clojure.set.difference.call(null,p1__32261_SHARP_,x);
});})(vec__32319,seq__32320,first__32321,seq__32320__$1,x,xs,get_deps__$1))
,xs)));
}
});})(get_deps__$1))
;
return topo_sort_STAR_;
});
figwheel.client.file_reloading.get_all_dependencies = (function figwheel$client$file_reloading$get_all_dependencies(ns){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.get_requires);
return cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns], null))));
});
figwheel.client.file_reloading.get_all_dependents = (function figwheel$client$file_reloading$get_all_dependents(nss){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.ns__GT_dependents);
return cljs.core.reverse.call(null,cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,nss))));
});
figwheel.client.file_reloading.unprovide_BANG_ = (function figwheel$client$file_reloading$unprovide_BANG_(ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.dependencies_.visited,path);

goog.object.remove(goog.dependencies_.written,path);

return goog.object.remove(goog.dependencies_.written,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(path)].join(''));
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_reloading.name__GT_path.call(null,ns))].join('');
});
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__32355 = cljs.core.seq.call(null,provides);
var chunk__32356 = null;
var count__32357 = (0);
var i__32358 = (0);
while(true){
if((i__32358 < count__32357)){
var prov = cljs.core._nth.call(null,chunk__32356,i__32358);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__32359_32367 = cljs.core.seq.call(null,requires);
var chunk__32360_32368 = null;
var count__32361_32369 = (0);
var i__32362_32370 = (0);
while(true){
if((i__32362_32370 < count__32361_32369)){
var req_32371 = cljs.core._nth.call(null,chunk__32360_32368,i__32362_32370);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_32371,prov);

var G__32372 = seq__32359_32367;
var G__32373 = chunk__32360_32368;
var G__32374 = count__32361_32369;
var G__32375 = (i__32362_32370 + (1));
seq__32359_32367 = G__32372;
chunk__32360_32368 = G__32373;
count__32361_32369 = G__32374;
i__32362_32370 = G__32375;
continue;
} else {
var temp__4657__auto___32376 = cljs.core.seq.call(null,seq__32359_32367);
if(temp__4657__auto___32376){
var seq__32359_32377__$1 = temp__4657__auto___32376;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32359_32377__$1)){
var c__26113__auto___32378 = cljs.core.chunk_first.call(null,seq__32359_32377__$1);
var G__32379 = cljs.core.chunk_rest.call(null,seq__32359_32377__$1);
var G__32380 = c__26113__auto___32378;
var G__32381 = cljs.core.count.call(null,c__26113__auto___32378);
var G__32382 = (0);
seq__32359_32367 = G__32379;
chunk__32360_32368 = G__32380;
count__32361_32369 = G__32381;
i__32362_32370 = G__32382;
continue;
} else {
var req_32383 = cljs.core.first.call(null,seq__32359_32377__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_32383,prov);

var G__32384 = cljs.core.next.call(null,seq__32359_32377__$1);
var G__32385 = null;
var G__32386 = (0);
var G__32387 = (0);
seq__32359_32367 = G__32384;
chunk__32360_32368 = G__32385;
count__32361_32369 = G__32386;
i__32362_32370 = G__32387;
continue;
}
} else {
}
}
break;
}

var G__32388 = seq__32355;
var G__32389 = chunk__32356;
var G__32390 = count__32357;
var G__32391 = (i__32358 + (1));
seq__32355 = G__32388;
chunk__32356 = G__32389;
count__32357 = G__32390;
i__32358 = G__32391;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__32355);
if(temp__4657__auto__){
var seq__32355__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32355__$1)){
var c__26113__auto__ = cljs.core.chunk_first.call(null,seq__32355__$1);
var G__32392 = cljs.core.chunk_rest.call(null,seq__32355__$1);
var G__32393 = c__26113__auto__;
var G__32394 = cljs.core.count.call(null,c__26113__auto__);
var G__32395 = (0);
seq__32355 = G__32392;
chunk__32356 = G__32393;
count__32357 = G__32394;
i__32358 = G__32395;
continue;
} else {
var prov = cljs.core.first.call(null,seq__32355__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__32363_32396 = cljs.core.seq.call(null,requires);
var chunk__32364_32397 = null;
var count__32365_32398 = (0);
var i__32366_32399 = (0);
while(true){
if((i__32366_32399 < count__32365_32398)){
var req_32400 = cljs.core._nth.call(null,chunk__32364_32397,i__32366_32399);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_32400,prov);

var G__32401 = seq__32363_32396;
var G__32402 = chunk__32364_32397;
var G__32403 = count__32365_32398;
var G__32404 = (i__32366_32399 + (1));
seq__32363_32396 = G__32401;
chunk__32364_32397 = G__32402;
count__32365_32398 = G__32403;
i__32366_32399 = G__32404;
continue;
} else {
var temp__4657__auto___32405__$1 = cljs.core.seq.call(null,seq__32363_32396);
if(temp__4657__auto___32405__$1){
var seq__32363_32406__$1 = temp__4657__auto___32405__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32363_32406__$1)){
var c__26113__auto___32407 = cljs.core.chunk_first.call(null,seq__32363_32406__$1);
var G__32408 = cljs.core.chunk_rest.call(null,seq__32363_32406__$1);
var G__32409 = c__26113__auto___32407;
var G__32410 = cljs.core.count.call(null,c__26113__auto___32407);
var G__32411 = (0);
seq__32363_32396 = G__32408;
chunk__32364_32397 = G__32409;
count__32365_32398 = G__32410;
i__32366_32399 = G__32411;
continue;
} else {
var req_32412 = cljs.core.first.call(null,seq__32363_32406__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_32412,prov);

var G__32413 = cljs.core.next.call(null,seq__32363_32406__$1);
var G__32414 = null;
var G__32415 = (0);
var G__32416 = (0);
seq__32363_32396 = G__32413;
chunk__32364_32397 = G__32414;
count__32365_32398 = G__32415;
i__32366_32399 = G__32416;
continue;
}
} else {
}
}
break;
}

var G__32417 = cljs.core.next.call(null,seq__32355__$1);
var G__32418 = null;
var G__32419 = (0);
var G__32420 = (0);
seq__32355 = G__32417;
chunk__32356 = G__32418;
count__32357 = G__32419;
i__32358 = G__32420;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.file_reloading.figwheel_require = (function figwheel$client$file_reloading$figwheel_require(src,reload){
goog.require = figwheel.client.file_reloading.figwheel_require;

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__32425_32429 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__32426_32430 = null;
var count__32427_32431 = (0);
var i__32428_32432 = (0);
while(true){
if((i__32428_32432 < count__32427_32431)){
var ns_32433 = cljs.core._nth.call(null,chunk__32426_32430,i__32428_32432);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_32433);

var G__32434 = seq__32425_32429;
var G__32435 = chunk__32426_32430;
var G__32436 = count__32427_32431;
var G__32437 = (i__32428_32432 + (1));
seq__32425_32429 = G__32434;
chunk__32426_32430 = G__32435;
count__32427_32431 = G__32436;
i__32428_32432 = G__32437;
continue;
} else {
var temp__4657__auto___32438 = cljs.core.seq.call(null,seq__32425_32429);
if(temp__4657__auto___32438){
var seq__32425_32439__$1 = temp__4657__auto___32438;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32425_32439__$1)){
var c__26113__auto___32440 = cljs.core.chunk_first.call(null,seq__32425_32439__$1);
var G__32441 = cljs.core.chunk_rest.call(null,seq__32425_32439__$1);
var G__32442 = c__26113__auto___32440;
var G__32443 = cljs.core.count.call(null,c__26113__auto___32440);
var G__32444 = (0);
seq__32425_32429 = G__32441;
chunk__32426_32430 = G__32442;
count__32427_32431 = G__32443;
i__32428_32432 = G__32444;
continue;
} else {
var ns_32445 = cljs.core.first.call(null,seq__32425_32439__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_32445);

var G__32446 = cljs.core.next.call(null,seq__32425_32439__$1);
var G__32447 = null;
var G__32448 = (0);
var G__32449 = (0);
seq__32425_32429 = G__32446;
chunk__32426_32430 = G__32447;
count__32427_32431 = G__32448;
i__32428_32432 = G__32449;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(reload)){
figwheel.client.file_reloading.unprovide_BANG_.call(null,src);
} else {
}

return goog.require_figwheel_backup_(src);
});
/**
 * Reusable browser REPL bootstrapping. Patches the essential functions
 *   in goog.base to support re-loading of namespaces after page load.
 */
figwheel.client.file_reloading.bootstrap_goog_base = (function figwheel$client$file_reloading$bootstrap_goog_base(){
if(cljs.core.truth_(COMPILED)){
return null;
} else {
goog.require_figwheel_backup_ = (function (){var or__25294__auto__ = goog.require__;
if(cljs.core.truth_(or__25294__auto__)){
return or__25294__auto__;
} else {
return goog.require;
}
})();

goog.isProvided_ = (function (name){
return false;
});

figwheel.client.file_reloading.setup_path__GT_name_BANG_.call(null);

figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_.call(null);

goog.addDependency_figwheel_backup_ = goog.addDependency;

goog.addDependency = (function() { 
var G__32450__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__32450 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__32451__i = 0, G__32451__a = new Array(arguments.length -  0);
while (G__32451__i < G__32451__a.length) {G__32451__a[G__32451__i] = arguments[G__32451__i + 0]; ++G__32451__i;}
  args = new cljs.core.IndexedSeq(G__32451__a,0);
} 
return G__32450__delegate.call(this,args);};
G__32450.cljs$lang$maxFixedArity = 0;
G__32450.cljs$lang$applyTo = (function (arglist__32452){
var args = cljs.core.seq(arglist__32452);
return G__32450__delegate(args);
});
G__32450.cljs$core$IFn$_invoke$arity$variadic = G__32450__delegate;
return G__32450;
})()
;

goog.constructNamespace_("cljs.user");

goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.queued_file_reload;

return goog.require = figwheel.client.file_reloading.figwheel_require;
}
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
if(typeof figwheel.client.file_reloading.bootstrapped_cljs !== 'undefined'){
return null;
} else {
return (
figwheel.client.file_reloading.bootstrapped_cljs = (function (){
figwheel.client.file_reloading.bootstrap_goog_base.call(null);

return true;
})()
)
;
}
});
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__32453 = cljs.core._EQ_;
var expr__32454 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__32453.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__32454))){
var node_path_lib = require("path");
var util_pattern = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.sep),cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.join("goog","bootstrap","nodejs.js"))].join('');
var util_path = goog.object.findKey(require.cache,((function (node_path_lib,util_pattern,pred__32453,expr__32454){
return (function (v,k,o){
return goog.string.endsWith(k,util_pattern);
});})(node_path_lib,util_pattern,pred__32453,expr__32454))
);
var parts = cljs.core.pop.call(null,cljs.core.pop.call(null,clojure.string.split.call(null,util_path,/[\/\\]/)));
var root_path = clojure.string.join.call(null,node_path_lib.sep,parts);
return ((function (node_path_lib,util_pattern,util_path,parts,root_path,pred__32453,expr__32454){
return (function (request_url,callback){

var cache_path = node_path_lib.resolve(root_path,request_url);
goog.object.remove(require.cache,cache_path);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e32456){if((e32456 instanceof Error)){
var e = e32456;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Figwheel: Error loading file "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e32456;

}
}})());
});
;})(node_path_lib,util_pattern,util_path,parts,root_path,pred__32453,expr__32454))
} else {
if(cljs.core.truth_(pred__32453.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__32454))){
return ((function (pred__32453,expr__32454){
return (function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
deferred.addCallback(((function (deferred,pred__32453,expr__32454){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred,pred__32453,expr__32454))
);

return deferred.addErrback(((function (deferred,pred__32453,expr__32454){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred,pred__32453,expr__32454))
);
});
;})(pred__32453,expr__32454))
} else {
if(cljs.core.truth_(pred__32453.call(null,new cljs.core.Keyword(null,"worker","worker",938239996),expr__32454))){
return ((function (pred__32453,expr__32454){
return (function (request_url,callback){

return callback.call(null,(function (){try{self.importScripts(figwheel.client.file_reloading.add_cache_buster.call(null,request_url));

return true;
}catch (e32457){if((e32457 instanceof Error)){
var e = e32457;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Figwheel: Error loading file "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e32457;

}
}})());
});
;})(pred__32453,expr__32454))
} else {
return ((function (pred__32453,expr__32454){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__32453,expr__32454))
}
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__32458,callback){
var map__32461 = p__32458;
var map__32461__$1 = ((((!((map__32461 == null)))?((((map__32461.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32461.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32461):map__32461);
var file_msg = map__32461__$1;
var request_url = cljs.core.get.call(null,map__32461__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("FigWheel: Attempting to load "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__32461,map__32461__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("FigWheel: Successfully loaded "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Figwheel: Error loading file "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__32461,map__32461__$1,file_msg,request_url))
);
});
if(typeof figwheel.client.file_reloading.reload_chan !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_chan = cljs.core.async.chan.call(null);
}
if(typeof figwheel.client.file_reloading.on_load_callbacks !== 'undefined'){
} else {
figwheel.client.file_reloading.on_load_callbacks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if(typeof figwheel.client.file_reloading.dependencies_loaded !== 'undefined'){
} else {
figwheel.client.file_reloading.dependencies_loaded = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
figwheel.client.file_reloading.blocking_load = (function figwheel$client$file_reloading$blocking_load(url){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.reload_file.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-url","request-url",2100346596),url], null),((function (out){
return (function (file_msg){
cljs.core.async.put_BANG_.call(null,out,file_msg);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
if(typeof figwheel.client.file_reloading.reloader_loop !== 'undefined'){
} else {
figwheel.client.file_reloading.reloader_loop = (function (){var c__27506__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27506__auto__){
return (function (){
var f__27507__auto__ = (function (){var switch__27441__auto__ = ((function (c__27506__auto__){
return (function (state_32485){
var state_val_32486 = (state_32485[(1)]);
if((state_val_32486 === (7))){
var inst_32481 = (state_32485[(2)]);
var state_32485__$1 = state_32485;
var statearr_32487_32507 = state_32485__$1;
(statearr_32487_32507[(2)] = inst_32481);

(statearr_32487_32507[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32486 === (1))){
var state_32485__$1 = state_32485;
var statearr_32488_32508 = state_32485__$1;
(statearr_32488_32508[(2)] = null);

(statearr_32488_32508[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32486 === (4))){
var inst_32465 = (state_32485[(7)]);
var inst_32465__$1 = (state_32485[(2)]);
var state_32485__$1 = (function (){var statearr_32489 = state_32485;
(statearr_32489[(7)] = inst_32465__$1);

return statearr_32489;
})();
if(cljs.core.truth_(inst_32465__$1)){
var statearr_32490_32509 = state_32485__$1;
(statearr_32490_32509[(1)] = (5));

} else {
var statearr_32491_32510 = state_32485__$1;
(statearr_32491_32510[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32486 === (6))){
var state_32485__$1 = state_32485;
var statearr_32492_32511 = state_32485__$1;
(statearr_32492_32511[(2)] = null);

(statearr_32492_32511[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32486 === (3))){
var inst_32483 = (state_32485[(2)]);
var state_32485__$1 = state_32485;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32485__$1,inst_32483);
} else {
if((state_val_32486 === (2))){
var state_32485__$1 = state_32485;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32485__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_32486 === (11))){
var inst_32477 = (state_32485[(2)]);
var state_32485__$1 = (function (){var statearr_32493 = state_32485;
(statearr_32493[(8)] = inst_32477);

return statearr_32493;
})();
var statearr_32494_32512 = state_32485__$1;
(statearr_32494_32512[(2)] = null);

(statearr_32494_32512[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32486 === (9))){
var inst_32471 = (state_32485[(9)]);
var inst_32469 = (state_32485[(10)]);
var inst_32473 = inst_32471.call(null,inst_32469);
var state_32485__$1 = state_32485;
var statearr_32495_32513 = state_32485__$1;
(statearr_32495_32513[(2)] = inst_32473);

(statearr_32495_32513[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32486 === (5))){
var inst_32465 = (state_32485[(7)]);
var inst_32467 = figwheel.client.file_reloading.blocking_load.call(null,inst_32465);
var state_32485__$1 = state_32485;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32485__$1,(8),inst_32467);
} else {
if((state_val_32486 === (10))){
var inst_32469 = (state_32485[(10)]);
var inst_32475 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_32469);
var state_32485__$1 = state_32485;
var statearr_32496_32514 = state_32485__$1;
(statearr_32496_32514[(2)] = inst_32475);

(statearr_32496_32514[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32486 === (8))){
var inst_32465 = (state_32485[(7)]);
var inst_32471 = (state_32485[(9)]);
var inst_32469 = (state_32485[(2)]);
var inst_32470 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_32471__$1 = cljs.core.get.call(null,inst_32470,inst_32465);
var state_32485__$1 = (function (){var statearr_32497 = state_32485;
(statearr_32497[(9)] = inst_32471__$1);

(statearr_32497[(10)] = inst_32469);

return statearr_32497;
})();
if(cljs.core.truth_(inst_32471__$1)){
var statearr_32498_32515 = state_32485__$1;
(statearr_32498_32515[(1)] = (9));

} else {
var statearr_32499_32516 = state_32485__$1;
(statearr_32499_32516[(1)] = (10));

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
});})(c__27506__auto__))
;
return ((function (switch__27441__auto__,c__27506__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__27442__auto__ = null;
var figwheel$client$file_reloading$state_machine__27442__auto____0 = (function (){
var statearr_32503 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_32503[(0)] = figwheel$client$file_reloading$state_machine__27442__auto__);

(statearr_32503[(1)] = (1));

return statearr_32503;
});
var figwheel$client$file_reloading$state_machine__27442__auto____1 = (function (state_32485){
while(true){
var ret_value__27443__auto__ = (function (){try{while(true){
var result__27444__auto__ = switch__27441__auto__.call(null,state_32485);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27444__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27444__auto__;
}
break;
}
}catch (e32504){if((e32504 instanceof Object)){
var ex__27445__auto__ = e32504;
var statearr_32505_32517 = state_32485;
(statearr_32505_32517[(5)] = ex__27445__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32485);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32504;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27443__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32518 = state_32485;
state_32485 = G__32518;
continue;
} else {
return ret_value__27443__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__27442__auto__ = function(state_32485){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__27442__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__27442__auto____1.call(this,state_32485);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$state_machine__27442__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__27442__auto____0;
figwheel$client$file_reloading$state_machine__27442__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__27442__auto____1;
return figwheel$client$file_reloading$state_machine__27442__auto__;
})()
;})(switch__27441__auto__,c__27506__auto__))
})();
var state__27508__auto__ = (function (){var statearr_32506 = f__27507__auto__.call(null);
(statearr_32506[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27506__auto__);

return statearr_32506;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27508__auto__);
});})(c__27506__auto__))
);

return c__27506__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__32519,callback){
var map__32522 = p__32519;
var map__32522__$1 = ((((!((map__32522 == null)))?((((map__32522.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32522.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32522):map__32522);
var file_msg = map__32522__$1;
var namespace = cljs.core.get.call(null,map__32522__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__32522,map__32522__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__32522,map__32522__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.figwheel_no_load_QMARK_ = (function figwheel$client$file_reloading$figwheel_no_load_QMARK_(p__32524){
var map__32527 = p__32524;
var map__32527__$1 = ((((!((map__32527 == null)))?((((map__32527.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32527.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32527):map__32527);
var file_msg = map__32527__$1;
var namespace = cljs.core.get.call(null,map__32527__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__32529){
var map__32532 = p__32529;
var map__32532__$1 = ((((!((map__32532 == null)))?((((map__32532.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32532.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32532):map__32532);
var file_msg = map__32532__$1;
var namespace = cljs.core.get.call(null,map__32532__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__25282__auto__ = cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,file_msg));
if(and__25282__auto__){
var or__25294__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__25294__auto__)){
return or__25294__auto__;
} else {
var or__25294__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__25294__auto____$1)){
return or__25294__auto____$1;
} else {
return figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
}
}
} else {
return and__25282__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__32534,callback){
var map__32537 = p__32534;
var map__32537__$1 = ((((!((map__32537 == null)))?((((map__32537.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32537.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32537):map__32537);
var file_msg = map__32537__$1;
var request_url = cljs.core.get.call(null,map__32537__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__32537__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Figwheel: Not trying to load file "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__27506__auto___32641 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27506__auto___32641,out){
return (function (){
var f__27507__auto__ = (function (){var switch__27441__auto__ = ((function (c__27506__auto___32641,out){
return (function (state_32623){
var state_val_32624 = (state_32623[(1)]);
if((state_val_32624 === (1))){
var inst_32597 = cljs.core.seq.call(null,files);
var inst_32598 = cljs.core.first.call(null,inst_32597);
var inst_32599 = cljs.core.next.call(null,inst_32597);
var inst_32600 = files;
var state_32623__$1 = (function (){var statearr_32625 = state_32623;
(statearr_32625[(7)] = inst_32598);

(statearr_32625[(8)] = inst_32599);

(statearr_32625[(9)] = inst_32600);

return statearr_32625;
})();
var statearr_32626_32642 = state_32623__$1;
(statearr_32626_32642[(2)] = null);

(statearr_32626_32642[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32624 === (2))){
var inst_32606 = (state_32623[(10)]);
var inst_32600 = (state_32623[(9)]);
var inst_32605 = cljs.core.seq.call(null,inst_32600);
var inst_32606__$1 = cljs.core.first.call(null,inst_32605);
var inst_32607 = cljs.core.next.call(null,inst_32605);
var inst_32608 = (inst_32606__$1 == null);
var inst_32609 = cljs.core.not.call(null,inst_32608);
var state_32623__$1 = (function (){var statearr_32627 = state_32623;
(statearr_32627[(11)] = inst_32607);

(statearr_32627[(10)] = inst_32606__$1);

return statearr_32627;
})();
if(inst_32609){
var statearr_32628_32643 = state_32623__$1;
(statearr_32628_32643[(1)] = (4));

} else {
var statearr_32629_32644 = state_32623__$1;
(statearr_32629_32644[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32624 === (3))){
var inst_32621 = (state_32623[(2)]);
var state_32623__$1 = state_32623;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32623__$1,inst_32621);
} else {
if((state_val_32624 === (4))){
var inst_32606 = (state_32623[(10)]);
var inst_32611 = figwheel.client.file_reloading.reload_js_file.call(null,inst_32606);
var state_32623__$1 = state_32623;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32623__$1,(7),inst_32611);
} else {
if((state_val_32624 === (5))){
var inst_32617 = cljs.core.async.close_BANG_.call(null,out);
var state_32623__$1 = state_32623;
var statearr_32630_32645 = state_32623__$1;
(statearr_32630_32645[(2)] = inst_32617);

(statearr_32630_32645[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32624 === (6))){
var inst_32619 = (state_32623[(2)]);
var state_32623__$1 = state_32623;
var statearr_32631_32646 = state_32623__$1;
(statearr_32631_32646[(2)] = inst_32619);

(statearr_32631_32646[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32624 === (7))){
var inst_32607 = (state_32623[(11)]);
var inst_32613 = (state_32623[(2)]);
var inst_32614 = cljs.core.async.put_BANG_.call(null,out,inst_32613);
var inst_32600 = inst_32607;
var state_32623__$1 = (function (){var statearr_32632 = state_32623;
(statearr_32632[(12)] = inst_32614);

(statearr_32632[(9)] = inst_32600);

return statearr_32632;
})();
var statearr_32633_32647 = state_32623__$1;
(statearr_32633_32647[(2)] = null);

(statearr_32633_32647[(1)] = (2));


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
});})(c__27506__auto___32641,out))
;
return ((function (switch__27441__auto__,c__27506__auto___32641,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__27442__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__27442__auto____0 = (function (){
var statearr_32637 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32637[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__27442__auto__);

(statearr_32637[(1)] = (1));

return statearr_32637;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__27442__auto____1 = (function (state_32623){
while(true){
var ret_value__27443__auto__ = (function (){try{while(true){
var result__27444__auto__ = switch__27441__auto__.call(null,state_32623);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27444__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27444__auto__;
}
break;
}
}catch (e32638){if((e32638 instanceof Object)){
var ex__27445__auto__ = e32638;
var statearr_32639_32648 = state_32623;
(statearr_32639_32648[(5)] = ex__27445__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32623);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32638;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27443__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32649 = state_32623;
state_32623 = G__32649;
continue;
} else {
return ret_value__27443__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__27442__auto__ = function(state_32623){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__27442__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__27442__auto____1.call(this,state_32623);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__27442__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__27442__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__27442__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__27442__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__27442__auto__;
})()
;})(switch__27441__auto__,c__27506__auto___32641,out))
})();
var state__27508__auto__ = (function (){var statearr_32640 = f__27507__auto__.call(null);
(statearr_32640[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27506__auto___32641);

return statearr_32640;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27508__auto__);
});})(c__27506__auto___32641,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__32650,opts){
var map__32654 = p__32650;
var map__32654__$1 = ((((!((map__32654 == null)))?((((map__32654.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32654.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32654):map__32654);
var eval_body = cljs.core.get.call(null,map__32654__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__32654__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__25282__auto__ = eval_body;
if(cljs.core.truth_(and__25282__auto__)){
return typeof eval_body === 'string';
} else {
return and__25282__auto__;
}
})())){
var code = eval_body;
try{figwheel.client.utils.debug_prn.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Evaling file "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e32656){var e = e32656;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Unable to evaluate "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,cljs.core.partial.call(null,cljs.core.re_matches,/figwheel\.connect.*/),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,((function (deps){
return (function (n){
var temp__4655__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (deps){
return (function (p1__32657_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__32657_SHARP_),n);
});})(deps))
,files));
if(cljs.core.truth_(temp__4655__auto__)){
var file_msg = temp__4655__auto__;
return file_msg;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372),new cljs.core.Keyword(null,"namespace","namespace",-377510372),n], null);
}
});})(deps))
,deps));
});
figwheel.client.file_reloading.sort_files = (function figwheel$client$file_reloading$sort_files(files){
if((cljs.core.count.call(null,files) <= (1))){
return files;
} else {
var keep_files = cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,keep_files,new cljs.core.Keyword(null,"namespace","namespace",-377510372)),figwheel.client.file_reloading.expand_files.call(null,files));
}
});
figwheel.client.file_reloading.get_figwheel_always = (function figwheel$client$file_reloading$get_figwheel_always(){
return cljs.core.map.call(null,(function (p__32666){
var vec__32667 = p__32666;
var k = cljs.core.nth.call(null,vec__32667,(0),null);
var v = cljs.core.nth.call(null,vec__32667,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__32670){
var vec__32671 = p__32670;
var k = cljs.core.nth.call(null,vec__32671,(0),null);
var v = cljs.core.nth.call(null,vec__32671,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__32677,p__32678){
var map__32926 = p__32677;
var map__32926__$1 = ((((!((map__32926 == null)))?((((map__32926.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32926.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32926):map__32926);
var opts = map__32926__$1;
var before_jsload = cljs.core.get.call(null,map__32926__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__32926__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__32926__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__32927 = p__32678;
var map__32927__$1 = ((((!((map__32927 == null)))?((((map__32927.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32927.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32927):map__32927);
var msg = map__32927__$1;
var files = cljs.core.get.call(null,map__32927__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__32927__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__32927__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__27506__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27506__auto__,map__32926,map__32926__$1,opts,before_jsload,on_jsload,reload_dependents,map__32927,map__32927__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__27507__auto__ = (function (){var switch__27441__auto__ = ((function (c__27506__auto__,map__32926,map__32926__$1,opts,before_jsload,on_jsload,reload_dependents,map__32927,map__32927__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_33081){
var state_val_33082 = (state_33081[(1)]);
if((state_val_33082 === (7))){
var inst_32941 = (state_33081[(7)]);
var inst_32942 = (state_33081[(8)]);
var inst_32943 = (state_33081[(9)]);
var inst_32944 = (state_33081[(10)]);
var inst_32949 = cljs.core._nth.call(null,inst_32942,inst_32944);
var inst_32950 = figwheel.client.file_reloading.eval_body.call(null,inst_32949,opts);
var inst_32951 = (inst_32944 + (1));
var tmp33083 = inst_32941;
var tmp33084 = inst_32942;
var tmp33085 = inst_32943;
var inst_32941__$1 = tmp33083;
var inst_32942__$1 = tmp33084;
var inst_32943__$1 = tmp33085;
var inst_32944__$1 = inst_32951;
var state_33081__$1 = (function (){var statearr_33086 = state_33081;
(statearr_33086[(7)] = inst_32941__$1);

(statearr_33086[(8)] = inst_32942__$1);

(statearr_33086[(9)] = inst_32943__$1);

(statearr_33086[(10)] = inst_32944__$1);

(statearr_33086[(11)] = inst_32950);

return statearr_33086;
})();
var statearr_33087_33173 = state_33081__$1;
(statearr_33087_33173[(2)] = null);

(statearr_33087_33173[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33082 === (20))){
var inst_32984 = (state_33081[(12)]);
var inst_32992 = figwheel.client.file_reloading.sort_files.call(null,inst_32984);
var state_33081__$1 = state_33081;
var statearr_33088_33174 = state_33081__$1;
(statearr_33088_33174[(2)] = inst_32992);

(statearr_33088_33174[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33082 === (27))){
var state_33081__$1 = state_33081;
var statearr_33089_33175 = state_33081__$1;
(statearr_33089_33175[(2)] = null);

(statearr_33089_33175[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33082 === (1))){
var inst_32933 = (state_33081[(13)]);
var inst_32930 = before_jsload.call(null,files);
var inst_32931 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_32932 = (function (){return ((function (inst_32933,inst_32930,inst_32931,state_val_33082,c__27506__auto__,map__32926,map__32926__$1,opts,before_jsload,on_jsload,reload_dependents,map__32927,map__32927__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__32674_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__32674_SHARP_);
});
;})(inst_32933,inst_32930,inst_32931,state_val_33082,c__27506__auto__,map__32926,map__32926__$1,opts,before_jsload,on_jsload,reload_dependents,map__32927,map__32927__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_32933__$1 = cljs.core.filter.call(null,inst_32932,files);
var inst_32934 = cljs.core.not_empty.call(null,inst_32933__$1);
var state_33081__$1 = (function (){var statearr_33090 = state_33081;
(statearr_33090[(14)] = inst_32930);

(statearr_33090[(15)] = inst_32931);

(statearr_33090[(13)] = inst_32933__$1);

return statearr_33090;
})();
if(cljs.core.truth_(inst_32934)){
var statearr_33091_33176 = state_33081__$1;
(statearr_33091_33176[(1)] = (2));

} else {
var statearr_33092_33177 = state_33081__$1;
(statearr_33092_33177[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33082 === (24))){
var state_33081__$1 = state_33081;
var statearr_33093_33178 = state_33081__$1;
(statearr_33093_33178[(2)] = null);

(statearr_33093_33178[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33082 === (39))){
var inst_33034 = (state_33081[(16)]);
var state_33081__$1 = state_33081;
var statearr_33094_33179 = state_33081__$1;
(statearr_33094_33179[(2)] = inst_33034);

(statearr_33094_33179[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33082 === (46))){
var inst_33076 = (state_33081[(2)]);
var state_33081__$1 = state_33081;
var statearr_33095_33180 = state_33081__$1;
(statearr_33095_33180[(2)] = inst_33076);

(statearr_33095_33180[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33082 === (4))){
var inst_32978 = (state_33081[(2)]);
var inst_32979 = cljs.core.List.EMPTY;
var inst_32980 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_32979);
var inst_32981 = (function (){return ((function (inst_32978,inst_32979,inst_32980,state_val_33082,c__27506__auto__,map__32926,map__32926__$1,opts,before_jsload,on_jsload,reload_dependents,map__32927,map__32927__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__32675_SHARP_){
var and__25282__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__32675_SHARP_);
if(cljs.core.truth_(and__25282__auto__)){
return (cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__32675_SHARP_))) && (cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,p1__32675_SHARP_)));
} else {
return and__25282__auto__;
}
});
;})(inst_32978,inst_32979,inst_32980,state_val_33082,c__27506__auto__,map__32926,map__32926__$1,opts,before_jsload,on_jsload,reload_dependents,map__32927,map__32927__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_32982 = cljs.core.filter.call(null,inst_32981,files);
var inst_32983 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_32984 = cljs.core.concat.call(null,inst_32982,inst_32983);
var state_33081__$1 = (function (){var statearr_33096 = state_33081;
(statearr_33096[(17)] = inst_32978);

(statearr_33096[(12)] = inst_32984);

(statearr_33096[(18)] = inst_32980);

return statearr_33096;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_33097_33181 = state_33081__$1;
(statearr_33097_33181[(1)] = (16));

} else {
var statearr_33098_33182 = state_33081__$1;
(statearr_33098_33182[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33082 === (15))){
var inst_32968 = (state_33081[(2)]);
var state_33081__$1 = state_33081;
var statearr_33099_33183 = state_33081__$1;
(statearr_33099_33183[(2)] = inst_32968);

(statearr_33099_33183[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33082 === (21))){
var inst_32994 = (state_33081[(19)]);
var inst_32994__$1 = (state_33081[(2)]);
var inst_32995 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_32994__$1);
var state_33081__$1 = (function (){var statearr_33100 = state_33081;
(statearr_33100[(19)] = inst_32994__$1);

return statearr_33100;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33081__$1,(22),inst_32995);
} else {
if((state_val_33082 === (31))){
var inst_33079 = (state_33081[(2)]);
var state_33081__$1 = state_33081;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33081__$1,inst_33079);
} else {
if((state_val_33082 === (32))){
var inst_33034 = (state_33081[(16)]);
var inst_33039 = inst_33034.cljs$lang$protocol_mask$partition0$;
var inst_33040 = (inst_33039 & (64));
var inst_33041 = inst_33034.cljs$core$ISeq$;
var inst_33042 = (cljs.core.PROTOCOL_SENTINEL === inst_33041);
var inst_33043 = (inst_33040) || (inst_33042);
var state_33081__$1 = state_33081;
if(cljs.core.truth_(inst_33043)){
var statearr_33101_33184 = state_33081__$1;
(statearr_33101_33184[(1)] = (35));

} else {
var statearr_33102_33185 = state_33081__$1;
(statearr_33102_33185[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33082 === (40))){
var inst_33056 = (state_33081[(20)]);
var inst_33055 = (state_33081[(2)]);
var inst_33056__$1 = cljs.core.get.call(null,inst_33055,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_33057 = cljs.core.get.call(null,inst_33055,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_33058 = cljs.core.not_empty.call(null,inst_33056__$1);
var state_33081__$1 = (function (){var statearr_33103 = state_33081;
(statearr_33103[(20)] = inst_33056__$1);

(statearr_33103[(21)] = inst_33057);

return statearr_33103;
})();
if(cljs.core.truth_(inst_33058)){
var statearr_33104_33186 = state_33081__$1;
(statearr_33104_33186[(1)] = (41));

} else {
var statearr_33105_33187 = state_33081__$1;
(statearr_33105_33187[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33082 === (33))){
var state_33081__$1 = state_33081;
var statearr_33106_33188 = state_33081__$1;
(statearr_33106_33188[(2)] = false);

(statearr_33106_33188[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33082 === (13))){
var inst_32954 = (state_33081[(22)]);
var inst_32958 = cljs.core.chunk_first.call(null,inst_32954);
var inst_32959 = cljs.core.chunk_rest.call(null,inst_32954);
var inst_32960 = cljs.core.count.call(null,inst_32958);
var inst_32941 = inst_32959;
var inst_32942 = inst_32958;
var inst_32943 = inst_32960;
var inst_32944 = (0);
var state_33081__$1 = (function (){var statearr_33107 = state_33081;
(statearr_33107[(7)] = inst_32941);

(statearr_33107[(8)] = inst_32942);

(statearr_33107[(9)] = inst_32943);

(statearr_33107[(10)] = inst_32944);

return statearr_33107;
})();
var statearr_33108_33189 = state_33081__$1;
(statearr_33108_33189[(2)] = null);

(statearr_33108_33189[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33082 === (22))){
var inst_33002 = (state_33081[(23)]);
var inst_32994 = (state_33081[(19)]);
var inst_32997 = (state_33081[(24)]);
var inst_32998 = (state_33081[(25)]);
var inst_32997__$1 = (state_33081[(2)]);
var inst_32998__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_32997__$1);
var inst_32999 = (function (){var all_files = inst_32994;
var res_SINGLEQUOTE_ = inst_32997__$1;
var res = inst_32998__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_33002,inst_32994,inst_32997,inst_32998,inst_32997__$1,inst_32998__$1,state_val_33082,c__27506__auto__,map__32926,map__32926__$1,opts,before_jsload,on_jsload,reload_dependents,map__32927,map__32927__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__32676_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__32676_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_33002,inst_32994,inst_32997,inst_32998,inst_32997__$1,inst_32998__$1,state_val_33082,c__27506__auto__,map__32926,map__32926__$1,opts,before_jsload,on_jsload,reload_dependents,map__32927,map__32927__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_33000 = cljs.core.filter.call(null,inst_32999,inst_32997__$1);
var inst_33001 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_33002__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_33001);
var inst_33003 = cljs.core.not_empty.call(null,inst_33002__$1);
var state_33081__$1 = (function (){var statearr_33109 = state_33081;
(statearr_33109[(23)] = inst_33002__$1);

(statearr_33109[(26)] = inst_33000);

(statearr_33109[(24)] = inst_32997__$1);

(statearr_33109[(25)] = inst_32998__$1);

return statearr_33109;
})();
if(cljs.core.truth_(inst_33003)){
var statearr_33110_33190 = state_33081__$1;
(statearr_33110_33190[(1)] = (23));

} else {
var statearr_33111_33191 = state_33081__$1;
(statearr_33111_33191[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33082 === (36))){
var state_33081__$1 = state_33081;
var statearr_33112_33192 = state_33081__$1;
(statearr_33112_33192[(2)] = false);

(statearr_33112_33192[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33082 === (41))){
var inst_33056 = (state_33081[(20)]);
var inst_33060 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_33061 = cljs.core.map.call(null,inst_33060,inst_33056);
var inst_33062 = cljs.core.pr_str.call(null,inst_33061);
var inst_33063 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("figwheel-no-load meta-data: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_33062)].join('');
var inst_33064 = figwheel.client.utils.log.call(null,inst_33063);
var state_33081__$1 = state_33081;
var statearr_33113_33193 = state_33081__$1;
(statearr_33113_33193[(2)] = inst_33064);

(statearr_33113_33193[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33082 === (43))){
var inst_33057 = (state_33081[(21)]);
var inst_33067 = (state_33081[(2)]);
var inst_33068 = cljs.core.not_empty.call(null,inst_33057);
var state_33081__$1 = (function (){var statearr_33114 = state_33081;
(statearr_33114[(27)] = inst_33067);

return statearr_33114;
})();
if(cljs.core.truth_(inst_33068)){
var statearr_33115_33194 = state_33081__$1;
(statearr_33115_33194[(1)] = (44));

} else {
var statearr_33116_33195 = state_33081__$1;
(statearr_33116_33195[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33082 === (29))){
var inst_33002 = (state_33081[(23)]);
var inst_32994 = (state_33081[(19)]);
var inst_33034 = (state_33081[(16)]);
var inst_33000 = (state_33081[(26)]);
var inst_32997 = (state_33081[(24)]);
var inst_32998 = (state_33081[(25)]);
var inst_33030 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_33033 = (function (){var all_files = inst_32994;
var res_SINGLEQUOTE_ = inst_32997;
var res = inst_32998;
var files_not_loaded = inst_33000;
var dependencies_that_loaded = inst_33002;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_33002,inst_32994,inst_33034,inst_33000,inst_32997,inst_32998,inst_33030,state_val_33082,c__27506__auto__,map__32926,map__32926__$1,opts,before_jsload,on_jsload,reload_dependents,map__32927,map__32927__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__33032){
var map__33117 = p__33032;
var map__33117__$1 = ((((!((map__33117 == null)))?((((map__33117.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33117.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33117):map__33117);
var namespace = cljs.core.get.call(null,map__33117__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.truth_(meta_data.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179)))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_33002,inst_32994,inst_33034,inst_33000,inst_32997,inst_32998,inst_33030,state_val_33082,c__27506__auto__,map__32926,map__32926__$1,opts,before_jsload,on_jsload,reload_dependents,map__32927,map__32927__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_33034__$1 = cljs.core.group_by.call(null,inst_33033,inst_33000);
var inst_33036 = (inst_33034__$1 == null);
var inst_33037 = cljs.core.not.call(null,inst_33036);
var state_33081__$1 = (function (){var statearr_33119 = state_33081;
(statearr_33119[(16)] = inst_33034__$1);

(statearr_33119[(28)] = inst_33030);

return statearr_33119;
})();
if(inst_33037){
var statearr_33120_33196 = state_33081__$1;
(statearr_33120_33196[(1)] = (32));

} else {
var statearr_33121_33197 = state_33081__$1;
(statearr_33121_33197[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33082 === (44))){
var inst_33057 = (state_33081[(21)]);
var inst_33070 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_33057);
var inst_33071 = cljs.core.pr_str.call(null,inst_33070);
var inst_33072 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("not required: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_33071)].join('');
var inst_33073 = figwheel.client.utils.log.call(null,inst_33072);
var state_33081__$1 = state_33081;
var statearr_33122_33198 = state_33081__$1;
(statearr_33122_33198[(2)] = inst_33073);

(statearr_33122_33198[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33082 === (6))){
var inst_32975 = (state_33081[(2)]);
var state_33081__$1 = state_33081;
var statearr_33123_33199 = state_33081__$1;
(statearr_33123_33199[(2)] = inst_32975);

(statearr_33123_33199[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33082 === (28))){
var inst_33000 = (state_33081[(26)]);
var inst_33027 = (state_33081[(2)]);
var inst_33028 = cljs.core.not_empty.call(null,inst_33000);
var state_33081__$1 = (function (){var statearr_33124 = state_33081;
(statearr_33124[(29)] = inst_33027);

return statearr_33124;
})();
if(cljs.core.truth_(inst_33028)){
var statearr_33125_33200 = state_33081__$1;
(statearr_33125_33200[(1)] = (29));

} else {
var statearr_33126_33201 = state_33081__$1;
(statearr_33126_33201[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33082 === (25))){
var inst_32998 = (state_33081[(25)]);
var inst_33014 = (state_33081[(2)]);
var inst_33015 = cljs.core.not_empty.call(null,inst_32998);
var state_33081__$1 = (function (){var statearr_33127 = state_33081;
(statearr_33127[(30)] = inst_33014);

return statearr_33127;
})();
if(cljs.core.truth_(inst_33015)){
var statearr_33128_33202 = state_33081__$1;
(statearr_33128_33202[(1)] = (26));

} else {
var statearr_33129_33203 = state_33081__$1;
(statearr_33129_33203[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33082 === (34))){
var inst_33050 = (state_33081[(2)]);
var state_33081__$1 = state_33081;
if(cljs.core.truth_(inst_33050)){
var statearr_33130_33204 = state_33081__$1;
(statearr_33130_33204[(1)] = (38));

} else {
var statearr_33131_33205 = state_33081__$1;
(statearr_33131_33205[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33082 === (17))){
var state_33081__$1 = state_33081;
var statearr_33132_33206 = state_33081__$1;
(statearr_33132_33206[(2)] = recompile_dependents);

(statearr_33132_33206[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33082 === (3))){
var state_33081__$1 = state_33081;
var statearr_33133_33207 = state_33081__$1;
(statearr_33133_33207[(2)] = null);

(statearr_33133_33207[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33082 === (12))){
var inst_32971 = (state_33081[(2)]);
var state_33081__$1 = state_33081;
var statearr_33134_33208 = state_33081__$1;
(statearr_33134_33208[(2)] = inst_32971);

(statearr_33134_33208[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33082 === (2))){
var inst_32933 = (state_33081[(13)]);
var inst_32940 = cljs.core.seq.call(null,inst_32933);
var inst_32941 = inst_32940;
var inst_32942 = null;
var inst_32943 = (0);
var inst_32944 = (0);
var state_33081__$1 = (function (){var statearr_33135 = state_33081;
(statearr_33135[(7)] = inst_32941);

(statearr_33135[(8)] = inst_32942);

(statearr_33135[(9)] = inst_32943);

(statearr_33135[(10)] = inst_32944);

return statearr_33135;
})();
var statearr_33136_33209 = state_33081__$1;
(statearr_33136_33209[(2)] = null);

(statearr_33136_33209[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33082 === (23))){
var inst_33002 = (state_33081[(23)]);
var inst_32994 = (state_33081[(19)]);
var inst_33000 = (state_33081[(26)]);
var inst_32997 = (state_33081[(24)]);
var inst_32998 = (state_33081[(25)]);
var inst_33005 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_33007 = (function (){var all_files = inst_32994;
var res_SINGLEQUOTE_ = inst_32997;
var res = inst_32998;
var files_not_loaded = inst_33000;
var dependencies_that_loaded = inst_33002;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_33002,inst_32994,inst_33000,inst_32997,inst_32998,inst_33005,state_val_33082,c__27506__auto__,map__32926,map__32926__$1,opts,before_jsload,on_jsload,reload_dependents,map__32927,map__32927__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__33006){
var map__33137 = p__33006;
var map__33137__$1 = ((((!((map__33137 == null)))?((((map__33137.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33137.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33137):map__33137);
var request_url = cljs.core.get.call(null,map__33137__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_33002,inst_32994,inst_33000,inst_32997,inst_32998,inst_33005,state_val_33082,c__27506__auto__,map__32926,map__32926__$1,opts,before_jsload,on_jsload,reload_dependents,map__32927,map__32927__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_33008 = cljs.core.reverse.call(null,inst_33002);
var inst_33009 = cljs.core.map.call(null,inst_33007,inst_33008);
var inst_33010 = cljs.core.pr_str.call(null,inst_33009);
var inst_33011 = figwheel.client.utils.log.call(null,inst_33010);
var state_33081__$1 = (function (){var statearr_33139 = state_33081;
(statearr_33139[(31)] = inst_33005);

return statearr_33139;
})();
var statearr_33140_33210 = state_33081__$1;
(statearr_33140_33210[(2)] = inst_33011);

(statearr_33140_33210[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33082 === (35))){
var state_33081__$1 = state_33081;
var statearr_33141_33211 = state_33081__$1;
(statearr_33141_33211[(2)] = true);

(statearr_33141_33211[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33082 === (19))){
var inst_32984 = (state_33081[(12)]);
var inst_32990 = figwheel.client.file_reloading.expand_files.call(null,inst_32984);
var state_33081__$1 = state_33081;
var statearr_33142_33212 = state_33081__$1;
(statearr_33142_33212[(2)] = inst_32990);

(statearr_33142_33212[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33082 === (11))){
var state_33081__$1 = state_33081;
var statearr_33143_33213 = state_33081__$1;
(statearr_33143_33213[(2)] = null);

(statearr_33143_33213[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33082 === (9))){
var inst_32973 = (state_33081[(2)]);
var state_33081__$1 = state_33081;
var statearr_33144_33214 = state_33081__$1;
(statearr_33144_33214[(2)] = inst_32973);

(statearr_33144_33214[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33082 === (5))){
var inst_32943 = (state_33081[(9)]);
var inst_32944 = (state_33081[(10)]);
var inst_32946 = (inst_32944 < inst_32943);
var inst_32947 = inst_32946;
var state_33081__$1 = state_33081;
if(cljs.core.truth_(inst_32947)){
var statearr_33145_33215 = state_33081__$1;
(statearr_33145_33215[(1)] = (7));

} else {
var statearr_33146_33216 = state_33081__$1;
(statearr_33146_33216[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33082 === (14))){
var inst_32954 = (state_33081[(22)]);
var inst_32963 = cljs.core.first.call(null,inst_32954);
var inst_32964 = figwheel.client.file_reloading.eval_body.call(null,inst_32963,opts);
var inst_32965 = cljs.core.next.call(null,inst_32954);
var inst_32941 = inst_32965;
var inst_32942 = null;
var inst_32943 = (0);
var inst_32944 = (0);
var state_33081__$1 = (function (){var statearr_33147 = state_33081;
(statearr_33147[(7)] = inst_32941);

(statearr_33147[(32)] = inst_32964);

(statearr_33147[(8)] = inst_32942);

(statearr_33147[(9)] = inst_32943);

(statearr_33147[(10)] = inst_32944);

return statearr_33147;
})();
var statearr_33148_33217 = state_33081__$1;
(statearr_33148_33217[(2)] = null);

(statearr_33148_33217[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33082 === (45))){
var state_33081__$1 = state_33081;
var statearr_33149_33218 = state_33081__$1;
(statearr_33149_33218[(2)] = null);

(statearr_33149_33218[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33082 === (26))){
var inst_33002 = (state_33081[(23)]);
var inst_32994 = (state_33081[(19)]);
var inst_33000 = (state_33081[(26)]);
var inst_32997 = (state_33081[(24)]);
var inst_32998 = (state_33081[(25)]);
var inst_33017 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_33019 = (function (){var all_files = inst_32994;
var res_SINGLEQUOTE_ = inst_32997;
var res = inst_32998;
var files_not_loaded = inst_33000;
var dependencies_that_loaded = inst_33002;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_33002,inst_32994,inst_33000,inst_32997,inst_32998,inst_33017,state_val_33082,c__27506__auto__,map__32926,map__32926__$1,opts,before_jsload,on_jsload,reload_dependents,map__32927,map__32927__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__33018){
var map__33150 = p__33018;
var map__33150__$1 = ((((!((map__33150 == null)))?((((map__33150.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33150.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33150):map__33150);
var namespace = cljs.core.get.call(null,map__33150__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__33150__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_33002,inst_32994,inst_33000,inst_32997,inst_32998,inst_33017,state_val_33082,c__27506__auto__,map__32926,map__32926__$1,opts,before_jsload,on_jsload,reload_dependents,map__32927,map__32927__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_33020 = cljs.core.map.call(null,inst_33019,inst_32998);
var inst_33021 = cljs.core.pr_str.call(null,inst_33020);
var inst_33022 = figwheel.client.utils.log.call(null,inst_33021);
var inst_33023 = (function (){var all_files = inst_32994;
var res_SINGLEQUOTE_ = inst_32997;
var res = inst_32998;
var files_not_loaded = inst_33000;
var dependencies_that_loaded = inst_33002;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_33002,inst_32994,inst_33000,inst_32997,inst_32998,inst_33017,inst_33019,inst_33020,inst_33021,inst_33022,state_val_33082,c__27506__auto__,map__32926,map__32926__$1,opts,before_jsload,on_jsload,reload_dependents,map__32927,map__32927__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_33002,inst_32994,inst_33000,inst_32997,inst_32998,inst_33017,inst_33019,inst_33020,inst_33021,inst_33022,state_val_33082,c__27506__auto__,map__32926,map__32926__$1,opts,before_jsload,on_jsload,reload_dependents,map__32927,map__32927__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_33024 = setTimeout(inst_33023,(10));
var state_33081__$1 = (function (){var statearr_33152 = state_33081;
(statearr_33152[(33)] = inst_33022);

(statearr_33152[(34)] = inst_33017);

return statearr_33152;
})();
var statearr_33153_33219 = state_33081__$1;
(statearr_33153_33219[(2)] = inst_33024);

(statearr_33153_33219[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33082 === (16))){
var state_33081__$1 = state_33081;
var statearr_33154_33220 = state_33081__$1;
(statearr_33154_33220[(2)] = reload_dependents);

(statearr_33154_33220[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33082 === (38))){
var inst_33034 = (state_33081[(16)]);
var inst_33052 = cljs.core.apply.call(null,cljs.core.hash_map,inst_33034);
var state_33081__$1 = state_33081;
var statearr_33155_33221 = state_33081__$1;
(statearr_33155_33221[(2)] = inst_33052);

(statearr_33155_33221[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33082 === (30))){
var state_33081__$1 = state_33081;
var statearr_33156_33222 = state_33081__$1;
(statearr_33156_33222[(2)] = null);

(statearr_33156_33222[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33082 === (10))){
var inst_32954 = (state_33081[(22)]);
var inst_32956 = cljs.core.chunked_seq_QMARK_.call(null,inst_32954);
var state_33081__$1 = state_33081;
if(inst_32956){
var statearr_33157_33223 = state_33081__$1;
(statearr_33157_33223[(1)] = (13));

} else {
var statearr_33158_33224 = state_33081__$1;
(statearr_33158_33224[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33082 === (18))){
var inst_32988 = (state_33081[(2)]);
var state_33081__$1 = state_33081;
if(cljs.core.truth_(inst_32988)){
var statearr_33159_33225 = state_33081__$1;
(statearr_33159_33225[(1)] = (19));

} else {
var statearr_33160_33226 = state_33081__$1;
(statearr_33160_33226[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33082 === (42))){
var state_33081__$1 = state_33081;
var statearr_33161_33227 = state_33081__$1;
(statearr_33161_33227[(2)] = null);

(statearr_33161_33227[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33082 === (37))){
var inst_33047 = (state_33081[(2)]);
var state_33081__$1 = state_33081;
var statearr_33162_33228 = state_33081__$1;
(statearr_33162_33228[(2)] = inst_33047);

(statearr_33162_33228[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33082 === (8))){
var inst_32941 = (state_33081[(7)]);
var inst_32954 = (state_33081[(22)]);
var inst_32954__$1 = cljs.core.seq.call(null,inst_32941);
var state_33081__$1 = (function (){var statearr_33163 = state_33081;
(statearr_33163[(22)] = inst_32954__$1);

return statearr_33163;
})();
if(inst_32954__$1){
var statearr_33164_33229 = state_33081__$1;
(statearr_33164_33229[(1)] = (10));

} else {
var statearr_33165_33230 = state_33081__$1;
(statearr_33165_33230[(1)] = (11));

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
}
});})(c__27506__auto__,map__32926,map__32926__$1,opts,before_jsload,on_jsload,reload_dependents,map__32927,map__32927__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__27441__auto__,c__27506__auto__,map__32926,map__32926__$1,opts,before_jsload,on_jsload,reload_dependents,map__32927,map__32927__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__27442__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__27442__auto____0 = (function (){
var statearr_33169 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33169[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__27442__auto__);

(statearr_33169[(1)] = (1));

return statearr_33169;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__27442__auto____1 = (function (state_33081){
while(true){
var ret_value__27443__auto__ = (function (){try{while(true){
var result__27444__auto__ = switch__27441__auto__.call(null,state_33081);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27444__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27444__auto__;
}
break;
}
}catch (e33170){if((e33170 instanceof Object)){
var ex__27445__auto__ = e33170;
var statearr_33171_33231 = state_33081;
(statearr_33171_33231[(5)] = ex__27445__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33081);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33170;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27443__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33232 = state_33081;
state_33081 = G__33232;
continue;
} else {
return ret_value__27443__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__27442__auto__ = function(state_33081){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__27442__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__27442__auto____1.call(this,state_33081);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__27442__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__27442__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__27442__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__27442__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__27442__auto__;
})()
;})(switch__27441__auto__,c__27506__auto__,map__32926,map__32926__$1,opts,before_jsload,on_jsload,reload_dependents,map__32927,map__32927__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__27508__auto__ = (function (){var statearr_33172 = f__27507__auto__.call(null);
(statearr_33172[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27506__auto__);

return statearr_33172;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27508__auto__);
});})(c__27506__auto__,map__32926,map__32926__$1,opts,before_jsload,on_jsload,reload_dependents,map__32927,map__32927__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__27506__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol),cljs.core.str.cljs$core$IFn$_invoke$arity$1("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__33235,link){
var map__33238 = p__33235;
var map__33238__$1 = ((((!((map__33238 == null)))?((((map__33238.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33238.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33238):map__33238);
var file = cljs.core.get.call(null,map__33238__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = link.href;
if(cljs.core.truth_(temp__4657__auto__)){
var link_href = temp__4657__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4657__auto__,map__33238,map__33238__$1,file){
return (function (p1__33233_SHARP_,p2__33234_SHARP_){
if(cljs.core._EQ_.call(null,p1__33233_SHARP_,p2__33234_SHARP_)){
return p1__33233_SHARP_;
} else {
return false;
}
});})(link_href,temp__4657__auto__,map__33238,map__33238__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__4657__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__33244){
var map__33245 = p__33244;
var map__33245__$1 = ((((!((map__33245 == null)))?((((map__33245.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33245.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33245):map__33245);
var match_length = cljs.core.get.call(null,map__33245__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__33245__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__33240_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__33240_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__4657__auto__)){
var res = temp__4657__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.distinctify = (function figwheel$client$file_reloading$distinctify(key,seqq){
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__33247_SHARP_,p2__33248_SHARP_){
return cljs.core.assoc.call(null,p1__33247_SHARP_,cljs.core.get.call(null,p2__33248_SHARP_,key),p2__33248_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.add_link_to_document = (function figwheel$client$file_reloading$add_link_to_document(orig_link,klone,finished_fn){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
parent.removeChild(orig_link);

return finished_fn.call(null);
});})(parent))
,(300));
});
if(typeof figwheel.client.file_reloading.reload_css_deferred_chain !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_css_deferred_chain = cljs.core.atom.call(null,goog.async.Deferred.succeed());
}
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(f_data,fin){
var temp__4655__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4655__auto__)){
var link = temp__4655__auto__;
return figwheel.client.file_reloading.add_link_to_document.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href),((function (link,temp__4655__auto__){
return (function (){
return fin.call(null,cljs.core.assoc.call(null,f_data,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),true));
});})(link,temp__4655__auto__))
);
} else {
return fin.call(null,f_data);
}
});
figwheel.client.file_reloading.reload_css_files_STAR_ = (function figwheel$client$file_reloading$reload_css_files_STAR_(deferred,f_datas,on_cssload){
return figwheel.client.utils.liftContD.call(null,figwheel.client.utils.mapConcatD.call(null,deferred,figwheel.client.file_reloading.reload_css_file,f_datas),(function (f_datas_SINGLEQUOTE_,fin){
var loaded_f_datas_33249 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),f_datas_SINGLEQUOTE_);
figwheel.client.file_reloading.on_cssload_custom_event.call(null,loaded_f_datas_33249);

if(cljs.core.fn_QMARK_.call(null,on_cssload)){
on_cssload.call(null,loaded_f_datas_33249);
} else {
}

return fin.call(null);
}));
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__33250,p__33251){
var map__33256 = p__33250;
var map__33256__$1 = ((((!((map__33256 == null)))?((((map__33256.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33256.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33256):map__33256);
var on_cssload = cljs.core.get.call(null,map__33256__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__33257 = p__33251;
var map__33257__$1 = ((((!((map__33257 == null)))?((((map__33257.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33257.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33257):map__33257);
var files_msg = map__33257__$1;
var files = cljs.core.get.call(null,map__33257__$1,new cljs.core.Keyword(null,"files","files",-472457450));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var temp__4657__auto__ = cljs.core.not_empty.call(null,figwheel.client.file_reloading.distinctify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files));
if(cljs.core.truth_(temp__4657__auto__)){
var f_datas = temp__4657__auto__;
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.reload_css_deferred_chain,figwheel.client.file_reloading.reload_css_files_STAR_,f_datas,on_cssload);
} else {
return null;
}
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1494243348672