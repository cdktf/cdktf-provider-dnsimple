# `dnsimple_registered_domain`

Refer to the Terraform Registory for docs: [`dnsimple_registered_domain`](https://registry.terraform.io/providers/dnsimple/dnsimple/1.2.1/docs/resources/registered_domain).

# `registeredDomain` Submodule <a name="`registeredDomain` Submodule" id="@cdktf/provider-dnsimple.registeredDomain"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### RegisteredDomain <a name="RegisteredDomain" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain"></a>

Represents a {@link https://registry.terraform.io/providers/dnsimple/dnsimple/1.2.1/docs/resources/registered_domain dnsimple_registered_domain}.

#### Initializers <a name="Initializers" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Dnsimple;

new RegisteredDomain(Construct Scope, string Id, RegisteredDomainConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainConfig">RegisteredDomainConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainConfig">RegisteredDomainConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.resetAutoRenewEnabled">ResetAutoRenewEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.resetDnssecEnabled">ResetDnssecEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.resetExtendedAttributes">ResetExtendedAttributes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.resetPremiumPrice">ResetPremiumPrice</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.resetTransferLockEnabled">ResetTransferLockEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.resetWhoisPrivacyEnabled">ResetWhoisPrivacyEnabled</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.putTimeouts"></a>

```csharp
private void PutTimeouts(RegisteredDomainTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainTimeouts">RegisteredDomainTimeouts</a>

---

##### `ResetAutoRenewEnabled` <a name="ResetAutoRenewEnabled" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.resetAutoRenewEnabled"></a>

```csharp
private void ResetAutoRenewEnabled()
```

##### `ResetDnssecEnabled` <a name="ResetDnssecEnabled" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.resetDnssecEnabled"></a>

```csharp
private void ResetDnssecEnabled()
```

##### `ResetExtendedAttributes` <a name="ResetExtendedAttributes" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.resetExtendedAttributes"></a>

```csharp
private void ResetExtendedAttributes()
```

##### `ResetPremiumPrice` <a name="ResetPremiumPrice" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.resetPremiumPrice"></a>

```csharp
private void ResetPremiumPrice()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

##### `ResetTransferLockEnabled` <a name="ResetTransferLockEnabled" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.resetTransferLockEnabled"></a>

```csharp
private void ResetTransferLockEnabled()
```

##### `ResetWhoisPrivacyEnabled` <a name="ResetWhoisPrivacyEnabled" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.resetWhoisPrivacyEnabled"></a>

```csharp
private void ResetWhoisPrivacyEnabled()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Dnsimple;

RegisteredDomain.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Dnsimple;

RegisteredDomain.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Dnsimple;

RegisteredDomain.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.isTerraformResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.property.accountId">AccountId</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.property.domainRegistration">DomainRegistration</a></code> | <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainDomainRegistrationOutputReference">RegisteredDomainDomainRegistrationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.property.expiresAt">ExpiresAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.property.id">Id</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainTimeoutsOutputReference">RegisteredDomainTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.property.unicodeName">UnicodeName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.property.autoRenewEnabledInput">AutoRenewEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.property.contactIdInput">ContactIdInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.property.dnssecEnabledInput">DnssecEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.property.extendedAttributesInput">ExtendedAttributesInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.property.premiumPriceInput">PremiumPriceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.property.transferLockEnabledInput">TransferLockEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.property.whoisPrivacyEnabledInput">WhoisPrivacyEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.property.autoRenewEnabled">AutoRenewEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.property.contactId">ContactId</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.property.dnssecEnabled">DnssecEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.property.extendedAttributes">ExtendedAttributes</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.property.premiumPrice">PremiumPrice</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.property.transferLockEnabled">TransferLockEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.property.whoisPrivacyEnabled">WhoisPrivacyEnabled</a></code> | <code>object</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.property.accountId"></a>

```csharp
public double AccountId { get; }
```

- *Type:* double

---

##### `DomainRegistration`<sup>Required</sup> <a name="DomainRegistration" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.property.domainRegistration"></a>

```csharp
public RegisteredDomainDomainRegistrationOutputReference DomainRegistration { get; }
```

- *Type:* <a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainDomainRegistrationOutputReference">RegisteredDomainDomainRegistrationOutputReference</a>

---

##### `ExpiresAt`<sup>Required</sup> <a name="ExpiresAt" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.property.expiresAt"></a>

```csharp
public string ExpiresAt { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.property.id"></a>

```csharp
public double Id { get; }
```

- *Type:* double

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.property.timeouts"></a>

```csharp
public RegisteredDomainTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainTimeoutsOutputReference">RegisteredDomainTimeoutsOutputReference</a>

---

##### `UnicodeName`<sup>Required</sup> <a name="UnicodeName" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.property.unicodeName"></a>

```csharp
public string UnicodeName { get; }
```

- *Type:* string

---

##### `AutoRenewEnabledInput`<sup>Optional</sup> <a name="AutoRenewEnabledInput" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.property.autoRenewEnabledInput"></a>

```csharp
public object AutoRenewEnabledInput { get; }
```

- *Type:* object

---

##### `ContactIdInput`<sup>Optional</sup> <a name="ContactIdInput" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.property.contactIdInput"></a>

```csharp
public double ContactIdInput { get; }
```

- *Type:* double

---

##### `DnssecEnabledInput`<sup>Optional</sup> <a name="DnssecEnabledInput" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.property.dnssecEnabledInput"></a>

```csharp
public object DnssecEnabledInput { get; }
```

- *Type:* object

---

##### `ExtendedAttributesInput`<sup>Optional</sup> <a name="ExtendedAttributesInput" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.property.extendedAttributesInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> ExtendedAttributesInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `PremiumPriceInput`<sup>Optional</sup> <a name="PremiumPriceInput" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.property.premiumPriceInput"></a>

```csharp
public string PremiumPriceInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `TransferLockEnabledInput`<sup>Optional</sup> <a name="TransferLockEnabledInput" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.property.transferLockEnabledInput"></a>

```csharp
public object TransferLockEnabledInput { get; }
```

- *Type:* object

---

##### `WhoisPrivacyEnabledInput`<sup>Optional</sup> <a name="WhoisPrivacyEnabledInput" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.property.whoisPrivacyEnabledInput"></a>

```csharp
public object WhoisPrivacyEnabledInput { get; }
```

- *Type:* object

---

##### `AutoRenewEnabled`<sup>Required</sup> <a name="AutoRenewEnabled" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.property.autoRenewEnabled"></a>

```csharp
public object AutoRenewEnabled { get; }
```

- *Type:* object

---

##### `ContactId`<sup>Required</sup> <a name="ContactId" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.property.contactId"></a>

```csharp
public double ContactId { get; }
```

- *Type:* double

---

##### `DnssecEnabled`<sup>Required</sup> <a name="DnssecEnabled" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.property.dnssecEnabled"></a>

```csharp
public object DnssecEnabled { get; }
```

- *Type:* object

---

##### `ExtendedAttributes`<sup>Required</sup> <a name="ExtendedAttributes" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.property.extendedAttributes"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> ExtendedAttributes { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `PremiumPrice`<sup>Required</sup> <a name="PremiumPrice" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.property.premiumPrice"></a>

```csharp
public string PremiumPrice { get; }
```

- *Type:* string

---

##### `TransferLockEnabled`<sup>Required</sup> <a name="TransferLockEnabled" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.property.transferLockEnabled"></a>

```csharp
public object TransferLockEnabled { get; }
```

- *Type:* object

---

##### `WhoisPrivacyEnabled`<sup>Required</sup> <a name="WhoisPrivacyEnabled" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.property.whoisPrivacyEnabled"></a>

```csharp
public object WhoisPrivacyEnabled { get; }
```

- *Type:* object

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### RegisteredDomainConfig <a name="RegisteredDomainConfig" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Dnsimple;

new RegisteredDomainConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    double ContactId,
    string Name,
    object AutoRenewEnabled = null,
    object DnssecEnabled = null,
    System.Collections.Generic.IDictionary<string, string> ExtendedAttributes = null,
    string PremiumPrice = null,
    RegisteredDomainTimeouts Timeouts = null,
    object TransferLockEnabled = null,
    object WhoisPrivacyEnabled = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainConfig.property.contactId">ContactId</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dnsimple/dnsimple/1.2.1/docs/resources/registered_domain#contact_id RegisteredDomain#contact_id}. |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dnsimple/dnsimple/1.2.1/docs/resources/registered_domain#name RegisteredDomain#name}. |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainConfig.property.autoRenewEnabled">AutoRenewEnabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dnsimple/dnsimple/1.2.1/docs/resources/registered_domain#auto_renew_enabled RegisteredDomain#auto_renew_enabled}. |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainConfig.property.dnssecEnabled">DnssecEnabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dnsimple/dnsimple/1.2.1/docs/resources/registered_domain#dnssec_enabled RegisteredDomain#dnssec_enabled}. |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainConfig.property.extendedAttributes">ExtendedAttributes</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dnsimple/dnsimple/1.2.1/docs/resources/registered_domain#extended_attributes RegisteredDomain#extended_attributes}. |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainConfig.property.premiumPrice">PremiumPrice</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dnsimple/dnsimple/1.2.1/docs/resources/registered_domain#premium_price RegisteredDomain#premium_price}. |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainTimeouts">RegisteredDomainTimeouts</a></code> | Timeouts for operations, given as a parsable string as in `10m` or `30s`. |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainConfig.property.transferLockEnabled">TransferLockEnabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dnsimple/dnsimple/1.2.1/docs/resources/registered_domain#transfer_lock_enabled RegisteredDomain#transfer_lock_enabled}. |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainConfig.property.whoisPrivacyEnabled">WhoisPrivacyEnabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dnsimple/dnsimple/1.2.1/docs/resources/registered_domain#whois_privacy_enabled RegisteredDomain#whois_privacy_enabled}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `ContactId`<sup>Required</sup> <a name="ContactId" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainConfig.property.contactId"></a>

```csharp
public double ContactId { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dnsimple/dnsimple/1.2.1/docs/resources/registered_domain#contact_id RegisteredDomain#contact_id}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dnsimple/dnsimple/1.2.1/docs/resources/registered_domain#name RegisteredDomain#name}.

---

##### `AutoRenewEnabled`<sup>Optional</sup> <a name="AutoRenewEnabled" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainConfig.property.autoRenewEnabled"></a>

```csharp
public object AutoRenewEnabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dnsimple/dnsimple/1.2.1/docs/resources/registered_domain#auto_renew_enabled RegisteredDomain#auto_renew_enabled}.

---

##### `DnssecEnabled`<sup>Optional</sup> <a name="DnssecEnabled" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainConfig.property.dnssecEnabled"></a>

```csharp
public object DnssecEnabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dnsimple/dnsimple/1.2.1/docs/resources/registered_domain#dnssec_enabled RegisteredDomain#dnssec_enabled}.

---

##### `ExtendedAttributes`<sup>Optional</sup> <a name="ExtendedAttributes" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainConfig.property.extendedAttributes"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> ExtendedAttributes { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dnsimple/dnsimple/1.2.1/docs/resources/registered_domain#extended_attributes RegisteredDomain#extended_attributes}.

---

##### `PremiumPrice`<sup>Optional</sup> <a name="PremiumPrice" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainConfig.property.premiumPrice"></a>

```csharp
public string PremiumPrice { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dnsimple/dnsimple/1.2.1/docs/resources/registered_domain#premium_price RegisteredDomain#premium_price}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainConfig.property.timeouts"></a>

```csharp
public RegisteredDomainTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainTimeouts">RegisteredDomainTimeouts</a>

Timeouts for operations, given as a parsable string as in `10m` or `30s`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dnsimple/dnsimple/1.2.1/docs/resources/registered_domain#timeouts RegisteredDomain#timeouts}

---

##### `TransferLockEnabled`<sup>Optional</sup> <a name="TransferLockEnabled" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainConfig.property.transferLockEnabled"></a>

```csharp
public object TransferLockEnabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dnsimple/dnsimple/1.2.1/docs/resources/registered_domain#transfer_lock_enabled RegisteredDomain#transfer_lock_enabled}.

---

##### `WhoisPrivacyEnabled`<sup>Optional</sup> <a name="WhoisPrivacyEnabled" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainConfig.property.whoisPrivacyEnabled"></a>

```csharp
public object WhoisPrivacyEnabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dnsimple/dnsimple/1.2.1/docs/resources/registered_domain#whois_privacy_enabled RegisteredDomain#whois_privacy_enabled}.

---

### RegisteredDomainDomainRegistration <a name="RegisteredDomainDomainRegistration" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainDomainRegistration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainDomainRegistration.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Dnsimple;

new RegisteredDomainDomainRegistration {
    string State = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainDomainRegistration.property.state">State</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dnsimple/dnsimple/1.2.1/docs/resources/registered_domain#state RegisteredDomain#state}. |

---

##### `State`<sup>Optional</sup> <a name="State" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainDomainRegistration.property.state"></a>

```csharp
public string State { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dnsimple/dnsimple/1.2.1/docs/resources/registered_domain#state RegisteredDomain#state}.

---

### RegisteredDomainTimeouts <a name="RegisteredDomainTimeouts" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Dnsimple;

new RegisteredDomainTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainTimeouts.property.create">Create</a></code> | <code>string</code> | Create timeout. |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainTimeouts.property.delete">Delete</a></code> | <code>string</code> | Delete timeout (currently unused). |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainTimeouts.property.update">Update</a></code> | <code>string</code> | Update timeout. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Create timeout.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dnsimple/dnsimple/1.2.1/docs/resources/registered_domain#create RegisteredDomain#create}

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Delete timeout (currently unused).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dnsimple/dnsimple/1.2.1/docs/resources/registered_domain#delete RegisteredDomain#delete}

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Update timeout.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dnsimple/dnsimple/1.2.1/docs/resources/registered_domain#update RegisteredDomain#update}

---

## Classes <a name="Classes" id="Classes"></a>

### RegisteredDomainDomainRegistrationOutputReference <a name="RegisteredDomainDomainRegistrationOutputReference" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainDomainRegistrationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainDomainRegistrationOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Dnsimple;

new RegisteredDomainDomainRegistrationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainDomainRegistrationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainDomainRegistrationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainDomainRegistrationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainDomainRegistrationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainDomainRegistrationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainDomainRegistrationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainDomainRegistrationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainDomainRegistrationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainDomainRegistrationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainDomainRegistrationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainDomainRegistrationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainDomainRegistrationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainDomainRegistrationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainDomainRegistrationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainDomainRegistrationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainDomainRegistrationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainDomainRegistrationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainDomainRegistrationOutputReference.resetState">ResetState</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainDomainRegistrationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainDomainRegistrationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainDomainRegistrationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainDomainRegistrationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainDomainRegistrationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainDomainRegistrationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainDomainRegistrationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainDomainRegistrationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainDomainRegistrationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainDomainRegistrationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainDomainRegistrationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainDomainRegistrationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainDomainRegistrationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainDomainRegistrationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainDomainRegistrationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainDomainRegistrationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainDomainRegistrationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainDomainRegistrationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainDomainRegistrationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainDomainRegistrationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainDomainRegistrationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainDomainRegistrationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainDomainRegistrationOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainDomainRegistrationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetState` <a name="ResetState" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainDomainRegistrationOutputReference.resetState"></a>

```csharp
private void ResetState()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainDomainRegistrationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainDomainRegistrationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainDomainRegistrationOutputReference.property.id">Id</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainDomainRegistrationOutputReference.property.period">Period</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainDomainRegistrationOutputReference.property.stateInput">StateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainDomainRegistrationOutputReference.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainDomainRegistrationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainDomainRegistration">RegisteredDomainDomainRegistration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainDomainRegistrationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainDomainRegistrationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainDomainRegistrationOutputReference.property.id"></a>

```csharp
public double Id { get; }
```

- *Type:* double

---

##### `Period`<sup>Required</sup> <a name="Period" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainDomainRegistrationOutputReference.property.period"></a>

```csharp
public double Period { get; }
```

- *Type:* double

---

##### `StateInput`<sup>Optional</sup> <a name="StateInput" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainDomainRegistrationOutputReference.property.stateInput"></a>

```csharp
public string StateInput { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainDomainRegistrationOutputReference.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainDomainRegistrationOutputReference.property.internalValue"></a>

```csharp
public RegisteredDomainDomainRegistration InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainDomainRegistration">RegisteredDomainDomainRegistration</a>

---


### RegisteredDomainTimeoutsOutputReference <a name="RegisteredDomainTimeoutsOutputReference" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Dnsimple;

new RegisteredDomainTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



