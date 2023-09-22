# `data_dnsimple_certificate`

Refer to the Terraform Registory for docs: [`data_dnsimple_certificate`](https://registry.terraform.io/providers/dnsimple/dnsimple/1.3.0/docs/data-sources/certificate).

# `dataDnsimpleCertificate` Submodule <a name="`dataDnsimpleCertificate` Submodule" id="@cdktf/provider-dnsimple.dataDnsimpleCertificate"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDnsimpleCertificate <a name="DataDnsimpleCertificate" id="@cdktf/provider-dnsimple.dataDnsimpleCertificate.DataDnsimpleCertificate"></a>

Represents a {@link https://registry.terraform.io/providers/dnsimple/dnsimple/1.3.0/docs/data-sources/certificate dnsimple_certificate}.

#### Initializers <a name="Initializers" id="@cdktf/provider-dnsimple.dataDnsimpleCertificate.DataDnsimpleCertificate.Initializer"></a>

```python
from cdktf_cdktf_provider_dnsimple import data_dnsimple_certificate

dataDnsimpleCertificate.DataDnsimpleCertificate(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  certificate_id: typing.Union[int, float],
  domain: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-dnsimple.dataDnsimpleCertificate.DataDnsimpleCertificate.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-dnsimple.dataDnsimpleCertificate.DataDnsimpleCertificate.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-dnsimple.dataDnsimpleCertificate.DataDnsimpleCertificate.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.dataDnsimpleCertificate.DataDnsimpleCertificate.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.dataDnsimpleCertificate.DataDnsimpleCertificate.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.dataDnsimpleCertificate.DataDnsimpleCertificate.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.dataDnsimpleCertificate.DataDnsimpleCertificate.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.dataDnsimpleCertificate.DataDnsimpleCertificate.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.dataDnsimpleCertificate.DataDnsimpleCertificate.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.dataDnsimpleCertificate.DataDnsimpleCertificate.Initializer.parameter.certificateId">certificate_id</a></code> | <code>typing.Union[int, float]</code> | Certificate ID. |
| <code><a href="#@cdktf/provider-dnsimple.dataDnsimpleCertificate.DataDnsimpleCertificate.Initializer.parameter.domain">domain</a></code> | <code>str</code> | Domain name. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-dnsimple.dataDnsimpleCertificate.DataDnsimpleCertificate.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-dnsimple.dataDnsimpleCertificate.DataDnsimpleCertificate.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-dnsimple.dataDnsimpleCertificate.DataDnsimpleCertificate.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-dnsimple.dataDnsimpleCertificate.DataDnsimpleCertificate.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-dnsimple.dataDnsimpleCertificate.DataDnsimpleCertificate.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-dnsimple.dataDnsimpleCertificate.DataDnsimpleCertificate.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-dnsimple.dataDnsimpleCertificate.DataDnsimpleCertificate.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-dnsimple.dataDnsimpleCertificate.DataDnsimpleCertificate.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-dnsimple.dataDnsimpleCertificate.DataDnsimpleCertificate.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `certificate_id`<sup>Required</sup> <a name="certificate_id" id="@cdktf/provider-dnsimple.dataDnsimpleCertificate.DataDnsimpleCertificate.Initializer.parameter.certificateId"></a>

- *Type:* typing.Union[int, float]

Certificate ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dnsimple/dnsimple/1.3.0/docs/data-sources/certificate#certificate_id DataDnsimpleCertificate#certificate_id}

---

##### `domain`<sup>Required</sup> <a name="domain" id="@cdktf/provider-dnsimple.dataDnsimpleCertificate.DataDnsimpleCertificate.Initializer.parameter.domain"></a>

- *Type:* str

Domain name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dnsimple/dnsimple/1.3.0/docs/data-sources/certificate#domain DataDnsimpleCertificate#domain}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-dnsimple.dataDnsimpleCertificate.DataDnsimpleCertificate.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-dnsimple.dataDnsimpleCertificate.DataDnsimpleCertificate.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.dataDnsimpleCertificate.DataDnsimpleCertificate.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-dnsimple.dataDnsimpleCertificate.DataDnsimpleCertificate.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-dnsimple.dataDnsimpleCertificate.DataDnsimpleCertificate.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.dataDnsimpleCertificate.DataDnsimpleCertificate.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-dnsimple.dataDnsimpleCertificate.DataDnsimpleCertificate.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.dataDnsimpleCertificate.DataDnsimpleCertificate.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.dataDnsimpleCertificate.DataDnsimpleCertificate.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.dataDnsimpleCertificate.DataDnsimpleCertificate.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.dataDnsimpleCertificate.DataDnsimpleCertificate.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.dataDnsimpleCertificate.DataDnsimpleCertificate.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.dataDnsimpleCertificate.DataDnsimpleCertificate.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.dataDnsimpleCertificate.DataDnsimpleCertificate.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.dataDnsimpleCertificate.DataDnsimpleCertificate.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.dataDnsimpleCertificate.DataDnsimpleCertificate.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-dnsimple.dataDnsimpleCertificate.DataDnsimpleCertificate.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-dnsimple.dataDnsimpleCertificate.DataDnsimpleCertificate.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-dnsimple.dataDnsimpleCertificate.DataDnsimpleCertificate.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-dnsimple.dataDnsimpleCertificate.DataDnsimpleCertificate.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-dnsimple.dataDnsimpleCertificate.DataDnsimpleCertificate.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-dnsimple.dataDnsimpleCertificate.DataDnsimpleCertificate.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-dnsimple.dataDnsimpleCertificate.DataDnsimpleCertificate.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-dnsimple.dataDnsimpleCertificate.DataDnsimpleCertificate.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-dnsimple.dataDnsimpleCertificate.DataDnsimpleCertificate.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-dnsimple.dataDnsimpleCertificate.DataDnsimpleCertificate.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-dnsimple.dataDnsimpleCertificate.DataDnsimpleCertificate.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-dnsimple.dataDnsimpleCertificate.DataDnsimpleCertificate.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-dnsimple.dataDnsimpleCertificate.DataDnsimpleCertificate.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-dnsimple.dataDnsimpleCertificate.DataDnsimpleCertificate.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-dnsimple.dataDnsimpleCertificate.DataDnsimpleCertificate.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-dnsimple.dataDnsimpleCertificate.DataDnsimpleCertificate.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-dnsimple.dataDnsimpleCertificate.DataDnsimpleCertificate.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-dnsimple.dataDnsimpleCertificate.DataDnsimpleCertificate.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-dnsimple.dataDnsimpleCertificate.DataDnsimpleCertificate.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-dnsimple.dataDnsimpleCertificate.DataDnsimpleCertificate.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-dnsimple.dataDnsimpleCertificate.DataDnsimpleCertificate.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-dnsimple.dataDnsimpleCertificate.DataDnsimpleCertificate.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-dnsimple.dataDnsimpleCertificate.DataDnsimpleCertificate.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-dnsimple.dataDnsimpleCertificate.DataDnsimpleCertificate.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-dnsimple.dataDnsimpleCertificate.DataDnsimpleCertificate.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-dnsimple.dataDnsimpleCertificate.DataDnsimpleCertificate.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-dnsimple.dataDnsimpleCertificate.DataDnsimpleCertificate.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-dnsimple.dataDnsimpleCertificate.DataDnsimpleCertificate.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-dnsimple.dataDnsimpleCertificate.DataDnsimpleCertificate.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-dnsimple.dataDnsimpleCertificate.DataDnsimpleCertificate.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-dnsimple.dataDnsimpleCertificate.DataDnsimpleCertificate.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.dataDnsimpleCertificate.DataDnsimpleCertificate.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-dnsimple.dataDnsimpleCertificate.DataDnsimpleCertificate.isConstruct"></a>

```python
from cdktf_cdktf_provider_dnsimple import data_dnsimple_certificate

dataDnsimpleCertificate.DataDnsimpleCertificate.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-dnsimple.dataDnsimpleCertificate.DataDnsimpleCertificate.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-dnsimple.dataDnsimpleCertificate.DataDnsimpleCertificate.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_dnsimple import data_dnsimple_certificate

dataDnsimpleCertificate.DataDnsimpleCertificate.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-dnsimple.dataDnsimpleCertificate.DataDnsimpleCertificate.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-dnsimple.dataDnsimpleCertificate.DataDnsimpleCertificate.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_dnsimple import data_dnsimple_certificate

dataDnsimpleCertificate.DataDnsimpleCertificate.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-dnsimple.dataDnsimpleCertificate.DataDnsimpleCertificate.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-dnsimple.dataDnsimpleCertificate.DataDnsimpleCertificate.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-dnsimple.dataDnsimpleCertificate.DataDnsimpleCertificate.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.dataDnsimpleCertificate.DataDnsimpleCertificate.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.dataDnsimpleCertificate.DataDnsimpleCertificate.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.dataDnsimpleCertificate.DataDnsimpleCertificate.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.dataDnsimpleCertificate.DataDnsimpleCertificate.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.dataDnsimpleCertificate.DataDnsimpleCertificate.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.dataDnsimpleCertificate.DataDnsimpleCertificate.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.dataDnsimpleCertificate.DataDnsimpleCertificate.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.dataDnsimpleCertificate.DataDnsimpleCertificate.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.dataDnsimpleCertificate.DataDnsimpleCertificate.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.dataDnsimpleCertificate.DataDnsimpleCertificate.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.dataDnsimpleCertificate.DataDnsimpleCertificate.property.certificateChain">certificate_chain</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.dataDnsimpleCertificate.DataDnsimpleCertificate.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.dataDnsimpleCertificate.DataDnsimpleCertificate.property.privateKey">private_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.dataDnsimpleCertificate.DataDnsimpleCertificate.property.rootCertificate">root_certificate</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.dataDnsimpleCertificate.DataDnsimpleCertificate.property.serverCertificate">server_certificate</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.dataDnsimpleCertificate.DataDnsimpleCertificate.property.certificateIdInput">certificate_id_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.dataDnsimpleCertificate.DataDnsimpleCertificate.property.domainInput">domain_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.dataDnsimpleCertificate.DataDnsimpleCertificate.property.certificateId">certificate_id</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.dataDnsimpleCertificate.DataDnsimpleCertificate.property.domain">domain</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-dnsimple.dataDnsimpleCertificate.DataDnsimpleCertificate.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-dnsimple.dataDnsimpleCertificate.DataDnsimpleCertificate.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-dnsimple.dataDnsimpleCertificate.DataDnsimpleCertificate.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-dnsimple.dataDnsimpleCertificate.DataDnsimpleCertificate.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-dnsimple.dataDnsimpleCertificate.DataDnsimpleCertificate.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-dnsimple.dataDnsimpleCertificate.DataDnsimpleCertificate.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-dnsimple.dataDnsimpleCertificate.DataDnsimpleCertificate.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-dnsimple.dataDnsimpleCertificate.DataDnsimpleCertificate.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-dnsimple.dataDnsimpleCertificate.DataDnsimpleCertificate.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-dnsimple.dataDnsimpleCertificate.DataDnsimpleCertificate.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-dnsimple.dataDnsimpleCertificate.DataDnsimpleCertificate.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-dnsimple.dataDnsimpleCertificate.DataDnsimpleCertificate.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `certificate_chain`<sup>Required</sup> <a name="certificate_chain" id="@cdktf/provider-dnsimple.dataDnsimpleCertificate.DataDnsimpleCertificate.property.certificateChain"></a>

```python
certificate_chain: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-dnsimple.dataDnsimpleCertificate.DataDnsimpleCertificate.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `private_key`<sup>Required</sup> <a name="private_key" id="@cdktf/provider-dnsimple.dataDnsimpleCertificate.DataDnsimpleCertificate.property.privateKey"></a>

```python
private_key: str
```

- *Type:* str

---

##### `root_certificate`<sup>Required</sup> <a name="root_certificate" id="@cdktf/provider-dnsimple.dataDnsimpleCertificate.DataDnsimpleCertificate.property.rootCertificate"></a>

```python
root_certificate: str
```

- *Type:* str

---

##### `server_certificate`<sup>Required</sup> <a name="server_certificate" id="@cdktf/provider-dnsimple.dataDnsimpleCertificate.DataDnsimpleCertificate.property.serverCertificate"></a>

```python
server_certificate: str
```

- *Type:* str

---

##### `certificate_id_input`<sup>Optional</sup> <a name="certificate_id_input" id="@cdktf/provider-dnsimple.dataDnsimpleCertificate.DataDnsimpleCertificate.property.certificateIdInput"></a>

```python
certificate_id_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `domain_input`<sup>Optional</sup> <a name="domain_input" id="@cdktf/provider-dnsimple.dataDnsimpleCertificate.DataDnsimpleCertificate.property.domainInput"></a>

```python
domain_input: str
```

- *Type:* str

---

##### `certificate_id`<sup>Required</sup> <a name="certificate_id" id="@cdktf/provider-dnsimple.dataDnsimpleCertificate.DataDnsimpleCertificate.property.certificateId"></a>

```python
certificate_id: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `domain`<sup>Required</sup> <a name="domain" id="@cdktf/provider-dnsimple.dataDnsimpleCertificate.DataDnsimpleCertificate.property.domain"></a>

```python
domain: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-dnsimple.dataDnsimpleCertificate.DataDnsimpleCertificate.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-dnsimple.dataDnsimpleCertificate.DataDnsimpleCertificate.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataDnsimpleCertificateConfig <a name="DataDnsimpleCertificateConfig" id="@cdktf/provider-dnsimple.dataDnsimpleCertificate.DataDnsimpleCertificateConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-dnsimple.dataDnsimpleCertificate.DataDnsimpleCertificateConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_dnsimple import data_dnsimple_certificate

dataDnsimpleCertificate.DataDnsimpleCertificateConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  certificate_id: typing.Union[int, float],
  domain: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-dnsimple.dataDnsimpleCertificate.DataDnsimpleCertificateConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.dataDnsimpleCertificate.DataDnsimpleCertificateConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.dataDnsimpleCertificate.DataDnsimpleCertificateConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.dataDnsimpleCertificate.DataDnsimpleCertificateConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.dataDnsimpleCertificate.DataDnsimpleCertificateConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.dataDnsimpleCertificate.DataDnsimpleCertificateConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.dataDnsimpleCertificate.DataDnsimpleCertificateConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.dataDnsimpleCertificate.DataDnsimpleCertificateConfig.property.certificateId">certificate_id</a></code> | <code>typing.Union[int, float]</code> | Certificate ID. |
| <code><a href="#@cdktf/provider-dnsimple.dataDnsimpleCertificate.DataDnsimpleCertificateConfig.property.domain">domain</a></code> | <code>str</code> | Domain name. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-dnsimple.dataDnsimpleCertificate.DataDnsimpleCertificateConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-dnsimple.dataDnsimpleCertificate.DataDnsimpleCertificateConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-dnsimple.dataDnsimpleCertificate.DataDnsimpleCertificateConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-dnsimple.dataDnsimpleCertificate.DataDnsimpleCertificateConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-dnsimple.dataDnsimpleCertificate.DataDnsimpleCertificateConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-dnsimple.dataDnsimpleCertificate.DataDnsimpleCertificateConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-dnsimple.dataDnsimpleCertificate.DataDnsimpleCertificateConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `certificate_id`<sup>Required</sup> <a name="certificate_id" id="@cdktf/provider-dnsimple.dataDnsimpleCertificate.DataDnsimpleCertificateConfig.property.certificateId"></a>

```python
certificate_id: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Certificate ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dnsimple/dnsimple/1.3.0/docs/data-sources/certificate#certificate_id DataDnsimpleCertificate#certificate_id}

---

##### `domain`<sup>Required</sup> <a name="domain" id="@cdktf/provider-dnsimple.dataDnsimpleCertificate.DataDnsimpleCertificateConfig.property.domain"></a>

```python
domain: str
```

- *Type:* str

Domain name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dnsimple/dnsimple/1.3.0/docs/data-sources/certificate#domain DataDnsimpleCertificate#domain}

---



