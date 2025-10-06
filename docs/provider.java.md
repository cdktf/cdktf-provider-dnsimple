# `provider` Submodule <a name="`provider` Submodule" id="@cdktf/provider-dnsimple.provider"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DnsimpleProvider <a name="DnsimpleProvider" id="@cdktf/provider-dnsimple.provider.DnsimpleProvider"></a>

Represents a {@link https://registry.terraform.io/providers/dnsimple/dnsimple/1.10.0/docs dnsimple}.

#### Initializers <a name="Initializers" id="@cdktf/provider-dnsimple.provider.DnsimpleProvider.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.dnsimple.provider.DnsimpleProvider;

DnsimpleProvider.Builder.create(Construct scope, java.lang.String id)
//  .account(java.lang.String)
//  .alias(java.lang.String)
//  .prefetch(java.lang.Boolean|IResolvable)
//  .sandbox(java.lang.Boolean|IResolvable)
//  .token(java.lang.String)
//  .userAgent(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-dnsimple.provider.DnsimpleProvider.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-dnsimple.provider.DnsimpleProvider.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-dnsimple.provider.DnsimpleProvider.Initializer.parameter.account">account</a></code> | <code>java.lang.String</code> | The account for API operations. |
| <code><a href="#@cdktf/provider-dnsimple.provider.DnsimpleProvider.Initializer.parameter.alias">alias</a></code> | <code>java.lang.String</code> | Alias name. |
| <code><a href="#@cdktf/provider-dnsimple.provider.DnsimpleProvider.Initializer.parameter.prefetch">prefetch</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Flag to enable the prefetch of zone records. |
| <code><a href="#@cdktf/provider-dnsimple.provider.DnsimpleProvider.Initializer.parameter.sandbox">sandbox</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Flag to enable the sandbox API. |
| <code><a href="#@cdktf/provider-dnsimple.provider.DnsimpleProvider.Initializer.parameter.token">token</a></code> | <code>java.lang.String</code> | The API v2 token for API operations. |
| <code><a href="#@cdktf/provider-dnsimple.provider.DnsimpleProvider.Initializer.parameter.userAgent">userAgent</a></code> | <code>java.lang.String</code> | Custom string to append to the user agent used for sending HTTP requests to the API. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-dnsimple.provider.DnsimpleProvider.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-dnsimple.provider.DnsimpleProvider.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdktf/provider-dnsimple.provider.DnsimpleProvider.Initializer.parameter.account"></a>

- *Type:* java.lang.String

The account for API operations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dnsimple/dnsimple/1.10.0/docs#account DnsimpleProvider#account}

---

##### `alias`<sup>Optional</sup> <a name="alias" id="@cdktf/provider-dnsimple.provider.DnsimpleProvider.Initializer.parameter.alias"></a>

- *Type:* java.lang.String

Alias name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dnsimple/dnsimple/1.10.0/docs#alias DnsimpleProvider#alias}

---

##### `prefetch`<sup>Optional</sup> <a name="prefetch" id="@cdktf/provider-dnsimple.provider.DnsimpleProvider.Initializer.parameter.prefetch"></a>

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Flag to enable the prefetch of zone records.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dnsimple/dnsimple/1.10.0/docs#prefetch DnsimpleProvider#prefetch}

---

##### `sandbox`<sup>Optional</sup> <a name="sandbox" id="@cdktf/provider-dnsimple.provider.DnsimpleProvider.Initializer.parameter.sandbox"></a>

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Flag to enable the sandbox API.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dnsimple/dnsimple/1.10.0/docs#sandbox DnsimpleProvider#sandbox}

---

##### `token`<sup>Optional</sup> <a name="token" id="@cdktf/provider-dnsimple.provider.DnsimpleProvider.Initializer.parameter.token"></a>

- *Type:* java.lang.String

The API v2 token for API operations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dnsimple/dnsimple/1.10.0/docs#token DnsimpleProvider#token}

---

##### `userAgent`<sup>Optional</sup> <a name="userAgent" id="@cdktf/provider-dnsimple.provider.DnsimpleProvider.Initializer.parameter.userAgent"></a>

- *Type:* java.lang.String

Custom string to append to the user agent used for sending HTTP requests to the API.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dnsimple/dnsimple/1.10.0/docs#user_agent DnsimpleProvider#user_agent}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-dnsimple.provider.DnsimpleProvider.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-dnsimple.provider.DnsimpleProvider.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.provider.DnsimpleProvider.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-dnsimple.provider.DnsimpleProvider.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-dnsimple.provider.DnsimpleProvider.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.provider.DnsimpleProvider.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.provider.DnsimpleProvider.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-dnsimple.provider.DnsimpleProvider.resetAccount">resetAccount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.provider.DnsimpleProvider.resetAlias">resetAlias</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.provider.DnsimpleProvider.resetPrefetch">resetPrefetch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.provider.DnsimpleProvider.resetSandbox">resetSandbox</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.provider.DnsimpleProvider.resetToken">resetToken</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.provider.DnsimpleProvider.resetUserAgent">resetUserAgent</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-dnsimple.provider.DnsimpleProvider.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-dnsimple.provider.DnsimpleProvider.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-dnsimple.provider.DnsimpleProvider.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-dnsimple.provider.DnsimpleProvider.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-dnsimple.provider.DnsimpleProvider.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-dnsimple.provider.DnsimpleProvider.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-dnsimple.provider.DnsimpleProvider.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-dnsimple.provider.DnsimpleProvider.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-dnsimple.provider.DnsimpleProvider.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-dnsimple.provider.DnsimpleProvider.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `resetAccount` <a name="resetAccount" id="@cdktf/provider-dnsimple.provider.DnsimpleProvider.resetAccount"></a>

```java
public void resetAccount()
```

##### `resetAlias` <a name="resetAlias" id="@cdktf/provider-dnsimple.provider.DnsimpleProvider.resetAlias"></a>

```java
public void resetAlias()
```

##### `resetPrefetch` <a name="resetPrefetch" id="@cdktf/provider-dnsimple.provider.DnsimpleProvider.resetPrefetch"></a>

```java
public void resetPrefetch()
```

##### `resetSandbox` <a name="resetSandbox" id="@cdktf/provider-dnsimple.provider.DnsimpleProvider.resetSandbox"></a>

```java
public void resetSandbox()
```

##### `resetToken` <a name="resetToken" id="@cdktf/provider-dnsimple.provider.DnsimpleProvider.resetToken"></a>

```java
public void resetToken()
```

##### `resetUserAgent` <a name="resetUserAgent" id="@cdktf/provider-dnsimple.provider.DnsimpleProvider.resetUserAgent"></a>

```java
public void resetUserAgent()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-dnsimple.provider.DnsimpleProvider.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-dnsimple.provider.DnsimpleProvider.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.provider.DnsimpleProvider.isTerraformProvider">isTerraformProvider</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.provider.DnsimpleProvider.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DnsimpleProvider resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-dnsimple.provider.DnsimpleProvider.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.dnsimple.provider.DnsimpleProvider;

DnsimpleProvider.isConstruct(java.lang.Object x)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-dnsimple.provider.DnsimpleProvider.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-dnsimple.provider.DnsimpleProvider.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.dnsimple.provider.DnsimpleProvider;

DnsimpleProvider.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-dnsimple.provider.DnsimpleProvider.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformProvider` <a name="isTerraformProvider" id="@cdktf/provider-dnsimple.provider.DnsimpleProvider.isTerraformProvider"></a>

```java
import com.hashicorp.cdktf.providers.dnsimple.provider.DnsimpleProvider;

DnsimpleProvider.isTerraformProvider(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-dnsimple.provider.DnsimpleProvider.isTerraformProvider.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-dnsimple.provider.DnsimpleProvider.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.dnsimple.provider.DnsimpleProvider;

DnsimpleProvider.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DnsimpleProvider.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DnsimpleProvider resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-dnsimple.provider.DnsimpleProvider.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-dnsimple.provider.DnsimpleProvider.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DnsimpleProvider to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-dnsimple.provider.DnsimpleProvider.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DnsimpleProvider that should be imported.

Refer to the {@link https://registry.terraform.io/providers/dnsimple/dnsimple/1.10.0/docs#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-dnsimple.provider.DnsimpleProvider.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DnsimpleProvider to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-dnsimple.provider.DnsimpleProvider.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-dnsimple.provider.DnsimpleProvider.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.provider.DnsimpleProvider.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.provider.DnsimpleProvider.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.provider.DnsimpleProvider.property.metaAttributes">metaAttributes</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.provider.DnsimpleProvider.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.provider.DnsimpleProvider.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.provider.DnsimpleProvider.property.terraformProviderSource">terraformProviderSource</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.provider.DnsimpleProvider.property.alias">alias</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.provider.DnsimpleProvider.property.accountInput">accountInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.provider.DnsimpleProvider.property.aliasInput">aliasInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.provider.DnsimpleProvider.property.prefetchInput">prefetchInput</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.provider.DnsimpleProvider.property.sandboxInput">sandboxInput</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.provider.DnsimpleProvider.property.tokenInput">tokenInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.provider.DnsimpleProvider.property.userAgentInput">userAgentInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.provider.DnsimpleProvider.property.account">account</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.provider.DnsimpleProvider.property.prefetch">prefetch</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.provider.DnsimpleProvider.property.sandbox">sandbox</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.provider.DnsimpleProvider.property.token">token</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.provider.DnsimpleProvider.property.userAgent">userAgent</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-dnsimple.provider.DnsimpleProvider.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-dnsimple.provider.DnsimpleProvider.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-dnsimple.provider.DnsimpleProvider.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-dnsimple.provider.DnsimpleProvider.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `metaAttributes`<sup>Required</sup> <a name="metaAttributes" id="@cdktf/provider-dnsimple.provider.DnsimpleProvider.property.metaAttributes"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getMetaAttributes();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-dnsimple.provider.DnsimpleProvider.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-dnsimple.provider.DnsimpleProvider.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `terraformProviderSource`<sup>Optional</sup> <a name="terraformProviderSource" id="@cdktf/provider-dnsimple.provider.DnsimpleProvider.property.terraformProviderSource"></a>

```java
public java.lang.String getTerraformProviderSource();
```

- *Type:* java.lang.String

---

##### `alias`<sup>Optional</sup> <a name="alias" id="@cdktf/provider-dnsimple.provider.DnsimpleProvider.property.alias"></a>

```java
public java.lang.String getAlias();
```

- *Type:* java.lang.String

---

##### `accountInput`<sup>Optional</sup> <a name="accountInput" id="@cdktf/provider-dnsimple.provider.DnsimpleProvider.property.accountInput"></a>

```java
public java.lang.String getAccountInput();
```

- *Type:* java.lang.String

---

##### `aliasInput`<sup>Optional</sup> <a name="aliasInput" id="@cdktf/provider-dnsimple.provider.DnsimpleProvider.property.aliasInput"></a>

```java
public java.lang.String getAliasInput();
```

- *Type:* java.lang.String

---

##### `prefetchInput`<sup>Optional</sup> <a name="prefetchInput" id="@cdktf/provider-dnsimple.provider.DnsimpleProvider.property.prefetchInput"></a>

```java
public java.lang.Boolean|IResolvable getPrefetchInput();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `sandboxInput`<sup>Optional</sup> <a name="sandboxInput" id="@cdktf/provider-dnsimple.provider.DnsimpleProvider.property.sandboxInput"></a>

```java
public java.lang.Boolean|IResolvable getSandboxInput();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `tokenInput`<sup>Optional</sup> <a name="tokenInput" id="@cdktf/provider-dnsimple.provider.DnsimpleProvider.property.tokenInput"></a>

```java
public java.lang.String getTokenInput();
```

- *Type:* java.lang.String

---

##### `userAgentInput`<sup>Optional</sup> <a name="userAgentInput" id="@cdktf/provider-dnsimple.provider.DnsimpleProvider.property.userAgentInput"></a>

```java
public java.lang.String getUserAgentInput();
```

- *Type:* java.lang.String

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdktf/provider-dnsimple.provider.DnsimpleProvider.property.account"></a>

```java
public java.lang.String getAccount();
```

- *Type:* java.lang.String

---

##### `prefetch`<sup>Optional</sup> <a name="prefetch" id="@cdktf/provider-dnsimple.provider.DnsimpleProvider.property.prefetch"></a>

```java
public java.lang.Boolean|IResolvable getPrefetch();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `sandbox`<sup>Optional</sup> <a name="sandbox" id="@cdktf/provider-dnsimple.provider.DnsimpleProvider.property.sandbox"></a>

```java
public java.lang.Boolean|IResolvable getSandbox();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `token`<sup>Optional</sup> <a name="token" id="@cdktf/provider-dnsimple.provider.DnsimpleProvider.property.token"></a>

```java
public java.lang.String getToken();
```

- *Type:* java.lang.String

---

##### `userAgent`<sup>Optional</sup> <a name="userAgent" id="@cdktf/provider-dnsimple.provider.DnsimpleProvider.property.userAgent"></a>

```java
public java.lang.String getUserAgent();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-dnsimple.provider.DnsimpleProvider.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-dnsimple.provider.DnsimpleProvider.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DnsimpleProviderConfig <a name="DnsimpleProviderConfig" id="@cdktf/provider-dnsimple.provider.DnsimpleProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-dnsimple.provider.DnsimpleProviderConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.dnsimple.provider.DnsimpleProviderConfig;

DnsimpleProviderConfig.builder()
//  .account(java.lang.String)
//  .alias(java.lang.String)
//  .prefetch(java.lang.Boolean|IResolvable)
//  .sandbox(java.lang.Boolean|IResolvable)
//  .token(java.lang.String)
//  .userAgent(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-dnsimple.provider.DnsimpleProviderConfig.property.account">account</a></code> | <code>java.lang.String</code> | The account for API operations. |
| <code><a href="#@cdktf/provider-dnsimple.provider.DnsimpleProviderConfig.property.alias">alias</a></code> | <code>java.lang.String</code> | Alias name. |
| <code><a href="#@cdktf/provider-dnsimple.provider.DnsimpleProviderConfig.property.prefetch">prefetch</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Flag to enable the prefetch of zone records. |
| <code><a href="#@cdktf/provider-dnsimple.provider.DnsimpleProviderConfig.property.sandbox">sandbox</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Flag to enable the sandbox API. |
| <code><a href="#@cdktf/provider-dnsimple.provider.DnsimpleProviderConfig.property.token">token</a></code> | <code>java.lang.String</code> | The API v2 token for API operations. |
| <code><a href="#@cdktf/provider-dnsimple.provider.DnsimpleProviderConfig.property.userAgent">userAgent</a></code> | <code>java.lang.String</code> | Custom string to append to the user agent used for sending HTTP requests to the API. |

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdktf/provider-dnsimple.provider.DnsimpleProviderConfig.property.account"></a>

```java
public java.lang.String getAccount();
```

- *Type:* java.lang.String

The account for API operations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dnsimple/dnsimple/1.10.0/docs#account DnsimpleProvider#account}

---

##### `alias`<sup>Optional</sup> <a name="alias" id="@cdktf/provider-dnsimple.provider.DnsimpleProviderConfig.property.alias"></a>

```java
public java.lang.String getAlias();
```

- *Type:* java.lang.String

Alias name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dnsimple/dnsimple/1.10.0/docs#alias DnsimpleProvider#alias}

---

##### `prefetch`<sup>Optional</sup> <a name="prefetch" id="@cdktf/provider-dnsimple.provider.DnsimpleProviderConfig.property.prefetch"></a>

```java
public java.lang.Boolean|IResolvable getPrefetch();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Flag to enable the prefetch of zone records.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dnsimple/dnsimple/1.10.0/docs#prefetch DnsimpleProvider#prefetch}

---

##### `sandbox`<sup>Optional</sup> <a name="sandbox" id="@cdktf/provider-dnsimple.provider.DnsimpleProviderConfig.property.sandbox"></a>

```java
public java.lang.Boolean|IResolvable getSandbox();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Flag to enable the sandbox API.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dnsimple/dnsimple/1.10.0/docs#sandbox DnsimpleProvider#sandbox}

---

##### `token`<sup>Optional</sup> <a name="token" id="@cdktf/provider-dnsimple.provider.DnsimpleProviderConfig.property.token"></a>

```java
public java.lang.String getToken();
```

- *Type:* java.lang.String

The API v2 token for API operations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dnsimple/dnsimple/1.10.0/docs#token DnsimpleProvider#token}

---

##### `userAgent`<sup>Optional</sup> <a name="userAgent" id="@cdktf/provider-dnsimple.provider.DnsimpleProviderConfig.property.userAgent"></a>

```java
public java.lang.String getUserAgent();
```

- *Type:* java.lang.String

Custom string to append to the user agent used for sending HTTP requests to the API.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dnsimple/dnsimple/1.10.0/docs#user_agent DnsimpleProvider#user_agent}

---



