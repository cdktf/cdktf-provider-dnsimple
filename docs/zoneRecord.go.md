# `zoneRecord` Submodule <a name="`zoneRecord` Submodule" id="@cdktf/provider-dnsimple.zoneRecord"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ZoneRecord <a name="ZoneRecord" id="@cdktf/provider-dnsimple.zoneRecord.ZoneRecord"></a>

Represents a {@link https://registry.terraform.io/providers/dnsimple/dnsimple/1.5.0/docs/resources/zone_record dnsimple_zone_record}.

#### Initializers <a name="Initializers" id="@cdktf/provider-dnsimple.zoneRecord.ZoneRecord.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-dnsimple-go/dnsimple/zonerecord"

zonerecord.NewZoneRecord(scope Construct, id *string, config ZoneRecordConfig) ZoneRecord
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-dnsimple.zoneRecord.ZoneRecord.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-dnsimple.zoneRecord.ZoneRecord.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-dnsimple.zoneRecord.ZoneRecord.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-dnsimple.zoneRecord.ZoneRecordConfig">ZoneRecordConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-dnsimple.zoneRecord.ZoneRecord.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-dnsimple.zoneRecord.ZoneRecord.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-dnsimple.zoneRecord.ZoneRecord.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-dnsimple.zoneRecord.ZoneRecordConfig">ZoneRecordConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-dnsimple.zoneRecord.ZoneRecord.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-dnsimple.zoneRecord.ZoneRecord.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.zoneRecord.ZoneRecord.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-dnsimple.zoneRecord.ZoneRecord.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-dnsimple.zoneRecord.ZoneRecord.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.zoneRecord.ZoneRecord.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.zoneRecord.ZoneRecord.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-dnsimple.zoneRecord.ZoneRecord.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-dnsimple.zoneRecord.ZoneRecord.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.zoneRecord.ZoneRecord.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.zoneRecord.ZoneRecord.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.zoneRecord.ZoneRecord.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.zoneRecord.ZoneRecord.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.zoneRecord.ZoneRecord.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.zoneRecord.ZoneRecord.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.zoneRecord.ZoneRecord.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.zoneRecord.ZoneRecord.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.zoneRecord.ZoneRecord.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.zoneRecord.ZoneRecord.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.zoneRecord.ZoneRecord.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.zoneRecord.ZoneRecord.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-dnsimple.zoneRecord.ZoneRecord.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-dnsimple.zoneRecord.ZoneRecord.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-dnsimple.zoneRecord.ZoneRecord.resetPriority">ResetPriority</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.zoneRecord.ZoneRecord.resetRegions">ResetRegions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.zoneRecord.ZoneRecord.resetTtl">ResetTtl</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-dnsimple.zoneRecord.ZoneRecord.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-dnsimple.zoneRecord.ZoneRecord.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-dnsimple.zoneRecord.ZoneRecord.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-dnsimple.zoneRecord.ZoneRecord.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-dnsimple.zoneRecord.ZoneRecord.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-dnsimple.zoneRecord.ZoneRecord.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-dnsimple.zoneRecord.ZoneRecord.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-dnsimple.zoneRecord.ZoneRecord.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-dnsimple.zoneRecord.ZoneRecord.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-dnsimple.zoneRecord.ZoneRecord.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-dnsimple.zoneRecord.ZoneRecord.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-dnsimple.zoneRecord.ZoneRecord.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-dnsimple.zoneRecord.ZoneRecord.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-dnsimple.zoneRecord.ZoneRecord.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-dnsimple.zoneRecord.ZoneRecord.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-dnsimple.zoneRecord.ZoneRecord.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-dnsimple.zoneRecord.ZoneRecord.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-dnsimple.zoneRecord.ZoneRecord.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-dnsimple.zoneRecord.ZoneRecord.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-dnsimple.zoneRecord.ZoneRecord.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-dnsimple.zoneRecord.ZoneRecord.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-dnsimple.zoneRecord.ZoneRecord.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-dnsimple.zoneRecord.ZoneRecord.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-dnsimple.zoneRecord.ZoneRecord.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-dnsimple.zoneRecord.ZoneRecord.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-dnsimple.zoneRecord.ZoneRecord.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-dnsimple.zoneRecord.ZoneRecord.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-dnsimple.zoneRecord.ZoneRecord.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-dnsimple.zoneRecord.ZoneRecord.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-dnsimple.zoneRecord.ZoneRecord.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-dnsimple.zoneRecord.ZoneRecord.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-dnsimple.zoneRecord.ZoneRecord.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-dnsimple.zoneRecord.ZoneRecord.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-dnsimple.zoneRecord.ZoneRecord.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-dnsimple.zoneRecord.ZoneRecord.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-dnsimple.zoneRecord.ZoneRecord.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-dnsimple.zoneRecord.ZoneRecord.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-dnsimple.zoneRecord.ZoneRecord.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-dnsimple.zoneRecord.ZoneRecord.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-dnsimple.zoneRecord.ZoneRecord.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-dnsimple.zoneRecord.ZoneRecord.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-dnsimple.zoneRecord.ZoneRecord.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-dnsimple.zoneRecord.ZoneRecord.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetPriority` <a name="ResetPriority" id="@cdktf/provider-dnsimple.zoneRecord.ZoneRecord.resetPriority"></a>

```go
func ResetPriority()
```

##### `ResetRegions` <a name="ResetRegions" id="@cdktf/provider-dnsimple.zoneRecord.ZoneRecord.resetRegions"></a>

```go
func ResetRegions()
```

##### `ResetTtl` <a name="ResetTtl" id="@cdktf/provider-dnsimple.zoneRecord.ZoneRecord.resetTtl"></a>

```go
func ResetTtl()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-dnsimple.zoneRecord.ZoneRecord.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-dnsimple.zoneRecord.ZoneRecord.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.zoneRecord.ZoneRecord.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.zoneRecord.ZoneRecord.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a ZoneRecord resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-dnsimple.zoneRecord.ZoneRecord.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-dnsimple-go/dnsimple/zonerecord"

zonerecord.ZoneRecord_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-dnsimple.zoneRecord.ZoneRecord.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-dnsimple.zoneRecord.ZoneRecord.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-dnsimple-go/dnsimple/zonerecord"

zonerecord.ZoneRecord_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-dnsimple.zoneRecord.ZoneRecord.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-dnsimple.zoneRecord.ZoneRecord.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-dnsimple-go/dnsimple/zonerecord"

zonerecord.ZoneRecord_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-dnsimple.zoneRecord.ZoneRecord.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-dnsimple.zoneRecord.ZoneRecord.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-dnsimple-go/dnsimple/zonerecord"

zonerecord.ZoneRecord_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a ZoneRecord resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-dnsimple.zoneRecord.ZoneRecord.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-dnsimple.zoneRecord.ZoneRecord.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the ZoneRecord to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-dnsimple.zoneRecord.ZoneRecord.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing ZoneRecord that should be imported.

Refer to the {@link https://registry.terraform.io/providers/dnsimple/dnsimple/1.5.0/docs/resources/zone_record#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-dnsimple.zoneRecord.ZoneRecord.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the ZoneRecord to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-dnsimple.zoneRecord.ZoneRecord.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-dnsimple.zoneRecord.ZoneRecord.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.zoneRecord.ZoneRecord.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.zoneRecord.ZoneRecord.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.zoneRecord.ZoneRecord.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.zoneRecord.ZoneRecord.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.zoneRecord.ZoneRecord.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.zoneRecord.ZoneRecord.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.zoneRecord.ZoneRecord.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.zoneRecord.ZoneRecord.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.zoneRecord.ZoneRecord.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.zoneRecord.ZoneRecord.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.zoneRecord.ZoneRecord.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.zoneRecord.ZoneRecord.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.zoneRecord.ZoneRecord.property.id">Id</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.zoneRecord.ZoneRecord.property.nameNormalized">NameNormalized</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.zoneRecord.ZoneRecord.property.qualifiedName">QualifiedName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.zoneRecord.ZoneRecord.property.valueNormalized">ValueNormalized</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.zoneRecord.ZoneRecord.property.zoneId">ZoneId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.zoneRecord.ZoneRecord.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.zoneRecord.ZoneRecord.property.priorityInput">PriorityInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.zoneRecord.ZoneRecord.property.regionsInput">RegionsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.zoneRecord.ZoneRecord.property.ttlInput">TtlInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.zoneRecord.ZoneRecord.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.zoneRecord.ZoneRecord.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.zoneRecord.ZoneRecord.property.zoneNameInput">ZoneNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.zoneRecord.ZoneRecord.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.zoneRecord.ZoneRecord.property.priority">Priority</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.zoneRecord.ZoneRecord.property.regions">Regions</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.zoneRecord.ZoneRecord.property.ttl">Ttl</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.zoneRecord.ZoneRecord.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.zoneRecord.ZoneRecord.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.zoneRecord.ZoneRecord.property.zoneName">ZoneName</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-dnsimple.zoneRecord.ZoneRecord.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-dnsimple.zoneRecord.ZoneRecord.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-dnsimple.zoneRecord.ZoneRecord.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-dnsimple.zoneRecord.ZoneRecord.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-dnsimple.zoneRecord.ZoneRecord.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-dnsimple.zoneRecord.ZoneRecord.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-dnsimple.zoneRecord.ZoneRecord.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-dnsimple.zoneRecord.ZoneRecord.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-dnsimple.zoneRecord.ZoneRecord.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-dnsimple.zoneRecord.ZoneRecord.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-dnsimple.zoneRecord.ZoneRecord.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-dnsimple.zoneRecord.ZoneRecord.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-dnsimple.zoneRecord.ZoneRecord.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-dnsimple.zoneRecord.ZoneRecord.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-dnsimple.zoneRecord.ZoneRecord.property.id"></a>

```go
func Id() *f64
```

- *Type:* *f64

---

##### `NameNormalized`<sup>Required</sup> <a name="NameNormalized" id="@cdktf/provider-dnsimple.zoneRecord.ZoneRecord.property.nameNormalized"></a>

```go
func NameNormalized() *string
```

- *Type:* *string

---

##### `QualifiedName`<sup>Required</sup> <a name="QualifiedName" id="@cdktf/provider-dnsimple.zoneRecord.ZoneRecord.property.qualifiedName"></a>

```go
func QualifiedName() *string
```

- *Type:* *string

---

##### `ValueNormalized`<sup>Required</sup> <a name="ValueNormalized" id="@cdktf/provider-dnsimple.zoneRecord.ZoneRecord.property.valueNormalized"></a>

```go
func ValueNormalized() *string
```

- *Type:* *string

---

##### `ZoneId`<sup>Required</sup> <a name="ZoneId" id="@cdktf/provider-dnsimple.zoneRecord.ZoneRecord.property.zoneId"></a>

```go
func ZoneId() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-dnsimple.zoneRecord.ZoneRecord.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `PriorityInput`<sup>Optional</sup> <a name="PriorityInput" id="@cdktf/provider-dnsimple.zoneRecord.ZoneRecord.property.priorityInput"></a>

```go
func PriorityInput() *f64
```

- *Type:* *f64

---

##### `RegionsInput`<sup>Optional</sup> <a name="RegionsInput" id="@cdktf/provider-dnsimple.zoneRecord.ZoneRecord.property.regionsInput"></a>

```go
func RegionsInput() *[]*string
```

- *Type:* *[]*string

---

##### `TtlInput`<sup>Optional</sup> <a name="TtlInput" id="@cdktf/provider-dnsimple.zoneRecord.ZoneRecord.property.ttlInput"></a>

```go
func TtlInput() *f64
```

- *Type:* *f64

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-dnsimple.zoneRecord.ZoneRecord.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-dnsimple.zoneRecord.ZoneRecord.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `ZoneNameInput`<sup>Optional</sup> <a name="ZoneNameInput" id="@cdktf/provider-dnsimple.zoneRecord.ZoneRecord.property.zoneNameInput"></a>

```go
func ZoneNameInput() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-dnsimple.zoneRecord.ZoneRecord.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Priority`<sup>Required</sup> <a name="Priority" id="@cdktf/provider-dnsimple.zoneRecord.ZoneRecord.property.priority"></a>

```go
func Priority() *f64
```

- *Type:* *f64

---

##### `Regions`<sup>Required</sup> <a name="Regions" id="@cdktf/provider-dnsimple.zoneRecord.ZoneRecord.property.regions"></a>

```go
func Regions() *[]*string
```

- *Type:* *[]*string

---

##### `Ttl`<sup>Required</sup> <a name="Ttl" id="@cdktf/provider-dnsimple.zoneRecord.ZoneRecord.property.ttl"></a>

```go
func Ttl() *f64
```

- *Type:* *f64

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-dnsimple.zoneRecord.ZoneRecord.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-dnsimple.zoneRecord.ZoneRecord.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `ZoneName`<sup>Required</sup> <a name="ZoneName" id="@cdktf/provider-dnsimple.zoneRecord.ZoneRecord.property.zoneName"></a>

```go
func ZoneName() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-dnsimple.zoneRecord.ZoneRecord.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-dnsimple.zoneRecord.ZoneRecord.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### ZoneRecordConfig <a name="ZoneRecordConfig" id="@cdktf/provider-dnsimple.zoneRecord.ZoneRecordConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-dnsimple.zoneRecord.ZoneRecordConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-dnsimple-go/dnsimple/zonerecord"

&zonerecord.ZoneRecordConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Name: *string,
	Type: *string,
	Value: *string,
	ZoneName: *string,
	Priority: *f64,
	Regions: *[]*string,
	Ttl: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-dnsimple.zoneRecord.ZoneRecordConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.zoneRecord.ZoneRecordConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.zoneRecord.ZoneRecordConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.zoneRecord.ZoneRecordConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.zoneRecord.ZoneRecordConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.zoneRecord.ZoneRecordConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.zoneRecord.ZoneRecordConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.zoneRecord.ZoneRecordConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dnsimple/dnsimple/1.5.0/docs/resources/zone_record#name ZoneRecord#name}. |
| <code><a href="#@cdktf/provider-dnsimple.zoneRecord.ZoneRecordConfig.property.type">Type</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dnsimple/dnsimple/1.5.0/docs/resources/zone_record#type ZoneRecord#type}. |
| <code><a href="#@cdktf/provider-dnsimple.zoneRecord.ZoneRecordConfig.property.value">Value</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dnsimple/dnsimple/1.5.0/docs/resources/zone_record#value ZoneRecord#value}. |
| <code><a href="#@cdktf/provider-dnsimple.zoneRecord.ZoneRecordConfig.property.zoneName">ZoneName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dnsimple/dnsimple/1.5.0/docs/resources/zone_record#zone_name ZoneRecord#zone_name}. |
| <code><a href="#@cdktf/provider-dnsimple.zoneRecord.ZoneRecordConfig.property.priority">Priority</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dnsimple/dnsimple/1.5.0/docs/resources/zone_record#priority ZoneRecord#priority}. |
| <code><a href="#@cdktf/provider-dnsimple.zoneRecord.ZoneRecordConfig.property.regions">Regions</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dnsimple/dnsimple/1.5.0/docs/resources/zone_record#regions ZoneRecord#regions}. |
| <code><a href="#@cdktf/provider-dnsimple.zoneRecord.ZoneRecordConfig.property.ttl">Ttl</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dnsimple/dnsimple/1.5.0/docs/resources/zone_record#ttl ZoneRecord#ttl}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-dnsimple.zoneRecord.ZoneRecordConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-dnsimple.zoneRecord.ZoneRecordConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-dnsimple.zoneRecord.ZoneRecordConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-dnsimple.zoneRecord.ZoneRecordConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-dnsimple.zoneRecord.ZoneRecordConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-dnsimple.zoneRecord.ZoneRecordConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-dnsimple.zoneRecord.ZoneRecordConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-dnsimple.zoneRecord.ZoneRecordConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dnsimple/dnsimple/1.5.0/docs/resources/zone_record#name ZoneRecord#name}.

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-dnsimple.zoneRecord.ZoneRecordConfig.property.type"></a>

```go
Type *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dnsimple/dnsimple/1.5.0/docs/resources/zone_record#type ZoneRecord#type}.

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-dnsimple.zoneRecord.ZoneRecordConfig.property.value"></a>

```go
Value *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dnsimple/dnsimple/1.5.0/docs/resources/zone_record#value ZoneRecord#value}.

---

##### `ZoneName`<sup>Required</sup> <a name="ZoneName" id="@cdktf/provider-dnsimple.zoneRecord.ZoneRecordConfig.property.zoneName"></a>

```go
ZoneName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dnsimple/dnsimple/1.5.0/docs/resources/zone_record#zone_name ZoneRecord#zone_name}.

---

##### `Priority`<sup>Optional</sup> <a name="Priority" id="@cdktf/provider-dnsimple.zoneRecord.ZoneRecordConfig.property.priority"></a>

```go
Priority *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dnsimple/dnsimple/1.5.0/docs/resources/zone_record#priority ZoneRecord#priority}.

---

##### `Regions`<sup>Optional</sup> <a name="Regions" id="@cdktf/provider-dnsimple.zoneRecord.ZoneRecordConfig.property.regions"></a>

```go
Regions *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dnsimple/dnsimple/1.5.0/docs/resources/zone_record#regions ZoneRecord#regions}.

---

##### `Ttl`<sup>Optional</sup> <a name="Ttl" id="@cdktf/provider-dnsimple.zoneRecord.ZoneRecordConfig.property.ttl"></a>

```go
Ttl *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dnsimple/dnsimple/1.5.0/docs/resources/zone_record#ttl ZoneRecord#ttl}.

---



