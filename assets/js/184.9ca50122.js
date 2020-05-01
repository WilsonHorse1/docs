(window.webpackJsonp=window.webpackJsonp||[]).push([[184],{2337:function(t,e,s){"use strict";s.r(e);var r=s(0),a=Object(r.a)({},(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h1",{attrs:{id:"sql-server-new-row-triggers"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#sql-server-new-row-triggers"}},[t._v("#")]),t._v(" SQL Server - New row triggers")]),t._v(" "),r("h2",{attrs:{id:"new-row"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#new-row"}},[t._v("#")]),t._v(" New row")]),t._v(" "),r("p",[t._v("This trigger picks up rows that are inserted in the selected table or view. Each row is processed as a separate job. It checks for new rows once every poll interval.")]),t._v(" "),r("p",[r("DocImage",{attrs:{src:s(698),alt:"New row trigger",width:"2141",height:"1504"}}),t._v(" "),r("center",[r("i",[t._v("New row trigger*")])])],1),t._v(" "),r("table",{staticClass:"unchanged rich-diff-level-one"},[r("thead",[r("tr",[r("th",{attrs:{width:"25%"}},[t._v("Input field")]),t._v(" "),r("th",[t._v("Description")])])]),t._v(" "),r("tbody",[r("tr",[r("td",[r("a",{attrs:{href:"#table"}},[t._v("Table")])]),t._v(" "),r("td",[t._v("\n        Select a table/view to process rows from.\n      ")])]),t._v(" "),r("tr",[r("td",[r("a",{attrs:{href:"#unique-key"}},[t._v("Unique key")])]),t._v(" "),r("td",[t._v("\n        Select a unique key column to uniquely identify rows. This list of columns are generated from the selected table/view.\n      ")])]),t._v(" "),r("tr",[r("td",[r("a",{attrs:{href:"#where-condition"}},[t._v("WHERE condition")])]),t._v(" "),r("td",[t._v("\n        Provide an optional "),r("code",[t._v("WHERE")]),t._v(" condition to filter rows.\n      ")])])])]),t._v(" "),r("h2",{attrs:{id:"new-batch-of-rows"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#new-batch-of-rows"}},[t._v("#")]),t._v(" New batch of rows")]),t._v(" "),r("p",[t._v("This trigger picks up rows that are inserted in the selected table or view. These rows are processed as a batch of rows for each job. This batch size can be configured in the trigger input. It checks for new rows once every poll interval.")]),t._v(" "),r("p",[r("DocImage",{attrs:{src:s(699),alt:"New batch of rows trigger",width:"2134",height:"1808"}}),t._v(" "),r("center",[r("i",[t._v("New batch of rows trigger*")])])],1),t._v(" "),r("table",{staticClass:"unchanged rich-diff-level-one"},[r("thead",[r("tr",[r("th",{attrs:{width:"25%"}},[t._v("Input field")]),t._v(" "),r("th",[t._v("Description")])])]),t._v(" "),r("tbody",[r("tr",[r("td",[r("a",{attrs:{href:"#table"}},[t._v("Table")])]),t._v(" "),r("td",[t._v("\n        Select a table/view to process rows from.\n      ")])]),t._v(" "),r("tr",[r("td",[r("a",{attrs:{href:"#unique-key"}},[t._v("Unique key")])]),t._v(" "),r("td",[t._v("\n        Select a unique key column to uniquely identify rows. This list of columns are generated from the selected table/view.\n      ")])]),t._v(" "),r("tr",[r("td",[r("a",{attrs:{href:"#batch-size"}},[t._v("Batch size")])]),t._v(" "),r("td",[t._v("\n        Configure the batch size to process in each individual job for this recipe.\n      ")])]),t._v(" "),r("tr",[r("td",[r("a",{attrs:{href:"#where-condition"}},[t._v("WHERE condition")])]),t._v(" "),r("td",[t._v("\n        Provide an optional "),r("code",[t._v("WHERE")]),t._v(" condition to filter rows.\n      ")])])])]),t._v(" "),r("h2",{attrs:{id:"new-batch-of-rows-via-custom-sql"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#new-batch-of-rows-via-custom-sql"}},[t._v("#")]),t._v(" New batch of rows via custom SQL")]),t._v(" "),r("p",[t._v("This trigger picks up rows when any rows matching the custom SQL are inserted. These rows are processed as a batch of rows for each job. This batch size can be configured in the trigger input. It checks for new rows once every poll interval.")]),t._v(" "),r("h2",{attrs:{id:"supported-versions"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#supported-versions"}},[t._v("#")]),t._v(" Supported versions")]),t._v(" "),r("p",[t._v("This trigger is only supported for SQL Server 2012 or newer. It uses a default stored procedure "),r("code",[t._v("sp_describe_first_result_set")]),t._v(" that is only available from SQL Server 2012 onwards.")]),t._v(" "),r("p",[r("DocImage",{attrs:{src:s(700),alt:"New batch of rows via custom SQL trigger",width:"2147",height:"2607"}}),t._v(" "),r("center",[r("i",[t._v("New batch of rows trigger via custom SQL*")])])],1),t._v(" "),r("p",[r("strong",[t._v("This trigger is not supported for SQL Server 2008 version or earlier.")])]),t._v(" "),r("table",{staticClass:"unchanged rich-diff-level-one"},[r("thead",[r("tr",[r("th",{attrs:{width:"25%"}},[t._v("Input field")]),t._v(" "),r("th",[t._v("Description")])])]),t._v(" "),r("tbody",[r("tr",[r("td",[r("a",{attrs:{href:"#sql"}},[t._v("SQL")])]),t._v(" "),r("td",[t._v("\n        Custom SQL query to be executed at each poll interval to pick up new rows.\n      ")])]),t._v(" "),r("tr",[r("td",[r("a",{attrs:{href:"#unique-key"}},[t._v("Unique key")])]),t._v(" "),r("td",[t._v("\n        Select a unique key column to uniquely identify rows. This list of columns are generated from custom SQL provided.\n      ")])]),t._v(" "),r("tr",[r("td",[r("a",{attrs:{href:"#batch-size"}},[t._v("Batch size")])]),t._v(" "),r("td",[t._v("\n        Configure the batch size to process in each individual job for this recipe. This defaults to 100.\n      ")])])])]),t._v(" "),r("h2",{attrs:{id:"input-fields"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#input-fields"}},[t._v("#")]),t._v(" Input fields")]),t._v(" "),r("h3",{attrs:{id:"table"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#table"}},[t._v("#")]),t._v(" Table")]),t._v(" "),r("p",[t._v("Select the table/view to process rows from. This can be done either by selecting a table from the pick list, or toggling the input field to text mode and typing the full table name.")]),t._v(" "),r("h3",{attrs:{id:"unique-key"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#unique-key"}},[t._v("#")]),t._v(" Unique key")]),t._v(" "),r("p",[t._v("Values from this selected column is used to deduplicate rows in the selected table, making sure that the same row is not processed twice in the same recipe.")]),t._v(" "),r("p",[t._v("As such, the values in the selected column should not be repeated in your table. Typically, this column is the primary key of the table (e.g. "),r("code",[t._v("ID")]),t._v("). It should be incremental and sortable. This column can also be indexed for better performance.")]),t._v(" "),r("p",[t._v("Only columns that have "),r("strong",[t._v("PRIMARY KEY")]),t._v(" or "),r("strong",[t._v("UNIQUE")]),t._v(" constraints can be used. Run this SQL query to find out which columns fulfill this requirement.")]),t._v(" "),r("div",{staticClass:"language-sql extra-class"},[r("pre",{pre:!0,attrs:{class:"language-sql"}},[r("code",[r("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("SELECT")]),t._v(" col"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("column_name\n"),r("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("FROM")]),t._v(" INFORMATION_SCHEMA"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("CONSTRAINT_COLUMN_USAGE col\n"),r("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("JOIN")]),t._v(" INFORMATION_SCHEMA"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("TABLE_CONSTRAINTS c "),r("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("ON")]),t._v(" c"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("constraint_name "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" col"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("constraint_name\n"),r("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("WHERE")]),t._v("\n  c"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("constraint_type "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("IN")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),r("span",{pre:!0,attrs:{class:"token string"}},[t._v("'PRIMARY KEY'")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),r("span",{pre:!0,attrs:{class:"token string"}},[t._v("'UNIQUE'")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("AND")]),t._v("\n  c"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("table_schema"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),r("span",{pre:!0,attrs:{class:"token string"}},[t._v("'schema_name'")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("AND")]),t._v("\n  c"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("table_name"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),r("span",{pre:!0,attrs:{class:"token string"}},[t._v("'table_name'")]),t._v("\n")])])]),r("p",[t._v("If no column can be found, check out our "),r("router-link",{attrs:{to:"/connectors/mssql/best-practices.html#designing-tables-for-use-in-workato"}},[t._v("best practices")]),t._v(" to find out how to make one.")],1),t._v(" "),r("h3",{attrs:{id:"batch-size"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#batch-size"}},[t._v("#")]),t._v(" Batch size")]),t._v(" "),r("p",[t._v("Batch size of rows to return in each job. This can be any number between "),r("strong",[t._v("1")]),t._v(" and the maximum batch size. Maximum batch size is "),r("strong",[t._v("100")]),t._v(" and default is "),r("strong",[t._v("100")]),t._v(".")]),t._v(" "),r("p",[t._v("In any given poll, if there are less rows than the configured batch size, this trigger will deliver all rows as a smaller batch.")]),t._v(" "),r("h3",{attrs:{id:"where-condition"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#where-condition"}},[t._v("#")]),t._v(" WHERE condition")]),t._v(" "),r("p",[t._v("This condition is used to filter rows based on one or more column values.")]),t._v(" "),r("div",{staticClass:"language-sql extra-class"},[r("pre",{pre:!0,attrs:{class:"language-sql"}},[r("code",[r("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("status")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token string"}},[t._v("'closed'")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("and")]),t._v(" priority "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),t._v("\n")])])]),r("p",[t._v("Leave blank to process all rows from the selected table.")]),t._v(" "),r("p",[t._v("Complex "),r("code",[t._v("WHERE")]),t._v(" conditions with subqueries can also be used. Refer to the "),r("router-link",{attrs:{to:"/connectors/mssql/introduction.html#using-where-conditions"}},[t._v("WHERE condition")]),t._v(" guide for more information.")],1),t._v(" "),r("h3",{attrs:{id:"sql"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#sql"}},[t._v("#")]),t._v(" SQL")]),t._v(" "),r("p",[t._v("Provide the SQL to be executed to select rows. The SQL here will be used to generate the output datatree. To do this, the SQL will be executed once when you provide it. You can map datapills here to execute dynamically changing SQL statements. Remember to wrap datapills in quotes ("),r("code",[t._v("''")]),t._v(").")]),t._v(" "),r("p",[t._v("Avoid using limit clauses like "),r("code",[t._v("TOP")]),t._v(" in your SQL. This is because the limit to the number of rows returned in the query is based on the value defined in the "),r("strong",[t._v("Batch size")]),t._v(" input field. Adding your own limit clause will cause the action to fail.")]),t._v(" "),r("h2",{attrs:{id:"next-steps"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#next-steps"}},[t._v("#")]),t._v(" Next steps")]),t._v(" "),r("p",[t._v("Learn more about the other triggers and actions Workato has to offer for SQL server")]),t._v(" "),r("ul",[r("li",[r("router-link",{attrs:{to:"/connectors/mssql/updated-row-trigger.html"}},[t._v("New/updated row trigger")])],1),t._v(" "),r("li",[r("router-link",{attrs:{to:"/connectors/mssql/select.html"}},[t._v("Select actions")])],1),t._v(" "),r("li",[r("router-link",{attrs:{to:"/connectors/mssql/insert.html"}},[t._v("Insert actions")])],1),t._v(" "),r("li",[r("router-link",{attrs:{to:"/connectors/mssql/update.html"}},[t._v("Update actions")])],1),t._v(" "),r("li",[r("router-link",{attrs:{to:"/connectors/mssql/upsert.html"}},[t._v("Upsert actions")])],1),t._v(" "),r("li",[r("router-link",{attrs:{to:"/connectors/mssql/delete.html"}},[t._v("Delete actions")])],1),t._v(" "),r("li",[r("router-link",{attrs:{to:"/connectors/mssql/run_sql.html"}},[t._v("Run custom SQL action")])],1),t._v(" "),r("li",[r("router-link",{attrs:{to:"/connectors/mssql/stored-procedure.html"}},[t._v("Execute stored procedure")])],1)]),t._v(" "),r("p",[t._v("Or get busy building your recipes now! Check out our")]),t._v(" "),r("ul",[r("li",[r("router-link",{attrs:{to:"/connectors/mssql/best-practices.html"}},[t._v("Best practices")])],1),t._v(" "),r("li",[r("router-link",{attrs:{to:"/connectors/database-common-use-cases.html"}},[t._v("Use cases")])],1)])])}),[],!1,null,null,null);e.default=a.exports},698:function(t,e,s){t.exports=s.p+"assets/img/new-row-trigger.50845453.png"},699:function(t,e,s){t.exports=s.p+"assets/img/new-batch-of-rows-trigger.cec4e156.png"},700:function(t,e,s){t.exports=s.p+"assets/img/new-batch-of-rows-via-custom-sql-trigger.5aa270e9.png"}}]);