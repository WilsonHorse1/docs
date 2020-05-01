(window.webpackJsonp=window.webpackJsonp||[]).push([[521],{2591:function(t,e,a){"use strict";a.r(e);var i=a(0),l=Object(i.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"http-vs-sdk"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#http-vs-sdk"}},[t._v("#")]),t._v(" HTTP vs SDK")]),t._v(" "),a("p",[t._v("Once you have decided to build a connector, you will find yourself deciding between using the HTTP connector or Workato SDK. Please note that the Workato SDK is for developers. If you are not a developer, HTTP connector is your best bet.")]),t._v(" "),a("p",[t._v("The question that follows immediately is, how are they different? This document aims to describe the differences and help with deciding between the best approach to enhancing your Workato recipes.")]),t._v(" "),a("h2",{attrs:{id:"authentication"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#authentication"}},[t._v("#")]),t._v(" Authentication")]),t._v(" "),a("p",[t._v("APIs use a wide variety of authentication mechanisms. Some as simple as basic (username/password pair) and some more complex like OAuth 2.0.")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}}),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("HTTP")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("SDK")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("OAuth 2.0")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("Yes")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("Yes")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("Basic auth")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("Yes")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("Yes")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("Plain API key/token")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("Yes")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("Yes")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("Digest auth")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("No")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("Yes")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("Multi-step auth")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("No")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("Yes")])])])]),t._v(" "),a("h2",{attrs:{id:"data-types"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#data-types"}},[t._v("#")]),t._v(" Data types")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}}),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("HTTP")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("SDK")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("JSON on REST")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("Yes")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("Yes")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("XML on REST")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("Yes")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("Yes")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("URL encoded Form")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("Yes")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("Yes")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("Multipart form")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("No")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("Yes")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("Binary")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("No")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("Yes")])])])]),t._v(" "),a("h2",{attrs:{id:"capabilities"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#capabilities"}},[t._v("#")]),t._v(" Capabilities")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}}),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("HTTP")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("SDK")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("Trigger closure")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("No")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("Yes")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("Updated record trigger")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("Not always")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("Yes")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("Webhook + poll trigger")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("No")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("Yes")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("Data transformation")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("No")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("Yes")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("Data pre/post processing")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("No")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("Yes")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("Pagination")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("No")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("Yes")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("While loop")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("No")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("Yes")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("For loop")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("Yes")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("Yes")])])])]),t._v(" "),a("h1",{attrs:{id:"others"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#others"}},[t._v("#")]),t._v(" Others")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}}),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("HTTP")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("SDK")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("Sharing")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("Yes")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("Yes")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("Clone n Run Recipes")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("Yes")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("No")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("Reusable (cross recipe)")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("No")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("Yes")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("Manual webhook")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("Yes")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("Yes")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("Auto webhook")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("Troublesome")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("Yes")])])])])])}),[],!1,null,null,null);e.default=l.exports}}]);