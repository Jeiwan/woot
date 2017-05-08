// Compiled by ClojureScript 1.9.521 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__34673){
var map__34698 = p__34673;
var map__34698__$1 = ((((!((map__34698 == null)))?((((map__34698.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34698.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34698):map__34698);
var m = map__34698__$1;
var n = cljs.core.get.call(null,map__34698__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__34698__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__4657__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4657__auto__)){
var ns = temp__4657__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),cljs.core.str.cljs$core$IFn$_invoke$arity$1("/")].join('');
} else {
return null;
}
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__34700_34722 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__34701_34723 = null;
var count__34702_34724 = (0);
var i__34703_34725 = (0);
while(true){
if((i__34703_34725 < count__34702_34724)){
var f_34726 = cljs.core._nth.call(null,chunk__34701_34723,i__34703_34725);
cljs.core.println.call(null,"  ",f_34726);

var G__34727 = seq__34700_34722;
var G__34728 = chunk__34701_34723;
var G__34729 = count__34702_34724;
var G__34730 = (i__34703_34725 + (1));
seq__34700_34722 = G__34727;
chunk__34701_34723 = G__34728;
count__34702_34724 = G__34729;
i__34703_34725 = G__34730;
continue;
} else {
var temp__4657__auto___34731 = cljs.core.seq.call(null,seq__34700_34722);
if(temp__4657__auto___34731){
var seq__34700_34732__$1 = temp__4657__auto___34731;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34700_34732__$1)){
var c__26113__auto___34733 = cljs.core.chunk_first.call(null,seq__34700_34732__$1);
var G__34734 = cljs.core.chunk_rest.call(null,seq__34700_34732__$1);
var G__34735 = c__26113__auto___34733;
var G__34736 = cljs.core.count.call(null,c__26113__auto___34733);
var G__34737 = (0);
seq__34700_34722 = G__34734;
chunk__34701_34723 = G__34735;
count__34702_34724 = G__34736;
i__34703_34725 = G__34737;
continue;
} else {
var f_34738 = cljs.core.first.call(null,seq__34700_34732__$1);
cljs.core.println.call(null,"  ",f_34738);

var G__34739 = cljs.core.next.call(null,seq__34700_34732__$1);
var G__34740 = null;
var G__34741 = (0);
var G__34742 = (0);
seq__34700_34722 = G__34739;
chunk__34701_34723 = G__34740;
count__34702_34724 = G__34741;
i__34703_34725 = G__34742;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_34743 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__25294__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__25294__auto__)){
return or__25294__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_34743);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_34743)))?cljs.core.second.call(null,arglists_34743):arglists_34743));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n  Please see http://clojure.org/"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n  Please see http://clojure.org/special_forms#"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__34704_34744 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__34705_34745 = null;
var count__34706_34746 = (0);
var i__34707_34747 = (0);
while(true){
if((i__34707_34747 < count__34706_34746)){
var vec__34708_34748 = cljs.core._nth.call(null,chunk__34705_34745,i__34707_34747);
var name_34749 = cljs.core.nth.call(null,vec__34708_34748,(0),null);
var map__34711_34750 = cljs.core.nth.call(null,vec__34708_34748,(1),null);
var map__34711_34751__$1 = ((((!((map__34711_34750 == null)))?((((map__34711_34750.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34711_34750.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34711_34750):map__34711_34750);
var doc_34752 = cljs.core.get.call(null,map__34711_34751__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_34753 = cljs.core.get.call(null,map__34711_34751__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_34749);

cljs.core.println.call(null," ",arglists_34753);

if(cljs.core.truth_(doc_34752)){
cljs.core.println.call(null," ",doc_34752);
} else {
}

var G__34754 = seq__34704_34744;
var G__34755 = chunk__34705_34745;
var G__34756 = count__34706_34746;
var G__34757 = (i__34707_34747 + (1));
seq__34704_34744 = G__34754;
chunk__34705_34745 = G__34755;
count__34706_34746 = G__34756;
i__34707_34747 = G__34757;
continue;
} else {
var temp__4657__auto___34758 = cljs.core.seq.call(null,seq__34704_34744);
if(temp__4657__auto___34758){
var seq__34704_34759__$1 = temp__4657__auto___34758;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34704_34759__$1)){
var c__26113__auto___34760 = cljs.core.chunk_first.call(null,seq__34704_34759__$1);
var G__34761 = cljs.core.chunk_rest.call(null,seq__34704_34759__$1);
var G__34762 = c__26113__auto___34760;
var G__34763 = cljs.core.count.call(null,c__26113__auto___34760);
var G__34764 = (0);
seq__34704_34744 = G__34761;
chunk__34705_34745 = G__34762;
count__34706_34746 = G__34763;
i__34707_34747 = G__34764;
continue;
} else {
var vec__34713_34765 = cljs.core.first.call(null,seq__34704_34759__$1);
var name_34766 = cljs.core.nth.call(null,vec__34713_34765,(0),null);
var map__34716_34767 = cljs.core.nth.call(null,vec__34713_34765,(1),null);
var map__34716_34768__$1 = ((((!((map__34716_34767 == null)))?((((map__34716_34767.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34716_34767.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34716_34767):map__34716_34767);
var doc_34769 = cljs.core.get.call(null,map__34716_34768__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_34770 = cljs.core.get.call(null,map__34716_34768__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_34766);

cljs.core.println.call(null," ",arglists_34770);

if(cljs.core.truth_(doc_34769)){
cljs.core.println.call(null," ",doc_34769);
} else {
}

var G__34771 = cljs.core.next.call(null,seq__34704_34759__$1);
var G__34772 = null;
var G__34773 = (0);
var G__34774 = (0);
seq__34704_34744 = G__34771;
chunk__34705_34745 = G__34772;
count__34706_34746 = G__34773;
i__34707_34747 = G__34774;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__4657__auto__ = cljs.spec.get_spec.call(null,cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name.call(null,n))].join(''),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__4657__auto__)){
var fnspec = temp__4657__auto__;
cljs.core.print.call(null,"Spec");

var seq__34718 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__34719 = null;
var count__34720 = (0);
var i__34721 = (0);
while(true){
if((i__34721 < count__34720)){
var role = cljs.core._nth.call(null,chunk__34719,i__34721);
var temp__4657__auto___34775__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___34775__$1)){
var spec_34776 = temp__4657__auto___34775__$1;
cljs.core.print.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(":")].join(''),cljs.spec.describe.call(null,spec_34776));
} else {
}

var G__34777 = seq__34718;
var G__34778 = chunk__34719;
var G__34779 = count__34720;
var G__34780 = (i__34721 + (1));
seq__34718 = G__34777;
chunk__34719 = G__34778;
count__34720 = G__34779;
i__34721 = G__34780;
continue;
} else {
var temp__4657__auto____$1 = cljs.core.seq.call(null,seq__34718);
if(temp__4657__auto____$1){
var seq__34718__$1 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34718__$1)){
var c__26113__auto__ = cljs.core.chunk_first.call(null,seq__34718__$1);
var G__34781 = cljs.core.chunk_rest.call(null,seq__34718__$1);
var G__34782 = c__26113__auto__;
var G__34783 = cljs.core.count.call(null,c__26113__auto__);
var G__34784 = (0);
seq__34718 = G__34781;
chunk__34719 = G__34782;
count__34720 = G__34783;
i__34721 = G__34784;
continue;
} else {
var role = cljs.core.first.call(null,seq__34718__$1);
var temp__4657__auto___34785__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___34785__$2)){
var spec_34786 = temp__4657__auto___34785__$2;
cljs.core.print.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(":")].join(''),cljs.spec.describe.call(null,spec_34786));
} else {
}

var G__34787 = cljs.core.next.call(null,seq__34718__$1);
var G__34788 = null;
var G__34789 = (0);
var G__34790 = (0);
seq__34718 = G__34787;
chunk__34719 = G__34788;
count__34720 = G__34789;
i__34721 = G__34790;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map?rel=1494243351879