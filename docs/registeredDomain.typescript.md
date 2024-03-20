# `registeredDomain` Submodule <a name="`registeredDomain` Submodule" id="@cdktf/provider-dnsimple.registeredDomain"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### RegisteredDomain <a name="RegisteredDomain" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain"></a>

Represents a {@link https://registry.terraform.io/providers/dnsimple/dnsimple/1.5.0/docs/resources/registered_domain dnsimple_registered_domain}.

#### Initializers <a name="Initializers" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.Initializer"></a>

```typescript
import { registeredDomain } from '@cdktf/provider-dnsimple'

new registeredDomain.RegisteredDomain(scope: Construct, id: string, config: RegisteredDomainConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainConfig">RegisteredDomainConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainConfig">RegisteredDomainConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
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

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.putTimeouts"></a>

```typescript
public putTimeouts(value: RegisteredDomainTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainTimeouts">RegisteredDomainTimeouts</a>

---

##### `resetAutoRenewEnabled` <a name="resetAutoRenewEnabled" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.resetAutoRenewEnabled"></a>

```typescript
public resetAutoRenewEnabled(): void
```

##### `resetDnssecEnabled` <a name="resetDnssecEnabled" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.resetDnssecEnabled"></a>

```typescript
public resetDnssecEnabled(): void
```

##### `resetExtendedAttributes` <a name="resetExtendedAttributes" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.resetExtendedAttributes"></a>

```typescript
public resetExtendedAttributes(): void
```

##### `resetPremiumPrice` <a name="resetPremiumPrice" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.resetPremiumPrice"></a>

```typescript
public resetPremiumPrice(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

##### `resetTransferLockEnabled` <a name="resetTransferLockEnabled" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.resetTransferLockEnabled"></a>

```typescript
public resetTransferLockEnabled(): void
```

##### `resetWhoisPrivacyEnabled` <a name="resetWhoisPrivacyEnabled" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.resetWhoisPrivacyEnabled"></a>

```typescript
public resetWhoisPrivacyEnabled(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a RegisteredDomain resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.isConstruct"></a>

```typescript
import { registeredDomain } from '@cdktf/provider-dnsimple'

registeredDomain.RegisteredDomain.isConstruct(x: any)
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

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.isTerraformElement"></a>

```typescript
import { registeredDomain } from '@cdktf/provider-dnsimple'

registeredDomain.RegisteredDomain.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.isTerraformResource"></a>

```typescript
import { registeredDomain } from '@cdktf/provider-dnsimple'

registeredDomain.RegisteredDomain.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.generateConfigForImport"></a>

```typescript
import { registeredDomain } from '@cdktf/provider-dnsimple'

registeredDomain.RegisteredDomain.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a RegisteredDomain resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the RegisteredDomain to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing RegisteredDomain that should be imported.

Refer to the {@link https://registry.terraform.io/providers/dnsimple/dnsimple/1.5.0/docs/resources/registered_domain#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the RegisteredDomain to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.property.accountId">accountId</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.property.domainRegistration">domainRegistration</a></code> | <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainDomainRegistrationOutputReference">RegisteredDomainDomainRegistrationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.property.expiresAt">expiresAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.property.id">id</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.property.registrantChange">registrantChange</a></code> | <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainRegistrantChangeOutputReference">RegisteredDomainRegistrantChangeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainTimeoutsOutputReference">RegisteredDomainTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.property.unicodeName">unicodeName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.property.autoRenewEnabledInput">autoRenewEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.property.contactIdInput">contactIdInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.property.dnssecEnabledInput">dnssecEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.property.extendedAttributesInput">extendedAttributesInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.property.premiumPriceInput">premiumPriceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainTimeouts">RegisteredDomainTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.property.transferLockEnabledInput">transferLockEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.property.whoisPrivacyEnabledInput">whoisPrivacyEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.property.autoRenewEnabled">autoRenewEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.property.contactId">contactId</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.property.dnssecEnabled">dnssecEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.property.extendedAttributes">extendedAttributes</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.property.premiumPrice">premiumPrice</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.property.transferLockEnabled">transferLockEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.property.whoisPrivacyEnabled">whoisPrivacyEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.property.accountId"></a>

```typescript
public readonly accountId: number;
```

- *Type:* number

---

##### `domainRegistration`<sup>Required</sup> <a name="domainRegistration" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.property.domainRegistration"></a>

```typescript
public readonly domainRegistration: RegisteredDomainDomainRegistrationOutputReference;
```

- *Type:* <a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainDomainRegistrationOutputReference">RegisteredDomainDomainRegistrationOutputReference</a>

---

##### `expiresAt`<sup>Required</sup> <a name="expiresAt" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.property.expiresAt"></a>

```typescript
public readonly expiresAt: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.property.id"></a>

```typescript
public readonly id: number;
```

- *Type:* number

---

##### `registrantChange`<sup>Required</sup> <a name="registrantChange" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.property.registrantChange"></a>

```typescript
public readonly registrantChange: RegisteredDomainRegistrantChangeOutputReference;
```

- *Type:* <a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainRegistrantChangeOutputReference">RegisteredDomainRegistrantChangeOutputReference</a>

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.property.timeouts"></a>

```typescript
public readonly timeouts: RegisteredDomainTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainTimeoutsOutputReference">RegisteredDomainTimeoutsOutputReference</a>

---

##### `unicodeName`<sup>Required</sup> <a name="unicodeName" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.property.unicodeName"></a>

```typescript
public readonly unicodeName: string;
```

- *Type:* string

---

##### `autoRenewEnabledInput`<sup>Optional</sup> <a name="autoRenewEnabledInput" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.property.autoRenewEnabledInput"></a>

```typescript
public readonly autoRenewEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `contactIdInput`<sup>Optional</sup> <a name="contactIdInput" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.property.contactIdInput"></a>

```typescript
public readonly contactIdInput: number;
```

- *Type:* number

---

##### `dnssecEnabledInput`<sup>Optional</sup> <a name="dnssecEnabledInput" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.property.dnssecEnabledInput"></a>

```typescript
public readonly dnssecEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `extendedAttributesInput`<sup>Optional</sup> <a name="extendedAttributesInput" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.property.extendedAttributesInput"></a>

```typescript
public readonly extendedAttributesInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `premiumPriceInput`<sup>Optional</sup> <a name="premiumPriceInput" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.property.premiumPriceInput"></a>

```typescript
public readonly premiumPriceInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | RegisteredDomainTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainTimeouts">RegisteredDomainTimeouts</a>

---

##### `transferLockEnabledInput`<sup>Optional</sup> <a name="transferLockEnabledInput" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.property.transferLockEnabledInput"></a>

```typescript
public readonly transferLockEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `whoisPrivacyEnabledInput`<sup>Optional</sup> <a name="whoisPrivacyEnabledInput" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.property.whoisPrivacyEnabledInput"></a>

```typescript
public readonly whoisPrivacyEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `autoRenewEnabled`<sup>Required</sup> <a name="autoRenewEnabled" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.property.autoRenewEnabled"></a>

```typescript
public readonly autoRenewEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `contactId`<sup>Required</sup> <a name="contactId" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.property.contactId"></a>

```typescript
public readonly contactId: number;
```

- *Type:* number

---

##### `dnssecEnabled`<sup>Required</sup> <a name="dnssecEnabled" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.property.dnssecEnabled"></a>

```typescript
public readonly dnssecEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `extendedAttributes`<sup>Required</sup> <a name="extendedAttributes" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.property.extendedAttributes"></a>

```typescript
public readonly extendedAttributes: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `premiumPrice`<sup>Required</sup> <a name="premiumPrice" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.property.premiumPrice"></a>

```typescript
public readonly premiumPrice: string;
```

- *Type:* string

---

##### `transferLockEnabled`<sup>Required</sup> <a name="transferLockEnabled" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.property.transferLockEnabled"></a>

```typescript
public readonly transferLockEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `whoisPrivacyEnabled`<sup>Required</sup> <a name="whoisPrivacyEnabled" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.property.whoisPrivacyEnabled"></a>

```typescript
public readonly whoisPrivacyEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomain.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### RegisteredDomainConfig <a name="RegisteredDomainConfig" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainConfig.Initializer"></a>

```typescript
import { registeredDomain } from '@cdktf/provider-dnsimple'

const registeredDomainConfig: registeredDomain.RegisteredDomainConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainConfig.property.contactId">contactId</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dnsimple/dnsimple/1.5.0/docs/resources/registered_domain#contact_id RegisteredDomain#contact_id}. |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dnsimple/dnsimple/1.5.0/docs/resources/registered_domain#name RegisteredDomain#name}. |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainConfig.property.autoRenewEnabled">autoRenewEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dnsimple/dnsimple/1.5.0/docs/resources/registered_domain#auto_renew_enabled RegisteredDomain#auto_renew_enabled}. |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainConfig.property.dnssecEnabled">dnssecEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dnsimple/dnsimple/1.5.0/docs/resources/registered_domain#dnssec_enabled RegisteredDomain#dnssec_enabled}. |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainConfig.property.extendedAttributes">extendedAttributes</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dnsimple/dnsimple/1.5.0/docs/resources/registered_domain#extended_attributes RegisteredDomain#extended_attributes}. |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainConfig.property.premiumPrice">premiumPrice</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dnsimple/dnsimple/1.5.0/docs/resources/registered_domain#premium_price RegisteredDomain#premium_price}. |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainTimeouts">RegisteredDomainTimeouts</a></code> | Timeouts for operations, given as a parsable string as in `10m` or `30s`. |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainConfig.property.transferLockEnabled">transferLockEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dnsimple/dnsimple/1.5.0/docs/resources/registered_domain#transfer_lock_enabled RegisteredDomain#transfer_lock_enabled}. |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainConfig.property.whoisPrivacyEnabled">whoisPrivacyEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dnsimple/dnsimple/1.5.0/docs/resources/registered_domain#whois_privacy_enabled RegisteredDomain#whois_privacy_enabled}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `contactId`<sup>Required</sup> <a name="contactId" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainConfig.property.contactId"></a>

```typescript
public readonly contactId: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dnsimple/dnsimple/1.5.0/docs/resources/registered_domain#contact_id RegisteredDomain#contact_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dnsimple/dnsimple/1.5.0/docs/resources/registered_domain#name RegisteredDomain#name}.

---

##### `autoRenewEnabled`<sup>Optional</sup> <a name="autoRenewEnabled" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainConfig.property.autoRenewEnabled"></a>

```typescript
public readonly autoRenewEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dnsimple/dnsimple/1.5.0/docs/resources/registered_domain#auto_renew_enabled RegisteredDomain#auto_renew_enabled}.

---

##### `dnssecEnabled`<sup>Optional</sup> <a name="dnssecEnabled" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainConfig.property.dnssecEnabled"></a>

```typescript
public readonly dnssecEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dnsimple/dnsimple/1.5.0/docs/resources/registered_domain#dnssec_enabled RegisteredDomain#dnssec_enabled}.

---

##### `extendedAttributes`<sup>Optional</sup> <a name="extendedAttributes" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainConfig.property.extendedAttributes"></a>

```typescript
public readonly extendedAttributes: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dnsimple/dnsimple/1.5.0/docs/resources/registered_domain#extended_attributes RegisteredDomain#extended_attributes}.

---

##### `premiumPrice`<sup>Optional</sup> <a name="premiumPrice" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainConfig.property.premiumPrice"></a>

```typescript
public readonly premiumPrice: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dnsimple/dnsimple/1.5.0/docs/resources/registered_domain#premium_price RegisteredDomain#premium_price}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainConfig.property.timeouts"></a>

```typescript
public readonly timeouts: RegisteredDomainTimeouts;
```

- *Type:* <a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainTimeouts">RegisteredDomainTimeouts</a>

Timeouts for operations, given as a parsable string as in `10m` or `30s`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dnsimple/dnsimple/1.5.0/docs/resources/registered_domain#timeouts RegisteredDomain#timeouts}

---

##### `transferLockEnabled`<sup>Optional</sup> <a name="transferLockEnabled" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainConfig.property.transferLockEnabled"></a>

```typescript
public readonly transferLockEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dnsimple/dnsimple/1.5.0/docs/resources/registered_domain#transfer_lock_enabled RegisteredDomain#transfer_lock_enabled}.

---

##### `whoisPrivacyEnabled`<sup>Optional</sup> <a name="whoisPrivacyEnabled" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainConfig.property.whoisPrivacyEnabled"></a>

```typescript
public readonly whoisPrivacyEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dnsimple/dnsimple/1.5.0/docs/resources/registered_domain#whois_privacy_enabled RegisteredDomain#whois_privacy_enabled}.

---

### RegisteredDomainDomainRegistration <a name="RegisteredDomainDomainRegistration" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainDomainRegistration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainDomainRegistration.Initializer"></a>

```typescript
import { registeredDomain } from '@cdktf/provider-dnsimple'

const registeredDomainDomainRegistration: registeredDomain.RegisteredDomainDomainRegistration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainDomainRegistration.property.state">state</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dnsimple/dnsimple/1.5.0/docs/resources/registered_domain#state RegisteredDomain#state}. |

---

##### `state`<sup>Optional</sup> <a name="state" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainDomainRegistration.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dnsimple/dnsimple/1.5.0/docs/resources/registered_domain#state RegisteredDomain#state}.

---

### RegisteredDomainRegistrantChange <a name="RegisteredDomainRegistrantChange" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainRegistrantChange"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainRegistrantChange.Initializer"></a>

```typescript
import { registeredDomain } from '@cdktf/provider-dnsimple'

const registeredDomainRegistrantChange: registeredDomain.RegisteredDomainRegistrantChange = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainRegistrantChange.property.state">state</a></code> | <code>string</code> | State of the registrant change. |

---

##### `state`<sup>Optional</sup> <a name="state" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainRegistrantChange.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

State of the registrant change.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dnsimple/dnsimple/1.5.0/docs/resources/registered_domain#state RegisteredDomain#state}

---

### RegisteredDomainTimeouts <a name="RegisteredDomainTimeouts" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainTimeouts.Initializer"></a>

```typescript
import { registeredDomain } from '@cdktf/provider-dnsimple'

const registeredDomainTimeouts: registeredDomain.RegisteredDomainTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainTimeouts.property.create">create</a></code> | <code>string</code> | Create timeout. |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainTimeouts.property.delete">delete</a></code> | <code>string</code> | Delete timeout (currently unused). |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainTimeouts.property.update">update</a></code> | <code>string</code> | Update timeout. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Create timeout.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dnsimple/dnsimple/1.5.0/docs/resources/registered_domain#create RegisteredDomain#create}

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Delete timeout (currently unused).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dnsimple/dnsimple/1.5.0/docs/resources/registered_domain#delete RegisteredDomain#delete}

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Update timeout.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dnsimple/dnsimple/1.5.0/docs/resources/registered_domain#update RegisteredDomain#update}

---

## Classes <a name="Classes" id="Classes"></a>

### RegisteredDomainDomainRegistrationOutputReference <a name="RegisteredDomainDomainRegistrationOutputReference" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainDomainRegistrationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainDomainRegistrationOutputReference.Initializer"></a>

```typescript
import { registeredDomain } from '@cdktf/provider-dnsimple'

new registeredDomain.RegisteredDomainDomainRegistrationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainDomainRegistrationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainDomainRegistrationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainDomainRegistrationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainDomainRegistrationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

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

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainDomainRegistrationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainDomainRegistrationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainDomainRegistrationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainDomainRegistrationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainDomainRegistrationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainDomainRegistrationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainDomainRegistrationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainDomainRegistrationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainDomainRegistrationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainDomainRegistrationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainDomainRegistrationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainDomainRegistrationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainDomainRegistrationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainDomainRegistrationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainDomainRegistrationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainDomainRegistrationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainDomainRegistrationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainDomainRegistrationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainDomainRegistrationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainDomainRegistrationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainDomainRegistrationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainDomainRegistrationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainDomainRegistrationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetState` <a name="resetState" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainDomainRegistrationOutputReference.resetState"></a>

```typescript
public resetState(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainDomainRegistrationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainDomainRegistrationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainDomainRegistrationOutputReference.property.id">id</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainDomainRegistrationOutputReference.property.period">period</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainDomainRegistrationOutputReference.property.stateInput">stateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainDomainRegistrationOutputReference.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainDomainRegistrationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainDomainRegistration">RegisteredDomainDomainRegistration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainDomainRegistrationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainDomainRegistrationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainDomainRegistrationOutputReference.property.id"></a>

```typescript
public readonly id: number;
```

- *Type:* number

---

##### `period`<sup>Required</sup> <a name="period" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainDomainRegistrationOutputReference.property.period"></a>

```typescript
public readonly period: number;
```

- *Type:* number

---

##### `stateInput`<sup>Optional</sup> <a name="stateInput" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainDomainRegistrationOutputReference.property.stateInput"></a>

```typescript
public readonly stateInput: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainDomainRegistrationOutputReference.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainDomainRegistrationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: RegisteredDomainDomainRegistration;
```

- *Type:* <a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainDomainRegistration">RegisteredDomainDomainRegistration</a>

---


### RegisteredDomainRegistrantChangeOutputReference <a name="RegisteredDomainRegistrantChangeOutputReference" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainRegistrantChangeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainRegistrantChangeOutputReference.Initializer"></a>

```typescript
import { registeredDomain } from '@cdktf/provider-dnsimple'

new registeredDomain.RegisteredDomainRegistrantChangeOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainRegistrantChangeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainRegistrantChangeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainRegistrantChangeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainRegistrantChangeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainRegistrantChangeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainRegistrantChangeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainRegistrantChangeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainRegistrantChangeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainRegistrantChangeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainRegistrantChangeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainRegistrantChangeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainRegistrantChangeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainRegistrantChangeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainRegistrantChangeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainRegistrantChangeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainRegistrantChangeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainRegistrantChangeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainRegistrantChangeOutputReference.resetState">resetState</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainRegistrantChangeOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainRegistrantChangeOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainRegistrantChangeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainRegistrantChangeOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainRegistrantChangeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainRegistrantChangeOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainRegistrantChangeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainRegistrantChangeOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainRegistrantChangeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainRegistrantChangeOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainRegistrantChangeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainRegistrantChangeOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainRegistrantChangeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainRegistrantChangeOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainRegistrantChangeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainRegistrantChangeOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainRegistrantChangeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainRegistrantChangeOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainRegistrantChangeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainRegistrantChangeOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainRegistrantChangeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainRegistrantChangeOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainRegistrantChangeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainRegistrantChangeOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetState` <a name="resetState" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainRegistrantChangeOutputReference.resetState"></a>

```typescript
public resetState(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainRegistrantChangeOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainRegistrantChangeOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainRegistrantChangeOutputReference.property.accountId">accountId</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainRegistrantChangeOutputReference.property.contactId">contactId</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainRegistrantChangeOutputReference.property.domainId">domainId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainRegistrantChangeOutputReference.property.extendedAttributes">extendedAttributes</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainRegistrantChangeOutputReference.property.id">id</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainRegistrantChangeOutputReference.property.irtLockLiftedBy">irtLockLiftedBy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainRegistrantChangeOutputReference.property.registryOwnerChange">registryOwnerChange</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainRegistrantChangeOutputReference.property.stateInput">stateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainRegistrantChangeOutputReference.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainRegistrantChangeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainRegistrantChange">RegisteredDomainRegistrantChange</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainRegistrantChangeOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainRegistrantChangeOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainRegistrantChangeOutputReference.property.accountId"></a>

```typescript
public readonly accountId: number;
```

- *Type:* number

---

##### `contactId`<sup>Required</sup> <a name="contactId" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainRegistrantChangeOutputReference.property.contactId"></a>

```typescript
public readonly contactId: number;
```

- *Type:* number

---

##### `domainId`<sup>Required</sup> <a name="domainId" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainRegistrantChangeOutputReference.property.domainId"></a>

```typescript
public readonly domainId: string;
```

- *Type:* string

---

##### `extendedAttributes`<sup>Required</sup> <a name="extendedAttributes" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainRegistrantChangeOutputReference.property.extendedAttributes"></a>

```typescript
public readonly extendedAttributes: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainRegistrantChangeOutputReference.property.id"></a>

```typescript
public readonly id: number;
```

- *Type:* number

---

##### `irtLockLiftedBy`<sup>Required</sup> <a name="irtLockLiftedBy" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainRegistrantChangeOutputReference.property.irtLockLiftedBy"></a>

```typescript
public readonly irtLockLiftedBy: string;
```

- *Type:* string

---

##### `registryOwnerChange`<sup>Required</sup> <a name="registryOwnerChange" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainRegistrantChangeOutputReference.property.registryOwnerChange"></a>

```typescript
public readonly registryOwnerChange: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `stateInput`<sup>Optional</sup> <a name="stateInput" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainRegistrantChangeOutputReference.property.stateInput"></a>

```typescript
public readonly stateInput: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainRegistrantChangeOutputReference.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainRegistrantChangeOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: RegisteredDomainRegistrantChange;
```

- *Type:* <a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainRegistrantChange">RegisteredDomainRegistrantChange</a>

---


### RegisteredDomainTimeoutsOutputReference <a name="RegisteredDomainTimeoutsOutputReference" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainTimeoutsOutputReference.Initializer"></a>

```typescript
import { registeredDomain } from '@cdktf/provider-dnsimple'

new registeredDomain.RegisteredDomainTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

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

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainTimeouts">RegisteredDomainTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | RegisteredDomainTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-dnsimple.registeredDomain.RegisteredDomainTimeouts">RegisteredDomainTimeouts</a>

---



