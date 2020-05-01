(window.webpackJsonp=window.webpackJsonp||[]).push([[259],{1111:function(e,t,r){e.exports=r.p+"assets/img/new-row-trigger.2b8e1f0a.png"},163:function(e,t,r){e.exports=r.p+"assets/img/new-batch-of-rows-trigger.2ff51ba8.png"},2462:function(e,t,r){"use strict";r.r(t);var s=r(0),a=Object(s.a)({},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"snowflake-new-row-triggers"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#snowflake-new-row-triggers"}},[e._v("#")]),e._v(" Snowflake - New row triggers")]),e._v(" "),s("h2",{attrs:{id:"new-row"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#new-row"}},[e._v("#")]),e._v(" New row")]),e._v(" "),s("p",[e._v("This trigger picks up rows that are inserted in the selected table or view. Each row is processed as a separate job. It checks for new rows once every poll interval.")]),e._v(" "),s("p",[s("DocImage",{attrs:{src:r(1111),alt:"New row trigger",width:"1000",height:"819"}}),e._v(" "),s("em",[e._v("New row trigger")])],1),e._v(" "),s("table",{staticClass:"unchanged rich-diff-level-one"},[s("thead",[s("tr",[s("th",{attrs:{width:"25%"}},[e._v("Input field")]),e._v(" "),s("th",[e._v("Description")])])]),e._v(" "),s("tbody",[s("tr",[s("td",[s("a",{attrs:{href:"#table"}},[e._v("Table")])]),e._v(" "),s("td",[e._v("\n        First, select a table/view to process rows from.\n      ")])]),e._v(" "),s("tr",[s("td",[s("a",{attrs:{href:"#unique-key"}},[e._v("Unique key")])]),e._v(" "),s("td",[e._v("\n        Next, select a unique key column to uniquely identify rows. This list of columns are generated from the selected table/view.\n      ")])]),e._v(" "),s("tr",[s("td",[s("a",{attrs:{href:"#where-condition"}},[e._v("WHERE condition")])]),e._v(" "),s("td",[e._v("\n        Finally, provide an optional "),s("code",[e._v("WHERE")]),e._v(" condition to filter rows.\n      ")])])])]),e._v(" "),s("h2",{attrs:{id:"new-batch-of-rows"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#new-batch-of-rows"}},[e._v("#")]),e._v(" New batch of rows")]),e._v(" "),s("p",[e._v("This trigger picks up rows that are inserted in the selected table or view. These rows are processed as a batch of rows for each job. This batch size can be configured in the trigger input. It checks for new rows once every poll interval.")]),e._v(" "),s("p",[s("DocImage",{attrs:{src:r(163),alt:"New batch of rows trigger",width:"1000",height:"970"}}),e._v(" "),s("em",[e._v("New batch of rows trigger")])],1),e._v(" "),s("table",{staticClass:"unchanged rich-diff-level-one"},[s("thead",[s("tr",[s("th",{attrs:{width:"25%"}},[e._v("Input field")]),e._v(" "),s("th",[e._v("Description")])])]),e._v(" "),s("tbody",[s("tr",[s("td",[s("a",{attrs:{href:"#table"}},[e._v("Table")])]),e._v(" "),s("td",[e._v("\n        First, select a table/view to process rows from.\n      ")])]),e._v(" "),s("tr",[s("td",[s("a",{attrs:{href:"#unique-key"}},[e._v("Unique key")])]),e._v(" "),s("td",[e._v("\n        Next, select a unique key column to uniquely identify rows. This list of columns are generated from the selected table/view.\n      ")])]),e._v(" "),s("tr",[s("td",[s("a",{attrs:{href:"#batch-size"}},[e._v("Batch size")])]),e._v(" "),s("td",[e._v("\n        Next, configure the batch size to process in each individual job for this recipe.\n      ")])]),e._v(" "),s("tr",[s("td",[s("a",{attrs:{href:"#where-condition"}},[e._v("WHERE condition")])]),e._v(" "),s("td",[e._v("\n        Finally, provide an optional "),s("code",[e._v("WHERE")]),e._v(" condition to filter rows.\n      ")])])])]),e._v(" "),s("h2",{attrs:{id:"input-fields"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#input-fields"}},[e._v("#")]),e._v(" Input fields")]),e._v(" "),s("h3",{attrs:{id:"table"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#table"}},[e._v("#")]),e._v(" Table")]),e._v(" "),s("p",[e._v("Select the table/view to process rows from. This can be done either by selecting a table from the pick list, or toggling the input field to text mode and typing the full table name.")]),e._v(" "),s("h3",{attrs:{id:"unique-key"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#unique-key"}},[e._v("#")]),e._v(" Unique key")]),e._v(" "),s("p",[e._v("Values from this selected column are used to deduplicate rows in the selected table, making sure that the same row is not processed twice in the same recipe.")]),e._v(" "),s("p",[e._v("As such, the values in the selected column should not be repeated in your table. Typically, this column is the primary key of the table (e.g. "),s("code",[e._v("ID")]),e._v("). It should be incremental and sortable. This column can also be indexed for better performance.")]),e._v(" "),s("h3",{attrs:{id:"batch-size"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#batch-size"}},[e._v("#")]),e._v(" Batch size")]),e._v(" "),s("p",[e._v("Batch size of rows to return in each job. This can be any number between "),s("strong",[e._v("1")]),e._v(" and the maximum batch size. Maximum batch size is "),s("strong",[e._v("100")]),e._v(" and default is "),s("strong",[e._v("100")]),e._v(".")]),e._v(" "),s("p",[e._v("In any given poll, if there are less rows than the configured batch size, this trigger will deliver all rows as a smaller batch.")]),e._v(" "),s("h3",{attrs:{id:"where-condition"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#where-condition"}},[e._v("#")]),e._v(" WHERE condition")]),e._v(" "),s("p",[e._v("This condition is used to filter rows based on one or more column values.")]),e._v(" "),s("div",{staticClass:"language-sql extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sql"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("STATUS")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v("'closed'")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("and")]),e._v(" PRIORITY "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("3")]),e._v("\n")])])]),s("p",[e._v("Leave blank to process all rows from the selected table.")]),e._v(" "),s("p",[e._v("Complex "),s("code",[e._v("WHERE")]),e._v(" conditions with subqueries can also be used. Refer to the "),s("router-link",{attrs:{to:"/connectors/snowflake.html#where-condition"}},[e._v("WHERE condition")]),e._v(" guide for more information.")],1)])}),[],!1,null,null,null);t.default=a.exports}}]);