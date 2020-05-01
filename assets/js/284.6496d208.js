(window.webpackJsonp=window.webpackJsonp||[]).push([[284],{1798:function(e,t,a){e.exports=a.p+"assets/img/cancel-job.58e94cb1.png"},1799:function(e,t,a){e.exports=a.p+"assets/img/reason-for-cancel.3a15df10.png"},2731:function(e,t,a){"use strict";a.r(t);var o=a(0),r=Object(o.a)({},(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("h1",{attrs:{id:"cancel-job"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#cancel-job"}},[e._v("#")]),e._v(" Cancel job")]),e._v(" "),o("p",[e._v("Workato lets users cancel a running job. Running (or pending) status means the job is currently executing the actions defined in the recipe.")]),e._v(" "),o("p",[e._v("Oftentimes developers and operators may need to cancel a job in the processing status when:")]),e._v(" "),o("ul",[o("li",[e._v("there’s a bug in the recipe")]),e._v(" "),o("li",[e._v("a data issue")]),e._v(" "),o("li",[e._v("wrong application sandbox is used")]),e._v(" "),o("li",[e._v("the recipe may take a few minutes to an hour or more to complete")])]),e._v(" "),o("p",[e._v("Recipes that execute bulk actions take minutes to hours to complete depending on the size of the data. Some examples are:")]),e._v(" "),o("ul",[o("li",[e._v("Create/Update/Upsert records in bulk from CSV file in the "),o("code",[e._v("Salesforce")]),e._v(" connector")]),e._v(" "),o("li",[e._v("Add/Create in bulk in the "),o("code",[e._v("NetSuite")]),e._v(" connector")]),e._v(" "),o("li",[e._v("Bulk import leads from file in the "),o("code",[e._v("Marketo")]),e._v(" connector")]),e._v(" "),o("li",[o("code",[e._v("Wait")]),e._v(" action in the "),o("code",[e._v("Scheduler")]),e._v(" connector")])]),e._v(" "),o("p",[e._v("You can cancel a job from the job details page. Simply click on the "),o("code",[e._v("Cancel job")]),e._v(" button.")]),e._v(" "),o("p",[o("DocImage",{attrs:{src:a(1798),alt:"Cancel a job from job details page",width:"2606",height:"546"}}),e._v(" "),o("em",[e._v("Cancel a job from job details page")])],1),e._v(" "),o("p",[e._v("Before the job cancellation is complete, the job status will show as "),o("code",[e._v("Canceling")]),e._v(". The job status will be updated to "),o("code",[e._v("Canceled")]),e._v(" once the cancellation is complete. The "),o("code",[e._v("Reason for cancel")]),e._v(" in the job details page is updated to "),o("code",[e._v("Job canceled by user")]),e._v(".")]),e._v(" "),o("p",[o("DocImage",{attrs:{src:a(1799),alt:"Reason for cancel",width:"2606",height:"714"}}),e._v(" "),o("em",[e._v("Reason for cancel")])],1),e._v(" "),o("h1",{attrs:{id:"callable-recipes"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#callable-recipes"}},[e._v("#")]),e._v(" Callable recipes")]),e._v(" "),o("p",[e._v("Canceling a parent recipe job generally will not cancel the callable recipes. If the callable recipe is called in an asynchronous mode then the called recipe job will run independently to completion.")]),e._v(" "),o("h1",{attrs:{id:"long-actions"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#long-actions"}},[e._v("#")]),e._v(" Long actions")]),e._v(" "),o("p",[e._v("Long actions are actions in the recipe that usually deals with handling bulk data. As such, these long actions take minutes to hours to complete depending on the size of the data. Developers and operators may find it useful to cancel a job when such long action steps are in the recipe. It is typically supported by the applications like Salesforce, Marketo, NetSuite and more. Here is list of long actions.")]),e._v(" "),o("table",[o("thead",[o("tr",[o("th",{attrs:{width:"25%"}},[e._v("Connector")]),e._v(" "),o("th",{attrs:{width:"25%"}},[e._v("Action")]),e._v(" "),o("th",[e._v("Description")])])]),e._v(" "),o("tbody",[o("tr",[o("td",{attrs:{rowspan:"4"}},[o("b",[e._v("Anaplan")])]),e._v(" "),o("td",[e._v("Run data import")]),e._v(" "),o("td",[e._v("Run a data import process in Anaplan")])]),e._v(" "),o("tr",[o("td",[e._v("Run data export")]),e._v(" "),o("td",[e._v("Run a data export process in Anaplan")])]),e._v(" "),o("tr",[o("td",[e._v("Run deletion")]),e._v(" "),o("td",[e._v("Run a delete action in Anaplan")])]),e._v(" "),o("tr",[o("td",[e._v("Run process")]),e._v(" "),o("td",[e._v("Run a process in Anaplan")])]),e._v(" "),o("tr",[o("td",{attrs:{rowspan:"1"}},[o("b",[e._v("Scheduler")])]),e._v(" "),o("td",[e._v("Wait")]),e._v(" "),o("td",[e._v("Wait for specified length of time")])]),e._v(" "),o("tr",[o("td",{attrs:{rowspan:"3"}},[o("b",[e._v("Marketo")])]),e._v(" "),o("td",[e._v("Bulk export leads to file")]),e._v(" "),o("td",[e._v("Retrieve a list of Marketo leads as comma, tab or semi-colon separated values")])]),e._v(" "),o("tr",[o("td",[e._v("Bulk import leads from file")]),e._v(" "),o("td",[e._v("Bulk import leads to Marketo from file")])]),e._v(" "),o("tr",[o("td",[e._v("Bulk export activities to file")]),e._v(" "),o("td",[e._v("Retrieve a list of Marketo activities as comma, tab or semi-colon separated values")])]),e._v(" "),o("tr",[o("td",{attrs:{rowspan:"1"}},[o("b",[e._v("NetSuite")])]),e._v(" "),o("td",[e._v("Add/Create in bulk")]),e._v(" "),o("td",[e._v("Adds/creates in bulk in Netsuite")])]),e._v(" "),o("tr",[o("td",{attrs:{rowspan:"1"}},[o("b",[e._v("QuickBooks")])]),e._v(" "),o("td",[e._v("Wait for paid invoice")]),e._v(" "),o("td",[e._v("Wait for paid invoice on QuickBooks")])]),e._v(" "),o("tr",[o("td",{attrs:{rowspan:"4"}},[o("b",[e._v("Salesforce")])]),e._v(" "),o("td",[e._v("Create/Update/Upsert records in bulk from CSV file")]),e._v(" "),o("td")]),e._v(" "),o("tr",[o("td",[e._v("Create/Update/Upsert records in bulk from CSV file (API 1.0)")]),e._v(" "),o("td")]),e._v(" "),o("tr",[o("td",[e._v("Retry bulk job for failed records from CSV file")]),e._v(" "),o("td",[e._v("Retry bulk job in Salesforce for failed records")])]),e._v(" "),o("tr",[o("td",[e._v("Search records in bulk using SOQL")]),e._v(" "),o("td")]),e._v(" "),o("tr",[o("td",{attrs:{rowspan:"1"}},[o("b",[e._v("SAP")])]),e._v(" "),o("td",[e._v("Send IDoc")]),e._v(" "),o("td",[e._v("Send IDoc to SAP")])]),e._v(" "),o("tr",[o("td",{attrs:{rowspan:"1"}},[o("b",[e._v("SurveyMonkey")])]),e._v(" "),o("td",[e._v("Send survey invite via email and wait for response")]),e._v(" "),o("td",[e._v("Send survey invite via email and wait for response in SurveyMonkey")])]),e._v(" "),o("tr",[o("td",{attrs:{rowspan:"1"}},[o("b",[e._v("People Task")])]),e._v(" "),o("td",[e._v("Request task approval")]),e._v(" "),o("td",[e._v("Request approval via People Task")])]),e._v(" "),o("tr",[o("td",{attrs:{rowspan:"3"}},[o("b",[e._v("Google BigQuery")])]),e._v(" "),o("td",[e._v("Insert rows")]),e._v(" "),o("td",[e._v("Inserts rows in the selected table")])]),e._v(" "),o("tr",[o("td",[e._v("Select rows")]),e._v(" "),o("td",[e._v("Select rows in a table in BigQuery")])]),e._v(" "),o("tr",[o("td",[e._v("Select rows using custom SQL")]),e._v(" "),o("td",[e._v("Select rows using custom SQL in BigQuery")])]),e._v(" "),o("tr",[o("td",{attrs:{rowspan:"1"}},[o("b",[e._v("Zendesk")])]),e._v(" "),o("td",[e._v("Create/update object/record. Bulk upsert")]),e._v(" "),o("td",[e._v("Creates object or record if it doesn't exist otherwise update existing")])])])])])}),[],!1,null,null,null);t.default=r.exports}}]);