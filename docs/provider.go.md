# `provider` Submodule <a name="`provider` Submodule" id="@cdktf/provider-dnsimple.provider"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DnsimpleProvider <a name="DnsimpleProvider" id="@cdktf/provider-dnsimple.provider.DnsimpleProvider"></a>

Represents a {@link https://registry.terraform.io/providers/dnsimple/dnsimple/1.7.0/docs dnsimple}.

#### Initializers <a name="Initializers" id="@cdktf/provider-dnsimple.provider.DnsimpleProvider.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-dnsimple-go/dnsimple/provider"

provider.NewDnsimpleProvider(scope Construct, id *string, config DnsimpleProviderConfig) DnsimpleProvider
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-dnsimple.provider.DnsimpleProvider.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-dnsimple.provider.DnsimpleProvider.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-dnsimple.provider.DnsimpleProvider.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-dnsimple.provider.DnsimpleProviderConfig">DnsimpleProviderConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-dnsimple.provider.DnsimpleProvider.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-dnsimple.provider.DnsimpleProvider.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-dnsimple.provider.DnsimpleProvider.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-dnsimple.provider.DnsimpleProviderConfig">DnsimpleProviderConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-dnsimple.provider.DnsimpleProvider.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-dnsimple.provider.DnsimpleProvider.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.provider.DnsimpleProvider.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-dnsimple.provider.DnsimpleProvider.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-dnsimple.provider.DnsimpleProvider.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
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

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-dnsimple.provider.DnsimpleProvider.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-dnsimple.provider.DnsimpleProvider.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-dnsimple.provider.DnsimpleProvider.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-dnsimple.provider.DnsimpleProvider.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-dnsimple.provider.DnsimpleProvider.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-dnsimple.provider.DnsimpleProvider.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-dnsimple.provider.DnsimpleProvider.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-dnsimple.provider.DnsimpleProvider.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-dnsimple.provider.DnsimpleProvider.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ResetAccount` <a name="ResetAccount" id="@cdktf/provider-dnsimple.provider.DnsimpleProvider.resetAccount"></a>

```go
func ResetAccount()
```

##### `ResetAlias` <a name="ResetAlias" id="@cdktf/provider-dnsimple.provider.DnsimpleProvider.resetAlias"></a>

```go
func ResetAlias()
```

##### `ResetPrefetch` <a name="ResetPrefetch" id="@cdktf/provider-dnsimple.provider.DnsimpleProvider.resetPrefetch"></a>

```go
func ResetPrefetch()
```

##### `ResetSandbox` <a name="ResetSandbox" id="@cdktf/provider-dnsimple.provider.DnsimpleProvider.resetSandbox"></a>

```go
func ResetSandbox()
```

##### `ResetToken` <a name="ResetToken" id="@cdktf/provider-dnsimple.provider.DnsimpleProvider.resetToken"></a>

```go
func ResetToken()
```

##### `ResetUserAgent` <a name="ResetUserAgent" id="@cdktf/provider-dnsimple.provider.DnsimpleProvider.resetUserAgent"></a>

```go
func ResetUserAgent()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-dnsimple.provider.DnsimpleProvider.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-dnsimple.provider.DnsimpleProvider.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.provider.DnsimpleProvider.isTerraformProvider">IsTerraformProvider</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.provider.DnsimpleProvider.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DnsimpleProvider resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-dnsimple.provider.DnsimpleProvider.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-dnsimple-go/dnsimple/provider"

provider.DnsimpleProvider_IsConstruct(x interface{}) *bool
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

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-dnsimple.provider.DnsimpleProvider.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-dnsimple-go/dnsimple/provider"

provider.DnsimpleProvider_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-dnsimple.provider.DnsimpleProvider.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformProvider` <a name="IsTerraformProvider" id="@cdktf/provider-dnsimple.provider.DnsimpleProvider.isTerraformProvider"></a>

```go
import "github.com/cdktf/cdktf-provider-dnsimple-go/dnsimple/provider"

provider.DnsimpleProvider_IsTerraformProvider(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-dnsimple.provider.DnsimpleProvider.isTerraformProvider.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-dnsimple.provider.DnsimpleProvider.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-dnsimple-go/dnsimple/provider"

provider.DnsimpleProvider_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DnsimpleProvider resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-dnsimple.provider.DnsimpleProvider.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-dnsimple.provider.DnsimpleProvider.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DnsimpleProvider to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-dnsimple.provider.DnsimpleProvider.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DnsimpleProvider that should be imported.

Refer to the {@link https://registry.terraform.io/providers/dnsimple/dnsimple/1.7.0/docs#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-dnsimple.provider.DnsimpleProvider.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DnsimpleProvider to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-dnsimple.provider.DnsimpleProvider.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-dnsimple.provider.DnsimpleProvider.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.provider.DnsimpleProvider.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.provider.DnsimpleProvider.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.provider.DnsimpleProvider.property.metaAttributes">MetaAttributes</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.provider.DnsimpleProvider.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.provider.DnsimpleProvider.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.provider.DnsimpleProvider.property.terraformProviderSource">TerraformProviderSource</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.provider.DnsimpleProvider.property.alias">Alias</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.provider.DnsimpleProvider.property.accountInput">AccountInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.provider.DnsimpleProvider.property.aliasInput">AliasInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.provider.DnsimpleProvider.property.prefetchInput">PrefetchInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.provider.DnsimpleProvider.property.sandboxInput">SandboxInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.provider.DnsimpleProvider.property.tokenInput">TokenInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.provider.DnsimpleProvider.property.userAgentInput">UserAgentInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.provider.DnsimpleProvider.property.account">Account</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.provider.DnsimpleProvider.property.prefetch">Prefetch</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.provider.DnsimpleProvider.property.sandbox">Sandbox</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.provider.DnsimpleProvider.property.token">Token</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.provider.DnsimpleProvider.property.userAgent">UserAgent</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-dnsimple.provider.DnsimpleProvider.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-dnsimple.provider.DnsimpleProvider.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-dnsimple.provider.DnsimpleProvider.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-dnsimple.provider.DnsimpleProvider.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `MetaAttributes`<sup>Required</sup> <a name="MetaAttributes" id="@cdktf/provider-dnsimple.provider.DnsimpleProvider.property.metaAttributes"></a>

```go
func MetaAttributes() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-dnsimple.provider.DnsimpleProvider.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-dnsimple.provider.DnsimpleProvider.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `TerraformProviderSource`<sup>Optional</sup> <a name="TerraformProviderSource" id="@cdktf/provider-dnsimple.provider.DnsimpleProvider.property.terraformProviderSource"></a>

```go
func TerraformProviderSource() *string
```

- *Type:* *string

---

##### `Alias`<sup>Optional</sup> <a name="Alias" id="@cdktf/provider-dnsimple.provider.DnsimpleProvider.property.alias"></a>

```go
func Alias() *string
```

- *Type:* *string

---

##### `AccountInput`<sup>Optional</sup> <a name="AccountInput" id="@cdktf/provider-dnsimple.provider.DnsimpleProvider.property.accountInput"></a>

```go
func AccountInput() *string
```

- *Type:* *string

---

##### `AliasInput`<sup>Optional</sup> <a name="AliasInput" id="@cdktf/provider-dnsimple.provider.DnsimpleProvider.property.aliasInput"></a>

```go
func AliasInput() *string
```

- *Type:* *string

---

##### `PrefetchInput`<sup>Optional</sup> <a name="PrefetchInput" id="@cdktf/provider-dnsimple.provider.DnsimpleProvider.property.prefetchInput"></a>

```go
func PrefetchInput() interface{}
```

- *Type:* interface{}

---

##### `SandboxInput`<sup>Optional</sup> <a name="SandboxInput" id="@cdktf/provider-dnsimple.provider.DnsimpleProvider.property.sandboxInput"></a>

```go
func SandboxInput() interface{}
```

- *Type:* interface{}

---

##### `TokenInput`<sup>Optional</sup> <a name="TokenInput" id="@cdktf/provider-dnsimple.provider.DnsimpleProvider.property.tokenInput"></a>

```go
func TokenInput() *string
```

- *Type:* *string

---

##### `UserAgentInput`<sup>Optional</sup> <a name="UserAgentInput" id="@cdktf/provider-dnsimple.provider.DnsimpleProvider.property.userAgentInput"></a>

```go
func UserAgentInput() *string
```

- *Type:* *string

---

##### `Account`<sup>Optional</sup> <a name="Account" id="@cdktf/provider-dnsimple.provider.DnsimpleProvider.property.account"></a>

```go
func Account() *string
```

- *Type:* *string

---

##### `Prefetch`<sup>Optional</sup> <a name="Prefetch" id="@cdktf/provider-dnsimple.provider.DnsimpleProvider.property.prefetch"></a>

```go
func Prefetch() interface{}
```

- *Type:* interface{}

---

##### `Sandbox`<sup>Optional</sup> <a name="Sandbox" id="@cdktf/provider-dnsimple.provider.DnsimpleProvider.property.sandbox"></a>

```go
func Sandbox() interface{}
```

- *Type:* interface{}

---

##### `Token`<sup>Optional</sup> <a name="Token" id="@cdktf/provider-dnsimple.provider.DnsimpleProvider.property.token"></a>

```go
func Token() *string
```

- *Type:* *string

---

##### `UserAgent`<sup>Optional</sup> <a name="UserAgent" id="@cdktf/provider-dnsimple.provider.DnsimpleProvider.property.userAgent"></a>

```go
func UserAgent() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-dnsimple.provider.DnsimpleProvider.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-dnsimple.provider.DnsimpleProvider.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DnsimpleProviderConfig <a name="DnsimpleProviderConfig" id="@cdktf/provider-dnsimple.provider.DnsimpleProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-dnsimple.provider.DnsimpleProviderConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-dnsimple-go/dnsimple/provider"

&provider.DnsimpleProviderConfig {
	Account: *string,
	Alias: *string,
	Prefetch: interface{},
	Sandbox: interface{},
	Token: *string,
	UserAgent: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-dnsimple.provider.DnsimpleProviderConfig.property.account">Account</a></code> | <code>*string</code> | The account for API operations. |
| <code><a href="#@cdktf/provider-dnsimple.provider.DnsimpleProviderConfig.property.alias">Alias</a></code> | <code>*string</code> | Alias name. |
| <code><a href="#@cdktf/provider-dnsimple.provider.DnsimpleProviderConfig.property.prefetch">Prefetch</a></code> | <code>interface{}</code> | Flag to enable the prefetch of zone records. |
| <code><a href="#@cdktf/provider-dnsimple.provider.DnsimpleProviderConfig.property.sandbox">Sandbox</a></code> | <code>interface{}</code> | Flag to enable the sandbox API. |
| <code><a href="#@cdktf/provider-dnsimple.provider.DnsimpleProviderConfig.property.token">Token</a></code> | <code>*string</code> | The API v2 token for API operations. |
| <code><a href="#@cdktf/provider-dnsimple.provider.DnsimpleProviderConfig.property.userAgent">UserAgent</a></code> | <code>*string</code> | Custom string to append to the user agent used for sending HTTP requests to the API. |

---

##### `Account`<sup>Optional</sup> <a name="Account" id="@cdktf/provider-dnsimple.provider.DnsimpleProviderConfig.property.account"></a>

```go
Account *string
```

- *Type:* *string

The account for API operations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dnsimple/dnsimple/1.7.0/docs#account DnsimpleProvider#account}

---

##### `Alias`<sup>Optional</sup> <a name="Alias" id="@cdktf/provider-dnsimple.provider.DnsimpleProviderConfig.property.alias"></a>

```go
Alias *string
```

- *Type:* *string

Alias name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dnsimple/dnsimple/1.7.0/docs#alias DnsimpleProvider#alias}

---

##### `Prefetch`<sup>Optional</sup> <a name="Prefetch" id="@cdktf/provider-dnsimple.provider.DnsimpleProviderConfig.property.prefetch"></a>

```go
Prefetch interface{}
```

- *Type:* interface{}

Flag to enable the prefetch of zone records.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dnsimple/dnsimple/1.7.0/docs#prefetch DnsimpleProvider#prefetch}

---

##### `Sandbox`<sup>Optional</sup> <a name="Sandbox" id="@cdktf/provider-dnsimple.provider.DnsimpleProviderConfig.property.sandbox"></a>

```go
Sandbox interface{}
```

- *Type:* interface{}

Flag to enable the sandbox API.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dnsimple/dnsimple/1.7.0/docs#sandbox DnsimpleProvider#sandbox}

---

##### `Token`<sup>Optional</sup> <a name="Token" id="@cdktf/provider-dnsimple.provider.DnsimpleProviderConfig.property.token"></a>

```go
Token *string
```

- *Type:* *string

The API v2 token for API operations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dnsimple/dnsimple/1.7.0/docs#token DnsimpleProvider#token}

---

##### `UserAgent`<sup>Optional</sup> <a name="UserAgent" id="@cdktf/provider-dnsimple.provider.DnsimpleProviderConfig.property.userAgent"></a>

```go
UserAgent *string
```

- *Type:* *string

Custom string to append to the user agent used for sending HTTP requests to the API.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dnsimple/dnsimple/1.7.0/docs#user_agent DnsimpleProvider#user_agent}

---



