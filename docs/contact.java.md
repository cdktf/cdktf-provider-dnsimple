# `dnsimple_contact`

Refer to the Terraform Registory for docs: [`dnsimple_contact`](https://registry.terraform.io/providers/dnsimple/dnsimple/1.3.0/docs/resources/contact).

# `contact` Submodule <a name="`contact` Submodule" id="@cdktf/provider-dnsimple.contact"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Contact <a name="Contact" id="@cdktf/provider-dnsimple.contact.Contact"></a>

Represents a {@link https://registry.terraform.io/providers/dnsimple/dnsimple/1.3.0/docs/resources/contact dnsimple_contact}.

#### Initializers <a name="Initializers" id="@cdktf/provider-dnsimple.contact.Contact.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.dnsimple.contact.Contact;

Contact.Builder.create(Construct scope, java.lang.String id)
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
    .address1(java.lang.String)
    .city(java.lang.String)
    .country(java.lang.String)
    .email(java.lang.String)
    .firstName(java.lang.String)
    .lastName(java.lang.String)
    .phone(java.lang.String)
    .postalCode(java.lang.String)
    .stateProvince(java.lang.String)
//  .address2(java.lang.String)
//  .fax(java.lang.String)
//  .jobTitle(java.lang.String)
//  .label(java.lang.String)
//  .organizationName(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-dnsimple.contact.Contact.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-dnsimple.contact.Contact.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-dnsimple.contact.Contact.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.contact.Contact.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.contact.Contact.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.contact.Contact.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.contact.Contact.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.contact.Contact.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.contact.Contact.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.contact.Contact.Initializer.parameter.address1">address1</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dnsimple/dnsimple/1.3.0/docs/resources/contact#address1 Contact#address1}. |
| <code><a href="#@cdktf/provider-dnsimple.contact.Contact.Initializer.parameter.city">city</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dnsimple/dnsimple/1.3.0/docs/resources/contact#city Contact#city}. |
| <code><a href="#@cdktf/provider-dnsimple.contact.Contact.Initializer.parameter.country">country</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dnsimple/dnsimple/1.3.0/docs/resources/contact#country Contact#country}. |
| <code><a href="#@cdktf/provider-dnsimple.contact.Contact.Initializer.parameter.email">email</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dnsimple/dnsimple/1.3.0/docs/resources/contact#email Contact#email}. |
| <code><a href="#@cdktf/provider-dnsimple.contact.Contact.Initializer.parameter.firstName">firstName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dnsimple/dnsimple/1.3.0/docs/resources/contact#first_name Contact#first_name}. |
| <code><a href="#@cdktf/provider-dnsimple.contact.Contact.Initializer.parameter.lastName">lastName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dnsimple/dnsimple/1.3.0/docs/resources/contact#last_name Contact#last_name}. |
| <code><a href="#@cdktf/provider-dnsimple.contact.Contact.Initializer.parameter.phone">phone</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dnsimple/dnsimple/1.3.0/docs/resources/contact#phone Contact#phone}. |
| <code><a href="#@cdktf/provider-dnsimple.contact.Contact.Initializer.parameter.postalCode">postalCode</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dnsimple/dnsimple/1.3.0/docs/resources/contact#postal_code Contact#postal_code}. |
| <code><a href="#@cdktf/provider-dnsimple.contact.Contact.Initializer.parameter.stateProvince">stateProvince</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dnsimple/dnsimple/1.3.0/docs/resources/contact#state_province Contact#state_province}. |
| <code><a href="#@cdktf/provider-dnsimple.contact.Contact.Initializer.parameter.address2">address2</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dnsimple/dnsimple/1.3.0/docs/resources/contact#address2 Contact#address2}. |
| <code><a href="#@cdktf/provider-dnsimple.contact.Contact.Initializer.parameter.fax">fax</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dnsimple/dnsimple/1.3.0/docs/resources/contact#fax Contact#fax}. |
| <code><a href="#@cdktf/provider-dnsimple.contact.Contact.Initializer.parameter.jobTitle">jobTitle</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dnsimple/dnsimple/1.3.0/docs/resources/contact#job_title Contact#job_title}. |
| <code><a href="#@cdktf/provider-dnsimple.contact.Contact.Initializer.parameter.label">label</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dnsimple/dnsimple/1.3.0/docs/resources/contact#label Contact#label}. |
| <code><a href="#@cdktf/provider-dnsimple.contact.Contact.Initializer.parameter.organizationName">organizationName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dnsimple/dnsimple/1.3.0/docs/resources/contact#organization_name Contact#organization_name}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-dnsimple.contact.Contact.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-dnsimple.contact.Contact.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-dnsimple.contact.Contact.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-dnsimple.contact.Contact.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-dnsimple.contact.Contact.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-dnsimple.contact.Contact.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-dnsimple.contact.Contact.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-dnsimple.contact.Contact.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-dnsimple.contact.Contact.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `address1`<sup>Required</sup> <a name="address1" id="@cdktf/provider-dnsimple.contact.Contact.Initializer.parameter.address1"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dnsimple/dnsimple/1.3.0/docs/resources/contact#address1 Contact#address1}.

---

##### `city`<sup>Required</sup> <a name="city" id="@cdktf/provider-dnsimple.contact.Contact.Initializer.parameter.city"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dnsimple/dnsimple/1.3.0/docs/resources/contact#city Contact#city}.

---

##### `country`<sup>Required</sup> <a name="country" id="@cdktf/provider-dnsimple.contact.Contact.Initializer.parameter.country"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dnsimple/dnsimple/1.3.0/docs/resources/contact#country Contact#country}.

---

##### `email`<sup>Required</sup> <a name="email" id="@cdktf/provider-dnsimple.contact.Contact.Initializer.parameter.email"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dnsimple/dnsimple/1.3.0/docs/resources/contact#email Contact#email}.

---

##### `firstName`<sup>Required</sup> <a name="firstName" id="@cdktf/provider-dnsimple.contact.Contact.Initializer.parameter.firstName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dnsimple/dnsimple/1.3.0/docs/resources/contact#first_name Contact#first_name}.

---

##### `lastName`<sup>Required</sup> <a name="lastName" id="@cdktf/provider-dnsimple.contact.Contact.Initializer.parameter.lastName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dnsimple/dnsimple/1.3.0/docs/resources/contact#last_name Contact#last_name}.

---

##### `phone`<sup>Required</sup> <a name="phone" id="@cdktf/provider-dnsimple.contact.Contact.Initializer.parameter.phone"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dnsimple/dnsimple/1.3.0/docs/resources/contact#phone Contact#phone}.

---

##### `postalCode`<sup>Required</sup> <a name="postalCode" id="@cdktf/provider-dnsimple.contact.Contact.Initializer.parameter.postalCode"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dnsimple/dnsimple/1.3.0/docs/resources/contact#postal_code Contact#postal_code}.

---

##### `stateProvince`<sup>Required</sup> <a name="stateProvince" id="@cdktf/provider-dnsimple.contact.Contact.Initializer.parameter.stateProvince"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dnsimple/dnsimple/1.3.0/docs/resources/contact#state_province Contact#state_province}.

---

##### `address2`<sup>Optional</sup> <a name="address2" id="@cdktf/provider-dnsimple.contact.Contact.Initializer.parameter.address2"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dnsimple/dnsimple/1.3.0/docs/resources/contact#address2 Contact#address2}.

---

##### `fax`<sup>Optional</sup> <a name="fax" id="@cdktf/provider-dnsimple.contact.Contact.Initializer.parameter.fax"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dnsimple/dnsimple/1.3.0/docs/resources/contact#fax Contact#fax}.

---

##### `jobTitle`<sup>Optional</sup> <a name="jobTitle" id="@cdktf/provider-dnsimple.contact.Contact.Initializer.parameter.jobTitle"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dnsimple/dnsimple/1.3.0/docs/resources/contact#job_title Contact#job_title}.

---

##### `label`<sup>Optional</sup> <a name="label" id="@cdktf/provider-dnsimple.contact.Contact.Initializer.parameter.label"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dnsimple/dnsimple/1.3.0/docs/resources/contact#label Contact#label}.

---

##### `organizationName`<sup>Optional</sup> <a name="organizationName" id="@cdktf/provider-dnsimple.contact.Contact.Initializer.parameter.organizationName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dnsimple/dnsimple/1.3.0/docs/resources/contact#organization_name Contact#organization_name}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-dnsimple.contact.Contact.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-dnsimple.contact.Contact.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.contact.Contact.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-dnsimple.contact.Contact.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-dnsimple.contact.Contact.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.contact.Contact.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-dnsimple.contact.Contact.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-dnsimple.contact.Contact.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.contact.Contact.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.contact.Contact.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.contact.Contact.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.contact.Contact.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.contact.Contact.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.contact.Contact.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.contact.Contact.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.contact.Contact.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.contact.Contact.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.contact.Contact.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.contact.Contact.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-dnsimple.contact.Contact.resetAddress2">resetAddress2</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.contact.Contact.resetFax">resetFax</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.contact.Contact.resetJobTitle">resetJobTitle</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.contact.Contact.resetLabel">resetLabel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.contact.Contact.resetOrganizationName">resetOrganizationName</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-dnsimple.contact.Contact.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-dnsimple.contact.Contact.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-dnsimple.contact.Contact.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-dnsimple.contact.Contact.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-dnsimple.contact.Contact.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-dnsimple.contact.Contact.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-dnsimple.contact.Contact.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-dnsimple.contact.Contact.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-dnsimple.contact.Contact.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-dnsimple.contact.Contact.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-dnsimple.contact.Contact.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-dnsimple.contact.Contact.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-dnsimple.contact.Contact.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-dnsimple.contact.Contact.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-dnsimple.contact.Contact.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-dnsimple.contact.Contact.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-dnsimple.contact.Contact.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-dnsimple.contact.Contact.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-dnsimple.contact.Contact.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-dnsimple.contact.Contact.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-dnsimple.contact.Contact.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-dnsimple.contact.Contact.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-dnsimple.contact.Contact.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-dnsimple.contact.Contact.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-dnsimple.contact.Contact.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-dnsimple.contact.Contact.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-dnsimple.contact.Contact.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-dnsimple.contact.Contact.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-dnsimple.contact.Contact.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `importFrom` <a name="importFrom" id="@cdktf/provider-dnsimple.contact.Contact.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-dnsimple.contact.Contact.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-dnsimple.contact.Contact.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-dnsimple.contact.Contact.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-dnsimple.contact.Contact.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-dnsimple.contact.Contact.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-dnsimple.contact.Contact.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-dnsimple.contact.Contact.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `resetAddress2` <a name="resetAddress2" id="@cdktf/provider-dnsimple.contact.Contact.resetAddress2"></a>

```java
public void resetAddress2()
```

##### `resetFax` <a name="resetFax" id="@cdktf/provider-dnsimple.contact.Contact.resetFax"></a>

```java
public void resetFax()
```

##### `resetJobTitle` <a name="resetJobTitle" id="@cdktf/provider-dnsimple.contact.Contact.resetJobTitle"></a>

```java
public void resetJobTitle()
```

##### `resetLabel` <a name="resetLabel" id="@cdktf/provider-dnsimple.contact.Contact.resetLabel"></a>

```java
public void resetLabel()
```

##### `resetOrganizationName` <a name="resetOrganizationName" id="@cdktf/provider-dnsimple.contact.Contact.resetOrganizationName"></a>

```java
public void resetOrganizationName()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-dnsimple.contact.Contact.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-dnsimple.contact.Contact.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.contact.Contact.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.contact.Contact.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a Contact resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-dnsimple.contact.Contact.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.dnsimple.contact.Contact;

Contact.isConstruct(java.lang.Object x)
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

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-dnsimple.contact.Contact.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.dnsimple.contact.Contact;

Contact.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-dnsimple.contact.Contact.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-dnsimple.contact.Contact.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.dnsimple.contact.Contact;

Contact.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-dnsimple.contact.Contact.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-dnsimple.contact.Contact.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.dnsimple.contact.Contact;

Contact.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),Contact.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a Contact resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-dnsimple.contact.Contact.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-dnsimple.contact.Contact.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the Contact to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-dnsimple.contact.Contact.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing Contact that should be imported.

Refer to the {@link https://registry.terraform.io/providers/dnsimple/dnsimple/1.3.0/docs/resources/contact#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-dnsimple.contact.Contact.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the Contact to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-dnsimple.contact.Contact.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-dnsimple.contact.Contact.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.contact.Contact.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.contact.Contact.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.contact.Contact.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.contact.Contact.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.contact.Contact.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.contact.Contact.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.contact.Contact.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.contact.Contact.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.contact.Contact.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.contact.Contact.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.contact.Contact.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.contact.Contact.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.contact.Contact.property.accountId">accountId</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.contact.Contact.property.createdAt">createdAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.contact.Contact.property.faxNormalized">faxNormalized</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.contact.Contact.property.id">id</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.contact.Contact.property.phoneNormalized">phoneNormalized</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.contact.Contact.property.updatedAt">updatedAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.contact.Contact.property.address1Input">address1Input</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.contact.Contact.property.address2Input">address2Input</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.contact.Contact.property.cityInput">cityInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.contact.Contact.property.countryInput">countryInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.contact.Contact.property.emailInput">emailInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.contact.Contact.property.faxInput">faxInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.contact.Contact.property.firstNameInput">firstNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.contact.Contact.property.jobTitleInput">jobTitleInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.contact.Contact.property.labelInput">labelInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.contact.Contact.property.lastNameInput">lastNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.contact.Contact.property.organizationNameInput">organizationNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.contact.Contact.property.phoneInput">phoneInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.contact.Contact.property.postalCodeInput">postalCodeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.contact.Contact.property.stateProvinceInput">stateProvinceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.contact.Contact.property.address1">address1</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.contact.Contact.property.address2">address2</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.contact.Contact.property.city">city</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.contact.Contact.property.country">country</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.contact.Contact.property.email">email</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.contact.Contact.property.fax">fax</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.contact.Contact.property.firstName">firstName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.contact.Contact.property.jobTitle">jobTitle</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.contact.Contact.property.label">label</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.contact.Contact.property.lastName">lastName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.contact.Contact.property.organizationName">organizationName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.contact.Contact.property.phone">phone</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.contact.Contact.property.postalCode">postalCode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.contact.Contact.property.stateProvince">stateProvince</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-dnsimple.contact.Contact.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-dnsimple.contact.Contact.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-dnsimple.contact.Contact.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-dnsimple.contact.Contact.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-dnsimple.contact.Contact.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-dnsimple.contact.Contact.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-dnsimple.contact.Contact.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-dnsimple.contact.Contact.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-dnsimple.contact.Contact.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-dnsimple.contact.Contact.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-dnsimple.contact.Contact.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-dnsimple.contact.Contact.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-dnsimple.contact.Contact.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-dnsimple.contact.Contact.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktf/provider-dnsimple.contact.Contact.property.accountId"></a>

```java
public java.lang.Number getAccountId();
```

- *Type:* java.lang.Number

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktf/provider-dnsimple.contact.Contact.property.createdAt"></a>

```java
public java.lang.String getCreatedAt();
```

- *Type:* java.lang.String

---

##### `faxNormalized`<sup>Required</sup> <a name="faxNormalized" id="@cdktf/provider-dnsimple.contact.Contact.property.faxNormalized"></a>

```java
public java.lang.String getFaxNormalized();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-dnsimple.contact.Contact.property.id"></a>

```java
public java.lang.Number getId();
```

- *Type:* java.lang.Number

---

##### `phoneNormalized`<sup>Required</sup> <a name="phoneNormalized" id="@cdktf/provider-dnsimple.contact.Contact.property.phoneNormalized"></a>

```java
public java.lang.String getPhoneNormalized();
```

- *Type:* java.lang.String

---

##### `updatedAt`<sup>Required</sup> <a name="updatedAt" id="@cdktf/provider-dnsimple.contact.Contact.property.updatedAt"></a>

```java
public java.lang.String getUpdatedAt();
```

- *Type:* java.lang.String

---

##### `address1Input`<sup>Optional</sup> <a name="address1Input" id="@cdktf/provider-dnsimple.contact.Contact.property.address1Input"></a>

```java
public java.lang.String getAddress1Input();
```

- *Type:* java.lang.String

---

##### `address2Input`<sup>Optional</sup> <a name="address2Input" id="@cdktf/provider-dnsimple.contact.Contact.property.address2Input"></a>

```java
public java.lang.String getAddress2Input();
```

- *Type:* java.lang.String

---

##### `cityInput`<sup>Optional</sup> <a name="cityInput" id="@cdktf/provider-dnsimple.contact.Contact.property.cityInput"></a>

```java
public java.lang.String getCityInput();
```

- *Type:* java.lang.String

---

##### `countryInput`<sup>Optional</sup> <a name="countryInput" id="@cdktf/provider-dnsimple.contact.Contact.property.countryInput"></a>

```java
public java.lang.String getCountryInput();
```

- *Type:* java.lang.String

---

##### `emailInput`<sup>Optional</sup> <a name="emailInput" id="@cdktf/provider-dnsimple.contact.Contact.property.emailInput"></a>

```java
public java.lang.String getEmailInput();
```

- *Type:* java.lang.String

---

##### `faxInput`<sup>Optional</sup> <a name="faxInput" id="@cdktf/provider-dnsimple.contact.Contact.property.faxInput"></a>

```java
public java.lang.String getFaxInput();
```

- *Type:* java.lang.String

---

##### `firstNameInput`<sup>Optional</sup> <a name="firstNameInput" id="@cdktf/provider-dnsimple.contact.Contact.property.firstNameInput"></a>

```java
public java.lang.String getFirstNameInput();
```

- *Type:* java.lang.String

---

##### `jobTitleInput`<sup>Optional</sup> <a name="jobTitleInput" id="@cdktf/provider-dnsimple.contact.Contact.property.jobTitleInput"></a>

```java
public java.lang.String getJobTitleInput();
```

- *Type:* java.lang.String

---

##### `labelInput`<sup>Optional</sup> <a name="labelInput" id="@cdktf/provider-dnsimple.contact.Contact.property.labelInput"></a>

```java
public java.lang.String getLabelInput();
```

- *Type:* java.lang.String

---

##### `lastNameInput`<sup>Optional</sup> <a name="lastNameInput" id="@cdktf/provider-dnsimple.contact.Contact.property.lastNameInput"></a>

```java
public java.lang.String getLastNameInput();
```

- *Type:* java.lang.String

---

##### `organizationNameInput`<sup>Optional</sup> <a name="organizationNameInput" id="@cdktf/provider-dnsimple.contact.Contact.property.organizationNameInput"></a>

```java
public java.lang.String getOrganizationNameInput();
```

- *Type:* java.lang.String

---

##### `phoneInput`<sup>Optional</sup> <a name="phoneInput" id="@cdktf/provider-dnsimple.contact.Contact.property.phoneInput"></a>

```java
public java.lang.String getPhoneInput();
```

- *Type:* java.lang.String

---

##### `postalCodeInput`<sup>Optional</sup> <a name="postalCodeInput" id="@cdktf/provider-dnsimple.contact.Contact.property.postalCodeInput"></a>

```java
public java.lang.String getPostalCodeInput();
```

- *Type:* java.lang.String

---

##### `stateProvinceInput`<sup>Optional</sup> <a name="stateProvinceInput" id="@cdktf/provider-dnsimple.contact.Contact.property.stateProvinceInput"></a>

```java
public java.lang.String getStateProvinceInput();
```

- *Type:* java.lang.String

---

##### `address1`<sup>Required</sup> <a name="address1" id="@cdktf/provider-dnsimple.contact.Contact.property.address1"></a>

```java
public java.lang.String getAddress1();
```

- *Type:* java.lang.String

---

##### `address2`<sup>Required</sup> <a name="address2" id="@cdktf/provider-dnsimple.contact.Contact.property.address2"></a>

```java
public java.lang.String getAddress2();
```

- *Type:* java.lang.String

---

##### `city`<sup>Required</sup> <a name="city" id="@cdktf/provider-dnsimple.contact.Contact.property.city"></a>

```java
public java.lang.String getCity();
```

- *Type:* java.lang.String

---

##### `country`<sup>Required</sup> <a name="country" id="@cdktf/provider-dnsimple.contact.Contact.property.country"></a>

```java
public java.lang.String getCountry();
```

- *Type:* java.lang.String

---

##### `email`<sup>Required</sup> <a name="email" id="@cdktf/provider-dnsimple.contact.Contact.property.email"></a>

```java
public java.lang.String getEmail();
```

- *Type:* java.lang.String

---

##### `fax`<sup>Required</sup> <a name="fax" id="@cdktf/provider-dnsimple.contact.Contact.property.fax"></a>

```java
public java.lang.String getFax();
```

- *Type:* java.lang.String

---

##### `firstName`<sup>Required</sup> <a name="firstName" id="@cdktf/provider-dnsimple.contact.Contact.property.firstName"></a>

```java
public java.lang.String getFirstName();
```

- *Type:* java.lang.String

---

##### `jobTitle`<sup>Required</sup> <a name="jobTitle" id="@cdktf/provider-dnsimple.contact.Contact.property.jobTitle"></a>

```java
public java.lang.String getJobTitle();
```

- *Type:* java.lang.String

---

##### `label`<sup>Required</sup> <a name="label" id="@cdktf/provider-dnsimple.contact.Contact.property.label"></a>

```java
public java.lang.String getLabel();
```

- *Type:* java.lang.String

---

##### `lastName`<sup>Required</sup> <a name="lastName" id="@cdktf/provider-dnsimple.contact.Contact.property.lastName"></a>

```java
public java.lang.String getLastName();
```

- *Type:* java.lang.String

---

##### `organizationName`<sup>Required</sup> <a name="organizationName" id="@cdktf/provider-dnsimple.contact.Contact.property.organizationName"></a>

```java
public java.lang.String getOrganizationName();
```

- *Type:* java.lang.String

---

##### `phone`<sup>Required</sup> <a name="phone" id="@cdktf/provider-dnsimple.contact.Contact.property.phone"></a>

```java
public java.lang.String getPhone();
```

- *Type:* java.lang.String

---

##### `postalCode`<sup>Required</sup> <a name="postalCode" id="@cdktf/provider-dnsimple.contact.Contact.property.postalCode"></a>

```java
public java.lang.String getPostalCode();
```

- *Type:* java.lang.String

---

##### `stateProvince`<sup>Required</sup> <a name="stateProvince" id="@cdktf/provider-dnsimple.contact.Contact.property.stateProvince"></a>

```java
public java.lang.String getStateProvince();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-dnsimple.contact.Contact.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-dnsimple.contact.Contact.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### ContactConfig <a name="ContactConfig" id="@cdktf/provider-dnsimple.contact.ContactConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-dnsimple.contact.ContactConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.dnsimple.contact.ContactConfig;

ContactConfig.builder()
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
    .address1(java.lang.String)
    .city(java.lang.String)
    .country(java.lang.String)
    .email(java.lang.String)
    .firstName(java.lang.String)
    .lastName(java.lang.String)
    .phone(java.lang.String)
    .postalCode(java.lang.String)
    .stateProvince(java.lang.String)
//  .address2(java.lang.String)
//  .fax(java.lang.String)
//  .jobTitle(java.lang.String)
//  .label(java.lang.String)
//  .organizationName(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-dnsimple.contact.ContactConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.contact.ContactConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.contact.ContactConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.contact.ContactConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.contact.ContactConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.contact.ContactConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.contact.ContactConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.contact.ContactConfig.property.address1">address1</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dnsimple/dnsimple/1.3.0/docs/resources/contact#address1 Contact#address1}. |
| <code><a href="#@cdktf/provider-dnsimple.contact.ContactConfig.property.city">city</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dnsimple/dnsimple/1.3.0/docs/resources/contact#city Contact#city}. |
| <code><a href="#@cdktf/provider-dnsimple.contact.ContactConfig.property.country">country</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dnsimple/dnsimple/1.3.0/docs/resources/contact#country Contact#country}. |
| <code><a href="#@cdktf/provider-dnsimple.contact.ContactConfig.property.email">email</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dnsimple/dnsimple/1.3.0/docs/resources/contact#email Contact#email}. |
| <code><a href="#@cdktf/provider-dnsimple.contact.ContactConfig.property.firstName">firstName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dnsimple/dnsimple/1.3.0/docs/resources/contact#first_name Contact#first_name}. |
| <code><a href="#@cdktf/provider-dnsimple.contact.ContactConfig.property.lastName">lastName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dnsimple/dnsimple/1.3.0/docs/resources/contact#last_name Contact#last_name}. |
| <code><a href="#@cdktf/provider-dnsimple.contact.ContactConfig.property.phone">phone</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dnsimple/dnsimple/1.3.0/docs/resources/contact#phone Contact#phone}. |
| <code><a href="#@cdktf/provider-dnsimple.contact.ContactConfig.property.postalCode">postalCode</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dnsimple/dnsimple/1.3.0/docs/resources/contact#postal_code Contact#postal_code}. |
| <code><a href="#@cdktf/provider-dnsimple.contact.ContactConfig.property.stateProvince">stateProvince</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dnsimple/dnsimple/1.3.0/docs/resources/contact#state_province Contact#state_province}. |
| <code><a href="#@cdktf/provider-dnsimple.contact.ContactConfig.property.address2">address2</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dnsimple/dnsimple/1.3.0/docs/resources/contact#address2 Contact#address2}. |
| <code><a href="#@cdktf/provider-dnsimple.contact.ContactConfig.property.fax">fax</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dnsimple/dnsimple/1.3.0/docs/resources/contact#fax Contact#fax}. |
| <code><a href="#@cdktf/provider-dnsimple.contact.ContactConfig.property.jobTitle">jobTitle</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dnsimple/dnsimple/1.3.0/docs/resources/contact#job_title Contact#job_title}. |
| <code><a href="#@cdktf/provider-dnsimple.contact.ContactConfig.property.label">label</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dnsimple/dnsimple/1.3.0/docs/resources/contact#label Contact#label}. |
| <code><a href="#@cdktf/provider-dnsimple.contact.ContactConfig.property.organizationName">organizationName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dnsimple/dnsimple/1.3.0/docs/resources/contact#organization_name Contact#organization_name}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-dnsimple.contact.ContactConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-dnsimple.contact.ContactConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-dnsimple.contact.ContactConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-dnsimple.contact.ContactConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-dnsimple.contact.ContactConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-dnsimple.contact.ContactConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-dnsimple.contact.ContactConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `address1`<sup>Required</sup> <a name="address1" id="@cdktf/provider-dnsimple.contact.ContactConfig.property.address1"></a>

```java
public java.lang.String getAddress1();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dnsimple/dnsimple/1.3.0/docs/resources/contact#address1 Contact#address1}.

---

##### `city`<sup>Required</sup> <a name="city" id="@cdktf/provider-dnsimple.contact.ContactConfig.property.city"></a>

```java
public java.lang.String getCity();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dnsimple/dnsimple/1.3.0/docs/resources/contact#city Contact#city}.

---

##### `country`<sup>Required</sup> <a name="country" id="@cdktf/provider-dnsimple.contact.ContactConfig.property.country"></a>

```java
public java.lang.String getCountry();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dnsimple/dnsimple/1.3.0/docs/resources/contact#country Contact#country}.

---

##### `email`<sup>Required</sup> <a name="email" id="@cdktf/provider-dnsimple.contact.ContactConfig.property.email"></a>

```java
public java.lang.String getEmail();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dnsimple/dnsimple/1.3.0/docs/resources/contact#email Contact#email}.

---

##### `firstName`<sup>Required</sup> <a name="firstName" id="@cdktf/provider-dnsimple.contact.ContactConfig.property.firstName"></a>

```java
public java.lang.String getFirstName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dnsimple/dnsimple/1.3.0/docs/resources/contact#first_name Contact#first_name}.

---

##### `lastName`<sup>Required</sup> <a name="lastName" id="@cdktf/provider-dnsimple.contact.ContactConfig.property.lastName"></a>

```java
public java.lang.String getLastName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dnsimple/dnsimple/1.3.0/docs/resources/contact#last_name Contact#last_name}.

---

##### `phone`<sup>Required</sup> <a name="phone" id="@cdktf/provider-dnsimple.contact.ContactConfig.property.phone"></a>

```java
public java.lang.String getPhone();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dnsimple/dnsimple/1.3.0/docs/resources/contact#phone Contact#phone}.

---

##### `postalCode`<sup>Required</sup> <a name="postalCode" id="@cdktf/provider-dnsimple.contact.ContactConfig.property.postalCode"></a>

```java
public java.lang.String getPostalCode();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dnsimple/dnsimple/1.3.0/docs/resources/contact#postal_code Contact#postal_code}.

---

##### `stateProvince`<sup>Required</sup> <a name="stateProvince" id="@cdktf/provider-dnsimple.contact.ContactConfig.property.stateProvince"></a>

```java
public java.lang.String getStateProvince();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dnsimple/dnsimple/1.3.0/docs/resources/contact#state_province Contact#state_province}.

---

##### `address2`<sup>Optional</sup> <a name="address2" id="@cdktf/provider-dnsimple.contact.ContactConfig.property.address2"></a>

```java
public java.lang.String getAddress2();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dnsimple/dnsimple/1.3.0/docs/resources/contact#address2 Contact#address2}.

---

##### `fax`<sup>Optional</sup> <a name="fax" id="@cdktf/provider-dnsimple.contact.ContactConfig.property.fax"></a>

```java
public java.lang.String getFax();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dnsimple/dnsimple/1.3.0/docs/resources/contact#fax Contact#fax}.

---

##### `jobTitle`<sup>Optional</sup> <a name="jobTitle" id="@cdktf/provider-dnsimple.contact.ContactConfig.property.jobTitle"></a>

```java
public java.lang.String getJobTitle();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dnsimple/dnsimple/1.3.0/docs/resources/contact#job_title Contact#job_title}.

---

##### `label`<sup>Optional</sup> <a name="label" id="@cdktf/provider-dnsimple.contact.ContactConfig.property.label"></a>

```java
public java.lang.String getLabel();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dnsimple/dnsimple/1.3.0/docs/resources/contact#label Contact#label}.

---

##### `organizationName`<sup>Optional</sup> <a name="organizationName" id="@cdktf/provider-dnsimple.contact.ContactConfig.property.organizationName"></a>

```java
public java.lang.String getOrganizationName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dnsimple/dnsimple/1.3.0/docs/resources/contact#organization_name Contact#organization_name}.

---



