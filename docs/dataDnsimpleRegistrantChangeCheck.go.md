# `dataDnsimpleRegistrantChangeCheck` Submodule <a name="`dataDnsimpleRegistrantChangeCheck` Submodule" id="@cdktf/provider-dnsimple.dataDnsimpleRegistrantChangeCheck"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDnsimpleRegistrantChangeCheck <a name="DataDnsimpleRegistrantChangeCheck" id="@cdktf/provider-dnsimple.dataDnsimpleRegistrantChangeCheck.DataDnsimpleRegistrantChangeCheck"></a>

Represents a {@link https://registry.terraform.io/providers/dnsimple/dnsimple/1.7.0/docs/data-sources/registrant_change_check dnsimple_registrant_change_check}.

#### Initializers <a name="Initializers" id="@cdktf/provider-dnsimple.dataDnsimpleRegistrantChangeCheck.DataDnsimpleRegistrantChangeCheck.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-dnsimple-go/dnsimple/datadnsimpleregistrantchangecheck"

datadnsimpleregistrantchangecheck.NewDataDnsimpleRegistrantChangeCheck(scope Construct, id *string, config DataDnsimpleRegistrantChangeCheckConfig) DataDnsimpleRegistrantChangeCheck
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-dnsimple.dataDnsimpleRegistrantChangeCheck.DataDnsimpleRegistrantChangeCheck.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-dnsimple.dataDnsimpleRegistrantChangeCheck.DataDnsimpleRegistrantChangeCheck.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-dnsimple.dataDnsimpleRegistrantChangeCheck.DataDnsimpleRegistrantChangeCheck.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-dnsimple.dataDnsimpleRegistrantChangeCheck.DataDnsimpleRegistrantChangeCheckConfig">DataDnsimpleRegistrantChangeCheckConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-dnsimple.dataDnsimpleRegistrantChangeCheck.DataDnsimpleRegistrantChangeCheck.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-dnsimple.dataDnsimpleRegistrantChangeCheck.DataDnsimpleRegistrantChangeCheck.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-dnsimple.dataDnsimpleRegistrantChangeCheck.DataDnsimpleRegistrantChangeCheck.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-dnsimple.dataDnsimpleRegistrantChangeCheck.DataDnsimpleRegistrantChangeCheckConfig">DataDnsimpleRegistrantChangeCheckConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-dnsimple.dataDnsimpleRegistrantChangeCheck.DataDnsimpleRegistrantChangeCheck.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-dnsimple.dataDnsimpleRegistrantChangeCheck.DataDnsimpleRegistrantChangeCheck.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.dataDnsimpleRegistrantChangeCheck.DataDnsimpleRegistrantChangeCheck.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-dnsimple.dataDnsimpleRegistrantChangeCheck.DataDnsimpleRegistrantChangeCheck.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-dnsimple.dataDnsimpleRegistrantChangeCheck.DataDnsimpleRegistrantChangeCheck.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-dnsimple.dataDnsimpleRegistrantChangeCheck.DataDnsimpleRegistrantChangeCheck.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.dataDnsimpleRegistrantChangeCheck.DataDnsimpleRegistrantChangeCheck.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-dnsimple.dataDnsimpleRegistrantChangeCheck.DataDnsimpleRegistrantChangeCheck.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.dataDnsimpleRegistrantChangeCheck.DataDnsimpleRegistrantChangeCheck.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.dataDnsimpleRegistrantChangeCheck.DataDnsimpleRegistrantChangeCheck.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.dataDnsimpleRegistrantChangeCheck.DataDnsimpleRegistrantChangeCheck.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.dataDnsimpleRegistrantChangeCheck.DataDnsimpleRegistrantChangeCheck.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.dataDnsimpleRegistrantChangeCheck.DataDnsimpleRegistrantChangeCheck.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.dataDnsimpleRegistrantChangeCheck.DataDnsimpleRegistrantChangeCheck.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.dataDnsimpleRegistrantChangeCheck.DataDnsimpleRegistrantChangeCheck.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.dataDnsimpleRegistrantChangeCheck.DataDnsimpleRegistrantChangeCheck.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.dataDnsimpleRegistrantChangeCheck.DataDnsimpleRegistrantChangeCheck.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-dnsimple.dataDnsimpleRegistrantChangeCheck.DataDnsimpleRegistrantChangeCheck.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-dnsimple.dataDnsimpleRegistrantChangeCheck.DataDnsimpleRegistrantChangeCheck.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-dnsimple.dataDnsimpleRegistrantChangeCheck.DataDnsimpleRegistrantChangeCheck.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-dnsimple.dataDnsimpleRegistrantChangeCheck.DataDnsimpleRegistrantChangeCheck.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-dnsimple.dataDnsimpleRegistrantChangeCheck.DataDnsimpleRegistrantChangeCheck.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-dnsimple.dataDnsimpleRegistrantChangeCheck.DataDnsimpleRegistrantChangeCheck.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-dnsimple.dataDnsimpleRegistrantChangeCheck.DataDnsimpleRegistrantChangeCheck.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-dnsimple.dataDnsimpleRegistrantChangeCheck.DataDnsimpleRegistrantChangeCheck.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-dnsimple.dataDnsimpleRegistrantChangeCheck.DataDnsimpleRegistrantChangeCheck.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-dnsimple.dataDnsimpleRegistrantChangeCheck.DataDnsimpleRegistrantChangeCheck.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-dnsimple.dataDnsimpleRegistrantChangeCheck.DataDnsimpleRegistrantChangeCheck.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-dnsimple.dataDnsimpleRegistrantChangeCheck.DataDnsimpleRegistrantChangeCheck.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-dnsimple.dataDnsimpleRegistrantChangeCheck.DataDnsimpleRegistrantChangeCheck.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-dnsimple.dataDnsimpleRegistrantChangeCheck.DataDnsimpleRegistrantChangeCheck.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-dnsimple.dataDnsimpleRegistrantChangeCheck.DataDnsimpleRegistrantChangeCheck.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-dnsimple.dataDnsimpleRegistrantChangeCheck.DataDnsimpleRegistrantChangeCheck.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-dnsimple.dataDnsimpleRegistrantChangeCheck.DataDnsimpleRegistrantChangeCheck.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-dnsimple.dataDnsimpleRegistrantChangeCheck.DataDnsimpleRegistrantChangeCheck.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-dnsimple.dataDnsimpleRegistrantChangeCheck.DataDnsimpleRegistrantChangeCheck.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-dnsimple.dataDnsimpleRegistrantChangeCheck.DataDnsimpleRegistrantChangeCheck.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-dnsimple.dataDnsimpleRegistrantChangeCheck.DataDnsimpleRegistrantChangeCheck.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-dnsimple.dataDnsimpleRegistrantChangeCheck.DataDnsimpleRegistrantChangeCheck.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-dnsimple.dataDnsimpleRegistrantChangeCheck.DataDnsimpleRegistrantChangeCheck.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-dnsimple.dataDnsimpleRegistrantChangeCheck.DataDnsimpleRegistrantChangeCheck.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-dnsimple.dataDnsimpleRegistrantChangeCheck.DataDnsimpleRegistrantChangeCheck.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-dnsimple.dataDnsimpleRegistrantChangeCheck.DataDnsimpleRegistrantChangeCheck.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-dnsimple.dataDnsimpleRegistrantChangeCheck.DataDnsimpleRegistrantChangeCheck.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-dnsimple.dataDnsimpleRegistrantChangeCheck.DataDnsimpleRegistrantChangeCheck.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-dnsimple.dataDnsimpleRegistrantChangeCheck.DataDnsimpleRegistrantChangeCheck.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-dnsimple.dataDnsimpleRegistrantChangeCheck.DataDnsimpleRegistrantChangeCheck.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-dnsimple.dataDnsimpleRegistrantChangeCheck.DataDnsimpleRegistrantChangeCheck.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-dnsimple.dataDnsimpleRegistrantChangeCheck.DataDnsimpleRegistrantChangeCheck.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.dataDnsimpleRegistrantChangeCheck.DataDnsimpleRegistrantChangeCheck.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.dataDnsimpleRegistrantChangeCheck.DataDnsimpleRegistrantChangeCheck.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataDnsimpleRegistrantChangeCheck resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-dnsimple.dataDnsimpleRegistrantChangeCheck.DataDnsimpleRegistrantChangeCheck.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-dnsimple-go/dnsimple/datadnsimpleregistrantchangecheck"

datadnsimpleregistrantchangecheck.DataDnsimpleRegistrantChangeCheck_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-dnsimple.dataDnsimpleRegistrantChangeCheck.DataDnsimpleRegistrantChangeCheck.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-dnsimple.dataDnsimpleRegistrantChangeCheck.DataDnsimpleRegistrantChangeCheck.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-dnsimple-go/dnsimple/datadnsimpleregistrantchangecheck"

datadnsimpleregistrantchangecheck.DataDnsimpleRegistrantChangeCheck_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-dnsimple.dataDnsimpleRegistrantChangeCheck.DataDnsimpleRegistrantChangeCheck.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-dnsimple.dataDnsimpleRegistrantChangeCheck.DataDnsimpleRegistrantChangeCheck.isTerraformDataSource"></a>

```go
import "github.com/cdktf/cdktf-provider-dnsimple-go/dnsimple/datadnsimpleregistrantchangecheck"

datadnsimpleregistrantchangecheck.DataDnsimpleRegistrantChangeCheck_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-dnsimple.dataDnsimpleRegistrantChangeCheck.DataDnsimpleRegistrantChangeCheck.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-dnsimple.dataDnsimpleRegistrantChangeCheck.DataDnsimpleRegistrantChangeCheck.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-dnsimple-go/dnsimple/datadnsimpleregistrantchangecheck"

datadnsimpleregistrantchangecheck.DataDnsimpleRegistrantChangeCheck_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataDnsimpleRegistrantChangeCheck resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-dnsimple.dataDnsimpleRegistrantChangeCheck.DataDnsimpleRegistrantChangeCheck.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-dnsimple.dataDnsimpleRegistrantChangeCheck.DataDnsimpleRegistrantChangeCheck.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataDnsimpleRegistrantChangeCheck to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-dnsimple.dataDnsimpleRegistrantChangeCheck.DataDnsimpleRegistrantChangeCheck.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataDnsimpleRegistrantChangeCheck that should be imported.

Refer to the {@link https://registry.terraform.io/providers/dnsimple/dnsimple/1.7.0/docs/data-sources/registrant_change_check#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-dnsimple.dataDnsimpleRegistrantChangeCheck.DataDnsimpleRegistrantChangeCheck.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataDnsimpleRegistrantChangeCheck to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-dnsimple.dataDnsimpleRegistrantChangeCheck.DataDnsimpleRegistrantChangeCheck.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-dnsimple.dataDnsimpleRegistrantChangeCheck.DataDnsimpleRegistrantChangeCheck.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.dataDnsimpleRegistrantChangeCheck.DataDnsimpleRegistrantChangeCheck.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.dataDnsimpleRegistrantChangeCheck.DataDnsimpleRegistrantChangeCheck.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.dataDnsimpleRegistrantChangeCheck.DataDnsimpleRegistrantChangeCheck.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.dataDnsimpleRegistrantChangeCheck.DataDnsimpleRegistrantChangeCheck.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.dataDnsimpleRegistrantChangeCheck.DataDnsimpleRegistrantChangeCheck.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.dataDnsimpleRegistrantChangeCheck.DataDnsimpleRegistrantChangeCheck.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.dataDnsimpleRegistrantChangeCheck.DataDnsimpleRegistrantChangeCheck.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.dataDnsimpleRegistrantChangeCheck.DataDnsimpleRegistrantChangeCheck.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.dataDnsimpleRegistrantChangeCheck.DataDnsimpleRegistrantChangeCheck.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.dataDnsimpleRegistrantChangeCheck.DataDnsimpleRegistrantChangeCheck.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.dataDnsimpleRegistrantChangeCheck.DataDnsimpleRegistrantChangeCheck.property.extendedAttributes">ExtendedAttributes</a></code> | <code><a href="#@cdktf/provider-dnsimple.dataDnsimpleRegistrantChangeCheck.DataDnsimpleRegistrantChangeCheckExtendedAttributesList">DataDnsimpleRegistrantChangeCheckExtendedAttributesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.dataDnsimpleRegistrantChangeCheck.DataDnsimpleRegistrantChangeCheck.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.dataDnsimpleRegistrantChangeCheck.DataDnsimpleRegistrantChangeCheck.property.registryOwnerChange">RegistryOwnerChange</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.dataDnsimpleRegistrantChangeCheck.DataDnsimpleRegistrantChangeCheck.property.contactIdInput">ContactIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.dataDnsimpleRegistrantChangeCheck.DataDnsimpleRegistrantChangeCheck.property.domainIdInput">DomainIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.dataDnsimpleRegistrantChangeCheck.DataDnsimpleRegistrantChangeCheck.property.contactId">ContactId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.dataDnsimpleRegistrantChangeCheck.DataDnsimpleRegistrantChangeCheck.property.domainId">DomainId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-dnsimple.dataDnsimpleRegistrantChangeCheck.DataDnsimpleRegistrantChangeCheck.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-dnsimple.dataDnsimpleRegistrantChangeCheck.DataDnsimpleRegistrantChangeCheck.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-dnsimple.dataDnsimpleRegistrantChangeCheck.DataDnsimpleRegistrantChangeCheck.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-dnsimple.dataDnsimpleRegistrantChangeCheck.DataDnsimpleRegistrantChangeCheck.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-dnsimple.dataDnsimpleRegistrantChangeCheck.DataDnsimpleRegistrantChangeCheck.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-dnsimple.dataDnsimpleRegistrantChangeCheck.DataDnsimpleRegistrantChangeCheck.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-dnsimple.dataDnsimpleRegistrantChangeCheck.DataDnsimpleRegistrantChangeCheck.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-dnsimple.dataDnsimpleRegistrantChangeCheck.DataDnsimpleRegistrantChangeCheck.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-dnsimple.dataDnsimpleRegistrantChangeCheck.DataDnsimpleRegistrantChangeCheck.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-dnsimple.dataDnsimpleRegistrantChangeCheck.DataDnsimpleRegistrantChangeCheck.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-dnsimple.dataDnsimpleRegistrantChangeCheck.DataDnsimpleRegistrantChangeCheck.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-dnsimple.dataDnsimpleRegistrantChangeCheck.DataDnsimpleRegistrantChangeCheck.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `ExtendedAttributes`<sup>Required</sup> <a name="ExtendedAttributes" id="@cdktf/provider-dnsimple.dataDnsimpleRegistrantChangeCheck.DataDnsimpleRegistrantChangeCheck.property.extendedAttributes"></a>

```go
func ExtendedAttributes() DataDnsimpleRegistrantChangeCheckExtendedAttributesList
```

- *Type:* <a href="#@cdktf/provider-dnsimple.dataDnsimpleRegistrantChangeCheck.DataDnsimpleRegistrantChangeCheckExtendedAttributesList">DataDnsimpleRegistrantChangeCheckExtendedAttributesList</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-dnsimple.dataDnsimpleRegistrantChangeCheck.DataDnsimpleRegistrantChangeCheck.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `RegistryOwnerChange`<sup>Required</sup> <a name="RegistryOwnerChange" id="@cdktf/provider-dnsimple.dataDnsimpleRegistrantChangeCheck.DataDnsimpleRegistrantChangeCheck.property.registryOwnerChange"></a>

```go
func RegistryOwnerChange() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `ContactIdInput`<sup>Optional</sup> <a name="ContactIdInput" id="@cdktf/provider-dnsimple.dataDnsimpleRegistrantChangeCheck.DataDnsimpleRegistrantChangeCheck.property.contactIdInput"></a>

```go
func ContactIdInput() *string
```

- *Type:* *string

---

##### `DomainIdInput`<sup>Optional</sup> <a name="DomainIdInput" id="@cdktf/provider-dnsimple.dataDnsimpleRegistrantChangeCheck.DataDnsimpleRegistrantChangeCheck.property.domainIdInput"></a>

```go
func DomainIdInput() *string
```

- *Type:* *string

---

##### `ContactId`<sup>Required</sup> <a name="ContactId" id="@cdktf/provider-dnsimple.dataDnsimpleRegistrantChangeCheck.DataDnsimpleRegistrantChangeCheck.property.contactId"></a>

```go
func ContactId() *string
```

- *Type:* *string

---

##### `DomainId`<sup>Required</sup> <a name="DomainId" id="@cdktf/provider-dnsimple.dataDnsimpleRegistrantChangeCheck.DataDnsimpleRegistrantChangeCheck.property.domainId"></a>

```go
func DomainId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-dnsimple.dataDnsimpleRegistrantChangeCheck.DataDnsimpleRegistrantChangeCheck.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-dnsimple.dataDnsimpleRegistrantChangeCheck.DataDnsimpleRegistrantChangeCheck.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataDnsimpleRegistrantChangeCheckConfig <a name="DataDnsimpleRegistrantChangeCheckConfig" id="@cdktf/provider-dnsimple.dataDnsimpleRegistrantChangeCheck.DataDnsimpleRegistrantChangeCheckConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-dnsimple.dataDnsimpleRegistrantChangeCheck.DataDnsimpleRegistrantChangeCheckConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-dnsimple-go/dnsimple/datadnsimpleregistrantchangecheck"

&datadnsimpleregistrantchangecheck.DataDnsimpleRegistrantChangeCheckConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	ContactId: *string,
	DomainId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-dnsimple.dataDnsimpleRegistrantChangeCheck.DataDnsimpleRegistrantChangeCheckConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.dataDnsimpleRegistrantChangeCheck.DataDnsimpleRegistrantChangeCheckConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.dataDnsimpleRegistrantChangeCheck.DataDnsimpleRegistrantChangeCheckConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.dataDnsimpleRegistrantChangeCheck.DataDnsimpleRegistrantChangeCheckConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.dataDnsimpleRegistrantChangeCheck.DataDnsimpleRegistrantChangeCheckConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.dataDnsimpleRegistrantChangeCheck.DataDnsimpleRegistrantChangeCheckConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.dataDnsimpleRegistrantChangeCheck.DataDnsimpleRegistrantChangeCheckConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.dataDnsimpleRegistrantChangeCheck.DataDnsimpleRegistrantChangeCheckConfig.property.contactId">ContactId</a></code> | <code>*string</code> | DNSimple contact ID for which the registrant change check is being performed. |
| <code><a href="#@cdktf/provider-dnsimple.dataDnsimpleRegistrantChangeCheck.DataDnsimpleRegistrantChangeCheckConfig.property.domainId">DomainId</a></code> | <code>*string</code> | DNSimple domain ID for which the registrant change check is being performed. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-dnsimple.dataDnsimpleRegistrantChangeCheck.DataDnsimpleRegistrantChangeCheckConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-dnsimple.dataDnsimpleRegistrantChangeCheck.DataDnsimpleRegistrantChangeCheckConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-dnsimple.dataDnsimpleRegistrantChangeCheck.DataDnsimpleRegistrantChangeCheckConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-dnsimple.dataDnsimpleRegistrantChangeCheck.DataDnsimpleRegistrantChangeCheckConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-dnsimple.dataDnsimpleRegistrantChangeCheck.DataDnsimpleRegistrantChangeCheckConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-dnsimple.dataDnsimpleRegistrantChangeCheck.DataDnsimpleRegistrantChangeCheckConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-dnsimple.dataDnsimpleRegistrantChangeCheck.DataDnsimpleRegistrantChangeCheckConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ContactId`<sup>Required</sup> <a name="ContactId" id="@cdktf/provider-dnsimple.dataDnsimpleRegistrantChangeCheck.DataDnsimpleRegistrantChangeCheckConfig.property.contactId"></a>

```go
ContactId *string
```

- *Type:* *string

DNSimple contact ID for which the registrant change check is being performed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dnsimple/dnsimple/1.7.0/docs/data-sources/registrant_change_check#contact_id DataDnsimpleRegistrantChangeCheck#contact_id}

---

##### `DomainId`<sup>Required</sup> <a name="DomainId" id="@cdktf/provider-dnsimple.dataDnsimpleRegistrantChangeCheck.DataDnsimpleRegistrantChangeCheckConfig.property.domainId"></a>

```go
DomainId *string
```

- *Type:* *string

DNSimple domain ID for which the registrant change check is being performed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dnsimple/dnsimple/1.7.0/docs/data-sources/registrant_change_check#domain_id DataDnsimpleRegistrantChangeCheck#domain_id}

---

### DataDnsimpleRegistrantChangeCheckExtendedAttributes <a name="DataDnsimpleRegistrantChangeCheckExtendedAttributes" id="@cdktf/provider-dnsimple.dataDnsimpleRegistrantChangeCheck.DataDnsimpleRegistrantChangeCheckExtendedAttributes"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-dnsimple.dataDnsimpleRegistrantChangeCheck.DataDnsimpleRegistrantChangeCheckExtendedAttributes.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-dnsimple-go/dnsimple/datadnsimpleregistrantchangecheck"

&datadnsimpleregistrantchangecheck.DataDnsimpleRegistrantChangeCheckExtendedAttributes {

}
```


### DataDnsimpleRegistrantChangeCheckExtendedAttributesOptions <a name="DataDnsimpleRegistrantChangeCheckExtendedAttributesOptions" id="@cdktf/provider-dnsimple.dataDnsimpleRegistrantChangeCheck.DataDnsimpleRegistrantChangeCheckExtendedAttributesOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-dnsimple.dataDnsimpleRegistrantChangeCheck.DataDnsimpleRegistrantChangeCheckExtendedAttributesOptions.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-dnsimple-go/dnsimple/datadnsimpleregistrantchangecheck"

&datadnsimpleregistrantchangecheck.DataDnsimpleRegistrantChangeCheckExtendedAttributesOptions {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataDnsimpleRegistrantChangeCheckExtendedAttributesList <a name="DataDnsimpleRegistrantChangeCheckExtendedAttributesList" id="@cdktf/provider-dnsimple.dataDnsimpleRegistrantChangeCheck.DataDnsimpleRegistrantChangeCheckExtendedAttributesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-dnsimple.dataDnsimpleRegistrantChangeCheck.DataDnsimpleRegistrantChangeCheckExtendedAttributesList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-dnsimple-go/dnsimple/datadnsimpleregistrantchangecheck"

datadnsimpleregistrantchangecheck.NewDataDnsimpleRegistrantChangeCheckExtendedAttributesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataDnsimpleRegistrantChangeCheckExtendedAttributesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-dnsimple.dataDnsimpleRegistrantChangeCheck.DataDnsimpleRegistrantChangeCheckExtendedAttributesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-dnsimple.dataDnsimpleRegistrantChangeCheck.DataDnsimpleRegistrantChangeCheckExtendedAttributesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-dnsimple.dataDnsimpleRegistrantChangeCheck.DataDnsimpleRegistrantChangeCheckExtendedAttributesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-dnsimple.dataDnsimpleRegistrantChangeCheck.DataDnsimpleRegistrantChangeCheckExtendedAttributesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-dnsimple.dataDnsimpleRegistrantChangeCheck.DataDnsimpleRegistrantChangeCheckExtendedAttributesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-dnsimple.dataDnsimpleRegistrantChangeCheck.DataDnsimpleRegistrantChangeCheckExtendedAttributesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-dnsimple.dataDnsimpleRegistrantChangeCheck.DataDnsimpleRegistrantChangeCheckExtendedAttributesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-dnsimple.dataDnsimpleRegistrantChangeCheck.DataDnsimpleRegistrantChangeCheckExtendedAttributesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.dataDnsimpleRegistrantChangeCheck.DataDnsimpleRegistrantChangeCheckExtendedAttributesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-dnsimple.dataDnsimpleRegistrantChangeCheck.DataDnsimpleRegistrantChangeCheckExtendedAttributesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-dnsimple.dataDnsimpleRegistrantChangeCheck.DataDnsimpleRegistrantChangeCheckExtendedAttributesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-dnsimple.dataDnsimpleRegistrantChangeCheck.DataDnsimpleRegistrantChangeCheckExtendedAttributesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-dnsimple.dataDnsimpleRegistrantChangeCheck.DataDnsimpleRegistrantChangeCheckExtendedAttributesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-dnsimple.dataDnsimpleRegistrantChangeCheck.DataDnsimpleRegistrantChangeCheckExtendedAttributesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-dnsimple.dataDnsimpleRegistrantChangeCheck.DataDnsimpleRegistrantChangeCheckExtendedAttributesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-dnsimple.dataDnsimpleRegistrantChangeCheck.DataDnsimpleRegistrantChangeCheckExtendedAttributesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-dnsimple.dataDnsimpleRegistrantChangeCheck.DataDnsimpleRegistrantChangeCheckExtendedAttributesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-dnsimple.dataDnsimpleRegistrantChangeCheck.DataDnsimpleRegistrantChangeCheckExtendedAttributesList.get"></a>

```go
func Get(index *f64) DataDnsimpleRegistrantChangeCheckExtendedAttributesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-dnsimple.dataDnsimpleRegistrantChangeCheck.DataDnsimpleRegistrantChangeCheckExtendedAttributesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-dnsimple.dataDnsimpleRegistrantChangeCheck.DataDnsimpleRegistrantChangeCheckExtendedAttributesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-dnsimple.dataDnsimpleRegistrantChangeCheck.DataDnsimpleRegistrantChangeCheckExtendedAttributesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-dnsimple.dataDnsimpleRegistrantChangeCheck.DataDnsimpleRegistrantChangeCheckExtendedAttributesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-dnsimple.dataDnsimpleRegistrantChangeCheck.DataDnsimpleRegistrantChangeCheckExtendedAttributesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataDnsimpleRegistrantChangeCheckExtendedAttributesOptionsList <a name="DataDnsimpleRegistrantChangeCheckExtendedAttributesOptionsList" id="@cdktf/provider-dnsimple.dataDnsimpleRegistrantChangeCheck.DataDnsimpleRegistrantChangeCheckExtendedAttributesOptionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-dnsimple.dataDnsimpleRegistrantChangeCheck.DataDnsimpleRegistrantChangeCheckExtendedAttributesOptionsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-dnsimple-go/dnsimple/datadnsimpleregistrantchangecheck"

datadnsimpleregistrantchangecheck.NewDataDnsimpleRegistrantChangeCheckExtendedAttributesOptionsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataDnsimpleRegistrantChangeCheckExtendedAttributesOptionsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-dnsimple.dataDnsimpleRegistrantChangeCheck.DataDnsimpleRegistrantChangeCheckExtendedAttributesOptionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-dnsimple.dataDnsimpleRegistrantChangeCheck.DataDnsimpleRegistrantChangeCheckExtendedAttributesOptionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-dnsimple.dataDnsimpleRegistrantChangeCheck.DataDnsimpleRegistrantChangeCheckExtendedAttributesOptionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-dnsimple.dataDnsimpleRegistrantChangeCheck.DataDnsimpleRegistrantChangeCheckExtendedAttributesOptionsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-dnsimple.dataDnsimpleRegistrantChangeCheck.DataDnsimpleRegistrantChangeCheckExtendedAttributesOptionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-dnsimple.dataDnsimpleRegistrantChangeCheck.DataDnsimpleRegistrantChangeCheckExtendedAttributesOptionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-dnsimple.dataDnsimpleRegistrantChangeCheck.DataDnsimpleRegistrantChangeCheckExtendedAttributesOptionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-dnsimple.dataDnsimpleRegistrantChangeCheck.DataDnsimpleRegistrantChangeCheckExtendedAttributesOptionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.dataDnsimpleRegistrantChangeCheck.DataDnsimpleRegistrantChangeCheckExtendedAttributesOptionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-dnsimple.dataDnsimpleRegistrantChangeCheck.DataDnsimpleRegistrantChangeCheckExtendedAttributesOptionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-dnsimple.dataDnsimpleRegistrantChangeCheck.DataDnsimpleRegistrantChangeCheckExtendedAttributesOptionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-dnsimple.dataDnsimpleRegistrantChangeCheck.DataDnsimpleRegistrantChangeCheckExtendedAttributesOptionsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-dnsimple.dataDnsimpleRegistrantChangeCheck.DataDnsimpleRegistrantChangeCheckExtendedAttributesOptionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-dnsimple.dataDnsimpleRegistrantChangeCheck.DataDnsimpleRegistrantChangeCheckExtendedAttributesOptionsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-dnsimple.dataDnsimpleRegistrantChangeCheck.DataDnsimpleRegistrantChangeCheckExtendedAttributesOptionsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-dnsimple.dataDnsimpleRegistrantChangeCheck.DataDnsimpleRegistrantChangeCheckExtendedAttributesOptionsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-dnsimple.dataDnsimpleRegistrantChangeCheck.DataDnsimpleRegistrantChangeCheckExtendedAttributesOptionsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-dnsimple.dataDnsimpleRegistrantChangeCheck.DataDnsimpleRegistrantChangeCheckExtendedAttributesOptionsList.get"></a>

```go
func Get(index *f64) DataDnsimpleRegistrantChangeCheckExtendedAttributesOptionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-dnsimple.dataDnsimpleRegistrantChangeCheck.DataDnsimpleRegistrantChangeCheckExtendedAttributesOptionsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-dnsimple.dataDnsimpleRegistrantChangeCheck.DataDnsimpleRegistrantChangeCheckExtendedAttributesOptionsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-dnsimple.dataDnsimpleRegistrantChangeCheck.DataDnsimpleRegistrantChangeCheckExtendedAttributesOptionsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-dnsimple.dataDnsimpleRegistrantChangeCheck.DataDnsimpleRegistrantChangeCheckExtendedAttributesOptionsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-dnsimple.dataDnsimpleRegistrantChangeCheck.DataDnsimpleRegistrantChangeCheckExtendedAttributesOptionsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataDnsimpleRegistrantChangeCheckExtendedAttributesOptionsOutputReference <a name="DataDnsimpleRegistrantChangeCheckExtendedAttributesOptionsOutputReference" id="@cdktf/provider-dnsimple.dataDnsimpleRegistrantChangeCheck.DataDnsimpleRegistrantChangeCheckExtendedAttributesOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-dnsimple.dataDnsimpleRegistrantChangeCheck.DataDnsimpleRegistrantChangeCheckExtendedAttributesOptionsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-dnsimple-go/dnsimple/datadnsimpleregistrantchangecheck"

datadnsimpleregistrantchangecheck.NewDataDnsimpleRegistrantChangeCheckExtendedAttributesOptionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataDnsimpleRegistrantChangeCheckExtendedAttributesOptionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-dnsimple.dataDnsimpleRegistrantChangeCheck.DataDnsimpleRegistrantChangeCheckExtendedAttributesOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-dnsimple.dataDnsimpleRegistrantChangeCheck.DataDnsimpleRegistrantChangeCheckExtendedAttributesOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-dnsimple.dataDnsimpleRegistrantChangeCheck.DataDnsimpleRegistrantChangeCheckExtendedAttributesOptionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-dnsimple.dataDnsimpleRegistrantChangeCheck.DataDnsimpleRegistrantChangeCheckExtendedAttributesOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-dnsimple.dataDnsimpleRegistrantChangeCheck.DataDnsimpleRegistrantChangeCheckExtendedAttributesOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-dnsimple.dataDnsimpleRegistrantChangeCheck.DataDnsimpleRegistrantChangeCheckExtendedAttributesOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-dnsimple.dataDnsimpleRegistrantChangeCheck.DataDnsimpleRegistrantChangeCheckExtendedAttributesOptionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-dnsimple.dataDnsimpleRegistrantChangeCheck.DataDnsimpleRegistrantChangeCheckExtendedAttributesOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-dnsimple.dataDnsimpleRegistrantChangeCheck.DataDnsimpleRegistrantChangeCheckExtendedAttributesOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.dataDnsimpleRegistrantChangeCheck.DataDnsimpleRegistrantChangeCheckExtendedAttributesOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.dataDnsimpleRegistrantChangeCheck.DataDnsimpleRegistrantChangeCheckExtendedAttributesOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.dataDnsimpleRegistrantChangeCheck.DataDnsimpleRegistrantChangeCheckExtendedAttributesOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.dataDnsimpleRegistrantChangeCheck.DataDnsimpleRegistrantChangeCheckExtendedAttributesOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.dataDnsimpleRegistrantChangeCheck.DataDnsimpleRegistrantChangeCheckExtendedAttributesOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.dataDnsimpleRegistrantChangeCheck.DataDnsimpleRegistrantChangeCheckExtendedAttributesOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.dataDnsimpleRegistrantChangeCheck.DataDnsimpleRegistrantChangeCheckExtendedAttributesOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.dataDnsimpleRegistrantChangeCheck.DataDnsimpleRegistrantChangeCheckExtendedAttributesOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.dataDnsimpleRegistrantChangeCheck.DataDnsimpleRegistrantChangeCheckExtendedAttributesOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.dataDnsimpleRegistrantChangeCheck.DataDnsimpleRegistrantChangeCheckExtendedAttributesOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.dataDnsimpleRegistrantChangeCheck.DataDnsimpleRegistrantChangeCheckExtendedAttributesOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-dnsimple.dataDnsimpleRegistrantChangeCheck.DataDnsimpleRegistrantChangeCheckExtendedAttributesOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-dnsimple.dataDnsimpleRegistrantChangeCheck.DataDnsimpleRegistrantChangeCheckExtendedAttributesOptionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-dnsimple.dataDnsimpleRegistrantChangeCheck.DataDnsimpleRegistrantChangeCheckExtendedAttributesOptionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-dnsimple.dataDnsimpleRegistrantChangeCheck.DataDnsimpleRegistrantChangeCheckExtendedAttributesOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-dnsimple.dataDnsimpleRegistrantChangeCheck.DataDnsimpleRegistrantChangeCheckExtendedAttributesOptionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-dnsimple.dataDnsimpleRegistrantChangeCheck.DataDnsimpleRegistrantChangeCheckExtendedAttributesOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-dnsimple.dataDnsimpleRegistrantChangeCheck.DataDnsimpleRegistrantChangeCheckExtendedAttributesOptionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-dnsimple.dataDnsimpleRegistrantChangeCheck.DataDnsimpleRegistrantChangeCheckExtendedAttributesOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-dnsimple.dataDnsimpleRegistrantChangeCheck.DataDnsimpleRegistrantChangeCheckExtendedAttributesOptionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-dnsimple.dataDnsimpleRegistrantChangeCheck.DataDnsimpleRegistrantChangeCheckExtendedAttributesOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-dnsimple.dataDnsimpleRegistrantChangeCheck.DataDnsimpleRegistrantChangeCheckExtendedAttributesOptionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-dnsimple.dataDnsimpleRegistrantChangeCheck.DataDnsimpleRegistrantChangeCheckExtendedAttributesOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-dnsimple.dataDnsimpleRegistrantChangeCheck.DataDnsimpleRegistrantChangeCheckExtendedAttributesOptionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-dnsimple.dataDnsimpleRegistrantChangeCheck.DataDnsimpleRegistrantChangeCheckExtendedAttributesOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-dnsimple.dataDnsimpleRegistrantChangeCheck.DataDnsimpleRegistrantChangeCheckExtendedAttributesOptionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-dnsimple.dataDnsimpleRegistrantChangeCheck.DataDnsimpleRegistrantChangeCheckExtendedAttributesOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-dnsimple.dataDnsimpleRegistrantChangeCheck.DataDnsimpleRegistrantChangeCheckExtendedAttributesOptionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-dnsimple.dataDnsimpleRegistrantChangeCheck.DataDnsimpleRegistrantChangeCheckExtendedAttributesOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-dnsimple.dataDnsimpleRegistrantChangeCheck.DataDnsimpleRegistrantChangeCheckExtendedAttributesOptionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-dnsimple.dataDnsimpleRegistrantChangeCheck.DataDnsimpleRegistrantChangeCheckExtendedAttributesOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-dnsimple.dataDnsimpleRegistrantChangeCheck.DataDnsimpleRegistrantChangeCheckExtendedAttributesOptionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-dnsimple.dataDnsimpleRegistrantChangeCheck.DataDnsimpleRegistrantChangeCheckExtendedAttributesOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-dnsimple.dataDnsimpleRegistrantChangeCheck.DataDnsimpleRegistrantChangeCheckExtendedAttributesOptionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-dnsimple.dataDnsimpleRegistrantChangeCheck.DataDnsimpleRegistrantChangeCheckExtendedAttributesOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-dnsimple.dataDnsimpleRegistrantChangeCheck.DataDnsimpleRegistrantChangeCheckExtendedAttributesOptionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-dnsimple.dataDnsimpleRegistrantChangeCheck.DataDnsimpleRegistrantChangeCheckExtendedAttributesOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-dnsimple.dataDnsimpleRegistrantChangeCheck.DataDnsimpleRegistrantChangeCheckExtendedAttributesOptionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.dataDnsimpleRegistrantChangeCheck.DataDnsimpleRegistrantChangeCheckExtendedAttributesOptionsOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.dataDnsimpleRegistrantChangeCheck.DataDnsimpleRegistrantChangeCheckExtendedAttributesOptionsOutputReference.property.title">Title</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.dataDnsimpleRegistrantChangeCheck.DataDnsimpleRegistrantChangeCheckExtendedAttributesOptionsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.dataDnsimpleRegistrantChangeCheck.DataDnsimpleRegistrantChangeCheckExtendedAttributesOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-dnsimple.dataDnsimpleRegistrantChangeCheck.DataDnsimpleRegistrantChangeCheckExtendedAttributesOptions">DataDnsimpleRegistrantChangeCheckExtendedAttributesOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-dnsimple.dataDnsimpleRegistrantChangeCheck.DataDnsimpleRegistrantChangeCheckExtendedAttributesOptionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-dnsimple.dataDnsimpleRegistrantChangeCheck.DataDnsimpleRegistrantChangeCheckExtendedAttributesOptionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-dnsimple.dataDnsimpleRegistrantChangeCheck.DataDnsimpleRegistrantChangeCheckExtendedAttributesOptionsOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Title`<sup>Required</sup> <a name="Title" id="@cdktf/provider-dnsimple.dataDnsimpleRegistrantChangeCheck.DataDnsimpleRegistrantChangeCheckExtendedAttributesOptionsOutputReference.property.title"></a>

```go
func Title() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-dnsimple.dataDnsimpleRegistrantChangeCheck.DataDnsimpleRegistrantChangeCheckExtendedAttributesOptionsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-dnsimple.dataDnsimpleRegistrantChangeCheck.DataDnsimpleRegistrantChangeCheckExtendedAttributesOptionsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataDnsimpleRegistrantChangeCheckExtendedAttributesOptions
```

- *Type:* <a href="#@cdktf/provider-dnsimple.dataDnsimpleRegistrantChangeCheck.DataDnsimpleRegistrantChangeCheckExtendedAttributesOptions">DataDnsimpleRegistrantChangeCheckExtendedAttributesOptions</a>

---


### DataDnsimpleRegistrantChangeCheckExtendedAttributesOutputReference <a name="DataDnsimpleRegistrantChangeCheckExtendedAttributesOutputReference" id="@cdktf/provider-dnsimple.dataDnsimpleRegistrantChangeCheck.DataDnsimpleRegistrantChangeCheckExtendedAttributesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-dnsimple.dataDnsimpleRegistrantChangeCheck.DataDnsimpleRegistrantChangeCheckExtendedAttributesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-dnsimple-go/dnsimple/datadnsimpleregistrantchangecheck"

datadnsimpleregistrantchangecheck.NewDataDnsimpleRegistrantChangeCheckExtendedAttributesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataDnsimpleRegistrantChangeCheckExtendedAttributesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-dnsimple.dataDnsimpleRegistrantChangeCheck.DataDnsimpleRegistrantChangeCheckExtendedAttributesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-dnsimple.dataDnsimpleRegistrantChangeCheck.DataDnsimpleRegistrantChangeCheckExtendedAttributesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-dnsimple.dataDnsimpleRegistrantChangeCheck.DataDnsimpleRegistrantChangeCheckExtendedAttributesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-dnsimple.dataDnsimpleRegistrantChangeCheck.DataDnsimpleRegistrantChangeCheckExtendedAttributesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-dnsimple.dataDnsimpleRegistrantChangeCheck.DataDnsimpleRegistrantChangeCheckExtendedAttributesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-dnsimple.dataDnsimpleRegistrantChangeCheck.DataDnsimpleRegistrantChangeCheckExtendedAttributesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-dnsimple.dataDnsimpleRegistrantChangeCheck.DataDnsimpleRegistrantChangeCheckExtendedAttributesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-dnsimple.dataDnsimpleRegistrantChangeCheck.DataDnsimpleRegistrantChangeCheckExtendedAttributesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-dnsimple.dataDnsimpleRegistrantChangeCheck.DataDnsimpleRegistrantChangeCheckExtendedAttributesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.dataDnsimpleRegistrantChangeCheck.DataDnsimpleRegistrantChangeCheckExtendedAttributesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.dataDnsimpleRegistrantChangeCheck.DataDnsimpleRegistrantChangeCheckExtendedAttributesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.dataDnsimpleRegistrantChangeCheck.DataDnsimpleRegistrantChangeCheckExtendedAttributesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.dataDnsimpleRegistrantChangeCheck.DataDnsimpleRegistrantChangeCheckExtendedAttributesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.dataDnsimpleRegistrantChangeCheck.DataDnsimpleRegistrantChangeCheckExtendedAttributesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.dataDnsimpleRegistrantChangeCheck.DataDnsimpleRegistrantChangeCheckExtendedAttributesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.dataDnsimpleRegistrantChangeCheck.DataDnsimpleRegistrantChangeCheckExtendedAttributesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.dataDnsimpleRegistrantChangeCheck.DataDnsimpleRegistrantChangeCheckExtendedAttributesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.dataDnsimpleRegistrantChangeCheck.DataDnsimpleRegistrantChangeCheckExtendedAttributesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.dataDnsimpleRegistrantChangeCheck.DataDnsimpleRegistrantChangeCheckExtendedAttributesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.dataDnsimpleRegistrantChangeCheck.DataDnsimpleRegistrantChangeCheckExtendedAttributesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-dnsimple.dataDnsimpleRegistrantChangeCheck.DataDnsimpleRegistrantChangeCheckExtendedAttributesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-dnsimple.dataDnsimpleRegistrantChangeCheck.DataDnsimpleRegistrantChangeCheckExtendedAttributesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-dnsimple.dataDnsimpleRegistrantChangeCheck.DataDnsimpleRegistrantChangeCheckExtendedAttributesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-dnsimple.dataDnsimpleRegistrantChangeCheck.DataDnsimpleRegistrantChangeCheckExtendedAttributesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-dnsimple.dataDnsimpleRegistrantChangeCheck.DataDnsimpleRegistrantChangeCheckExtendedAttributesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-dnsimple.dataDnsimpleRegistrantChangeCheck.DataDnsimpleRegistrantChangeCheckExtendedAttributesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-dnsimple.dataDnsimpleRegistrantChangeCheck.DataDnsimpleRegistrantChangeCheckExtendedAttributesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-dnsimple.dataDnsimpleRegistrantChangeCheck.DataDnsimpleRegistrantChangeCheckExtendedAttributesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-dnsimple.dataDnsimpleRegistrantChangeCheck.DataDnsimpleRegistrantChangeCheckExtendedAttributesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-dnsimple.dataDnsimpleRegistrantChangeCheck.DataDnsimpleRegistrantChangeCheckExtendedAttributesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-dnsimple.dataDnsimpleRegistrantChangeCheck.DataDnsimpleRegistrantChangeCheckExtendedAttributesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-dnsimple.dataDnsimpleRegistrantChangeCheck.DataDnsimpleRegistrantChangeCheckExtendedAttributesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-dnsimple.dataDnsimpleRegistrantChangeCheck.DataDnsimpleRegistrantChangeCheckExtendedAttributesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-dnsimple.dataDnsimpleRegistrantChangeCheck.DataDnsimpleRegistrantChangeCheckExtendedAttributesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-dnsimple.dataDnsimpleRegistrantChangeCheck.DataDnsimpleRegistrantChangeCheckExtendedAttributesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-dnsimple.dataDnsimpleRegistrantChangeCheck.DataDnsimpleRegistrantChangeCheckExtendedAttributesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-dnsimple.dataDnsimpleRegistrantChangeCheck.DataDnsimpleRegistrantChangeCheckExtendedAttributesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-dnsimple.dataDnsimpleRegistrantChangeCheck.DataDnsimpleRegistrantChangeCheckExtendedAttributesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-dnsimple.dataDnsimpleRegistrantChangeCheck.DataDnsimpleRegistrantChangeCheckExtendedAttributesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-dnsimple.dataDnsimpleRegistrantChangeCheck.DataDnsimpleRegistrantChangeCheckExtendedAttributesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-dnsimple.dataDnsimpleRegistrantChangeCheck.DataDnsimpleRegistrantChangeCheckExtendedAttributesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-dnsimple.dataDnsimpleRegistrantChangeCheck.DataDnsimpleRegistrantChangeCheckExtendedAttributesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-dnsimple.dataDnsimpleRegistrantChangeCheck.DataDnsimpleRegistrantChangeCheckExtendedAttributesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-dnsimple.dataDnsimpleRegistrantChangeCheck.DataDnsimpleRegistrantChangeCheckExtendedAttributesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-dnsimple.dataDnsimpleRegistrantChangeCheck.DataDnsimpleRegistrantChangeCheckExtendedAttributesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-dnsimple.dataDnsimpleRegistrantChangeCheck.DataDnsimpleRegistrantChangeCheckExtendedAttributesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-dnsimple.dataDnsimpleRegistrantChangeCheck.DataDnsimpleRegistrantChangeCheckExtendedAttributesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.dataDnsimpleRegistrantChangeCheck.DataDnsimpleRegistrantChangeCheckExtendedAttributesOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.dataDnsimpleRegistrantChangeCheck.DataDnsimpleRegistrantChangeCheckExtendedAttributesOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.dataDnsimpleRegistrantChangeCheck.DataDnsimpleRegistrantChangeCheckExtendedAttributesOutputReference.property.options">Options</a></code> | <code><a href="#@cdktf/provider-dnsimple.dataDnsimpleRegistrantChangeCheck.DataDnsimpleRegistrantChangeCheckExtendedAttributesOptionsList">DataDnsimpleRegistrantChangeCheckExtendedAttributesOptionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.dataDnsimpleRegistrantChangeCheck.DataDnsimpleRegistrantChangeCheckExtendedAttributesOutputReference.property.required">Required</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.dataDnsimpleRegistrantChangeCheck.DataDnsimpleRegistrantChangeCheckExtendedAttributesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-dnsimple.dataDnsimpleRegistrantChangeCheck.DataDnsimpleRegistrantChangeCheckExtendedAttributes">DataDnsimpleRegistrantChangeCheckExtendedAttributes</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-dnsimple.dataDnsimpleRegistrantChangeCheck.DataDnsimpleRegistrantChangeCheckExtendedAttributesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-dnsimple.dataDnsimpleRegistrantChangeCheck.DataDnsimpleRegistrantChangeCheckExtendedAttributesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-dnsimple.dataDnsimpleRegistrantChangeCheck.DataDnsimpleRegistrantChangeCheckExtendedAttributesOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-dnsimple.dataDnsimpleRegistrantChangeCheck.DataDnsimpleRegistrantChangeCheckExtendedAttributesOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Options`<sup>Required</sup> <a name="Options" id="@cdktf/provider-dnsimple.dataDnsimpleRegistrantChangeCheck.DataDnsimpleRegistrantChangeCheckExtendedAttributesOutputReference.property.options"></a>

```go
func Options() DataDnsimpleRegistrantChangeCheckExtendedAttributesOptionsList
```

- *Type:* <a href="#@cdktf/provider-dnsimple.dataDnsimpleRegistrantChangeCheck.DataDnsimpleRegistrantChangeCheckExtendedAttributesOptionsList">DataDnsimpleRegistrantChangeCheckExtendedAttributesOptionsList</a>

---

##### `Required`<sup>Required</sup> <a name="Required" id="@cdktf/provider-dnsimple.dataDnsimpleRegistrantChangeCheck.DataDnsimpleRegistrantChangeCheckExtendedAttributesOutputReference.property.required"></a>

```go
func Required() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-dnsimple.dataDnsimpleRegistrantChangeCheck.DataDnsimpleRegistrantChangeCheckExtendedAttributesOutputReference.property.internalValue"></a>

```go
func InternalValue() DataDnsimpleRegistrantChangeCheckExtendedAttributes
```

- *Type:* <a href="#@cdktf/provider-dnsimple.dataDnsimpleRegistrantChangeCheck.DataDnsimpleRegistrantChangeCheckExtendedAttributes">DataDnsimpleRegistrantChangeCheckExtendedAttributes</a>

---



