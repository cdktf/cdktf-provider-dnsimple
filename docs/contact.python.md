# `dnsimple_contact`

Refer to the Terraform Registory for docs: [`dnsimple_contact`](https://registry.terraform.io/providers/dnsimple/dnsimple/1.3.1/docs/resources/contact).

# `contact` Submodule <a name="`contact` Submodule" id="@cdktf/provider-dnsimple.contact"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Contact <a name="Contact" id="@cdktf/provider-dnsimple.contact.Contact"></a>

Represents a {@link https://registry.terraform.io/providers/dnsimple/dnsimple/1.3.1/docs/resources/contact dnsimple_contact}.

#### Initializers <a name="Initializers" id="@cdktf/provider-dnsimple.contact.Contact.Initializer"></a>

```python
from cdktf_cdktf_provider_dnsimple import contact

contact.Contact(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  address1: str,
  city: str,
  country: str,
  email: str,
  first_name: str,
  last_name: str,
  phone: str,
  postal_code: str,
  state_province: str,
  address2: str = None,
  fax: str = None,
  job_title: str = None,
  label: str = None,
  organization_name: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-dnsimple.contact.Contact.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-dnsimple.contact.Contact.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-dnsimple.contact.Contact.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.contact.Contact.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.contact.Contact.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.contact.Contact.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.contact.Contact.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.contact.Contact.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.contact.Contact.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.contact.Contact.Initializer.parameter.address1">address1</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dnsimple/dnsimple/1.3.1/docs/resources/contact#address1 Contact#address1}. |
| <code><a href="#@cdktf/provider-dnsimple.contact.Contact.Initializer.parameter.city">city</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dnsimple/dnsimple/1.3.1/docs/resources/contact#city Contact#city}. |
| <code><a href="#@cdktf/provider-dnsimple.contact.Contact.Initializer.parameter.country">country</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dnsimple/dnsimple/1.3.1/docs/resources/contact#country Contact#country}. |
| <code><a href="#@cdktf/provider-dnsimple.contact.Contact.Initializer.parameter.email">email</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dnsimple/dnsimple/1.3.1/docs/resources/contact#email Contact#email}. |
| <code><a href="#@cdktf/provider-dnsimple.contact.Contact.Initializer.parameter.firstName">first_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dnsimple/dnsimple/1.3.1/docs/resources/contact#first_name Contact#first_name}. |
| <code><a href="#@cdktf/provider-dnsimple.contact.Contact.Initializer.parameter.lastName">last_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dnsimple/dnsimple/1.3.1/docs/resources/contact#last_name Contact#last_name}. |
| <code><a href="#@cdktf/provider-dnsimple.contact.Contact.Initializer.parameter.phone">phone</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dnsimple/dnsimple/1.3.1/docs/resources/contact#phone Contact#phone}. |
| <code><a href="#@cdktf/provider-dnsimple.contact.Contact.Initializer.parameter.postalCode">postal_code</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dnsimple/dnsimple/1.3.1/docs/resources/contact#postal_code Contact#postal_code}. |
| <code><a href="#@cdktf/provider-dnsimple.contact.Contact.Initializer.parameter.stateProvince">state_province</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dnsimple/dnsimple/1.3.1/docs/resources/contact#state_province Contact#state_province}. |
| <code><a href="#@cdktf/provider-dnsimple.contact.Contact.Initializer.parameter.address2">address2</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dnsimple/dnsimple/1.3.1/docs/resources/contact#address2 Contact#address2}. |
| <code><a href="#@cdktf/provider-dnsimple.contact.Contact.Initializer.parameter.fax">fax</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dnsimple/dnsimple/1.3.1/docs/resources/contact#fax Contact#fax}. |
| <code><a href="#@cdktf/provider-dnsimple.contact.Contact.Initializer.parameter.jobTitle">job_title</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dnsimple/dnsimple/1.3.1/docs/resources/contact#job_title Contact#job_title}. |
| <code><a href="#@cdktf/provider-dnsimple.contact.Contact.Initializer.parameter.label">label</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dnsimple/dnsimple/1.3.1/docs/resources/contact#label Contact#label}. |
| <code><a href="#@cdktf/provider-dnsimple.contact.Contact.Initializer.parameter.organizationName">organization_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dnsimple/dnsimple/1.3.1/docs/resources/contact#organization_name Contact#organization_name}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-dnsimple.contact.Contact.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-dnsimple.contact.Contact.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-dnsimple.contact.Contact.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-dnsimple.contact.Contact.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-dnsimple.contact.Contact.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-dnsimple.contact.Contact.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-dnsimple.contact.Contact.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-dnsimple.contact.Contact.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-dnsimple.contact.Contact.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `address1`<sup>Required</sup> <a name="address1" id="@cdktf/provider-dnsimple.contact.Contact.Initializer.parameter.address1"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dnsimple/dnsimple/1.3.1/docs/resources/contact#address1 Contact#address1}.

---

##### `city`<sup>Required</sup> <a name="city" id="@cdktf/provider-dnsimple.contact.Contact.Initializer.parameter.city"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dnsimple/dnsimple/1.3.1/docs/resources/contact#city Contact#city}.

---

##### `country`<sup>Required</sup> <a name="country" id="@cdktf/provider-dnsimple.contact.Contact.Initializer.parameter.country"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dnsimple/dnsimple/1.3.1/docs/resources/contact#country Contact#country}.

---

##### `email`<sup>Required</sup> <a name="email" id="@cdktf/provider-dnsimple.contact.Contact.Initializer.parameter.email"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dnsimple/dnsimple/1.3.1/docs/resources/contact#email Contact#email}.

---

##### `first_name`<sup>Required</sup> <a name="first_name" id="@cdktf/provider-dnsimple.contact.Contact.Initializer.parameter.firstName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dnsimple/dnsimple/1.3.1/docs/resources/contact#first_name Contact#first_name}.

---

##### `last_name`<sup>Required</sup> <a name="last_name" id="@cdktf/provider-dnsimple.contact.Contact.Initializer.parameter.lastName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dnsimple/dnsimple/1.3.1/docs/resources/contact#last_name Contact#last_name}.

---

##### `phone`<sup>Required</sup> <a name="phone" id="@cdktf/provider-dnsimple.contact.Contact.Initializer.parameter.phone"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dnsimple/dnsimple/1.3.1/docs/resources/contact#phone Contact#phone}.

---

##### `postal_code`<sup>Required</sup> <a name="postal_code" id="@cdktf/provider-dnsimple.contact.Contact.Initializer.parameter.postalCode"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dnsimple/dnsimple/1.3.1/docs/resources/contact#postal_code Contact#postal_code}.

---

##### `state_province`<sup>Required</sup> <a name="state_province" id="@cdktf/provider-dnsimple.contact.Contact.Initializer.parameter.stateProvince"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dnsimple/dnsimple/1.3.1/docs/resources/contact#state_province Contact#state_province}.

---

##### `address2`<sup>Optional</sup> <a name="address2" id="@cdktf/provider-dnsimple.contact.Contact.Initializer.parameter.address2"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dnsimple/dnsimple/1.3.1/docs/resources/contact#address2 Contact#address2}.

---

##### `fax`<sup>Optional</sup> <a name="fax" id="@cdktf/provider-dnsimple.contact.Contact.Initializer.parameter.fax"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dnsimple/dnsimple/1.3.1/docs/resources/contact#fax Contact#fax}.

---

##### `job_title`<sup>Optional</sup> <a name="job_title" id="@cdktf/provider-dnsimple.contact.Contact.Initializer.parameter.jobTitle"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dnsimple/dnsimple/1.3.1/docs/resources/contact#job_title Contact#job_title}.

---

##### `label`<sup>Optional</sup> <a name="label" id="@cdktf/provider-dnsimple.contact.Contact.Initializer.parameter.label"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dnsimple/dnsimple/1.3.1/docs/resources/contact#label Contact#label}.

---

##### `organization_name`<sup>Optional</sup> <a name="organization_name" id="@cdktf/provider-dnsimple.contact.Contact.Initializer.parameter.organizationName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dnsimple/dnsimple/1.3.1/docs/resources/contact#organization_name Contact#organization_name}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-dnsimple.contact.Contact.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-dnsimple.contact.Contact.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.contact.Contact.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-dnsimple.contact.Contact.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-dnsimple.contact.Contact.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.contact.Contact.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-dnsimple.contact.Contact.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-dnsimple.contact.Contact.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.contact.Contact.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.contact.Contact.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.contact.Contact.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.contact.Contact.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.contact.Contact.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.contact.Contact.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.contact.Contact.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.contact.Contact.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.contact.Contact.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.contact.Contact.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.contact.Contact.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-dnsimple.contact.Contact.resetAddress2">reset_address2</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.contact.Contact.resetFax">reset_fax</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.contact.Contact.resetJobTitle">reset_job_title</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.contact.Contact.resetLabel">reset_label</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.contact.Contact.resetOrganizationName">reset_organization_name</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-dnsimple.contact.Contact.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-dnsimple.contact.Contact.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-dnsimple.contact.Contact.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-dnsimple.contact.Contact.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-dnsimple.contact.Contact.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-dnsimple.contact.Contact.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-dnsimple.contact.Contact.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-dnsimple.contact.Contact.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-dnsimple.contact.Contact.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-dnsimple.contact.Contact.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-dnsimple.contact.Contact.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-dnsimple.contact.Contact.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-dnsimple.contact.Contact.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-dnsimple.contact.Contact.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-dnsimple.contact.Contact.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-dnsimple.contact.Contact.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-dnsimple.contact.Contact.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-dnsimple.contact.Contact.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-dnsimple.contact.Contact.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-dnsimple.contact.Contact.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-dnsimple.contact.Contact.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-dnsimple.contact.Contact.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-dnsimple.contact.Contact.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-dnsimple.contact.Contact.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-dnsimple.contact.Contact.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-dnsimple.contact.Contact.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-dnsimple.contact.Contact.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-dnsimple.contact.Contact.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-dnsimple.contact.Contact.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `import_from` <a name="import_from" id="@cdktf/provider-dnsimple.contact.Contact.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-dnsimple.contact.Contact.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-dnsimple.contact.Contact.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-dnsimple.contact.Contact.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-dnsimple.contact.Contact.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_to` <a name="move_to" id="@cdktf/provider-dnsimple.contact.Contact.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-dnsimple.contact.Contact.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-dnsimple.contact.Contact.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `reset_address2` <a name="reset_address2" id="@cdktf/provider-dnsimple.contact.Contact.resetAddress2"></a>

```python
def reset_address2() -> None
```

##### `reset_fax` <a name="reset_fax" id="@cdktf/provider-dnsimple.contact.Contact.resetFax"></a>

```python
def reset_fax() -> None
```

##### `reset_job_title` <a name="reset_job_title" id="@cdktf/provider-dnsimple.contact.Contact.resetJobTitle"></a>

```python
def reset_job_title() -> None
```

##### `reset_label` <a name="reset_label" id="@cdktf/provider-dnsimple.contact.Contact.resetLabel"></a>

```python
def reset_label() -> None
```

##### `reset_organization_name` <a name="reset_organization_name" id="@cdktf/provider-dnsimple.contact.Contact.resetOrganizationName"></a>

```python
def reset_organization_name() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-dnsimple.contact.Contact.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-dnsimple.contact.Contact.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.contact.Contact.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.contact.Contact.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a Contact resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-dnsimple.contact.Contact.isConstruct"></a>

```python
from cdktf_cdktf_provider_dnsimple import contact

contact.Contact.is_construct(
  x: typing.Any
)
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

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-dnsimple.contact.Contact.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_dnsimple import contact

contact.Contact.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-dnsimple.contact.Contact.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-dnsimple.contact.Contact.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_dnsimple import contact

contact.Contact.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-dnsimple.contact.Contact.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-dnsimple.contact.Contact.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_dnsimple import contact

contact.Contact.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a Contact resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-dnsimple.contact.Contact.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-dnsimple.contact.Contact.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the Contact to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-dnsimple.contact.Contact.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing Contact that should be imported.

Refer to the {@link https://registry.terraform.io/providers/dnsimple/dnsimple/1.3.1/docs/resources/contact#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-dnsimple.contact.Contact.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the Contact to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-dnsimple.contact.Contact.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-dnsimple.contact.Contact.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.contact.Contact.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.contact.Contact.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.contact.Contact.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.contact.Contact.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.contact.Contact.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.contact.Contact.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.contact.Contact.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.contact.Contact.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.contact.Contact.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.contact.Contact.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.contact.Contact.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.contact.Contact.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.contact.Contact.property.accountId">account_id</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.contact.Contact.property.createdAt">created_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.contact.Contact.property.faxNormalized">fax_normalized</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.contact.Contact.property.id">id</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.contact.Contact.property.phoneNormalized">phone_normalized</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.contact.Contact.property.updatedAt">updated_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.contact.Contact.property.address1Input">address1_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.contact.Contact.property.address2Input">address2_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.contact.Contact.property.cityInput">city_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.contact.Contact.property.countryInput">country_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.contact.Contact.property.emailInput">email_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.contact.Contact.property.faxInput">fax_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.contact.Contact.property.firstNameInput">first_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.contact.Contact.property.jobTitleInput">job_title_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.contact.Contact.property.labelInput">label_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.contact.Contact.property.lastNameInput">last_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.contact.Contact.property.organizationNameInput">organization_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.contact.Contact.property.phoneInput">phone_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.contact.Contact.property.postalCodeInput">postal_code_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.contact.Contact.property.stateProvinceInput">state_province_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.contact.Contact.property.address1">address1</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.contact.Contact.property.address2">address2</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.contact.Contact.property.city">city</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.contact.Contact.property.country">country</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.contact.Contact.property.email">email</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.contact.Contact.property.fax">fax</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.contact.Contact.property.firstName">first_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.contact.Contact.property.jobTitle">job_title</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.contact.Contact.property.label">label</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.contact.Contact.property.lastName">last_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.contact.Contact.property.organizationName">organization_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.contact.Contact.property.phone">phone</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.contact.Contact.property.postalCode">postal_code</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.contact.Contact.property.stateProvince">state_province</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-dnsimple.contact.Contact.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-dnsimple.contact.Contact.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-dnsimple.contact.Contact.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-dnsimple.contact.Contact.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-dnsimple.contact.Contact.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-dnsimple.contact.Contact.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-dnsimple.contact.Contact.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-dnsimple.contact.Contact.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-dnsimple.contact.Contact.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-dnsimple.contact.Contact.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-dnsimple.contact.Contact.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-dnsimple.contact.Contact.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-dnsimple.contact.Contact.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-dnsimple.contact.Contact.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktf/provider-dnsimple.contact.Contact.property.accountId"></a>

```python
account_id: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `created_at`<sup>Required</sup> <a name="created_at" id="@cdktf/provider-dnsimple.contact.Contact.property.createdAt"></a>

```python
created_at: str
```

- *Type:* str

---

##### `fax_normalized`<sup>Required</sup> <a name="fax_normalized" id="@cdktf/provider-dnsimple.contact.Contact.property.faxNormalized"></a>

```python
fax_normalized: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-dnsimple.contact.Contact.property.id"></a>

```python
id: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `phone_normalized`<sup>Required</sup> <a name="phone_normalized" id="@cdktf/provider-dnsimple.contact.Contact.property.phoneNormalized"></a>

```python
phone_normalized: str
```

- *Type:* str

---

##### `updated_at`<sup>Required</sup> <a name="updated_at" id="@cdktf/provider-dnsimple.contact.Contact.property.updatedAt"></a>

```python
updated_at: str
```

- *Type:* str

---

##### `address1_input`<sup>Optional</sup> <a name="address1_input" id="@cdktf/provider-dnsimple.contact.Contact.property.address1Input"></a>

```python
address1_input: str
```

- *Type:* str

---

##### `address2_input`<sup>Optional</sup> <a name="address2_input" id="@cdktf/provider-dnsimple.contact.Contact.property.address2Input"></a>

```python
address2_input: str
```

- *Type:* str

---

##### `city_input`<sup>Optional</sup> <a name="city_input" id="@cdktf/provider-dnsimple.contact.Contact.property.cityInput"></a>

```python
city_input: str
```

- *Type:* str

---

##### `country_input`<sup>Optional</sup> <a name="country_input" id="@cdktf/provider-dnsimple.contact.Contact.property.countryInput"></a>

```python
country_input: str
```

- *Type:* str

---

##### `email_input`<sup>Optional</sup> <a name="email_input" id="@cdktf/provider-dnsimple.contact.Contact.property.emailInput"></a>

```python
email_input: str
```

- *Type:* str

---

##### `fax_input`<sup>Optional</sup> <a name="fax_input" id="@cdktf/provider-dnsimple.contact.Contact.property.faxInput"></a>

```python
fax_input: str
```

- *Type:* str

---

##### `first_name_input`<sup>Optional</sup> <a name="first_name_input" id="@cdktf/provider-dnsimple.contact.Contact.property.firstNameInput"></a>

```python
first_name_input: str
```

- *Type:* str

---

##### `job_title_input`<sup>Optional</sup> <a name="job_title_input" id="@cdktf/provider-dnsimple.contact.Contact.property.jobTitleInput"></a>

```python
job_title_input: str
```

- *Type:* str

---

##### `label_input`<sup>Optional</sup> <a name="label_input" id="@cdktf/provider-dnsimple.contact.Contact.property.labelInput"></a>

```python
label_input: str
```

- *Type:* str

---

##### `last_name_input`<sup>Optional</sup> <a name="last_name_input" id="@cdktf/provider-dnsimple.contact.Contact.property.lastNameInput"></a>

```python
last_name_input: str
```

- *Type:* str

---

##### `organization_name_input`<sup>Optional</sup> <a name="organization_name_input" id="@cdktf/provider-dnsimple.contact.Contact.property.organizationNameInput"></a>

```python
organization_name_input: str
```

- *Type:* str

---

##### `phone_input`<sup>Optional</sup> <a name="phone_input" id="@cdktf/provider-dnsimple.contact.Contact.property.phoneInput"></a>

```python
phone_input: str
```

- *Type:* str

---

##### `postal_code_input`<sup>Optional</sup> <a name="postal_code_input" id="@cdktf/provider-dnsimple.contact.Contact.property.postalCodeInput"></a>

```python
postal_code_input: str
```

- *Type:* str

---

##### `state_province_input`<sup>Optional</sup> <a name="state_province_input" id="@cdktf/provider-dnsimple.contact.Contact.property.stateProvinceInput"></a>

```python
state_province_input: str
```

- *Type:* str

---

##### `address1`<sup>Required</sup> <a name="address1" id="@cdktf/provider-dnsimple.contact.Contact.property.address1"></a>

```python
address1: str
```

- *Type:* str

---

##### `address2`<sup>Required</sup> <a name="address2" id="@cdktf/provider-dnsimple.contact.Contact.property.address2"></a>

```python
address2: str
```

- *Type:* str

---

##### `city`<sup>Required</sup> <a name="city" id="@cdktf/provider-dnsimple.contact.Contact.property.city"></a>

```python
city: str
```

- *Type:* str

---

##### `country`<sup>Required</sup> <a name="country" id="@cdktf/provider-dnsimple.contact.Contact.property.country"></a>

```python
country: str
```

- *Type:* str

---

##### `email`<sup>Required</sup> <a name="email" id="@cdktf/provider-dnsimple.contact.Contact.property.email"></a>

```python
email: str
```

- *Type:* str

---

##### `fax`<sup>Required</sup> <a name="fax" id="@cdktf/provider-dnsimple.contact.Contact.property.fax"></a>

```python
fax: str
```

- *Type:* str

---

##### `first_name`<sup>Required</sup> <a name="first_name" id="@cdktf/provider-dnsimple.contact.Contact.property.firstName"></a>

```python
first_name: str
```

- *Type:* str

---

##### `job_title`<sup>Required</sup> <a name="job_title" id="@cdktf/provider-dnsimple.contact.Contact.property.jobTitle"></a>

```python
job_title: str
```

- *Type:* str

---

##### `label`<sup>Required</sup> <a name="label" id="@cdktf/provider-dnsimple.contact.Contact.property.label"></a>

```python
label: str
```

- *Type:* str

---

##### `last_name`<sup>Required</sup> <a name="last_name" id="@cdktf/provider-dnsimple.contact.Contact.property.lastName"></a>

```python
last_name: str
```

- *Type:* str

---

##### `organization_name`<sup>Required</sup> <a name="organization_name" id="@cdktf/provider-dnsimple.contact.Contact.property.organizationName"></a>

```python
organization_name: str
```

- *Type:* str

---

##### `phone`<sup>Required</sup> <a name="phone" id="@cdktf/provider-dnsimple.contact.Contact.property.phone"></a>

```python
phone: str
```

- *Type:* str

---

##### `postal_code`<sup>Required</sup> <a name="postal_code" id="@cdktf/provider-dnsimple.contact.Contact.property.postalCode"></a>

```python
postal_code: str
```

- *Type:* str

---

##### `state_province`<sup>Required</sup> <a name="state_province" id="@cdktf/provider-dnsimple.contact.Contact.property.stateProvince"></a>

```python
state_province: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-dnsimple.contact.Contact.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-dnsimple.contact.Contact.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### ContactConfig <a name="ContactConfig" id="@cdktf/provider-dnsimple.contact.ContactConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-dnsimple.contact.ContactConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_dnsimple import contact

contact.ContactConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  address1: str,
  city: str,
  country: str,
  email: str,
  first_name: str,
  last_name: str,
  phone: str,
  postal_code: str,
  state_province: str,
  address2: str = None,
  fax: str = None,
  job_title: str = None,
  label: str = None,
  organization_name: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-dnsimple.contact.ContactConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.contact.ContactConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.contact.ContactConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.contact.ContactConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.contact.ContactConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.contact.ContactConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.contact.ContactConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.contact.ContactConfig.property.address1">address1</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dnsimple/dnsimple/1.3.1/docs/resources/contact#address1 Contact#address1}. |
| <code><a href="#@cdktf/provider-dnsimple.contact.ContactConfig.property.city">city</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dnsimple/dnsimple/1.3.1/docs/resources/contact#city Contact#city}. |
| <code><a href="#@cdktf/provider-dnsimple.contact.ContactConfig.property.country">country</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dnsimple/dnsimple/1.3.1/docs/resources/contact#country Contact#country}. |
| <code><a href="#@cdktf/provider-dnsimple.contact.ContactConfig.property.email">email</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dnsimple/dnsimple/1.3.1/docs/resources/contact#email Contact#email}. |
| <code><a href="#@cdktf/provider-dnsimple.contact.ContactConfig.property.firstName">first_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dnsimple/dnsimple/1.3.1/docs/resources/contact#first_name Contact#first_name}. |
| <code><a href="#@cdktf/provider-dnsimple.contact.ContactConfig.property.lastName">last_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dnsimple/dnsimple/1.3.1/docs/resources/contact#last_name Contact#last_name}. |
| <code><a href="#@cdktf/provider-dnsimple.contact.ContactConfig.property.phone">phone</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dnsimple/dnsimple/1.3.1/docs/resources/contact#phone Contact#phone}. |
| <code><a href="#@cdktf/provider-dnsimple.contact.ContactConfig.property.postalCode">postal_code</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dnsimple/dnsimple/1.3.1/docs/resources/contact#postal_code Contact#postal_code}. |
| <code><a href="#@cdktf/provider-dnsimple.contact.ContactConfig.property.stateProvince">state_province</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dnsimple/dnsimple/1.3.1/docs/resources/contact#state_province Contact#state_province}. |
| <code><a href="#@cdktf/provider-dnsimple.contact.ContactConfig.property.address2">address2</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dnsimple/dnsimple/1.3.1/docs/resources/contact#address2 Contact#address2}. |
| <code><a href="#@cdktf/provider-dnsimple.contact.ContactConfig.property.fax">fax</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dnsimple/dnsimple/1.3.1/docs/resources/contact#fax Contact#fax}. |
| <code><a href="#@cdktf/provider-dnsimple.contact.ContactConfig.property.jobTitle">job_title</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dnsimple/dnsimple/1.3.1/docs/resources/contact#job_title Contact#job_title}. |
| <code><a href="#@cdktf/provider-dnsimple.contact.ContactConfig.property.label">label</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dnsimple/dnsimple/1.3.1/docs/resources/contact#label Contact#label}. |
| <code><a href="#@cdktf/provider-dnsimple.contact.ContactConfig.property.organizationName">organization_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dnsimple/dnsimple/1.3.1/docs/resources/contact#organization_name Contact#organization_name}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-dnsimple.contact.ContactConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-dnsimple.contact.ContactConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-dnsimple.contact.ContactConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-dnsimple.contact.ContactConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-dnsimple.contact.ContactConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-dnsimple.contact.ContactConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-dnsimple.contact.ContactConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `address1`<sup>Required</sup> <a name="address1" id="@cdktf/provider-dnsimple.contact.ContactConfig.property.address1"></a>

```python
address1: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dnsimple/dnsimple/1.3.1/docs/resources/contact#address1 Contact#address1}.

---

##### `city`<sup>Required</sup> <a name="city" id="@cdktf/provider-dnsimple.contact.ContactConfig.property.city"></a>

```python
city: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dnsimple/dnsimple/1.3.1/docs/resources/contact#city Contact#city}.

---

##### `country`<sup>Required</sup> <a name="country" id="@cdktf/provider-dnsimple.contact.ContactConfig.property.country"></a>

```python
country: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dnsimple/dnsimple/1.3.1/docs/resources/contact#country Contact#country}.

---

##### `email`<sup>Required</sup> <a name="email" id="@cdktf/provider-dnsimple.contact.ContactConfig.property.email"></a>

```python
email: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dnsimple/dnsimple/1.3.1/docs/resources/contact#email Contact#email}.

---

##### `first_name`<sup>Required</sup> <a name="first_name" id="@cdktf/provider-dnsimple.contact.ContactConfig.property.firstName"></a>

```python
first_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dnsimple/dnsimple/1.3.1/docs/resources/contact#first_name Contact#first_name}.

---

##### `last_name`<sup>Required</sup> <a name="last_name" id="@cdktf/provider-dnsimple.contact.ContactConfig.property.lastName"></a>

```python
last_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dnsimple/dnsimple/1.3.1/docs/resources/contact#last_name Contact#last_name}.

---

##### `phone`<sup>Required</sup> <a name="phone" id="@cdktf/provider-dnsimple.contact.ContactConfig.property.phone"></a>

```python
phone: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dnsimple/dnsimple/1.3.1/docs/resources/contact#phone Contact#phone}.

---

##### `postal_code`<sup>Required</sup> <a name="postal_code" id="@cdktf/provider-dnsimple.contact.ContactConfig.property.postalCode"></a>

```python
postal_code: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dnsimple/dnsimple/1.3.1/docs/resources/contact#postal_code Contact#postal_code}.

---

##### `state_province`<sup>Required</sup> <a name="state_province" id="@cdktf/provider-dnsimple.contact.ContactConfig.property.stateProvince"></a>

```python
state_province: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dnsimple/dnsimple/1.3.1/docs/resources/contact#state_province Contact#state_province}.

---

##### `address2`<sup>Optional</sup> <a name="address2" id="@cdktf/provider-dnsimple.contact.ContactConfig.property.address2"></a>

```python
address2: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dnsimple/dnsimple/1.3.1/docs/resources/contact#address2 Contact#address2}.

---

##### `fax`<sup>Optional</sup> <a name="fax" id="@cdktf/provider-dnsimple.contact.ContactConfig.property.fax"></a>

```python
fax: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dnsimple/dnsimple/1.3.1/docs/resources/contact#fax Contact#fax}.

---

##### `job_title`<sup>Optional</sup> <a name="job_title" id="@cdktf/provider-dnsimple.contact.ContactConfig.property.jobTitle"></a>

```python
job_title: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dnsimple/dnsimple/1.3.1/docs/resources/contact#job_title Contact#job_title}.

---

##### `label`<sup>Optional</sup> <a name="label" id="@cdktf/provider-dnsimple.contact.ContactConfig.property.label"></a>

```python
label: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dnsimple/dnsimple/1.3.1/docs/resources/contact#label Contact#label}.

---

##### `organization_name`<sup>Optional</sup> <a name="organization_name" id="@cdktf/provider-dnsimple.contact.ContactConfig.property.organizationName"></a>

```python
organization_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dnsimple/dnsimple/1.3.1/docs/resources/contact#organization_name Contact#organization_name}.

---



