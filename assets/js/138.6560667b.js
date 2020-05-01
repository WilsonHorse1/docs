(window.webpackJsonp=window.webpackJsonp||[]).push([[138],{2373:function(e,t,s){"use strict";s.r(t);var n=s(0),a=Object(n.a)({},(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("h1",{attrs:{id:"oracle-e-business-suite"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#oracle-e-business-suite"}},[e._v("#")]),e._v(" Oracle E-Business Suite")]),e._v(" "),n("p",[n("a",{attrs:{href:"http://www.oracle.com/us/products/applications/ebusiness/overview/index.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Oracle's E-Business Suite"),n("OutboundLink")],1),e._v(" (also known as Applications/Apps or EB-Suite/EBS), is a collection of enterprise resource planning (ERP), customer relationship management (CRM), and supply-chain management (SCM) computer applications that enables organizations of any size to operate and perform effectively.")]),e._v(" "),n("h2",{attrs:{id:"how-to-connect-to-oracle-e-business-suite-on-workato"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#how-to-connect-to-oracle-e-business-suite-on-workato"}},[e._v("#")]),e._v(" How to connect to Oracle E-Business Suite on Workato")]),e._v(" "),n("h3",{attrs:{id:"pre-requisites"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#pre-requisites"}},[e._v("#")]),e._v(" Pre-requisites")]),e._v(" "),n("ol",[n("li",[n("p",[e._v("Install "),n("a",{attrs:{href:"https://docs.oracle.com/cd/E26401_01/doc.122/e20925/T511175T578675.htm",target:"_blank",rel:"noopener noreferrer"}},[e._v("Oracle E-Business Suite Integrated SOA Gateway"),n("OutboundLink")],1)])]),e._v(" "),n("li",[n("p",[e._v("Install "),n("a",{attrs:{href:"https://www.workato.com/on_prem_groups",target:"_blank",rel:"noopener noreferrer"}},[e._v("Workato on-prem agent"),n("OutboundLink")],1)])]),e._v(" "),n("li",[n("p",[e._v("In the Oracle EBS, deploy User PL/SQL REST service (internal name: FND_USER_PKG) with name “user”. Below are the steps to install PL/SQL REST service")])])]),e._v(" "),n("p",[e._v("a. Login to Oracle EBS")]),e._v(" "),n("p",[e._v("b. From the main menu, click on "),n("em",[e._v("Integrated SOA Gateway")]),e._v(" > "),n("em",[e._v("Integration Repository")])]),e._v(" "),n("p",[n("DocImage",{attrs:{src:s(814),alt:"Oracle Applications Home page",width:"654",height:"957"}}),e._v(" "),n("em",[e._v("Oracle Applications home page")])],1),e._v(" "),n("p",[e._v("c. Click on "),n("strong",[e._v("Search")])]),e._v(" "),n("p",[n("DocImage",{attrs:{src:s(815),alt:"Search on page",width:"940",height:"212"}}),e._v(" "),n("em",[e._v("Click on Search")])],1),e._v(" "),n("p",[e._v('d. Search for interface name "user" and select the service with internal name '),n("strong",[e._v("FND_USER_PKG")])]),e._v(" "),n("p",[n("DocImage",{attrs:{src:s(816),alt:"Search for User",width:"940",height:"364"}}),e._v(" "),n("em",[e._v("Locate FND_USER_PKG")])],1),e._v(" "),n("p",[e._v("e. Go to the "),n("strong",[e._v("REST Web Services")]),e._v(' tab. Enter the service name as "user" and click on '),n("strong",[e._v("Deploy")]),e._v(".")]),e._v(" "),n("p",[n("DocImage",{attrs:{src:s(817),alt:"User service name",width:"940",height:"171"}}),e._v(" "),n("em",[e._v('Locate the REST web services and enter "user"')])],1),e._v(" "),n("h3",{attrs:{id:"establishing-the-connection-on-workato"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#establishing-the-connection-on-workato"}},[e._v("#")]),e._v(" Establishing the connection on Workato")]),e._v(" "),n("p",[e._v("Create the Oracle EBS connection from within the recipe "),n("strong",[e._v("Connections")]),e._v(" tab, or from the account "),n("a",{attrs:{href:"https://www.workato.com/connections",target:"_blank",rel:"noopener noreferrer"}},[e._v("connections page"),n("OutboundLink")],1),e._v(":")]),e._v(" "),n("p",[e._v("To create the connection, select "),n("strong",[e._v("Oracle E-Business Suite")]),e._v(", fill in the fields required, and click "),n("strong",[e._v("Connect")]),e._v(". At this point, Workato will make a simple “hello world” test to your Oracle EBS instance, using the REST service specified in "),n("strong",[e._v("User service name")]),e._v(" above.")]),e._v(" "),n("p",[e._v("If all goes well, you should get a green success message displayed next to the button.")]),e._v(" "),n("p",[n("DocImage",{attrs:{src:s(818),alt:"Oracle recipe",width:"888",height:"956"}}),e._v(" "),n("em",[e._v("Creating new Oracle E-Business Suite connection")])],1),e._v(" "),n("p",[e._v("Fields are as follows:")]),e._v(" "),n("ul",[n("li",[e._v("Connection name:")])]),e._v(" "),n("p",[e._v("Use something that identifies the specific Oracle EBS instance, e.g. “HR Sandbox”.")]),e._v(" "),n("ul",[n("li",[e._v("On-prem secure agent:")])]),e._v(" "),n("p",[e._v("If your Oracle EBS instance is not accessible directly from the Internet, Workato will need to connect to it via an "),n("router-link",{attrs:{to:"/on-prem.html"}},[e._v("on-premise agent")]),e._v(".  Select the appropriate, active on-premise agent that has network access to this Oracle EBS instance.")],1),e._v(" "),n("ul",[n("li",[e._v("Instance URL:")])]),e._v(" "),n("p",[e._v("The base URL where the REST services enabled on your Oracle SOA gateway can be accessed.")]),e._v(" "),n("ul",[n("li",[e._v("Username:")])]),e._v(" "),n("p",[e._v("The username that Workato will use to access the REST services on your Oracle SOA gateway.")]),e._v(" "),n("ul",[n("li",[e._v("Password:")])]),e._v(" "),n("p",[e._v("Corresponding password for the above username.")]),e._v(" "),n("ul",[n("li",[e._v("User service name:")])]),e._v(" "),n("p",[e._v("This is used only to test connectivity.")])])}),[],!1,null,null,null);t.default=a.exports},814:function(e,t,s){e.exports=s.p+"assets/img/oracle-applications.a09b1281.png"},815:function(e,t,s){e.exports=s.p+"assets/img/search.76f8a774.png"},816:function(e,t,s){e.exports=s.p+"assets/img/interface.75ea05a7.png"},817:function(e,t,s){e.exports=s.p+"assets/img/web-service.46c9240d.png"},818:function(e,t,s){e.exports=s.p+"assets/img/oracle-recipe.bc76e394.jpg"}}]);