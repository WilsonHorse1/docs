(window.webpackJsonp=window.webpackJsonp||[]).push([[298],{2261:function(e,t,r){"use strict";r.r(t);var o=r(0),s=Object(o.a)({},(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("h1",{attrs:{id:"bigquery-scheduled-query-trigger"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#bigquery-scheduled-query-trigger"}},[e._v("#")]),e._v(" BigQuery - Scheduled Query trigger")]),e._v(" "),o("h2",{attrs:{id:"scheduled-query-trigger"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#scheduled-query-trigger"}},[e._v("#")]),e._v(" Scheduled Query Trigger")]),e._v(" "),o("p",[e._v("This trigger executes a query on a regular basis. The result of the query is batched into jobs of a user defined batch size. By default, Workato does not automatically attempt to deduce what columns are returned from your query due to the associated costs which may occur. Instead, we rely on you to define the expected output columns manually. This can be done easily using our schema wizard. Learn more "),o("router-link",{attrs:{to:"/connectors/bigquery.html#how-to-connect-to-bigquery-on-workato"}},[e._v("here")]),e._v(".")],1),e._v(" "),o("p",[e._v("In cases where you would like Workato to generate your output columns automatically, change the input field "),o("code",[e._v("Automatic schema introspection")]),e._v(" to "),o("code",[e._v("Yes")]),e._v(". Take note that we fire a query in your BigQuery instance each time the input SQL statement is changed to attempt to derive the output columns. In cases where the query takes too long to return, the bytes processed are too high or the syntax is incorrect, you will have to define your output fields manually.")]),e._v(" "),o("p",[o("DocImage",{attrs:{src:r(490),alt:"Scheduled query trigger",width:"1158",height:"803"}}),e._v(" "),o("em",[e._v("Scheduled query trigger")])],1),e._v(" "),o("h3",{attrs:{id:"input-fields"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#input-fields"}},[e._v("#")]),e._v(" Input fields")]),e._v(" "),o("table",[o("thead",[o("tr",[o("th",[e._v("Field")]),e._v(" "),o("th",[e._v("Description")])])]),e._v(" "),o("tbody",[o("tr",[o("td",[e._v("Project")]),e._v(" "),o("td",[e._v("The project available in the connection to be billed for the query.")])]),e._v(" "),o("tr",[o("td",[e._v("Query")]),e._v(" "),o("td",[e._v("The query to execute. If a limit clause is used, automatic schema introspection is not allowed.")])]),e._v(" "),o("tr",[o("td",[e._v("Batch size")]),e._v(" "),o("td",[e._v("The number of rows in each job. Jobs may be processed faster when batch sizes are smaller.")])]),e._v(" "),o("tr",[o("td",[e._v("Schedule settings")]),e._v(" "),o("td",[e._v("Set how often you want this query to run. The minimum period is 1 hour to give previous triggers sufficient time to batch and complete.")])]),e._v(" "),o("tr",[o("td",[e._v("Automatic schema introspection")]),e._v(" "),o("td",[e._v('Defaults to "No". If "Yes", Workato automatically tries to introspect the output of your query. In cases where the query takes too long or if datapills are used, toggle this to "No" and define the output fields of your query manually.')])]),e._v(" "),o("tr",[o("td",[e._v("Output fields")]),e._v(" "),o("td",[e._v('This input field appears when "Automatic schema introspection" is false. Use this to manually define the output fields of your query. The names given to the output should be identical to the column names expected.  Find out how to define your output fields quickly and easily.')])]),e._v(" "),o("tr",[o("td",[e._v("Unique key")]),e._v(" "),o("td",[e._v("A unique key to deduplicate rows with. When we execute the scheduled query, we immediately order by this key.")])]),e._v(" "),o("tr",[o("td",[e._v("Location")]),e._v(" "),o("td",[e._v("The geographical location of where the job should be run. This field isn't required in most cases.")])]),e._v(" "),o("tr",[o("td",[e._v("Legacy SQL")]),e._v(" "),o("td",[e._v("The default is assumed to be standard SQL. Select true to use legacy SQL instead.")])])])]),e._v(" "),o("h3",{attrs:{id:"output-fields"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#output-fields"}},[e._v("#")]),e._v(" Output fields")]),e._v(" "),o("table",[o("thead",[o("tr",[o("th",[e._v("Field")]),e._v(" "),o("th",[e._v("Description")])])]),e._v(" "),o("tbody",[o("tr",[o("td",[e._v("Range")]),e._v(" "),o("td",[e._v("The range of rows define by the Unique key")])]),e._v(" "),o("tr",[o("td",[e._v("Rows")]),e._v(" "),o("td",[e._v("An array of the rows. Each datapill in the row object corresponds to a single column.")])]),e._v(" "),o("tr",[o("td",[e._v("First batch")]),e._v(" "),o("td",[e._v('"True" if this is the first batch of a schedule query trigger')])]),e._v(" "),o("tr",[o("td",[e._v("Last batch")]),e._v(" "),o("td",[e._v('"True" if this is the last batch of a schedule query trigger')])]),e._v(" "),o("tr",[o("td",[e._v("Starting offset")]),e._v(" "),o("td",[e._v("The offset from the first row of the query for the first record in this batch")])]),e._v(" "),o("tr",[o("td",[e._v("Ending offset")]),e._v(" "),o("td",[e._v("The offset from the first row of the query for the last record in this batch")])])])])])}),[],!1,null,null,null);t.default=s.exports},490:function(e,t,r){e.exports=r.p+"assets/img/scheduled-query-input.4a2d0def.png"}}]);