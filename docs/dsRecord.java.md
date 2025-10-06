# `dsRecord` Submodule <a name="`dsRecord` Submodule" id="@cdktf/provider-dnsimple.dsRecord"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DsRecord <a name="DsRecord" id="@cdktf/provider-dnsimple.dsRecord.DsRecord"></a>

Represents a {@link https://registry.terraform.io/providers/dnsimple/dnsimple/1.10.0/docs/resources/ds_record dnsimple_ds_record}.

#### Initializers <a name="Initializers" id="@cdktf/provider-dnsimple.dsRecord.DsRecord.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.dnsimple.ds_record.DsRecord;

DsRecord.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .algorithm(java.lang.String)
    .domain(java.lang.String)
//  .digest(java.lang.String)
//  .digestType(java.lang.String)
//  .keytag(java.lang.String)
//  .publicKey(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-dnsimple.dsRecord.DsRecord.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-dnsimple.dsRecord.DsRecord.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-dnsimple.dsRecord.DsRecord.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection\|com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.dsRecord.DsRecord.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.dsRecord.DsRecord.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.dsRecord.DsRecord.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.dsRecord.DsRecord.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.dsRecord.DsRecord.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.dsRecord.DsRecord.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner\|com.hashicorp.cdktf.LocalExecProvisioner\|com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.dsRecord.DsRecord.Initializer.parameter.algorithm">algorithm</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dnsimple/dnsimple/1.10.0/docs/resources/ds_record#algorithm DsRecord#algorithm}. |
| <code><a href="#@cdktf/provider-dnsimple.dsRecord.DsRecord.Initializer.parameter.domain">domain</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dnsimple/dnsimple/1.10.0/docs/resources/ds_record#domain DsRecord#domain}. |
| <code><a href="#@cdktf/provider-dnsimple.dsRecord.DsRecord.Initializer.parameter.digest">digest</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dnsimple/dnsimple/1.10.0/docs/resources/ds_record#digest DsRecord#digest}. |
| <code><a href="#@cdktf/provider-dnsimple.dsRecord.DsRecord.Initializer.parameter.digestType">digestType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dnsimple/dnsimple/1.10.0/docs/resources/ds_record#digest_type DsRecord#digest_type}. |
| <code><a href="#@cdktf/provider-dnsimple.dsRecord.DsRecord.Initializer.parameter.keytag">keytag</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dnsimple/dnsimple/1.10.0/docs/resources/ds_record#keytag DsRecord#keytag}. |
| <code><a href="#@cdktf/provider-dnsimple.dsRecord.DsRecord.Initializer.parameter.publicKey">publicKey</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dnsimple/dnsimple/1.10.0/docs/resources/ds_record#public_key DsRecord#public_key}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-dnsimple.dsRecord.DsRecord.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-dnsimple.dsRecord.DsRecord.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-dnsimple.dsRecord.DsRecord.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection|com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-dnsimple.dsRecord.DsRecord.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-dnsimple.dsRecord.DsRecord.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-dnsimple.dsRecord.DsRecord.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-dnsimple.dsRecord.DsRecord.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-dnsimple.dsRecord.DsRecord.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-dnsimple.dsRecord.DsRecord.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner|com.hashicorp.cdktf.LocalExecProvisioner|com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `algorithm`<sup>Required</sup> <a name="algorithm" id="@cdktf/provider-dnsimple.dsRecord.DsRecord.Initializer.parameter.algorithm"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dnsimple/dnsimple/1.10.0/docs/resources/ds_record#algorithm DsRecord#algorithm}.

---

##### `domain`<sup>Required</sup> <a name="domain" id="@cdktf/provider-dnsimple.dsRecord.DsRecord.Initializer.parameter.domain"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dnsimple/dnsimple/1.10.0/docs/resources/ds_record#domain DsRecord#domain}.

---

##### `digest`<sup>Optional</sup> <a name="digest" id="@cdktf/provider-dnsimple.dsRecord.DsRecord.Initializer.parameter.digest"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dnsimple/dnsimple/1.10.0/docs/resources/ds_record#digest DsRecord#digest}.

---

##### `digestType`<sup>Optional</sup> <a name="digestType" id="@cdktf/provider-dnsimple.dsRecord.DsRecord.Initializer.parameter.digestType"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dnsimple/dnsimple/1.10.0/docs/resources/ds_record#digest_type DsRecord#digest_type}.

---

##### `keytag`<sup>Optional</sup> <a name="keytag" id="@cdktf/provider-dnsimple.dsRecord.DsRecord.Initializer.parameter.keytag"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dnsimple/dnsimple/1.10.0/docs/resources/ds_record#keytag DsRecord#keytag}.

---

##### `publicKey`<sup>Optional</sup> <a name="publicKey" id="@cdktf/provider-dnsimple.dsRecord.DsRecord.Initializer.parameter.publicKey"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dnsimple/dnsimple/1.10.0/docs/resources/ds_record#public_key DsRecord#public_key}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-dnsimple.dsRecord.DsRecord.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-dnsimple.dsRecord.DsRecord.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.dsRecord.DsRecord.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-dnsimple.dsRecord.DsRecord.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-dnsimple.dsRecord.DsRecord.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.dsRecord.DsRecord.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.dsRecord.DsRecord.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-dnsimple.dsRecord.DsRecord.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-dnsimple.dsRecord.DsRecord.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.dsRecord.DsRecord.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.dsRecord.DsRecord.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.dsRecord.DsRecord.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.dsRecord.DsRecord.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.dsRecord.DsRecord.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.dsRecord.DsRecord.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.dsRecord.DsRecord.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.dsRecord.DsRecord.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.dsRecord.DsRecord.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.dsRecord.DsRecord.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.dsRecord.DsRecord.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.dsRecord.DsRecord.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-dnsimple.dsRecord.DsRecord.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-dnsimple.dsRecord.DsRecord.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-dnsimple.dsRecord.DsRecord.resetDigest">resetDigest</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.dsRecord.DsRecord.resetDigestType">resetDigestType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.dsRecord.DsRecord.resetKeytag">resetKeytag</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.dsRecord.DsRecord.resetPublicKey">resetPublicKey</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-dnsimple.dsRecord.DsRecord.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-dnsimple.dsRecord.DsRecord.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-dnsimple.dsRecord.DsRecord.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-dnsimple.dsRecord.DsRecord.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-dnsimple.dsRecord.DsRecord.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-dnsimple.dsRecord.DsRecord.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-dnsimple.dsRecord.DsRecord.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-dnsimple.dsRecord.DsRecord.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-dnsimple.dsRecord.DsRecord.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-dnsimple.dsRecord.DsRecord.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-dnsimple.dsRecord.DsRecord.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-dnsimple.dsRecord.DsRecord.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-dnsimple.dsRecord.DsRecord.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-dnsimple.dsRecord.DsRecord.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-dnsimple.dsRecord.DsRecord.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-dnsimple.dsRecord.DsRecord.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-dnsimple.dsRecord.DsRecord.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-dnsimple.dsRecord.DsRecord.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-dnsimple.dsRecord.DsRecord.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-dnsimple.dsRecord.DsRecord.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-dnsimple.dsRecord.DsRecord.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-dnsimple.dsRecord.DsRecord.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-dnsimple.dsRecord.DsRecord.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-dnsimple.dsRecord.DsRecord.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-dnsimple.dsRecord.DsRecord.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-dnsimple.dsRecord.DsRecord.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-dnsimple.dsRecord.DsRecord.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-dnsimple.dsRecord.DsRecord.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-dnsimple.dsRecord.DsRecord.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-dnsimple.dsRecord.DsRecord.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-dnsimple.dsRecord.DsRecord.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-dnsimple.dsRecord.DsRecord.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-dnsimple.dsRecord.DsRecord.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-dnsimple.dsRecord.DsRecord.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-dnsimple.dsRecord.DsRecord.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-dnsimple.dsRecord.DsRecord.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-dnsimple.dsRecord.DsRecord.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-dnsimple.dsRecord.DsRecord.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-dnsimple.dsRecord.DsRecord.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-dnsimple.dsRecord.DsRecord.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-dnsimple.dsRecord.DsRecord.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-dnsimple.dsRecord.DsRecord.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-dnsimple.dsRecord.DsRecord.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetDigest` <a name="resetDigest" id="@cdktf/provider-dnsimple.dsRecord.DsRecord.resetDigest"></a>

```java
public void resetDigest()
```

##### `resetDigestType` <a name="resetDigestType" id="@cdktf/provider-dnsimple.dsRecord.DsRecord.resetDigestType"></a>

```java
public void resetDigestType()
```

##### `resetKeytag` <a name="resetKeytag" id="@cdktf/provider-dnsimple.dsRecord.DsRecord.resetKeytag"></a>

```java
public void resetKeytag()
```

##### `resetPublicKey` <a name="resetPublicKey" id="@cdktf/provider-dnsimple.dsRecord.DsRecord.resetPublicKey"></a>

```java
public void resetPublicKey()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-dnsimple.dsRecord.DsRecord.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-dnsimple.dsRecord.DsRecord.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.dsRecord.DsRecord.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.dsRecord.DsRecord.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DsRecord resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-dnsimple.dsRecord.DsRecord.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.dnsimple.ds_record.DsRecord;

DsRecord.isConstruct(java.lang.Object x)
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

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-dnsimple.dsRecord.DsRecord.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.dnsimple.ds_record.DsRecord;

DsRecord.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-dnsimple.dsRecord.DsRecord.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-dnsimple.dsRecord.DsRecord.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.dnsimple.ds_record.DsRecord;

DsRecord.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-dnsimple.dsRecord.DsRecord.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-dnsimple.dsRecord.DsRecord.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.dnsimple.ds_record.DsRecord;

DsRecord.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DsRecord.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DsRecord resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-dnsimple.dsRecord.DsRecord.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-dnsimple.dsRecord.DsRecord.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DsRecord to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-dnsimple.dsRecord.DsRecord.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DsRecord that should be imported.

Refer to the {@link https://registry.terraform.io/providers/dnsimple/dnsimple/1.10.0/docs/resources/ds_record#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-dnsimple.dsRecord.DsRecord.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DsRecord to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-dnsimple.dsRecord.DsRecord.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-dnsimple.dsRecord.DsRecord.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.dsRecord.DsRecord.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.dsRecord.DsRecord.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.dsRecord.DsRecord.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.dsRecord.DsRecord.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.dsRecord.DsRecord.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.dsRecord.DsRecord.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection\|com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.dsRecord.DsRecord.property.count">count</a></code> | <code>java.lang.Number\|com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.dsRecord.DsRecord.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.dsRecord.DsRecord.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.dsRecord.DsRecord.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.dsRecord.DsRecord.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.dsRecord.DsRecord.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner\|com.hashicorp.cdktf.LocalExecProvisioner\|com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.dsRecord.DsRecord.property.createdAt">createdAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.dsRecord.DsRecord.property.id">id</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.dsRecord.DsRecord.property.updatedAt">updatedAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.dsRecord.DsRecord.property.algorithmInput">algorithmInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.dsRecord.DsRecord.property.digestInput">digestInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.dsRecord.DsRecord.property.digestTypeInput">digestTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.dsRecord.DsRecord.property.domainInput">domainInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.dsRecord.DsRecord.property.keytagInput">keytagInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.dsRecord.DsRecord.property.publicKeyInput">publicKeyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.dsRecord.DsRecord.property.algorithm">algorithm</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.dsRecord.DsRecord.property.digest">digest</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.dsRecord.DsRecord.property.digestType">digestType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.dsRecord.DsRecord.property.domain">domain</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.dsRecord.DsRecord.property.keytag">keytag</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.dsRecord.DsRecord.property.publicKey">publicKey</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-dnsimple.dsRecord.DsRecord.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-dnsimple.dsRecord.DsRecord.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-dnsimple.dsRecord.DsRecord.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-dnsimple.dsRecord.DsRecord.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-dnsimple.dsRecord.DsRecord.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-dnsimple.dsRecord.DsRecord.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-dnsimple.dsRecord.DsRecord.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-dnsimple.dsRecord.DsRecord.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection|com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-dnsimple.dsRecord.DsRecord.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-dnsimple.dsRecord.DsRecord.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-dnsimple.dsRecord.DsRecord.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-dnsimple.dsRecord.DsRecord.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-dnsimple.dsRecord.DsRecord.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-dnsimple.dsRecord.DsRecord.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner|com.hashicorp.cdktf.LocalExecProvisioner|com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktf/provider-dnsimple.dsRecord.DsRecord.property.createdAt"></a>

```java
public java.lang.String getCreatedAt();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-dnsimple.dsRecord.DsRecord.property.id"></a>

```java
public java.lang.Number getId();
```

- *Type:* java.lang.Number

---

##### `updatedAt`<sup>Required</sup> <a name="updatedAt" id="@cdktf/provider-dnsimple.dsRecord.DsRecord.property.updatedAt"></a>

```java
public java.lang.String getUpdatedAt();
```

- *Type:* java.lang.String

---

##### `algorithmInput`<sup>Optional</sup> <a name="algorithmInput" id="@cdktf/provider-dnsimple.dsRecord.DsRecord.property.algorithmInput"></a>

```java
public java.lang.String getAlgorithmInput();
```

- *Type:* java.lang.String

---

##### `digestInput`<sup>Optional</sup> <a name="digestInput" id="@cdktf/provider-dnsimple.dsRecord.DsRecord.property.digestInput"></a>

```java
public java.lang.String getDigestInput();
```

- *Type:* java.lang.String

---

##### `digestTypeInput`<sup>Optional</sup> <a name="digestTypeInput" id="@cdktf/provider-dnsimple.dsRecord.DsRecord.property.digestTypeInput"></a>

```java
public java.lang.String getDigestTypeInput();
```

- *Type:* java.lang.String

---

##### `domainInput`<sup>Optional</sup> <a name="domainInput" id="@cdktf/provider-dnsimple.dsRecord.DsRecord.property.domainInput"></a>

```java
public java.lang.String getDomainInput();
```

- *Type:* java.lang.String

---

##### `keytagInput`<sup>Optional</sup> <a name="keytagInput" id="@cdktf/provider-dnsimple.dsRecord.DsRecord.property.keytagInput"></a>

```java
public java.lang.String getKeytagInput();
```

- *Type:* java.lang.String

---

##### `publicKeyInput`<sup>Optional</sup> <a name="publicKeyInput" id="@cdktf/provider-dnsimple.dsRecord.DsRecord.property.publicKeyInput"></a>

```java
public java.lang.String getPublicKeyInput();
```

- *Type:* java.lang.String

---

##### `algorithm`<sup>Required</sup> <a name="algorithm" id="@cdktf/provider-dnsimple.dsRecord.DsRecord.property.algorithm"></a>

```java
public java.lang.String getAlgorithm();
```

- *Type:* java.lang.String

---

##### `digest`<sup>Required</sup> <a name="digest" id="@cdktf/provider-dnsimple.dsRecord.DsRecord.property.digest"></a>

```java
public java.lang.String getDigest();
```

- *Type:* java.lang.String

---

##### `digestType`<sup>Required</sup> <a name="digestType" id="@cdktf/provider-dnsimple.dsRecord.DsRecord.property.digestType"></a>

```java
public java.lang.String getDigestType();
```

- *Type:* java.lang.String

---

##### `domain`<sup>Required</sup> <a name="domain" id="@cdktf/provider-dnsimple.dsRecord.DsRecord.property.domain"></a>

```java
public java.lang.String getDomain();
```

- *Type:* java.lang.String

---

##### `keytag`<sup>Required</sup> <a name="keytag" id="@cdktf/provider-dnsimple.dsRecord.DsRecord.property.keytag"></a>

```java
public java.lang.String getKeytag();
```

- *Type:* java.lang.String

---

##### `publicKey`<sup>Required</sup> <a name="publicKey" id="@cdktf/provider-dnsimple.dsRecord.DsRecord.property.publicKey"></a>

```java
public java.lang.String getPublicKey();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-dnsimple.dsRecord.DsRecord.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-dnsimple.dsRecord.DsRecord.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DsRecordConfig <a name="DsRecordConfig" id="@cdktf/provider-dnsimple.dsRecord.DsRecordConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-dnsimple.dsRecord.DsRecordConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.dnsimple.ds_record.DsRecordConfig;

DsRecordConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .algorithm(java.lang.String)
    .domain(java.lang.String)
//  .digest(java.lang.String)
//  .digestType(java.lang.String)
//  .keytag(java.lang.String)
//  .publicKey(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-dnsimple.dsRecord.DsRecordConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection\|com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.dsRecord.DsRecordConfig.property.count">count</a></code> | <code>java.lang.Number\|com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.dsRecord.DsRecordConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.dsRecord.DsRecordConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.dsRecord.DsRecordConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.dsRecord.DsRecordConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.dsRecord.DsRecordConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner\|com.hashicorp.cdktf.LocalExecProvisioner\|com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.dsRecord.DsRecordConfig.property.algorithm">algorithm</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dnsimple/dnsimple/1.10.0/docs/resources/ds_record#algorithm DsRecord#algorithm}. |
| <code><a href="#@cdktf/provider-dnsimple.dsRecord.DsRecordConfig.property.domain">domain</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dnsimple/dnsimple/1.10.0/docs/resources/ds_record#domain DsRecord#domain}. |
| <code><a href="#@cdktf/provider-dnsimple.dsRecord.DsRecordConfig.property.digest">digest</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dnsimple/dnsimple/1.10.0/docs/resources/ds_record#digest DsRecord#digest}. |
| <code><a href="#@cdktf/provider-dnsimple.dsRecord.DsRecordConfig.property.digestType">digestType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dnsimple/dnsimple/1.10.0/docs/resources/ds_record#digest_type DsRecord#digest_type}. |
| <code><a href="#@cdktf/provider-dnsimple.dsRecord.DsRecordConfig.property.keytag">keytag</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dnsimple/dnsimple/1.10.0/docs/resources/ds_record#keytag DsRecord#keytag}. |
| <code><a href="#@cdktf/provider-dnsimple.dsRecord.DsRecordConfig.property.publicKey">publicKey</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dnsimple/dnsimple/1.10.0/docs/resources/ds_record#public_key DsRecord#public_key}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-dnsimple.dsRecord.DsRecordConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection|com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-dnsimple.dsRecord.DsRecordConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-dnsimple.dsRecord.DsRecordConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-dnsimple.dsRecord.DsRecordConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-dnsimple.dsRecord.DsRecordConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-dnsimple.dsRecord.DsRecordConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-dnsimple.dsRecord.DsRecordConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner|com.hashicorp.cdktf.LocalExecProvisioner|com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `algorithm`<sup>Required</sup> <a name="algorithm" id="@cdktf/provider-dnsimple.dsRecord.DsRecordConfig.property.algorithm"></a>

```java
public java.lang.String getAlgorithm();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dnsimple/dnsimple/1.10.0/docs/resources/ds_record#algorithm DsRecord#algorithm}.

---

##### `domain`<sup>Required</sup> <a name="domain" id="@cdktf/provider-dnsimple.dsRecord.DsRecordConfig.property.domain"></a>

```java
public java.lang.String getDomain();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dnsimple/dnsimple/1.10.0/docs/resources/ds_record#domain DsRecord#domain}.

---

##### `digest`<sup>Optional</sup> <a name="digest" id="@cdktf/provider-dnsimple.dsRecord.DsRecordConfig.property.digest"></a>

```java
public java.lang.String getDigest();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dnsimple/dnsimple/1.10.0/docs/resources/ds_record#digest DsRecord#digest}.

---

##### `digestType`<sup>Optional</sup> <a name="digestType" id="@cdktf/provider-dnsimple.dsRecord.DsRecordConfig.property.digestType"></a>

```java
public java.lang.String getDigestType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dnsimple/dnsimple/1.10.0/docs/resources/ds_record#digest_type DsRecord#digest_type}.

---

##### `keytag`<sup>Optional</sup> <a name="keytag" id="@cdktf/provider-dnsimple.dsRecord.DsRecordConfig.property.keytag"></a>

```java
public java.lang.String getKeytag();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dnsimple/dnsimple/1.10.0/docs/resources/ds_record#keytag DsRecord#keytag}.

---

##### `publicKey`<sup>Optional</sup> <a name="publicKey" id="@cdktf/provider-dnsimple.dsRecord.DsRecordConfig.property.publicKey"></a>

```java
public java.lang.String getPublicKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dnsimple/dnsimple/1.10.0/docs/resources/ds_record#public_key DsRecord#public_key}.

---



