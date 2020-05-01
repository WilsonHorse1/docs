(window.webpackJsonp=window.webpackJsonp||[]).push([[554],{2681:function(t,s,a){"use strict";a.r(s);var e=a(0),n=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"connections"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#connections"}},[t._v("#")]),t._v(" Connections")]),t._v(" "),a("p",[t._v("Use the following endpoints to retrieve and create the connections that belong to an OEM customer account. All API endpoints listed here requires "),a("code",[t._v("oem_vendor")]),t._v(" privilege. Talk to your Workato representative to enable this privilege in your account.")]),t._v(" "),a("h3",{attrs:{id:"quick-reference"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#quick-reference"}},[t._v("#")]),t._v(" Quick reference")]),t._v(" "),a("table",{staticClass:"api-quick-reference"},[a("thead",[a("tr",[a("th",[t._v("Type")]),t._v(" "),a("th",[t._v("Resource")]),t._v(" "),a("th",[t._v("Description")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("GET")]),t._v(" "),a("td",[a("a",{attrs:{href:"#list-connections"}},[t._v("/api/managed_users/:managed_user_id/connections")])]),t._v(" "),a("td",[t._v("Returns a list of connections in OEM user's account.")])]),t._v(" "),a("tr",[a("td",[t._v("POST")]),t._v(" "),a("td",[a("a",{attrs:{href:"#create-connections"}},[t._v("/api/managed_users/:id/connections")])]),t._v(" "),a("td",[t._v("Allows the OEM vendor to add a shell connection in a customer's account.")])])])]),t._v(" "),a("h2",{attrs:{id:"list-connections"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#list-connections"}},[t._v("#")]),t._v(" List Connections")]),t._v(" "),a("p",[t._v("Returns all connections and associated data for the OEM customer account.")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("GET /api/managed_users/:managed_user_id/connections\n")])])]),a("h3",{attrs:{id:"url-parameters"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#url-parameters"}},[t._v("#")]),t._v(" URL parameters")]),t._v(" "),a("table",{staticClass:"api-input"},[a("thead",[a("tr",[a("th",[t._v("Name")]),t._v(" "),a("th",[t._v("Type")]),t._v(" "),a("th",[t._v("Description")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("managed_user_id")]),t._v(" "),a("td",[a("strong",[t._v("string")]),a("br"),a("em",[t._v("required")])]),t._v(" "),a("td",[t._v("OEM customer Account ID/External ID. "),a("br"),t._v("External id should be prefixed with a E(eg: EA2300) and the resulting id should be URL encoded.")])])])]),t._v(" "),a("h4",{attrs:{id:"sample-request"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#sample-request"}},[t._v("#")]),t._v(" Sample request")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v("  -X GET https://www.workato.com/api/managed_users/98178/connections "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n      -H "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'x-user-email: <email>'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n      -H "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'x-user-token: <token>'")]),t._v("\n")])])]),a("h3",{attrs:{id:"response"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#response"}},[t._v("#")]),t._v(" Response")]),t._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"result"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n   "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n     "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"id"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("36")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n     "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"name"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"ACME Production Salesforce connection"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n     "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"provider"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"salesforce"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n     "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"authorized_at"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"2015-05-26T22:53:52.528Z"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n     "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"authorization_status"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"success"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n     "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"authorization_error"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token null keyword"}},[t._v("null")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n     "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"created_at"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"2015-05-26T22:53:52.532Z"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n     "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"updated_at"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"2015-05-26T22:53:52.532Z"')]),t._v("\n   "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n   "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n       "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"id"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("37")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n       "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"name"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"ACME google sheet account"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n       "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"provider"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"google_sheets"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n       "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"authorized_at"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"2015-05-26T22:53:52.528Z"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n       "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"authorization_status"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"success"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n       "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"authorization_error"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token null keyword"}},[t._v("null")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n       "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"created_at"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"2015-05-26T22:53:52.532Z"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n       "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"updated_at"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"2015-05-26T22:53:52.532Z"')]),t._v("\n   "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h2",{attrs:{id:"create-connections"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#create-connections"}},[t._v("#")]),t._v(" Create Connections")]),t._v(" "),a("p",[t._v("Allows the OEM vendor to:")]),t._v(" "),a("ul",[a("li",[t._v("Add a shell connection in a customer's account OR")]),t._v(" "),a("li",[t._v("Add and authenticate a connection in a customer's account")])]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("POST /api/managed_users/:managed_user_id/connections\n")])])]),a("h3",{attrs:{id:"url-parameters-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#url-parameters-2"}},[t._v("#")]),t._v(" URL parameters")]),t._v(" "),a("table",{staticClass:"api-input"},[a("thead",[a("tr",[a("th",[t._v("Name")]),t._v(" "),a("th",[t._v("Type")]),t._v(" "),a("th",[t._v("Description")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("managed_user_id")]),t._v(" "),a("td",[a("strong",[t._v("string")]),a("br"),a("em",[t._v("required")])]),t._v(" "),a("td",[t._v("OEM customer Account ID/External ID. "),a("br"),t._v("External id should be prefixed with a E(eg: EA2300) and the resulting id should be URL encoded.")])])])]),t._v(" "),a("h3",{attrs:{id:"post-parameters"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#post-parameters"}},[t._v("#")]),t._v(" Post parameters")]),t._v(" "),a("table",{staticClass:"api-input"},[a("thead",[a("tr",[a("th",[t._v("Name")]),t._v(" "),a("th",[t._v("Type")]),t._v(" "),a("th",[t._v("Description")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("name")]),t._v(" "),a("td",[a("strong",[t._v("string")]),a("br"),a("em",[t._v("optional")])]),t._v(" "),a("td",[t._v("Name of the connection. Eg: 'Prod Salesforce connection'")])]),t._v(" "),a("tr",[a("td",[t._v("provider")]),t._v(" "),a("td",[a("strong",[t._v("string")]),a("br"),a("em",[t._v("required")])]),t._v(" "),a("td",[t._v("Connector identifier. Eg: 'salesforce'")])]),t._v(" "),a("tr",[a("td",[t._v("input")]),t._v(" "),a("td",[a("strong",[t._v("Hash")]),a("br"),a("em",[t._v("optional")])]),t._v(" "),a("td",[t._v("Connection parameters.")])])])]),t._v(" "),a("p",[t._v("For a list of providers and connection parameters, please view this "),a("router-link",{attrs:{to:"/oem/oem-api/connections-parameters.html"}},[t._v("document")]),t._v(".")],1),t._v(" "),a("h4",{attrs:{id:"sample-request-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#sample-request-2"}},[t._v("#")]),t._v(" Sample request")]),t._v(" "),a("h5",{attrs:{id:"shell-connection-request"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#shell-connection-request"}},[t._v("#")]),t._v(" Shell connection request")]),t._v(" "),a("p",[t._v("This creates the connection in a 'Disconnected' state.")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v("  -X GET https://www.workato.com/api/managed_users/98178/connection "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n      -H "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'x-user-email: <email>'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n      -H "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'x-user-token: <token>'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n      -H "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Content-Type: application/json'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n      -d  "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('\'{\n            "name": "jira_connection",\n            "provider": "jira"\n          }\'')]),t._v("\n")])])]),a("h5",{attrs:{id:"connection-request-with-credentials"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#connection-request-with-credentials"}},[t._v("#")]),t._v(" Connection request with credentials")]),t._v(" "),a("p",[t._v("Authenticates the connection (API token authentication).")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v("  -X GET https://www.workato.com/api/managed_users/98178/connection "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n      -H "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'x-user-email: <email>'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n      -H "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'x-user-token: <token>'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n      -H "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Content-Type: application/json'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n      -d  "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('\'{\n            "name": "jira_connection",\n            "provider": "jira",\n            "input": {\n              "host_name": "acme.atlassian.net",\n              "api_token_auth": "true",\n              "email": "smith@acme.com",\n              "apitoken": "XXXXXXXX"\n            }\n          }\'')]),t._v("\n")])])]),a("h3",{attrs:{id:"response-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#response-2"}},[t._v("#")]),t._v(" Response")]),t._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"id"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("36")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"name"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"jira_connection"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"provider"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"jira"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"authorized_at"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"2015-05-26T22:53:52.528Z"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"authorization_status"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"success"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"authorization_error"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token null keyword"}},[t._v("null")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"created_at"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"2015-05-26T22:53:52.532Z"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"updated_at"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"2015-05-26T22:53:52.532Z"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])])}),[],!1,null,null,null);s.default=n.exports}}]);