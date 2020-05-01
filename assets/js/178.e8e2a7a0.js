(window.webpackJsonp=window.webpackJsonp||[]).push([[178],{2035:function(t,e,a){t.exports=a.p+"assets/img/block-kit-preview.8bdb9099.png"},2036:function(t,e,a){t.exports=a.p+"assets/img/block-kit-preview-example.1bddbd58.png"},2037:function(t,e,a){t.exports=a.p+"assets/img/blocks-with-message-attachments.7aedff2f.png"},2038:function(t,e,a){t.exports=a.p+"assets/img/message-text.655ad131.png"},2787:function(t,e,a){"use strict";a.r(e);var s=a(0),i=Object(s.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"block-kit-in-workbot-for-slack"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#block-kit-in-workbot-for-slack"}},[t._v("#")]),t._v(" Block kit in Workbot for Slack")]),t._v(" "),s("p",[s("a",{attrs:{href:"https://api.slack.com/block-kit",target:"_blank",rel:"noopener noreferrer"}},[t._v("Block Kit"),s("OutboundLink")],1),t._v(" is Slack's UI framework that allows more control and flexibility when building messages for Slack.")]),t._v(" "),s("p",[t._v('You can stack "blocks" and customize the order and appearance of each block, as well as the elements within each block. The table below shows the different types of blocks and the actions which support them.')]),t._v(" "),s("p",[t._v("Blocks can be used in the following Slack surfaces:")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("Surface")]),t._v(" "),s("th",[t._v("Applicable actions")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("Messages")]),t._v(" "),s("td",[t._v("Post message, post command reply")])]),t._v(" "),s("tr",[s("td",[t._v("Modals")]),t._v(" "),s("td",[t._v("Open/update or push modal")])])])]),t._v(" "),s("h1",{attrs:{id:"block-kit-previewer"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#block-kit-previewer"}},[t._v("#")]),t._v(" Block kit previewer")]),t._v(" "),s("p",[t._v("Preview the messages you've built with the Post message or Post command reply actions by clicking on "),s("strong",[t._v("See preview on block kit builder")]),t._v(" in the block hint.")]),t._v(" "),s("p",[s("DocImage",{attrs:{src:a(2035),alt:"Block kit preview",width:"2800",height:"1000"}}),t._v(" "),s("em",[t._v("Block kit preview link")])],1),t._v(" "),s("p",[s("DocImage",{attrs:{src:a(2036),alt:"Block kit preview example",width:"2880",height:"1594"}}),t._v(" "),s("em",[t._v("Placeholder info in block kit preview")])],1),t._v(" "),s("h1",{attrs:{id:"compatibility-with-message-attachments"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#compatibility-with-message-attachments"}},[t._v("#")]),t._v(" Compatibility with message attachments")]),t._v(" "),s("p",[t._v("Post message and post command reply previously used message attachments to construct messages. Blocks can be used together with message attachments.")]),t._v(" "),s("p",[t._v("You can optionally provide secondary attachments, which will display "),s("em",[t._v("below")]),t._v(" any defined blocks.")]),t._v(" "),s("h2",{attrs:{id:"behavior-of-blocks-when-used-with-message-attachments"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#behavior-of-blocks-when-used-with-message-attachments"}},[t._v("#")]),t._v(" Behavior of blocks when used with message attachments")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("When both blocks and message attachments are defined, blocks will always appear above message attachments.\n"),s("DocImage",{attrs:{src:a(2037),alt:"Blocks with message attachments",width:"1000",height:"522"}})],1)]),t._v(" "),s("li",[s("p",[t._v("When any blocks are defined, any input in the "),s("strong",[t._v("Message text")]),t._v(" field will be used as the Slack notification message.")])])]),t._v(" "),s("p",[s("DocImage",{attrs:{src:a(2038),alt:"Message text",width:"2800",height:"1098"}})],1),t._v(" "),s("h1",{attrs:{id:"supported-blocks"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#supported-blocks"}},[t._v("#")]),t._v(" Supported blocks")]),t._v(" "),s("p",[t._v("Supported blocks are displayed in the table below.")]),t._v(" "),s("table",[s("tr",[s("th",[t._v("Blocks")]),t._v(" "),s("th",[t._v("Description")])]),t._v(" "),s("tr",[s("td",[t._v("Section with text")]),t._v(" "),s("td",[t._v("Displays text.")])]),t._v(" "),s("tr",[s("td",[t._v("Section with image")]),t._v(" "),s("td",[t._v("Displays text alongside an image thumbnail.")])]),t._v(" "),s("tr",[s("td",[t._v("Section with button")]),t._v(" "),s("td",[t._v("Displays text alongside a button. "),s("br"),s("br"),t._v("On button submission, a button invokes another recipe and passes on any command input values it has.")])]),t._v(" "),s("tr",[s("td",[t._v("Section with fields")]),t._v(" "),s("td",[t._v("Displays text, along with an array of title-value fields, rendered in 2 columns beneath the section text. Maximum number of fields is 10. Maximum length for the text in each field is 2000 characters.")])]),t._v(" "),s("tr",[s("td",[t._v("Section with select menu")]),t._v(" "),s("td",[t._v("Displays text, alongside a select menu. Supports Slack's built-in dynamic menus such as Select user, Select conversation, Select channel. You can also define your own custom dynamic menu."),s("br"),s("br"),t._v("On submission, a menu option invokes another recipe and passes on any command input values it has.")])]),t._v(" "),s("tr",[s("td",[t._v("Section with overflow menu")]),t._v(" "),s("td",[t._v("Displays text, alongside an overflow menu. Supports static or dynamically generated overflow menu options."),s("br"),s("br"),t._v("On submission, an overflow menu option invokes another recipe and passes on any command input values it has.")])]),t._v(" "),s("tr",[s("td",[t._v("Section with date picker")]),t._v(" "),s("td",[t._v("Displays text, alongside a date picker."),s("br"),s("br"),t._v("On date selection, a date picker invokes another recipe and passes on the selected date via a date parameter. You can customize the name of this date parameter."),s("br"),s("br"),t._v("You can optionally pass additional command input values together with the date parameter.")])]),t._v(" "),s("tr",[s("td",[t._v("Repeat block group")]),t._v(" "),s("td",[t._v("\n      This a special block type that's available only on the Workato bot platform. The repeat block group allows you to define a set of blocks to use as a pattern. By iterating through an existing list and mapping the list fields to the fields of the blocks in the pattern, you can dynamically generate repeat blocks.\n    ")])]),t._v(" "),s("tr",[s("td",[t._v("Divider")]),t._v(" "),s("td",[t._v("A content divider, like an <hr>, used to split up different blocks inside of a message.")])]),t._v(" "),s("tr",[s("td",[t._v("Image")]),t._v(" "),s("td",[t._v("Displays an image using a provided public URL.")])]),t._v(" "),s("tr",[s("td",[t._v("Actions")]),t._v(" "),s("td",[t._v("A block that can hold multiple interactive elements like buttons, overflow menus, select menus, and date pickers.")])]),t._v(" "),s("tr",[s("td",[t._v("Context")]),t._v(" "),s("td",[t._v("Displays message context, which can include both images and texts. All images and texts will be joined together into a single string, in the order they appear in.")])])]),t._v(" "),s("h1",{attrs:{id:"limitations"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#limitations"}},[t._v("#")]),t._v(" Limitations")]),t._v(" "),s("ul",[s("li",[t._v("Include up to 100 blocks in each message.")])])])}),[],!1,null,null,null);e.default=i.exports}}]);