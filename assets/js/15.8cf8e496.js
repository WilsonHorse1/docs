(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{2243:function(t,e,a){"use strict";a.r(e);var o=a(0),i=Object(o.a)({},(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[o("h1",{attrs:{id:"jwt-workato-claim"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#jwt-workato-claim"}},[t._v("#")]),t._v(" JWT Workato claim")]),t._v(" "),o("p",[t._v("Identity providers streamline the process of maintaining verified access to multiple applications. The end user only needs to authenticate with the identity provider. Subsequently, the end user can access multiple applications and services without needing to remember additional sets of credentials. For example, the identity provider will issue JWT tokens that allow the end user to make authenticated requests with Workato API platform.")]),t._v(" "),o("p",[o("DocImage",{attrs:{src:a(440),alt:"Identity provider issues JWT to the end user, who uses it to obtain verified access to Workato API platform",width:"1175",height:"747"}}),t._v(" "),o("em",[t._v("Identity provider issues JWT to the end user, who uses it to obtain verified access to Workato API platform")])],1),t._v(" "),o("p",[t._v("When Workato receives an incoming request, the JWT token is checked to see if it contains a valid API key. This is done to determine that the request is coming from a valid access profile. If no valid token is found, the API request will return a "),o("code",[t._v("403 forbidden")]),t._v(" error.")]),t._v(" "),o("p",[t._v("Workato will inspect the following JWT claims in sequential order. Workato identifies the "),o("strong",[t._v("first claim")]),t._v(" that is not empty and compares the claim value with an internal list of known access profiles. If the token is not verified, the API request will return a "),o("code",[t._v("403 forbidden")]),t._v(" error. Otherwise, if a valid API key is found, the API request will be successful.")]),t._v(" "),o("table",[o("thead",[o("tr",[o("th",{staticStyle:{"text-align":"center"}},[t._v("Priority")]),t._v(" "),o("th",{staticStyle:{"text-align":"center"}},[t._v("Part")]),t._v(" "),o("th",[t._v("JWT claims")]),t._v(" "),o("th",[t._v("Description")])])]),t._v(" "),o("tbody",[o("tr",[o("td",{staticStyle:{"text-align":"center"}},[t._v("1st")]),t._v(" "),o("td",{staticStyle:{"text-align":"center"}},[o("em",[t._v("payload")])]),t._v(" "),o("td",[o("code",[t._v("https://www.workato.com/sub")])]),t._v(" "),o("td",[t._v("This is a namespace claim. As it uses unique names, this claim is unlikely to be restricted by the identity providers.")])]),t._v(" "),o("tr",[o("td",{staticStyle:{"text-align":"center"}},[t._v("2nd")]),t._v(" "),o("td",{staticStyle:{"text-align":"center"}},[o("em",[t._v("payload")])]),t._v(" "),o("td",[o("code",[t._v("workato_sub")])]),t._v(" "),o("td",[t._v("Workato will inspect this claim if the above claims are empty.")])]),t._v(" "),o("tr",[o("td",{staticStyle:{"text-align":"center"}},[t._v("3rd")]),t._v(" "),o("td",{staticStyle:{"text-align":"center"}},[o("em",[t._v("header")])]),t._v(" "),o("td",[o("code",[t._v("kid")])]),t._v(" "),o("td",[t._v("This is a header claim. Workato will inspect this claim if the above claims are empty.")])]),t._v(" "),o("tr",[o("td",{staticStyle:{"text-align":"center"}},[t._v("4th")]),t._v(" "),o("td",{staticStyle:{"text-align":"center"}},[o("em",[t._v("payload")])]),t._v(" "),o("td",[o("code",[t._v("sub")])]),t._v(" "),o("td",[t._v("This represents the subject of the JWT. Some identity providers reserve this JWT claim and thus Workato API key cannot be used here. Workato will inspect this claim if the above claims are empty.")])])])]),t._v(" "),o("h2",{attrs:{id:"how-to-configure-workato-claim"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#how-to-configure-workato-claim"}},[t._v("#")]),t._v(" How to configure Workato claim")]),t._v(" "),o("p",[t._v("Workato claim works with most identity providers, including "),o("a",{attrs:{href:"https://docs.microsoft.com/en-us/windows-server/identity/active-directory-federation-services",target:"_blank",rel:"noopener noreferrer"}},[t._v("ADFS"),o("OutboundLink")],1),t._v(", "),o("a",{attrs:{href:"https://auth0.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Auth0"),o("OutboundLink")],1),t._v(", and "),o("a",{attrs:{href:"https://www.okta.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Okta"),o("OutboundLink")],1),t._v(". Let’s go through an example of configuring a workato claim for "),o("a",{attrs:{href:"https://auth0.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Auth0"),o("OutboundLink")],1),t._v(". This identity provider restricts the "),o("code",[t._v("kid")]),t._v(" and "),o("code",[t._v("sub")]),t._v(" claims. Furthermore, Auth0 requires all custom claims to be namespace. Hence, we will be configuring a namespace claim to hold our API key.")]),t._v(" "),o("p",[o("DocImage",{attrs:{src:a(441),alt:"Configure JWT in Auth0",width:"1282",height:"779"}}),t._v(" "),o("em",[t._v("Configure JWT in Auth0")])],1),t._v(" "),o("p",[t._v("This process consists of three stages:")]),t._v(" "),o("ol",[o("li",[t._v("Obtain the "),o("a",{attrs:{href:"#_1-obtain-rsa-certificate"}},[t._v("RSA certificate")]),t._v(" from Auth0.")]),t._v(" "),o("li",[t._v("Configure an access profile in Workato API platform and "),o("a",{attrs:{href:"#_2-configure-workato-access-profile"}},[t._v("obtain the API key")]),t._v(".")]),t._v(" "),o("li",[t._v("Configure Auth0 application metadata and "),o("a",{attrs:{href:"#_3-configure-jwt-claim"}},[t._v("JWT namespace claim")]),t._v(".")])]),t._v(" "),o("h2",{attrs:{id:"_1-obtain-rsa-certificate"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#_1-obtain-rsa-certificate"}},[t._v("#")]),t._v(" 1. Obtain RSA certificate")]),t._v(" "),o("p",[t._v("First, create an application in Auth0 and obtain the RSA certificate.")]),t._v(" "),o("table",[o("thead",[o("tr",[o("th",[t._v("Steps")]),t._v(" "),o("th",[t._v("Description")])])]),t._v(" "),o("tbody",[o("tr",[o("td",[t._v("1.")]),t._v(" "),o("td",[t._v("Select "),o("strong",[t._v("APIs")]),t._v(" from the sidebar > "),o("strong",[t._v("Create API")]),t._v("."),o("br"),o("DocImage",{attrs:{src:a(442),alt:"Create Auth0 API",width:"1093",height:"425"}}),o("em",[t._v("Create Auth0 API")])],1)]),t._v(" "),o("tr",[o("td",[t._v("2.")]),t._v(" "),o("td",[t._v("Define the name, identifiter, and signing algorithm."),o("br"),o("strong",[t._v("Workato recommends using RS256")]),t._v("."),o("br"),o("DocImage",{attrs:{src:a(443),alt:"Set signing algorithm to RS256",width:"1089",height:"628"}}),o("em",[t._v("Set signing algorithm to RS256")])],1)]),t._v(" "),o("tr",[o("td",[t._v("3.")]),t._v(" "),o("td",[t._v("Select "),o("strong",[t._v("Applications")]),t._v(" from the sidebar > "),o("strong",[t._v("Create application")]),t._v("."),o("DocImage",{attrs:{src:a(444),alt:"Create Auth0 application",width:"1089",height:"355"}}),o("em",[t._v("Create Auth0 application")])],1)]),t._v(" "),o("tr",[o("td",[t._v("4.")]),t._v(" "),o("td",[t._v("Select "),o("strong",[t._v("Machine to Machine")]),t._v(". Since, we are using an Auth0 API, Auth0 recommends using the "),o("a",{attrs:{href:"https://auth0.com/docs/applications",target:"_blank",rel:"noopener noreferrer"}},[t._v("M2M configuration"),o("OutboundLink")],1),t._v("."),o("br"),o("DocImage",{attrs:{src:a(445),alt:"Configure Auth0 application",width:"1089",height:"723"}}),o("em",[t._v("Configure Auth0 application")])],1)]),t._v(" "),o("tr",[o("td",[t._v("5.")]),t._v(" "),o("td",[t._v("Select the API that you have just created."),o("br"),o("DocImage",{attrs:{src:a(446),alt:"Connect to Auth0 API",width:"1089",height:"547"}}),o("em",[t._v("Connect the Auth0 API and application")])],1)]),t._v(" "),o("tr",[o("td",[t._v("6.")]),t._v(" "),o("td",[t._v("In the Auth0 application, find the "),o("strong",[t._v("Settings")]),t._v(" tab > "),o("strong",[t._v("Application Tokens")]),t._v(" > "),o("strong",[t._v("Advanced settings")]),o("br"),o("DocImage",{attrs:{src:a(447),alt:"Open advanced settings",width:"1089",height:"646"}}),o("em",[t._v("Open advanced settings")])],1)]),t._v(" "),o("tr",[o("td",[t._v("7.")]),t._v(" "),o("td",[t._v("Find the "),o("strong",[t._v("Certificate")]),t._v(" tab > copy the "),o("strong",[t._v("Signing certificate")]),t._v(". We will use this to configure the Workato access profile in the next stage."),o("br"),t._v("We will turn to this page in the 3rd stage."),o("br"),o("DocImage",{attrs:{src:a(448),alt:"Obtain RSA certificate",width:"1106",height:"613"}}),o("em",[t._v("Obtain RSA certicate")])],1)])])]),t._v(" "),o("h2",{attrs:{id:"_2-configure-workato-access-profile"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#_2-configure-workato-access-profile"}},[t._v("#")]),t._v(" 2. Configure Workato access profile")]),t._v(" "),o("p",[t._v("Next, configure an access profile in Workato and obtain the API key.")]),t._v(" "),o("table",[o("thead",[o("tr",[o("th",[t._v("Steps")]),t._v(" "),o("th",[t._v("Description")])])]),t._v(" "),o("tbody",[o("tr",[o("td",[t._v("1.")]),t._v(" "),o("td",[t._v("Find "),o("strong",[t._v("Tools")]),t._v(" > "),o("strong",[t._v("API platform")]),t._v(" > select a Client > "),o("strong",[t._v("Create access profile")]),t._v(". Learn more about API clients "),o("a",{attrs:{href:"/api-mgmt/api-client-mgmt#api-clients"}},[t._v("here")]),t._v("."),o("br"),o("DocImage",{attrs:{src:a(449),alt:"Open Workato API platform",width:"1035",height:"331"}}),o("em",[t._v("Open Workato API platform")])],1)]),t._v(" "),o("tr",[o("td",[t._v("2.")]),t._v(" "),o("td",[t._v("Select "),o("strong",[t._v("JSON Web Taken (JWT)")]),t._v(" as the authentication method. Profide the "),o("strong",[t._v("RSA certificate")]),t._v(" from the previously stage. Learn more about configuring access profiles "),o("a",{attrs:{href:"/api-mgmt/api-client-mgmt#create-new-access-profile"}},[t._v("here")]),t._v("."),o("br"),o("DocImage",{attrs:{src:a(450),alt:"Provide RSA certificate",width:"1206",height:"653"}}),o("em",[t._v("Provide RSA certificate")])],1)]),t._v(" "),o("tr",[o("td",[t._v("3.")]),t._v(" "),o("td",[t._v("Locate and copy the "),o("strong",[t._v("API key")]),t._v(" to the access profile you have just created."),o("br"),o("DocImage",{attrs:{src:a(451),alt:"Copy API key",width:"2356",height:"1042"}}),o("em",[t._v("Copy API key")])],1)])])]),t._v(" "),o("h2",{attrs:{id:"_3-configure-jwt-claim"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#_3-configure-jwt-claim"}},[t._v("#")]),t._v(" 3. Configure JWT claim")]),t._v(" "),o("p",[t._v("Lastly, configure the API key value into a namespace claim on Auth0.")]),t._v(" "),o("table",[o("thead",[o("tr",[o("th",[t._v("Steps")]),t._v(" "),o("th",[t._v("Description")])])]),t._v(" "),o("tbody",[o("tr",[o("td",[t._v("1.")]),t._v(" "),o("td",[t._v("Go to "),o("strong",[t._v("Advanced settings")]),t._v(" > find the "),o("strong",[t._v("Application metadata")]),t._v(" tab. Input the following "),o("code",[t._v("key=workato_sub")]),t._v(", "),o("code",[t._v("value=<API-TOKEN>")]),t._v(". Then, select "),o("strong",[t._v("Save changes")]),t._v("."),o("br"),o("DocImage",{attrs:{src:a(452),alt:"Save API key in Auth0 application",width:"1089",height:"658"}}),o("em",[t._v("Save API key in Auth0 application")])],1)]),t._v(" "),o("tr",[o("td",[t._v("2.")]),t._v(" "),o("td",[t._v("Select "),o("strong",[t._v("Hooks")]),t._v(" from the sidebar > "),o("strong",[t._v("Create new hook")]),t._v("."),o("br"),o("DocImage",{attrs:{src:a(453),alt:"Create new hook",width:"1118",height:"669"}}),o("em",[t._v("Create new hook")])],1)]),t._v(" "),o("tr",[o("td",[t._v("3.")]),t._v(" "),o("td",[t._v("Select "),o("strong",[t._v("Client credentials exchange")]),t._v(". This step adds a custom Workato claim to the "),o("a",{attrs:{href:"https://auth0.com/docs/hooks/extensibility-points/client-credentials-exchange",target:"_blank",rel:"noopener noreferrer"}},[t._v("JWT token"),o("OutboundLink")],1),t._v(" that is generate by Auth0."),o("br"),o("DocImage",{attrs:{src:a(454),alt:"Select client credentials exchange",width:"1111",height:"304"}}),o("em",[t._v("Select client credentials exchange")])],1)]),t._v(" "),o("tr",[o("td",[t._v("4.")]),t._v(" "),o("td",[t._v("Open the hook that you have just created."),o("br"),o("DocImage",{attrs:{src:a(455),alt:"Edit hook"}}),o("em",[t._v("Edit hook")])],1)]),t._v(" "),o("tr",[o("td",[t._v("5.")]),t._v(" "),o("td",[t._v("Add this line following line, remember to click "),o("strong",[t._v("Save")]),t._v("."),o("br"),o("code",[t._v("access_token['https://www.workato.com/sub'] = client.metadata.workato_sub;")]),o("br"),o("br"),t._v("Congradualations, you have configured a JWT namespace claim!"),o("br"),o("DocImage",{attrs:{src:a(456),alt:"Add new line to hook",width:"835",height:"498"}}),o("em",[t._v("Add new line to hook")])],1)]),t._v(" "),o("tr",[o("td",[t._v("6.")]),t._v(" "),o("td",[t._v("Now, it is time to test your new JWT token. Select "),o("strong",[t._v("APIs")]),t._v(" from the sidebar > Go to the API you have just created > Find the "),o("strong",[t._v("Test")]),t._v(" tab."),o("br"),o("br"),t._v("Copy the example and make an API call to Auth0."),o("br"),o("DocImage",{attrs:{src:a(457),alt:"Request JWT token from Auth0",width:"1095",height:"690"}}),o("em",[t._v("Request JWT token from Auth0")])],1)]),t._v(" "),o("tr",[o("td",[t._v("7.")]),t._v(" "),o("td",[t._v("You should receive a response containing the JWT token. Now you can send requests to Workato API using this JWT token in the authentication header."),o("br"),o("DocImage",{attrs:{src:a(458),alt:"KWT token from Auth0",width:"864",height:"226"}}),o("em",[t._v("JWT token from Auth0")])],1)]),t._v(" "),o("tr",[o("td",[t._v("8.")]),t._v(" "),o("td",[t._v("If you decode the JWT token using an external resource (like "),o("a",{attrs:{href:"https://jwt.io",target:"_blank",rel:"noopener noreferrer"}},[t._v("jwt.io"),o("OutboundLink")],1),t._v("), you can observe that there is a JWT namespace claim in the JWT payload."),o("br"),o("DocImage",{attrs:{src:a(459),alt:"Namespace claim in JWT token",width:"1239",height:"500"}}),o("em",[t._v("Namespace claim in JWT token")])],1)])])])])}),[],!1,null,null,null);e.default=i.exports},440:function(t,e,a){t.exports=a.p+"assets/img/jwt-flow.67f7132f.png"},441:function(t,e,a){t.exports=a.p+"assets/img/auth0-configure-jwt-flow.c5e37295.png"},442:function(t,e,a){t.exports=a.p+"assets/img/auth0-configure-create-api.0a9f6266.png"},443:function(t,e,a){t.exports=a.p+"assets/img/auth0-configure-rs256-api.5e20c694.png"},444:function(t,e,a){t.exports=a.p+"assets/img/auth0-configure-create-application.5e0756b8.png"},445:function(t,e,a){t.exports=a.p+"assets/img/auth0-configure-choose-m2m.9b3e2228.png"},446:function(t,e,a){t.exports=a.p+"assets/img/auth0-configure-choose-api.4d1ec511.png"},447:function(t,e,a){t.exports=a.p+"assets/img/auth0-configure-advanced-settings.5ec8a035.png"},448:function(t,e,a){t.exports=a.p+"assets/img/auth-configure-copy-certificate.8429d92f.png"},449:function(t,e,a){t.exports=a.p+"assets/img/open-api-platform.be425ac2.png"},450:function(t,e,a){t.exports=a.p+"assets/img/auth0-configure-provide-certifcate.2f19d1b4.png"},451:function(t,e,a){t.exports=a.p+"assets/img/copy-client-url.a18c373d.png"},452:function(t,e,a){t.exports=a.p+"assets/img/auth0-configure-add-token.18c7dfdf.png"},453:function(t,e,a){t.exports=a.p+"assets/img/auth0-configure-create-hook.b6491890.png"},454:function(t,e,a){t.exports=a.p+"assets/img/auth0-configure-configure-hook.a1a555d3.png"},455:function(t,e,a){t.exports=a.p+"assets/img/auth0-configure-edit-hook.61d6fd3c.png"},456:function(t,e,a){t.exports=a.p+"assets/img/auth0-configure-add-hook-line.d9d898bd.png"},457:function(t,e,a){t.exports=a.p+"assets/img/auth0-configure-request-jwt.a71ad760.png"},458:function(t,e){t.exports="data:image/png;base64,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"},459:function(t,e,a){t.exports=a.p+"assets/img/auth0-configure-namespace-claim.3ff1e935.png"}}]);