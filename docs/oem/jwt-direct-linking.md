---
title: JWT direct linking
date: 2019-10-24 11:00:00 Z
---

# JWT Direct Linking

Direct linking is the feature that allows an OEM partner to link their platform to a secure resource within a Workato account. This is especially relevant when Workato pages are embedded by IFrame on the partner’s platform.

A Workato session for the user is created before providing access to the secure resource. The access is granted using a JWT token generated using RS256 algorithm using an asymmetric key pair.

## Account structure

Typically the account structure for OEM partners and their customers will be as follows:
![OEM team structure](~@img/oem/jwt-account-heirarchy.png)
*OEM account hierarchy*

## Required information
| **Information** | **Required** | **Source** |
|--|--|--|
| RSA public key | Yes | Partner will provide the public key used to sign the JWT token to Workato. See [Generate JWT keys](#generate-jwt-keys) for more details. |
| OEM vendor API Key | Yes | Please contact Workato when beginning the implementation of direct linking. Workato will provide the OEM vendor API key securely. |
| Customer team account ID | Yes | This is the Workato user ID or external ID for every customer account created. If created using managed_users API, it is returned as the output. <br> If using UI to create the account, <ul><li>The ID of the customer is  in the URL when you click on it <b>OR</b> </li><li> Can be obtained when in the customer account in the data tree in any recipe (User ID) </li></ul> If the external id is passed, it should be prefixed with an <b><i>E</i></b> (eg: EA2300) and the resulting id should be URL encoded. <br> I.e. If the external id is AM10:XV303 the url encoded value will be <i>EAM10%3AXV303</i>. |
| Customer user ID | No | This is the Workato user ID for a user within the customer team. Usually, this account belongs to: <ul><li> An individual within the customer organization <b>OR</b> </li><li> The representative assigned by the partner to manage the customer account.</li></ul>  If created using managed_users API, it is returned as the output. <br><br> If using UI to create the user, <ul><li> The ID of the customer can be obtained when in the customer account in the data tree in any recipe (User ID) </li></ul> |
| Paths to Workato assets | Yes | The paths to Workato pages the partner wishes to link to. <br> E.g. If trying to link to community recipes, the Workato URL is: https://www.workato.com/recipes/browse. <br> Paths include all the parameters and fragments that append https://www.workato.com/. |

## OEM partner implementation

A direct link URL generation micro service should be added to the vendor's server (https://www.vendor.com/integrate_direct_link)
- The endpoint should require vendor authentication.
- This service should accept the path to the workato asset
- The service should generate a url as follows:
   ```
   'https://www.workato.com/direct_link/' + path + '?' + query_params + '#' + fragment
   ```
- The service should generate the JWT token as follows:
  - **Header section**
    - The _typ_ claim should be set to JWT
    - The _alg_ claim should be set RS256
  - Payload section
    - The _sub_ claim should be set to
    ```
    <OEM_VENDOR_API_KEY>:<CUSTOMER_TEAM_ID>:<CUSTOMER_USER_ID>
    ```
    - The _iat_ claim should be set to the current time in epoch
    - The _jti_ claim should be set to a globally unique value. The value should be used only once in a 10 minute duration.
  - Sign using the private key using RS256 algorithm (this should be the private key to the public key previously provided to Workato)
- The service should redirect to the new url with parameter `workato_dl_token` set to the JWT token.

Use the direct link url to refer to any Workato asset in the vendor HTML page. Vendor should never expose JWT token in any HTML page.

**Example:**
```html
<html>
<head></head>
<body>
  <p>
    <a href='https://www.vendor.com/integrate_direct_link/recipes/1' target=_blank>
      Salesforce to Vendor lead sync
    </a>
  </p>
</body>
</html>
```

## Generate JWT keys

### Private key
To generate the private key from scratch, use the following:

```bash
$ openssl genrsa -out private.key 2048
$ cat private.key
-----BEGIN RSA PRIVATE KEY-----

...

-----END RSA PRIVATE KEY-----
```

### Public key
Then, extract the public key using the following:
```bash
$ openssl rsa -in private.key -pubout -out public.key
$ cat public.key
-----BEGIN PUBLIC KEY-----

...

-----END PUBLIC KEY-----
```

### Converting keys to PEM format
You may need to convert your keys from other formats before sending it to Workato if you used a different approach to generate them.

To convert from an SSH public key:
```bash
$ ssh-keygen -f key.pkcs -e -m pem > key.pem
```
