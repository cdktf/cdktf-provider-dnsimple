# `dnsimple_contact`

Refer to the Terraform Registory for docs: [`dnsimple_contact`](https://registry.terraform.io/providers/dnsimple/dnsimple/1.3.0/docs/resources/contact).

# `contact` Submodule <a name="`contact` Submodule" id="@cdktf/provider-dnsimple.contact"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Contact <a name="Contact" id="@cdktf/provider-dnsimple.contact.Contact"></a>

Represents a {@link https://registry.terraform.io/providers/dnsimple/dnsimple/1.3.0/docs/resources/contact dnsimple_contact}.

#### Initializers <a name="Initializers" id="@cdktf/provider-dnsimple.contact.Contact.Initializer"></a>

```typescript
import { contact } from '@cdktf/provider-dnsimple'

new contact.Contact(scope: Construct, id: string, config: ContactConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-dnsimple.contact.Contact.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-dnsimple.contact.Contact.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-dnsimple.contact.Contact.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-dnsimple.contact.ContactConfig">ContactConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-dnsimple.contact.Contact.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-dnsimple.contact.Contact.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-dnsimple.contact.Contact.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-dnsimple.contact.ContactConfig">ContactConfig</a>

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

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-dnsimple.contact.Contact.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-dnsimple.contact.Contact.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-dnsimple.contact.Contact.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-dnsimple.contact.Contact.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-dnsimple.contact.Contact.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-dnsimple.contact.Contact.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-dnsimple.contact.Contact.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-dnsimple.contact.Contact.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-dnsimple.contact.Contact.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-dnsimple.contact.Contact.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-dnsimple.contact.Contact.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-dnsimple.contact.Contact.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-dnsimple.contact.Contact.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-dnsimple.contact.Contact.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-dnsimple.contact.Contact.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-dnsimple.contact.Contact.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-dnsimple.contact.Contact.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-dnsimple.contact.Contact.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-dnsimple.contact.Contact.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-dnsimple.contact.Contact.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-dnsimple.contact.Contact.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-dnsimple.contact.Contact.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-dnsimple.contact.Contact.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-dnsimple.contact.Contact.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-dnsimple.contact.Contact.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-dnsimple.contact.Contact.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-dnsimple.contact.Contact.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-dnsimple.contact.Contact.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `importFrom` <a name="importFrom" id="@cdktf/provider-dnsimple.contact.Contact.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-dnsimple.contact.Contact.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-dnsimple.contact.Contact.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-dnsimple.contact.Contact.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-dnsimple.contact.Contact.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-dnsimple.contact.Contact.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-dnsimple.contact.Contact.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-dnsimple.contact.Contact.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `resetAddress2` <a name="resetAddress2" id="@cdktf/provider-dnsimple.contact.Contact.resetAddress2"></a>

```typescript
public resetAddress2(): void
```

##### `resetFax` <a name="resetFax" id="@cdktf/provider-dnsimple.contact.Contact.resetFax"></a>

```typescript
public resetFax(): void
```

##### `resetJobTitle` <a name="resetJobTitle" id="@cdktf/provider-dnsimple.contact.Contact.resetJobTitle"></a>

```typescript
public resetJobTitle(): void
```

##### `resetLabel` <a name="resetLabel" id="@cdktf/provider-dnsimple.contact.Contact.resetLabel"></a>

```typescript
public resetLabel(): void
```

##### `resetOrganizationName` <a name="resetOrganizationName" id="@cdktf/provider-dnsimple.contact.Contact.resetOrganizationName"></a>

```typescript
public resetOrganizationName(): void
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

```typescript
import { contact } from '@cdktf/provider-dnsimple'

contact.Contact.isConstruct(x: any)
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

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-dnsimple.contact.Contact.isTerraformElement"></a>

```typescript
import { contact } from '@cdktf/provider-dnsimple'

contact.Contact.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-dnsimple.contact.Contact.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-dnsimple.contact.Contact.isTerraformResource"></a>

```typescript
import { contact } from '@cdktf/provider-dnsimple'

contact.Contact.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-dnsimple.contact.Contact.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-dnsimple.contact.Contact.generateConfigForImport"></a>

```typescript
import { contact } from '@cdktf/provider-dnsimple'

contact.Contact.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a Contact resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-dnsimple.contact.Contact.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-dnsimple.contact.Contact.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the Contact to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-dnsimple.contact.Contact.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing Contact that should be imported.

Refer to the {@link https://registry.terraform.io/providers/dnsimple/dnsimple/1.3.0/docs/resources/contact#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-dnsimple.contact.Contact.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the Contact to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-dnsimple.contact.Contact.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-dnsimple.contact.Contact.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.contact.Contact.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.contact.Contact.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.contact.Contact.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.contact.Contact.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.contact.Contact.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.contact.Contact.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.contact.Contact.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.contact.Contact.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.contact.Contact.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.contact.Contact.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.contact.Contact.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.contact.Contact.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.contact.Contact.property.accountId">accountId</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.contact.Contact.property.createdAt">createdAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.contact.Contact.property.faxNormalized">faxNormalized</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.contact.Contact.property.id">id</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.contact.Contact.property.phoneNormalized">phoneNormalized</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.contact.Contact.property.updatedAt">updatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.contact.Contact.property.address1Input">address1Input</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.contact.Contact.property.address2Input">address2Input</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.contact.Contact.property.cityInput">cityInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.contact.Contact.property.countryInput">countryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.contact.Contact.property.emailInput">emailInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.contact.Contact.property.faxInput">faxInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.contact.Contact.property.firstNameInput">firstNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.contact.Contact.property.jobTitleInput">jobTitleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.contact.Contact.property.labelInput">labelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.contact.Contact.property.lastNameInput">lastNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.contact.Contact.property.organizationNameInput">organizationNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.contact.Contact.property.phoneInput">phoneInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.contact.Contact.property.postalCodeInput">postalCodeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.contact.Contact.property.stateProvinceInput">stateProvinceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.contact.Contact.property.address1">address1</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.contact.Contact.property.address2">address2</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.contact.Contact.property.city">city</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.contact.Contact.property.country">country</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.contact.Contact.property.email">email</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.contact.Contact.property.fax">fax</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.contact.Contact.property.firstName">firstName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.contact.Contact.property.jobTitle">jobTitle</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.contact.Contact.property.label">label</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.contact.Contact.property.lastName">lastName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.contact.Contact.property.organizationName">organizationName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.contact.Contact.property.phone">phone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.contact.Contact.property.postalCode">postalCode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.contact.Contact.property.stateProvince">stateProvince</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-dnsimple.contact.Contact.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-dnsimple.contact.Contact.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-dnsimple.contact.Contact.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-dnsimple.contact.Contact.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-dnsimple.contact.Contact.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-dnsimple.contact.Contact.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-dnsimple.contact.Contact.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-dnsimple.contact.Contact.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-dnsimple.contact.Contact.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-dnsimple.contact.Contact.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-dnsimple.contact.Contact.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-dnsimple.contact.Contact.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-dnsimple.contact.Contact.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-dnsimple.contact.Contact.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktf/provider-dnsimple.contact.Contact.property.accountId"></a>

```typescript
public readonly accountId: number;
```

- *Type:* number

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktf/provider-dnsimple.contact.Contact.property.createdAt"></a>

```typescript
public readonly createdAt: string;
```

- *Type:* string

---

##### `faxNormalized`<sup>Required</sup> <a name="faxNormalized" id="@cdktf/provider-dnsimple.contact.Contact.property.faxNormalized"></a>

```typescript
public readonly faxNormalized: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-dnsimple.contact.Contact.property.id"></a>

```typescript
public readonly id: number;
```

- *Type:* number

---

##### `phoneNormalized`<sup>Required</sup> <a name="phoneNormalized" id="@cdktf/provider-dnsimple.contact.Contact.property.phoneNormalized"></a>

```typescript
public readonly phoneNormalized: string;
```

- *Type:* string

---

##### `updatedAt`<sup>Required</sup> <a name="updatedAt" id="@cdktf/provider-dnsimple.contact.Contact.property.updatedAt"></a>

```typescript
public readonly updatedAt: string;
```

- *Type:* string

---

##### `address1Input`<sup>Optional</sup> <a name="address1Input" id="@cdktf/provider-dnsimple.contact.Contact.property.address1Input"></a>

```typescript
public readonly address1Input: string;
```

- *Type:* string

---

##### `address2Input`<sup>Optional</sup> <a name="address2Input" id="@cdktf/provider-dnsimple.contact.Contact.property.address2Input"></a>

```typescript
public readonly address2Input: string;
```

- *Type:* string

---

##### `cityInput`<sup>Optional</sup> <a name="cityInput" id="@cdktf/provider-dnsimple.contact.Contact.property.cityInput"></a>

```typescript
public readonly cityInput: string;
```

- *Type:* string

---

##### `countryInput`<sup>Optional</sup> <a name="countryInput" id="@cdktf/provider-dnsimple.contact.Contact.property.countryInput"></a>

```typescript
public readonly countryInput: string;
```

- *Type:* string

---

##### `emailInput`<sup>Optional</sup> <a name="emailInput" id="@cdktf/provider-dnsimple.contact.Contact.property.emailInput"></a>

```typescript
public readonly emailInput: string;
```

- *Type:* string

---

##### `faxInput`<sup>Optional</sup> <a name="faxInput" id="@cdktf/provider-dnsimple.contact.Contact.property.faxInput"></a>

```typescript
public readonly faxInput: string;
```

- *Type:* string

---

##### `firstNameInput`<sup>Optional</sup> <a name="firstNameInput" id="@cdktf/provider-dnsimple.contact.Contact.property.firstNameInput"></a>

```typescript
public readonly firstNameInput: string;
```

- *Type:* string

---

##### `jobTitleInput`<sup>Optional</sup> <a name="jobTitleInput" id="@cdktf/provider-dnsimple.contact.Contact.property.jobTitleInput"></a>

```typescript
public readonly jobTitleInput: string;
```

- *Type:* string

---

##### `labelInput`<sup>Optional</sup> <a name="labelInput" id="@cdktf/provider-dnsimple.contact.Contact.property.labelInput"></a>

```typescript
public readonly labelInput: string;
```

- *Type:* string

---

##### `lastNameInput`<sup>Optional</sup> <a name="lastNameInput" id="@cdktf/provider-dnsimple.contact.Contact.property.lastNameInput"></a>

```typescript
public readonly lastNameInput: string;
```

- *Type:* string

---

##### `organizationNameInput`<sup>Optional</sup> <a name="organizationNameInput" id="@cdktf/provider-dnsimple.contact.Contact.property.organizationNameInput"></a>

```typescript
public readonly organizationNameInput: string;
```

- *Type:* string

---

##### `phoneInput`<sup>Optional</sup> <a name="phoneInput" id="@cdktf/provider-dnsimple.contact.Contact.property.phoneInput"></a>

```typescript
public readonly phoneInput: string;
```

- *Type:* string

---

##### `postalCodeInput`<sup>Optional</sup> <a name="postalCodeInput" id="@cdktf/provider-dnsimple.contact.Contact.property.postalCodeInput"></a>

```typescript
public readonly postalCodeInput: string;
```

- *Type:* string

---

##### `stateProvinceInput`<sup>Optional</sup> <a name="stateProvinceInput" id="@cdktf/provider-dnsimple.contact.Contact.property.stateProvinceInput"></a>

```typescript
public readonly stateProvinceInput: string;
```

- *Type:* string

---

##### `address1`<sup>Required</sup> <a name="address1" id="@cdktf/provider-dnsimple.contact.Contact.property.address1"></a>

```typescript
public readonly address1: string;
```

- *Type:* string

---

##### `address2`<sup>Required</sup> <a name="address2" id="@cdktf/provider-dnsimple.contact.Contact.property.address2"></a>

```typescript
public readonly address2: string;
```

- *Type:* string

---

##### `city`<sup>Required</sup> <a name="city" id="@cdktf/provider-dnsimple.contact.Contact.property.city"></a>

```typescript
public readonly city: string;
```

- *Type:* string

---

##### `country`<sup>Required</sup> <a name="country" id="@cdktf/provider-dnsimple.contact.Contact.property.country"></a>

```typescript
public readonly country: string;
```

- *Type:* string

---

##### `email`<sup>Required</sup> <a name="email" id="@cdktf/provider-dnsimple.contact.Contact.property.email"></a>

```typescript
public readonly email: string;
```

- *Type:* string

---

##### `fax`<sup>Required</sup> <a name="fax" id="@cdktf/provider-dnsimple.contact.Contact.property.fax"></a>

```typescript
public readonly fax: string;
```

- *Type:* string

---

##### `firstName`<sup>Required</sup> <a name="firstName" id="@cdktf/provider-dnsimple.contact.Contact.property.firstName"></a>

```typescript
public readonly firstName: string;
```

- *Type:* string

---

##### `jobTitle`<sup>Required</sup> <a name="jobTitle" id="@cdktf/provider-dnsimple.contact.Contact.property.jobTitle"></a>

```typescript
public readonly jobTitle: string;
```

- *Type:* string

---

##### `label`<sup>Required</sup> <a name="label" id="@cdktf/provider-dnsimple.contact.Contact.property.label"></a>

```typescript
public readonly label: string;
```

- *Type:* string

---

##### `lastName`<sup>Required</sup> <a name="lastName" id="@cdktf/provider-dnsimple.contact.Contact.property.lastName"></a>

```typescript
public readonly lastName: string;
```

- *Type:* string

---

##### `organizationName`<sup>Required</sup> <a name="organizationName" id="@cdktf/provider-dnsimple.contact.Contact.property.organizationName"></a>

```typescript
public readonly organizationName: string;
```

- *Type:* string

---

##### `phone`<sup>Required</sup> <a name="phone" id="@cdktf/provider-dnsimple.contact.Contact.property.phone"></a>

```typescript
public readonly phone: string;
```

- *Type:* string

---

##### `postalCode`<sup>Required</sup> <a name="postalCode" id="@cdktf/provider-dnsimple.contact.Contact.property.postalCode"></a>

```typescript
public readonly postalCode: string;
```

- *Type:* string

---

##### `stateProvince`<sup>Required</sup> <a name="stateProvince" id="@cdktf/provider-dnsimple.contact.Contact.property.stateProvince"></a>

```typescript
public readonly stateProvince: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-dnsimple.contact.Contact.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-dnsimple.contact.Contact.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ContactConfig <a name="ContactConfig" id="@cdktf/provider-dnsimple.contact.ContactConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-dnsimple.contact.ContactConfig.Initializer"></a>

```typescript
import { contact } from '@cdktf/provider-dnsimple'

const contactConfig: contact.ContactConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-dnsimple.contact.ContactConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.contact.ContactConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.contact.ContactConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.contact.ContactConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.contact.ContactConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.contact.ContactConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.contact.ContactConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.contact.ContactConfig.property.address1">address1</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dnsimple/dnsimple/1.3.0/docs/resources/contact#address1 Contact#address1}. |
| <code><a href="#@cdktf/provider-dnsimple.contact.ContactConfig.property.city">city</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dnsimple/dnsimple/1.3.0/docs/resources/contact#city Contact#city}. |
| <code><a href="#@cdktf/provider-dnsimple.contact.ContactConfig.property.country">country</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dnsimple/dnsimple/1.3.0/docs/resources/contact#country Contact#country}. |
| <code><a href="#@cdktf/provider-dnsimple.contact.ContactConfig.property.email">email</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dnsimple/dnsimple/1.3.0/docs/resources/contact#email Contact#email}. |
| <code><a href="#@cdktf/provider-dnsimple.contact.ContactConfig.property.firstName">firstName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dnsimple/dnsimple/1.3.0/docs/resources/contact#first_name Contact#first_name}. |
| <code><a href="#@cdktf/provider-dnsimple.contact.ContactConfig.property.lastName">lastName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dnsimple/dnsimple/1.3.0/docs/resources/contact#last_name Contact#last_name}. |
| <code><a href="#@cdktf/provider-dnsimple.contact.ContactConfig.property.phone">phone</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dnsimple/dnsimple/1.3.0/docs/resources/contact#phone Contact#phone}. |
| <code><a href="#@cdktf/provider-dnsimple.contact.ContactConfig.property.postalCode">postalCode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dnsimple/dnsimple/1.3.0/docs/resources/contact#postal_code Contact#postal_code}. |
| <code><a href="#@cdktf/provider-dnsimple.contact.ContactConfig.property.stateProvince">stateProvince</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dnsimple/dnsimple/1.3.0/docs/resources/contact#state_province Contact#state_province}. |
| <code><a href="#@cdktf/provider-dnsimple.contact.ContactConfig.property.address2">address2</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dnsimple/dnsimple/1.3.0/docs/resources/contact#address2 Contact#address2}. |
| <code><a href="#@cdktf/provider-dnsimple.contact.ContactConfig.property.fax">fax</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dnsimple/dnsimple/1.3.0/docs/resources/contact#fax Contact#fax}. |
| <code><a href="#@cdktf/provider-dnsimple.contact.ContactConfig.property.jobTitle">jobTitle</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dnsimple/dnsimple/1.3.0/docs/resources/contact#job_title Contact#job_title}. |
| <code><a href="#@cdktf/provider-dnsimple.contact.ContactConfig.property.label">label</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dnsimple/dnsimple/1.3.0/docs/resources/contact#label Contact#label}. |
| <code><a href="#@cdktf/provider-dnsimple.contact.ContactConfig.property.organizationName">organizationName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dnsimple/dnsimple/1.3.0/docs/resources/contact#organization_name Contact#organization_name}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-dnsimple.contact.ContactConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-dnsimple.contact.ContactConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-dnsimple.contact.ContactConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-dnsimple.contact.ContactConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-dnsimple.contact.ContactConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-dnsimple.contact.ContactConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-dnsimple.contact.ContactConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `address1`<sup>Required</sup> <a name="address1" id="@cdktf/provider-dnsimple.contact.ContactConfig.property.address1"></a>

```typescript
public readonly address1: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dnsimple/dnsimple/1.3.0/docs/resources/contact#address1 Contact#address1}.

---

##### `city`<sup>Required</sup> <a name="city" id="@cdktf/provider-dnsimple.contact.ContactConfig.property.city"></a>

```typescript
public readonly city: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dnsimple/dnsimple/1.3.0/docs/resources/contact#city Contact#city}.

---

##### `country`<sup>Required</sup> <a name="country" id="@cdktf/provider-dnsimple.contact.ContactConfig.property.country"></a>

```typescript
public readonly country: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dnsimple/dnsimple/1.3.0/docs/resources/contact#country Contact#country}.

---

##### `email`<sup>Required</sup> <a name="email" id="@cdktf/provider-dnsimple.contact.ContactConfig.property.email"></a>

```typescript
public readonly email: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dnsimple/dnsimple/1.3.0/docs/resources/contact#email Contact#email}.

---

##### `firstName`<sup>Required</sup> <a name="firstName" id="@cdktf/provider-dnsimple.contact.ContactConfig.property.firstName"></a>

```typescript
public readonly firstName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dnsimple/dnsimple/1.3.0/docs/resources/contact#first_name Contact#first_name}.

---

##### `lastName`<sup>Required</sup> <a name="lastName" id="@cdktf/provider-dnsimple.contact.ContactConfig.property.lastName"></a>

```typescript
public readonly lastName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dnsimple/dnsimple/1.3.0/docs/resources/contact#last_name Contact#last_name}.

---

##### `phone`<sup>Required</sup> <a name="phone" id="@cdktf/provider-dnsimple.contact.ContactConfig.property.phone"></a>

```typescript
public readonly phone: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dnsimple/dnsimple/1.3.0/docs/resources/contact#phone Contact#phone}.

---

##### `postalCode`<sup>Required</sup> <a name="postalCode" id="@cdktf/provider-dnsimple.contact.ContactConfig.property.postalCode"></a>

```typescript
public readonly postalCode: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dnsimple/dnsimple/1.3.0/docs/resources/contact#postal_code Contact#postal_code}.

---

##### `stateProvince`<sup>Required</sup> <a name="stateProvince" id="@cdktf/provider-dnsimple.contact.ContactConfig.property.stateProvince"></a>

```typescript
public readonly stateProvince: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dnsimple/dnsimple/1.3.0/docs/resources/contact#state_province Contact#state_province}.

---

##### `address2`<sup>Optional</sup> <a name="address2" id="@cdktf/provider-dnsimple.contact.ContactConfig.property.address2"></a>

```typescript
public readonly address2: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dnsimple/dnsimple/1.3.0/docs/resources/contact#address2 Contact#address2}.

---

##### `fax`<sup>Optional</sup> <a name="fax" id="@cdktf/provider-dnsimple.contact.ContactConfig.property.fax"></a>

```typescript
public readonly fax: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dnsimple/dnsimple/1.3.0/docs/resources/contact#fax Contact#fax}.

---

##### `jobTitle`<sup>Optional</sup> <a name="jobTitle" id="@cdktf/provider-dnsimple.contact.ContactConfig.property.jobTitle"></a>

```typescript
public readonly jobTitle: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dnsimple/dnsimple/1.3.0/docs/resources/contact#job_title Contact#job_title}.

---

##### `label`<sup>Optional</sup> <a name="label" id="@cdktf/provider-dnsimple.contact.ContactConfig.property.label"></a>

```typescript
public readonly label: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dnsimple/dnsimple/1.3.0/docs/resources/contact#label Contact#label}.

---

##### `organizationName`<sup>Optional</sup> <a name="organizationName" id="@cdktf/provider-dnsimple.contact.ContactConfig.property.organizationName"></a>

```typescript
public readonly organizationName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dnsimple/dnsimple/1.3.0/docs/resources/contact#organization_name Contact#organization_name}.

---



