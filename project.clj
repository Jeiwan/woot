(defproject woot "0.1.0-SNAPSHOT"
  :description "FIXME: write description"
  :url "http://example.com/FIXME"
  :min-lein-version "2.0.0"
  :dependencies [[org.clojure/clojure "1.8.0"]
                 [org.clojure/clojurescript "1.9.521"]
                 [compojure "1.5.1"]
                 [ring/ring-defaults "0.2.1"]
                 [hiccup "2.0.0-alpha1"]
                 [reagent "0.6.1"]]
  :plugins [[lein-ring "0.9.7"]
            [lein-cljsbuild "1.1.6"]
            [lein-figwheel "0.5.9"]]
  :ring {:handler woot.handler/app}
  :profiles
  {:dev {:dependencies [[javax.servlet/servlet-api "2.5"]
                        [ring/ring-mock "0.3.0"]]}}
  :cljsbuild {:builds [{:id "js"
                        :source-paths ["src/ui"]
                        :figwheel true
                        :compiler {:output-to "resources/public/js/js.js"
                                   :main "ui.core"
                                   :asset-path "js/out"}}]})
