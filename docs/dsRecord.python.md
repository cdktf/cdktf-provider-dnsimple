# `dsRecord` Submodule <a name="`dsRecord` Submodule" id="@cdktf/provider-dnsimple.dsRecord"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DsRecord <a name="DsRecord" id="@cdktf/provider-dnsimple.dsRecord.DsRecord"></a>

Represents a {@link https://registry.terraform.io/providers/dnsimple/dnsimple/1.9.1/docs/resources/ds_record dnsimple_ds_record}.

#### Initializers <a name="Initializers" id="@cdktf/provider-dnsimple.dsRecord.DsRecord.Initializer"></a>

```python
from cdktf_cdktf_provider_dnsimple import ds_record

dsRecord.DsRecord(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  algorithm: str,
  domain: str,
  digest: str = None,
  digest_type: str = None,
  keytag: str = None,
  public_key: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-dnsimple.dsRecord.DsRecord.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-dnsimple.dsRecord.DsRecord.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-dnsimple.dsRecord.DsRecord.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.dsRecord.DsRecord.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.dsRecord.DsRecord.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.dsRecord.DsRecord.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.dsRecord.DsRecord.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.dsRecord.DsRecord.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.dsRecord.DsRecord.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.dsRecord.DsRecord.Initializer.parameter.algorithm">algorithm</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dnsimple/dnsimple/1.9.1/docs/resources/ds_record#algorithm DsRecord#algorithm}. |
| <code><a href="#@cdktf/provider-dnsimple.dsRecord.DsRecord.Initializer.parameter.domain">domain</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dnsimple/dnsimple/1.9.1/docs/resources/ds_record#domain DsRecord#domain}. |
| <code><a href="#@cdktf/provider-dnsimple.dsRecord.DsRecord.Initializer.parameter.digest">digest</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dnsimple/dnsimple/1.9.1/docs/resources/ds_record#digest DsRecord#digest}. |
| <code><a href="#@cdktf/provider-dnsimple.dsRecord.DsRecord.Initializer.parameter.digestType">digest_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dnsimple/dnsimple/1.9.1/docs/resources/ds_record#digest_type DsRecord#digest_type}. |
| <code><a href="#@cdktf/provider-dnsimple.dsRecord.DsRecord.Initializer.parameter.keytag">keytag</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dnsimple/dnsimple/1.9.1/docs/resources/ds_record#keytag DsRecord#keytag}. |
| <code><a href="#@cdktf/provider-dnsimple.dsRecord.DsRecord.Initializer.parameter.publicKey">public_key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dnsimple/dnsimple/1.9.1/docs/resources/ds_record#public_key DsRecord#public_key}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-dnsimple.dsRecord.DsRecord.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-dnsimple.dsRecord.DsRecord.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-dnsimple.dsRecord.DsRecord.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-dnsimple.dsRecord.DsRecord.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-dnsimple.dsRecord.DsRecord.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-dnsimple.dsRecord.DsRecord.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-dnsimple.dsRecord.DsRecord.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-dnsimple.dsRecord.DsRecord.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-dnsimple.dsRecord.DsRecord.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `algorithm`<sup>Required</sup> <a name="algorithm" id="@cdktf/provider-dnsimple.dsRecord.DsRecord.Initializer.parameter.algorithm"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dnsimple/dnsimple/1.9.1/docs/resources/ds_record#algorithm DsRecord#algorithm}.

---

##### `domain`<sup>Required</sup> <a name="domain" id="@cdktf/provider-dnsimple.dsRecord.DsRecord.Initializer.parameter.domain"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dnsimple/dnsimple/1.9.1/docs/resources/ds_record#domain DsRecord#domain}.

---

##### `digest`<sup>Optional</sup> <a name="digest" id="@cdktf/provider-dnsimple.dsRecord.DsRecord.Initializer.parameter.digest"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dnsimple/dnsimple/1.9.1/docs/resources/ds_record#digest DsRecord#digest}.

---

##### `digest_type`<sup>Optional</sup> <a name="digest_type" id="@cdktf/provider-dnsimple.dsRecord.DsRecord.Initializer.parameter.digestType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dnsimple/dnsimple/1.9.1/docs/resources/ds_record#digest_type DsRecord#digest_type}.

---

##### `keytag`<sup>Optional</sup> <a name="keytag" id="@cdktf/provider-dnsimple.dsRecord.DsRecord.Initializer.parameter.keytag"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dnsimple/dnsimple/1.9.1/docs/resources/ds_record#keytag DsRecord#keytag}.

---

##### `public_key`<sup>Optional</sup> <a name="public_key" id="@cdktf/provider-dnsimple.dsRecord.DsRecord.Initializer.parameter.publicKey"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dnsimple/dnsimple/1.9.1/docs/resources/ds_record#public_key DsRecord#public_key}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-dnsimple.dsRecord.DsRecord.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-dnsimple.dsRecord.DsRecord.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.dsRecord.DsRecord.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-dnsimple.dsRecord.DsRecord.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-dnsimple.dsRecord.DsRecord.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.dsRecord.DsRecord.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.dsRecord.DsRecord.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-dnsimple.dsRecord.DsRecord.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-dnsimple.dsRecord.DsRecord.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.dsRecord.DsRecord.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.dsRecord.DsRecord.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.dsRecord.DsRecord.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.dsRecord.DsRecord.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.dsRecord.DsRecord.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.dsRecord.DsRecord.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.dsRecord.DsRecord.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.dsRecord.DsRecord.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.dsRecord.DsRecord.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.dsRecord.DsRecord.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.dsRecord.DsRecord.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.dsRecord.DsRecord.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-dnsimple.dsRecord.DsRecord.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-dnsimple.dsRecord.DsRecord.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-dnsimple.dsRecord.DsRecord.resetDigest">reset_digest</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.dsRecord.DsRecord.resetDigestType">reset_digest_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.dsRecord.DsRecord.resetKeytag">reset_keytag</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.dsRecord.DsRecord.resetPublicKey">reset_public_key</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-dnsimple.dsRecord.DsRecord.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-dnsimple.dsRecord.DsRecord.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-dnsimple.dsRecord.DsRecord.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-dnsimple.dsRecord.DsRecord.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-dnsimple.dsRecord.DsRecord.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-dnsimple.dsRecord.DsRecord.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-dnsimple.dsRecord.DsRecord.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-dnsimple.dsRecord.DsRecord.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-dnsimple.dsRecord.DsRecord.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-dnsimple.dsRecord.DsRecord.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-dnsimple.dsRecord.DsRecord.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-dnsimple.dsRecord.DsRecord.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-dnsimple.dsRecord.DsRecord.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-dnsimple.dsRecord.DsRecord.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-dnsimple.dsRecord.DsRecord.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-dnsimple.dsRecord.DsRecord.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-dnsimple.dsRecord.DsRecord.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-dnsimple.dsRecord.DsRecord.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-dnsimple.dsRecord.DsRecord.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-dnsimple.dsRecord.DsRecord.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-dnsimple.dsRecord.DsRecord.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-dnsimple.dsRecord.DsRecord.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-dnsimple.dsRecord.DsRecord.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-dnsimple.dsRecord.DsRecord.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-dnsimple.dsRecord.DsRecord.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-dnsimple.dsRecord.DsRecord.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-dnsimple.dsRecord.DsRecord.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-dnsimple.dsRecord.DsRecord.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-dnsimple.dsRecord.DsRecord.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-dnsimple.dsRecord.DsRecord.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-dnsimple.dsRecord.DsRecord.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-dnsimple.dsRecord.DsRecord.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-dnsimple.dsRecord.DsRecord.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-dnsimple.dsRecord.DsRecord.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-dnsimple.dsRecord.DsRecord.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-dnsimple.dsRecord.DsRecord.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-dnsimple.dsRecord.DsRecord.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-dnsimple.dsRecord.DsRecord.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-dnsimple.dsRecord.DsRecord.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-dnsimple.dsRecord.DsRecord.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-dnsimple.dsRecord.DsRecord.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-dnsimple.dsRecord.DsRecord.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-dnsimple.dsRecord.DsRecord.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `reset_digest` <a name="reset_digest" id="@cdktf/provider-dnsimple.dsRecord.DsRecord.resetDigest"></a>

```python
def reset_digest() -> None
```

##### `reset_digest_type` <a name="reset_digest_type" id="@cdktf/provider-dnsimple.dsRecord.DsRecord.resetDigestType"></a>

```python
def reset_digest_type() -> None
```

##### `reset_keytag` <a name="reset_keytag" id="@cdktf/provider-dnsimple.dsRecord.DsRecord.resetKeytag"></a>

```python
def reset_keytag() -> None
```

##### `reset_public_key` <a name="reset_public_key" id="@cdktf/provider-dnsimple.dsRecord.DsRecord.resetPublicKey"></a>

```python
def reset_public_key() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-dnsimple.dsRecord.DsRecord.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-dnsimple.dsRecord.DsRecord.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.dsRecord.DsRecord.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.dsRecord.DsRecord.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DsRecord resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-dnsimple.dsRecord.DsRecord.isConstruct"></a>

```python
from cdktf_cdktf_provider_dnsimple import ds_record

dsRecord.DsRecord.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-dnsimple.dsRecord.DsRecord.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-dnsimple.dsRecord.DsRecord.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_dnsimple import ds_record

dsRecord.DsRecord.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-dnsimple.dsRecord.DsRecord.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-dnsimple.dsRecord.DsRecord.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_dnsimple import ds_record

dsRecord.DsRecord.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-dnsimple.dsRecord.DsRecord.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-dnsimple.dsRecord.DsRecord.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_dnsimple import ds_record

dsRecord.DsRecord.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DsRecord resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-dnsimple.dsRecord.DsRecord.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-dnsimple.dsRecord.DsRecord.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DsRecord to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-dnsimple.dsRecord.DsRecord.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DsRecord that should be imported.

Refer to the {@link https://registry.terraform.io/providers/dnsimple/dnsimple/1.9.1/docs/resources/ds_record#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-dnsimple.dsRecord.DsRecord.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DsRecord to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-dnsimple.dsRecord.DsRecord.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-dnsimple.dsRecord.DsRecord.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.dsRecord.DsRecord.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.dsRecord.DsRecord.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.dsRecord.DsRecord.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.dsRecord.DsRecord.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.dsRecord.DsRecord.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.dsRecord.DsRecord.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.dsRecord.DsRecord.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.dsRecord.DsRecord.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.dsRecord.DsRecord.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.dsRecord.DsRecord.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.dsRecord.DsRecord.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.dsRecord.DsRecord.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.dsRecord.DsRecord.property.createdAt">created_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.dsRecord.DsRecord.property.id">id</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.dsRecord.DsRecord.property.updatedAt">updated_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.dsRecord.DsRecord.property.algorithmInput">algorithm_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.dsRecord.DsRecord.property.digestInput">digest_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.dsRecord.DsRecord.property.digestTypeInput">digest_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.dsRecord.DsRecord.property.domainInput">domain_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.dsRecord.DsRecord.property.keytagInput">keytag_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.dsRecord.DsRecord.property.publicKeyInput">public_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.dsRecord.DsRecord.property.algorithm">algorithm</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.dsRecord.DsRecord.property.digest">digest</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.dsRecord.DsRecord.property.digestType">digest_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.dsRecord.DsRecord.property.domain">domain</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.dsRecord.DsRecord.property.keytag">keytag</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.dsRecord.DsRecord.property.publicKey">public_key</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-dnsimple.dsRecord.DsRecord.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-dnsimple.dsRecord.DsRecord.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-dnsimple.dsRecord.DsRecord.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-dnsimple.dsRecord.DsRecord.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-dnsimple.dsRecord.DsRecord.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-dnsimple.dsRecord.DsRecord.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-dnsimple.dsRecord.DsRecord.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-dnsimple.dsRecord.DsRecord.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-dnsimple.dsRecord.DsRecord.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-dnsimple.dsRecord.DsRecord.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-dnsimple.dsRecord.DsRecord.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-dnsimple.dsRecord.DsRecord.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-dnsimple.dsRecord.DsRecord.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-dnsimple.dsRecord.DsRecord.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `created_at`<sup>Required</sup> <a name="created_at" id="@cdktf/provider-dnsimple.dsRecord.DsRecord.property.createdAt"></a>

```python
created_at: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-dnsimple.dsRecord.DsRecord.property.id"></a>

```python
id: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `updated_at`<sup>Required</sup> <a name="updated_at" id="@cdktf/provider-dnsimple.dsRecord.DsRecord.property.updatedAt"></a>

```python
updated_at: str
```

- *Type:* str

---

##### `algorithm_input`<sup>Optional</sup> <a name="algorithm_input" id="@cdktf/provider-dnsimple.dsRecord.DsRecord.property.algorithmInput"></a>

```python
algorithm_input: str
```

- *Type:* str

---

##### `digest_input`<sup>Optional</sup> <a name="digest_input" id="@cdktf/provider-dnsimple.dsRecord.DsRecord.property.digestInput"></a>

```python
digest_input: str
```

- *Type:* str

---

##### `digest_type_input`<sup>Optional</sup> <a name="digest_type_input" id="@cdktf/provider-dnsimple.dsRecord.DsRecord.property.digestTypeInput"></a>

```python
digest_type_input: str
```

- *Type:* str

---

##### `domain_input`<sup>Optional</sup> <a name="domain_input" id="@cdktf/provider-dnsimple.dsRecord.DsRecord.property.domainInput"></a>

```python
domain_input: str
```

- *Type:* str

---

##### `keytag_input`<sup>Optional</sup> <a name="keytag_input" id="@cdktf/provider-dnsimple.dsRecord.DsRecord.property.keytagInput"></a>

```python
keytag_input: str
```

- *Type:* str

---

##### `public_key_input`<sup>Optional</sup> <a name="public_key_input" id="@cdktf/provider-dnsimple.dsRecord.DsRecord.property.publicKeyInput"></a>

```python
public_key_input: str
```

- *Type:* str

---

##### `algorithm`<sup>Required</sup> <a name="algorithm" id="@cdktf/provider-dnsimple.dsRecord.DsRecord.property.algorithm"></a>

```python
algorithm: str
```

- *Type:* str

---

##### `digest`<sup>Required</sup> <a name="digest" id="@cdktf/provider-dnsimple.dsRecord.DsRecord.property.digest"></a>

```python
digest: str
```

- *Type:* str

---

##### `digest_type`<sup>Required</sup> <a name="digest_type" id="@cdktf/provider-dnsimple.dsRecord.DsRecord.property.digestType"></a>

```python
digest_type: str
```

- *Type:* str

---

##### `domain`<sup>Required</sup> <a name="domain" id="@cdktf/provider-dnsimple.dsRecord.DsRecord.property.domain"></a>

```python
domain: str
```

- *Type:* str

---

##### `keytag`<sup>Required</sup> <a name="keytag" id="@cdktf/provider-dnsimple.dsRecord.DsRecord.property.keytag"></a>

```python
keytag: str
```

- *Type:* str

---

##### `public_key`<sup>Required</sup> <a name="public_key" id="@cdktf/provider-dnsimple.dsRecord.DsRecord.property.publicKey"></a>

```python
public_key: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-dnsimple.dsRecord.DsRecord.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-dnsimple.dsRecord.DsRecord.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DsRecordConfig <a name="DsRecordConfig" id="@cdktf/provider-dnsimple.dsRecord.DsRecordConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-dnsimple.dsRecord.DsRecordConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_dnsimple import ds_record

dsRecord.DsRecordConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  algorithm: str,
  domain: str,
  digest: str = None,
  digest_type: str = None,
  keytag: str = None,
  public_key: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-dnsimple.dsRecord.DsRecordConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.dsRecord.DsRecordConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.dsRecord.DsRecordConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.dsRecord.DsRecordConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.dsRecord.DsRecordConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.dsRecord.DsRecordConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.dsRecord.DsRecordConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.dsRecord.DsRecordConfig.property.algorithm">algorithm</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dnsimple/dnsimple/1.9.1/docs/resources/ds_record#algorithm DsRecord#algorithm}. |
| <code><a href="#@cdktf/provider-dnsimple.dsRecord.DsRecordConfig.property.domain">domain</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dnsimple/dnsimple/1.9.1/docs/resources/ds_record#domain DsRecord#domain}. |
| <code><a href="#@cdktf/provider-dnsimple.dsRecord.DsRecordConfig.property.digest">digest</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dnsimple/dnsimple/1.9.1/docs/resources/ds_record#digest DsRecord#digest}. |
| <code><a href="#@cdktf/provider-dnsimple.dsRecord.DsRecordConfig.property.digestType">digest_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dnsimple/dnsimple/1.9.1/docs/resources/ds_record#digest_type DsRecord#digest_type}. |
| <code><a href="#@cdktf/provider-dnsimple.dsRecord.DsRecordConfig.property.keytag">keytag</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dnsimple/dnsimple/1.9.1/docs/resources/ds_record#keytag DsRecord#keytag}. |
| <code><a href="#@cdktf/provider-dnsimple.dsRecord.DsRecordConfig.property.publicKey">public_key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dnsimple/dnsimple/1.9.1/docs/resources/ds_record#public_key DsRecord#public_key}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-dnsimple.dsRecord.DsRecordConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-dnsimple.dsRecord.DsRecordConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-dnsimple.dsRecord.DsRecordConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-dnsimple.dsRecord.DsRecordConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-dnsimple.dsRecord.DsRecordConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-dnsimple.dsRecord.DsRecordConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-dnsimple.dsRecord.DsRecordConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `algorithm`<sup>Required</sup> <a name="algorithm" id="@cdktf/provider-dnsimple.dsRecord.DsRecordConfig.property.algorithm"></a>

```python
algorithm: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dnsimple/dnsimple/1.9.1/docs/resources/ds_record#algorithm DsRecord#algorithm}.

---

##### `domain`<sup>Required</sup> <a name="domain" id="@cdktf/provider-dnsimple.dsRecord.DsRecordConfig.property.domain"></a>

```python
domain: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dnsimple/dnsimple/1.9.1/docs/resources/ds_record#domain DsRecord#domain}.

---

##### `digest`<sup>Optional</sup> <a name="digest" id="@cdktf/provider-dnsimple.dsRecord.DsRecordConfig.property.digest"></a>

```python
digest: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dnsimple/dnsimple/1.9.1/docs/resources/ds_record#digest DsRecord#digest}.

---

##### `digest_type`<sup>Optional</sup> <a name="digest_type" id="@cdktf/provider-dnsimple.dsRecord.DsRecordConfig.property.digestType"></a>

```python
digest_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dnsimple/dnsimple/1.9.1/docs/resources/ds_record#digest_type DsRecord#digest_type}.

---

##### `keytag`<sup>Optional</sup> <a name="keytag" id="@cdktf/provider-dnsimple.dsRecord.DsRecordConfig.property.keytag"></a>

```python
keytag: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dnsimple/dnsimple/1.9.1/docs/resources/ds_record#keytag DsRecord#keytag}.

---

##### `public_key`<sup>Optional</sup> <a name="public_key" id="@cdktf/provider-dnsimple.dsRecord.DsRecordConfig.property.publicKey"></a>

```python
public_key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dnsimple/dnsimple/1.9.1/docs/resources/ds_record#public_key DsRecord#public_key}.

---



