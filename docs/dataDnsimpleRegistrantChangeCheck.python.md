# `dataDnsimpleRegistrantChangeCheck` Submodule <a name="`dataDnsimpleRegistrantChangeCheck` Submodule" id="@cdktf/provider-dnsimple.dataDnsimpleRegistrantChangeCheck"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDnsimpleRegistrantChangeCheck <a name="DataDnsimpleRegistrantChangeCheck" id="@cdktf/provider-dnsimple.dataDnsimpleRegistrantChangeCheck.DataDnsimpleRegistrantChangeCheck"></a>

Represents a {@link https://registry.terraform.io/providers/dnsimple/dnsimple/1.8.0/docs/data-sources/registrant_change_check dnsimple_registrant_change_check}.

#### Initializers <a name="Initializers" id="@cdktf/provider-dnsimple.dataDnsimpleRegistrantChangeCheck.DataDnsimpleRegistrantChangeCheck.Initializer"></a>

```python
from cdktf_cdktf_provider_dnsimple import data_dnsimple_registrant_change_check

dataDnsimpleRegistrantChangeCheck.DataDnsimpleRegistrantChangeCheck(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  contact_id: str,
  domain_id: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-dnsimple.dataDnsimpleRegistrantChangeCheck.DataDnsimpleRegistrantChangeCheck.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-dnsimple.dataDnsimpleRegistrantChangeCheck.DataDnsimpleRegistrantChangeCheck.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-dnsimple.dataDnsimpleRegistrantChangeCheck.DataDnsimpleRegistrantChangeCheck.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.dataDnsimpleRegistrantChangeCheck.DataDnsimpleRegistrantChangeCheck.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.dataDnsimpleRegistrantChangeCheck.DataDnsimpleRegistrantChangeCheck.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.dataDnsimpleRegistrantChangeCheck.DataDnsimpleRegistrantChangeCheck.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.dataDnsimpleRegistrantChangeCheck.DataDnsimpleRegistrantChangeCheck.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.dataDnsimpleRegistrantChangeCheck.DataDnsimpleRegistrantChangeCheck.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.dataDnsimpleRegistrantChangeCheck.DataDnsimpleRegistrantChangeCheck.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.dataDnsimpleRegistrantChangeCheck.DataDnsimpleRegistrantChangeCheck.Initializer.parameter.contactId">contact_id</a></code> | <code>str</code> | DNSimple contact ID for which the registrant change check is being performed. |
| <code><a href="#@cdktf/provider-dnsimple.dataDnsimpleRegistrantChangeCheck.DataDnsimpleRegistrantChangeCheck.Initializer.parameter.domainId">domain_id</a></code> | <code>str</code> | DNSimple domain ID for which the registrant change check is being performed. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-dnsimple.dataDnsimpleRegistrantChangeCheck.DataDnsimpleRegistrantChangeCheck.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-dnsimple.dataDnsimpleRegistrantChangeCheck.DataDnsimpleRegistrantChangeCheck.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-dnsimple.dataDnsimpleRegistrantChangeCheck.DataDnsimpleRegistrantChangeCheck.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-dnsimple.dataDnsimpleRegistrantChangeCheck.DataDnsimpleRegistrantChangeCheck.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-dnsimple.dataDnsimpleRegistrantChangeCheck.DataDnsimpleRegistrantChangeCheck.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-dnsimple.dataDnsimpleRegistrantChangeCheck.DataDnsimpleRegistrantChangeCheck.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-dnsimple.dataDnsimpleRegistrantChangeCheck.DataDnsimpleRegistrantChangeCheck.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-dnsimple.dataDnsimpleRegistrantChangeCheck.DataDnsimpleRegistrantChangeCheck.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-dnsimple.dataDnsimpleRegistrantChangeCheck.DataDnsimpleRegistrantChangeCheck.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `contact_id`<sup>Required</sup> <a name="contact_id" id="@cdktf/provider-dnsimple.dataDnsimpleRegistrantChangeCheck.DataDnsimpleRegistrantChangeCheck.Initializer.parameter.contactId"></a>

- *Type:* str

DNSimple contact ID for which the registrant change check is being performed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dnsimple/dnsimple/1.8.0/docs/data-sources/registrant_change_check#contact_id DataDnsimpleRegistrantChangeCheck#contact_id}

---

##### `domain_id`<sup>Required</sup> <a name="domain_id" id="@cdktf/provider-dnsimple.dataDnsimpleRegistrantChangeCheck.DataDnsimpleRegistrantChangeCheck.Initializer.parameter.domainId"></a>

- *Type:* str

DNSimple domain ID for which the registrant change check is being performed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dnsimple/dnsimple/1.8.0/docs/data-sources/registrant_change_check#domain_id DataDnsimpleRegistrantChangeCheck#domain_id}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-dnsimple.dataDnsimpleRegistrantChangeCheck.DataDnsimpleRegistrantChangeCheck.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-dnsimple.dataDnsimpleRegistrantChangeCheck.DataDnsimpleRegistrantChangeCheck.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.dataDnsimpleRegistrantChangeCheck.DataDnsimpleRegistrantChangeCheck.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-dnsimple.dataDnsimpleRegistrantChangeCheck.DataDnsimpleRegistrantChangeCheck.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-dnsimple.dataDnsimpleRegistrantChangeCheck.DataDnsimpleRegistrantChangeCheck.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-dnsimple.dataDnsimpleRegistrantChangeCheck.DataDnsimpleRegistrantChangeCheck.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.dataDnsimpleRegistrantChangeCheck.DataDnsimpleRegistrantChangeCheck.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-dnsimple.dataDnsimpleRegistrantChangeCheck.DataDnsimpleRegistrantChangeCheck.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.dataDnsimpleRegistrantChangeCheck.DataDnsimpleRegistrantChangeCheck.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.dataDnsimpleRegistrantChangeCheck.DataDnsimpleRegistrantChangeCheck.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.dataDnsimpleRegistrantChangeCheck.DataDnsimpleRegistrantChangeCheck.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.dataDnsimpleRegistrantChangeCheck.DataDnsimpleRegistrantChangeCheck.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.dataDnsimpleRegistrantChangeCheck.DataDnsimpleRegistrantChangeCheck.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.dataDnsimpleRegistrantChangeCheck.DataDnsimpleRegistrantChangeCheck.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.dataDnsimpleRegistrantChangeCheck.DataDnsimpleRegistrantChangeCheck.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.dataDnsimpleRegistrantChangeCheck.DataDnsimpleRegistrantChangeCheck.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.dataDnsimpleRegistrantChangeCheck.DataDnsimpleRegistrantChangeCheck.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-dnsimple.dataDnsimpleRegistrantChangeCheck.DataDnsimpleRegistrantChangeCheck.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-dnsimple.dataDnsimpleRegistrantChangeCheck.DataDnsimpleRegistrantChangeCheck.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-dnsimple.dataDnsimpleRegistrantChangeCheck.DataDnsimpleRegistrantChangeCheck.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-dnsimple.dataDnsimpleRegistrantChangeCheck.DataDnsimpleRegistrantChangeCheck.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-dnsimple.dataDnsimpleRegistrantChangeCheck.DataDnsimpleRegistrantChangeCheck.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-dnsimple.dataDnsimpleRegistrantChangeCheck.DataDnsimpleRegistrantChangeCheck.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-dnsimple.dataDnsimpleRegistrantChangeCheck.DataDnsimpleRegistrantChangeCheck.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-dnsimple.dataDnsimpleRegistrantChangeCheck.DataDnsimpleRegistrantChangeCheck.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-dnsimple.dataDnsimpleRegistrantChangeCheck.DataDnsimpleRegistrantChangeCheck.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-dnsimple.dataDnsimpleRegistrantChangeCheck.DataDnsimpleRegistrantChangeCheck.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-dnsimple.dataDnsimpleRegistrantChangeCheck.DataDnsimpleRegistrantChangeCheck.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-dnsimple.dataDnsimpleRegistrantChangeCheck.DataDnsimpleRegistrantChangeCheck.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-dnsimple.dataDnsimpleRegistrantChangeCheck.DataDnsimpleRegistrantChangeCheck.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-dnsimple.dataDnsimpleRegistrantChangeCheck.DataDnsimpleRegistrantChangeCheck.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-dnsimple.dataDnsimpleRegistrantChangeCheck.DataDnsimpleRegistrantChangeCheck.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-dnsimple.dataDnsimpleRegistrantChangeCheck.DataDnsimpleRegistrantChangeCheck.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-dnsimple.dataDnsimpleRegistrantChangeCheck.DataDnsimpleRegistrantChangeCheck.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-dnsimple.dataDnsimpleRegistrantChangeCheck.DataDnsimpleRegistrantChangeCheck.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-dnsimple.dataDnsimpleRegistrantChangeCheck.DataDnsimpleRegistrantChangeCheck.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-dnsimple.dataDnsimpleRegistrantChangeCheck.DataDnsimpleRegistrantChangeCheck.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-dnsimple.dataDnsimpleRegistrantChangeCheck.DataDnsimpleRegistrantChangeCheck.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-dnsimple.dataDnsimpleRegistrantChangeCheck.DataDnsimpleRegistrantChangeCheck.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-dnsimple.dataDnsimpleRegistrantChangeCheck.DataDnsimpleRegistrantChangeCheck.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-dnsimple.dataDnsimpleRegistrantChangeCheck.DataDnsimpleRegistrantChangeCheck.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-dnsimple.dataDnsimpleRegistrantChangeCheck.DataDnsimpleRegistrantChangeCheck.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-dnsimple.dataDnsimpleRegistrantChangeCheck.DataDnsimpleRegistrantChangeCheck.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-dnsimple.dataDnsimpleRegistrantChangeCheck.DataDnsimpleRegistrantChangeCheck.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-dnsimple.dataDnsimpleRegistrantChangeCheck.DataDnsimpleRegistrantChangeCheck.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-dnsimple.dataDnsimpleRegistrantChangeCheck.DataDnsimpleRegistrantChangeCheck.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-dnsimple.dataDnsimpleRegistrantChangeCheck.DataDnsimpleRegistrantChangeCheck.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-dnsimple.dataDnsimpleRegistrantChangeCheck.DataDnsimpleRegistrantChangeCheck.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-dnsimple.dataDnsimpleRegistrantChangeCheck.DataDnsimpleRegistrantChangeCheck.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.dataDnsimpleRegistrantChangeCheck.DataDnsimpleRegistrantChangeCheck.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.dataDnsimpleRegistrantChangeCheck.DataDnsimpleRegistrantChangeCheck.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataDnsimpleRegistrantChangeCheck resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-dnsimple.dataDnsimpleRegistrantChangeCheck.DataDnsimpleRegistrantChangeCheck.isConstruct"></a>

```python
from cdktf_cdktf_provider_dnsimple import data_dnsimple_registrant_change_check

dataDnsimpleRegistrantChangeCheck.DataDnsimpleRegistrantChangeCheck.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-dnsimple.dataDnsimpleRegistrantChangeCheck.DataDnsimpleRegistrantChangeCheck.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-dnsimple.dataDnsimpleRegistrantChangeCheck.DataDnsimpleRegistrantChangeCheck.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_dnsimple import data_dnsimple_registrant_change_check

dataDnsimpleRegistrantChangeCheck.DataDnsimpleRegistrantChangeCheck.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-dnsimple.dataDnsimpleRegistrantChangeCheck.DataDnsimpleRegistrantChangeCheck.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-dnsimple.dataDnsimpleRegistrantChangeCheck.DataDnsimpleRegistrantChangeCheck.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_dnsimple import data_dnsimple_registrant_change_check

dataDnsimpleRegistrantChangeCheck.DataDnsimpleRegistrantChangeCheck.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-dnsimple.dataDnsimpleRegistrantChangeCheck.DataDnsimpleRegistrantChangeCheck.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-dnsimple.dataDnsimpleRegistrantChangeCheck.DataDnsimpleRegistrantChangeCheck.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_dnsimple import data_dnsimple_registrant_change_check

dataDnsimpleRegistrantChangeCheck.DataDnsimpleRegistrantChangeCheck.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataDnsimpleRegistrantChangeCheck resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-dnsimple.dataDnsimpleRegistrantChangeCheck.DataDnsimpleRegistrantChangeCheck.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-dnsimple.dataDnsimpleRegistrantChangeCheck.DataDnsimpleRegistrantChangeCheck.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataDnsimpleRegistrantChangeCheck to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-dnsimple.dataDnsimpleRegistrantChangeCheck.DataDnsimpleRegistrantChangeCheck.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataDnsimpleRegistrantChangeCheck that should be imported.

Refer to the {@link https://registry.terraform.io/providers/dnsimple/dnsimple/1.8.0/docs/data-sources/registrant_change_check#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-dnsimple.dataDnsimpleRegistrantChangeCheck.DataDnsimpleRegistrantChangeCheck.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataDnsimpleRegistrantChangeCheck to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-dnsimple.dataDnsimpleRegistrantChangeCheck.DataDnsimpleRegistrantChangeCheck.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-dnsimple.dataDnsimpleRegistrantChangeCheck.DataDnsimpleRegistrantChangeCheck.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.dataDnsimpleRegistrantChangeCheck.DataDnsimpleRegistrantChangeCheck.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.dataDnsimpleRegistrantChangeCheck.DataDnsimpleRegistrantChangeCheck.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.dataDnsimpleRegistrantChangeCheck.DataDnsimpleRegistrantChangeCheck.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.dataDnsimpleRegistrantChangeCheck.DataDnsimpleRegistrantChangeCheck.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.dataDnsimpleRegistrantChangeCheck.DataDnsimpleRegistrantChangeCheck.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.dataDnsimpleRegistrantChangeCheck.DataDnsimpleRegistrantChangeCheck.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.dataDnsimpleRegistrantChangeCheck.DataDnsimpleRegistrantChangeCheck.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.dataDnsimpleRegistrantChangeCheck.DataDnsimpleRegistrantChangeCheck.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.dataDnsimpleRegistrantChangeCheck.DataDnsimpleRegistrantChangeCheck.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.dataDnsimpleRegistrantChangeCheck.DataDnsimpleRegistrantChangeCheck.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.dataDnsimpleRegistrantChangeCheck.DataDnsimpleRegistrantChangeCheck.property.extendedAttributes">extended_attributes</a></code> | <code><a href="#@cdktf/provider-dnsimple.dataDnsimpleRegistrantChangeCheck.DataDnsimpleRegistrantChangeCheckExtendedAttributesList">DataDnsimpleRegistrantChangeCheckExtendedAttributesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.dataDnsimpleRegistrantChangeCheck.DataDnsimpleRegistrantChangeCheck.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.dataDnsimpleRegistrantChangeCheck.DataDnsimpleRegistrantChangeCheck.property.registryOwnerChange">registry_owner_change</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.dataDnsimpleRegistrantChangeCheck.DataDnsimpleRegistrantChangeCheck.property.contactIdInput">contact_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.dataDnsimpleRegistrantChangeCheck.DataDnsimpleRegistrantChangeCheck.property.domainIdInput">domain_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.dataDnsimpleRegistrantChangeCheck.DataDnsimpleRegistrantChangeCheck.property.contactId">contact_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.dataDnsimpleRegistrantChangeCheck.DataDnsimpleRegistrantChangeCheck.property.domainId">domain_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-dnsimple.dataDnsimpleRegistrantChangeCheck.DataDnsimpleRegistrantChangeCheck.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-dnsimple.dataDnsimpleRegistrantChangeCheck.DataDnsimpleRegistrantChangeCheck.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-dnsimple.dataDnsimpleRegistrantChangeCheck.DataDnsimpleRegistrantChangeCheck.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-dnsimple.dataDnsimpleRegistrantChangeCheck.DataDnsimpleRegistrantChangeCheck.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-dnsimple.dataDnsimpleRegistrantChangeCheck.DataDnsimpleRegistrantChangeCheck.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-dnsimple.dataDnsimpleRegistrantChangeCheck.DataDnsimpleRegistrantChangeCheck.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-dnsimple.dataDnsimpleRegistrantChangeCheck.DataDnsimpleRegistrantChangeCheck.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-dnsimple.dataDnsimpleRegistrantChangeCheck.DataDnsimpleRegistrantChangeCheck.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-dnsimple.dataDnsimpleRegistrantChangeCheck.DataDnsimpleRegistrantChangeCheck.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-dnsimple.dataDnsimpleRegistrantChangeCheck.DataDnsimpleRegistrantChangeCheck.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-dnsimple.dataDnsimpleRegistrantChangeCheck.DataDnsimpleRegistrantChangeCheck.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-dnsimple.dataDnsimpleRegistrantChangeCheck.DataDnsimpleRegistrantChangeCheck.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `extended_attributes`<sup>Required</sup> <a name="extended_attributes" id="@cdktf/provider-dnsimple.dataDnsimpleRegistrantChangeCheck.DataDnsimpleRegistrantChangeCheck.property.extendedAttributes"></a>

```python
extended_attributes: DataDnsimpleRegistrantChangeCheckExtendedAttributesList
```

- *Type:* <a href="#@cdktf/provider-dnsimple.dataDnsimpleRegistrantChangeCheck.DataDnsimpleRegistrantChangeCheckExtendedAttributesList">DataDnsimpleRegistrantChangeCheckExtendedAttributesList</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-dnsimple.dataDnsimpleRegistrantChangeCheck.DataDnsimpleRegistrantChangeCheck.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `registry_owner_change`<sup>Required</sup> <a name="registry_owner_change" id="@cdktf/provider-dnsimple.dataDnsimpleRegistrantChangeCheck.DataDnsimpleRegistrantChangeCheck.property.registryOwnerChange"></a>

```python
registry_owner_change: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `contact_id_input`<sup>Optional</sup> <a name="contact_id_input" id="@cdktf/provider-dnsimple.dataDnsimpleRegistrantChangeCheck.DataDnsimpleRegistrantChangeCheck.property.contactIdInput"></a>

```python
contact_id_input: str
```

- *Type:* str

---

##### `domain_id_input`<sup>Optional</sup> <a name="domain_id_input" id="@cdktf/provider-dnsimple.dataDnsimpleRegistrantChangeCheck.DataDnsimpleRegistrantChangeCheck.property.domainIdInput"></a>

```python
domain_id_input: str
```

- *Type:* str

---

##### `contact_id`<sup>Required</sup> <a name="contact_id" id="@cdktf/provider-dnsimple.dataDnsimpleRegistrantChangeCheck.DataDnsimpleRegistrantChangeCheck.property.contactId"></a>

```python
contact_id: str
```

- *Type:* str

---

##### `domain_id`<sup>Required</sup> <a name="domain_id" id="@cdktf/provider-dnsimple.dataDnsimpleRegistrantChangeCheck.DataDnsimpleRegistrantChangeCheck.property.domainId"></a>

```python
domain_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-dnsimple.dataDnsimpleRegistrantChangeCheck.DataDnsimpleRegistrantChangeCheck.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-dnsimple.dataDnsimpleRegistrantChangeCheck.DataDnsimpleRegistrantChangeCheck.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataDnsimpleRegistrantChangeCheckConfig <a name="DataDnsimpleRegistrantChangeCheckConfig" id="@cdktf/provider-dnsimple.dataDnsimpleRegistrantChangeCheck.DataDnsimpleRegistrantChangeCheckConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-dnsimple.dataDnsimpleRegistrantChangeCheck.DataDnsimpleRegistrantChangeCheckConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_dnsimple import data_dnsimple_registrant_change_check

dataDnsimpleRegistrantChangeCheck.DataDnsimpleRegistrantChangeCheckConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  contact_id: str,
  domain_id: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-dnsimple.dataDnsimpleRegistrantChangeCheck.DataDnsimpleRegistrantChangeCheckConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.dataDnsimpleRegistrantChangeCheck.DataDnsimpleRegistrantChangeCheckConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.dataDnsimpleRegistrantChangeCheck.DataDnsimpleRegistrantChangeCheckConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.dataDnsimpleRegistrantChangeCheck.DataDnsimpleRegistrantChangeCheckConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.dataDnsimpleRegistrantChangeCheck.DataDnsimpleRegistrantChangeCheckConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.dataDnsimpleRegistrantChangeCheck.DataDnsimpleRegistrantChangeCheckConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.dataDnsimpleRegistrantChangeCheck.DataDnsimpleRegistrantChangeCheckConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.dataDnsimpleRegistrantChangeCheck.DataDnsimpleRegistrantChangeCheckConfig.property.contactId">contact_id</a></code> | <code>str</code> | DNSimple contact ID for which the registrant change check is being performed. |
| <code><a href="#@cdktf/provider-dnsimple.dataDnsimpleRegistrantChangeCheck.DataDnsimpleRegistrantChangeCheckConfig.property.domainId">domain_id</a></code> | <code>str</code> | DNSimple domain ID for which the registrant change check is being performed. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-dnsimple.dataDnsimpleRegistrantChangeCheck.DataDnsimpleRegistrantChangeCheckConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-dnsimple.dataDnsimpleRegistrantChangeCheck.DataDnsimpleRegistrantChangeCheckConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-dnsimple.dataDnsimpleRegistrantChangeCheck.DataDnsimpleRegistrantChangeCheckConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-dnsimple.dataDnsimpleRegistrantChangeCheck.DataDnsimpleRegistrantChangeCheckConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-dnsimple.dataDnsimpleRegistrantChangeCheck.DataDnsimpleRegistrantChangeCheckConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-dnsimple.dataDnsimpleRegistrantChangeCheck.DataDnsimpleRegistrantChangeCheckConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-dnsimple.dataDnsimpleRegistrantChangeCheck.DataDnsimpleRegistrantChangeCheckConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `contact_id`<sup>Required</sup> <a name="contact_id" id="@cdktf/provider-dnsimple.dataDnsimpleRegistrantChangeCheck.DataDnsimpleRegistrantChangeCheckConfig.property.contactId"></a>

```python
contact_id: str
```

- *Type:* str

DNSimple contact ID for which the registrant change check is being performed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dnsimple/dnsimple/1.8.0/docs/data-sources/registrant_change_check#contact_id DataDnsimpleRegistrantChangeCheck#contact_id}

---

##### `domain_id`<sup>Required</sup> <a name="domain_id" id="@cdktf/provider-dnsimple.dataDnsimpleRegistrantChangeCheck.DataDnsimpleRegistrantChangeCheckConfig.property.domainId"></a>

```python
domain_id: str
```

- *Type:* str

DNSimple domain ID for which the registrant change check is being performed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dnsimple/dnsimple/1.8.0/docs/data-sources/registrant_change_check#domain_id DataDnsimpleRegistrantChangeCheck#domain_id}

---

### DataDnsimpleRegistrantChangeCheckExtendedAttributes <a name="DataDnsimpleRegistrantChangeCheckExtendedAttributes" id="@cdktf/provider-dnsimple.dataDnsimpleRegistrantChangeCheck.DataDnsimpleRegistrantChangeCheckExtendedAttributes"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-dnsimple.dataDnsimpleRegistrantChangeCheck.DataDnsimpleRegistrantChangeCheckExtendedAttributes.Initializer"></a>

```python
from cdktf_cdktf_provider_dnsimple import data_dnsimple_registrant_change_check

dataDnsimpleRegistrantChangeCheck.DataDnsimpleRegistrantChangeCheckExtendedAttributes()
```


### DataDnsimpleRegistrantChangeCheckExtendedAttributesOptions <a name="DataDnsimpleRegistrantChangeCheckExtendedAttributesOptions" id="@cdktf/provider-dnsimple.dataDnsimpleRegistrantChangeCheck.DataDnsimpleRegistrantChangeCheckExtendedAttributesOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-dnsimple.dataDnsimpleRegistrantChangeCheck.DataDnsimpleRegistrantChangeCheckExtendedAttributesOptions.Initializer"></a>

```python
from cdktf_cdktf_provider_dnsimple import data_dnsimple_registrant_change_check

dataDnsimpleRegistrantChangeCheck.DataDnsimpleRegistrantChangeCheckExtendedAttributesOptions()
```


## Classes <a name="Classes" id="Classes"></a>

### DataDnsimpleRegistrantChangeCheckExtendedAttributesList <a name="DataDnsimpleRegistrantChangeCheckExtendedAttributesList" id="@cdktf/provider-dnsimple.dataDnsimpleRegistrantChangeCheck.DataDnsimpleRegistrantChangeCheckExtendedAttributesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-dnsimple.dataDnsimpleRegistrantChangeCheck.DataDnsimpleRegistrantChangeCheckExtendedAttributesList.Initializer"></a>

```python
from cdktf_cdktf_provider_dnsimple import data_dnsimple_registrant_change_check

dataDnsimpleRegistrantChangeCheck.DataDnsimpleRegistrantChangeCheckExtendedAttributesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-dnsimple.dataDnsimpleRegistrantChangeCheck.DataDnsimpleRegistrantChangeCheckExtendedAttributesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-dnsimple.dataDnsimpleRegistrantChangeCheck.DataDnsimpleRegistrantChangeCheckExtendedAttributesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-dnsimple.dataDnsimpleRegistrantChangeCheck.DataDnsimpleRegistrantChangeCheckExtendedAttributesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-dnsimple.dataDnsimpleRegistrantChangeCheck.DataDnsimpleRegistrantChangeCheckExtendedAttributesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-dnsimple.dataDnsimpleRegistrantChangeCheck.DataDnsimpleRegistrantChangeCheckExtendedAttributesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-dnsimple.dataDnsimpleRegistrantChangeCheck.DataDnsimpleRegistrantChangeCheckExtendedAttributesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-dnsimple.dataDnsimpleRegistrantChangeCheck.DataDnsimpleRegistrantChangeCheckExtendedAttributesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-dnsimple.dataDnsimpleRegistrantChangeCheck.DataDnsimpleRegistrantChangeCheckExtendedAttributesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.dataDnsimpleRegistrantChangeCheck.DataDnsimpleRegistrantChangeCheckExtendedAttributesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-dnsimple.dataDnsimpleRegistrantChangeCheck.DataDnsimpleRegistrantChangeCheckExtendedAttributesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-dnsimple.dataDnsimpleRegistrantChangeCheck.DataDnsimpleRegistrantChangeCheckExtendedAttributesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-dnsimple.dataDnsimpleRegistrantChangeCheck.DataDnsimpleRegistrantChangeCheckExtendedAttributesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-dnsimple.dataDnsimpleRegistrantChangeCheck.DataDnsimpleRegistrantChangeCheckExtendedAttributesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-dnsimple.dataDnsimpleRegistrantChangeCheck.DataDnsimpleRegistrantChangeCheckExtendedAttributesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-dnsimple.dataDnsimpleRegistrantChangeCheck.DataDnsimpleRegistrantChangeCheckExtendedAttributesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-dnsimple.dataDnsimpleRegistrantChangeCheck.DataDnsimpleRegistrantChangeCheckExtendedAttributesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-dnsimple.dataDnsimpleRegistrantChangeCheck.DataDnsimpleRegistrantChangeCheckExtendedAttributesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-dnsimple.dataDnsimpleRegistrantChangeCheck.DataDnsimpleRegistrantChangeCheckExtendedAttributesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataDnsimpleRegistrantChangeCheckExtendedAttributesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-dnsimple.dataDnsimpleRegistrantChangeCheck.DataDnsimpleRegistrantChangeCheckExtendedAttributesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-dnsimple.dataDnsimpleRegistrantChangeCheck.DataDnsimpleRegistrantChangeCheckExtendedAttributesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-dnsimple.dataDnsimpleRegistrantChangeCheck.DataDnsimpleRegistrantChangeCheckExtendedAttributesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-dnsimple.dataDnsimpleRegistrantChangeCheck.DataDnsimpleRegistrantChangeCheckExtendedAttributesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-dnsimple.dataDnsimpleRegistrantChangeCheck.DataDnsimpleRegistrantChangeCheckExtendedAttributesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataDnsimpleRegistrantChangeCheckExtendedAttributesOptionsList <a name="DataDnsimpleRegistrantChangeCheckExtendedAttributesOptionsList" id="@cdktf/provider-dnsimple.dataDnsimpleRegistrantChangeCheck.DataDnsimpleRegistrantChangeCheckExtendedAttributesOptionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-dnsimple.dataDnsimpleRegistrantChangeCheck.DataDnsimpleRegistrantChangeCheckExtendedAttributesOptionsList.Initializer"></a>

```python
from cdktf_cdktf_provider_dnsimple import data_dnsimple_registrant_change_check

dataDnsimpleRegistrantChangeCheck.DataDnsimpleRegistrantChangeCheckExtendedAttributesOptionsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-dnsimple.dataDnsimpleRegistrantChangeCheck.DataDnsimpleRegistrantChangeCheckExtendedAttributesOptionsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-dnsimple.dataDnsimpleRegistrantChangeCheck.DataDnsimpleRegistrantChangeCheckExtendedAttributesOptionsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-dnsimple.dataDnsimpleRegistrantChangeCheck.DataDnsimpleRegistrantChangeCheckExtendedAttributesOptionsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-dnsimple.dataDnsimpleRegistrantChangeCheck.DataDnsimpleRegistrantChangeCheckExtendedAttributesOptionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-dnsimple.dataDnsimpleRegistrantChangeCheck.DataDnsimpleRegistrantChangeCheckExtendedAttributesOptionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-dnsimple.dataDnsimpleRegistrantChangeCheck.DataDnsimpleRegistrantChangeCheckExtendedAttributesOptionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-dnsimple.dataDnsimpleRegistrantChangeCheck.DataDnsimpleRegistrantChangeCheckExtendedAttributesOptionsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-dnsimple.dataDnsimpleRegistrantChangeCheck.DataDnsimpleRegistrantChangeCheckExtendedAttributesOptionsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.dataDnsimpleRegistrantChangeCheck.DataDnsimpleRegistrantChangeCheckExtendedAttributesOptionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-dnsimple.dataDnsimpleRegistrantChangeCheck.DataDnsimpleRegistrantChangeCheckExtendedAttributesOptionsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-dnsimple.dataDnsimpleRegistrantChangeCheck.DataDnsimpleRegistrantChangeCheckExtendedAttributesOptionsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-dnsimple.dataDnsimpleRegistrantChangeCheck.DataDnsimpleRegistrantChangeCheckExtendedAttributesOptionsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-dnsimple.dataDnsimpleRegistrantChangeCheck.DataDnsimpleRegistrantChangeCheckExtendedAttributesOptionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-dnsimple.dataDnsimpleRegistrantChangeCheck.DataDnsimpleRegistrantChangeCheckExtendedAttributesOptionsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-dnsimple.dataDnsimpleRegistrantChangeCheck.DataDnsimpleRegistrantChangeCheckExtendedAttributesOptionsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-dnsimple.dataDnsimpleRegistrantChangeCheck.DataDnsimpleRegistrantChangeCheckExtendedAttributesOptionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-dnsimple.dataDnsimpleRegistrantChangeCheck.DataDnsimpleRegistrantChangeCheckExtendedAttributesOptionsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-dnsimple.dataDnsimpleRegistrantChangeCheck.DataDnsimpleRegistrantChangeCheckExtendedAttributesOptionsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataDnsimpleRegistrantChangeCheckExtendedAttributesOptionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-dnsimple.dataDnsimpleRegistrantChangeCheck.DataDnsimpleRegistrantChangeCheckExtendedAttributesOptionsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-dnsimple.dataDnsimpleRegistrantChangeCheck.DataDnsimpleRegistrantChangeCheckExtendedAttributesOptionsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-dnsimple.dataDnsimpleRegistrantChangeCheck.DataDnsimpleRegistrantChangeCheckExtendedAttributesOptionsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-dnsimple.dataDnsimpleRegistrantChangeCheck.DataDnsimpleRegistrantChangeCheckExtendedAttributesOptionsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-dnsimple.dataDnsimpleRegistrantChangeCheck.DataDnsimpleRegistrantChangeCheckExtendedAttributesOptionsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataDnsimpleRegistrantChangeCheckExtendedAttributesOptionsOutputReference <a name="DataDnsimpleRegistrantChangeCheckExtendedAttributesOptionsOutputReference" id="@cdktf/provider-dnsimple.dataDnsimpleRegistrantChangeCheck.DataDnsimpleRegistrantChangeCheckExtendedAttributesOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-dnsimple.dataDnsimpleRegistrantChangeCheck.DataDnsimpleRegistrantChangeCheckExtendedAttributesOptionsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_dnsimple import data_dnsimple_registrant_change_check

dataDnsimpleRegistrantChangeCheck.DataDnsimpleRegistrantChangeCheckExtendedAttributesOptionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-dnsimple.dataDnsimpleRegistrantChangeCheck.DataDnsimpleRegistrantChangeCheckExtendedAttributesOptionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-dnsimple.dataDnsimpleRegistrantChangeCheck.DataDnsimpleRegistrantChangeCheckExtendedAttributesOptionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-dnsimple.dataDnsimpleRegistrantChangeCheck.DataDnsimpleRegistrantChangeCheckExtendedAttributesOptionsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-dnsimple.dataDnsimpleRegistrantChangeCheck.DataDnsimpleRegistrantChangeCheckExtendedAttributesOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-dnsimple.dataDnsimpleRegistrantChangeCheck.DataDnsimpleRegistrantChangeCheckExtendedAttributesOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-dnsimple.dataDnsimpleRegistrantChangeCheck.DataDnsimpleRegistrantChangeCheckExtendedAttributesOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-dnsimple.dataDnsimpleRegistrantChangeCheck.DataDnsimpleRegistrantChangeCheckExtendedAttributesOptionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-dnsimple.dataDnsimpleRegistrantChangeCheck.DataDnsimpleRegistrantChangeCheckExtendedAttributesOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-dnsimple.dataDnsimpleRegistrantChangeCheck.DataDnsimpleRegistrantChangeCheckExtendedAttributesOptionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.dataDnsimpleRegistrantChangeCheck.DataDnsimpleRegistrantChangeCheckExtendedAttributesOptionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.dataDnsimpleRegistrantChangeCheck.DataDnsimpleRegistrantChangeCheckExtendedAttributesOptionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.dataDnsimpleRegistrantChangeCheck.DataDnsimpleRegistrantChangeCheckExtendedAttributesOptionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.dataDnsimpleRegistrantChangeCheck.DataDnsimpleRegistrantChangeCheckExtendedAttributesOptionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.dataDnsimpleRegistrantChangeCheck.DataDnsimpleRegistrantChangeCheckExtendedAttributesOptionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.dataDnsimpleRegistrantChangeCheck.DataDnsimpleRegistrantChangeCheckExtendedAttributesOptionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.dataDnsimpleRegistrantChangeCheck.DataDnsimpleRegistrantChangeCheckExtendedAttributesOptionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.dataDnsimpleRegistrantChangeCheck.DataDnsimpleRegistrantChangeCheckExtendedAttributesOptionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.dataDnsimpleRegistrantChangeCheck.DataDnsimpleRegistrantChangeCheckExtendedAttributesOptionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.dataDnsimpleRegistrantChangeCheck.DataDnsimpleRegistrantChangeCheckExtendedAttributesOptionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.dataDnsimpleRegistrantChangeCheck.DataDnsimpleRegistrantChangeCheckExtendedAttributesOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-dnsimple.dataDnsimpleRegistrantChangeCheck.DataDnsimpleRegistrantChangeCheckExtendedAttributesOptionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-dnsimple.dataDnsimpleRegistrantChangeCheck.DataDnsimpleRegistrantChangeCheckExtendedAttributesOptionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-dnsimple.dataDnsimpleRegistrantChangeCheck.DataDnsimpleRegistrantChangeCheckExtendedAttributesOptionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-dnsimple.dataDnsimpleRegistrantChangeCheck.DataDnsimpleRegistrantChangeCheckExtendedAttributesOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-dnsimple.dataDnsimpleRegistrantChangeCheck.DataDnsimpleRegistrantChangeCheckExtendedAttributesOptionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-dnsimple.dataDnsimpleRegistrantChangeCheck.DataDnsimpleRegistrantChangeCheckExtendedAttributesOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-dnsimple.dataDnsimpleRegistrantChangeCheck.DataDnsimpleRegistrantChangeCheckExtendedAttributesOptionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-dnsimple.dataDnsimpleRegistrantChangeCheck.DataDnsimpleRegistrantChangeCheckExtendedAttributesOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-dnsimple.dataDnsimpleRegistrantChangeCheck.DataDnsimpleRegistrantChangeCheckExtendedAttributesOptionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-dnsimple.dataDnsimpleRegistrantChangeCheck.DataDnsimpleRegistrantChangeCheckExtendedAttributesOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-dnsimple.dataDnsimpleRegistrantChangeCheck.DataDnsimpleRegistrantChangeCheckExtendedAttributesOptionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-dnsimple.dataDnsimpleRegistrantChangeCheck.DataDnsimpleRegistrantChangeCheckExtendedAttributesOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-dnsimple.dataDnsimpleRegistrantChangeCheck.DataDnsimpleRegistrantChangeCheckExtendedAttributesOptionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-dnsimple.dataDnsimpleRegistrantChangeCheck.DataDnsimpleRegistrantChangeCheckExtendedAttributesOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-dnsimple.dataDnsimpleRegistrantChangeCheck.DataDnsimpleRegistrantChangeCheckExtendedAttributesOptionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-dnsimple.dataDnsimpleRegistrantChangeCheck.DataDnsimpleRegistrantChangeCheckExtendedAttributesOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-dnsimple.dataDnsimpleRegistrantChangeCheck.DataDnsimpleRegistrantChangeCheckExtendedAttributesOptionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-dnsimple.dataDnsimpleRegistrantChangeCheck.DataDnsimpleRegistrantChangeCheckExtendedAttributesOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-dnsimple.dataDnsimpleRegistrantChangeCheck.DataDnsimpleRegistrantChangeCheckExtendedAttributesOptionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-dnsimple.dataDnsimpleRegistrantChangeCheck.DataDnsimpleRegistrantChangeCheckExtendedAttributesOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-dnsimple.dataDnsimpleRegistrantChangeCheck.DataDnsimpleRegistrantChangeCheckExtendedAttributesOptionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-dnsimple.dataDnsimpleRegistrantChangeCheck.DataDnsimpleRegistrantChangeCheckExtendedAttributesOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-dnsimple.dataDnsimpleRegistrantChangeCheck.DataDnsimpleRegistrantChangeCheckExtendedAttributesOptionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-dnsimple.dataDnsimpleRegistrantChangeCheck.DataDnsimpleRegistrantChangeCheckExtendedAttributesOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-dnsimple.dataDnsimpleRegistrantChangeCheck.DataDnsimpleRegistrantChangeCheckExtendedAttributesOptionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-dnsimple.dataDnsimpleRegistrantChangeCheck.DataDnsimpleRegistrantChangeCheckExtendedAttributesOptionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-dnsimple.dataDnsimpleRegistrantChangeCheck.DataDnsimpleRegistrantChangeCheckExtendedAttributesOptionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.dataDnsimpleRegistrantChangeCheck.DataDnsimpleRegistrantChangeCheckExtendedAttributesOptionsOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.dataDnsimpleRegistrantChangeCheck.DataDnsimpleRegistrantChangeCheckExtendedAttributesOptionsOutputReference.property.title">title</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.dataDnsimpleRegistrantChangeCheck.DataDnsimpleRegistrantChangeCheckExtendedAttributesOptionsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.dataDnsimpleRegistrantChangeCheck.DataDnsimpleRegistrantChangeCheckExtendedAttributesOptionsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-dnsimple.dataDnsimpleRegistrantChangeCheck.DataDnsimpleRegistrantChangeCheckExtendedAttributesOptions">DataDnsimpleRegistrantChangeCheckExtendedAttributesOptions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-dnsimple.dataDnsimpleRegistrantChangeCheck.DataDnsimpleRegistrantChangeCheckExtendedAttributesOptionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-dnsimple.dataDnsimpleRegistrantChangeCheck.DataDnsimpleRegistrantChangeCheckExtendedAttributesOptionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-dnsimple.dataDnsimpleRegistrantChangeCheck.DataDnsimpleRegistrantChangeCheckExtendedAttributesOptionsOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-dnsimple.dataDnsimpleRegistrantChangeCheck.DataDnsimpleRegistrantChangeCheckExtendedAttributesOptionsOutputReference.property.title"></a>

```python
title: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-dnsimple.dataDnsimpleRegistrantChangeCheck.DataDnsimpleRegistrantChangeCheckExtendedAttributesOptionsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-dnsimple.dataDnsimpleRegistrantChangeCheck.DataDnsimpleRegistrantChangeCheckExtendedAttributesOptionsOutputReference.property.internalValue"></a>

```python
internal_value: DataDnsimpleRegistrantChangeCheckExtendedAttributesOptions
```

- *Type:* <a href="#@cdktf/provider-dnsimple.dataDnsimpleRegistrantChangeCheck.DataDnsimpleRegistrantChangeCheckExtendedAttributesOptions">DataDnsimpleRegistrantChangeCheckExtendedAttributesOptions</a>

---


### DataDnsimpleRegistrantChangeCheckExtendedAttributesOutputReference <a name="DataDnsimpleRegistrantChangeCheckExtendedAttributesOutputReference" id="@cdktf/provider-dnsimple.dataDnsimpleRegistrantChangeCheck.DataDnsimpleRegistrantChangeCheckExtendedAttributesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-dnsimple.dataDnsimpleRegistrantChangeCheck.DataDnsimpleRegistrantChangeCheckExtendedAttributesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_dnsimple import data_dnsimple_registrant_change_check

dataDnsimpleRegistrantChangeCheck.DataDnsimpleRegistrantChangeCheckExtendedAttributesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-dnsimple.dataDnsimpleRegistrantChangeCheck.DataDnsimpleRegistrantChangeCheckExtendedAttributesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-dnsimple.dataDnsimpleRegistrantChangeCheck.DataDnsimpleRegistrantChangeCheckExtendedAttributesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-dnsimple.dataDnsimpleRegistrantChangeCheck.DataDnsimpleRegistrantChangeCheckExtendedAttributesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-dnsimple.dataDnsimpleRegistrantChangeCheck.DataDnsimpleRegistrantChangeCheckExtendedAttributesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-dnsimple.dataDnsimpleRegistrantChangeCheck.DataDnsimpleRegistrantChangeCheckExtendedAttributesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-dnsimple.dataDnsimpleRegistrantChangeCheck.DataDnsimpleRegistrantChangeCheckExtendedAttributesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-dnsimple.dataDnsimpleRegistrantChangeCheck.DataDnsimpleRegistrantChangeCheckExtendedAttributesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-dnsimple.dataDnsimpleRegistrantChangeCheck.DataDnsimpleRegistrantChangeCheckExtendedAttributesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-dnsimple.dataDnsimpleRegistrantChangeCheck.DataDnsimpleRegistrantChangeCheckExtendedAttributesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.dataDnsimpleRegistrantChangeCheck.DataDnsimpleRegistrantChangeCheckExtendedAttributesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.dataDnsimpleRegistrantChangeCheck.DataDnsimpleRegistrantChangeCheckExtendedAttributesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.dataDnsimpleRegistrantChangeCheck.DataDnsimpleRegistrantChangeCheckExtendedAttributesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.dataDnsimpleRegistrantChangeCheck.DataDnsimpleRegistrantChangeCheckExtendedAttributesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.dataDnsimpleRegistrantChangeCheck.DataDnsimpleRegistrantChangeCheckExtendedAttributesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.dataDnsimpleRegistrantChangeCheck.DataDnsimpleRegistrantChangeCheckExtendedAttributesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.dataDnsimpleRegistrantChangeCheck.DataDnsimpleRegistrantChangeCheckExtendedAttributesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.dataDnsimpleRegistrantChangeCheck.DataDnsimpleRegistrantChangeCheckExtendedAttributesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.dataDnsimpleRegistrantChangeCheck.DataDnsimpleRegistrantChangeCheckExtendedAttributesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.dataDnsimpleRegistrantChangeCheck.DataDnsimpleRegistrantChangeCheckExtendedAttributesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.dataDnsimpleRegistrantChangeCheck.DataDnsimpleRegistrantChangeCheckExtendedAttributesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-dnsimple.dataDnsimpleRegistrantChangeCheck.DataDnsimpleRegistrantChangeCheckExtendedAttributesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-dnsimple.dataDnsimpleRegistrantChangeCheck.DataDnsimpleRegistrantChangeCheckExtendedAttributesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-dnsimple.dataDnsimpleRegistrantChangeCheck.DataDnsimpleRegistrantChangeCheckExtendedAttributesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-dnsimple.dataDnsimpleRegistrantChangeCheck.DataDnsimpleRegistrantChangeCheckExtendedAttributesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-dnsimple.dataDnsimpleRegistrantChangeCheck.DataDnsimpleRegistrantChangeCheckExtendedAttributesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-dnsimple.dataDnsimpleRegistrantChangeCheck.DataDnsimpleRegistrantChangeCheckExtendedAttributesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-dnsimple.dataDnsimpleRegistrantChangeCheck.DataDnsimpleRegistrantChangeCheckExtendedAttributesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-dnsimple.dataDnsimpleRegistrantChangeCheck.DataDnsimpleRegistrantChangeCheckExtendedAttributesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-dnsimple.dataDnsimpleRegistrantChangeCheck.DataDnsimpleRegistrantChangeCheckExtendedAttributesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-dnsimple.dataDnsimpleRegistrantChangeCheck.DataDnsimpleRegistrantChangeCheckExtendedAttributesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-dnsimple.dataDnsimpleRegistrantChangeCheck.DataDnsimpleRegistrantChangeCheckExtendedAttributesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-dnsimple.dataDnsimpleRegistrantChangeCheck.DataDnsimpleRegistrantChangeCheckExtendedAttributesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-dnsimple.dataDnsimpleRegistrantChangeCheck.DataDnsimpleRegistrantChangeCheckExtendedAttributesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-dnsimple.dataDnsimpleRegistrantChangeCheck.DataDnsimpleRegistrantChangeCheckExtendedAttributesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-dnsimple.dataDnsimpleRegistrantChangeCheck.DataDnsimpleRegistrantChangeCheckExtendedAttributesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-dnsimple.dataDnsimpleRegistrantChangeCheck.DataDnsimpleRegistrantChangeCheckExtendedAttributesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-dnsimple.dataDnsimpleRegistrantChangeCheck.DataDnsimpleRegistrantChangeCheckExtendedAttributesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-dnsimple.dataDnsimpleRegistrantChangeCheck.DataDnsimpleRegistrantChangeCheckExtendedAttributesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-dnsimple.dataDnsimpleRegistrantChangeCheck.DataDnsimpleRegistrantChangeCheckExtendedAttributesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-dnsimple.dataDnsimpleRegistrantChangeCheck.DataDnsimpleRegistrantChangeCheckExtendedAttributesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-dnsimple.dataDnsimpleRegistrantChangeCheck.DataDnsimpleRegistrantChangeCheckExtendedAttributesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-dnsimple.dataDnsimpleRegistrantChangeCheck.DataDnsimpleRegistrantChangeCheckExtendedAttributesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-dnsimple.dataDnsimpleRegistrantChangeCheck.DataDnsimpleRegistrantChangeCheckExtendedAttributesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-dnsimple.dataDnsimpleRegistrantChangeCheck.DataDnsimpleRegistrantChangeCheckExtendedAttributesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-dnsimple.dataDnsimpleRegistrantChangeCheck.DataDnsimpleRegistrantChangeCheckExtendedAttributesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-dnsimple.dataDnsimpleRegistrantChangeCheck.DataDnsimpleRegistrantChangeCheckExtendedAttributesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-dnsimple.dataDnsimpleRegistrantChangeCheck.DataDnsimpleRegistrantChangeCheckExtendedAttributesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.dataDnsimpleRegistrantChangeCheck.DataDnsimpleRegistrantChangeCheckExtendedAttributesOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.dataDnsimpleRegistrantChangeCheck.DataDnsimpleRegistrantChangeCheckExtendedAttributesOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.dataDnsimpleRegistrantChangeCheck.DataDnsimpleRegistrantChangeCheckExtendedAttributesOutputReference.property.options">options</a></code> | <code><a href="#@cdktf/provider-dnsimple.dataDnsimpleRegistrantChangeCheck.DataDnsimpleRegistrantChangeCheckExtendedAttributesOptionsList">DataDnsimpleRegistrantChangeCheckExtendedAttributesOptionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.dataDnsimpleRegistrantChangeCheck.DataDnsimpleRegistrantChangeCheckExtendedAttributesOutputReference.property.required">required</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.dataDnsimpleRegistrantChangeCheck.DataDnsimpleRegistrantChangeCheckExtendedAttributesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-dnsimple.dataDnsimpleRegistrantChangeCheck.DataDnsimpleRegistrantChangeCheckExtendedAttributes">DataDnsimpleRegistrantChangeCheckExtendedAttributes</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-dnsimple.dataDnsimpleRegistrantChangeCheck.DataDnsimpleRegistrantChangeCheckExtendedAttributesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-dnsimple.dataDnsimpleRegistrantChangeCheck.DataDnsimpleRegistrantChangeCheckExtendedAttributesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-dnsimple.dataDnsimpleRegistrantChangeCheck.DataDnsimpleRegistrantChangeCheckExtendedAttributesOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-dnsimple.dataDnsimpleRegistrantChangeCheck.DataDnsimpleRegistrantChangeCheckExtendedAttributesOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `options`<sup>Required</sup> <a name="options" id="@cdktf/provider-dnsimple.dataDnsimpleRegistrantChangeCheck.DataDnsimpleRegistrantChangeCheckExtendedAttributesOutputReference.property.options"></a>

```python
options: DataDnsimpleRegistrantChangeCheckExtendedAttributesOptionsList
```

- *Type:* <a href="#@cdktf/provider-dnsimple.dataDnsimpleRegistrantChangeCheck.DataDnsimpleRegistrantChangeCheckExtendedAttributesOptionsList">DataDnsimpleRegistrantChangeCheckExtendedAttributesOptionsList</a>

---

##### `required`<sup>Required</sup> <a name="required" id="@cdktf/provider-dnsimple.dataDnsimpleRegistrantChangeCheck.DataDnsimpleRegistrantChangeCheckExtendedAttributesOutputReference.property.required"></a>

```python
required: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-dnsimple.dataDnsimpleRegistrantChangeCheck.DataDnsimpleRegistrantChangeCheckExtendedAttributesOutputReference.property.internalValue"></a>

```python
internal_value: DataDnsimpleRegistrantChangeCheckExtendedAttributes
```

- *Type:* <a href="#@cdktf/provider-dnsimple.dataDnsimpleRegistrantChangeCheck.DataDnsimpleRegistrantChangeCheckExtendedAttributes">DataDnsimpleRegistrantChangeCheckExtendedAttributes</a>

---



