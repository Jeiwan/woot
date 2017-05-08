// Compiled by ClojureScript 1.9.521 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('goog.userAgent.product');
goog.require('goog.object');
goog.require('cljs.reader');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.utils');
goog.require('figwheel.client.heads_up');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('cljs.repl');
figwheel.client._figwheel_version_ = "0.5.9";
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(var_args){
var args35112 = [];
var len__26407__auto___35115 = arguments.length;
var i__26408__auto___35116 = (0);
while(true){
if((i__26408__auto___35116 < len__26407__auto___35115)){
args35112.push((arguments[i__26408__auto___35116]));

var G__35117 = (i__26408__auto___35116 + (1));
i__26408__auto___35116 = G__35117;
continue;
} else {
}
break;
}

var G__35114 = args35112.length;
switch (G__35114) {
case 2:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args35112.length)].join('')));

}
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2 = (function (stream,args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stream","stream",1534941648),stream,new cljs.core.Keyword(null,"args","args",1315556576),args], null)], null));

return null;
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1 = (function (args){
return figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);
});

figwheel.client.figwheel_repl_print.cljs$lang$maxFixedArity = 2;

figwheel.client.console_out_print = (function figwheel$client$console_out_print(args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.console_err_print = (function figwheel$client$console_err_print(args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.repl_out_print_fn = (function figwheel$client$repl_out_print_fn(var_args){
var args__26414__auto__ = [];
var len__26407__auto___35120 = arguments.length;
var i__26408__auto___35121 = (0);
while(true){
if((i__26408__auto___35121 < len__26407__auto___35120)){
args__26414__auto__.push((arguments[i__26408__auto___35121]));

var G__35122 = (i__26408__auto___35121 + (1));
i__26408__auto___35121 = G__35122;
continue;
} else {
}
break;
}

var argseq__26415__auto__ = ((((0) < args__26414__auto__.length))?(new cljs.core.IndexedSeq(args__26414__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__26415__auto__);
});

figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_out_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);

return null;
});

figwheel.client.repl_out_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq35119){
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35119));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__26414__auto__ = [];
var len__26407__auto___35124 = arguments.length;
var i__26408__auto___35125 = (0);
while(true){
if((i__26408__auto___35125 < len__26407__auto___35124)){
args__26414__auto__.push((arguments[i__26408__auto___35125]));

var G__35126 = (i__26408__auto___35125 + (1));
i__26408__auto___35125 = G__35126;
continue;
} else {
}
break;
}

var argseq__26415__auto__ = ((((0) < args__26414__auto__.length))?(new cljs.core.IndexedSeq(args__26414__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__26415__auto__);
});

figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_err_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"err","err",-2089457205),args);

return null;
});

figwheel.client.repl_err_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq35123){
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35123));
});

figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core.set_print_fn_BANG_.call(null,figwheel.client.repl_out_print_fn);

cljs.core.set_print_err_fn_BANG_.call(null,figwheel.client.repl_err_print_fn);

return null;
});
figwheel.client.autoload_QMARK_ = (function figwheel$client$autoload_QMARK_(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),true);
});
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
var res = figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),cljs.core.not.call(null,figwheel.client.autoload_QMARK_.call(null)));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Toggle autoload deprecated! Use (figwheel.client/set-autoload! false)")].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Figwheel autoloading "),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF"))].join(''));

