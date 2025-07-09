# `dataDnsimpleZone` Submodule <a name="`dataDnsimpleZone` Submodule" id="@cdktf/provider-dnsimple.dataDnsimpleZone"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDnsimpleZone <a name="DataDnsimpleZone" id="@cdktf/provider-dnsimple.dataDnsimpleZone.DataDnsimpleZone"></a>

Represents a {@link https://registry.terraform.io/providers/dnsimple/dnsimple/1.10.0/docs/data-sources/zone dnsimple_zone}.

#### Initializers <a name="Initializers" id="@cdktf/provider-dnsimple.dataDnsimpleZone.DataDnsimpleZone.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Dnsimple;

new DataDnsimpleZone(Construct Scope, string Id, DataDnsimpleZoneConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-dnsimple.dataDnsimpleZone.DataDnsimpleZone.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-dnsimple.dataDnsimpleZone.DataDnsimpleZone.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-dnsimple.dataDnsimpleZone.DataDnsimpleZone.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-dnsimple.dataDnsimpleZone.DataDnsimpleZoneConfig">DataDnsimpleZoneConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-dnsimple.dataDnsimpleZone.DataDnsimpleZone.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-dnsimple.dataDnsimpleZone.DataDnsimpleZone.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-dnsimple.dataDnsimpleZone.DataDnsimpleZone.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-dnsimple.dataDnsimpleZone.DataDnsimpleZoneConfig">DataDnsimpleZoneConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-dnsimple.dataDnsimpleZone.DataDnsimpleZone.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-dnsimple.dataDnsimpleZone.DataDnsimpleZone.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.dataDnsimpleZone.DataDnsimpleZone.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-dnsimple.dataDnsimpleZone.DataDnsimpleZone.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-dnsimple.dataDnsimpleZone.DataDnsimpleZone.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-dnsimple.dataDnsimpleZone.DataDnsimpleZone.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.dataDnsimpleZone.DataDnsimpleZone.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-dnsimple.dataDnsimpleZone.DataDnsimpleZone.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.dataDnsimpleZone.DataDnsimpleZone.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.dataDnsimpleZone.DataDnsimpleZone.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.dataDnsimpleZone.DataDnsimpleZone.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.dataDnsimpleZone.DataDnsimpleZone.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.dataDnsimpleZone.DataDnsimpleZone.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.dataDnsimpleZone.DataDnsimpleZone.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.dataDnsimpleZone.DataDnsimpleZone.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.dataDnsimpleZone.DataDnsimpleZone.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.dataDnsimpleZone.DataDnsimpleZone.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-dnsimple.dataDnsimpleZone.DataDnsimpleZone.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-dnsimple.dataDnsimpleZone.DataDnsimpleZone.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-dnsimple.dataDnsimpleZone.DataDnsimpleZone.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-dnsimple.dataDnsimpleZone.DataDnsimpleZone.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-dnsimple.dataDnsimpleZone.DataDnsimpleZone.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-dnsimple.dataDnsimpleZone.DataDnsimpleZone.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-dnsimple.dataDnsimpleZone.DataDnsimpleZone.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-dnsimple.dataDnsimpleZone.DataDnsimpleZone.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-dnsimple.dataDnsimpleZone.DataDnsimpleZone.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-dnsimple.dataDnsimpleZone.DataDnsimpleZone.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-dnsimple.dataDnsimpleZone.DataDnsimpleZone.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-dnsimple.dataDnsimpleZone.DataDnsimpleZone.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-dnsimple.dataDnsimpleZone.DataDnsimpleZone.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-dnsimple.dataDnsimpleZone.DataDnsimpleZone.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-dnsimple.dataDnsimpleZone.DataDnsimpleZone.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-dnsimple.dataDnsimpleZone.DataDnsimpleZone.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-dnsimple.dataDnsimpleZone.DataDnsimpleZone.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-dnsimple.dataDnsimpleZone.DataDnsimpleZone.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-dnsimple.dataDnsimpleZone.DataDnsimpleZone.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-dnsimple.dataDnsimpleZone.DataDnsimpleZone.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-dnsimple.dataDnsimpleZone.DataDnsimpleZone.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-dnsimple.dataDnsimpleZone.DataDnsimpleZone.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-dnsimple.dataDnsimpleZone.DataDnsimpleZone.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-dnsimple.dataDnsimpleZone.DataDnsimpleZone.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-dnsimple.dataDnsimpleZone.DataDnsimpleZone.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-dnsimple.dataDnsimpleZone.DataDnsimpleZone.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-dnsimple.dataDnsimpleZone.DataDnsimpleZone.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-dnsimple.dataDnsimpleZone.DataDnsimpleZone.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-dnsimple.dataDnsimpleZone.DataDnsimpleZone.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-dnsimple.dataDnsimpleZone.DataDnsimpleZone.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-dnsimple.dataDnsimpleZone.DataDnsimpleZone.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-dnsimple.dataDnsimpleZone.DataDnsimpleZone.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.dataDnsimpleZone.DataDnsimpleZone.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.dataDnsimpleZone.DataDnsimpleZone.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataDnsimpleZone resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-dnsimple.dataDnsimpleZone.DataDnsimpleZone.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Dnsimple;

DataDnsimpleZone.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-dnsimple.dataDnsimpleZone.DataDnsimpleZone.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-dnsimple.dataDnsimpleZone.DataDnsimpleZone.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Dnsimple;

DataDnsimpleZone.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-dnsimple.dataDnsimpleZone.DataDnsimpleZone.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-dnsimple.dataDnsimpleZone.DataDnsimpleZone.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Dnsimple;

DataDnsimpleZone.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-dnsimple.dataDnsimpleZone.DataDnsimpleZone.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-dnsimple.dataDnsimpleZone.DataDnsimpleZone.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Dnsimple;

DataDnsimpleZone.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataDnsimpleZone resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-dnsimple.dataDnsimpleZone.DataDnsimpleZone.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-dnsimple.dataDnsimpleZone.DataDnsimpleZone.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataDnsimpleZone to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-dnsimple.dataDnsimpleZone.DataDnsimpleZone.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataDnsimpleZone that should be imported.

Refer to the {@link https://registry.terraform.io/providers/dnsimple/dnsimple/1.10.0/docs/data-sources/zone#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-dnsimple.dataDnsimpleZone.DataDnsimpleZone.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataDnsimpleZone to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-dnsimple.dataDnsimpleZone.DataDnsimpleZone.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-dnsimple.dataDnsimpleZone.DataDnsimpleZone.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.dataDnsimpleZone.DataDnsimpleZone.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.dataDnsimpleZone.DataDnsimpleZone.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.dataDnsimpleZone.DataDnsimpleZone.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.dataDnsimpleZone.DataDnsimpleZone.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.dataDnsimpleZone.DataDnsimpleZone.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.dataDnsimpleZone.DataDnsimpleZone.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.dataDnsimpleZone.DataDnsimpleZone.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.dataDnsimpleZone.DataDnsimpleZone.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.dataDnsimpleZone.DataDnsimpleZone.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.dataDnsimpleZone.DataDnsimpleZone.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.dataDnsimpleZone.DataDnsimpleZone.property.accountId">AccountId</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.dataDnsimpleZone.DataDnsimpleZone.property.id">Id</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.dataDnsimpleZone.DataDnsimpleZone.property.reverse">Reverse</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.dataDnsimpleZone.DataDnsimpleZone.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.dataDnsimpleZone.DataDnsimpleZone.property.name">Name</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-dnsimple.dataDnsimpleZone.DataDnsimpleZone.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-dnsimple.dataDnsimpleZone.DataDnsimpleZone.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-dnsimple.dataDnsimpleZone.DataDnsimpleZone.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-dnsimple.dataDnsimpleZone.DataDnsimpleZone.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-dnsimple.dataDnsimpleZone.DataDnsimpleZone.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-dnsimple.dataDnsimpleZone.DataDnsimpleZone.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-dnsimple.dataDnsimpleZone.DataDnsimpleZone.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-dnsimple.dataDnsimpleZone.DataDnsimpleZone.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-dnsimple.dataDnsimpleZone.DataDnsimpleZone.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-dnsimple.dataDnsimpleZone.DataDnsimpleZone.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-dnsimple.dataDnsimpleZone.DataDnsimpleZone.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-dnsimple.dataDnsimpleZone.DataDnsimpleZone.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktf/provider-dnsimple.dataDnsimpleZone.DataDnsimpleZone.property.accountId"></a>

```csharp
public double AccountId { get; }
```

- *Type:* double

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-dnsimple.dataDnsimpleZone.DataDnsimpleZone.property.id"></a>

```csharp
public double Id { get; }
```

- *Type:* double

---

##### `Reverse`<sup>Required</sup> <a name="Reverse" id="@cdktf/provider-dnsimple.dataDnsimpleZone.DataDnsimpleZone.property.reverse"></a>

```csharp
public IResolvable Reverse { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-dnsimple.dataDnsimpleZone.DataDnsimpleZone.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-dnsimple.dataDnsimpleZone.DataDnsimpleZone.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-dnsimple.dataDnsimpleZone.DataDnsimpleZone.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-dnsimple.dataDnsimpleZone.DataDnsimpleZone.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataDnsimpleZoneConfig <a name="DataDnsimpleZoneConfig" id="@cdktf/provider-dnsimple.dataDnsimpleZone.DataDnsimpleZoneConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-dnsimple.dataDnsimpleZone.DataDnsimpleZoneConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Dnsimple;

new DataDnsimpleZoneConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Name
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-dnsimple.dataDnsimpleZone.DataDnsimpleZoneConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.dataDnsimpleZone.DataDnsimpleZoneConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.dataDnsimpleZone.DataDnsimpleZoneConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.dataDnsimpleZone.DataDnsimpleZoneConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.dataDnsimpleZone.DataDnsimpleZoneConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.dataDnsimpleZone.DataDnsimpleZoneConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.dataDnsimpleZone.DataDnsimpleZoneConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.dataDnsimpleZone.DataDnsimpleZoneConfig.property.name">Name</a></code> | <code>string</code> | Zone Name. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-dnsimple.dataDnsimpleZone.DataDnsimpleZoneConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-dnsimple.dataDnsimpleZone.DataDnsimpleZoneConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-dnsimple.dataDnsimpleZone.DataDnsimpleZoneConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-dnsimple.dataDnsimpleZone.DataDnsimpleZoneConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-dnsimple.dataDnsimpleZone.DataDnsimpleZoneConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-dnsimple.dataDnsimpleZone.DataDnsimpleZoneConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-dnsimple.dataDnsimpleZone.DataDnsimpleZoneConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-dnsimple.dataDnsimpleZone.DataDnsimpleZoneConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Zone Name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dnsimple/dnsimple/1.10.0/docs/data-sources/zone#name DataDnsimpleZone#name}

---



