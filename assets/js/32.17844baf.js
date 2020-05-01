(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{189:function(t,e,o){t.exports=o.p+"assets/img/verify-password.ef9d3886.png"},190:function(t,e,o){t.exports=o.p+"assets/img/trusted-devices.c473365c.png"},1919:function(t,e,o){t.exports=o.p+"assets/img/2fa-request.0c0c7e62.png"},1920:function(t,e,o){t.exports=o.p+"assets/img/account-setting-before-activation.069a3fe9.png"},1921:function(t,e,o){t.exports=o.p+"assets/img/setup-2fa.70e6874b.png"},1922:function(t,e,o){t.exports=o.p+"assets/img/google-authenticator-workato.cf9d493c.png"},1923:function(t,e,o){t.exports=o.p+"assets/img/setup-2fa-input.e1fee784.png"},1924:function(t,e,o){t.exports=o.p+"assets/img/setup-2fa-codes.afaf184c.png"},1925:function(t,e,o){t.exports=o.p+"assets/img/account-setting-activated.cb7e4ced.png"},1926:function(t,e,o){t.exports=o.p+"assets/img/disable-2fa.125ea6f7.png"},1927:function(t,e,o){t.exports=o.p+"assets/img/recovery-screen.0c57d701.png"},1928:function(t,e,o){t.exports=o.p+"assets/img/2fa-regenerate-codes.ffc519c9.png"},1929:function(t,e,o){t.exports=o.p+"assets/img/trust-this-device.9f267cb3.png"},2758:function(t,e,o){"use strict";o.r(e);var r=o(0),a=Object(r.a)({},(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h1",{attrs:{id:"two-factor-authentication"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#two-factor-authentication"}},[t._v("#")]),t._v(" Two-Factor Authentication")]),t._v(" "),r("p",[t._v("Two-Factor Authentication (2FA) is an industry standard for multi-layered authentication. It requires two separate methods of verifying your identity by requesting something you know (ID and password) and something you have (an "),r("strong",[t._v("authenticator app")]),t._v(" on your phone). This provides an additional layer of security and ensures that no one else has access your Workato account.")]),t._v(" "),r("h3",{attrs:{id:"how-it-works"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#how-it-works"}},[t._v("#")]),t._v(" How it works")]),t._v(" "),r("p",[t._v("Upon logging in with your ID and password, Workato will request authentication through an "),r("strong",[t._v("authenticator app")]),t._v(".")]),t._v(" "),r("p",[r("DocImage",{attrs:{src:o(1919),alt:"Workato requesting two-factor authentication",width:"1554",height:"1224"}}),t._v(" "),r("em",[t._v("Workato requesting two-factor authentication")])],1),t._v(" "),r("p",[t._v("A unique verification code is generated for you whenever you login to your Workato account. It is a temporary 6-digit code that lets us know it is indeed "),r("em",[t._v("you")]),t._v(". Afterwards, the code will expire and cannot be reused.")]),t._v(" "),r("h3",{attrs:{id:"choose-an-authenticator-app"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#choose-an-authenticator-app"}},[t._v("#")]),t._v(" Choose an authenticator app")]),t._v(" "),r("p",[t._v("Workato allows authentication through mobile applications. Some of the common ones are:")]),t._v(" "),r("ul",[r("li",[t._v("Google Authenticator ("),r("a",{attrs:{href:"https://itunes.apple.com/us/app/google-authenticator/id388497605",target:"_blank",rel:"noopener noreferrer"}},[t._v("iOS"),r("OutboundLink")],1),t._v(" or "),r("a",{attrs:{href:"https://play.google.com/store/apps/details?id=com.google.android.apps.authenticator2&",target:"_blank",rel:"noopener noreferrer"}},[t._v("Android"),r("OutboundLink")],1),t._v(")")]),t._v(" "),r("li",[t._v("Authy ("),r("a",{attrs:{href:"https://itunes.apple.com/us/app/authy/id494168017",target:"_blank",rel:"noopener noreferrer"}},[t._v("iOS"),r("OutboundLink")],1),t._v(" or "),r("a",{attrs:{href:"https://play.google.com/store/apps/details?id=com.authy.authy",target:"_blank",rel:"noopener noreferrer"}},[t._v("Android"),r("OutboundLink")],1),t._v(")")]),t._v(" "),r("li",[t._v("Microsoft Authenticator ("),r("a",{attrs:{href:"https://itunes.apple.com/sg/app/microsoft-authenticator/id983156458",target:"_blank",rel:"noopener noreferrer"}},[t._v("iOS"),r("OutboundLink")],1),t._v(" or "),r("a",{attrs:{href:"https://play.google.com/store/apps/details?id=com.azure.authenticator",target:"_blank",rel:"noopener noreferrer"}},[t._v("Android"),r("OutboundLink")],1),t._v(")")])]),t._v(" "),r("h3",{attrs:{id:"setup-two-factor-authentication"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#setup-two-factor-authentication"}},[t._v("#")]),t._v(" Setup two-factor authentication")]),t._v(" "),r("p",[t._v("Let's go through the activation for two-factor authentication. You will need to be logged in to your Workato account and have your "),r("a",{attrs:{href:"https://www.pcworld.com/article/3225913/what-is-two-factor-authentication-and-which-2fa-apps-are-best.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("authenticator app"),r("OutboundLink")],1),t._v(" ready. In this example, we will be using "),r("strong",[t._v("Google Authenticator")]),t._v(".")]),t._v(" "),r("table",{staticClass:"unchanged rich-diff-level-one"},[r("thead",[r("tr",[r("th",{attrs:{width:"10%"}},[t._v("Step")]),t._v(" "),r("th",[t._v("Description")])])]),t._v(" "),r("tbody",[r("tr",[r("td",[t._v("1")]),t._v(" "),r("td",[t._v("\n        Open "),r("b",[t._v("Account Setting")]),t._v("."),r("br"),t._v(" "),r("br"),t._v(" "),r("img",{attrs:{src:o(283)}}),r("br"),t._v(" "),r("i",[t._v("Profile dropdown")]),r("br")])]),t._v(" "),r("tr",[r("td",[t._v("2")]),t._v(" "),r("td",[t._v("\n        Select "),r("b",[t._v("Two-factor authentication")]),t._v(" > "),r("b",[t._v("Setup two-factor authentication")]),r("br"),t._v(" "),r("br"),t._v(" "),r("img",{attrs:{src:o(1920)}}),r("br"),t._v(" "),r("i",[t._v("Two-factor authentication disabled")]),r("br")])]),t._v(" "),r("tr",[r("td",[t._v("3")]),t._v(" "),r("td",[t._v("\n        If prompted to verify your password, input your password and click "),r("b",[t._v("verify password")]),t._v(". Find out why "),r("a",{attrs:{href:"#why-verify-password"}},[t._v("here")]),t._v("."),r("br"),t._v(" "),r("br"),t._v(" "),r("img",{attrs:{src:o(189)}}),r("br"),t._v(" "),r("i",[t._v("Verify your password")]),r("br")])]),t._v(" "),r("tr",[r("td",[t._v("4")]),t._v(" "),r("td",[t._v("\n        Using Google authenticator, "),r("b",[t._v("scan")]),t._v(" the QR code. Otherwise, you can register with the code provided ."),r("br"),t._v(" "),r("br"),t._v(" "),r("img",{attrs:{src:o(1921)}}),r("br"),t._v(" "),r("i",[t._v("Two-factor authentication setup")]),r("br")])]),t._v(" "),r("tr",[r("td",[t._v("5")]),t._v(" "),r("td",[t._v("\n        Copy the 6-digit "),r("b",[t._v("verification code")]),t._v(" from Google authenticator to the Workato setup."),r("br"),t._v(" "),r("br"),t._v(" "),r("img",{attrs:{src:o(1922)}}),r("br"),t._v(" "),r("i",[t._v("Google authenticator unique verification code")]),r("br"),t._v(" "),r("br"),t._v("\n        The "),r("code",[t._v("Workato")]),t._v(" label and "),r("code",[t._v("profile name")]),t._v(" lets you know that the connection between Google authenticator and Workato platform is functioning properly."),r("br"),t._v(" "),r("br"),t._v(" "),r("img",{attrs:{src:o(1923)}}),r("br"),t._v(" "),r("i",[t._v("Confirming authenticator app with Workato account")]),r("br")])]),t._v(" "),r("tr",[r("td",[t._v("6")]),t._v(" "),r("td",[t._v("\n        Save or "),r("code",[t._v("download")]),t._v(" a copy of the "),r("b",[t._v("recovery codes")]),t._v("."),r("br"),t._v(" "),r("br"),t._v(" "),r("img",{attrs:{src:o(1924)}}),r("br"),t._v(" "),r("i",[t._v("Recovery codes")]),r("br"),t._v(" "),r("br"),t._v("\n        Remember to store them in a secure location. Find out more about recovery codes "),r("a",{attrs:{href:"#recovery-codes"}},[t._v("here")]),t._v("."),r("br")])]),t._v(" "),r("tr",[r("td",[t._v("7")]),t._v(" "),r("td",[t._v("\n        Done! You have completed the one-time setup of your Workato two-factor authentication."),r("br"),t._v(" "),r("br"),t._v(" "),r("img",{attrs:{src:o(1925)}}),r("br"),t._v(" "),r("i",[t._v("Two-factor authentication enabled")]),r("br")])])])]),t._v(" "),r("h3",{attrs:{id:"disable-two-factor-authentication"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#disable-two-factor-authentication"}},[t._v("#")]),t._v(" Disable two-factor authentication")]),t._v(" "),r("p",[t._v("In certain situations, you would have to disable your two-factor authentication. For example, in the event of a stolen device or switching to a new work device.")]),t._v(" "),r("table",{staticClass:"unchanged rich-diff-level-one"},[r("thead",[r("tr",[r("th",{attrs:{width:"10%"}},[t._v("Step")]),t._v(" "),r("th",[t._v("Description")])])]),t._v(" "),r("tbody",[r("tr",[r("td",[t._v("1")]),t._v(" "),r("td",[t._v("\n        Open "),r("b",[t._v("Account Setting")]),t._v("."),r("br"),t._v(" "),r("br"),t._v(" "),r("img",{attrs:{src:o(283)}}),r("br"),t._v(" "),r("i",[t._v("Profile dropdown")]),r("br")])]),t._v(" "),r("tr",[r("td",[t._v("2")]),t._v(" "),r("td",[t._v("\n        Select "),r("b",[t._v("Two-factor authentication")]),t._v(" > "),r("b",[t._v("Disable two-factor authentication")]),r("br"),t._v(" "),r("br"),t._v(" "),r("img",{attrs:{src:o(190)}}),r("br"),t._v(" "),r("i",[t._v("Two-factor authentication")]),r("br"),t._v(" "),r("br"),t._v(" "),r("blockquote",[t._v("This will remove the "),r("b",[t._v("all trusted devices")]),t._v(" that were logged in with the authenticator app.")])])]),t._v(" "),r("tr",[r("td",[t._v("3")]),t._v(" "),r("td",[t._v("\n        If prompted to verify your password, input your password and click "),r("b",[t._v("verify password")]),t._v(". Find out why "),r("a",{attrs:{href:"#why-verify-password"}},[t._v("here")]),t._v("."),r("br"),t._v(" "),r("br"),t._v(" "),r("img",{attrs:{src:o(189)}}),r("br"),t._v(" "),r("i",[t._v("Verify your password")]),r("br")])]),t._v(" "),r("tr",[r("td",[t._v("4")]),t._v(" "),r("td",[t._v("\n        Click "),r("b",[t._v("Disable 2FA")]),t._v("."),r("br"),t._v(" "),r("br"),t._v(" "),r("img",{attrs:{src:o(1926)}}),r("br"),t._v(" "),r("i",[t._v("Disable two-factor authentication")]),r("br")])])])]),t._v(" "),r("h3",{attrs:{id:"recovery-codes"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#recovery-codes"}},[t._v("#")]),t._v(" Recovery codes")]),t._v(" "),r("p",[t._v("Recovery codes are alphanumeric strings that are uniquely tied to your Workato account. You can use the recovery code to verify your identity in place of the 6-digit verification code. Every recovery code can be use "),r("strong",[t._v("only once")]),t._v(".")]),t._v(" "),r("p",[r("DocImage",{attrs:{src:o(1927),alt:"Using recovery code",width:"1554",height:"1224"}}),t._v(" "),r("em",[t._v("Using recovery code")])],1),t._v(" "),r("p",[t._v("A list of 12 recovery codes are auto-generated at the two-factor authentication setup. You should store them in a secure location, preferably not in the same location as your authenticator app ("),r("em",[t._v("i.e. not on your phone")]),t._v(").")]),t._v(" "),r("h4",{attrs:{id:"lost-authentication-device"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#lost-authentication-device"}},[t._v("#")]),t._v(" Lost authentication device")]),t._v(" "),r("p",[t._v("If you deleted your app, changed or lost your device (or security key), you can still access your Workato account. You can use a recovery code to perform two-factor authentication.")]),t._v(" "),r("p",[t._v("Upon logging in, you are advised to "),r("strong",[t._v("reset")]),t._v(" your two-factor authentication settings. By changing the two-factor authentication setting, you are preventing unwanted access to your account thru a stolen device. This also reconfigures two-factor authentication to your new device.")]),t._v(" "),r("p",[t._v("First, "),r("a",{attrs:{href:"#disable-two-factor-authentication"}},[t._v("disable two-factor authentication")]),t._v(". Next, "),r("a",{attrs:{href:"#setup-two-factor-authentication"}},[t._v("setup two-factor authentication")]),t._v(" with your new device.")]),t._v(" "),r("h4",{attrs:{id:"lost-recovery-codes"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#lost-recovery-codes"}},[t._v("#")]),t._v(" Lost recovery codes")]),t._v(" "),r("p",[t._v("If you have not stored your recovery codes or have accidentally deleted them, you can retrieve them from your two-factor authentication setup.")]),t._v(" "),r("p",[t._v("To view your recovery codes, go to  "),r("strong",[t._v("Account settings")]),t._v(" > "),r("strong",[t._v("Two-factor authentication")]),t._v(" > "),r("strong",[t._v("View recovery codes")]),t._v(".")]),t._v(" "),r("p",[r("DocImage",{attrs:{src:o(190),alt:"View recovery codes",width:"1304",height:"725"}}),t._v(" "),r("em",[t._v("View recovery codes")])],1),t._v(" "),r("p",[t._v("You are advised to store them in a secure but accessible location.")]),t._v(" "),r("h4",{attrs:{id:"generate-new-recovery-codes"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#generate-new-recovery-codes"}},[t._v("#")]),t._v(" Generate new recovery codes")]),t._v(" "),r("p",[t._v("If you realised that you have misplaced your recovery codes, we advise that you generate a new set. Remember that other people can use the recovery codes to access to your Workato account!")]),t._v(" "),r("p",[t._v("You can also generate new recovery codes if they are depleting. Using the "),r("strong",[t._v("single-use")]),t._v(" recovery codes for two-factor authentication will reduce the total number of available codes. Generating a new set of recovery codes will ensure that you never get locked out of your Workato account.")]),t._v(" "),r("p",[t._v("Select "),r("strong",[t._v("Account settings")]),t._v(" > "),r("strong",[t._v("Two-factor authentication")]),t._v(" > "),r("strong",[t._v("View recovery codes")]),t._v(" > "),r("strong",[t._v("Regenerate recovery codes")])]),t._v(" "),r("p",[r("DocImage",{attrs:{src:o(1928),alt:"Generate new recovery codes",width:"1304",height:"725"}}),t._v(" "),r("em",[t._v("Generate new recovery codes")])],1),t._v(" "),r("h3",{attrs:{id:"trusted-devices"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#trusted-devices"}},[t._v("#")]),t._v(" Trusted devices")]),t._v(" "),r("p",[t._v("You can temporarily disable two-factor authentication for trusted devices, like a secured work laptop. This allows the device to login without two-factor authentication for 30 days.")]),t._v(" "),r("p",[t._v("Select "),r("strong",[t._v("trust this device")]),t._v(" during the two-factor authentication process.")]),t._v(" "),r("p",[r("DocImage",{attrs:{src:o(1929),alt:"Trust this device for 30 days",width:"1554",height:"1224"}}),t._v(" "),r("em",[t._v("Trust this device for 30 days")])],1),t._v(" "),r("p",[t._v("Your trusted devices will appear on the "),r("strong",[t._v("two-factor authentication")]),t._v(" setting's page. You can revoke access to devices you do not recognize or to devices that are no longer in use.")]),t._v(" "),r("p",[r("DocImage",{attrs:{src:o(190),alt:"Trusted devices",width:"1304",height:"725"}}),t._v(" "),r("em",[t._v("Trusted devices")])],1),t._v(" "),r("h3",{attrs:{id:"why-verify-password"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#why-verify-password"}},[t._v("#")]),t._v(" Why verify password")]),t._v(" "),r("p",[t._v("When initiating changes in your account security settings, Workato will ask you for your password as an additional layer of authentication. This applies when making changes to your two-factor authentication configuration, which includes enabling two-factor authentication and viewing recovery codes.")]),t._v(" "),r("p",[r("DocImage",{attrs:{src:o(189),alt:"Verify password",width:"1304",height:"725"}}),t._v(" "),r("em",[t._v("Verify password")])],1),t._v(" "),r("blockquote",[r("p",[t._v("After you have verified your password, we will not ask again in the next 15 mins.")])])])}),[],!1,null,null,null);e.default=a.exports},283:function(t,e,o){t.exports=o.p+"assets/img/profile-dropdown.5f6c3970.png"}}]);