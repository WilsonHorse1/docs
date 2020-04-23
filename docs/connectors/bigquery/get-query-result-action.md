---
title: Workato connectors - BigQuery Get query job output action
date: 2019-12-10 06:00:00 Z
---

# BigQuery - Get query job output action

## Get query job output action
This action takes in a specific Job ID and returns the query results of this job. This is often used with the job completed trigger where the job is of the type `Query`. It can be used to page through large result sets.

![Get Query Job output](~@img/bigquery/get-query-job-output.png)
*Get Query Job output action*

### Input fields
|Field|Description|
|--- |--- |
|Project|Configure to listen on a project.|
|Job ID|The ID of the Job. Can be found in the "Job completed" trigger|
|Page size|The size of each page. Default and maximum is 50,000 rows.|
|Page token|This is also the output of this action. Can be used in a "For Each" loop to page through a result set larger than the page size.|
|Start index/td>|The index of the starting row. Cannot be used with Page token.|
|Output fields|Use this to manually define the output fields of your query. The names given to the output should be identical to the column names expected. Find out how to define your output fields quickly and easily.|

### Output fields
|Field|Description|
|--- |--- |
|Page token|Can be passed to the next "Get query result" action to get the next page|
|Total rows|Total number of rows returned.|
|Array of rows|An array of rows containing the data defined in the output fields. Each datapill in the row object corresponds to a single column. Names of the columns must match the rows exactly.|
