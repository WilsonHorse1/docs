(window.webpackJsonp=window.webpackJsonp||[]).push([[130],{1214:function(t,e,a){t.exports=a.p+"assets/img/sales-tax-list.809ed4ce.png"},1215:function(t,e,a){t.exports=a.p+"assets/img/tax-type-list.a8f6d96e.png"},1216:function(t,e,a){t.exports=a.p+"assets/img/contact-id.10061167.png"},1217:function(t,e,a){t.exports=a.p+"assets/img/search-contact.9c021cb1.png"},1218:function(t,e,a){t.exports=a.p+"assets/img/manual-journal-id.ed365dfe.png"},1219:function(t,e,a){t.exports=a.p+"assets/img/payment.1ea19c60.png"},2516:function(t,e,a){"use strict";a.r(e);var o=a(0),n=Object(o.a)({},(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[o("h1",{attrs:{id:"xero"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#xero"}},[t._v("#")]),t._v(" Xero")]),t._v(" "),o("p",[o("a",{attrs:{href:"https://www.xero.com/us/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Xero"),o("OutboundLink")],1),t._v(" is a cloud-based accounting software for small to medium businesses, used to manage invoicing, bank reconciliation, bookkeeping and more.")]),t._v(" "),o("p",[t._v("Workato allows you to synchronize data between Xero and the other apps you use in your organization. For example, you can sync Xero contact data into your CRM app as customer data, Xero sales data into your point-of-sales app, or Xero inventory data into your ERP app.")]),t._v(" "),o("h2",{attrs:{id:"supported-triggers-and-actions"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#supported-triggers-and-actions"}},[t._v("#")]),t._v(" Supported triggers and actions")]),t._v(" "),o("p",[t._v("The latest triggers and actions can be found on the "),o("a",{attrs:{href:"https://www.workato.com/integrations/xero",target:"_blank",rel:"noopener noreferrer"}},[t._v("Xero connector page"),o("OutboundLink")],1),t._v(".")]),t._v(" "),o("h2",{attrs:{id:"sales-tax-type-when-using-create-update-items-action-in-xero"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#sales-tax-type-when-using-create-update-items-action-in-xero"}},[t._v("#")]),t._v(" Sales tax type when using create/update items action in Xero")]),t._v(" "),o("p",[t._v("To find out what types of sales tax to key in when using the "),o("strong",[t._v("Create/update items")]),t._v(" action in Xero, users can click on the URL below the box (highlighted in image).")]),t._v(" "),o("p",[o("DocImage",{attrs:{src:a(1214),alt:"Sales tax list",width:"1356",height:"653"}})],1),t._v(" "),o("p",[o("em",[t._v("List of different types of sales taxes")])]),t._v(" "),o("p",[t._v("This will lead users to the "),o("strong",[t._v("Tax type")]),t._v(" page as below, and they will have to key it in manually.")]),t._v(" "),o("p",[o("DocImage",{attrs:{src:a(1215),alt:"Tax types list",width:"660",height:"547"}})],1),t._v(" "),o("p",[o("em",[t._v("List of tax types")])]),t._v(" "),o("h2",{attrs:{id:"xero-api-rate-limiting"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#xero-api-rate-limiting"}},[t._v("#")]),t._v(" Xero API rate limiting")]),t._v(" "),o("p",[t._v("According to the "),o("a",{attrs:{href:"https://community.xero.com/developer/question/17181",target:"_blank",rel:"noopener noreferrer"}},[t._v("Xero Developer Help Center"),o("OutboundLink")],1),t._v(", there is a daily limit of 1000 API calls that a provider can make against a particular Xero organization in a rolling 24 hour period. If you exceed this rate limit you will receive a HTTP 401 response with the message "),o("code",[t._v("oauth_problem=rate%20limit%20exceeded&oauth_problem_advice=please%20wait%20before%20retrying%20the%20xero%20api")]),t._v(" in the http response body.")]),t._v(" "),o("h2",{attrs:{id:"how-to-find-different-ids-in-xero"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#how-to-find-different-ids-in-xero"}},[t._v("#")]),t._v(" How to find different IDs in Xero")]),t._v(" "),o("p",[t._v("A Xero ID is a unique identifier for a record in the API. All IDs can be obtained in one of two ways.")]),t._v(" "),o("p",[t._v("IDs can be found in one of two ways. The first way is less common when it comes to Workato recipes - to retrieve IDs directly from the Xero site. The ID of a specific item, such as a "),o("strong",[t._v("Contact")]),t._v(" or "),o("strong",[t._v("Manual journal")]),t._v(" can be found at the end of the URL of its respective page in Xero. By using this method, you would be hardcoding the recipe to always use this ID - this is typically only used for testing.")]),t._v(" "),o("p",[t._v("The second, more common way is to use the "),o("strong",[t._v("Search")]),t._v(", "),o("strong",[t._v("Create")]),t._v(", or "),o("strong",[t._v("Update")]),t._v(" actions. Whenever Workato interacts with a record in Xero, it will receive in the API response the ID of the record. In your next action, you can use the datapill from the Xero datatree for the ID returned by the preceding action to specify what record Workato should interact with in this step. Some examples are given below.")]),t._v(" "),o("h4",{attrs:{id:"contact-id"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#contact-id"}},[t._v("#")]),t._v(" Contact ID")]),t._v(" "),o("p",[o("strong",[t._v("Contact ID")]),t._v(" is an unique identifier for each contact in the Xero. It can be found at the end of the URL of a particular contact page.")]),t._v(" "),o("p",[o("DocImage",{attrs:{src:a(1216),alt:"Contact ID",width:"1366",height:"709"}}),t._v(" "),o("em",[o("strong",[t._v("Contact ID")]),t._v(" in the contact page URL")])],1),t._v(" "),o("p",[t._v("You can also make use of the output datapill from the following actions to obtain "),o("strong",[t._v("Contact ID")]),t._v(", depending on your workflow:")]),t._v(" "),o("ol",[o("li",[o("strong",[t._v("New/updated contact")]),t._v(" in Xero")]),t._v(" "),o("li",[o("strong",[t._v("Search contacts")])]),t._v(" "),o("li",[o("strong",[t._v("Create contact")])])]),t._v(" "),o("p",[t._v("For example, when you want to add person(s) to a contact, you could conduct "),o("strong",[t._v("Search contact")]),t._v(" by contact name or email and make use of the output datapill as shown below:")]),t._v(" "),o("p",[o("DocImage",{attrs:{src:a(1217),alt:"Search for contacts",width:"1368",height:"693"}}),t._v(" "),o("em",[t._v("Search for contacts by name or email")])],1),t._v(" "),o("h4",{attrs:{id:"manual-journal-id"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#manual-journal-id"}},[t._v("#")]),t._v(" Manual Journal ID")]),t._v(" "),o("p",[o("strong",[t._v("Manual journal ID")]),t._v(" is an unique identifier for each manual journal in Xero.")]),t._v(" "),o("p",[t._v("You can make use of the output datapill from the following actions to obtain "),o("strong",[t._v("Manual journal ID")]),t._v(", depending on your workflow:")]),t._v(" "),o("ol",[o("li",[o("strong",[t._v("Create manual journal")])]),t._v(" "),o("li",[o("strong",[t._v("Search manual journal")])]),t._v(" "),o("li",[o("strong",[t._v("Update manual journal")])])]),t._v(" "),o("p",[o("DocImage",{attrs:{src:a(1218),alt:"Manual Journal ID",width:"1368",height:"693"}}),t._v(" "),o("em",[o("strong",[t._v("Manual journal ID")]),t._v(" identifier")])],1),t._v(" "),o("h4",{attrs:{id:"payment-id"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#payment-id"}},[t._v("#")]),t._v(" Payment ID")]),t._v(" "),o("p",[t._v("You can make use of the output datapill from the following actions to obtain "),o("strong",[t._v("Payment ID")]),t._v(", depending on your workflow:")]),t._v(" "),o("ol",[o("li",[o("strong",[t._v("Create payment")])]),t._v(" "),o("li",[o("strong",[t._v("Search payments")])])]),t._v(" "),o("p",[o("DocImage",{attrs:{src:a(1219),alt:"Payment",width:"1368",height:"695"}}),t._v(" "),o("em",[o("strong",[t._v("Payment ID")])])],1),t._v(" "),o("h4",{attrs:{id:"employee-id"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#employee-id"}},[t._v("#")]),t._v(" Employee ID")]),t._v(" "),o("p",[t._v("You can make use of the output datapill from the following triggers/actions to obtain "),o("strong",[t._v("Employee ID")]),t._v(", depending on your workflow:")]),t._v(" "),o("ol",[o("li",[o("strong",[t._v("New/updated employee")])]),t._v(" "),o("li",[o("strong",[t._v("Create employee")])])]),t._v(" "),o("h4",{attrs:{id:"account-id"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#account-id"}},[t._v("#")]),t._v(" Account ID")]),t._v(" "),o("p",[t._v("You can make use of the output datapill from the following triggers/actions to obtain bank "),o("strong",[t._v("Account ID")]),t._v(", depending on your workflow:")]),t._v(" "),o("ol",[o("li",[o("strong",[t._v("New/updated payment")])]),t._v(" "),o("li",[o("strong",[t._v("Create invoice payment")])]),t._v(" "),o("li",[o("strong",[t._v("Get payment")])])]),t._v(" "),o("p",[t._v("Alternatively, you can change the toggle to "),o("strong",[t._v("Account code")]),t._v(", which can be found in "),o("em",[t._v("Xero settings")]),t._v(" > "),o("em",[t._v("Chart of accounts")])])])}),[],!1,null,null,null);e.default=n.exports}}]);