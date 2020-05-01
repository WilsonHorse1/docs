(window.webpackJsonp=window.webpackJsonp||[]).push([[327],{2369:function(e,t,i){"use strict";i.r(t);var s=i(0),l=Object(s.a)({},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"on-prem-files-new-lines-in-csv-file-trigger"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#on-prem-files-new-lines-in-csv-file-trigger"}},[e._v("#")]),e._v(" On-prem files - New lines in CSV file trigger")]),e._v(" "),s("p",[e._v("This trigger picks up new lines added to the end of a selected CSV file. Lines from the file will be processed in batches in each job.")]),e._v(" "),s("p",[e._v("When the recipe is first started, the trigger will pick up all existing lines in the selected CSV file. Subsequently, new lines added to the end of the file will be processed as new job(s). This trigger checks for new lines once every poll interval.")]),e._v(" "),s("p",[s("DocImage",{attrs:{src:i(805),alt:"New lines in CSV file trigger",width:"2206",height:"1954"}}),e._v(" "),s("em",[e._v("New lines in CSV file trigger")])],1),e._v(" "),s("h2",{attrs:{id:"input-fields"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#input-fields"}},[e._v("#")]),e._v(" Input fields")]),e._v(" "),s("table",{staticClass:"unchanged rich-diff-level-one"},[s("thead",[s("tr",[s("th",{attrs:{width:"25%"}},[e._v("Input field")]),e._v(" "),s("th",[e._v("Description")])])]),e._v(" "),s("tbody",[s("tr",[s("td",[e._v("CSV file")]),e._v(" "),s("td",[e._v("\n        First, select a CSV file to process lines from. This CSV file must have a header line. The value of each column in the header will be used to generate the output schema of the trigger.\n      ")])]),e._v(" "),s("tr",[s("td",[e._v("Column delimiter")]),e._v(" "),s("td",[e._v("\n        Next, select a column delimiter for this selected CSV file. The delimiters available are: comma, semicolon, space and tab.\n      ")])]),e._v(" "),s("tr",[s("td",[e._v("Batch size")]),e._v(" "),s("td",[e._v("Determine the number of lines to process in each job. The default value is 100 and maximum is 2000."),s("br"),e._v("\n      Select a batch size based on the limit of your destination application.\n      ")])])])]),e._v(" "),s("h2",{attrs:{id:"output-fields"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#output-fields"}},[e._v("#")]),e._v(" Output fields")]),e._v(" "),s("table",{staticClass:"unchanged rich-diff-level-one"},[s("thead",[s("tr",[s("th",{attrs:{width:"25%"}},[e._v("Output field")]),e._v(" "),s("th",[e._v("Description")])])]),e._v(" "),s("tbody",[s("tr",[s("td",[e._v("First line number in batch")]),e._v(" "),s("td",[e._v("Line number of the first line in the batch currently being processed. Header lines are not processed, so the first line has the value 1.")])]),e._v(" "),s("tr",[s("td",[e._v("Last line number in batch")]),e._v(" "),s("td",[e._v("Line number of the last line in the batch currently being processed. Header lines are not processed, so the first line has the value 1.")])]),e._v(" "),s("tr",[s("td",[e._v("CSV lines")]),e._v(" "),s("td",[e._v("This is a list type datapill that contains the data of all lines in the batch. Columns of the selected CSV file will be available as datapills here.")])])])])])}),[],!1,null,null,null);t.default=l.exports},805:function(e,t,i){e.exports=i.p+"assets/img/new-lines-trigger.2f7d8052.png"}}]);