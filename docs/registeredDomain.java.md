# `dnsimple_registered_domain`

Refer to the Terraform Registory for docs: [`dnsimple_registered_domain`](https://registry.terraform.io/providers/dnsimple/dnsimple/1.2.0/docs/resources/registered_domain).

# `registeredDomain` Submodule <a name="`registeredDomain` Submodule" id="@cdktf/provider-dnsimple.registeredDomain"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### RegisteredDomain <a name="RegisteredDomain" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain"></a>

Represents a {@link https://registry.terraform.io/providers/dnsimple/dnsimple/1.2.0/docs/resources/registered_domain dnsimple_registered_domain}.

#### Initializers <a name="Initializers" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.dnsimple.registered_domain.RegisteredDomain;

RegisteredDomain.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .contactId(java.lang.Number)
    .name(java.lang.String)
//  .autoRenewEnabled(java.lang.Boolean)
//  .autoRenewEnabled(IResolvable)
//  .dnssecEnabled(java.lang.Boolean)
//  .dnssecEnabled(IResolvable)
//  .extendedAttributes(java.util.Map<java.lang.String, java.lang.String>)
//  .premiumPrice(java.lang.String)
//  .timeouts(RegisteredDomainTimeouts)
//  .transferLockEnabled(java.lang.Boolean)
//  .transferLockEnabled(IResolvable)
//  .whoisPrivacyEnabled(java.lang.Boolean)
//  .whoisPrivacyEnabled(IResolvable)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.Initializer.parameter.contactId">contactId</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dnsimple/dnsimple/1.2.0/docs/resources/registered_domain#contact_id RegisteredDomain#contact_id}. |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dnsimple/dnsimple/1.2.0/docs/resources/registered_domain#name RegisteredDomain#name}. |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.Initializer.parameter.autoRenewEnabled">autoRenewEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dnsimple/dnsimple/1.2.0/docs/resources/registered_domain#auto_renew_enabled RegisteredDomain#auto_renew_enabled}. |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.Initializer.parameter.dnssecEnabled">dnssecEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dnsimple/dnsimple/1.2.0/docs/resources/registered_domain#dnssec_enabled RegisteredDomain#dnssec_enabled}. |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.Initializer.parameter.extendedAttributes">extendedAttributes</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dnsimple/dnsimple/1.2.0/docs/resources/registered_domain#extended_attributes RegisteredDomain#extended_attributes}. |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.Initializer.parameter.premiumPrice">premiumPrice</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dnsimple/dnsimple/1.2.0/docs/resources/registered_domain#premium_price RegisteredDomain#premium_price}. |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainTimeouts">RegisteredDomainTimeouts</a></code> | Timeouts for operations, given as a parsable string as in `10m` or `30s`. |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.Initializer.parameter.transferLockEnabled">transferLockEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dnsimple/dnsimple/1.2.0/docs/resources/registered_domain#transfer_lock_enabled RegisteredDomain#transfer_lock_enabled}. |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.Initializer.parameter.whoisPrivacyEnabled">whoisPrivacyEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dnsimple/dnsimple/1.2.0/docs/resources/registered_domain#whois_privacy_enabled RegisteredDomain#whois_privacy_enabled}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `contactId`<sup>Required</sup> <a name="contactId" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.Initializer.parameter.contactId"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dnsimple/dnsimple/1.2.0/docs/resources/registered_domain#contact_id RegisteredDomain#contact_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dnsimple/dnsimple/1.2.0/docs/resources/registered_domain#name RegisteredDomain#name}.

---

##### `autoRenewEnabled`<sup>Optional</sup> <a name="autoRenewEnabled" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.Initializer.parameter.autoRenewEnabled"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dnsimple/dnsimple/1.2.0/docs/resources/registered_domain#auto_renew_enabled RegisteredDomain#auto_renew_enabled}.

---

##### `dnssecEnabled`<sup>Optional</sup> <a name="dnssecEnabled" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.Initializer.parameter.dnssecEnabled"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dnsimple/dnsimple/1.2.0/docs/resources/registered_domain#dnssec_enabled RegisteredDomain#dnssec_enabled}.

---

##### `extendedAttributes`<sup>Optional</sup> <a name="extendedAttributes" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.Initializer.parameter.extendedAttributes"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dnsimple/dnsimple/1.2.0/docs/resources/registered_domain#extended_attributes RegisteredDomain#extended_attributes}.

---

##### `premiumPrice`<sup>Optional</sup> <a name="premiumPrice" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.Initializer.parameter.premiumPrice"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dnsimple/dnsimple/1.2.0/docs/resources/registered_domain#premium_price RegisteredDomain#premium_price}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainTimeouts">RegisteredDomainTimeouts</a>

Timeouts for operations, given as a parsable string as in `10m` or `30s`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dnsimple/dnsimple/1.2.0/docs/resources/registered_domain#timeouts RegisteredDomain#timeouts}

---

##### `transferLockEnabled`<sup>Optional</sup> <a name="transferLockEnabled" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.Initializer.parameter.transferLockEnabled"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dnsimple/dnsimple/1.2.0/docs/resources/registered_domain#transfer_lock_enabled RegisteredDomain#transfer_lock_enabled}.

---

##### `whoisPrivacyEnabled`<sup>Optional</sup> <a name="whoisPrivacyEnabled" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.Initializer.parameter.whoisPrivacyEnabled"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dnsimple/dnsimple/1.2.0/docs/resources/registered_domain#whois_privacy_enabled RegisteredDomain#whois_privacy_enabled}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.resetAutoRenewEnabled">resetAutoRenewEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.resetDnssecEnabled">resetDnssecEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.resetExtendedAttributes">resetExtendedAttributes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.resetPremiumPrice">resetPremiumPrice</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.resetTransferLockEnabled">resetTransferLockEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.resetWhoisPrivacyEnabled">resetWhoisPrivacyEnabled</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.putTimeouts"></a>

```java
public void putTimeouts(RegisteredDomainTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainTimeouts">RegisteredDomainTimeouts</a>

---

##### `resetAutoRenewEnabled` <a name="resetAutoRenewEnabled" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.resetAutoRenewEnabled"></a>

```java
public void resetAutoRenewEnabled()
```

##### `resetDnssecEnabled` <a name="resetDnssecEnabled" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.resetDnssecEnabled"></a>

```java
public void resetDnssecEnabled()
```

##### `resetExtendedAttributes` <a name="resetExtendedAttributes" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.resetExtendedAttributes"></a>

```java
public void resetExtendedAttributes()
```

##### `resetPremiumPrice` <a name="resetPremiumPrice" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.resetPremiumPrice"></a>

```java
public void resetPremiumPrice()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.resetTimeouts"></a>

```java
public void resetTimeouts()
```

##### `resetTransferLockEnabled` <a name="resetTransferLockEnabled" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.resetTransferLockEnabled"></a>

```java
public void resetTransferLockEnabled()
```

##### `resetWhoisPrivacyEnabled` <a name="resetWhoisPrivacyEnabled" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.resetWhoisPrivacyEnabled"></a>

```java
public void resetWhoisPrivacyEnabled()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.dnsimple.registered_domain.RegisteredDomain;

RegisteredDomain.isConstruct(java.lang.Object x)
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

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.dnsimple.registered_domain.RegisteredDomain;

RegisteredDomain.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.dnsimple.registered_domain.RegisteredDomain;

RegisteredDomain.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.property.accountId">accountId</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.property.domainRegistration">domainRegistration</a></code> | <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainDomainRegistrationOutputReference">RegisteredDomainDomainRegistrationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.property.expiresAt">expiresAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.property.id">id</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainTimeoutsOutputReference">RegisteredDomainTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.property.unicodeName">unicodeName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.property.autoRenewEnabledInput">autoRenewEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.property.contactIdInput">contactIdInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.property.dnssecEnabledInput">dnssecEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.property.extendedAttributesInput">extendedAttributesInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.property.premiumPriceInput">premiumPriceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainTimeouts">RegisteredDomainTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.property.transferLockEnabledInput">transferLockEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.property.whoisPrivacyEnabledInput">whoisPrivacyEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.property.autoRenewEnabled">autoRenewEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.property.contactId">contactId</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.property.dnssecEnabled">dnssecEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.property.extendedAttributes">extendedAttributes</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.property.premiumPrice">premiumPrice</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.property.transferLockEnabled">transferLockEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.property.whoisPrivacyEnabled">whoisPrivacyEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.property.accountId"></a>

```java
public java.lang.Number getAccountId();
```

- *Type:* java.lang.Number

---

##### `domainRegistration`<sup>Required</sup> <a name="domainRegistration" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.property.domainRegistration"></a>

```java
public RegisteredDomainDomainRegistrationOutputReference getDomainRegistration();
```

- *Type:* <a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainDomainRegistrationOutputReference">RegisteredDomainDomainRegistrationOutputReference</a>

---

##### `expiresAt`<sup>Required</sup> <a name="expiresAt" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.property.expiresAt"></a>

```java
public java.lang.String getExpiresAt();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.property.id"></a>

```java
public java.lang.Number getId();
```

- *Type:* java.lang.Number

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.property.timeouts"></a>

```java
public RegisteredDomainTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainTimeoutsOutputReference">RegisteredDomainTimeoutsOutputReference</a>

---

##### `unicodeName`<sup>Required</sup> <a name="unicodeName" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.property.unicodeName"></a>

```java
public java.lang.String getUnicodeName();
```

- *Type:* java.lang.String

---

##### `autoRenewEnabledInput`<sup>Optional</sup> <a name="autoRenewEnabledInput" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.property.autoRenewEnabledInput"></a>

```java
public java.lang.Object getAutoRenewEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `contactIdInput`<sup>Optional</sup> <a name="contactIdInput" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.property.contactIdInput"></a>

```java
public java.lang.Number getContactIdInput();
```

- *Type:* java.lang.Number

---

##### `dnssecEnabledInput`<sup>Optional</sup> <a name="dnssecEnabledInput" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.property.dnssecEnabledInput"></a>

```java
public java.lang.Object getDnssecEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `extendedAttributesInput`<sup>Optional</sup> <a name="extendedAttributesInput" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.property.extendedAttributesInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getExtendedAttributesInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `premiumPriceInput`<sup>Optional</sup> <a name="premiumPriceInput" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.property.premiumPriceInput"></a>

```java
public java.lang.String getPremiumPriceInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainTimeouts">RegisteredDomainTimeouts</a>

---

##### `transferLockEnabledInput`<sup>Optional</sup> <a name="transferLockEnabledInput" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.property.transferLockEnabledInput"></a>

```java
public java.lang.Object getTransferLockEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `whoisPrivacyEnabledInput`<sup>Optional</sup> <a name="whoisPrivacyEnabledInput" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.property.whoisPrivacyEnabledInput"></a>

```java
public java.lang.Object getWhoisPrivacyEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `autoRenewEnabled`<sup>Required</sup> <a name="autoRenewEnabled" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.property.autoRenewEnabled"></a>

```java
public java.lang.Object getAutoRenewEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `contactId`<sup>Required</sup> <a name="contactId" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.property.contactId"></a>

```java
public java.lang.Number getContactId();
```

- *Type:* java.lang.Number

---

##### `dnssecEnabled`<sup>Required</sup> <a name="dnssecEnabled" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.property.dnssecEnabled"></a>

```java
public java.lang.Object getDnssecEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `extendedAttributes`<sup>Required</sup> <a name="extendedAttributes" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.property.extendedAttributes"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getExtendedAttributes();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `premiumPrice`<sup>Required</sup> <a name="premiumPrice" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.property.premiumPrice"></a>

```java
public java.lang.String getPremiumPrice();
```

- *Type:* java.lang.String

---

##### `transferLockEnabled`<sup>Required</sup> <a name="transferLockEnabled" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.property.transferLockEnabled"></a>

```java
public java.lang.Object getTransferLockEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `whoisPrivacyEnabled`<sup>Required</sup> <a name="whoisPrivacyEnabled" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.property.whoisPrivacyEnabled"></a>

```java
public java.lang.Object getWhoisPrivacyEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### RegisteredDomainConfig <a name="RegisteredDomainConfig" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.dnsimple.registered_domain.RegisteredDomainConfig;

RegisteredDomainConfig.builder()
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .contactId(java.lang.Number)
    .name(java.lang.String)
//  .autoRenewEnabled(java.lang.Boolean)
//  .autoRenewEnabled(IResolvable)
//  .dnssecEnabled(java.lang.Boolean)
//  .dnssecEnabled(IResolvable)
//  .extendedAttributes(java.util.Map<java.lang.String, java.lang.String>)
//  .premiumPrice(java.lang.String)
//  .timeouts(RegisteredDomainTimeouts)
//  .transferLockEnabled(java.lang.Boolean)
//  .transferLockEnabled(IResolvable)
//  .whoisPrivacyEnabled(java.lang.Boolean)
//  .whoisPrivacyEnabled(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainConfig.property.contactId">contactId</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dnsimple/dnsimple/1.2.0/docs/resources/registered_domain#contact_id RegisteredDomain#contact_id}. |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dnsimple/dnsimple/1.2.0/docs/resources/registered_domain#name RegisteredDomain#name}. |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainConfig.property.autoRenewEnabled">autoRenewEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dnsimple/dnsimple/1.2.0/docs/resources/registered_domain#auto_renew_enabled RegisteredDomain#auto_renew_enabled}. |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainConfig.property.dnssecEnabled">dnssecEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dnsimple/dnsimple/1.2.0/docs/resources/registered_domain#dnssec_enabled RegisteredDomain#dnssec_enabled}. |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainConfig.property.extendedAttributes">extendedAttributes</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dnsimple/dnsimple/1.2.0/docs/resources/registered_domain#extended_attributes RegisteredDomain#extended_attributes}. |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainConfig.property.premiumPrice">premiumPrice</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dnsimple/dnsimple/1.2.0/docs/resources/registered_domain#premium_price RegisteredDomain#premium_price}. |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainTimeouts">RegisteredDomainTimeouts</a></code> | Timeouts for operations, given as a parsable string as in `10m` or `30s`. |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainConfig.property.transferLockEnabled">transferLockEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dnsimple/dnsimple/1.2.0/docs/resources/registered_domain#transfer_lock_enabled RegisteredDomain#transfer_lock_enabled}. |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainConfig.property.whoisPrivacyEnabled">whoisPrivacyEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dnsimple/dnsimple/1.2.0/docs/resources/registered_domain#whois_privacy_enabled RegisteredDomain#whois_privacy_enabled}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `contactId`<sup>Required</sup> <a name="contactId" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainConfig.property.contactId"></a>

```java
public java.lang.Number getContactId();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dnsimple/dnsimple/1.2.0/docs/resources/registered_domain#contact_id RegisteredDomain#contact_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dnsimple/dnsimple/1.2.0/docs/resources/registered_domain#name RegisteredDomain#name}.

---

##### `autoRenewEnabled`<sup>Optional</sup> <a name="autoRenewEnabled" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainConfig.property.autoRenewEnabled"></a>

```java
public java.lang.Object getAutoRenewEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dnsimple/dnsimple/1.2.0/docs/resources/registered_domain#auto_renew_enabled RegisteredDomain#auto_renew_enabled}.

---

##### `dnssecEnabled`<sup>Optional</sup> <a name="dnssecEnabled" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainConfig.property.dnssecEnabled"></a>

```java
public java.lang.Object getDnssecEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dnsimple/dnsimple/1.2.0/docs/resources/registered_domain#dnssec_enabled RegisteredDomain#dnssec_enabled}.

---

##### `extendedAttributes`<sup>Optional</sup> <a name="extendedAttributes" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainConfig.property.extendedAttributes"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getExtendedAttributes();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dnsimple/dnsimple/1.2.0/docs/resources/registered_domain#extended_attributes RegisteredDomain#extended_attributes}.

---

##### `premiumPrice`<sup>Optional</sup> <a name="premiumPrice" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainConfig.property.premiumPrice"></a>

```java
public java.lang.String getPremiumPrice();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dnsimple/dnsimple/1.2.0/docs/resources/registered_domain#premium_price RegisteredDomain#premium_price}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainConfig.property.timeouts"></a>

```java
public RegisteredDomainTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainTimeouts">RegisteredDomainTimeouts</a>

Timeouts for operations, given as a parsable string as in `10m` or `30s`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dnsimple/dnsimple/1.2.0/docs/resources/registered_domain#timeouts RegisteredDomain#timeouts}

---

##### `transferLockEnabled`<sup>Optional</sup> <a name="transferLockEnabled" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainConfig.property.transferLockEnabled"></a>

```java
public java.lang.Object getTransferLockEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dnsimple/dnsimple/1.2.0/docs/resources/registered_domain#transfer_lock_enabled RegisteredDomain#transfer_lock_enabled}.

---

##### `whoisPrivacyEnabled`<sup>Optional</sup> <a name="whoisPrivacyEnabled" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainConfig.property.whoisPrivacyEnabled"></a>

```java
public java.lang.Object getWhoisPrivacyEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dnsimple/dnsimple/1.2.0/docs/resources/registered_domain#whois_privacy_enabled RegisteredDomain#whois_privacy_enabled}.

---

### RegisteredDomainDomainRegistration <a name="RegisteredDomainDomainRegistration" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainDomainRegistration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainDomainRegistration.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.dnsimple.registered_domain.RegisteredDomainDomainRegistration;

RegisteredDomainDomainRegistration.builder()
//  .state(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainDomainRegistration.property.state">state</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dnsimple/dnsimple/1.2.0/docs/resources/registered_domain#state RegisteredDomain#state}. |

---

##### `state`<sup>Optional</sup> <a name="state" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainDomainRegistration.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dnsimple/dnsimple/1.2.0/docs/resources/registered_domain#state RegisteredDomain#state}.

---

### RegisteredDomainTimeouts <a name="RegisteredDomainTimeouts" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.dnsimple.registered_domain.RegisteredDomainTimeouts;

RegisteredDomainTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Create timeout. |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Delete timeout (currently unused). |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Update timeout. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Create timeout.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dnsimple/dnsimple/1.2.0/docs/resources/registered_domain#create RegisteredDomain#create}

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Delete timeout (currently unused).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dnsimple/dnsimple/1.2.0/docs/resources/registered_domain#delete RegisteredDomain#delete}

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Update timeout.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dnsimple/dnsimple/1.2.0/docs/resources/registered_domain#update RegisteredDomain#update}

---

## Classes <a name="Classes" id="Classes"></a>

### RegisteredDomainDomainRegistrationOutputReference <a name="RegisteredDomainDomainRegistrationOutputReference" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainDomainRegistrationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainDomainRegistrationOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.dnsimple.registered_domain.RegisteredDomainDomainRegistrationOutputReference;

new RegisteredDomainDomainRegistrationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainDomainRegistrationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainDomainRegistrationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainDomainRegistrationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainDomainRegistrationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainDomainRegistrationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainDomainRegistrationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainDomainRegistrationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainDomainRegistrationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainDomainRegistrationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainDomainRegistrationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainDomainRegistrationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainDomainRegistrationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainDomainRegistrationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainDomainRegistrationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainDomainRegistrationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainDomainRegistrationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainDomainRegistrationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainDomainRegistrationOutputReference.resetState">resetState</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainDomainRegistrationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainDomainRegistrationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainDomainRegistrationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainDomainRegistrationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainDomainRegistrationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainDomainRegistrationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainDomainRegistrationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainDomainRegistrationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainDomainRegistrationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainDomainRegistrationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainDomainRegistrationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainDomainRegistrationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainDomainRegistrationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainDomainRegistrationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainDomainRegistrationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainDomainRegistrationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainDomainRegistrationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainDomainRegistrationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainDomainRegistrationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainDomainRegistrationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainDomainRegistrationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainDomainRegistrationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainDomainRegistrationOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainDomainRegistrationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetState` <a name="resetState" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainDomainRegistrationOutputReference.resetState"></a>

```java
public void resetState()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainDomainRegistrationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainDomainRegistrationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainDomainRegistrationOutputReference.property.id">id</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainDomainRegistrationOutputReference.property.period">period</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainDomainRegistrationOutputReference.property.stateInput">stateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainDomainRegistrationOutputReference.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainDomainRegistrationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainDomainRegistration">RegisteredDomainDomainRegistration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainDomainRegistrationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainDomainRegistrationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainDomainRegistrationOutputReference.property.id"></a>

```java
public java.lang.Number getId();
```

- *Type:* java.lang.Number

---

##### `period`<sup>Required</sup> <a name="period" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainDomainRegistrationOutputReference.property.period"></a>

```java
public java.lang.Number getPeriod();
```

- *Type:* java.lang.Number

---

##### `stateInput`<sup>Optional</sup> <a name="stateInput" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainDomainRegistrationOutputReference.property.stateInput"></a>

```java
public java.lang.String getStateInput();
```

- *Type:* java.lang.String

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainDomainRegistrationOutputReference.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainDomainRegistrationOutputReference.property.internalValue"></a>

```java
public RegisteredDomainDomainRegistration getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainDomainRegistration">RegisteredDomainDomainRegistration</a>

---


### RegisteredDomainTimeoutsOutputReference <a name="RegisteredDomainTimeoutsOutputReference" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.dnsimple.registered_domain.RegisteredDomainTimeoutsOutputReference;

new RegisteredDomainTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainTimeouts">RegisteredDomainTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainTimeouts">RegisteredDomainTimeouts</a>

---



