(window.webpackJsonp=window.webpackJsonp||[]).push([[244],{2339:function(t,e,s){"use strict";s.r(e);var r=s(0),o=Object(r.a)({},(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h1",{attrs:{id:"sql-server-select-actions"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#sql-server-select-actions"}},[t._v("#")]),t._v(" SQL Server - Select actions")]),t._v(" "),r("h2",{attrs:{id:"select-rows"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#select-rows"}},[t._v("#")]),t._v(" Select rows")]),t._v(" "),r("p",[t._v("This action lets you select rows based on certain criteria defined by a "),r("code",[t._v("WHERE")]),t._v(" condition. Rows from the selected table that match the "),r("code",[t._v("WHERE")]),t._v(" condition will be returned as the output of this action.")]),t._v(" "),r("p",[r("DocImage",{attrs:{src:s(702),alt:"Select rows action",width:"900",height:"741"}}),t._v(" "),r("em",[t._v("Select rows action")])],1),t._v(" "),r("h3",{attrs:{id:"tables-views"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#tables-views"}},[t._v("#")]),t._v(" Tables/Views")]),t._v(" "),r("p",[t._v("First, select a table/view to work with. This can be done either by selecting a table or view from the pick list, or toggling the input to text mode and typing the full table/view name.")]),t._v(" "),r("h3",{attrs:{id:"where-condition"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#where-condition"}},[t._v("#")]),t._v(" WHERE condition")]),t._v(" "),r("p",[t._v("Next, provide a "),r("code",[t._v("WHERE")]),t._v(" condition to filter rows. This condition can be as simple as filtering a single record by it's "),r("code",[t._v("ID")]),t._v(".")]),t._v(" "),r("div",{staticClass:"language-sql extra-class"},[r("pre",{pre:!0,attrs:{class:"language-sql"}},[r("code",[t._v("ID "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token number"}},[t._v("123")]),t._v("\n")])])]),r("p",[t._v("Alternatively, it can be used to select multiple rows based on values in one or more columns.")]),t._v(" "),r("div",{staticClass:"language-sql extra-class"},[r("pre",{pre:!0,attrs:{class:"language-sql"}},[r("code",[r("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("status")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token string"}},[t._v("'closed'")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("AND")]),t._v(" priority "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n")])])]),r("p",[t._v("Complex "),r("code",[t._v("WHERE")]),t._v(" conditions with subqueries can also be used. Refer to the "),r("router-link",{attrs:{to:"/connectors/mssql/introduction.html#using-where-conditions"}},[r("code",[t._v("WHERE")]),t._v(" condition")]),t._v(" guide for more information.")],1),t._v(" "),r("h3",{attrs:{id:"order-by"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#order-by"}},[t._v("#")]),t._v(" Order by")]),t._v(" "),r("p",[t._v("Rows returned from this action can be ordered based on the "),r("strong",[t._v("Order by")]),t._v(" input field. This field is used to change the default ordering of rows from your SQL Server database.")]),t._v(" "),r("p",[t._v("You can also define the direction of order for each column you wish to order by. The following order by statement will order rows by "),r("code",[t._v("priority")]),t._v(" in ascending order followed by "),r("code",[t._v("created_date")]),t._v(" in descending order (latest first).")]),t._v(" "),r("div",{staticClass:"language-sql extra-class"},[r("pre",{pre:!0,attrs:{class:"language-sql"}},[r("code",[t._v("priority "),r("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("asc")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" created_date "),r("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("desc")]),t._v("\n")])])]),r("h3",{attrs:{id:"limit"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#limit"}},[t._v("#")]),t._v(" Limit")]),t._v(" "),r("p",[t._v("This input field determines the maximum number of rows to return. The default limit is 100 and capped at a maximum of 1000 rows for a single "),r("strong",[t._v("Select rows")]),t._v(" action. If you require to select more than 1000 rows and perform actions, this can be done in batches from Workato recipes directly. Find examples in our "),r("router-link",{attrs:{to:"/connectors/database-common-use-cases.html#data-replication-from-cloud-based-applications"}},[t._v("use cases.")])],1),t._v(" "),r("h3",{attrs:{id:"offset"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#offset"}},[t._v("#")]),t._v(" Offset")]),t._v(" "),r("p",[t._v("This input field gives you the option to fetch only a page of results from the entire results set. For example, to skip the first 100 rows of the selected results set, input "),r("code",[t._v("100")]),t._v(" to this field. The default is "),r("code",[t._v("0")]),t._v(".")]),t._v(" "),r("h2",{attrs:{id:"select-rows-using-custom-sql"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#select-rows-using-custom-sql"}},[t._v("#")]),t._v(" Select rows using custom SQL")]),t._v(" "),r("p",[t._v("This action lets you select rows based on a custom SQL query. Rows that are returned from the query will be returned as the output of this action. Check out some "),r("router-link",{attrs:{to:"/connectors/mssql/best-practices.html#when-to-use-custom-sql-and-stored-procedures-in-workato"}},[t._v("best practices when using custom SQL actions")])],1),t._v(" "),r("h3",{attrs:{id:"supported-versions"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#supported-versions"}},[t._v("#")]),t._v(" Supported versions")]),t._v(" "),r("p",[t._v("This action is only supported for SQL Server 2012 or newer. It uses a default stored procedure "),r("code",[t._v("sp_describe_first_result_set")]),t._v(" that is only available from SQL Server 2012 onwards.")]),t._v(" "),r("p",[r("DocImage",{attrs:{src:s(703),alt:"Select rows using custom SQL action",width:"2151",height:"1964"}}),t._v(" "),r("em",[t._v("Select rows using custom SQL action")])],1),t._v(" "),r("h3",{attrs:{id:"sql"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#sql"}},[t._v("#")]),t._v(" SQL")]),t._v(" "),r("p",[t._v("Provide the SQL to be executed to select rows. The SQL here will be used to generate the output datatree. To do this, the SQL will be executed once when you provide it. You can map datapills here to execute dynamically changing SQL statements. Remember to wrap datapills in quotes ("),r("code",[t._v("''")]),t._v("). "),r("strong",[t._v("Do not add a "),r("code",[t._v(";")]),t._v(" at the end of your SQL query as this will cause the step to fail")])]),t._v(" "),r("p",[t._v("Avoid using limit clauses like "),r("code",[t._v("TOP")]),t._v(" in your SQL. This is because the limit to the number of rows returned in the query is based on the value defined in the "),r("strong",[t._v("Limit")]),t._v(" input field. Adding your own limit clause will cause the action to fail.")]),t._v(" "),r("h3",{attrs:{id:"limit-2"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#limit-2"}},[t._v("#")]),t._v(" Limit")]),t._v(" "),r("p",[t._v("This input field determines the maximum number of rows to return. The default limit is 100 and capped at a maximum of 1000 rows for a single "),r("strong",[t._v("Select rows using custom SQL")]),t._v(" action.")]),t._v(" "),r("p",[t._v("If this field is left blank, "),r("code",[t._v("TOP 100")]),t._v(" will be used.")]),t._v(" "),r("h2",{attrs:{id:"next-steps"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#next-steps"}},[t._v("#")]),t._v(" Next steps")]),t._v(" "),r("p",[t._v("Learn more about the other triggers and actions Workato has to offer for SQL server")]),t._v(" "),r("ul",[r("li",[r("router-link",{attrs:{to:"/connectors/mssql/new-row-trigger.html"}},[t._v("New row trigger")])],1),t._v(" "),r("li",[r("router-link",{attrs:{to:"/connectors/mssql/updated-row-trigger.html"}},[t._v("New/updated row trigger")])],1),t._v(" "),r("li",[r("router-link",{attrs:{to:"/connectors/mssql/insert.html"}},[t._v("Insert actions")])],1),t._v(" "),r("li",[r("router-link",{attrs:{to:"/connectors/mssql/update.html"}},[t._v("Update actions")])],1),t._v(" "),r("li",[r("router-link",{attrs:{to:"/connectors/mssql/upsert.html"}},[t._v("Upsert actions")])],1),t._v(" "),r("li",[r("router-link",{attrs:{to:"/connectors/mssql/delete.html"}},[t._v("Delete actions")])],1),t._v(" "),r("li",[r("router-link",{attrs:{to:"/connectors/mssql/run_sql.html"}},[t._v("Run custom SQL action")])],1),t._v(" "),r("li",[r("router-link",{attrs:{to:"/connectors/mssql/stored-procedure.html"}},[t._v("Execute stored procedure")])],1)]),t._v(" "),r("p",[t._v("Or get busy building your recipes now! Check out our")]),t._v(" "),r("ul",[r("li",[r("router-link",{attrs:{to:"/connectors/mssql/best-practices.html"}},[t._v("Best practices")])],1),t._v(" "),r("li",[r("router-link",{attrs:{to:"/connectors/database-common-use-cases.html"}},[t._v("Use cases")])],1)])])}),[],!1,null,null,null);e.default=o.exports},702:function(t,e,s){t.exports=s.p+"assets/img/select-rows-action.a5b87652.png"},703:function(t,e,s){t.exports=s.p+"assets/img/custom-sql-action.fadc2107.png"}}]);