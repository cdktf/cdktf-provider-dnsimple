# `dnsimple_registered_domain`

Refer to the Terraform Registory for docs: [`dnsimple_registered_domain`](https://registry.terraform.io/providers/dnsimple/dnsimple/1.3.0/docs/resources/registered_domain).

# `registeredDomain` Submodule <a name="`registeredDomain` Submodule" id="@cdktf/provider-dnsimple.registeredDomain"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### RegisteredDomain <a name="RegisteredDomain" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain"></a>

Represents a {@link https://registry.terraform.io/providers/dnsimple/dnsimple/1.3.0/docs/resources/registered_domain dnsimple_registered_domain}.

#### Initializers <a name="Initializers" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-dnsimple-go/dnsimple/v7/registereddomain"

registereddomain.NewRegisteredDomain(scope Construct, id *string, config RegisteredDomainConfig) RegisteredDomain
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainConfig">RegisteredDomainConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.Initializer.parameter.config"></a>

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

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.putTimeouts"></a>

```go
func PutTimeouts(value RegisteredDomainTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainTimeouts">RegisteredDomainTimeouts</a>

---

##### `ResetAutoRenewEnabled` <a name="ResetAutoRenewEnabled" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.resetAutoRenewEnabled"></a>

```go
func ResetAutoRenewEnabled()
```

##### `ResetDnssecEnabled` <a name="ResetDnssecEnabled" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.resetDnssecEnabled"></a>

```go
func ResetDnssecEnabled()
```

##### `ResetExtendedAttributes` <a name="ResetExtendedAttributes" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.resetExtendedAttributes"></a>

```go
func ResetExtendedAttributes()
```

##### `ResetPremiumPrice` <a name="ResetPremiumPrice" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.resetPremiumPrice"></a>

```go
func ResetPremiumPrice()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.resetTimeouts"></a>

```go
func ResetTimeouts()
```

##### `ResetTransferLockEnabled` <a name="ResetTransferLockEnabled" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.resetTransferLockEnabled"></a>

```go
func ResetTransferLockEnabled()
```

##### `ResetWhoisPrivacyEnabled` <a name="ResetWhoisPrivacyEnabled" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.resetWhoisPrivacyEnabled"></a>

```go
func ResetWhoisPrivacyEnabled()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-dnsimple-go/dnsimple/v7/registereddomain"

registereddomain.RegisteredDomain_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-dnsimple-go/dnsimple/v7/registereddomain"

registereddomain.RegisteredDomain_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-dnsimple-go/dnsimple/v7/registereddomain"

registereddomain.RegisteredDomain_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.property.accountId">AccountId</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.property.domainRegistration">DomainRegistration</a></code> | <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainDomainRegistrationOutputReference">RegisteredDomainDomainRegistrationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.property.expiresAt">ExpiresAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.property.id">Id</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.property.registrantChange">RegistrantChange</a></code> | <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainRegistrantChangeOutputReference">RegisteredDomainRegistrantChangeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainTimeoutsOutputReference">RegisteredDomainTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.property.unicodeName">UnicodeName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.property.autoRenewEnabledInput">AutoRenewEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.property.contactIdInput">ContactIdInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.property.dnssecEnabledInput">DnssecEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.property.extendedAttributesInput">ExtendedAttributesInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.property.premiumPriceInput">PremiumPriceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.property.transferLockEnabledInput">TransferLockEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.property.whoisPrivacyEnabledInput">WhoisPrivacyEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.property.autoRenewEnabled">AutoRenewEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.property.contactId">ContactId</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.property.dnssecEnabled">DnssecEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.property.extendedAttributes">ExtendedAttributes</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.property.premiumPrice">PremiumPrice</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.property.transferLockEnabled">TransferLockEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.property.whoisPrivacyEnabled">WhoisPrivacyEnabled</a></code> | <code>interface{}</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.property.accountId"></a>

```go
func AccountId() *f64
```

- *Type:* *f64

---

##### `DomainRegistration`<sup>Required</sup> <a name="DomainRegistration" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.property.domainRegistration"></a>

```go
func DomainRegistration() RegisteredDomainDomainRegistrationOutputReference
```

- *Type:* <a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainDomainRegistrationOutputReference">RegisteredDomainDomainRegistrationOutputReference</a>

---

##### `ExpiresAt`<sup>Required</sup> <a name="ExpiresAt" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.property.expiresAt"></a>

```go
func ExpiresAt() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.property.id"></a>

```go
func Id() *f64
```

- *Type:* *f64

---

##### `RegistrantChange`<sup>Required</sup> <a name="RegistrantChange" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.property.registrantChange"></a>

```go
func RegistrantChange() RegisteredDomainRegistrantChangeOutputReference
```

- *Type:* <a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainRegistrantChangeOutputReference">RegisteredDomainRegistrantChangeOutputReference</a>

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.property.timeouts"></a>

```go
func Timeouts() RegisteredDomainTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainTimeoutsOutputReference">RegisteredDomainTimeoutsOutputReference</a>

---

##### `UnicodeName`<sup>Required</sup> <a name="UnicodeName" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.property.unicodeName"></a>

```go
func UnicodeName() *string
```

- *Type:* *string

---

##### `AutoRenewEnabledInput`<sup>Optional</sup> <a name="AutoRenewEnabledInput" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.property.autoRenewEnabledInput"></a>

```go
func AutoRenewEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `ContactIdInput`<sup>Optional</sup> <a name="ContactIdInput" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.property.contactIdInput"></a>

```go
func ContactIdInput() *f64
```

- *Type:* *f64

---

##### `DnssecEnabledInput`<sup>Optional</sup> <a name="DnssecEnabledInput" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.property.dnssecEnabledInput"></a>

```go
func DnssecEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `ExtendedAttributesInput`<sup>Optional</sup> <a name="ExtendedAttributesInput" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.property.extendedAttributesInput"></a>

```go
func ExtendedAttributesInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `PremiumPriceInput`<sup>Optional</sup> <a name="PremiumPriceInput" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.property.premiumPriceInput"></a>

```go
func PremiumPriceInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `TransferLockEnabledInput`<sup>Optional</sup> <a name="TransferLockEnabledInput" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.property.transferLockEnabledInput"></a>

```go
func TransferLockEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `WhoisPrivacyEnabledInput`<sup>Optional</sup> <a name="WhoisPrivacyEnabledInput" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.property.whoisPrivacyEnabledInput"></a>

```go
func WhoisPrivacyEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `AutoRenewEnabled`<sup>Required</sup> <a name="AutoRenewEnabled" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.property.autoRenewEnabled"></a>

```go
func AutoRenewEnabled() interface{}
```

- *Type:* interface{}

---

##### `ContactId`<sup>Required</sup> <a name="ContactId" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.property.contactId"></a>

```go
func ContactId() *f64
```

- *Type:* *f64

---

##### `DnssecEnabled`<sup>Required</sup> <a name="DnssecEnabled" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.property.dnssecEnabled"></a>

```go
func DnssecEnabled() interface{}
```

- *Type:* interface{}

---

##### `ExtendedAttributes`<sup>Required</sup> <a name="ExtendedAttributes" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.property.extendedAttributes"></a>

```go
func ExtendedAttributes() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `PremiumPrice`<sup>Required</sup> <a name="PremiumPrice" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.property.premiumPrice"></a>

```go
func PremiumPrice() *string
```

- *Type:* *string

---

##### `TransferLockEnabled`<sup>Required</sup> <a name="TransferLockEnabled" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.property.transferLockEnabled"></a>

```go
func TransferLockEnabled() interface{}
```

- *Type:* interface{}

---

##### `WhoisPrivacyEnabled`<sup>Required</sup> <a name="WhoisPrivacyEnabled" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.property.whoisPrivacyEnabled"></a>

```go
func WhoisPrivacyEnabled() interface{}
```

- *Type:* interface{}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### RegisteredDomainConfig <a name="RegisteredDomainConfig" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-dnsimple-go/dnsimple/v7/registereddomain"

&registereddomain.RegisteredDomainConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	ContactId: *f64,
	Name: *string,
	AutoRenewEnabled: interface{},
	DnssecEnabled: interface{},
	ExtendedAttributes: *map[string]*string,
	PremiumPrice: *string,
	Timeouts: github.com/cdktf/cdktf-provider-dnsimple-go/dnsimple/v7.registeredDomain.RegisteredDomainTimeouts,
	TransferLockEnabled: interface{},
	WhoisPrivacyEnabled: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainConfig.property.contactId">ContactId</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dnsimple/dnsimple/1.3.0/docs/resources/registered_domain#contact_id RegisteredDomain#contact_id}. |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dnsimple/dnsimple/1.3.0/docs/resources/registered_domain#name RegisteredDomain#name}. |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainConfig.property.autoRenewEnabled">AutoRenewEnabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dnsimple/dnsimple/1.3.0/docs/resources/registered_domain#auto_renew_enabled RegisteredDomain#auto_renew_enabled}. |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainConfig.property.dnssecEnabled">DnssecEnabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dnsimple/dnsimple/1.3.0/docs/resources/registered_domain#dnssec_enabled RegisteredDomain#dnssec_enabled}. |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainConfig.property.extendedAttributes">ExtendedAttributes</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dnsimple/dnsimple/1.3.0/docs/resources/registered_domain#extended_attributes RegisteredDomain#extended_attributes}. |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainConfig.property.premiumPrice">PremiumPrice</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dnsimple/dnsimple/1.3.0/docs/resources/registered_domain#premium_price RegisteredDomain#premium_price}. |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainTimeouts">RegisteredDomainTimeouts</a></code> | Timeouts for operations, given as a parsable string as in `10m` or `30s`. |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainConfig.property.transferLockEnabled">TransferLockEnabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dnsimple/dnsimple/1.3.0/docs/resources/registered_domain#transfer_lock_enabled RegisteredDomain#transfer_lock_enabled}. |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainConfig.property.whoisPrivacyEnabled">WhoisPrivacyEnabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dnsimple/dnsimple/1.3.0/docs/resources/registered_domain#whois_privacy_enabled RegisteredDomain#whois_privacy_enabled}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ContactId`<sup>Required</sup> <a name="ContactId" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainConfig.property.contactId"></a>

```go
ContactId *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dnsimple/dnsimple/1.3.0/docs/resources/registered_domain#contact_id RegisteredDomain#contact_id}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dnsimple/dnsimple/1.3.0/docs/resources/registered_domain#name RegisteredDomain#name}.

---

##### `AutoRenewEnabled`<sup>Optional</sup> <a name="AutoRenewEnabled" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainConfig.property.autoRenewEnabled"></a>

```go
AutoRenewEnabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dnsimple/dnsimple/1.3.0/docs/resources/registered_domain#auto_renew_enabled RegisteredDomain#auto_renew_enabled}.

---

##### `DnssecEnabled`<sup>Optional</sup> <a name="DnssecEnabled" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainConfig.property.dnssecEnabled"></a>

```go
DnssecEnabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dnsimple/dnsimple/1.3.0/docs/resources/registered_domain#dnssec_enabled RegisteredDomain#dnssec_enabled}.

---

##### `ExtendedAttributes`<sup>Optional</sup> <a name="ExtendedAttributes" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainConfig.property.extendedAttributes"></a>

```go
ExtendedAttributes *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dnsimple/dnsimple/1.3.0/docs/resources/registered_domain#extended_attributes RegisteredDomain#extended_attributes}.

---

##### `PremiumPrice`<sup>Optional</sup> <a name="PremiumPrice" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainConfig.property.premiumPrice"></a>

```go
PremiumPrice *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dnsimple/dnsimple/1.3.0/docs/resources/registered_domain#premium_price RegisteredDomain#premium_price}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainConfig.property.timeouts"></a>

```go
Timeouts RegisteredDomainTimeouts
```

- *Type:* <a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainTimeouts">RegisteredDomainTimeouts</a>

Timeouts for operations, given as a parsable string as in `10m` or `30s`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dnsimple/dnsimple/1.3.0/docs/resources/registered_domain#timeouts RegisteredDomain#timeouts}

---

##### `TransferLockEnabled`<sup>Optional</sup> <a name="TransferLockEnabled" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainConfig.property.transferLockEnabled"></a>

```go
TransferLockEnabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dnsimple/dnsimple/1.3.0/docs/resources/registered_domain#transfer_lock_enabled RegisteredDomain#transfer_lock_enabled}.

---

##### `WhoisPrivacyEnabled`<sup>Optional</sup> <a name="WhoisPrivacyEnabled" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainConfig.property.whoisPrivacyEnabled"></a>

```go
WhoisPrivacyEnabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dnsimple/dnsimple/1.3.0/docs/resources/registered_domain#whois_privacy_enabled RegisteredDomain#whois_privacy_enabled}.

---

### RegisteredDomainDomainRegistration <a name="RegisteredDomainDomainRegistration" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainDomainRegistration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainDomainRegistration.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-dnsimple-go/dnsimple/v7/registereddomain"

&registereddomain.RegisteredDomainDomainRegistration {
	State: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainDomainRegistration.property.state">State</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dnsimple/dnsimple/1.3.0/docs/resources/registered_domain#state RegisteredDomain#state}. |

---

##### `State`<sup>Optional</sup> <a name="State" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainDomainRegistration.property.state"></a>

```go
State *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dnsimple/dnsimple/1.3.0/docs/resources/registered_domain#state RegisteredDomain#state}.

---

### RegisteredDomainRegistrantChange <a name="RegisteredDomainRegistrantChange" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainRegistrantChange"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainRegistrantChange.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-dnsimple-go/dnsimple/v7/registereddomain"

&registereddomain.RegisteredDomainRegistrantChange {
	State: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainRegistrantChange.property.state">State</a></code> | <code>*string</code> | State of the registrant change. |

---

##### `State`<sup>Optional</sup> <a name="State" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainRegistrantChange.property.state"></a>

```go
State *string
```

- *Type:* *string

State of the registrant change.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dnsimple/dnsimple/1.3.0/docs/resources/registered_domain#state RegisteredDomain#state}

---

### RegisteredDomainTimeouts <a name="RegisteredDomainTimeouts" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-dnsimple-go/dnsimple/v7/registereddomain"

&registereddomain.RegisteredDomainTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainTimeouts.property.create">Create</a></code> | <code>*string</code> | Create timeout. |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Delete timeout (currently unused). |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainTimeouts.property.update">Update</a></code> | <code>*string</code> | Update timeout. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Create timeout.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dnsimple/dnsimple/1.3.0/docs/resources/registered_domain#create RegisteredDomain#create}

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Delete timeout (currently unused).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dnsimple/dnsimple/1.3.0/docs/resources/registered_domain#delete RegisteredDomain#delete}

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Update timeout.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dnsimple/dnsimple/1.3.0/docs/resources/registered_domain#update RegisteredDomain#update}

---

## Classes <a name="Classes" id="Classes"></a>

### RegisteredDomainDomainRegistrationOutputReference <a name="RegisteredDomainDomainRegistrationOutputReference" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainDomainRegistrationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainDomainRegistrationOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-dnsimple-go/dnsimple/v7/registereddomain"

registereddomain.NewRegisteredDomainDomainRegistrationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) RegisteredDomainDomainRegistrationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainDomainRegistrationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainDomainRegistrationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainDomainRegistrationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainDomainRegistrationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

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

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainDomainRegistrationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainDomainRegistrationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainDomainRegistrationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainDomainRegistrationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainDomainRegistrationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainDomainRegistrationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainDomainRegistrationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainDomainRegistrationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainDomainRegistrationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainDomainRegistrationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainDomainRegistrationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainDomainRegistrationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainDomainRegistrationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainDomainRegistrationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainDomainRegistrationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainDomainRegistrationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainDomainRegistrationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainDomainRegistrationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainDomainRegistrationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainDomainRegistrationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainDomainRegistrationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainDomainRegistrationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainDomainRegistrationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetState` <a name="ResetState" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainDomainRegistrationOutputReference.resetState"></a>

```go
func ResetState()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainDomainRegistrationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainDomainRegistrationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainDomainRegistrationOutputReference.property.id">Id</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainDomainRegistrationOutputReference.property.period">Period</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainDomainRegistrationOutputReference.property.stateInput">StateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainDomainRegistrationOutputReference.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainDomainRegistrationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainDomainRegistration">RegisteredDomainDomainRegistration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainDomainRegistrationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainDomainRegistrationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainDomainRegistrationOutputReference.property.id"></a>

```go
func Id() *f64
```

- *Type:* *f64

---

##### `Period`<sup>Required</sup> <a name="Period" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainDomainRegistrationOutputReference.property.period"></a>

```go
func Period() *f64
```

- *Type:* *f64

---

##### `StateInput`<sup>Optional</sup> <a name="StateInput" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainDomainRegistrationOutputReference.property.stateInput"></a>

```go
func StateInput() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainDomainRegistrationOutputReference.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainDomainRegistrationOutputReference.property.internalValue"></a>

```go
func InternalValue() RegisteredDomainDomainRegistration
```

- *Type:* <a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainDomainRegistration">RegisteredDomainDomainRegistration</a>

---


### RegisteredDomainRegistrantChangeOutputReference <a name="RegisteredDomainRegistrantChangeOutputReference" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainRegistrantChangeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainRegistrantChangeOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-dnsimple-go/dnsimple/v7/registereddomain"

registereddomain.NewRegisteredDomainRegistrantChangeOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) RegisteredDomainRegistrantChangeOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainRegistrantChangeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainRegistrantChangeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainRegistrantChangeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainRegistrantChangeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainRegistrantChangeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainRegistrantChangeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainRegistrantChangeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainRegistrantChangeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainRegistrantChangeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainRegistrantChangeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainRegistrantChangeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainRegistrantChangeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainRegistrantChangeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainRegistrantChangeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainRegistrantChangeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainRegistrantChangeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainRegistrantChangeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainRegistrantChangeOutputReference.resetState">ResetState</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainRegistrantChangeOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainRegistrantChangeOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainRegistrantChangeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainRegistrantChangeOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainRegistrantChangeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainRegistrantChangeOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainRegistrantChangeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainRegistrantChangeOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainRegistrantChangeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainRegistrantChangeOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainRegistrantChangeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainRegistrantChangeOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainRegistrantChangeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainRegistrantChangeOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainRegistrantChangeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainRegistrantChangeOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainRegistrantChangeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainRegistrantChangeOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainRegistrantChangeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainRegistrantChangeOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainRegistrantChangeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainRegistrantChangeOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainRegistrantChangeOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainRegistrantChangeOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetState` <a name="ResetState" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainRegistrantChangeOutputReference.resetState"></a>

```go
func ResetState()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainRegistrantChangeOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainRegistrantChangeOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainRegistrantChangeOutputReference.property.accountId">AccountId</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainRegistrantChangeOutputReference.property.contactId">ContactId</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainRegistrantChangeOutputReference.property.domainId">DomainId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainRegistrantChangeOutputReference.property.extendedAttributes">ExtendedAttributes</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainRegistrantChangeOutputReference.property.id">Id</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainRegistrantChangeOutputReference.property.irtLockLiftedBy">IrtLockLiftedBy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainRegistrantChangeOutputReference.property.registryOwnerChange">RegistryOwnerChange</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainRegistrantChangeOutputReference.property.stateInput">StateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainRegistrantChangeOutputReference.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainRegistrantChangeOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainRegistrantChange">RegisteredDomainRegistrantChange</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainRegistrantChangeOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainRegistrantChangeOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainRegistrantChangeOutputReference.property.accountId"></a>

```go
func AccountId() *f64
```

- *Type:* *f64

---

##### `ContactId`<sup>Required</sup> <a name="ContactId" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainRegistrantChangeOutputReference.property.contactId"></a>

```go
func ContactId() *f64
```

- *Type:* *f64

---

##### `DomainId`<sup>Required</sup> <a name="DomainId" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainRegistrantChangeOutputReference.property.domainId"></a>

```go
func DomainId() *string
```

- *Type:* *string

---

##### `ExtendedAttributes`<sup>Required</sup> <a name="ExtendedAttributes" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainRegistrantChangeOutputReference.property.extendedAttributes"></a>

```go
func ExtendedAttributes() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainRegistrantChangeOutputReference.property.id"></a>

```go
func Id() *f64
```

- *Type:* *f64

---

##### `IrtLockLiftedBy`<sup>Required</sup> <a name="IrtLockLiftedBy" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainRegistrantChangeOutputReference.property.irtLockLiftedBy"></a>

```go
func IrtLockLiftedBy() *string
```

- *Type:* *string

---

##### `RegistryOwnerChange`<sup>Required</sup> <a name="RegistryOwnerChange" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainRegistrantChangeOutputReference.property.registryOwnerChange"></a>

```go
func RegistryOwnerChange() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `StateInput`<sup>Optional</sup> <a name="StateInput" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainRegistrantChangeOutputReference.property.stateInput"></a>

```go
func StateInput() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainRegistrantChangeOutputReference.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainRegistrantChangeOutputReference.property.internalValue"></a>

```go
func InternalValue() RegisteredDomainRegistrantChange
```

- *Type:* <a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainRegistrantChange">RegisteredDomainRegistrantChange</a>

---


### RegisteredDomainTimeoutsOutputReference <a name="RegisteredDomainTimeoutsOutputReference" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-dnsimple-go/dnsimple/v7/registereddomain"

registereddomain.NewRegisteredDomainTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) RegisteredDomainTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

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

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



