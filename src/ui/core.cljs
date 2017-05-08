(ns ui.core
  (:require [reagent.core :as r]
            [ui.components.basic :as basic]))

(r/render
 [basic/component]
 (.getElementById js/document "container"))