return res;
});
goog.exportSymbol('figwheel.client.toggle_autoload', figwheel.client.toggle_autoload);
/**
 * Figwheel by default loads code changes as you work. Sometimes you
 *   just want to work on your code without the ramifications of
 *   autoloading and simply load your code piecemeal in the REPL. You can
 *   turn autoloading on and of with this method. 
 * 
 *   (figwheel.client/set-autoload false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_autoload = (function figwheel$client$set_autoload(b){
if((b === true) || (b === false)){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),b);
});
goog.exportSymbol('figwheel.client.set_autoload', figwheel.client.set_autoload);
figwheel.client.repl_pprint = (function figwheel$client$repl_pprint(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),true);
});
goog.exportSymbol('figwheel.client.repl_pprint', figwheel.client.repl_pprint);
/**
 * This method gives you the ability to turn the pretty printing of
 *   the REPL's return value on and off.
 *   
 *   (figwheel.client/set-repl-pprint false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_repl_pprint = (function figwheel$client$set_repl_pprint(b){
if((b === true) || (b === false)){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),b);
});
goog.exportSymbol('figwheel.client.set_repl_pprint', figwheel.client.set_repl_pprint);
figwheel.client.repl_result_pr_str = (function figwheel$client$repl_result_pr_str(v){
if(cljs.core.truth_(figwheel.client.repl_pprint.call(null))){
return figwheel.client.utils.pprint_to_string.call(null,v);
} else {
return cljs.core.pr_str.call(null,v);
}
});
goog.exportSymbol('figwheel.client.repl_result_pr_str', figwheel.client.repl_result_pr_str);
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel.client.get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__35127){
var map__35130 = p__35127;
var map__35130__$1 = ((((!((map__35130 == null)))?((((map__35130.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35130.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35130):map__35130);
var message = cljs.core.get.call(null,map__35130__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__35130__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" : "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__25294__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__25294__auto__)){
return or__25294__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__25282__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__25282__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__25282__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return (cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts)));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__27506__auto___35292 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27506__auto___35292,ch){
return (function (){
var f__27507__auto__ = (function (){var switch__27441__auto__ = ((function (c__27506__auto___35292,ch){
return (function (state_35261){
var state_val_35262 = (state_35261[(1)]);
if((state_val_35262 === (7))){
var inst_35257 = (state_35261[(2)]);
var state_35261__$1 = state_35261;
var statearr_35263_35293 = state_35261__$1;
(statearr_35263_35293[(2)] = inst_35257);

(statearr_35263_35293[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35262 === (1))){
var state_35261__$1 = state_35261;
var statearr_35264_35294 = state_35261__$1;
(statearr_35264_35294[(2)] = null);

(statearr_35264_35294[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35262 === (4))){
var inst_35214 = (state_35261[(7)]);
var inst_35214__$1 = (state_35261[(2)]);
var state_35261__$1 = (function (){var statearr_35265 = state_35261;
(statearr_35265[(7)] = inst_35214__$1);

return statearr_35265;
})();
if(cljs.core.truth_(inst_35214__$1)){
var statearr_35266_35295 = state_35261__$1;
(statearr_35266_35295[(1)] = (5));

} else {
var statearr_35267_35296 = state_35261__$1;
(statearr_35267_35296[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35262 === (15))){
var inst_35221 = (state_35261[(8)]);
var inst_35236 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_35221);
var inst_35237 = cljs.core.first.call(null,inst_35236);
var inst_35238 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_35237);
var inst_35239 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("Figwheel: Not loading code with warnings - "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_35238)].join('');
var inst_35240 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_35239);
var state_35261__$1 = state_35261;
var statearr_35268_35297 = state_35261__$1;
(statearr_35268_35297[(2)] = inst_35240);

(statearr_35268_35297[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35262 === (13))){
var inst_35245 = (state_35261[(2)]);
var state_35261__$1 = state_35261;
var statearr_35269_35298 = state_35261__$1;
(statearr_35269_35298[(2)] = inst_35245);

(statearr_35269_35298[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35262 === (6))){
var state_35261__$1 = state_35261;
var statearr_35270_35299 = state_35261__$1;
(statearr_35270_35299[(2)] = null);

(statearr_35270_35299[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35262 === (17))){
var inst_35243 = (state_35261[(2)]);
var state_35261__$1 = state_35261;
var statearr_35271_35300 = state_35261__$1;
(statearr_35271_35300[(2)] = inst_35243);

(statearr_35271_35300[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35262 === (3))){
var inst_35259 = (state_35261[(2)]);
var state_35261__$1 = state_35261;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35261__$1,inst_35259);
} else {
if((state_val_35262 === (12))){
var inst_35220 = (state_35261[(9)]);
var inst_35234 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_35220,opts);
var state_35261__$1 = state_35261;
if(cljs.core.truth_(inst_35234)){
var statearr_35272_35301 = state_35261__$1;
(statearr_35272_35301[(1)] = (15));

} else {
var statearr_35273_35302 = state_35261__$1;
(statearr_35273_35302[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35262 === (2))){
var state_35261__$1 = state_35261;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35261__$1,(4),ch);
} else {
if((state_val_35262 === (11))){
var inst_35221 = (state_35261[(8)]);
var inst_35226 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_35227 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_35221);
var inst_35228 = cljs.core.async.timeout.call(null,(1000));
var inst_35229 = [inst_35227,inst_35228];
var inst_35230 = (new cljs.core.PersistentVector(null,2,(5),inst_35226,inst_35229,null));
var state_35261__$1 = state_35261;
return cljs.core.async.ioc_alts_BANG_.call(null,state_35261__$1,(14),inst_35230);
} else {
if((state_val_35262 === (9))){
var inst_35221 = (state_35261[(8)]);
var inst_35247 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_35248 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_35221);
var inst_35249 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_35248);
var inst_35250 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("Not loading: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_35249)].join('');
var inst_35251 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_35250);
var state_35261__$1 = (function (){var statearr_35274 = state_35261;
(statearr_35274[(10)] = inst_35247);

return statearr_35274;
})();
var statearr_35275_35303 = state_35261__$1;
(statearr_35275_35303[(2)] = inst_35251);

(statearr_35275_35303[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35262 === (5))){
var inst_35214 = (state_35261[(7)]);
var inst_35216 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_35217 = (new cljs.core.PersistentArrayMap(null,2,inst_35216,null));
var inst_35218 = (new cljs.core.PersistentHashSet(null,inst_35217,null));
var inst_35219 = figwheel.client.focus_msgs.call(null,inst_35218,inst_35214);
var inst_35220 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_35219);
var inst_35221 = cljs.core.first.call(null,inst_35219);
var inst_35222 = figwheel.client.autoload_QMARK_.call(null);
var state_35261__$1 = (function (){var statearr_35276 = state_35261;
(statearr_35276[(8)] = inst_35221);

(statearr_35276[(9)] = inst_35220);

return statearr_35276;
})();
if(cljs.core.truth_(inst_35222)){
var statearr_35277_35304 = state_35261__$1;
(statearr_35277_35304[(1)] = (8));

} else {
var statearr_35278_35305 = state_35261__$1;
(statearr_35278_35305[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35262 === (14))){
var inst_35232 = (state_35261[(2)]);
var state_35261__$1 = state_35261;
var statearr_35279_35306 = state_35261__$1;
(statearr_35279_35306[(2)] = inst_35232);

(statearr_35279_35306[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35262 === (16))){
var state_35261__$1 = state_35261;
var statearr_35280_35307 = state_35261__$1;
(statearr_35280_35307[(2)] = null);

(statearr_35280_35307[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35262 === (10))){
var inst_35253 = (state_35261[(2)]);
var state_35261__$1 = (function (){var statearr_35281 = state_35261;
(statearr_35281[(11)] = inst_35253);

return statearr_35281;
})();
var statearr_35282_35308 = state_35261__$1;
(statearr_35282_35308[(2)] = null);

(statearr_35282_35308[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35262 === (8))){
var inst_35220 = (state_35261[(9)]);
var inst_35224 = figwheel.client.reload_file_state_QMARK_.call(null,inst_35220,opts);
var state_35261__$1 = state_35261;
if(cljs.core.truth_(inst_35224)){
var statearr_35283_35309 = state_35261__$1;
(statearr_35283_35309[(1)] = (11));

} else {
var statearr_35284_35310 = state_35261__$1;
(statearr_35284_35310[(1)] = (12));

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
});})(c__27506__auto___35292,ch))
;
return ((function (switch__27441__auto__,c__27506__auto___35292,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__27442__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__27442__auto____0 = (function (){
var statearr_35288 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35288[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__27442__auto__);

(statearr_35288[(1)] = (1));

return statearr_35288;
});
var figwheel$client$file_reloader_plugin_$_state_machine__27442__auto____1 = (function (state_35261){
while(true){
var ret_value__27443__auto__ = (function (){try{while(true){
var result__27444__auto__ = switch__27441__auto__.call(null,state_35261);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27444__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27444__auto__;
}
break;
}
}catch (e35289){if((e35289 instanceof Object)){
var ex__27445__auto__ = e35289;
var statearr_35290_35311 = state_35261;
(statearr_35290_35311[(5)] = ex__27445__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35261);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35289;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27443__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35312 = state_35261;
state_35261 = G__35312;
continue;
} else {
return ret_value__27443__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__27442__auto__ = function(state_35261){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__27442__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__27442__auto____1.call(this,state_35261);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloader_plugin_$_state_machine__27442__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__27442__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__27442__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__27442__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__27442__auto__;
})()
;})(switch__27441__auto__,c__27506__auto___35292,ch))
})();
var state__27508__auto__ = (function (){var statearr_35291 = f__27507__auto__.call(null);
(statearr_35291[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27506__auto___35292);

return statearr_35291;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27508__auto__);
});})(c__27506__auto___35292,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__35313_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__35313_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
figwheel.client.get_ua_product = (function figwheel$client$get_ua_product(){
if(cljs.core.truth_(figwheel.client.utils.node_env_QMARK_.call(null))){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
}
});
var base_path_35316 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_35316){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{figwheel.client.enable_repl_print_BANG_.call(null);

var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value], null));
}catch (e35315){if((e35315 instanceof Error)){
var e = e35315;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_35316], null));
} else {
var e = e35315;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}finally {figwheel.client.enable_repl_print_BANG_.call(null);
}});})(base_path_35316))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = ({});
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__35317){
var map__35326 = p__35317;
var map__35326__$1 = ((((!((map__35326 == null)))?((((map__35326.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35326.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35326):map__35326);
var opts = map__35326__$1;
var build_id = cljs.core.get.call(null,map__35326__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__35326,map__35326__$1,opts,build_id){
return (function (p__35328){
var vec__35329 = p__35328;
var seq__35330 = cljs.core.seq.call(null,vec__35329);
var first__35331 = cljs.core.first.call(null,seq__35330);
var seq__35330__$1 = cljs.core.next.call(null,seq__35330);
var map__35332 = first__35331;
var map__35332__$1 = ((((!((map__35332 == null)))?((((map__35332.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35332.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35332):map__35332);
var msg = map__35332__$1;
var msg_name = cljs.core.get.call(null,map__35332__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__35330__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__35329,seq__35330,first__35331,seq__35330__$1,map__35332,map__35332__$1,msg,msg_name,_,map__35326,map__35326__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__35329,seq__35330,first__35331,seq__35330__$1,map__35332,map__35332__$1,msg,msg_name,_,map__35326,map__35326__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__35326,map__35326__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__35340){
var vec__35341 = p__35340;
var seq__35342 = cljs.core.seq.call(null,vec__35341);
var first__35343 = cljs.core.first.call(null,seq__35342);
var seq__35342__$1 = cljs.core.next.call(null,seq__35342);
var map__35344 = first__35343;
var map__35344__$1 = ((((!((map__35344 == null)))?((((map__35344.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35344.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35344):map__35344);
var msg = map__35344__$1;
var msg_name = cljs.core.get.call(null,map__35344__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__35342__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__35346){
var map__35358 = p__35346;
var map__35358__$1 = ((((!((map__35358 == null)))?((((map__35358.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35358.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35358):map__35358);
var on_compile_warning = cljs.core.get.call(null,map__35358__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__35358__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__35358,map__35358__$1,on_compile_warning,on_compile_fail){
return (function (p__35360){
var vec__35361 = p__35360;
var seq__35362 = cljs.core.seq.call(null,vec__35361);
var first__35363 = cljs.core.first.call(null,seq__35362);
var seq__35362__$1 = cljs.core.next.call(null,seq__35362);
var map__35364 = first__35363;
var map__35364__$1 = ((((!((map__35364 == null)))?((((map__35364.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35364.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35364):map__35364);
var msg = map__35364__$1;
var msg_name = cljs.core.get.call(null,map__35364__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__35362__$1;
var pred__35366 = cljs.core._EQ_;
var expr__35367 = msg_name;
if(cljs.core.truth_(pred__35366.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__35367))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__35366.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__35367))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__35358,map__35358__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.auto_jump_to_error = (function figwheel$client$auto_jump_to_error(opts,error){
if(cljs.core.truth_(new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920).cljs$core$IFn$_invoke$arity$1(opts))){
return figwheel.client.heads_up.auto_notify_source_file_line.call(null,error);
} else {
return null;
}
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__27506__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27506__auto__,msg_hist,msg_names,msg){
return (function (){
var f__27507__auto__ = (function (){var switch__27441__auto__ = ((function (c__27506__auto__,msg_hist,msg_names,msg){
return (function (state_35595){
var state_val_35596 = (state_35595[(1)]);
if((state_val_35596 === (7))){
var inst_35515 = (state_35595[(2)]);
var state_35595__$1 = state_35595;
if(cljs.core.truth_(inst_35515)){
var statearr_35597_35647 = state_35595__$1;
(statearr_35597_35647[(1)] = (8));

} else {
var statearr_35598_35648 = state_35595__$1;
(statearr_35598_35648[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35596 === (20))){
var inst_35589 = (state_35595[(2)]);
var state_35595__$1 = state_35595;
var statearr_35599_35649 = state_35595__$1;
(statearr_35599_35649[(2)] = inst_35589);

(statearr_35599_35649[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35596 === (27))){
var inst_35585 = (state_35595[(2)]);
var state_35595__$1 = state_35595;
var statearr_35600_35650 = state_35595__$1;
(statearr_35600_35650[(2)] = inst_35585);

(statearr_35600_35650[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35596 === (1))){
var inst_35508 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_35595__$1 = state_35595;
if(cljs.core.truth_(inst_35508)){
var statearr_35601_35651 = state_35595__$1;
(statearr_35601_35651[(1)] = (2));

} else {
var statearr_35602_35652 = state_35595__$1;
(statearr_35602_35652[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35596 === (24))){
var inst_35587 = (state_35595[(2)]);
var state_35595__$1 = state_35595;
var statearr_35603_35653 = state_35595__$1;
(statearr_35603_35653[(2)] = inst_35587);

(statearr_35603_35653[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35596 === (4))){
var inst_35593 = (state_35595[(2)]);
var state_35595__$1 = state_35595;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35595__$1,inst_35593);
} else {
if((state_val_35596 === (15))){
var inst_35591 = (state_35595[(2)]);
var state_35595__$1 = state_35595;
var statearr_35604_35654 = state_35595__$1;
(statearr_35604_35654[(2)] = inst_35591);

(statearr_35604_35654[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35596 === (21))){
var inst_35544 = (state_35595[(2)]);
var inst_35545 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_35546 = figwheel.client.auto_jump_to_error.call(null,opts,inst_35545);
var state_35595__$1 = (function (){var statearr_35605 = state_35595;
(statearr_35605[(7)] = inst_35544);

return statearr_35605;
})();
var statearr_35606_35655 = state_35595__$1;
(statearr_35606_35655[(2)] = inst_35546);

(statearr_35606_35655[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35596 === (31))){
var inst_35574 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_35595__$1 = state_35595;
if(cljs.core.truth_(inst_35574)){
var statearr_35607_35656 = state_35595__$1;
(statearr_35607_35656[(1)] = (34));

} else {
var statearr_35608_35657 = state_35595__$1;
(statearr_35608_35657[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35596 === (32))){
var inst_35583 = (state_35595[(2)]);
var state_35595__$1 = state_35595;
var statearr_35609_35658 = state_35595__$1;
(statearr_35609_35658[(2)] = inst_35583);

(statearr_35609_35658[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35596 === (33))){
var inst_35570 = (state_35595[(2)]);
var inst_35571 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_35572 = figwheel.client.auto_jump_to_error.call(null,opts,inst_35571);
var state_35595__$1 = (function (){var statearr_35610 = state_35595;
(statearr_35610[(8)] = inst_35570);

return statearr_35610;
})();
var statearr_35611_35659 = state_35595__$1;
(statearr_35611_35659[(2)] = inst_35572);

(statearr_35611_35659[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35596 === (13))){
var inst_35529 = figwheel.client.heads_up.clear.call(null);
var state_35595__$1 = state_35595;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35595__$1,(16),inst_35529);
} else {
if((state_val_35596 === (22))){
var inst_35550 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_35551 = figwheel.client.heads_up.append_warning_message.call(null,inst_35550);
var state_35595__$1 = state_35595;
var statearr_35612_35660 = state_35595__$1;
(statearr_35612_35660[(2)] = inst_35551);

(statearr_35612_35660[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35596 === (36))){
var inst_35581 = (state_35595[(2)]);
var state_35595__$1 = state_35595;
var statearr_35613_35661 = state_35595__$1;
(statearr_35613_35661[(2)] = inst_35581);

(statearr_35613_35661[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35596 === (29))){
var inst_35561 = (state_35595[(2)]);
var inst_35562 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_35563 = figwheel.client.auto_jump_to_error.call(null,opts,inst_35562);
var state_35595__$1 = (function (){var statearr_35614 = state_35595;
(statearr_35614[(9)] = inst_35561);

return statearr_35614;
})();
var statearr_35615_35662 = state_35595__$1;
(statearr_35615_35662[(2)] = inst_35563);

(statearr_35615_35662[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35596 === (6))){
var inst_35510 = (state_35595[(10)]);
var state_35595__$1 = state_35595;
var statearr_35616_35663 = state_35595__$1;
(statearr_35616_35663[(2)] = inst_35510);

(statearr_35616_35663[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35596 === (28))){
var inst_35557 = (state_35595[(2)]);
var inst_35558 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_35559 = figwheel.client.heads_up.display_warning.call(null,inst_35558);
var state_35595__$1 = (function (){var statearr_35617 = state_35595;
(statearr_35617[(11)] = inst_35557);

return statearr_35617;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35595__$1,(29),inst_35559);
} else {
if((state_val_35596 === (25))){
var inst_35555 = figwheel.client.heads_up.clear.call(null);
var state_35595__$1 = state_35595;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35595__$1,(28),inst_35555);
} else {
if((state_val_35596 === (34))){
var inst_35576 = figwheel.client.heads_up.flash_loaded.call(null);
var state_35595__$1 = state_35595;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35595__$1,(37),inst_35576);
} else {
if((state_val_35596 === (17))){
var inst_35535 = (state_35595[(2)]);
var inst_35536 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_35537 = figwheel.client.auto_jump_to_error.call(null,opts,inst_35536);
var state_35595__$1 = (function (){var statearr_35618 = state_35595;
(statearr_35618[(12)] = inst_35535);

return statearr_35618;
})();
var statearr_35619_35664 = state_35595__$1;
(statearr_35619_35664[(2)] = inst_35537);

(statearr_35619_35664[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35596 === (3))){
var inst_35527 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_35595__$1 = state_35595;
if(cljs.core.truth_(inst_35527)){
var statearr_35620_35665 = state_35595__$1;
(statearr_35620_35665[(1)] = (13));

} else {
var statearr_35621_35666 = state_35595__$1;
(statearr_35621_35666[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35596 === (12))){
var inst_35523 = (state_35595[(2)]);
var state_35595__$1 = state_35595;
var statearr_35622_35667 = state_35595__$1;
(statearr_35622_35667[(2)] = inst_35523);

(statearr_35622_35667[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35596 === (2))){
var inst_35510 = (state_35595[(10)]);
var inst_35510__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_35595__$1 = (function (){var statearr_35623 = state_35595;
(statearr_35623[(10)] = inst_35510__$1);

return statearr_35623;
})();
if(cljs.core.truth_(inst_35510__$1)){
var statearr_35624_35668 = state_35595__$1;
(statearr_35624_35668[(1)] = (5));

} else {
var statearr_35625_35669 = state_35595__$1;
(statearr_35625_35669[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35596 === (23))){
var inst_35553 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_35595__$1 = state_35595;
if(cljs.core.truth_(inst_35553)){
var statearr_35626_35670 = state_35595__$1;
(statearr_35626_35670[(1)] = (25));

} else {
var statearr_35627_35671 = state_35595__$1;
(statearr_35627_35671[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35596 === (35))){
var state_35595__$1 = state_35595;
var statearr_35628_35672 = state_35595__$1;
(statearr_35628_35672[(2)] = null);

(statearr_35628_35672[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35596 === (19))){
var inst_35548 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_35595__$1 = state_35595;
if(cljs.core.truth_(inst_35548)){
var statearr_35629_35673 = state_35595__$1;
(statearr_35629_35673[(1)] = (22));

} else {
var statearr_35630_35674 = state_35595__$1;
(statearr_35630_35674[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35596 === (11))){
var inst_35519 = (state_35595[(2)]);
var state_35595__$1 = state_35595;
var statearr_35631_35675 = state_35595__$1;
(statearr_35631_35675[(2)] = inst_35519);

(statearr_35631_35675[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35596 === (9))){
var inst_35521 = figwheel.client.heads_up.clear.call(null);
var state_35595__$1 = state_35595;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35595__$1,(12),inst_35521);
} else {
if((state_val_35596 === (5))){
var inst_35512 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_35595__$1 = state_35595;
var statearr_35632_35676 = state_35595__$1;
(statearr_35632_35676[(2)] = inst_35512);

(statearr_35632_35676[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35596 === (14))){
var inst_35539 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_35595__$1 = state_35595;
if(cljs.core.truth_(inst_35539)){
var statearr_35633_35677 = state_35595__$1;
(statearr_35633_35677[(1)] = (18));

} else {
var statearr_35634_35678 = state_35595__$1;
(statearr_35634_35678[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35596 === (26))){
var inst_35565 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_35595__$1 = state_35595;
if(cljs.core.truth_(inst_35565)){
var statearr_35635_35679 = state_35595__$1;
(statearr_35635_35679[(1)] = (30));

} else {
var statearr_35636_35680 = state_35595__$1;
(statearr_35636_35680[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35596 === (16))){
var inst_35531 = (state_35595[(2)]);
var inst_35532 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_35533 = figwheel.client.heads_up.display_exception.call(null,inst_35532);
var state_35595__$1 = (function (){var statearr_35637 = state_35595;
(statearr_35637[(13)] = inst_35531);

return statearr_35637;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35595__$1,(17),inst_35533);
} else {
if((state_val_35596 === (30))){
var inst_35567 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_35568 = figwheel.client.heads_up.display_warning.call(null,inst_35567);
var state_35595__$1 = state_35595;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35595__$1,(33),inst_35568);
} else {
if((state_val_35596 === (10))){
var inst_35525 = (state_35595[(2)]);
var state_35595__$1 = state_35595;
var statearr_35638_35681 = state_35595__$1;
(statearr_35638_35681[(2)] = inst_35525);

(statearr_35638_35681[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35596 === (18))){
var inst_35541 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_35542 = figwheel.client.heads_up.display_exception.call(null,inst_35541);
var state_35595__$1 = state_35595;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35595__$1,(21),inst_35542);
} else {
if((state_val_35596 === (37))){
var inst_35578 = (state_35595[(2)]);
var state_35595__$1 = state_35595;
var statearr_35639_35682 = state_35595__$1;
(statearr_35639_35682[(2)] = inst_35578);

(statearr_35639_35682[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35596 === (8))){
var inst_35517 = figwheel.client.heads_up.flash_loaded.call(null);
var state_35595__$1 = state_35595;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35595__$1,(11),inst_35517);
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
});})(c__27506__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__27441__auto__,c__27506__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27442__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27442__auto____0 = (function (){
var statearr_35643 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35643[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27442__auto__);

(statearr_35643[(1)] = (1));

return statearr_35643;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27442__auto____1 = (function (state_35595){
while(true){
var ret_value__27443__auto__ = (function (){try{while(true){
var result__27444__auto__ = switch__27441__auto__.call(null,state_35595);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27444__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27444__auto__;
}
break;
}
}catch (e35644){if((e35644 instanceof Object)){
var ex__27445__auto__ = e35644;
var statearr_35645_35683 = state_35595;
(statearr_35645_35683[(5)] = ex__27445__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35595);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35644;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27443__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35684 = state_35595;
state_35595 = G__35684;
continue;
} else {
return ret_value__27443__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27442__auto__ = function(state_35595){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27442__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27442__auto____1.call(this,state_35595);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27442__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27442__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27442__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27442__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27442__auto__;
})()
;})(switch__27441__auto__,c__27506__auto__,msg_hist,msg_names,msg))
})();
var state__27508__auto__ = (function (){var statearr_35646 = f__27507__auto__.call(null);
(statearr_35646[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27506__auto__);

return statearr_35646;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27508__auto__);
});})(c__27506__auto__,msg_hist,msg_names,msg))
);

return c__27506__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__27506__auto___35747 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27506__auto___35747,ch){
return (function (){
var f__27507__auto__ = (function (){var switch__27441__auto__ = ((function (c__27506__auto___35747,ch){
return (function (state_35730){
var state_val_35731 = (state_35730[(1)]);
if((state_val_35731 === (1))){
var state_35730__$1 = state_35730;
var statearr_35732_35748 = state_35730__$1;
(statearr_35732_35748[(2)] = null);

(statearr_35732_35748[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35731 === (2))){
var state_35730__$1 = state_35730;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35730__$1,(4),ch);
} else {
if((state_val_35731 === (3))){
var inst_35728 = (state_35730[(2)]);
var state_35730__$1 = state_35730;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35730__$1,inst_35728);
} else {
if((state_val_35731 === (4))){
var inst_35718 = (state_35730[(7)]);
var inst_35718__$1 = (state_35730[(2)]);
var state_35730__$1 = (function (){var statearr_35733 = state_35730;
(statearr_35733[(7)] = inst_35718__$1);

return statearr_35733;
})();
if(cljs.core.truth_(inst_35718__$1)){
var statearr_35734_35749 = state_35730__$1;
(statearr_35734_35749[(1)] = (5));

} else {
var statearr_35735_35750 = state_35730__$1;
(statearr_35735_35750[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35731 === (5))){
var inst_35718 = (state_35730[(7)]);
var inst_35720 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_35718);
var state_35730__$1 = state_35730;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35730__$1,(8),inst_35720);
} else {
if((state_val_35731 === (6))){
var state_35730__$1 = state_35730;
var statearr_35736_35751 = state_35730__$1;
(statearr_35736_35751[(2)] = null);

(statearr_35736_35751[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35731 === (7))){
var inst_35726 = (state_35730[(2)]);
var state_35730__$1 = state_35730;
var statearr_35737_35752 = state_35730__$1;
(statearr_35737_35752[(2)] = inst_35726);

(statearr_35737_35752[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35731 === (8))){
var inst_35722 = (state_35730[(2)]);
var state_35730__$1 = (function (){var statearr_35738 = state_35730;
(statearr_35738[(8)] = inst_35722);

return statearr_35738;
})();
var statearr_35739_35753 = state_35730__$1;
(statearr_35739_35753[(2)] = null);

(statearr_35739_35753[(1)] = (2));


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
});})(c__27506__auto___35747,ch))
;
return ((function (switch__27441__auto__,c__27506__auto___35747,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__27442__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__27442__auto____0 = (function (){
var statearr_35743 = [null,null,null,null,null,null,null,null,null];
(statearr_35743[(0)] = figwheel$client$heads_up_plugin_$_state_machine__27442__auto__);

(statearr_35743[(1)] = (1));

return statearr_35743;
});
var figwheel$client$heads_up_plugin_$_state_machine__27442__auto____1 = (function (state_35730){
while(true){
var ret_value__27443__auto__ = (function (){try{while(true){
var result__27444__auto__ = switch__27441__auto__.call(null,state_35730);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27444__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27444__auto__;
}
break;
}
}catch (e35744){if((e35744 instanceof Object)){
var ex__27445__auto__ = e35744;
var statearr_35745_35754 = state_35730;
(statearr_35745_35754[(5)] = ex__27445__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35730);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35744;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27443__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35755 = state_35730;
state_35730 = G__35755;
continue;
} else {
return ret_value__27443__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__27442__auto__ = function(state_35730){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__27442__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__27442__auto____1.call(this,state_35730);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up_plugin_$_state_machine__27442__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__27442__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__27442__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__27442__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__27442__auto__;
})()
;})(switch__27441__auto__,c__27506__auto___35747,ch))
})();
var state__27508__auto__ = (function (){var statearr_35746 = f__27507__auto__.call(null);
(statearr_35746[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27506__auto___35747);

return statearr_35746;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27508__auto__);
});})(c__27506__auto___35747,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__27506__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27506__auto__){
return (function (){
var f__27507__auto__ = (function (){var switch__27441__auto__ = ((function (c__27506__auto__){
return (function (state_35776){
var state_val_35777 = (state_35776[(1)]);
if((state_val_35777 === (1))){
var inst_35771 = cljs.core.async.timeout.call(null,(3000));
var state_35776__$1 = state_35776;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35776__$1,(2),inst_35771);
} else {
if((state_val_35777 === (2))){
var inst_35773 = (state_35776[(2)]);
var inst_35774 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_35776__$1 = (function (){var statearr_35778 = state_35776;
(statearr_35778[(7)] = inst_35773);

return statearr_35778;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35776__$1,inst_35774);
} else {
return null;
}
}
});})(c__27506__auto__))
;
return ((function (switch__27441__auto__,c__27506__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__27442__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__27442__auto____0 = (function (){
var statearr_35782 = [null,null,null,null,null,null,null,null];
(statearr_35782[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__27442__auto__);

(statearr_35782[(1)] = (1));

return statearr_35782;
});
var figwheel$client$enforce_project_plugin_$_state_machine__27442__auto____1 = (function (state_35776){
while(true){
var ret_value__27443__auto__ = (function (){try{while(true){
var result__27444__auto__ = switch__27441__auto__.call(null,state_35776);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27444__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27444__auto__;
}
break;
}
}catch (e35783){if((e35783 instanceof Object)){
var ex__27445__auto__ = e35783;
var statearr_35784_35786 = state_35776;
(statearr_35784_35786[(5)] = ex__27445__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35776);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35783;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27443__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35787 = state_35776;
state_35776 = G__35787;
continue;
} else {
return ret_value__27443__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__27442__auto__ = function(state_35776){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__27442__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__27442__auto____1.call(this,state_35776);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$enforce_project_plugin_$_state_machine__27442__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__27442__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__27442__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__27442__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__27442__auto__;
})()
;})(switch__27441__auto__,c__27506__auto__))
})();
var state__27508__auto__ = (function (){var statearr_35785 = f__27507__auto__.call(null);
(statearr_35785[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27506__auto__);

return statearr_35785;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27508__auto__);
});})(c__27506__auto__))
);

return c__27506__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.enforce_figwheel_version_plugin = (function figwheel$client$enforce_figwheel_version_plugin(opts){
return (function (msg_hist){
var temp__4657__auto__ = new cljs.core.Keyword(null,"figwheel-version","figwheel-version",1409553832).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,msg_hist));
if(cljs.core.truth_(temp__4657__auto__)){
var figwheel_version = temp__4657__auto__;
if(cljs.core.not_EQ_.call(null,figwheel_version,figwheel.client._figwheel_version_)){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different version of Figwheel.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__27506__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27506__auto__,figwheel_version,temp__4657__auto__){
return (function (){
var f__27507__auto__ = (function (){var switch__27441__auto__ = ((function (c__27506__auto__,figwheel_version,temp__4657__auto__){
return (function (state_35810){
var state_val_35811 = (state_35810[(1)]);
if((state_val_35811 === (1))){
var inst_35804 = cljs.core.async.timeout.call(null,(2000));
var state_35810__$1 = state_35810;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35810__$1,(2),inst_35804);
} else {
if((state_val_35811 === (2))){
var inst_35806 = (state_35810[(2)]);
var inst_35807 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("Figwheel Client Version <strong>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client._figwheel_version_),cljs.core.str.cljs$core$IFn$_invoke$arity$1("</strong> is not equal to "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("Figwheel Sidecar Version <strong>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel_version),cljs.core.str.cljs$core$IFn$_invoke$arity$1("</strong>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(".  Shutting down Websocket Connection!"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("<h4>To fix try:</h4>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>")].join('');
var inst_35808 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_35807);
var state_35810__$1 = (function (){var statearr_35812 = state_35810;
(statearr_35812[(7)] = inst_35806);

return statearr_35812;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35810__$1,inst_35808);
} else {
return null;
}
}
});})(c__27506__auto__,figwheel_version,temp__4657__auto__))
;
return ((function (switch__27441__auto__,c__27506__auto__,figwheel_version,temp__4657__auto__){
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27442__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27442__auto____0 = (function (){
var statearr_35816 = [null,null,null,null,null,null,null,null];
(statearr_35816[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27442__auto__);

(statearr_35816[(1)] = (1));

return statearr_35816;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27442__auto____1 = (function (state_35810){
while(true){
var ret_value__27443__auto__ = (function (){try{while(true){
var result__27444__auto__ = switch__27441__auto__.call(null,state_35810);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27444__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27444__auto__;
}
break;
}
}catch (e35817){if((e35817 instanceof Object)){
var ex__27445__auto__ = e35817;
var statearr_35818_35820 = state_35810;
(statearr_35818_35820[(5)] = ex__27445__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35810);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35817;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27443__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35821 = state_35810;
state_35810 = G__35821;
continue;
} else {
return ret_value__27443__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27442__auto__ = function(state_35810){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27442__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27442__auto____1.call(this,state_35810);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27442__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27442__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27442__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27442__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27442__auto__;
})()
;})(switch__27441__auto__,c__27506__auto__,figwheel_version,temp__4657__auto__))
})();
var state__27508__auto__ = (function (){var statearr_35819 = f__27507__auto__.call(null);
(statearr_35819[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27506__auto__);

return statearr_35819;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27508__auto__);
});})(c__27506__auto__,figwheel_version,temp__4657__auto__))
);

return c__27506__auto__;
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__35822){
var map__35826 = p__35822;
var map__35826__$1 = ((((!((map__35826 == null)))?((((map__35826.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35826.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35826):map__35826);
var file = cljs.core.get.call(null,map__35826__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__35826__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__35826__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__35828 = "";
var G__35828__$1 = (cljs.core.truth_(file)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__35828),cljs.core.str.cljs$core$IFn$_invoke$arity$1("file "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):G__35828);
var G__35828__$2 = (cljs.core.truth_(line)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__35828__$1),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" at line "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''):G__35828__$1);
if(cljs.core.truth_((function (){var and__25282__auto__ = line;
if(cljs.core.truth_(and__25282__auto__)){
return column;
} else {
return and__25282__auto__;
}
})())){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__35828__$2),cljs.core.str.cljs$core$IFn$_invoke$arity$1(", column "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join('');
} else {
return G__35828__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__35829){
var map__35836 = p__35829;
var map__35836__$1 = ((((!((map__35836 == null)))?((((map__35836.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35836.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35836):map__35836);
var ed = map__35836__$1;
var formatted_exception = cljs.core.get.call(null,map__35836__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__35836__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__35836__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__35838_35842 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__35839_35843 = null;
var count__35840_35844 = (0);
var i__35841_35845 = (0);
while(true){
if((i__35841_35845 < count__35840_35844)){
var msg_35846 = cljs.core._nth.call(null,chunk__35839_35843,i__35841_35845);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_35846);

var G__35847 = seq__35838_35842;
var G__35848 = chunk__35839_35843;
var G__35849 = count__35840_35844;
var G__35850 = (i__35841_35845 + (1));
seq__35838_35842 = G__35847;
chunk__35839_35843 = G__35848;
count__35840_35844 = G__35849;
i__35841_35845 = G__35850;
continue;
} else {
var temp__4657__auto___35851 = cljs.core.seq.call(null,seq__35838_35842);
if(temp__4657__auto___35851){
var seq__35838_35852__$1 = temp__4657__auto___35851;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35838_35852__$1)){
var c__26113__auto___35853 = cljs.core.chunk_first.call(null,seq__35838_35852__$1);
var G__35854 = cljs.core.chunk_rest.call(null,seq__35838_35852__$1);
var G__35855 = c__26113__auto___35853;
var G__35856 = cljs.core.count.call(null,c__26113__auto___35853);
var G__35857 = (0);
seq__35838_35842 = G__35854;
chunk__35839_35843 = G__35855;
count__35840_35844 = G__35856;
i__35841_35845 = G__35857;
continue;
} else {
var msg_35858 = cljs.core.first.call(null,seq__35838_35852__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_35858);

var G__35859 = cljs.core.next.call(null,seq__35838_35852__$1);
var G__35860 = null;
var G__35861 = (0);
var G__35862 = (0);
seq__35838_35842 = G__35859;
chunk__35839_35843 = G__35860;
count__35840_35844 = G__35861;
i__35841_35845 = G__35862;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cause)){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Error on "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_line_column.call(null,ed))].join(''));
} else {
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__35863){
var map__35866 = p__35863;
var map__35866__$1 = ((((!((map__35866 == null)))?((((map__35866.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35866.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35866):map__35866);
var w = map__35866__$1;
var message = cljs.core.get.call(null,map__35866__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Figwheel: Compile Warning - "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(message)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" in "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_line_column.call(null,message))].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if(typeof figwheel.client.config_defaults !== 'undefined'){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[new cljs.core.Var(function(){return figwheel.client.default_on_compile_warning;},new cljs.core.Symbol("figwheel.client","default-on-compile-warning","figwheel.client/default-on-compile-warning",584144208,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-warning","default-on-compile-warning",-18911586,null),"resources/public/js/out/figwheel/client.cljs",33,1,357,357,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"message","message",1234475525,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"w","w",1994700528,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_warning)?figwheel.client.default_on_compile_warning.cljs$lang$test:null)])),figwheel.client.default_on_jsload,true,new cljs.core.Var(function(){return figwheel.client.default_on_compile_fail;},new cljs.core.Symbol("figwheel.client","default-on-compile-fail","figwheel.client/default-on-compile-fail",1384826337,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-fail","default-on-compile-fail",-158814813,null),"resources/public/js/out/figwheel/client.cljs",30,1,349,349,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"formatted-exception","formatted-exception",1524042501,null),new cljs.core.Symbol(null,"exception-data","exception-data",1128056641,null),new cljs.core.Symbol(null,"cause","cause",1872432779,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"ed","ed",2076825751,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_fail)?figwheel.client.default_on_compile_fail.cljs$lang$test:null)])),false,true,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("ws://"),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),cljs.core.str.cljs$core$IFn$_invoke$arity$1("/figwheel-ws")].join(''),false,figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.fill_url_template = (function figwheel$client$fill_url_template(config){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
return cljs.core.update_in.call(null,config,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938)], null),(function (x){
return clojure.string.replace.call(null,clojure.string.replace.call(null,x,"[[client-hostname]]",location.hostname),"[[client-port]]",location.port);
}));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"enforce-figwheel-version-plugin","enforce-figwheel-version-plugin",-1916185220),figwheel.client.enforce_figwheel_version_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = ((cljs.core.not.call(null,figwheel.client.utils.html_env_QMARK_.call(null)))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__25282__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__25282__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__25282__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_message_watch = (function figwheel$client$add_message_watch(key,callback){
return cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,key,(function (_,___$1,___$2,msg_hist){
return callback.call(null,cljs.core.first.call(null,msg_hist));
}));
});
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__35878 = cljs.core.seq.call(null,plugins);
var chunk__35879 = null;
var count__35880 = (0);
var i__35881 = (0);
while(true){
if((i__35881 < count__35880)){
var vec__35882 = cljs.core._nth.call(null,chunk__35879,i__35881);
var k = cljs.core.nth.call(null,vec__35882,(0),null);
var plugin = cljs.core.nth.call(null,vec__35882,(1),null);
if(cljs.core.truth_(plugin)){
var pl_35888 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__35878,chunk__35879,count__35880,i__35881,pl_35888,vec__35882,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_35888.call(null,msg_hist);
});})(seq__35878,chunk__35879,count__35880,i__35881,pl_35888,vec__35882,k,plugin))
);
} else {
}

var G__35889 = seq__35878;
var G__35890 = chunk__35879;
var G__35891 = count__35880;
var G__35892 = (i__35881 + (1));
seq__35878 = G__35889;
chunk__35879 = G__35890;
count__35880 = G__35891;
i__35881 = G__35892;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__35878);
if(temp__4657__auto__){
var seq__35878__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35878__$1)){
var c__26113__auto__ = cljs.core.chunk_first.call(null,seq__35878__$1);
var G__35893 = cljs.core.chunk_rest.call(null,seq__35878__$1);
var G__35894 = c__26113__auto__;
var G__35895 = cljs.core.count.call(null,c__26113__auto__);
var G__35896 = (0);
seq__35878 = G__35893;
chunk__35879 = G__35894;
count__35880 = G__35895;
i__35881 = G__35896;
continue;
} else {
var vec__35885 = cljs.core.first.call(null,seq__35878__$1);
var k = cljs.core.nth.call(null,vec__35885,(0),null);
var plugin = cljs.core.nth.call(null,vec__35885,(1),null);
if(cljs.core.truth_(plugin)){
var pl_35897 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__35878,chunk__35879,count__35880,i__35881,pl_35897,vec__35885,k,plugin,seq__35878__$1,temp__4657__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_35897.call(null,msg_hist);
});})(seq__35878,chunk__35879,count__35880,i__35881,pl_35897,vec__35885,k,plugin,seq__35878__$1,temp__4657__auto__))
);
} else {
}

var G__35898 = cljs.core.next.call(null,seq__35878__$1);
var G__35899 = null;
var G__35900 = (0);
var G__35901 = (0);
seq__35878 = G__35898;
chunk__35879 = G__35899;
count__35880 = G__35900;
i__35881 = G__35901;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(var_args){
var args35902 = [];
var len__26407__auto___35909 = arguments.length;
var i__26408__auto___35910 = (0);
while(true){
if((i__26408__auto___35910 < len__26407__auto___35909)){
args35902.push((arguments[i__26408__auto___35910]));

var G__35911 = (i__26408__auto___35910 + (1));
i__26408__auto___35910 = G__35911;
continue;
} else {
}
break;
}

var G__35904 = args35902.length;
switch (G__35904) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args35902.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if(typeof figwheel.client.__figwheel_start_once__ !== 'undefined'){
return null;
} else {
return (
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.fill_url_template.call(null,figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370)))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.enable_repl_print_BANG_.call(null);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

var seq__35905_35913 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__35906_35914 = null;
var count__35907_35915 = (0);
var i__35908_35916 = (0);
while(true){
if((i__35908_35916 < count__35907_35915)){
var msg_35917 = cljs.core._nth.call(null,chunk__35906_35914,i__35908_35916);
figwheel.client.socket.handle_incoming_message.call(null,msg_35917);

var G__35918 = seq__35905_35913;
var G__35919 = chunk__35906_35914;
var G__35920 = count__35907_35915;
var G__35921 = (i__35908_35916 + (1));
seq__35905_35913 = G__35918;
chunk__35906_35914 = G__35919;
count__35907_35915 = G__35920;
i__35908_35916 = G__35921;
continue;
} else {
var temp__4657__auto___35922 = cljs.core.seq.call(null,seq__35905_35913);
if(temp__4657__auto___35922){
var seq__35905_35923__$1 = temp__4657__auto___35922;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35905_35923__$1)){
var c__26113__auto___35924 = cljs.core.chunk_first.call(null,seq__35905_35923__$1);
var G__35925 = cljs.core.chunk_rest.call(null,seq__35905_35923__$1);
var G__35926 = c__26113__auto___35924;
var G__35927 = cljs.core.count.call(null,c__26113__auto___35924);
var G__35928 = (0);
seq__35905_35913 = G__35925;
chunk__35906_35914 = G__35926;
count__35907_35915 = G__35927;
i__35908_35916 = G__35928;
continue;
} else {
var msg_35929 = cljs.core.first.call(null,seq__35905_35923__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_35929);

var G__35930 = cljs.core.next.call(null,seq__35905_35923__$1);
var G__35931 = null;
var G__35932 = (0);
var G__35933 = (0);
seq__35905_35913 = G__35930;
chunk__35906_35914 = G__35931;
count__35907_35915 = G__35932;
i__35908_35916 = G__35933;
continue;
}
} else {
}
}
break;
}

return figwheel.client.socket.open.call(null,system_options);
})))
;
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;

figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(var_args){
var args__26414__auto__ = [];
var len__26407__auto___35938 = arguments.length;
var i__26408__auto___35939 = (0);
while(true){
if((i__26408__auto___35939 < len__26407__auto___35938)){
args__26414__auto__.push((arguments[i__26408__auto___35939]));

var G__35940 = (i__26408__auto___35939 + (1));
i__26408__auto___35939 = G__35940;
continue;
} else {
}
break;
}

var argseq__26415__auto__ = ((((0) < args__26414__auto__.length))?(new cljs.core.IndexedSeq(args__26414__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__26415__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__35935){
var map__35936 = p__35935;
var map__35936__$1 = ((((!((map__35936 == null)))?((((map__35936.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35936.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35936):map__35936);
var opts = map__35936__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq35934){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35934));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e35942){if((e35942 instanceof Error)){
var e = e35942;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e35942;

}
}});
figwheel.client.console_intro_message = "Figwheel has compiled a temporary helper application to your :output-file.\n\nThe code currently in your configured output file does not\nrepresent the code that you are trying to compile.\n\nThis temporary application is intended to help you continue to get\nfeedback from Figwheel until the build you are working on compiles\ncorrectly.\n\nWhen your ClojureScript source code compiles correctly this helper\napplication will auto-reload and pick up your freshly compiled\nClojureScript program.";
figwheel.client.bad_compile_helper_app = (function figwheel$client$bad_compile_helper_app(){
cljs.core.enable_console_print_BANG_.call(null);

var config = figwheel.client.fetch_data_from_env.call(null);
cljs.core.println.call(null,figwheel.client.console_intro_message);

figwheel.client.heads_up.bad_compile_screen.call(null);

if(cljs.core.truth_(goog.dependencies_)){
} else {
goog.dependencies_ = true;
}

figwheel.client.start.call(null,config);

return figwheel.client.add_message_watch.call(null,new cljs.core.Keyword(null,"listen-for-successful-compile","listen-for-successful-compile",-995277603),((function (config){
return (function (p__35946){
var map__35947 = p__35946;
var map__35947__$1 = ((((!((map__35947 == null)))?((((map__35947.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35947.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35947):map__35947);
var msg_name = cljs.core.get.call(null,map__35947__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map?rel=1494243353036