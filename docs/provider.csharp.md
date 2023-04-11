# `provider` Submodule <a name="`provider` Submodule" id="@cdktf/provider-dnsimple.provider"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DnsimpleProvider <a name="DnsimpleProvider" id="@cdktf/provider-dnsimple.provider.DnsimpleProvider"></a>

Represents a {@link https://www.terraform.io/docs/providers/dnsimple dnsimple}.

#### Initializers <a name="Initializers" id="@cdktf/provider-dnsimple.provider.DnsimpleProvider.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Dnsimple;

new DnsimpleProvider(Construct Scope, string Id, DnsimpleProviderConfig Config = null);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-dnsimple.provider.DnsimpleProvider.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-dnsimple.provider.DnsimpleProvider.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-dnsimple.provider.DnsimpleProvider.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-dnsimple.provider.DnsimpleProviderConfig">DnsimpleProviderConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-dnsimple.provider.DnsimpleProvider.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-dnsimple.provider.DnsimpleProvider.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Optional</sup> <a name="Config" id="@cdktf/provider-dnsimple.provider.DnsimpleProvider.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-dnsimple.provider.DnsimpleProviderConfig">DnsimpleProviderConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-dnsimple.provider.DnsimpleProvider.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-dnsimple.provider.DnsimpleProvider.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.provider.DnsimpleProvider.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-dnsimple.provider.DnsimpleProvider.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-dnsimple.provider.DnsimpleProvider.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.provider.DnsimpleProvider.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-dnsimple.provider.DnsimpleProvider.resetAccount">ResetAccount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.provider.DnsimpleProvider.resetAlias">ResetAlias</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.provider.DnsimpleProvider.resetPrefetch">ResetPrefetch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.provider.DnsimpleProvider.resetSandbox">ResetSandbox</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.provider.DnsimpleProvider.resetToken">ResetToken</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.provider.DnsimpleProvider.resetUserAgent">ResetUserAgent</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-dnsimple.provider.DnsimpleProvider.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-dnsimple.provider.DnsimpleProvider.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-dnsimple.provider.DnsimpleProvider.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-dnsimple.provider.DnsimpleProvider.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-dnsimple.provider.DnsimpleProvider.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-dnsimple.provider.DnsimpleProvider.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-dnsimple.provider.DnsimpleProvider.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-dnsimple.provider.DnsimpleProvider.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-dnsimple.provider.DnsimpleProvider.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `ResetAccount` <a name="ResetAccount" id="@cdktf/provider-dnsimple.provider.DnsimpleProvider.resetAccount"></a>

```csharp
private void ResetAccount()
```

##### `ResetAlias` <a name="ResetAlias" id="@cdktf/provider-dnsimple.provider.DnsimpleProvider.resetAlias"></a>

```csharp
private void ResetAlias()
```

##### `ResetPrefetch` <a name="ResetPrefetch" id="@cdktf/provider-dnsimple.provider.DnsimpleProvider.resetPrefetch"></a>

```csharp
private void ResetPrefetch()
```

##### `ResetSandbox` <a name="ResetSandbox" id="@cdktf/provider-dnsimple.provider.DnsimpleProvider.resetSandbox"></a>

```csharp
private void ResetSandbox()
```

##### `ResetToken` <a name="ResetToken" id="@cdktf/provider-dnsimple.provider.DnsimpleProvider.resetToken"></a>

```csharp
private void ResetToken()
```

##### `ResetUserAgent` <a name="ResetUserAgent" id="@cdktf/provider-dnsimple.provider.DnsimpleProvider.resetUserAgent"></a>

```csharp
private void ResetUserAgent()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-dnsimple.provider.DnsimpleProvider.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-dnsimple.provider.DnsimpleProvider.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.provider.DnsimpleProvider.isTerraformProvider">IsTerraformProvider</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-dnsimple.provider.DnsimpleProvider.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Dnsimple;

DnsimpleProvider.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-dnsimple.provider.DnsimpleProvider.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-dnsimple.provider.DnsimpleProvider.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Dnsimple;

DnsimpleProvider.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-dnsimple.provider.DnsimpleProvider.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformProvider` <a name="IsTerraformProvider" id="@cdktf/provider-dnsimple.provider.DnsimpleProvider.isTerraformProvider"></a>

```csharp
using HashiCorp.Cdktf.Providers.Dnsimple;

DnsimpleProvider.IsTerraformProvider(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-dnsimple.provider.DnsimpleProvider.isTerraformProvider.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-dnsimple.provider.DnsimpleProvider.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-dnsimple.provider.DnsimpleProvider.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.provider.DnsimpleProvider.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.provider.DnsimpleProvider.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.provider.DnsimpleProvider.property.metaAttributes">MetaAttributes</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.provider.DnsimpleProvider.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.provider.DnsimpleProvider.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.provider.DnsimpleProvider.property.terraformProviderSource">TerraformProviderSource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.provider.DnsimpleProvider.property.alias">Alias</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.provider.DnsimpleProvider.property.accountInput">AccountInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.provider.DnsimpleProvider.property.aliasInput">AliasInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.provider.DnsimpleProvider.property.prefetchInput">PrefetchInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.provider.DnsimpleProvider.property.sandboxInput">SandboxInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.provider.DnsimpleProvider.property.tokenInput">TokenInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.provider.DnsimpleProvider.property.userAgentInput">UserAgentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.provider.DnsimpleProvider.property.account">Account</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.provider.DnsimpleProvider.property.prefetch">Prefetch</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.provider.DnsimpleProvider.property.sandbox">Sandbox</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.provider.DnsimpleProvider.property.token">Token</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.provider.DnsimpleProvider.property.userAgent">UserAgent</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-dnsimple.provider.DnsimpleProvider.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-dnsimple.provider.DnsimpleProvider.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-dnsimple.provider.DnsimpleProvider.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-dnsimple.provider.DnsimpleProvider.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `MetaAttributes`<sup>Required</sup> <a name="MetaAttributes" id="@cdktf/provider-dnsimple.provider.DnsimpleProvider.property.metaAttributes"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> MetaAttributes { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-dnsimple.provider.DnsimpleProvider.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-dnsimple.provider.DnsimpleProvider.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `TerraformProviderSource`<sup>Optional</sup> <a name="TerraformProviderSource" id="@cdktf/provider-dnsimple.provider.DnsimpleProvider.property.terraformProviderSource"></a>

```csharp
public string TerraformProviderSource { get; }
```

- *Type:* string

---

##### `Alias`<sup>Optional</sup> <a name="Alias" id="@cdktf/provider-dnsimple.provider.DnsimpleProvider.property.alias"></a>

```csharp
public string Alias { get; }
```

- *Type:* string

---

##### `AccountInput`<sup>Optional</sup> <a name="AccountInput" id="@cdktf/provider-dnsimple.provider.DnsimpleProvider.property.accountInput"></a>

```csharp
public string AccountInput { get; }
```

- *Type:* string

---

##### `AliasInput`<sup>Optional</sup> <a name="AliasInput" id="@cdktf/provider-dnsimple.provider.DnsimpleProvider.property.aliasInput"></a>

```csharp
public string AliasInput { get; }
```

- *Type:* string

---

##### `PrefetchInput`<sup>Optional</sup> <a name="PrefetchInput" id="@cdktf/provider-dnsimple.provider.DnsimpleProvider.property.prefetchInput"></a>

```csharp
public object PrefetchInput { get; }
```

- *Type:* object

---

##### `SandboxInput`<sup>Optional</sup> <a name="SandboxInput" id="@cdktf/provider-dnsimple.provider.DnsimpleProvider.property.sandboxInput"></a>

```csharp
public object SandboxInput { get; }
```

- *Type:* object

---

##### `TokenInput`<sup>Optional</sup> <a name="TokenInput" id="@cdktf/provider-dnsimple.provider.DnsimpleProvider.property.tokenInput"></a>

```csharp
public string TokenInput { get; }
```

- *Type:* string

---

##### `UserAgentInput`<sup>Optional</sup> <a name="UserAgentInput" id="@cdktf/provider-dnsimple.provider.DnsimpleProvider.property.userAgentInput"></a>

```csharp
public string UserAgentInput { get; }
```

- *Type:* string

---

##### `Account`<sup>Optional</sup> <a name="Account" id="@cdktf/provider-dnsimple.provider.DnsimpleProvider.property.account"></a>

```csharp
public string Account { get; }
```

- *Type:* string

---

##### `Prefetch`<sup>Optional</sup> <a name="Prefetch" id="@cdktf/provider-dnsimple.provider.DnsimpleProvider.property.prefetch"></a>

```csharp
public object Prefetch { get; }
```

- *Type:* object

---

##### `Sandbox`<sup>Optional</sup> <a name="Sandbox" id="@cdktf/provider-dnsimple.provider.DnsimpleProvider.property.sandbox"></a>

```csharp
public object Sandbox { get; }
```

- *Type:* object

---

##### `Token`<sup>Optional</sup> <a name="Token" id="@cdktf/provider-dnsimple.provider.DnsimpleProvider.property.token"></a>

```csharp
public string Token { get; }
```

- *Type:* string

---

##### `UserAgent`<sup>Optional</sup> <a name="UserAgent" id="@cdktf/provider-dnsimple.provider.DnsimpleProvider.property.userAgent"></a>

```csharp
public string UserAgent { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-dnsimple.provider.DnsimpleProvider.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-dnsimple.provider.DnsimpleProvider.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DnsimpleProviderConfig <a name="DnsimpleProviderConfig" id="@cdktf/provider-dnsimple.provider.DnsimpleProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-dnsimple.provider.DnsimpleProviderConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Dnsimple;

new DnsimpleProviderConfig {
    string Account = null,
    string Alias = null,
    object Prefetch = null,
    object Sandbox = null,
    string Token = null,
    string UserAgent = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-dnsimple.provider.DnsimpleProviderConfig.property.account">Account</a></code> | <code>string</code> | The account for API operations. |
| <code><a href="#@cdktf/provider-dnsimple.provider.DnsimpleProviderConfig.property.alias">Alias</a></code> | <code>string</code> | Alias name. |
| <code><a href="#@cdktf/provider-dnsimple.provider.DnsimpleProviderConfig.property.prefetch">Prefetch</a></code> | <code>object</code> | Flag to enable the prefetch of zone records. |
| <code><a href="#@cdktf/provider-dnsimple.provider.DnsimpleProviderConfig.property.sandbox">Sandbox</a></code> | <code>object</code> | Flag to enable the sandbox API. |
| <code><a href="#@cdktf/provider-dnsimple.provider.DnsimpleProviderConfig.property.token">Token</a></code> | <code>string</code> | The API v2 token for API operations. |
| <code><a href="#@cdktf/provider-dnsimple.provider.DnsimpleProviderConfig.property.userAgent">UserAgent</a></code> | <code>string</code> | Custom string to append to the user agent used for sending HTTP requests to the API. |

---

##### `Account`<sup>Optional</sup> <a name="Account" id="@cdktf/provider-dnsimple.provider.DnsimpleProviderConfig.property.account"></a>

```csharp
public string Account { get; set; }
```

- *Type:* string

The account for API operations.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/dnsimple#account DnsimpleProvider#account}

---

##### `Alias`<sup>Optional</sup> <a name="Alias" id="@cdktf/provider-dnsimple.provider.DnsimpleProviderConfig.property.alias"></a>

```csharp
public string Alias { get; set; }
```

- *Type:* string

Alias name.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/dnsimple#alias DnsimpleProvider#alias}

---

##### `Prefetch`<sup>Optional</sup> <a name="Prefetch" id="@cdktf/provider-dnsimple.provider.DnsimpleProviderConfig.property.prefetch"></a>

```csharp
public object Prefetch { get; set; }
```

- *Type:* object

Flag to enable the prefetch of zone records.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/dnsimple#prefetch DnsimpleProvider#prefetch}

---

##### `Sandbox`<sup>Optional</sup> <a name="Sandbox" id="@cdktf/provider-dnsimple.provider.DnsimpleProviderConfig.property.sandbox"></a>

```csharp
public object Sandbox { get; set; }
```

- *Type:* object

Flag to enable the sandbox API.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/dnsimple#sandbox DnsimpleProvider#sandbox}

---

##### `Token`<sup>Optional</sup> <a name="Token" id="@cdktf/provider-dnsimple.provider.DnsimpleProviderConfig.property.token"></a>

```csharp
public string Token { get; set; }
```

- *Type:* string

The API v2 token for API operations.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/dnsimple#token DnsimpleProvider#token}

---

##### `UserAgent`<sup>Optional</sup> <a name="UserAgent" id="@cdktf/provider-dnsimple.provider.DnsimpleProviderConfig.property.userAgent"></a>

```csharp
public string UserAgent { get; set; }
```

- *Type:* string

Custom string to append to the user agent used for sending HTTP requests to the API.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/dnsimple#user_agent DnsimpleProvider#user_agent}

---



