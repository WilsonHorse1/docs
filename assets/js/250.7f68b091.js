(window.webpackJsonp=window.webpackJsonp||[]).push([[250],{2381:function(t,e,r){"use strict";r.r(e);var o=r(0),s=Object(o.a)({},(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[o("h1",{attrs:{id:"oracle-execute-stored-procedure-action"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#oracle-execute-stored-procedure-action"}},[t._v("#")]),t._v(" Oracle - Execute stored procedure action")]),t._v(" "),o("h2",{attrs:{id:"execute-stored-procedure"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#execute-stored-procedure"}},[t._v("#")]),t._v(" Execute stored procedure")]),t._v(" "),o("p",[t._v("This action lets you execute any stored procedure or functions saved in your database instance. To use this action, your Oracle connection must be established using an "),o("router-link",{attrs:{to:"/on-prem.html"}},[t._v("On-premise agent")]),t._v(". Stored procedures from packages are not supported in this action. They can be written to accept input parameters and perform actions on these input parameters. Workato's "),o("code",[t._v("Execute stored procedure")]),t._v(" action is able to pick up on parameter inputs and allows you to dynamically input these parameters directly from your workflow.")],1),t._v(" "),o("p",[t._v("Using stored procedures are a great way to improve recipe efficiency and balance load between Workato and your database. "),o("router-link",{attrs:{to:"/connectors/oracle/best-practices.html#when-to-use-custom-sql-and-stored-procedures-in-workato"}},[t._v("Find out more in our best practices section how to use stored procedures to make your recipes more efficient.")])],1),t._v(" "),o("p",[o("DocImage",{attrs:{src:r(839),alt:"Execute stored procedure rows action",width:"2150",height:"1633"}}),t._v(" "),o("em",[t._v("Execute stored procedure rows action")])],1),t._v(" "),o("h3",{attrs:{id:"stored-procedure"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#stored-procedure"}},[t._v("#")]),t._v(" Stored procedure")]),t._v(" "),o("p",[t._v("First, select a stored procedure to execute. This can be done either by selecting from the pick list, or toggling the input to text mode and providing the full stored procedure name. When working with overloaded stored procedures, you will see multiple stored procedures with its "),o("code",[t._v("sub_program_id")]),t._v(" in brackets next to each.")]),t._v(" "),o("p",[o("DocImage",{attrs:{src:r(840),alt:"Execute stored procedure rows action",width:"1374",height:"734"}}),t._v(" "),o("em",[t._v("Each overloaded stored procedure will show up with its sub_program_id in brackets next to the name")])],1),t._v(" "),o("div",{staticClass:"custom-block tip"},[o("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),o("p",[t._v("To find out the different sub_program_ids for an overloaded stored procedure, use the following query in your DBMS.")]),t._v(" "),o("div",{staticClass:"language-sql extra-class"},[o("pre",{pre:!0,attrs:{class:"language-sql"}},[o("code",[o("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("SELECT")]),t._v(" position"),o("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" argument_name"),o("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" in_out"),o("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" data_type"),o("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n         data_length"),o("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" data_precision"),o("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" data_scale"),o("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" char_length"),o("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" object_name"),o("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" subprogram_id\n         "),o("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("FROM")]),t._v(" SYS"),o("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ALL_ARGUMENTS "),o("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("where")]),t._v(" object_name "),o("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),o("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("stored_procedure_name"),o("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])])]),o("p",[t._v("where "),o("code",[t._v("[stored_procedure_name]")]),t._v(" is the name of the overloaded stored procedure.")])]),t._v(" "),o("h3",{attrs:{id:"input-parameters"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#input-parameters"}},[t._v("#")]),t._v(" Input parameters")]),t._v(" "),o("p",[t._v("Next, provide any input parameters required for the selected stored procedure.")]),t._v(" "),o("h3",{attrs:{id:"output"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#output"}},[t._v("#")]),t._v(" Output")]),t._v(" "),o("p",[t._v("Datasets returned from stored procedures in Oracle are not returned in this action.")]),t._v(" "),o("h2",{attrs:{id:"list-of-workato-triggers-and-actions"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#list-of-workato-triggers-and-actions"}},[t._v("#")]),t._v(" List of Workato triggers and actions")]),t._v(" "),o("p",[t._v("Workato currently supports the following triggers and actions. Find out more details about each by clicking on the links below. You can also navigate to them through the side bar.")]),t._v(" "),o("ul",[o("li",[o("router-link",{attrs:{to:"/connectors/oracle/new-row-trigger.html"}},[t._v("New row trigger")])],1),t._v(" "),o("li",[o("router-link",{attrs:{to:"/connectors/oracle/updated-row-trigger.html"}},[t._v("New/updated row trigger")])],1),t._v(" "),o("li",[o("router-link",{attrs:{to:"/connectors/oracle/select.html"}},[t._v("Select actions")])],1),t._v(" "),o("li",[o("router-link",{attrs:{to:"/connectors/oracle/insert.html"}},[t._v("Insert actions")])],1),t._v(" "),o("li",[o("router-link",{attrs:{to:"/connectors/oracle/update.html"}},[t._v("Update actions")])],1),t._v(" "),o("li",[o("router-link",{attrs:{to:"/connectors/oracle/upsert.html"}},[t._v("Upsert actions")])],1),t._v(" "),o("li",[o("router-link",{attrs:{to:"/connectors/oracle/delete.html"}},[t._v("Delete actions")])],1),t._v(" "),o("li",[o("router-link",{attrs:{to:"/connectors/oracle/run_sql.html"}},[t._v("Run custom SQL action")])],1)]),t._v(" "),o("p",[t._v("Or get busy building your recipes now! Check out our")]),t._v(" "),o("ul",[o("li",[o("router-link",{attrs:{to:"/connectors/oracle/best-practices.html"}},[t._v("Best practices")])],1),t._v(" "),o("li",[o("router-link",{attrs:{to:"/connectors/database-common-use-cases.html"}},[t._v("Use cases")])],1)])])}),[],!1,null,null,null);e.default=s.exports},839:function(t,e,r){t.exports=r.p+"assets/img/stored-procedure.50d74950.png"},840:function(t,e,r){t.exports=r.p+"assets/img/overloaded-stored-procedure.ebbd625a.png"}}]);