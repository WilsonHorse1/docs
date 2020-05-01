(window.webpackJsonp=window.webpackJsonp||[]).push([[109],{1034:function(t,e,s){t.exports=s.p+"assets/img/default_profile.fde77f4f.png"},1035:function(t,e,s){t.exports=s.p+"assets/img/edit_profile.a0977a07.png"},1036:function(t,e,s){t.exports=s.p+"assets/img/import_certificates.6e140cbd.png"},1037:function(t,e,s){t.exports=s.p+"assets/img/RFC_destination.009184cc.png"},1038:function(t,e,s){t.exports=s.p+"assets/img/logon_and_security.5b5551cf.png"},1039:function(t,e,s){t.exports=s.p+"assets/img/404_message.944be275.png"},1040:function(t,e,s){t.exports=s.p+"assets/img/api_collection.a7e84cfd.png"},2440:function(t,e,s){"use strict";s.r(e);var a=s(0),n=Object(a.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"sap-configuration-how-to-call-workato-s-api-platform-from-abap-4"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#sap-configuration-how-to-call-workato-s-api-platform-from-abap-4"}},[t._v("#")]),t._v(" SAP Configuration - How to call Workato's API platform from ABAP/4")]),t._v(" "),a("p",[t._v("This article outlines the steps needed to enable TLS 1.2 for SAP instances such that RFCs may interact directly with Workato's API platform.")]),t._v(" "),a("h2",{attrs:{id:"what-is-tls-1-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#what-is-tls-1-2"}},[t._v("#")]),t._v(" What is TLS 1.2")]),t._v(" "),a("p",[t._v("TLS 1.2 is currently the most widely used verion of TLS and has several improvements in security compared to TLS 1.1. The enhancements in encryption of TLS 1.2 allow it to use more secure hash algorithms such as SHA-256 as well as advanced cipher suites that support authenticated encryption for other data modes. Workato blocks all incoming web traffic that is not encrypted using TLS 1.2 in an effort to ensure your data is always kept secure.")]),t._v(" "),a("h2",{attrs:{id:"_1-editing-your-profile-in-rz10"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-editing-your-profile-in-rz10"}},[t._v("#")]),t._v(" 1. Editing your profile in RZ10")]),t._v(" "),a("blockquote",[a("p",[t._v("TLS 1.2 might be the standard in your SAP instance as well. Double check that your SAP instance does not already have the cipher suites below included in the profile. If so, this step may be skipped entirely.")])]),t._v(" "),a("p",[t._v("To enable TLS 1.2 in your SAP instance, you will need to edit your instance or default profile via the SAP GUI using the transaction code "),a("code",[t._v("RZ10")]),t._v(". In the example below, we will be editting the Default profile. This can be substituted for an instance specific profile name as well.")]),t._v(" "),a("p",[a("DocImage",{attrs:{src:s(1034),alt:"Edit your profile in RZ10",width:"958",height:"998"}})],1),t._v(" "),a("p",[t._v("When keying in your profile, ensure you are editing the latest version of the profile and that "),a("code",[t._v("Extended maintenance")]),t._v(" is selected. Click on "),a("code",[t._v("Change")]),t._v(" when all the input fields above have been filled in. You should be brought to the screen below.")]),t._v(" "),a("p",[a("DocImage",{attrs:{src:s(1035),alt:"Add in the following parameters into the profile",width:"960",height:"852"}})],1),t._v(" "),a("p",[t._v("In this screen, you will need to add the following parameters to the profile. These parameters and values are tell your SAP instance which ciphers suites to use.")]),t._v(" "),a("table",{staticClass:"unchanged rich-diff-level-one"},[a("thead",[a("tr",[a("th",[t._v("Parameter Name")]),t._v(" "),a("th",[t._v("Parameter Value")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("ssl/ciphersuites")]),t._v(" "),a("td",[t._v("135:PFS:HIGH::EC_P256:EC_HIGH")])]),t._v(" "),a("tr",[a("td",[t._v("ssl/client_ciphersuites")]),t._v(" "),a("td",[t._v("150:PFS:HIGH::EC_P256:EC_HIGH")])]),t._v(" "),a("tr",[a("td",[t._v("icm/HTTPS/client_sni_enabled")]),t._v(" "),a("td",[t._v("TRUE")])]),t._v(" "),a("tr",[a("td",[t._v("ssl/client_sni_enabled")]),t._v(" "),a("td",[t._v("TRUE")])]),t._v(" "),a("tr",[a("td",[t._v("SETENV_26")]),t._v(" "),a("td",[t._v("SECUDIR=$(DIR_INSTANCE)$(DIR_SEP)sec")])]),t._v(" "),a("tr",[a("td",[t._v("SETENV_27")]),t._v(" "),a("td",[t._v("SAPSSL_CLIENT_CIPHERSUITES=150:PFS:HIGH::EC_P256:EC_HIGH")])]),t._v(" "),a("tr",[a("td",[t._v("SETENV_28")]),t._v(" "),a("td",[t._v("SAPSSL_CLIENT_SNI_ENABLED=TRUE")])]),t._v(" "),a("tr",[a("td",[t._v("SETENV_29")]),t._v(" "),a("td",[t._v("SAPSSL_CIPHERSUITES=135:PFS:HIGH::EC_P256:EC_HIGH")])])])]),t._v(" "),a("p",[t._v("After this is done, changes to the profile will only take effect when the SAP instance is next restarted. For production SAP instances, this should occur during the next scheduled maintenance.")]),t._v(" "),a("h2",{attrs:{id:"_2-adding-workato-ssl-certificates-to-trust-manager"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-adding-workato-ssl-certificates-to-trust-manager"}},[t._v("#")]),t._v(" 2. Adding Workato SSL certificates to trust manager")]),t._v(" "),a("p",[t._v("Navigate to "),a("code",[t._v("STRUST")]),t._v(" and select "),a("code",[t._v("SSL server Standard")]),t._v(" on the side bar. Select the "),a("code",[t._v("System-wide")]),t._v(" folder and you should see the screen below.")]),t._v(" "),a("p",[a("DocImage",{attrs:{src:s(1036),alt:"Import certificates in trust manager",width:"960",height:"1056"}})],1),t._v(" "),a("p",[t._v("Click on the import certificates button above and import the following certificates. These certificates are Workato's SSL certificate as well as the Root CA certificate - signed by Amazon.")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://drive.google.com/file/d/1JoHLiMaJTRflR_g_ivm4pQxCeB0Zuwgb/view?usp=sharing",target:"_blank",rel:"noopener noreferrer"}},[t._v("Workato SSL cert"),a("OutboundLink")],1)]),t._v(" "),a("p",[a("a",{attrs:{href:"https://drive.google.com/file/d/1h-AcEZ9eIex85HN8u3eX5t9WD3PTPtVS/view?usp=sharing",target:"_blank",rel:"noopener noreferrer"}},[t._v("Amazon Root CA cert"),a("OutboundLink")],1)]),t._v(" "),a("h2",{attrs:{id:"_3-create-an-rfc-destination"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-create-an-rfc-destination"}},[t._v("#")]),t._v(" 3. Create an RFC Destination")]),t._v(" "),a("p",[t._v("Navigate to "),a("code",[t._v("SM59")]),t._v(" and select "),a("code",[t._v("HTTP Connections to External Server")]),t._v(" on the side bar. RFC destinations are how you can define the domains which SAP can call in RFCs to communicate with Workato. This can be configured to be our Workato's API platform or webhook triggers in recipes. Below, we go through how to connect to Workato's API management platform.")]),t._v(" "),a("p",[a("DocImage",{attrs:{src:s(1037),alt:"RFC destination",width:"959",height:"1038"}})],1),t._v(" "),a("p",[a("DocImage",{attrs:{src:s(1038),alt:"Logon and security",width:"839",height:"802"}})],1),t._v(" "),a("table",{staticClass:"unchanged rich-diff-level-one"},[a("thead",[a("tr",[a("th",[t._v("Input field name")]),t._v(" "),a("th",[t._v("Recommended Value")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("RFC Destination")]),t._v(" "),a("td",[t._v("This is the name of your RFC destination which will be called in your RFCs. Remember this title for further steps.")])]),t._v(" "),a("tr",[a("td",[t._v("Connection Type")]),t._v(" "),a("td",[t._v("G - HTTP Connection to External Server")])]),t._v(" "),a("tr",[a("td",[t._v("Description")]),t._v(" "),a("td",[t._v('Give an accurate description of the RFC destination. Below we named it "Workato API Platform REST endpoints" and gave a link to the API management documentation.')])]),t._v(" "),a("tr",[a("td",[t._v("Target Host")]),t._v(" "),a("td",[t._v('For API management, the target Host should be "apim.workato.com"')])]),t._v(" "),a("tr",[a("td",[t._v("Service No.")]),t._v(" "),a("td",[t._v('The port for communication. This should be "443".')])]),t._v(" "),a("tr",[a("td",[t._v("Path Prefix")]),t._v(" "),a("td",[t._v('This is appended to your target host. The exact path of the endpoint should be configured in an RFC. In this example, we have just entered a single "/"')])]),t._v(" "),a("tr",[a("td",[t._v("Security Options (under the Logon & security tab)")]),t._v(" "),a("td",[t._v("SSL should be toggled to Active and SSL certificate toggled to Dfault SSL Client")])])])]),t._v(" "),a("p",[t._v("At this point, you should be able to test your connection by clicking the "),a("code",[t._v("Connection test")]),t._v(" button in the top left corner. Receiving a "),a("code",[t._v("404 Not Found")]),t._v(" response is expected and should inform you that a TLS 1.2 secure connection has been established.")]),t._v(" "),a("p",[a("DocImage",{attrs:{src:s(1039),alt:"404 not found error message",width:"1580",height:"1660"}})],1),t._v(" "),a("h2",{attrs:{id:"_4-create-an-apim-endpoint"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-create-an-apim-endpoint"}},[t._v("#")]),t._v(" 4. Create an APIM endpoint")]),t._v(" "),a("p",[t._v("Head over to Workato's API platform under "),a("code",[t._v("Tools")]),t._v(" and create a new API collection. API collections are collections of endpoints which correspond to a folder which contains callable recipes. With this, RFC's in SAP would be able to call and trigger recipes in Workato directly. Find out more about configuring "),a("router-link",{attrs:{to:"/api-management.html"}},[t._v("Workato's API platform here.")])],1),t._v(" "),a("p",[a("DocImage",{attrs:{src:s(1040),alt:"API collection",width:"2472",height:"1685"}})],1),t._v(" "),a("p",[t._v("In this example, we have named the collection "),a("code",[t._v("sap-connection-demo")]),t._v(" with a version "),a("code",[t._v("A0001")]),t._v(". Inside, we have linked it to a folder with a single recipe with the name "),a("code",[t._v("Hello, Workato!")]),t._v(". This has resulted with collection with a single endpoint "),a("code",[t._v("https://apim.workato.com/sap-connection-demo-va0001/hello-workato")]),t._v(" and we have edited the endpoint to accept "),a("code",[t._v("POST")]),t._v(" requests. In the following steps, we will be using this information to create an RFC to connect to this endpoint.")]),t._v(" "),a("p",[t._v("The recipe can be found "),a("a",{attrs:{href:"https://www.workato.com/recipes/1044183?st=23e3df",target:"_blank",rel:"noopener noreferrer"}},[t._v("here"),a("OutboundLink")],1),t._v(". Feel free to install and modify it. The payload we configure later on in the")]),t._v(" "),a("h2",{attrs:{id:"_5-creating-your-call-to-workato-via-an-rfc"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-creating-your-call-to-workato-via-an-rfc"}},[t._v("#")]),t._v(" 5. Creating your call to Workato via an RFC")]),t._v(" "),a("p",[t._v("Below we have sample ABAP code which showcases how you can connect to Workato in a sample RFC - "),a("code",[t._v("ZWORKATO_API_ENDPOINT_DEMO")]),t._v(".")]),t._v(" "),a("div",{staticClass:"language-ABAP extra-class"},[a("pre",{pre:!0,attrs:{class:"language-abap"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("*&---------------------------------------------------------------------*")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("*& Report ZWORKATO_API_ENDPOINT_DEMO")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("*&---------------------------------------------------------------------*")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("*& Author: Anthony Ananich")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("*&")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("*&---------------------------------------------------------------------*")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("REPORT")]),t._v(" zworkato_api_endpoint_demo"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("DATA")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" lo_http_client "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("TYPE")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("REF")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("TO")]),t._v(" if_http_client"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      lo_rest_client "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("TYPE")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("REF")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("TO")]),t._v(" cl_rest_http_client"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      lv_url         "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("TYPE")]),t._v("        string"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      lv_body        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("TYPE")]),t._v("        string"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      exref          "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("TYPE")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("REF")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("TO")]),t._v(" cx_root"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      msgtxt         "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("TYPE")]),t._v(" string"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\ncl_http_client"),a("span",{pre:!0,attrs:{class:"token token-operator punctuation"}},[t._v("=>")]),t._v("create_by_destination"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("EXPORTING")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("destination")]),t._v("              "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'WORKATO_API'")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("* This should be configured to the name of your RFC destination made earlier.")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("IMPORTING")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("client")]),t._v("                   "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" lo_http_client\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("EXCEPTIONS")]),t._v("\n    argument_not_found       "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n    destination_not_found    "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v("\n    destination_no_authority "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),t._v("\n    plugin_not_active        "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),t._v("\n    internal_error           "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("OTHERS")]),t._v("                   "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("6")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("* If you are using cl_http_client=>create_by_url use this code to supress and pass your")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("* HTTP basic authenication")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("*  lo_http_client->propertytype_logon_popup = lo_http_client->co_disabled.")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("*  DATA l_username TYPE string.")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("*  DATA l_password TYPE string.")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("*  l_username = 'user'.")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("*  l_password = 'password'.")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("*  CALL METHOD lo_http_client->authenticate")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("*    EXPORTING")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("*      username = l_username")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("*      password = l_password.")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("CREATE")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("OBJECT")]),t._v(" lo_rest_client\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("EXPORTING")]),t._v("\n    io_http_client "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" lo_http_client"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\nlo_http_client"),a("span",{pre:!0,attrs:{class:"token token-operator punctuation"}},[t._v("->")]),t._v("request"),a("span",{pre:!0,attrs:{class:"token token-operator punctuation"}},[t._v("->")]),t._v("set_version"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" if_http_request"),a("span",{pre:!0,attrs:{class:"token token-operator punctuation"}},[t._v("=>")]),t._v("co_protocol_version_1_0 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("IF")]),t._v(" lo_http_client "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("IS")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("BOUND")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("AND")]),t._v(" lo_rest_client "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("IS")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("BOUND")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n  lv_url "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'sap-connection-demo-va0001/hello-workato'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n  cl_http_utility"),a("span",{pre:!0,attrs:{class:"token token-operator punctuation"}},[t._v("=>")]),t._v("set_request_uri"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("EXPORTING")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("request")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" lo_http_client"),a("span",{pre:!0,attrs:{class:"token token-operator punctuation"}},[t._v("->")]),t._v("request    "),a("span",{pre:!0,attrs:{class:"token eol-comment comment"}},[t._v('" HTTP Framework (iHTTP) HTTP Request')]),t._v("\n      uri     "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" lv_url                     "),a("span",{pre:!0,attrs:{class:"token eol-comment comment"}},[t._v('" URI String (in the Form of /path?query-string)')]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("* ABAP to JSON")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("TYPES")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("BEGIN")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("OF")]),t._v(" ty_json_req"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n           "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("id")]),t._v("      "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("TYPE")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("i")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n           "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("message")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("TYPE")]),t._v(" string"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n         "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("END")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("OF")]),t._v(" ty_json_req"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("DATA")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" json_req "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("TYPE")]),t._v(" ty_json_req"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n  json_req"),a("span",{pre:!0,attrs:{class:"token token-operator punctuation"}},[t._v("-")]),t._v("id "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("25252525")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n  json_req"),a("span",{pre:!0,attrs:{class:"token token-operator punctuation"}},[t._v("-")]),t._v("message "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Hello, Workato!'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("DATA")]),t._v(" lr_json_serializer "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("TYPE")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("REF")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("TO")]),t._v(" cl_trex_json_serializer"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n  lv_body "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" /ui2/cl_json"),a("span",{pre:!0,attrs:{class:"token token-operator punctuation"}},[t._v("=>")]),t._v("serialize"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("data")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" json_req "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("* Converted JSON should look like this")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v('* lv_body = \'{ "id":25252525, "message":"Hello, Workato!"}\'.')]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("DATA")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" lo_json        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("TYPE")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("REF")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("TO")]),t._v(" cl_clb_parse_json"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        lo_response    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("TYPE")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("REF")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("TO")]),t._v(" if_rest_entity"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        lo_request     "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("TYPE")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("REF")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("TO")]),t._v(" if_rest_entity"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        lv_reason      "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("TYPE")]),t._v("  string"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        response       "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("TYPE")]),t._v("  string"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        content_length "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("TYPE")]),t._v("  string"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        location       "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("TYPE")]),t._v("  string"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        content_type   "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("TYPE")]),t._v("  string"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        lv_rcode       "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("TYPE")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("i")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("* Set Payload or body ( JSON or XML)")]),t._v("\n  lo_request "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" lo_rest_client"),a("span",{pre:!0,attrs:{class:"token token-operator punctuation"}},[t._v("->")]),t._v("if_rest_client"),a("span",{pre:!0,attrs:{class:"token token-operator punctuation"}},[t._v("~")]),t._v("create_request_entity"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n  lo_request"),a("span",{pre:!0,attrs:{class:"token token-operator punctuation"}},[t._v("->")]),t._v("set_content_type"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" iv_media_type "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" if_rest_media_type"),a("span",{pre:!0,attrs:{class:"token token-operator punctuation"}},[t._v("=>")]),t._v("gc_appl_json "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n  lo_request"),a("span",{pre:!0,attrs:{class:"token token-operator punctuation"}},[t._v("->")]),t._v("set_string_data"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" lv_body "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("CALL")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("METHOD")]),t._v(" lo_rest_client"),a("span",{pre:!0,attrs:{class:"token token-operator punctuation"}},[t._v("->")]),t._v("if_rest_client"),a("span",{pre:!0,attrs:{class:"token token-operator punctuation"}},[t._v("~")]),t._v("set_request_header\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("EXPORTING")]),t._v("\n      iv_name  "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'API-TOKEN'")]),t._v("\n      iv_value "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'{YOUR WORKATO API-TOKEN HERE}'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("* Provide the API-token to your own api platform.")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("TRY")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("* POST")]),t._v("\n      lo_rest_client"),a("span",{pre:!0,attrs:{class:"token token-operator punctuation"}},[t._v("->")]),t._v("if_rest_resource"),a("span",{pre:!0,attrs:{class:"token token-operator punctuation"}},[t._v("~")]),t._v("post"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" lo_request "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("* Collect response")]),t._v("\n      lo_response "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" lo_rest_client"),a("span",{pre:!0,attrs:{class:"token token-operator punctuation"}},[t._v("->")]),t._v("if_rest_client"),a("span",{pre:!0,attrs:{class:"token token-operator punctuation"}},[t._v("~")]),t._v("get_response_entity"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n      lv_rcode "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" lo_response"),a("span",{pre:!0,attrs:{class:"token token-operator punctuation"}},[t._v("->")]),t._v("get_header_field"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'~status_code'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n      lv_reason "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" lo_response"),a("span",{pre:!0,attrs:{class:"token token-operator punctuation"}},[t._v("->")]),t._v("get_header_field"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'~status_reason'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n      content_length "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" lo_response"),a("span",{pre:!0,attrs:{class:"token token-operator punctuation"}},[t._v("->")]),t._v("get_header_field"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'content-length'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n      location "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" lo_response"),a("span",{pre:!0,attrs:{class:"token token-operator punctuation"}},[t._v("->")]),t._v("get_header_field"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'location'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n      content_type "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" lo_response"),a("span",{pre:!0,attrs:{class:"token token-operator punctuation"}},[t._v("->")]),t._v("get_header_field"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'content-type'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n      response "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" lo_response"),a("span",{pre:!0,attrs:{class:"token token-operator punctuation"}},[t._v("->")]),t._v("get_string_data"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("* JSON to ABAP")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("DATA")]),t._v(" lr_json_deserializer "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("TYPE")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("REF")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("TO")]),t._v(" cl_trex_json_deserializer"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("TYPES")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("BEGIN")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("OF")]),t._v(" ty_json_res"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n               job_id  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("TYPE")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("i")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n               job_url "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("TYPE")]),t._v(" string"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n             "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("END")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("OF")]),t._v(" ty_json_res"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("DATA")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" json_res "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("TYPE")]),t._v(" ty_json_res"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n      /ui2/cl_json"),a("span",{pre:!0,attrs:{class:"token token-operator punctuation"}},[t._v("=>")]),t._v("deserialize"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("EXPORTING")]),t._v(" json "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" response pretty_name "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" /ui2/cl_json"),a("span",{pre:!0,attrs:{class:"token token-operator punctuation"}},[t._v("=>")]),t._v("pretty_mode"),a("span",{pre:!0,attrs:{class:"token token-operator punctuation"}},[t._v("-")]),t._v("camel_case "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("CHANGING")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("data")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" json_res "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("WRITE")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("/ json_res"),a("span",{pre:!0,attrs:{class:"token token-operator punctuation"}},[t._v("-")]),t._v("job_url"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("CATCH")]),t._v(" cx_rest_client_exception "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("INTO")]),t._v(" exref"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n      msgtxt "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" exref"),a("span",{pre:!0,attrs:{class:"token token-operator punctuation"}},[t._v("->")]),t._v("get_text"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("CONCATENATE")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'[ERROR]'")]),t._v(" msgtxt "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("INTO")]),t._v(" msgtxt "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("SEPARATED")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("BY")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("space")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("WRITE")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("/ msgtxt"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("ENDTRY")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("ENDIF")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n")])])]),a("p",[t._v("With this ABAP code, you should be able to successfully call and trigger a job in your own Workato workspace using our API platform and an RFC in SAP.")])])}),[],!1,null,null,null);e.default=n.exports}}]);