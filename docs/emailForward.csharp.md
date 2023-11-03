# `dnsimple_email_forward`

Refer to the Terraform Registory for docs: [`dnsimple_email_forward`](https://registry.terraform.io/providers/dnsimple/dnsimple/1.3.1/docs/resources/email_forward).

# `emailForward` Submodule <a name="`emailForward` Submodule" id="@cdktf/provider-dnsimple.emailForward"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### EmailForward <a name="EmailForward" id="@cdktf/provider-dnsimple.emailForward.EmailForward"></a>

Represents a {@link https://registry.terraform.io/providers/dnsimple/dnsimple/1.3.1/docs/resources/email_forward dnsimple_email_forward}.

#### Initializers <a name="Initializers" id="@cdktf/provider-dnsimple.emailForward.EmailForward.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Dnsimple;

new EmailForward(Construct Scope, string Id, EmailForwardConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-dnsimple.emailForward.EmailForward.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-dnsimple.emailForward.EmailForward.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-dnsimple.emailForward.EmailForward.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-dnsimple.emailForward.EmailForwardConfig">EmailForwardConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-dnsimple.emailForward.EmailForward.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-dnsimple.emailForward.EmailForward.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-dnsimple.emailForward.EmailForward.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-dnsimple.emailForward.EmailForwardConfig">EmailForwardConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-dnsimple.emailForward.EmailForward.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-dnsimple.emailForward.EmailForward.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.emailForward.EmailForward.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-dnsimple.emailForward.EmailForward.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-dnsimple.emailForward.EmailForward.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.emailForward.EmailForward.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-dnsimple.emailForward.EmailForward.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-dnsimple.emailForward.EmailForward.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.emailForward.EmailForward.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.emailForward.EmailForward.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.emailForward.EmailForward.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.emailForward.EmailForward.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.emailForward.EmailForward.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.emailForward.EmailForward.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.emailForward.EmailForward.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.emailForward.EmailForward.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.emailForward.EmailForward.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.emailForward.EmailForward.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.emailForward.EmailForward.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-dnsimple.emailForward.EmailForward.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-dnsimple.emailForward.EmailForward.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-dnsimple.emailForward.EmailForward.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-dnsimple.emailForward.EmailForward.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-dnsimple.emailForward.EmailForward.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-dnsimple.emailForward.EmailForward.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-dnsimple.emailForward.EmailForward.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-dnsimple.emailForward.EmailForward.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-dnsimple.emailForward.EmailForward.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-dnsimple.emailForward.EmailForward.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-dnsimple.emailForward.EmailForward.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-dnsimple.emailForward.EmailForward.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-dnsimple.emailForward.EmailForward.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-dnsimple.emailForward.EmailForward.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-dnsimple.emailForward.EmailForward.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-dnsimple.emailForward.EmailForward.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-dnsimple.emailForward.EmailForward.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-dnsimple.emailForward.EmailForward.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-dnsimple.emailForward.EmailForward.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-dnsimple.emailForward.EmailForward.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-dnsimple.emailForward.EmailForward.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-dnsimple.emailForward.EmailForward.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-dnsimple.emailForward.EmailForward.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-dnsimple.emailForward.EmailForward.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-dnsimple.emailForward.EmailForward.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-dnsimple.emailForward.EmailForward.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-dnsimple.emailForward.EmailForward.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-dnsimple.emailForward.EmailForward.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-dnsimple.emailForward.EmailForward.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-dnsimple.emailForward.EmailForward.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-dnsimple.emailForward.EmailForward.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-dnsimple.emailForward.EmailForward.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-dnsimple.emailForward.EmailForward.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-dnsimple.emailForward.EmailForward.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-dnsimple.emailForward.EmailForward.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-dnsimple.emailForward.EmailForward.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-dnsimple.emailForward.EmailForward.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-dnsimple.emailForward.EmailForward.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-dnsimple.emailForward.EmailForward.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.emailForward.EmailForward.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.emailForward.EmailForward.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a EmailForward resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-dnsimple.emailForward.EmailForward.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Dnsimple;

EmailForward.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-dnsimple.emailForward.EmailForward.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-dnsimple.emailForward.EmailForward.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Dnsimple;

EmailForward.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-dnsimple.emailForward.EmailForward.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-dnsimple.emailForward.EmailForward.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Dnsimple;

EmailForward.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-dnsimple.emailForward.EmailForward.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-dnsimple.emailForward.EmailForward.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Dnsimple;

EmailForward.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a EmailForward resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-dnsimple.emailForward.EmailForward.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-dnsimple.emailForward.EmailForward.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the EmailForward to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-dnsimple.emailForward.EmailForward.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing EmailForward that should be imported.

Refer to the {@link https://registry.terraform.io/providers/dnsimple/dnsimple/1.3.1/docs/resources/email_forward#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-dnsimple.emailForward.EmailForward.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the EmailForward to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-dnsimple.emailForward.EmailForward.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-dnsimple.emailForward.EmailForward.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.emailForward.EmailForward.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.emailForward.EmailForward.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.emailForward.EmailForward.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.emailForward.EmailForward.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.emailForward.EmailForward.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.emailForward.EmailForward.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.emailForward.EmailForward.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.emailForward.EmailForward.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.emailForward.EmailForward.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.emailForward.EmailForward.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.emailForward.EmailForward.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.emailForward.EmailForward.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.emailForward.EmailForward.property.aliasEmail">AliasEmail</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.emailForward.EmailForward.property.id">Id</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.emailForward.EmailForward.property.aliasNameInput">AliasNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.emailForward.EmailForward.property.destinationEmailInput">DestinationEmailInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.emailForward.EmailForward.property.domainInput">DomainInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.emailForward.EmailForward.property.aliasName">AliasName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.emailForward.EmailForward.property.destinationEmail">DestinationEmail</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.emailForward.EmailForward.property.domain">Domain</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-dnsimple.emailForward.EmailForward.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-dnsimple.emailForward.EmailForward.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-dnsimple.emailForward.EmailForward.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-dnsimple.emailForward.EmailForward.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-dnsimple.emailForward.EmailForward.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-dnsimple.emailForward.EmailForward.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-dnsimple.emailForward.EmailForward.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-dnsimple.emailForward.EmailForward.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-dnsimple.emailForward.EmailForward.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-dnsimple.emailForward.EmailForward.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-dnsimple.emailForward.EmailForward.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-dnsimple.emailForward.EmailForward.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-dnsimple.emailForward.EmailForward.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-dnsimple.emailForward.EmailForward.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `AliasEmail`<sup>Required</sup> <a name="AliasEmail" id="@cdktf/provider-dnsimple.emailForward.EmailForward.property.aliasEmail"></a>

```csharp
public string AliasEmail { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-dnsimple.emailForward.EmailForward.property.id"></a>

```csharp
public double Id { get; }
```

- *Type:* double

---

##### `AliasNameInput`<sup>Optional</sup> <a name="AliasNameInput" id="@cdktf/provider-dnsimple.emailForward.EmailForward.property.aliasNameInput"></a>

```csharp
public string AliasNameInput { get; }
```

- *Type:* string

---

##### `DestinationEmailInput`<sup>Optional</sup> <a name="DestinationEmailInput" id="@cdktf/provider-dnsimple.emailForward.EmailForward.property.destinationEmailInput"></a>

```csharp
public string DestinationEmailInput { get; }
```

- *Type:* string

---

##### `DomainInput`<sup>Optional</sup> <a name="DomainInput" id="@cdktf/provider-dnsimple.emailForward.EmailForward.property.domainInput"></a>

```csharp
public string DomainInput { get; }
```

- *Type:* string

---

##### `AliasName`<sup>Required</sup> <a name="AliasName" id="@cdktf/provider-dnsimple.emailForward.EmailForward.property.aliasName"></a>

```csharp
public string AliasName { get; }
```

- *Type:* string

---

##### `DestinationEmail`<sup>Required</sup> <a name="DestinationEmail" id="@cdktf/provider-dnsimple.emailForward.EmailForward.property.destinationEmail"></a>

```csharp
public string DestinationEmail { get; }
```

- *Type:* string

---

##### `Domain`<sup>Required</sup> <a name="Domain" id="@cdktf/provider-dnsimple.emailForward.EmailForward.property.domain"></a>

```csharp
public string Domain { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-dnsimple.emailForward.EmailForward.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-dnsimple.emailForward.EmailForward.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### EmailForwardConfig <a name="EmailForwardConfig" id="@cdktf/provider-dnsimple.emailForward.EmailForwardConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-dnsimple.emailForward.EmailForwardConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Dnsimple;

new EmailForwardConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string AliasName,
    string DestinationEmail,
    string Domain
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-dnsimple.emailForward.EmailForwardConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.emailForward.EmailForwardConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.emailForward.EmailForwardConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.emailForward.EmailForwardConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.emailForward.EmailForwardConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.emailForward.EmailForwardConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.emailForward.EmailForwardConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.emailForward.EmailForwardConfig.property.aliasName">AliasName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dnsimple/dnsimple/1.3.1/docs/resources/email_forward#alias_name EmailForward#alias_name}. |
| <code><a href="#@cdktf/provider-dnsimple.emailForward.EmailForwardConfig.property.destinationEmail">DestinationEmail</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dnsimple/dnsimple/1.3.1/docs/resources/email_forward#destination_email EmailForward#destination_email}. |
| <code><a href="#@cdktf/provider-dnsimple.emailForward.EmailForwardConfig.property.domain">Domain</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dnsimple/dnsimple/1.3.1/docs/resources/email_forward#domain EmailForward#domain}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-dnsimple.emailForward.EmailForwardConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-dnsimple.emailForward.EmailForwardConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-dnsimple.emailForward.EmailForwardConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-dnsimple.emailForward.EmailForwardConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-dnsimple.emailForward.EmailForwardConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-dnsimple.emailForward.EmailForwardConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-dnsimple.emailForward.EmailForwardConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `AliasName`<sup>Required</sup> <a name="AliasName" id="@cdktf/provider-dnsimple.emailForward.EmailForwardConfig.property.aliasName"></a>

```csharp
public string AliasName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dnsimple/dnsimple/1.3.1/docs/resources/email_forward#alias_name EmailForward#alias_name}.

---

##### `DestinationEmail`<sup>Required</sup> <a name="DestinationEmail" id="@cdktf/provider-dnsimple.emailForward.EmailForwardConfig.property.destinationEmail"></a>

```csharp
public string DestinationEmail { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dnsimple/dnsimple/1.3.1/docs/resources/email_forward#destination_email EmailForward#destination_email}.

---

##### `Domain`<sup>Required</sup> <a name="Domain" id="@cdktf/provider-dnsimple.emailForward.EmailForwardConfig.property.domain"></a>

```csharp
public string Domain { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dnsimple/dnsimple/1.3.1/docs/resources/email_forward#domain EmailForward#domain}.

---



