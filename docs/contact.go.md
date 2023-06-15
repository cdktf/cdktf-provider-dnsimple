# `dnsimple_contact`

Refer to the Terraform Registory for docs: [`dnsimple_contact`](https://registry.terraform.io/providers/dnsimple/dnsimple/1.1.2/docs/resources/contact).

# `contact` Submodule <a name="`contact` Submodule" id="@cdktf/provider-dnsimple.contact"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Contact <a name="Contact" id="@cdktf/provider-dnsimple.contact.Contact"></a>

Represents a {@link https://registry.terraform.io/providers/dnsimple/dnsimple/1.1.2/docs/resources/contact dnsimple_contact}.

#### Initializers <a name="Initializers" id="@cdktf/provider-dnsimple.contact.Contact.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-dnsimple-go/dnsimple/v6/contact"

contact.NewContact(scope Construct, id *string, config ContactConfig) Contact
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-dnsimple.contact.Contact.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-dnsimple.contact.Contact.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-dnsimple.contact.Contact.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-dnsimple.contact.ContactConfig">ContactConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-dnsimple.contact.Contact.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-dnsimple.contact.Contact.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-dnsimple.contact.Contact.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-dnsimple.contact.ContactConfig">ContactConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-dnsimple.contact.Contact.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-dnsimple.contact.Contact.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.contact.Contact.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-dnsimple.contact.Contact.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-dnsimple.contact.Contact.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.contact.Contact.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-dnsimple.contact.Contact.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.contact.Contact.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.contact.Contact.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.contact.Contact.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.contact.Contact.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.contact.Contact.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.contact.Contact.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.contact.Contact.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.contact.Contact.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.contact.Contact.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.contact.Contact.resetAddress2">ResetAddress2</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.contact.Contact.resetFax">ResetFax</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.contact.Contact.resetJobTitle">ResetJobTitle</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.contact.Contact.resetLabel">ResetLabel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.contact.Contact.resetOrganizationName">ResetOrganizationName</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-dnsimple.contact.Contact.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-dnsimple.contact.Contact.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-dnsimple.contact.Contact.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-dnsimple.contact.Contact.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-dnsimple.contact.Contact.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-dnsimple.contact.Contact.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-dnsimple.contact.Contact.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-dnsimple.contact.Contact.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-dnsimple.contact.Contact.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-dnsimple.contact.Contact.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-dnsimple.contact.Contact.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-dnsimple.contact.Contact.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-dnsimple.contact.Contact.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-dnsimple.contact.Contact.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-dnsimple.contact.Contact.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-dnsimple.contact.Contact.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-dnsimple.contact.Contact.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-dnsimple.contact.Contact.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-dnsimple.contact.Contact.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-dnsimple.contact.Contact.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-dnsimple.contact.Contact.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-dnsimple.contact.Contact.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-dnsimple.contact.Contact.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-dnsimple.contact.Contact.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-dnsimple.contact.Contact.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-dnsimple.contact.Contact.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-dnsimple.contact.Contact.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-dnsimple.contact.Contact.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-dnsimple.contact.Contact.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetAddress2` <a name="ResetAddress2" id="@cdktf/provider-dnsimple.contact.Contact.resetAddress2"></a>

```go
func ResetAddress2()
```

##### `ResetFax` <a name="ResetFax" id="@cdktf/provider-dnsimple.contact.Contact.resetFax"></a>

```go
func ResetFax()
```

##### `ResetJobTitle` <a name="ResetJobTitle" id="@cdktf/provider-dnsimple.contact.Contact.resetJobTitle"></a>

```go
func ResetJobTitle()
```

##### `ResetLabel` <a name="ResetLabel" id="@cdktf/provider-dnsimple.contact.Contact.resetLabel"></a>

```go
func ResetLabel()
```

##### `ResetOrganizationName` <a name="ResetOrganizationName" id="@cdktf/provider-dnsimple.contact.Contact.resetOrganizationName"></a>

```go
func ResetOrganizationName()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-dnsimple.contact.Contact.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-dnsimple.contact.Contact.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.contact.Contact.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-dnsimple.contact.Contact.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-dnsimple-go/dnsimple/v6/contact"

contact.Contact_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-dnsimple.contact.Contact.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-dnsimple.contact.Contact.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-dnsimple-go/dnsimple/v6/contact"

contact.Contact_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-dnsimple.contact.Contact.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-dnsimple.contact.Contact.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-dnsimple-go/dnsimple/v6/contact"

contact.Contact_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-dnsimple.contact.Contact.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-dnsimple.contact.Contact.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-dnsimple.contact.Contact.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.contact.Contact.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.contact.Contact.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.contact.Contact.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.contact.Contact.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.contact.Contact.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.contact.Contact.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.contact.Contact.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.contact.Contact.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.contact.Contact.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.contact.Contact.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.contact.Contact.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.contact.Contact.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.contact.Contact.property.accountId">AccountId</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.contact.Contact.property.createdAt">CreatedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.contact.Contact.property.faxNormalized">FaxNormalized</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.contact.Contact.property.id">Id</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.contact.Contact.property.phoneNormalized">PhoneNormalized</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.contact.Contact.property.updatedAt">UpdatedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.contact.Contact.property.address1Input">Address1Input</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.contact.Contact.property.address2Input">Address2Input</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.contact.Contact.property.cityInput">CityInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.contact.Contact.property.countryInput">CountryInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.contact.Contact.property.emailInput">EmailInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.contact.Contact.property.faxInput">FaxInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.contact.Contact.property.firstNameInput">FirstNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.contact.Contact.property.jobTitleInput">JobTitleInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.contact.Contact.property.labelInput">LabelInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.contact.Contact.property.lastNameInput">LastNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.contact.Contact.property.organizationNameInput">OrganizationNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.contact.Contact.property.phoneInput">PhoneInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.contact.Contact.property.postalCodeInput">PostalCodeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.contact.Contact.property.stateProvinceInput">StateProvinceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.contact.Contact.property.address1">Address1</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.contact.Contact.property.address2">Address2</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.contact.Contact.property.city">City</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.contact.Contact.property.country">Country</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.contact.Contact.property.email">Email</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.contact.Contact.property.fax">Fax</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.contact.Contact.property.firstName">FirstName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.contact.Contact.property.jobTitle">JobTitle</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.contact.Contact.property.label">Label</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.contact.Contact.property.lastName">LastName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.contact.Contact.property.organizationName">OrganizationName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.contact.Contact.property.phone">Phone</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.contact.Contact.property.postalCode">PostalCode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.contact.Contact.property.stateProvince">StateProvince</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-dnsimple.contact.Contact.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-dnsimple.contact.Contact.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-dnsimple.contact.Contact.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-dnsimple.contact.Contact.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-dnsimple.contact.Contact.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-dnsimple.contact.Contact.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-dnsimple.contact.Contact.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-dnsimple.contact.Contact.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-dnsimple.contact.Contact.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-dnsimple.contact.Contact.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-dnsimple.contact.Contact.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-dnsimple.contact.Contact.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-dnsimple.contact.Contact.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-dnsimple.contact.Contact.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktf/provider-dnsimple.contact.Contact.property.accountId"></a>

```go
func AccountId() *f64
```

- *Type:* *f64

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktf/provider-dnsimple.contact.Contact.property.createdAt"></a>

```go
func CreatedAt() *string
```

- *Type:* *string

---

##### `FaxNormalized`<sup>Required</sup> <a name="FaxNormalized" id="@cdktf/provider-dnsimple.contact.Contact.property.faxNormalized"></a>

```go
func FaxNormalized() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-dnsimple.contact.Contact.property.id"></a>

```go
func Id() *f64
```

- *Type:* *f64

---

##### `PhoneNormalized`<sup>Required</sup> <a name="PhoneNormalized" id="@cdktf/provider-dnsimple.contact.Contact.property.phoneNormalized"></a>

```go
func PhoneNormalized() *string
```

- *Type:* *string

---

##### `UpdatedAt`<sup>Required</sup> <a name="UpdatedAt" id="@cdktf/provider-dnsimple.contact.Contact.property.updatedAt"></a>

```go
func UpdatedAt() *string
```

- *Type:* *string

---

##### `Address1Input`<sup>Optional</sup> <a name="Address1Input" id="@cdktf/provider-dnsimple.contact.Contact.property.address1Input"></a>

```go
func Address1Input() *string
```

- *Type:* *string

---

##### `Address2Input`<sup>Optional</sup> <a name="Address2Input" id="@cdktf/provider-dnsimple.contact.Contact.property.address2Input"></a>

```go
func Address2Input() *string
```

- *Type:* *string

---

##### `CityInput`<sup>Optional</sup> <a name="CityInput" id="@cdktf/provider-dnsimple.contact.Contact.property.cityInput"></a>

```go
func CityInput() *string
```

- *Type:* *string

---

##### `CountryInput`<sup>Optional</sup> <a name="CountryInput" id="@cdktf/provider-dnsimple.contact.Contact.property.countryInput"></a>

```go
func CountryInput() *string
```

- *Type:* *string

---

##### `EmailInput`<sup>Optional</sup> <a name="EmailInput" id="@cdktf/provider-dnsimple.contact.Contact.property.emailInput"></a>

```go
func EmailInput() *string
```

- *Type:* *string

---

##### `FaxInput`<sup>Optional</sup> <a name="FaxInput" id="@cdktf/provider-dnsimple.contact.Contact.property.faxInput"></a>

```go
func FaxInput() *string
```

- *Type:* *string

---

##### `FirstNameInput`<sup>Optional</sup> <a name="FirstNameInput" id="@cdktf/provider-dnsimple.contact.Contact.property.firstNameInput"></a>

```go
func FirstNameInput() *string
```

- *Type:* *string

---

##### `JobTitleInput`<sup>Optional</sup> <a name="JobTitleInput" id="@cdktf/provider-dnsimple.contact.Contact.property.jobTitleInput"></a>

```go
func JobTitleInput() *string
```

- *Type:* *string

---

##### `LabelInput`<sup>Optional</sup> <a name="LabelInput" id="@cdktf/provider-dnsimple.contact.Contact.property.labelInput"></a>

```go
func LabelInput() *string
```

- *Type:* *string

---

##### `LastNameInput`<sup>Optional</sup> <a name="LastNameInput" id="@cdktf/provider-dnsimple.contact.Contact.property.lastNameInput"></a>

```go
func LastNameInput() *string
```

- *Type:* *string

---

##### `OrganizationNameInput`<sup>Optional</sup> <a name="OrganizationNameInput" id="@cdktf/provider-dnsimple.contact.Contact.property.organizationNameInput"></a>

```go
func OrganizationNameInput() *string
```

- *Type:* *string

---

##### `PhoneInput`<sup>Optional</sup> <a name="PhoneInput" id="@cdktf/provider-dnsimple.contact.Contact.property.phoneInput"></a>

```go
func PhoneInput() *string
```

- *Type:* *string

---

##### `PostalCodeInput`<sup>Optional</sup> <a name="PostalCodeInput" id="@cdktf/provider-dnsimple.contact.Contact.property.postalCodeInput"></a>

```go
func PostalCodeInput() *string
```

- *Type:* *string

---

##### `StateProvinceInput`<sup>Optional</sup> <a name="StateProvinceInput" id="@cdktf/provider-dnsimple.contact.Contact.property.stateProvinceInput"></a>

```go
func StateProvinceInput() *string
```

- *Type:* *string

---

##### `Address1`<sup>Required</sup> <a name="Address1" id="@cdktf/provider-dnsimple.contact.Contact.property.address1"></a>

```go
func Address1() *string
```

- *Type:* *string

---

##### `Address2`<sup>Required</sup> <a name="Address2" id="@cdktf/provider-dnsimple.contact.Contact.property.address2"></a>

```go
func Address2() *string
```

- *Type:* *string

---

##### `City`<sup>Required</sup> <a name="City" id="@cdktf/provider-dnsimple.contact.Contact.property.city"></a>

```go
func City() *string
```

- *Type:* *string

---

##### `Country`<sup>Required</sup> <a name="Country" id="@cdktf/provider-dnsimple.contact.Contact.property.country"></a>

```go
func Country() *string
```

- *Type:* *string

---

##### `Email`<sup>Required</sup> <a name="Email" id="@cdktf/provider-dnsimple.contact.Contact.property.email"></a>

```go
func Email() *string
```

- *Type:* *string

---

##### `Fax`<sup>Required</sup> <a name="Fax" id="@cdktf/provider-dnsimple.contact.Contact.property.fax"></a>

```go
func Fax() *string
```

- *Type:* *string

---

##### `FirstName`<sup>Required</sup> <a name="FirstName" id="@cdktf/provider-dnsimple.contact.Contact.property.firstName"></a>

```go
func FirstName() *string
```

- *Type:* *string

---

##### `JobTitle`<sup>Required</sup> <a name="JobTitle" id="@cdktf/provider-dnsimple.contact.Contact.property.jobTitle"></a>

```go
func JobTitle() *string
```

- *Type:* *string

---

##### `Label`<sup>Required</sup> <a name="Label" id="@cdktf/provider-dnsimple.contact.Contact.property.label"></a>

```go
func Label() *string
```

- *Type:* *string

---

##### `LastName`<sup>Required</sup> <a name="LastName" id="@cdktf/provider-dnsimple.contact.Contact.property.lastName"></a>

```go
func LastName() *string
```

- *Type:* *string

---

##### `OrganizationName`<sup>Required</sup> <a name="OrganizationName" id="@cdktf/provider-dnsimple.contact.Contact.property.organizationName"></a>

```go
func OrganizationName() *string
```

- *Type:* *string

---

##### `Phone`<sup>Required</sup> <a name="Phone" id="@cdktf/provider-dnsimple.contact.Contact.property.phone"></a>

```go
func Phone() *string
```

- *Type:* *string

---

##### `PostalCode`<sup>Required</sup> <a name="PostalCode" id="@cdktf/provider-dnsimple.contact.Contact.property.postalCode"></a>

```go
func PostalCode() *string
```

- *Type:* *string

---

##### `StateProvince`<sup>Required</sup> <a name="StateProvince" id="@cdktf/provider-dnsimple.contact.Contact.property.stateProvince"></a>

```go
func StateProvince() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-dnsimple.contact.Contact.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-dnsimple.contact.Contact.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### ContactConfig <a name="ContactConfig" id="@cdktf/provider-dnsimple.contact.ContactConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-dnsimple.contact.ContactConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-dnsimple-go/dnsimple/v6/contact"

&contact.ContactConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Address1: *string,
	City: *string,
	Country: *string,
	Email: *string,
	FirstName: *string,
	LastName: *string,
	Phone: *string,
	PostalCode: *string,
	StateProvince: *string,
	Address2: *string,
	Fax: *string,
	JobTitle: *string,
	Label: *string,
	OrganizationName: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-dnsimple.contact.ContactConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.contact.ContactConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.contact.ContactConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.contact.ContactConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.contact.ContactConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.contact.ContactConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.contact.ContactConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.contact.ContactConfig.property.address1">Address1</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dnsimple/dnsimple/1.1.2/docs/resources/contact#address1 Contact#address1}. |
| <code><a href="#@cdktf/provider-dnsimple.contact.ContactConfig.property.city">City</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dnsimple/dnsimple/1.1.2/docs/resources/contact#city Contact#city}. |
| <code><a href="#@cdktf/provider-dnsimple.contact.ContactConfig.property.country">Country</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dnsimple/dnsimple/1.1.2/docs/resources/contact#country Contact#country}. |
| <code><a href="#@cdktf/provider-dnsimple.contact.ContactConfig.property.email">Email</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dnsimple/dnsimple/1.1.2/docs/resources/contact#email Contact#email}. |
| <code><a href="#@cdktf/provider-dnsimple.contact.ContactConfig.property.firstName">FirstName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dnsimple/dnsimple/1.1.2/docs/resources/contact#first_name Contact#first_name}. |
| <code><a href="#@cdktf/provider-dnsimple.contact.ContactConfig.property.lastName">LastName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dnsimple/dnsimple/1.1.2/docs/resources/contact#last_name Contact#last_name}. |
| <code><a href="#@cdktf/provider-dnsimple.contact.ContactConfig.property.phone">Phone</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dnsimple/dnsimple/1.1.2/docs/resources/contact#phone Contact#phone}. |
| <code><a href="#@cdktf/provider-dnsimple.contact.ContactConfig.property.postalCode">PostalCode</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dnsimple/dnsimple/1.1.2/docs/resources/contact#postal_code Contact#postal_code}. |
| <code><a href="#@cdktf/provider-dnsimple.contact.ContactConfig.property.stateProvince">StateProvince</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dnsimple/dnsimple/1.1.2/docs/resources/contact#state_province Contact#state_province}. |
| <code><a href="#@cdktf/provider-dnsimple.contact.ContactConfig.property.address2">Address2</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dnsimple/dnsimple/1.1.2/docs/resources/contact#address2 Contact#address2}. |
| <code><a href="#@cdktf/provider-dnsimple.contact.ContactConfig.property.fax">Fax</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dnsimple/dnsimple/1.1.2/docs/resources/contact#fax Contact#fax}. |
| <code><a href="#@cdktf/provider-dnsimple.contact.ContactConfig.property.jobTitle">JobTitle</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dnsimple/dnsimple/1.1.2/docs/resources/contact#job_title Contact#job_title}. |
| <code><a href="#@cdktf/provider-dnsimple.contact.ContactConfig.property.label">Label</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dnsimple/dnsimple/1.1.2/docs/resources/contact#label Contact#label}. |
| <code><a href="#@cdktf/provider-dnsimple.contact.ContactConfig.property.organizationName">OrganizationName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dnsimple/dnsimple/1.1.2/docs/resources/contact#organization_name Contact#organization_name}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-dnsimple.contact.ContactConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-dnsimple.contact.ContactConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-dnsimple.contact.ContactConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-dnsimple.contact.ContactConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-dnsimple.contact.ContactConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-dnsimple.contact.ContactConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-dnsimple.contact.ContactConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Address1`<sup>Required</sup> <a name="Address1" id="@cdktf/provider-dnsimple.contact.ContactConfig.property.address1"></a>

```go
Address1 *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dnsimple/dnsimple/1.1.2/docs/resources/contact#address1 Contact#address1}.

---

##### `City`<sup>Required</sup> <a name="City" id="@cdktf/provider-dnsimple.contact.ContactConfig.property.city"></a>

```go
City *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dnsimple/dnsimple/1.1.2/docs/resources/contact#city Contact#city}.

---

##### `Country`<sup>Required</sup> <a name="Country" id="@cdktf/provider-dnsimple.contact.ContactConfig.property.country"></a>

```go
Country *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dnsimple/dnsimple/1.1.2/docs/resources/contact#country Contact#country}.

---

##### `Email`<sup>Required</sup> <a name="Email" id="@cdktf/provider-dnsimple.contact.ContactConfig.property.email"></a>

```go
Email *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dnsimple/dnsimple/1.1.2/docs/resources/contact#email Contact#email}.

---

##### `FirstName`<sup>Required</sup> <a name="FirstName" id="@cdktf/provider-dnsimple.contact.ContactConfig.property.firstName"></a>

```go
FirstName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dnsimple/dnsimple/1.1.2/docs/resources/contact#first_name Contact#first_name}.

---

##### `LastName`<sup>Required</sup> <a name="LastName" id="@cdktf/provider-dnsimple.contact.ContactConfig.property.lastName"></a>

```go
LastName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dnsimple/dnsimple/1.1.2/docs/resources/contact#last_name Contact#last_name}.

---

##### `Phone`<sup>Required</sup> <a name="Phone" id="@cdktf/provider-dnsimple.contact.ContactConfig.property.phone"></a>

```go
Phone *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dnsimple/dnsimple/1.1.2/docs/resources/contact#phone Contact#phone}.

---

##### `PostalCode`<sup>Required</sup> <a name="PostalCode" id="@cdktf/provider-dnsimple.contact.ContactConfig.property.postalCode"></a>

```go
PostalCode *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dnsimple/dnsimple/1.1.2/docs/resources/contact#postal_code Contact#postal_code}.

---

##### `StateProvince`<sup>Required</sup> <a name="StateProvince" id="@cdktf/provider-dnsimple.contact.ContactConfig.property.stateProvince"></a>

```go
StateProvince *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dnsimple/dnsimple/1.1.2/docs/resources/contact#state_province Contact#state_province}.

---

##### `Address2`<sup>Optional</sup> <a name="Address2" id="@cdktf/provider-dnsimple.contact.ContactConfig.property.address2"></a>

```go
Address2 *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dnsimple/dnsimple/1.1.2/docs/resources/contact#address2 Contact#address2}.

---

##### `Fax`<sup>Optional</sup> <a name="Fax" id="@cdktf/provider-dnsimple.contact.ContactConfig.property.fax"></a>

```go
Fax *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dnsimple/dnsimple/1.1.2/docs/resources/contact#fax Contact#fax}.

---

##### `JobTitle`<sup>Optional</sup> <a name="JobTitle" id="@cdktf/provider-dnsimple.contact.ContactConfig.property.jobTitle"></a>

```go
JobTitle *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dnsimple/dnsimple/1.1.2/docs/resources/contact#job_title Contact#job_title}.

---

##### `Label`<sup>Optional</sup> <a name="Label" id="@cdktf/provider-dnsimple.contact.ContactConfig.property.label"></a>

```go
Label *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dnsimple/dnsimple/1.1.2/docs/resources/contact#label Contact#label}.

---

##### `OrganizationName`<sup>Optional</sup> <a name="OrganizationName" id="@cdktf/provider-dnsimple.contact.ContactConfig.property.organizationName"></a>

```go
OrganizationName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dnsimple/dnsimple/1.1.2/docs/resources/contact#organization_name Contact#organization_name}.

---



