(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{2100:function(e,t,s){e.exports=s.p+"assets/img/anatomy-of-a-command-reply-1.c3404145.gif"},2101:function(e,t,s){e.exports=s.p+"assets/img/create-issue-github-1.801e13bf.png"},2102:function(e,t,s){e.exports=s.p+"assets/img/command-reply-1.cdbab047.png"},2103:function(e,t,s){e.exports=s.p+"assets/img/getting-started-with-command-reply-1.c654522c.png"},2104:function(e,t,s){e.exports=s.p+"assets/img/command-reply-datapills-1.353d67e0.png"},2105:function(e,t,s){e.exports=s.p+"assets/img/command-reply-collapsed-1.653cbc4b.png"},2106:function(e,t,s){e.exports=s.p+"assets/img/message-attachments-expanded-1.73ab338f.png"},2107:function(e,t,s){e.exports=s.p+"assets/img/command-reply-explained-1.4b3968d8.png"},2108:function(e,t,s){e.exports=s.p+"assets/img/message-format-expanded-with-fields-1.2e03264c.png"},2109:function(e,t,s){e.exports=s.p+"assets/img/github-create-issue-1.ad91031c.png"},2110:function(e,t,s){e.exports=s.p+"assets/img/github-enter-description-1.2b806403.png"},2111:function(e,t,s){e.exports=s.p+"assets/img/github-enter-assignee-1.6a589f9e.png"},2112:function(e,t,s){e.exports=s.p+"assets/img/github-command-reply-1.a275ad06.png"},2796:function(e,t,s){"use strict";s.r(t);var a=s(0),o=Object(a.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"creating-a-command-reply"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#creating-a-command-reply"}},[e._v("#")]),e._v(" Creating a Command Reply")]),e._v(" "),a("h3",{attrs:{id:"what-is-a-command-reply"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#what-is-a-command-reply"}},[e._v("#")]),e._v(" What is a command reply?")]),e._v(" "),a("p",[e._v("A Command Reply is how Workbot responds to the user on Slack "),a("em",[e._v("after")]),e._v(" it has received a command and completed the necessary actions. If it's your first time here, you may want to read up on "),a("router-link",{attrs:{to:"/workbot/workbot-commands.html"}},[e._v("creating a command")]),e._v(" first.")],1),e._v(" "),a("p",[e._v("In practice, you should always pair a command with a command reply (in your recipe), because you want your users to be updated on the success (or failure) of the recipe actions.")]),e._v(" "),a("p",[e._v("If you're here after just "),a("router-link",{attrs:{to:"/workbot/workbot-commands.html"}},[e._v("completing your first command")]),e._v(", great job on getting this far! In this exercise, we'll be using the same recipe as before - "),a("a",{attrs:{href:"https://www.workato.com/recipes/663926-create-an-issue-on-github-from-slack-using-workbot#recipe",target:"_blank",rel:"noopener noreferrer"}},[e._v("creating an issue in Github from Slack"),a("OutboundLink")],1),e._v(" using a Workbot command.")],1),e._v(" "),a("p",[a("DocImage",{attrs:{src:s(2100),alt:"Workbot Command trigger and the Command response diagram",width:"712",height:"408"}}),e._v(" "),a("em",[e._v("Anatomy of a Command reply")])],1),e._v(" "),a("p",[e._v("The "),a("a",{attrs:{href:"https://www.workato.com/recipes/663926-create-an-issue-on-github-from-slack-using-workbot#recipe",target:"_blank",rel:"noopener noreferrer"}},[e._v("recipe"),a("OutboundLink")],1),e._v(" we're working with creates an issue in Github based on inputs provided to Workbot in the command. Here's how they're mapped:")]),e._v(" "),a("p",[a("DocImage",{attrs:{src:s(2101),alt:"Creating an issue in Github",width:"1416",height:"1280"}}),e._v(" "),a("em",[e._v("We've used the user input datapills to form the Issue title, Body, and Assignee of the issue. More on this "),a("router-link",{attrs:{to:"/workbot/workbot-commands.html#command-input-fields"}},[e._v("here.")])],1)],1),e._v(" "),a("p",[e._v("You can set the Organization and Repository of your choice - this is where Workbot will create new Github issues.")]),e._v(" "),a("p",[e._v("As we've mentioned before, we want Workbot to reply to the user "),a("em",[e._v("after")]),e._v(" it has finished creating the issue in Github, furnished with some details.")]),e._v(" "),a("p",[a("DocImage",{attrs:{src:s(2102),alt:"Command Reply",width:"1272",height:"296"}})],1),e._v(" "),a("p",[e._v("The Slack message above is how we want Workbot's command reply (to the user) to look like after successfully creating the rather unfortunate issue above in Github. Now that we know what we want to do, let's get cracking!")]),e._v(" "),a("h3",{attrs:{id:"getting-started"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#getting-started"}},[e._v("#")]),e._v(" Getting Started")]),e._v(" "),a("p",[e._v("In the "),a("a",{attrs:{href:"https://www.workato.com/recipes/663926-create-an-issue-on-github-from-slack-using-workbot#recipe",target:"_blank",rel:"noopener noreferrer"}},[e._v("recipe"),a("OutboundLink")],1),e._v(', after the "Create issue in Github" action step,')]),e._v(" "),a("ol",[a("li",[e._v("Add a new step and choose "),a("strong",[e._v("Action")]),e._v(".")]),e._v(" "),a("li",[e._v("Under "),a("strong",[e._v("Application")]),e._v(", choose "),a("strong",[e._v("Workbot for Slack")])]),e._v(" "),a("li",[e._v("Under "),a("strong",[e._v("Action")]),e._v(", choose "),a("strong",[e._v("Post command reply")]),e._v(".")])]),e._v(" "),a("p",[e._v("How it should look like at this point:")]),e._v(" "),a("p",[a("DocImage",{attrs:{src:s(2103),alt:"Getting started with command reply",width:"980",height:"616"}})],1),e._v(" "),a("p",[e._v("Now we're ready to start formatting the message!")]),e._v(" "),a("h3",{attrs:{id:"message-text"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#message-text"}},[e._v("#")]),e._v(" Message text")]),e._v(" "),a("p",[a("strong",[e._v("Message text")]),e._v(": Issue "),a("kbd",[e._v("Number")]),e._v(" created\nThe message text is the simplest message that Workbot can reply with in a Slack message. Here we use the "),a("kbd",[e._v("Number")]),e._v(" datapill in the previous step's output datatree.\n"),a("DocImage",{attrs:{src:s(2104),alt:"Command Reply datapills",width:"594",height:"618"}})],1),e._v(" "),a("h3",{attrs:{id:"message-attachments"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#message-attachments"}},[e._v("#")]),e._v(" Message attachments")]),e._v(" "),a("p",[e._v("Next, you should see a list of collapsed fields:")]),e._v(" "),a("p",[a("DocImage",{attrs:{src:s(2105),alt:"Command reply collapsed",width:"826",height:"1032"}})],1),e._v(" "),a("p",[e._v("We want to focus on "),a("strong",[e._v("Message attachment")]),e._v(" for now. The rest of the fields like "),a("strong",[e._v("Buttons")]),e._v(" and "),a("strong",[e._v("Message menu")]),e._v(" make your command reply a "),a("em",[e._v("lot")]),e._v(" more interactive, but we can keep things simple for now.")]),e._v(" "),a("p",[e._v("Expand the "),a("strong",[e._v("Message Attachments")]),e._v(" input fields:")]),e._v(" "),a("p",[a("DocImage",{attrs:{src:s(2106),alt:"Message attachment expanded",width:"836",height:"1040"}}),e._v(" "),a("em",[e._v("Message attachment expanded")])],1),e._v(" "),a("p",[e._v("There are a lot of fields here, but to achieve our goal for this exercise, we only need to focus on 4 fields:")]),e._v(" "),a("ol",[a("li",[a("strong",[e._v("Title")])]),e._v(" "),a("li",[a("strong",[e._v("Title Link")])]),e._v(" "),a("li",[a("strong",[e._v("Attachment text")])]),e._v(" "),a("li",[a("strong",[e._v("Attachment Color")])])]),e._v(" "),a("p",[a("DocImage",{attrs:{src:s(2107),alt:"Command reply explained",width:"1272",height:"296"}}),e._v(" "),a("em",[e._v("Command reply explained")])],1),e._v(" "),a("p",[e._v("Here's what we want to fill up in these 4 fields:")]),e._v(" "),a("table",{staticClass:"unchanged rich-diff-level-one"},[a("tbody",[a("tr",[a("th",[e._v("Input field")]),e._v(" "),a("th",[e._v("Value")]),e._v(" "),a("th",[e._v("Description")])]),e._v(" "),a("tr",[a("td",[e._v("Title")]),e._v(" "),a("td",[e._v("Name of issue: "),a("kbd",[e._v("Title")])]),e._v(" "),a("td",[e._v("\n          Here we use the "),a("kbd",[e._v("Title")]),e._v(' datapill from the Command trigger output (in step 2). Back in the ["Creating a command"](/workbot/workbot-commands.md#command-input-fields) guide, we defined **Issue** as a user input field that users can provide in Slack. Now that the issue has been created, '),a("kbd",[e._v("Title")]),e._v(" can be used in subsequent action steps - this is how we're letting users populate Github issue fields from Slack!\n          ")])]),e._v(" "),a("tr",[a("td",[e._v("Title link")]),e._v(" "),a("td",[a("kbd",[e._v("URL")])]),e._v(" "),a("td",[e._v("\n            Here we take the "),a("kbd",[e._v("URL")]),e._v(" of the created issue. It's yet another output datapill from the issue creation in Github.\n          ")])]),e._v(" "),a("tr",[a("td",[e._v("Attachment text")]),e._v(" "),a("td",[e._v("\n            Description: "),a("kbd",[e._v("Body")]),a("br"),e._v("Assignee: "),a("kbd",[e._v("Username")]),a("br")]),e._v(" "),a("td",[e._v("\n            Just like with "),a("kbd",[e._v("Title")]),e._v(", we're using the datapills of the created Github issue output.\n          ")])]),a("tr",[a("td",[e._v("Attachment color")]),e._v(" "),a("td",[e._v("Good")]),e._v(" "),a("td",[e._v("\n            Since we're expecting a positive command reply from Workbot, we set it to "),a("b",[e._v("Good")]),e._v(" so that the vertical bar to the left of the message is green.\n          ")])])])]),e._v("\nHow your form should look like at this point:\n"),a("p",[a("DocImage",{attrs:{src:s(2108),alt:"Message attachment with expanded fields",width:"826",height:"1198"}})],1),e._v(" "),a("p",[e._v("When you're confident that you've configured the Message attachment correctly, hit Save.")]),e._v(" "),a("p",[e._v("With that, we're done configuring the command reply! Let's test it out by starting the recipe. You'll also want to sign into both the Github repo that you've connected this recipe to (to check that the issue has indeed been created), as well as the Slack workspace with the installed Workbot (that's connected to this recipe).")]),e._v(" "),a("h3",{attrs:{id:"testing-the-command-reply"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#testing-the-command-reply"}},[e._v("#")]),e._v(" Testing the command reply")]),e._v(" "),a("p",[e._v("Before you start, make sure that you're signed in to the Slack workspace where the connected Workbot is installed.")]),e._v(" "),a("p",[e._v("Next, make sure that the recipe has been started. All good? Let's go!")]),e._v(" "),a("ol",[a("li",[e._v('In Slack, send a DM to Workbot, and say "github create issue"')]),e._v(" "),a("li",[e._v('Workbot should respond with "Enter issue:"\n'),a("DocImage",{attrs:{src:s(2109),alt:"Github create issue",width:"762",height:"302"}})],1),e._v(" "),a("li",[e._v("Enter the issue title")]),e._v(" "),a("li",[e._v('Workbot should respond with "Enter description"\n'),a("DocImage",{attrs:{src:s(2110),alt:"Github enter description",width:"432",height:"212"}})],1),e._v(" "),a("li",[e._v("Enter the description of the issue.")]),e._v(" "),a("li",[e._v('Workbot should respond with "Enter assignee:"\n'),a("DocImage",{attrs:{src:s(2111),alt:"Github enter assignee",width:"1446",height:"194"}})],1),e._v(" "),a("li",[e._v("At this point, Workbot should have all the input he needs from the user to create the issue in Github. You should see the command reply next:\n"),a("DocImage",{attrs:{src:s(2112),alt:"Github command reply",width:"1266",height:"284"}})],1)]),e._v(" "),a("p",[e._v("We've come to the end of this guide - you're awesome for making it this far.")]),e._v(" "),a("p",[e._v("You can make your command reply more interactive by including "),a("router-link",{attrs:{to:"/connectors/slack.html#example-message-with-attachment"}},[e._v("attachment fields fields")]),e._v(", "),a("router-link",{attrs:{to:"/connectors/slack.html#example-message-with-attachment"}},[e._v("images")]),e._v(", "),a("router-link",{attrs:{to:"/connectors/slack.html#using-slack-message-buttons"}},[e._v("buttons")]),e._v(", and even message menus. Buttons and menu options allow Workbot to pass commands back to a recipe to carry out its actions.")],1),e._v(" "),a("p",[e._v("Explore other ways Workbot has automated tasks for our community of users in "),a("a",{attrs:{href:"https://www.workato.com/recipes/browse?q=workbot",target:"_blank",rel:"noopener noreferrer"}},[e._v("Community Recipes"),a("OutboundLink")],1),e._v(".")])])}),[],!1,null,null,null);t.default=o.exports}}]);