(window.webpackJsonp=window.webpackJsonp||[]).push([[137],{123:function(t,e,o){t.exports=o.p+"assets/img/api-collection-overview.73f3b637.png"},2232:function(t,e,o){"use strict";o.r(e);var i=o(0),n=Object(i.a)({},(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[i("h1",{attrs:{id:"api-collections-management"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#api-collections-management"}},[t._v("#")]),t._v(" API Collections Management")]),t._v(" "),i("p",[t._v("The API collections tab displays all API collections under this account (individual or team account). Navigate to this page by clicking on the "),i("strong",[t._v("API Collections tab")]),t._v(". You will see something like this:")]),t._v(" "),i("p",[i("DocImage",{attrs:{src:o(402),alt:"API Collection Tab",width:"2840",height:"1329"}}),t._v(" "),i("em",[t._v("API Collections Tab")])],1),t._v(" "),i("p",[t._v("The next step is to organize these recipes into one or more API Collections. Generally, an API Collection should contain endpoints whose access pattern has some common features, so that you can manage them together. For example, a set of Salesforce endpoints that are intended to be called by recipes used with the Sales team might be put together in an API Collection.")]),t._v(" "),i("p",[t._v("API Collections are versioned, using a unique 1-10 character version identifier. Collections with the same name but different versions are distinct objects.")]),t._v(" "),i("p",[t._v("In this guide, we will go through API collection configurations:")]),t._v(" "),i("ul",[i("li",[i("a",{attrs:{href:"#creating-an-api-collection"}},[t._v("How to create an API collection")])]),t._v(" "),i("li",[i("a",{attrs:{href:"#editing-an-api-collection"}},[t._v("How to edit an API collection")])]),t._v(" "),i("li",[i("a",{attrs:{href:"#activating-or-deactivating-an-endpoint"}},[t._v("How to activate an API endpoint")])]),t._v(" "),i("li",[i("a",{attrs:{href:"#customize-url-path-for-api-collection"}},[t._v("How to customize URL path for API collection")])]),t._v(" "),i("li",[i("a",{attrs:{href:"#machine-readable-documentation-openapi"}},[t._v("How to obtain machine-readable documentation (OpenAPI)")])])]),t._v(" "),i("p",[t._v("In a separate guide, we will go through "),i("router-link",{attrs:{to:"/api-mgmt/api-endpoints.html"}},[t._v("API endpoint configuration")]),t._v(".")],1),t._v(" "),i("h2",{attrs:{id:"creating-an-api-collection"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#creating-an-api-collection"}},[t._v("#")]),t._v(" Creating an API Collection")]),t._v(" "),i("p",[t._v("Click on "),i("strong",[t._v("Add new API Collection")]),t._v(" to create a new collection.")]),t._v(" "),i("table",[i("thead",[i("tr",[i("th",[t._v("Step")]),t._v(" "),i("th",[t._v("Description")])])]),t._v(" "),i("tbody",[i("tr",[i("td",[t._v("1.")]),t._v(" "),i("td",[t._v("Provide information about the "),i("strong",[t._v("Collection name")]),t._v(", "),i("strong",[t._v("Version")]),t._v(", and "),i("strong",[t._v("Description")]),t._v(". Also, select a "),i("strong",[t._v("Recipe folder")]),t._v(" from which the endpoints will be retrieved from."),i("br"),i("DocImage",{attrs:{src:o(403),alt:"Select API Source dialog",width:"2794",height:"1556"}}),i("em",[t._v("Select API Source dialog")]),i("br"),i("br"),t._v("It may be helpful to place recipes whose endpoints belong to the same API Collection within the same folder. An API Collection can be associated with a folder so that any new callable recipes added to the folder will be included in the collection automatically (they are not, however, automatically enabled for "),i("a",{attrs:{href:"#activating-or-deactivating-an-endpoint"}},[t._v("external calling")]),t._v(").")],1)]),t._v(" "),i("tr",[i("td",[t._v("2.")]),t._v(" "),i("td",[t._v("This screen shows a list of the endpoints that will be initially placed into your collection from the folder you have selected. Don't worry if more endpoints are included than you actually intend to use. You can edit the list later."),i("br"),i("DocImage",{attrs:{src:o(404),alt:"Review endpoints",width:"2780",height:"1574"}}),i("em",[t._v("Review endpoints")])],1)])])]),t._v(" "),i("p",[t._v("Click on "),i("strong",[t._v("Create API Collection")]),t._v(" to create the collection. This returns you to the API Collections list, where you will see the new collection listed.")]),t._v(" "),i("h2",{attrs:{id:"editing-an-api-collection"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#editing-an-api-collection"}},[t._v("#")]),t._v(" Editing an API Collection")]),t._v(" "),i("p",[t._v("Once you have created an API collection, click on an API collection open up the collection overview page. From this page, you can add, remove, or edit endpoints that are available within this collection.")]),t._v(" "),i("p",[i("DocImage",{attrs:{src:o(123),alt:"API collection overview",width:"2799",height:"910"}}),t._v(" "),i("em",[t._v("API collection overview")])],1),t._v(" "),i("h2",{attrs:{id:"activating-or-deactivating-an-endpoint"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#activating-or-deactivating-an-endpoint"}},[t._v("#")]),t._v(" Activating or Deactivating an Endpoint")]),t._v(" "),i("p",[t._v("Control the recipes that are callable from this API collection page. When first created as part of creating an API Collection, or when first added to an existing collection, an endpoint is set to the "),i("strong",[t._v("Inactive")]),t._v(" state.")]),t._v(" "),i("table",[i("thead",[i("tr",[i("th",[t._v("State")]),t._v(" "),i("th",[t._v("Description")])])]),t._v(" "),i("tbody",[i("tr",[i("td",[t._v("Active")]),t._v(" "),i("td",[t._v("Active endpoints are callable from API requests. To set an endpoint to the "),i("strong",[t._v("Active")]),t._v(" state, the recipe associated with the endpoint must first be running.")])]),t._v(" "),i("tr",[i("td",[t._v("Inactive")]),t._v(" "),i("td",[t._v("Inactive endpoints cannot be called remotely. Using this slider to toggle to "),i("strong",[t._v("Inactive")]),t._v(" does not, however, stop the associated recipe.")])])])]),t._v(" "),i("h2",{attrs:{id:"customize-url-path-for-api-collection"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#customize-url-path-for-api-collection"}},[t._v("#")]),t._v(" Customize URL path for API collection")]),t._v(" "),i("p",[t._v("API collection URL paths are sub-directory paths that you can use to define your API collection. For example, you can use the path prefix to differentiate collections for sales, marketing, or HR.")]),t._v(" "),i("p",[t._v("Navigate to this page by "),i("strong",[t._v("selecting your desired API collection")]),t._v(" > click on the "),i("strong",[t._v("Settings")]),t._v(" tab, and selecting "),i("strong",[t._v("URL settings")]),t._v(" on the left menu.")]),t._v(" "),i("p",[i("DocImage",{attrs:{src:o(405),alt:"Customize endpoint URL",width:"2755",height:"1351"}}),t._v(" "),i("em",[t._v("Customize endpoint URL")])],1),t._v(" "),i("p",[t._v("You can edit the URL path for this collection. Workato recommends using a meaningful name and standardizing the name across development teams. Having standardized collection names across your company will simplify the "),i("router-link",{attrs:{to:"/recipe-development-lifecycle.html"}},[t._v("recipe export process")]),t._v(" during versioning changes and updates between development, testing, and production-ready endpoint.")],1),t._v(" "),i("div",{staticClass:"custom-block tip"},[i("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),i("p",[t._v("New Workato collections are automatically configured with a custom path prefix. For more information on path prefixes, see "),i("router-link",{attrs:{to:"/api-mgmt/custom-domain.html"}},[t._v("here")]),t._v(".")],1)]),t._v(" "),i("h2",{attrs:{id:"machine-readable-documentation-openapi"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#machine-readable-documentation-openapi"}},[t._v("#")]),t._v(" Machine-readable documentation (OpenAPI)")]),t._v(" "),i("p",[t._v("The API Collection page has a link in the upper-right corner, labeled "),i("strong",[t._v("Download OpenAPI spec")]),t._v(". This gives you access to a downloadable file that contains documentation for all the endpoints within the collection, in a format that can be used by tools like Postman. This format is called OpenAPI, also known as Swagger. Currently, Workato supports "),i("a",{attrs:{href:"https://github.com/OAI/OpenAPI-Specification/blob/master/versions/2.0.md",target:"_blank",rel:"noopener noreferrer"}},[t._v("version 2.0"),i("OutboundLink")],1),t._v(" of the specification.")]),t._v(" "),i("h2",{attrs:{id:"more-information"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#more-information"}},[t._v("#")]),t._v(" More information")]),t._v(" "),i("p",[t._v("Read our walkthrough for API endpoint configuration:")]),t._v(" "),i("ul",[i("li",[i("router-link",{attrs:{to:"/api-mgmt/api-endpoints.html#activating-or-deactivating-an-endpoint"}},[t._v("How to activate an API endpoint")])],1),t._v(" "),i("li",[i("router-link",{attrs:{to:"/api-mgmt/api-endpoints.html#customize-url-path-for-an-endpoint"}},[t._v("How to customize URL path for an endpoint")])],1),t._v(" "),i("li",[i("router-link",{attrs:{to:"/api-mgmt/api-endpoints.html#viewing-an-endpoint"}},[t._v("How to view individual endpoint")])],1),t._v(" "),i("li",[i("router-link",{attrs:{to:"/api-mgmt/api-endpoints.html#testing-an-endpoint"}},[t._v("How to test individual endpoints")])],1)])])}),[],!1,null,null,null);e.default=n.exports},402:function(t,e,o){t.exports=o.p+"assets/img/api-collections.1c4085de.png"},403:function(t,e,o){t.exports=o.p+"assets/img/select-api-source.925b0792.png"},404:function(t,e,o){t.exports=o.p+"assets/img/review-endpoints.c267e6d2.png"},405:function(t,e,o){t.exports=o.p+"assets/img/customize-collection-url.77768356.png"}}]);