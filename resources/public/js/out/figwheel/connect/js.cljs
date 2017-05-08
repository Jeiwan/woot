(ns figwheel.connect.js (:require [ui.core] [figwheel.client] [figwheel.client.utils]))
(figwheel.client/start {:build-id "js", :websocket-url "ws://localhost:3449/figwheel-ws"})

