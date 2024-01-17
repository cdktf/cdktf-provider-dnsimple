# `registeredDomain` Submodule <a name="`registeredDomain` Submodule" id="@cdktf/provider-dnsimple.registeredDomain"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### RegisteredDomain <a name="RegisteredDomain" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain"></a>

Represents a {@link https://registry.terraform.io/providers/dnsimple/dnsimple/1.4.0/docs/resources/registered_domain dnsimple_registered_domain}.

#### Initializers <a name="Initializers" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.Initializer"></a>

```python
from cdktf_cdktf_provider_dnsimple import registered_domain

registeredDomain.RegisteredDomain(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  contact_id: typing.Union[int, float],
  name: str,
  auto_renew_enabled: typing.Union[bool, IResolvable] = None,
  dnssec_enabled: typing.Union[bool, IResolvable] = None,
  extended_attributes: typing.Mapping[str] = None,
  premium_price: str = None,
  timeouts: RegisteredDomainTimeouts = None,
  transfer_lock_enabled: typing.Union[bool, IResolvable] = None,
  whois_privacy_enabled: typing.Union[bool, IResolvable] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.Initializer.parameter.contactId">contact_id</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dnsimple/dnsimple/1.4.0/docs/resources/registered_domain#contact_id RegisteredDomain#contact_id}. |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dnsimple/dnsimple/1.4.0/docs/resources/registered_domain#name RegisteredDomain#name}. |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.Initializer.parameter.autoRenewEnabled">auto_renew_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dnsimple/dnsimple/1.4.0/docs/resources/registered_domain#auto_renew_enabled RegisteredDomain#auto_renew_enabled}. |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.Initializer.parameter.dnssecEnabled">dnssec_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dnsimple/dnsimple/1.4.0/docs/resources/registered_domain#dnssec_enabled RegisteredDomain#dnssec_enabled}. |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.Initializer.parameter.extendedAttributes">extended_attributes</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dnsimple/dnsimple/1.4.0/docs/resources/registered_domain#extended_attributes RegisteredDomain#extended_attributes}. |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.Initializer.parameter.premiumPrice">premium_price</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dnsimple/dnsimple/1.4.0/docs/resources/registered_domain#premium_price RegisteredDomain#premium_price}. |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainTimeouts">RegisteredDomainTimeouts</a></code> | Timeouts for operations, given as a parsable string as in `10m` or `30s`. |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.Initializer.parameter.transferLockEnabled">transfer_lock_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dnsimple/dnsimple/1.4.0/docs/resources/registered_domain#transfer_lock_enabled RegisteredDomain#transfer_lock_enabled}. |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.Initializer.parameter.whoisPrivacyEnabled">whois_privacy_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dnsimple/dnsimple/1.4.0/docs/resources/registered_domain#whois_privacy_enabled RegisteredDomain#whois_privacy_enabled}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `contact_id`<sup>Required</sup> <a name="contact_id" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.Initializer.parameter.contactId"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dnsimple/dnsimple/1.4.0/docs/resources/registered_domain#contact_id RegisteredDomain#contact_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dnsimple/dnsimple/1.4.0/docs/resources/registered_domain#name RegisteredDomain#name}.

---

##### `auto_renew_enabled`<sup>Optional</sup> <a name="auto_renew_enabled" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.Initializer.parameter.autoRenewEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dnsimple/dnsimple/1.4.0/docs/resources/registered_domain#auto_renew_enabled RegisteredDomain#auto_renew_enabled}.

---

##### `dnssec_enabled`<sup>Optional</sup> <a name="dnssec_enabled" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.Initializer.parameter.dnssecEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dnsimple/dnsimple/1.4.0/docs/resources/registered_domain#dnssec_enabled RegisteredDomain#dnssec_enabled}.

---

##### `extended_attributes`<sup>Optional</sup> <a name="extended_attributes" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.Initializer.parameter.extendedAttributes"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dnsimple/dnsimple/1.4.0/docs/resources/registered_domain#extended_attributes RegisteredDomain#extended_attributes}.

---

##### `premium_price`<sup>Optional</sup> <a name="premium_price" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.Initializer.parameter.premiumPrice"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dnsimple/dnsimple/1.4.0/docs/resources/registered_domain#premium_price RegisteredDomain#premium_price}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainTimeouts">RegisteredDomainTimeouts</a>

Timeouts for operations, given as a parsable string as in `10m` or `30s`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dnsimple/dnsimple/1.4.0/docs/resources/registered_domain#timeouts RegisteredDomain#timeouts}

---

##### `transfer_lock_enabled`<sup>Optional</sup> <a name="transfer_lock_enabled" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.Initializer.parameter.transferLockEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dnsimple/dnsimple/1.4.0/docs/resources/registered_domain#transfer_lock_enabled RegisteredDomain#transfer_lock_enabled}.

---

##### `whois_privacy_enabled`<sup>Optional</sup> <a name="whois_privacy_enabled" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.Initializer.parameter.whoisPrivacyEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dnsimple/dnsimple/1.4.0/docs/resources/registered_domain#whois_privacy_enabled RegisteredDomain#whois_privacy_enabled}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.resetAutoRenewEnabled">reset_auto_renew_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.resetDnssecEnabled">reset_dnssec_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.resetExtendedAttributes">reset_extended_attributes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.resetPremiumPrice">reset_premium_price</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.resetTimeouts">reset_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.resetTransferLockEnabled">reset_transfer_lock_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.resetWhoisPrivacyEnabled">reset_whois_privacy_enabled</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.putTimeouts.parameter.create"></a>

- *Type:* str

Create timeout.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dnsimple/dnsimple/1.4.0/docs/resources/registered_domain#create RegisteredDomain#create}

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.putTimeouts.parameter.delete"></a>

- *Type:* str

Delete timeout (currently unused).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dnsimple/dnsimple/1.4.0/docs/resources/registered_domain#delete RegisteredDomain#delete}

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.putTimeouts.parameter.update"></a>

- *Type:* str

Update timeout.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dnsimple/dnsimple/1.4.0/docs/resources/registered_domain#update RegisteredDomain#update}

---

##### `reset_auto_renew_enabled` <a name="reset_auto_renew_enabled" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.resetAutoRenewEnabled"></a>

```python
def reset_auto_renew_enabled() -> None
```

##### `reset_dnssec_enabled` <a name="reset_dnssec_enabled" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.resetDnssecEnabled"></a>

```python
def reset_dnssec_enabled() -> None
```

##### `reset_extended_attributes` <a name="reset_extended_attributes" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.resetExtendedAttributes"></a>

```python
def reset_extended_attributes() -> None
```

##### `reset_premium_price` <a name="reset_premium_price" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.resetPremiumPrice"></a>

```python
def reset_premium_price() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

##### `reset_transfer_lock_enabled` <a name="reset_transfer_lock_enabled" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.resetTransferLockEnabled"></a>

```python
def reset_transfer_lock_enabled() -> None
```

##### `reset_whois_privacy_enabled` <a name="reset_whois_privacy_enabled" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.resetWhoisPrivacyEnabled"></a>

```python
def reset_whois_privacy_enabled() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a RegisteredDomain resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.isConstruct"></a>

```python
from cdktf_cdktf_provider_dnsimple import registered_domain

registeredDomain.RegisteredDomain.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_dnsimple import registered_domain

registeredDomain.RegisteredDomain.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_dnsimple import registered_domain

registeredDomain.RegisteredDomain.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_dnsimple import registered_domain

registeredDomain.RegisteredDomain.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a RegisteredDomain resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the RegisteredDomain to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing RegisteredDomain that should be imported.

Refer to the {@link https://registry.terraform.io/providers/dnsimple/dnsimple/1.4.0/docs/resources/registered_domain#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the RegisteredDomain to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.property.accountId">account_id</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.property.domainRegistration">domain_registration</a></code> | <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainDomainRegistrationOutputReference">RegisteredDomainDomainRegistrationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.property.expiresAt">expires_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.property.id">id</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.property.registrantChange">registrant_change</a></code> | <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainRegistrantChangeOutputReference">RegisteredDomainRegistrantChangeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainTimeoutsOutputReference">RegisteredDomainTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.property.unicodeName">unicode_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.property.autoRenewEnabledInput">auto_renew_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.property.contactIdInput">contact_id_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.property.dnssecEnabledInput">dnssec_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.property.extendedAttributesInput">extended_attributes_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.property.premiumPriceInput">premium_price_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainTimeouts">RegisteredDomainTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.property.transferLockEnabledInput">transfer_lock_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.property.whoisPrivacyEnabledInput">whois_privacy_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.property.autoRenewEnabled">auto_renew_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.property.contactId">contact_id</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.property.dnssecEnabled">dnssec_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.property.extendedAttributes">extended_attributes</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.property.premiumPrice">premium_price</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.property.transferLockEnabled">transfer_lock_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.property.whoisPrivacyEnabled">whois_privacy_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.property.accountId"></a>

```python
account_id: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `domain_registration`<sup>Required</sup> <a name="domain_registration" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.property.domainRegistration"></a>

```python
domain_registration: RegisteredDomainDomainRegistrationOutputReference
```

- *Type:* <a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainDomainRegistrationOutputReference">RegisteredDomainDomainRegistrationOutputReference</a>

---

##### `expires_at`<sup>Required</sup> <a name="expires_at" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.property.expiresAt"></a>

```python
expires_at: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.property.id"></a>

```python
id: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `registrant_change`<sup>Required</sup> <a name="registrant_change" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.property.registrantChange"></a>

```python
registrant_change: RegisteredDomainRegistrantChangeOutputReference
```

- *Type:* <a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainRegistrantChangeOutputReference">RegisteredDomainRegistrantChangeOutputReference</a>

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.property.timeouts"></a>

```python
timeouts: RegisteredDomainTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainTimeoutsOutputReference">RegisteredDomainTimeoutsOutputReference</a>

---

##### `unicode_name`<sup>Required</sup> <a name="unicode_name" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.property.unicodeName"></a>

```python
unicode_name: str
```

- *Type:* str

---

##### `auto_renew_enabled_input`<sup>Optional</sup> <a name="auto_renew_enabled_input" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.property.autoRenewEnabledInput"></a>

```python
auto_renew_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `contact_id_input`<sup>Optional</sup> <a name="contact_id_input" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.property.contactIdInput"></a>

```python
contact_id_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `dnssec_enabled_input`<sup>Optional</sup> <a name="dnssec_enabled_input" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.property.dnssecEnabledInput"></a>

```python
dnssec_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `extended_attributes_input`<sup>Optional</sup> <a name="extended_attributes_input" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.property.extendedAttributesInput"></a>

```python
extended_attributes_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `premium_price_input`<sup>Optional</sup> <a name="premium_price_input" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.property.premiumPriceInput"></a>

```python
premium_price_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, RegisteredDomainTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainTimeouts">RegisteredDomainTimeouts</a>]

---

##### `transfer_lock_enabled_input`<sup>Optional</sup> <a name="transfer_lock_enabled_input" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.property.transferLockEnabledInput"></a>

```python
transfer_lock_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `whois_privacy_enabled_input`<sup>Optional</sup> <a name="whois_privacy_enabled_input" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.property.whoisPrivacyEnabledInput"></a>

```python
whois_privacy_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `auto_renew_enabled`<sup>Required</sup> <a name="auto_renew_enabled" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.property.autoRenewEnabled"></a>

```python
auto_renew_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `contact_id`<sup>Required</sup> <a name="contact_id" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.property.contactId"></a>

```python
contact_id: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `dnssec_enabled`<sup>Required</sup> <a name="dnssec_enabled" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.property.dnssecEnabled"></a>

```python
dnssec_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `extended_attributes`<sup>Required</sup> <a name="extended_attributes" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.property.extendedAttributes"></a>

```python
extended_attributes: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `premium_price`<sup>Required</sup> <a name="premium_price" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.property.premiumPrice"></a>

```python
premium_price: str
```

- *Type:* str

---

##### `transfer_lock_enabled`<sup>Required</sup> <a name="transfer_lock_enabled" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.property.transferLockEnabled"></a>

```python
transfer_lock_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `whois_privacy_enabled`<sup>Required</sup> <a name="whois_privacy_enabled" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.property.whoisPrivacyEnabled"></a>

```python
whois_privacy_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### RegisteredDomainConfig <a name="RegisteredDomainConfig" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_dnsimple import registered_domain

registeredDomain.RegisteredDomainConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  contact_id: typing.Union[int, float],
  name: str,
  auto_renew_enabled: typing.Union[bool, IResolvable] = None,
  dnssec_enabled: typing.Union[bool, IResolvable] = None,
  extended_attributes: typing.Mapping[str] = None,
  premium_price: str = None,
  timeouts: RegisteredDomainTimeouts = None,
  transfer_lock_enabled: typing.Union[bool, IResolvable] = None,
  whois_privacy_enabled: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainConfig.property.contactId">contact_id</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dnsimple/dnsimple/1.4.0/docs/resources/registered_domain#contact_id RegisteredDomain#contact_id}. |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dnsimple/dnsimple/1.4.0/docs/resources/registered_domain#name RegisteredDomain#name}. |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainConfig.property.autoRenewEnabled">auto_renew_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dnsimple/dnsimple/1.4.0/docs/resources/registered_domain#auto_renew_enabled RegisteredDomain#auto_renew_enabled}. |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainConfig.property.dnssecEnabled">dnssec_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dnsimple/dnsimple/1.4.0/docs/resources/registered_domain#dnssec_enabled RegisteredDomain#dnssec_enabled}. |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainConfig.property.extendedAttributes">extended_attributes</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dnsimple/dnsimple/1.4.0/docs/resources/registered_domain#extended_attributes RegisteredDomain#extended_attributes}. |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainConfig.property.premiumPrice">premium_price</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dnsimple/dnsimple/1.4.0/docs/resources/registered_domain#premium_price RegisteredDomain#premium_price}. |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainTimeouts">RegisteredDomainTimeouts</a></code> | Timeouts for operations, given as a parsable string as in `10m` or `30s`. |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainConfig.property.transferLockEnabled">transfer_lock_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dnsimple/dnsimple/1.4.0/docs/resources/registered_domain#transfer_lock_enabled RegisteredDomain#transfer_lock_enabled}. |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainConfig.property.whoisPrivacyEnabled">whois_privacy_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dnsimple/dnsimple/1.4.0/docs/resources/registered_domain#whois_privacy_enabled RegisteredDomain#whois_privacy_enabled}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `contact_id`<sup>Required</sup> <a name="contact_id" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainConfig.property.contactId"></a>

```python
contact_id: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dnsimple/dnsimple/1.4.0/docs/resources/registered_domain#contact_id RegisteredDomain#contact_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dnsimple/dnsimple/1.4.0/docs/resources/registered_domain#name RegisteredDomain#name}.

---

##### `auto_renew_enabled`<sup>Optional</sup> <a name="auto_renew_enabled" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainConfig.property.autoRenewEnabled"></a>

```python
auto_renew_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dnsimple/dnsimple/1.4.0/docs/resources/registered_domain#auto_renew_enabled RegisteredDomain#auto_renew_enabled}.

---

##### `dnssec_enabled`<sup>Optional</sup> <a name="dnssec_enabled" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainConfig.property.dnssecEnabled"></a>

```python
dnssec_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dnsimple/dnsimple/1.4.0/docs/resources/registered_domain#dnssec_enabled RegisteredDomain#dnssec_enabled}.

---

##### `extended_attributes`<sup>Optional</sup> <a name="extended_attributes" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainConfig.property.extendedAttributes"></a>

```python
extended_attributes: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dnsimple/dnsimple/1.4.0/docs/resources/registered_domain#extended_attributes RegisteredDomain#extended_attributes}.

---

##### `premium_price`<sup>Optional</sup> <a name="premium_price" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainConfig.property.premiumPrice"></a>

```python
premium_price: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dnsimple/dnsimple/1.4.0/docs/resources/registered_domain#premium_price RegisteredDomain#premium_price}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainConfig.property.timeouts"></a>

```python
timeouts: RegisteredDomainTimeouts
```

- *Type:* <a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainTimeouts">RegisteredDomainTimeouts</a>

Timeouts for operations, given as a parsable string as in `10m` or `30s`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dnsimple/dnsimple/1.4.0/docs/resources/registered_domain#timeouts RegisteredDomain#timeouts}

---

##### `transfer_lock_enabled`<sup>Optional</sup> <a name="transfer_lock_enabled" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainConfig.property.transferLockEnabled"></a>

```python
transfer_lock_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dnsimple/dnsimple/1.4.0/docs/resources/registered_domain#transfer_lock_enabled RegisteredDomain#transfer_lock_enabled}.

---

##### `whois_privacy_enabled`<sup>Optional</sup> <a name="whois_privacy_enabled" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainConfig.property.whoisPrivacyEnabled"></a>

```python
whois_privacy_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dnsimple/dnsimple/1.4.0/docs/resources/registered_domain#whois_privacy_enabled RegisteredDomain#whois_privacy_enabled}.

---

### RegisteredDomainDomainRegistration <a name="RegisteredDomainDomainRegistration" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainDomainRegistration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainDomainRegistration.Initializer"></a>

```python
from cdktf_cdktf_provider_dnsimple import registered_domain

registeredDomain.RegisteredDomainDomainRegistration(
  state: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainDomainRegistration.property.state">state</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dnsimple/dnsimple/1.4.0/docs/resources/registered_domain#state RegisteredDomain#state}. |

---

##### `state`<sup>Optional</sup> <a name="state" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainDomainRegistration.property.state"></a>

```python
state: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dnsimple/dnsimple/1.4.0/docs/resources/registered_domain#state RegisteredDomain#state}.

---

### RegisteredDomainRegistrantChange <a name="RegisteredDomainRegistrantChange" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainRegistrantChange"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainRegistrantChange.Initializer"></a>

```python
from cdktf_cdktf_provider_dnsimple import registered_domain

registeredDomain.RegisteredDomainRegistrantChange(
  state: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainRegistrantChange.property.state">state</a></code> | <code>str</code> | State of the registrant change. |

---

##### `state`<sup>Optional</sup> <a name="state" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainRegistrantChange.property.state"></a>

```python
state: str
```

- *Type:* str

State of the registrant change.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dnsimple/dnsimple/1.4.0/docs/resources/registered_domain#state RegisteredDomain#state}

---

### RegisteredDomainTimeouts <a name="RegisteredDomainTimeouts" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_dnsimple import registered_domain

registeredDomain.RegisteredDomainTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainTimeouts.property.create">create</a></code> | <code>str</code> | Create timeout. |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainTimeouts.property.delete">delete</a></code> | <code>str</code> | Delete timeout (currently unused). |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainTimeouts.property.update">update</a></code> | <code>str</code> | Update timeout. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Create timeout.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dnsimple/dnsimple/1.4.0/docs/resources/registered_domain#create RegisteredDomain#create}

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Delete timeout (currently unused).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dnsimple/dnsimple/1.4.0/docs/resources/registered_domain#delete RegisteredDomain#delete}

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Update timeout.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dnsimple/dnsimple/1.4.0/docs/resources/registered_domain#update RegisteredDomain#update}

---

## Classes <a name="Classes" id="Classes"></a>

### RegisteredDomainDomainRegistrationOutputReference <a name="RegisteredDomainDomainRegistrationOutputReference" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainDomainRegistrationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainDomainRegistrationOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_dnsimple import registered_domain

registeredDomain.RegisteredDomainDomainRegistrationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainDomainRegistrationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainDomainRegistrationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainDomainRegistrationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainDomainRegistrationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainDomainRegistrationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainDomainRegistrationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainDomainRegistrationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainDomainRegistrationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainDomainRegistrationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainDomainRegistrationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainDomainRegistrationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainDomainRegistrationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainDomainRegistrationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainDomainRegistrationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainDomainRegistrationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainDomainRegistrationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainDomainRegistrationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainDomainRegistrationOutputReference.resetState">reset_state</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainDomainRegistrationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainDomainRegistrationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainDomainRegistrationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainDomainRegistrationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainDomainRegistrationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainDomainRegistrationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainDomainRegistrationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainDomainRegistrationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainDomainRegistrationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainDomainRegistrationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainDomainRegistrationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainDomainRegistrationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainDomainRegistrationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainDomainRegistrationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainDomainRegistrationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainDomainRegistrationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainDomainRegistrationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainDomainRegistrationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainDomainRegistrationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainDomainRegistrationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainDomainRegistrationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainDomainRegistrationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainDomainRegistrationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainDomainRegistrationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_state` <a name="reset_state" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainDomainRegistrationOutputReference.resetState"></a>

```python
def reset_state() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainDomainRegistrationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainDomainRegistrationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainDomainRegistrationOutputReference.property.id">id</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainDomainRegistrationOutputReference.property.period">period</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainDomainRegistrationOutputReference.property.stateInput">state_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainDomainRegistrationOutputReference.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainDomainRegistrationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainDomainRegistration">RegisteredDomainDomainRegistration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainDomainRegistrationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainDomainRegistrationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainDomainRegistrationOutputReference.property.id"></a>

```python
id: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `period`<sup>Required</sup> <a name="period" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainDomainRegistrationOutputReference.property.period"></a>

```python
period: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `state_input`<sup>Optional</sup> <a name="state_input" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainDomainRegistrationOutputReference.property.stateInput"></a>

```python
state_input: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainDomainRegistrationOutputReference.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainDomainRegistrationOutputReference.property.internalValue"></a>

```python
internal_value: RegisteredDomainDomainRegistration
```

- *Type:* <a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainDomainRegistration">RegisteredDomainDomainRegistration</a>

---


### RegisteredDomainRegistrantChangeOutputReference <a name="RegisteredDomainRegistrantChangeOutputReference" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainRegistrantChangeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainRegistrantChangeOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_dnsimple import registered_domain

registeredDomain.RegisteredDomainRegistrantChangeOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainRegistrantChangeOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainRegistrantChangeOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainRegistrantChangeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainRegistrantChangeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainRegistrantChangeOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainRegistrantChangeOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainRegistrantChangeOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainRegistrantChangeOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainRegistrantChangeOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainRegistrantChangeOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainRegistrantChangeOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainRegistrantChangeOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainRegistrantChangeOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainRegistrantChangeOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainRegistrantChangeOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainRegistrantChangeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainRegistrantChangeOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainRegistrantChangeOutputReference.resetState">reset_state</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainRegistrantChangeOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainRegistrantChangeOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainRegistrantChangeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainRegistrantChangeOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainRegistrantChangeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainRegistrantChangeOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainRegistrantChangeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainRegistrantChangeOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainRegistrantChangeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainRegistrantChangeOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainRegistrantChangeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainRegistrantChangeOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainRegistrantChangeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainRegistrantChangeOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainRegistrantChangeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainRegistrantChangeOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainRegistrantChangeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainRegistrantChangeOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainRegistrantChangeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainRegistrantChangeOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainRegistrantChangeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainRegistrantChangeOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainRegistrantChangeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainRegistrantChangeOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_state` <a name="reset_state" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainRegistrantChangeOutputReference.resetState"></a>

```python
def reset_state() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainRegistrantChangeOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainRegistrantChangeOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainRegistrantChangeOutputReference.property.accountId">account_id</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainRegistrantChangeOutputReference.property.contactId">contact_id</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainRegistrantChangeOutputReference.property.domainId">domain_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainRegistrantChangeOutputReference.property.extendedAttributes">extended_attributes</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainRegistrantChangeOutputReference.property.id">id</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainRegistrantChangeOutputReference.property.irtLockLiftedBy">irt_lock_lifted_by</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainRegistrantChangeOutputReference.property.registryOwnerChange">registry_owner_change</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainRegistrantChangeOutputReference.property.stateInput">state_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainRegistrantChangeOutputReference.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainRegistrantChangeOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainRegistrantChange">RegisteredDomainRegistrantChange</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainRegistrantChangeOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainRegistrantChangeOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainRegistrantChangeOutputReference.property.accountId"></a>

```python
account_id: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `contact_id`<sup>Required</sup> <a name="contact_id" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainRegistrantChangeOutputReference.property.contactId"></a>

```python
contact_id: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `domain_id`<sup>Required</sup> <a name="domain_id" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainRegistrantChangeOutputReference.property.domainId"></a>

```python
domain_id: str
```

- *Type:* str

---

##### `extended_attributes`<sup>Required</sup> <a name="extended_attributes" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainRegistrantChangeOutputReference.property.extendedAttributes"></a>

```python
extended_attributes: StringMap
```

- *Type:* cdktf.StringMap

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainRegistrantChangeOutputReference.property.id"></a>

```python
id: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `irt_lock_lifted_by`<sup>Required</sup> <a name="irt_lock_lifted_by" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainRegistrantChangeOutputReference.property.irtLockLiftedBy"></a>

```python
irt_lock_lifted_by: str
```

- *Type:* str

---

##### `registry_owner_change`<sup>Required</sup> <a name="registry_owner_change" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainRegistrantChangeOutputReference.property.registryOwnerChange"></a>

```python
registry_owner_change: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `state_input`<sup>Optional</sup> <a name="state_input" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainRegistrantChangeOutputReference.property.stateInput"></a>

```python
state_input: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainRegistrantChangeOutputReference.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainRegistrantChangeOutputReference.property.internalValue"></a>

```python
internal_value: RegisteredDomainRegistrantChange
```

- *Type:* <a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainRegistrantChange">RegisteredDomainRegistrantChange</a>

---


### RegisteredDomainTimeoutsOutputReference <a name="RegisteredDomainTimeoutsOutputReference" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_dnsimple import registered_domain

registeredDomain.RegisteredDomainTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainTimeouts">RegisteredDomainTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, RegisteredDomainTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainTimeouts">RegisteredDomainTimeouts</a>]

---



