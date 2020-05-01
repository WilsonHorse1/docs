(window.webpackJsonp=window.webpackJsonp||[]).push([[233],{125:function(e,t,r){e.exports=r.p+"assets/img/entries_output_schema.6ccecf32.png"},2247:function(e,t,r){"use strict";r.r(t);var s=r(0),i=Object(s.a)({},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"active-directory-scheduled-entry-search-trigger"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#active-directory-scheduled-entry-search-trigger"}},[e._v("#")]),e._v(" Active Directory - Scheduled entry search trigger")]),e._v(" "),s("h2",{attrs:{id:"scheduled-entry-search-using-search-filter"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#scheduled-entry-search-using-search-filter"}},[e._v("#")]),e._v(" Scheduled entry search using search filter")]),e._v(" "),s("p",[e._v("This trigger picks up entries that match a specified search filter. Entries are processed as a list of a specified batch size. It checks for entries based on the specified schedule.")]),e._v(" "),s("p",[s("DocImage",{attrs:{src:r(462),alt:"Scheduled entry search using search filter",width:"1500",height:"2238"}}),e._v(" "),s("em",[e._v("Scheduled entry search using search filter")])],1),e._v(" "),s("table",{staticClass:"unchanged rich-diff-level-one"},[s("thead",[s("tr",[s("th",{attrs:{colspan:"2",width:"35%"}},[e._v("Input field")]),e._v(" "),s("th",[e._v("Description")])])]),e._v(" "),s("tbody",[s("tr",[s("td",{attrs:{colspan:"2"}},[e._v("Trigger on")]),e._v(" "),s("td",[e._v("Select the type of schedule - "),s("b",[e._v("Specific interval")]),e._v(" or "),s("b",[e._v("Specific date/time")])])]),e._v(" "),s("tr",[s("td",{attrs:{rowspan:"2"}},[e._v("Schedule settings ("),s("b",[e._v("Specific interval")]),e._v(")")]),e._v(" "),s("td",[e._v("Every")]),e._v(" "),s("td",[e._v("\n        Select the interval between each search. Select one of these options:"),s("br"),e._v("\n        - 5 minutes"),s("br"),e._v("\n        - 15 minutes"),s("br"),e._v("\n        - 30 minutes"),s("br"),e._v("\n        - 45 minutes"),s("br"),e._v("\n        - One hour"),s("br"),e._v("\n        - One day"),s("br"),e._v("\n        - One week"),s("br"),e._v("\n        - 30 days"),s("br")])]),e._v(" "),s("tr",[s("td",[e._v("Start at")]),e._v(" "),s("td",[e._v("\n        Date and time to begin the first search. Leave blank to begin immediately when the recipe is first started.\n      ")])]),e._v(" "),s("tr",[s("td",{attrs:{rowspan:"4"}},[e._v("Schedule settings ("),s("b",[e._v("Specific date/time")]),e._v(")")]),e._v(" "),s("td",[e._v("Timezone")]),e._v(" "),s("td",[e._v("Choose the timezone for the schedule to be set in.")])]),e._v(" "),s("tr",[s("td",[e._v("Hour")]),e._v(" "),s("td",[e._v("Configure the hour of the day to run the search.")])]),e._v(" "),s("tr",[s("td",[e._v("Minute")]),e._v(" "),s("td",[e._v("Configure the minute of the hour to run the search.")])]),e._v(" "),s("tr",[s("td",[e._v("Days of the week")]),e._v(" "),s("td",[e._v("Select 'Yes' for each of the days you wish to run the search.")])]),e._v(" "),s("tr",[s("td",{attrs:{colspan:"2"}},[e._v("Sample entry DN")]),e._v(" "),s("td",[e._v("\n        Used to introspect the attributes in your entry object. Give a distinguished name of an existing entry. Attributes of this object will be available in the output fields of this trigger.\n      ")])]),e._v(" "),s("tr",[s("td",{attrs:{colspan:"2"}},[e._v("Search by")]),e._v(" "),s("td",[e._v("\n        Provide values for each attribute you wish to filter. Only entries that match all of the values will be processed.\n      ")])]),e._v(" "),s("tr",[s("td",{attrs:{colspan:"2"}},[e._v("Entry search filter")]),e._v(" "),s("td",[e._v("\n        Use this to filter the entries to be processed by this trigger. This is similar to "),s("b",[e._v("Search by")]),e._v(". However, this allows you to use LDAP syntax to perform more complex conditionals. Use this input if you need to filter using compound conditionals or nested conditionals."),s("br"),s("br"),e._v("\n        For example, use "),s("code",[e._v("&(ou=Dev)(objectClass=Person)")]),e._v(" to pick up only "),s("b",[e._v("Person")]),e._v(" entries from the "),s("b",[e._v("Dev")]),e._v(" organization unit.\n      ")])]),e._v(" "),s("tr",[s("td",{attrs:{colspan:"2"}},[e._v("Batch size")]),e._v(" "),s("td",[e._v("\n        Configure the batch size of the list of entries in each individual job. This defaults to "),s("b",[e._v("100")]),e._v(". Maximum batch size is "),s("b",[e._v("1000")]),e._v(".\n      ")])])])]),e._v(" "),s("h2",{attrs:{id:"output-fields"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#output-fields"}},[e._v("#")]),e._v(" Output fields")]),e._v(" "),s("p",[e._v("The output of this trigger is a list of entries. The attributes of each entry is based on the "),s("strong",[e._v("Sample entry DN")]),e._v(" provided in the trigger input.")]),e._v(" "),s("p",[s("DocImage",{attrs:{src:r(125),alt:"Entries output fields",width:"804",height:"1052"}}),e._v(" "),s("em",[e._v("Entries output fields")])],1)])}),[],!1,null,null,null);t.default=i.exports},462:function(e,t,r){e.exports=r.p+"assets/img/scheduled_trigger.304561be.png"}}]);