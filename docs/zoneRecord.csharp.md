# `zoneRecord` Submodule <a name="`zoneRecord` Submodule" id="@cdktf/provider-dnsimple.zoneRecord"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ZoneRecord <a name="ZoneRecord" id="@cdktf/provider-dnsimple.zoneRecord.ZoneRecord"></a>

Represents a {@link https://registry.terraform.io/providers/dnsimple/dnsimple/1.10.0/docs/resources/zone_record dnsimple_zone_record}.

#### Initializers <a name="Initializers" id="@cdktf/provider-dnsimple.zoneRecord.ZoneRecord.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Dnsimple;

new ZoneRecord(Construct Scope, string Id, ZoneRecordConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-dnsimple.zoneRecord.ZoneRecord.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-dnsimple.zoneRecord.ZoneRecord.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-dnsimple.zoneRecord.ZoneRecord.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-dnsimple.zoneRecord.ZoneRecordConfig">ZoneRecordConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-dnsimple.zoneRecord.ZoneRecord.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-dnsimple.zoneRecord.ZoneRecord.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-dnsimple.zoneRecord.ZoneRecord.Initializer.parameter.config"></a>

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

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-dnsimple.zoneRecord.ZoneRecord.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-dnsimple.zoneRecord.ZoneRecord.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-dnsimple.zoneRecord.ZoneRecord.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-dnsimple.zoneRecord.ZoneRecord.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-dnsimple.zoneRecord.ZoneRecord.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-dnsimple.zoneRecord.ZoneRecord.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-dnsimple.zoneRecord.ZoneRecord.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-dnsimple.zoneRecord.ZoneRecord.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-dnsimple.zoneRecord.ZoneRecord.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-dnsimple.zoneRecord.ZoneRecord.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-dnsimple.zoneRecord.ZoneRecord.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-dnsimple.zoneRecord.ZoneRecord.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-dnsimple.zoneRecord.ZoneRecord.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-dnsimple.zoneRecord.ZoneRecord.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-dnsimple.zoneRecord.ZoneRecord.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-dnsimple.zoneRecord.ZoneRecord.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-dnsimple.zoneRecord.ZoneRecord.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-dnsimple.zoneRecord.ZoneRecord.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-dnsimple.zoneRecord.ZoneRecord.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-dnsimple.zoneRecord.ZoneRecord.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-dnsimple.zoneRecord.ZoneRecord.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-dnsimple.zoneRecord.ZoneRecord.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-dnsimple.zoneRecord.ZoneRecord.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-dnsimple.zoneRecord.ZoneRecord.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-dnsimple.zoneRecord.ZoneRecord.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-dnsimple.zoneRecord.ZoneRecord.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-dnsimple.zoneRecord.ZoneRecord.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-dnsimple.zoneRecord.ZoneRecord.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-dnsimple.zoneRecord.ZoneRecord.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-dnsimple.zoneRecord.ZoneRecord.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-dnsimple.zoneRecord.ZoneRecord.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-dnsimple.zoneRecord.ZoneRecord.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-dnsimple.zoneRecord.ZoneRecord.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-dnsimple.zoneRecord.ZoneRecord.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-dnsimple.zoneRecord.ZoneRecord.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-dnsimple.zoneRecord.ZoneRecord.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-dnsimple.zoneRecord.ZoneRecord.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-dnsimple.zoneRecord.ZoneRecord.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-dnsimple.zoneRecord.ZoneRecord.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-dnsimple.zoneRecord.ZoneRecord.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-dnsimple.zoneRecord.ZoneRecord.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-dnsimple.zoneRecord.ZoneRecord.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetPriority` <a name="ResetPriority" id="@cdktf/provider-dnsimple.zoneRecord.ZoneRecord.resetPriority"></a>

```csharp
private void ResetPriority()
```

##### `ResetRegions` <a name="ResetRegions" id="@cdktf/provider-dnsimple.zoneRecord.ZoneRecord.resetRegions"></a>

```csharp
private void ResetRegions()
```

##### `ResetTtl` <a name="ResetTtl" id="@cdktf/provider-dnsimple.zoneRecord.ZoneRecord.resetTtl"></a>

```csharp
private void ResetTtl()
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

```csharp
using HashiCorp.Cdktf.Providers.Dnsimple;

ZoneRecord.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-dnsimple.zoneRecord.ZoneRecord.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-dnsimple.zoneRecord.ZoneRecord.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Dnsimple;

ZoneRecord.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-dnsimple.zoneRecord.ZoneRecord.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-dnsimple.zoneRecord.ZoneRecord.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Dnsimple;

ZoneRecord.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-dnsimple.zoneRecord.ZoneRecord.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-dnsimple.zoneRecord.ZoneRecord.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Dnsimple;

ZoneRecord.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a ZoneRecord resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-dnsimple.zoneRecord.ZoneRecord.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-dnsimple.zoneRecord.ZoneRecord.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ZoneRecord to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-dnsimple.zoneRecord.ZoneRecord.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ZoneRecord that should be imported.

Refer to the {@link https://registry.terraform.io/providers/dnsimple/dnsimple/1.10.0/docs/resources/zone_record#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-dnsimple.zoneRecord.ZoneRecord.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the ZoneRecord to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-dnsimple.zoneRecord.ZoneRecord.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-dnsimple.zoneRecord.ZoneRecord.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.zoneRecord.ZoneRecord.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.zoneRecord.ZoneRecord.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.zoneRecord.ZoneRecord.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.zoneRecord.ZoneRecord.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.zoneRecord.ZoneRecord.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.zoneRecord.ZoneRecord.property.connection">Connection</a></code> | <code>HashiCorp.Cdktf.SSHProvisionerConnection\|HashiCorp.Cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.zoneRecord.ZoneRecord.property.count">Count</a></code> | <code>double\|HashiCorp.Cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.zoneRecord.ZoneRecord.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.zoneRecord.ZoneRecord.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.zoneRecord.ZoneRecord.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.zoneRecord.ZoneRecord.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.zoneRecord.ZoneRecord.property.provisioners">Provisioners</a></code> | <code>HashiCorp.Cdktf.FileProvisioner\|HashiCorp.Cdktf.LocalExecProvisioner\|HashiCorp.Cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.zoneRecord.ZoneRecord.property.id">Id</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.zoneRecord.ZoneRecord.property.nameNormalized">NameNormalized</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.zoneRecord.ZoneRecord.property.qualifiedName">QualifiedName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.zoneRecord.ZoneRecord.property.valueNormalized">ValueNormalized</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.zoneRecord.ZoneRecord.property.zoneId">ZoneId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.zoneRecord.ZoneRecord.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.zoneRecord.ZoneRecord.property.priorityInput">PriorityInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.zoneRecord.ZoneRecord.property.regionsInput">RegionsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.zoneRecord.ZoneRecord.property.ttlInput">TtlInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.zoneRecord.ZoneRecord.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.zoneRecord.ZoneRecord.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.zoneRecord.ZoneRecord.property.zoneNameInput">ZoneNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.zoneRecord.ZoneRecord.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.zoneRecord.ZoneRecord.property.priority">Priority</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.zoneRecord.ZoneRecord.property.regions">Regions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.zoneRecord.ZoneRecord.property.ttl">Ttl</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.zoneRecord.ZoneRecord.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.zoneRecord.ZoneRecord.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.zoneRecord.ZoneRecord.property.zoneName">ZoneName</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-dnsimple.zoneRecord.ZoneRecord.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-dnsimple.zoneRecord.ZoneRecord.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-dnsimple.zoneRecord.ZoneRecord.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-dnsimple.zoneRecord.ZoneRecord.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-dnsimple.zoneRecord.ZoneRecord.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-dnsimple.zoneRecord.ZoneRecord.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-dnsimple.zoneRecord.ZoneRecord.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-dnsimple.zoneRecord.ZoneRecord.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* HashiCorp.Cdktf.SSHProvisionerConnection|HashiCorp.Cdktf.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-dnsimple.zoneRecord.ZoneRecord.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|HashiCorp.Cdktf.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-dnsimple.zoneRecord.ZoneRecord.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-dnsimple.zoneRecord.ZoneRecord.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-dnsimple.zoneRecord.ZoneRecord.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-dnsimple.zoneRecord.ZoneRecord.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-dnsimple.zoneRecord.ZoneRecord.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* HashiCorp.Cdktf.FileProvisioner|HashiCorp.Cdktf.LocalExecProvisioner|HashiCorp.Cdktf.RemoteExecProvisioner[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-dnsimple.zoneRecord.ZoneRecord.property.id"></a>

```csharp
public double Id { get; }
```

- *Type:* double

---

##### `NameNormalized`<sup>Required</sup> <a name="NameNormalized" id="@cdktf/provider-dnsimple.zoneRecord.ZoneRecord.property.nameNormalized"></a>

```csharp
public string NameNormalized { get; }
```

- *Type:* string

---

##### `QualifiedName`<sup>Required</sup> <a name="QualifiedName" id="@cdktf/provider-dnsimple.zoneRecord.ZoneRecord.property.qualifiedName"></a>

```csharp
public string QualifiedName { get; }
```

- *Type:* string

---

##### `ValueNormalized`<sup>Required</sup> <a name="ValueNormalized" id="@cdktf/provider-dnsimple.zoneRecord.ZoneRecord.property.valueNormalized"></a>

```csharp
public string ValueNormalized { get; }
```

- *Type:* string

---

##### `ZoneId`<sup>Required</sup> <a name="ZoneId" id="@cdktf/provider-dnsimple.zoneRecord.ZoneRecord.property.zoneId"></a>

```csharp
public string ZoneId { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-dnsimple.zoneRecord.ZoneRecord.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `PriorityInput`<sup>Optional</sup> <a name="PriorityInput" id="@cdktf/provider-dnsimple.zoneRecord.ZoneRecord.property.priorityInput"></a>

```csharp
public double PriorityInput { get; }
```

- *Type:* double

---

##### `RegionsInput`<sup>Optional</sup> <a name="RegionsInput" id="@cdktf/provider-dnsimple.zoneRecord.ZoneRecord.property.regionsInput"></a>

```csharp
public string[] RegionsInput { get; }
```

- *Type:* string[]

---

##### `TtlInput`<sup>Optional</sup> <a name="TtlInput" id="@cdktf/provider-dnsimple.zoneRecord.ZoneRecord.property.ttlInput"></a>

```csharp
public double TtlInput { get; }
```

- *Type:* double

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-dnsimple.zoneRecord.ZoneRecord.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-dnsimple.zoneRecord.ZoneRecord.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `ZoneNameInput`<sup>Optional</sup> <a name="ZoneNameInput" id="@cdktf/provider-dnsimple.zoneRecord.ZoneRecord.property.zoneNameInput"></a>

```csharp
public string ZoneNameInput { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-dnsimple.zoneRecord.ZoneRecord.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Priority`<sup>Required</sup> <a name="Priority" id="@cdktf/provider-dnsimple.zoneRecord.ZoneRecord.property.priority"></a>

```csharp
public double Priority { get; }
```

- *Type:* double

---

##### `Regions`<sup>Required</sup> <a name="Regions" id="@cdktf/provider-dnsimple.zoneRecord.ZoneRecord.property.regions"></a>

```csharp
public string[] Regions { get; }
```

- *Type:* string[]

---

##### `Ttl`<sup>Required</sup> <a name="Ttl" id="@cdktf/provider-dnsimple.zoneRecord.ZoneRecord.property.ttl"></a>

```csharp
public double Ttl { get; }
```

- *Type:* double

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-dnsimple.zoneRecord.ZoneRecord.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-dnsimple.zoneRecord.ZoneRecord.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `ZoneName`<sup>Required</sup> <a name="ZoneName" id="@cdktf/provider-dnsimple.zoneRecord.ZoneRecord.property.zoneName"></a>

```csharp
public string ZoneName { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-dnsimple.zoneRecord.ZoneRecord.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-dnsimple.zoneRecord.ZoneRecord.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ZoneRecordConfig <a name="ZoneRecordConfig" id="@cdktf/provider-dnsimple.zoneRecord.ZoneRecordConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-dnsimple.zoneRecord.ZoneRecordConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Dnsimple;

new ZoneRecordConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string Name,
    string Type,
    string Value,
    string ZoneName,
    double Priority = null,
    string[] Regions = null,
    double Ttl = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-dnsimple.zoneRecord.ZoneRecordConfig.property.connection">Connection</a></code> | <code>HashiCorp.Cdktf.SSHProvisionerConnection\|HashiCorp.Cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.zoneRecord.ZoneRecordConfig.property.count">Count</a></code> | <code>double\|HashiCorp.Cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.zoneRecord.ZoneRecordConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.zoneRecord.ZoneRecordConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.zoneRecord.ZoneRecordConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.zoneRecord.ZoneRecordConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.zoneRecord.ZoneRecordConfig.property.provisioners">Provisioners</a></code> | <code>HashiCorp.Cdktf.FileProvisioner\|HashiCorp.Cdktf.LocalExecProvisioner\|HashiCorp.Cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.zoneRecord.ZoneRecordConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dnsimple/dnsimple/1.10.0/docs/resources/zone_record#name ZoneRecord#name}. |
| <code><a href="#@cdktf/provider-dnsimple.zoneRecord.ZoneRecordConfig.property.type">Type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dnsimple/dnsimple/1.10.0/docs/resources/zone_record#type ZoneRecord#type}. |
| <code><a href="#@cdktf/provider-dnsimple.zoneRecord.ZoneRecordConfig.property.value">Value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dnsimple/dnsimple/1.10.0/docs/resources/zone_record#value ZoneRecord#value}. |
| <code><a href="#@cdktf/provider-dnsimple.zoneRecord.ZoneRecordConfig.property.zoneName">ZoneName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dnsimple/dnsimple/1.10.0/docs/resources/zone_record#zone_name ZoneRecord#zone_name}. |
| <code><a href="#@cdktf/provider-dnsimple.zoneRecord.ZoneRecordConfig.property.priority">Priority</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dnsimple/dnsimple/1.10.0/docs/resources/zone_record#priority ZoneRecord#priority}. |
| <code><a href="#@cdktf/provider-dnsimple.zoneRecord.ZoneRecordConfig.property.regions">Regions</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dnsimple/dnsimple/1.10.0/docs/resources/zone_record#regions ZoneRecord#regions}. |
| <code><a href="#@cdktf/provider-dnsimple.zoneRecord.ZoneRecordConfig.property.ttl">Ttl</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dnsimple/dnsimple/1.10.0/docs/resources/zone_record#ttl ZoneRecord#ttl}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-dnsimple.zoneRecord.ZoneRecordConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* HashiCorp.Cdktf.SSHProvisionerConnection|HashiCorp.Cdktf.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-dnsimple.zoneRecord.ZoneRecordConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|HashiCorp.Cdktf.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-dnsimple.zoneRecord.ZoneRecordConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-dnsimple.zoneRecord.ZoneRecordConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-dnsimple.zoneRecord.ZoneRecordConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-dnsimple.zoneRecord.ZoneRecordConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-dnsimple.zoneRecord.ZoneRecordConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* HashiCorp.Cdktf.FileProvisioner|HashiCorp.Cdktf.LocalExecProvisioner|HashiCorp.Cdktf.RemoteExecProvisioner[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-dnsimple.zoneRecord.ZoneRecordConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dnsimple/dnsimple/1.10.0/docs/resources/zone_record#name ZoneRecord#name}.

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-dnsimple.zoneRecord.ZoneRecordConfig.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dnsimple/dnsimple/1.10.0/docs/resources/zone_record#type ZoneRecord#type}.

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-dnsimple.zoneRecord.ZoneRecordConfig.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dnsimple/dnsimple/1.10.0/docs/resources/zone_record#value ZoneRecord#value}.

---

##### `ZoneName`<sup>Required</sup> <a name="ZoneName" id="@cdktf/provider-dnsimple.zoneRecord.ZoneRecordConfig.property.zoneName"></a>

```csharp
public string ZoneName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dnsimple/dnsimple/1.10.0/docs/resources/zone_record#zone_name ZoneRecord#zone_name}.

---

##### `Priority`<sup>Optional</sup> <a name="Priority" id="@cdktf/provider-dnsimple.zoneRecord.ZoneRecordConfig.property.priority"></a>

```csharp
public double Priority { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dnsimple/dnsimple/1.10.0/docs/resources/zone_record#priority ZoneRecord#priority}.

---

##### `Regions`<sup>Optional</sup> <a name="Regions" id="@cdktf/provider-dnsimple.zoneRecord.ZoneRecordConfig.property.regions"></a>

```csharp
public string[] Regions { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dnsimple/dnsimple/1.10.0/docs/resources/zone_record#regions ZoneRecord#regions}.

---

##### `Ttl`<sup>Optional</sup> <a name="Ttl" id="@cdktf/provider-dnsimple.zoneRecord.ZoneRecordConfig.property.ttl"></a>

```csharp
public double Ttl { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dnsimple/dnsimple/1.10.0/docs/resources/zone_record#ttl ZoneRecord#ttl}.

---



