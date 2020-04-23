---
title: New call for recipe trigger
date: 2017-04-05 14:00:00 Z
search:
  keywords: ['callable', 'new call']
---

# Callable Recipes - New call for recipe trigger

This trigger creates a job whenever it is called, in real-time. It can be called from [another recipe](call-recipe-action.md) or from another system as a [API Platform REST endpoint](/api-management.md).

> API Platform must be enabled for your account before a callable recipe can be exposed as a REST endpoint.

![New call for recipe trigger](~@img/features/callable-recipes/callable-recipe-trigger.png)
*New call for recipe trigger*

### Input fields

| Input field     | Description                                                                       |
| --------------- | --------------------------------------------------------------------------------- |
| Name            | Give this callable recipe trigger a name that describes its function.             |
| Input schema    | If this recipe expects JSON, use this to describe the expected JSON structure.    |
| Response schema | If this recipe responds with JSON data, use this to describe the JSON structure.  |
| Request type    | Select the request data format. Defaults to **JSON request body** if left blank.  |
| Response type   | Select the response data format. Defaults to **JSON response** if left blank.     |

### Output fields
Certain output fields are only available if the recipe is called as an API platform REST endpoint. More information can be found on the [API platform](/api-management.md) documentation.

<table class="unchanged rich-diff-level-one">
  <thead>
    <tr>
        <th colspan=3 width='40%'>Output field</th>
        <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td colspan=3>Calling job ID</td>
      <td>ID of the job in the parent recipe that made the call.</td>
    </tr>
      <td colspan=3>Calling recipe ID</td>
      <td>ID of the parent recipe that made the call.</td>
    </tr>
    <tr>
      <td rowspan=6>
        <i>Only available if called as an API Platform <b>REST endpoint</b></i>
      </td>
      <td colspan =2>Calling IP address</td>
      <td>
        IP address of the client calling this recipe as a REST endpoint.
      </td>
    </tr>
    <tr>
      <td colspan =2>Access profile</td>
      <td>
        Contains <b>ID</b>, <b>name</b> and <b>authentication method</b> of the access profile used to perform the request.
      </td>
    </tr>
    <tr>
      <td colspan =2>API client</td>
      <td>
        Contains <b>API client ID</b> and <b>API client name</b> values to perform the request.
      </td>
    </tr>
    <tr>
      <td colspan =2>JWT claims</td>
      <td>
        <i>Only available a JWT token is used.</i><br>
        Contains <b>Audience</b>, <b>JWT ID</b>, <b>Issuer</b>, and <b>Expiration Time</b>, <b>Not before</b> and <b>Issued At</b> values of the JWT used to authenticate the request.
      </td>
    </tr>
    <tr>
      <td rowspan=2><i>Only if request type is <b>Raw request body</b></i></td>
      <td>Content type</td>
      <td>
        <code>Content-Type</code> header value from the incoming request.
      </td>
    </tr>
    <tr>
      <td>Request body (raw)</td>
      <td>
        Full raw request body.
      </td>
    </tr>
    <tr>
      <td colspan=3>Recipe input</td>
      <td>This output object will contain all the fields defined in <b>Input schema</b>.</td>
    </tr>
  </tbody>
</table>
