(ns woot.handler
  (:require [compojure.core :refer :all]
            [compojure.route :as route]
            [ring.middleware.defaults :refer [wrap-defaults site-defaults]]
            [hiccup.page :refer [html5]]))

(def main-page
  (html5
   [:head
    [:meta {:charset "utf-8"}]
    [:title "WO_OT!"]]
   [:body
    [:div {:id "container"}]]
   [:script {:src "/js/js.js"}]))

(defroutes app-routes
  (GET "/" [] main-page)
  (route/not-found "Not Found"))

(def app
  (wrap-defaults app-routes site-defaults))
