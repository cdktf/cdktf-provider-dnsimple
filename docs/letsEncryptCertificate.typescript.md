# `letsEncryptCertificate` Submodule <a name="`letsEncryptCertificate` Submodule" id="@cdktf/provider-dnsimple.letsEncryptCertificate"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LetsEncryptCertificate <a name="LetsEncryptCertificate" id="@cdktf/provider-dnsimple.letsEncryptCertificate.LetsEncryptCertificate"></a>

Represents a {@link https://registry.terraform.io/providers/dnsimple/dnsimple/1.5.0/docs/resources/lets_encrypt_certificate dnsimple_lets_encrypt_certificate}.

#### Initializers <a name="Initializers" id="@cdktf/provider-dnsimple.letsEncryptCertificate.LetsEncryptCertificate.Initializer"></a>

```typescript
import { letsEncryptCertificate } from '@cdktf/provider-dnsimple'

new letsEncryptCertificate.LetsEncryptCertificate(scope: Construct, id: string, config: LetsEncryptCertificateConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-dnsimple.letsEncryptCertificate.LetsEncryptCertificate.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-dnsimple.letsEncryptCertificate.LetsEncryptCertificate.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-dnsimple.letsEncryptCertificate.LetsEncryptCertificate.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-dnsimple.letsEncryptCertificate.LetsEncryptCertificateConfig">LetsEncryptCertificateConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-dnsimple.letsEncryptCertificate.LetsEncryptCertificate.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-dnsimple.letsEncryptCertificate.LetsEncryptCertificate.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-dnsimple.letsEncryptCertificate.LetsEncryptCertificate.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-dnsimple.letsEncryptCertificate.LetsEncryptCertificateConfig">LetsEncryptCertificateConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-dnsimple.letsEncryptCertificate.LetsEncryptCertificate.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-dnsimple.letsEncryptCertificate.LetsEncryptCertificate.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.letsEncryptCertificate.LetsEncryptCertificate.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-dnsimple.letsEncryptCertificate.LetsEncryptCertificate.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-dnsimple.letsEncryptCertificate.LetsEncryptCertificate.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.letsEncryptCertificate.LetsEncryptCertificate.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.letsEncryptCertificate.LetsEncryptCertificate.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-dnsimple.letsEncryptCertificate.LetsEncryptCertificate.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-dnsimple.letsEncryptCertificate.LetsEncryptCertificate.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.letsEncryptCertificate.LetsEncryptCertificate.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.letsEncryptCertificate.LetsEncryptCertificate.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.letsEncryptCertificate.LetsEncryptCertificate.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.letsEncryptCertificate.LetsEncryptCertificate.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.letsEncryptCertificate.LetsEncryptCertificate.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.letsEncryptCertificate.LetsEncryptCertificate.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.letsEncryptCertificate.LetsEncryptCertificate.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.letsEncryptCertificate.LetsEncryptCertificate.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.letsEncryptCertificate.LetsEncryptCertificate.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.letsEncryptCertificate.LetsEncryptCertificate.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.letsEncryptCertificate.LetsEncryptCertificate.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.letsEncryptCertificate.LetsEncryptCertificate.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-dnsimple.letsEncryptCertificate.LetsEncryptCertificate.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-dnsimple.letsEncryptCertificate.LetsEncryptCertificate.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-dnsimple.letsEncryptCertificate.LetsEncryptCertificate.resetAlternateNames">resetAlternateNames</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.letsEncryptCertificate.LetsEncryptCertificate.resetSignatureAlgorithm">resetSignatureAlgorithm</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-dnsimple.letsEncryptCertificate.LetsEncryptCertificate.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-dnsimple.letsEncryptCertificate.LetsEncryptCertificate.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-dnsimple.letsEncryptCertificate.LetsEncryptCertificate.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-dnsimple.letsEncryptCertificate.LetsEncryptCertificate.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-dnsimple.letsEncryptCertificate.LetsEncryptCertificate.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-dnsimple.letsEncryptCertificate.LetsEncryptCertificate.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-dnsimple.letsEncryptCertificate.LetsEncryptCertificate.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-dnsimple.letsEncryptCertificate.LetsEncryptCertificate.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-dnsimple.letsEncryptCertificate.LetsEncryptCertificate.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-dnsimple.letsEncryptCertificate.LetsEncryptCertificate.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-dnsimple.letsEncryptCertificate.LetsEncryptCertificate.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-dnsimple.letsEncryptCertificate.LetsEncryptCertificate.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-dnsimple.letsEncryptCertificate.LetsEncryptCertificate.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-dnsimple.letsEncryptCertificate.LetsEncryptCertificate.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-dnsimple.letsEncryptCertificate.LetsEncryptCertificate.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-dnsimple.letsEncryptCertificate.LetsEncryptCertificate.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-dnsimple.letsEncryptCertificate.LetsEncryptCertificate.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-dnsimple.letsEncryptCertificate.LetsEncryptCertificate.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-dnsimple.letsEncryptCertificate.LetsEncryptCertificate.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-dnsimple.letsEncryptCertificate.LetsEncryptCertificate.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-dnsimple.letsEncryptCertificate.LetsEncryptCertificate.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-dnsimple.letsEncryptCertificate.LetsEncryptCertificate.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-dnsimple.letsEncryptCertificate.LetsEncryptCertificate.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-dnsimple.letsEncryptCertificate.LetsEncryptCertificate.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-dnsimple.letsEncryptCertificate.LetsEncryptCertificate.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-dnsimple.letsEncryptCertificate.LetsEncryptCertificate.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-dnsimple.letsEncryptCertificate.LetsEncryptCertificate.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-dnsimple.letsEncryptCertificate.LetsEncryptCertificate.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-dnsimple.letsEncryptCertificate.LetsEncryptCertificate.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-dnsimple.letsEncryptCertificate.LetsEncryptCertificate.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-dnsimple.letsEncryptCertificate.LetsEncryptCertificate.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-dnsimple.letsEncryptCertificate.LetsEncryptCertificate.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-dnsimple.letsEncryptCertificate.LetsEncryptCertificate.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-dnsimple.letsEncryptCertificate.LetsEncryptCertificate.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-dnsimple.letsEncryptCertificate.LetsEncryptCertificate.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-dnsimple.letsEncryptCertificate.LetsEncryptCertificate.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-dnsimple.letsEncryptCertificate.LetsEncryptCertificate.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-dnsimple.letsEncryptCertificate.LetsEncryptCertificate.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-dnsimple.letsEncryptCertificate.LetsEncryptCertificate.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-dnsimple.letsEncryptCertificate.LetsEncryptCertificate.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-dnsimple.letsEncryptCertificate.LetsEncryptCertificate.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-dnsimple.letsEncryptCertificate.LetsEncryptCertificate.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-dnsimple.letsEncryptCertificate.LetsEncryptCertificate.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetAlternateNames` <a name="resetAlternateNames" id="@cdktf/provider-dnsimple.letsEncryptCertificate.LetsEncryptCertificate.resetAlternateNames"></a>

```typescript
public resetAlternateNames(): void
```

##### `resetSignatureAlgorithm` <a name="resetSignatureAlgorithm" id="@cdktf/provider-dnsimple.letsEncryptCertificate.LetsEncryptCertificate.resetSignatureAlgorithm"></a>

```typescript
public resetSignatureAlgorithm(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-dnsimple.letsEncryptCertificate.LetsEncryptCertificate.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-dnsimple.letsEncryptCertificate.LetsEncryptCertificate.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.letsEncryptCertificate.LetsEncryptCertificate.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.letsEncryptCertificate.LetsEncryptCertificate.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a LetsEncryptCertificate resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-dnsimple.letsEncryptCertificate.LetsEncryptCertificate.isConstruct"></a>

```typescript
import { letsEncryptCertificate } from '@cdktf/provider-dnsimple'

letsEncryptCertificate.LetsEncryptCertificate.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-dnsimple.letsEncryptCertificate.LetsEncryptCertificate.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-dnsimple.letsEncryptCertificate.LetsEncryptCertificate.isTerraformElement"></a>

```typescript
import { letsEncryptCertificate } from '@cdktf/provider-dnsimple'

letsEncryptCertificate.LetsEncryptCertificate.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-dnsimple.letsEncryptCertificate.LetsEncryptCertificate.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-dnsimple.letsEncryptCertificate.LetsEncryptCertificate.isTerraformResource"></a>

```typescript
import { letsEncryptCertificate } from '@cdktf/provider-dnsimple'

letsEncryptCertificate.LetsEncryptCertificate.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-dnsimple.letsEncryptCertificate.LetsEncryptCertificate.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-dnsimple.letsEncryptCertificate.LetsEncryptCertificate.generateConfigForImport"></a>

```typescript
import { letsEncryptCertificate } from '@cdktf/provider-dnsimple'

letsEncryptCertificate.LetsEncryptCertificate.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a LetsEncryptCertificate resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-dnsimple.letsEncryptCertificate.LetsEncryptCertificate.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-dnsimple.letsEncryptCertificate.LetsEncryptCertificate.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the LetsEncryptCertificate to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-dnsimple.letsEncryptCertificate.LetsEncryptCertificate.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing LetsEncryptCertificate that should be imported.

Refer to the {@link https://registry.terraform.io/providers/dnsimple/dnsimple/1.5.0/docs/resources/lets_encrypt_certificate#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-dnsimple.letsEncryptCertificate.LetsEncryptCertificate.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the LetsEncryptCertificate to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-dnsimple.letsEncryptCertificate.LetsEncryptCertificate.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-dnsimple.letsEncryptCertificate.LetsEncryptCertificate.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.letsEncryptCertificate.LetsEncryptCertificate.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.letsEncryptCertificate.LetsEncryptCertificate.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.letsEncryptCertificate.LetsEncryptCertificate.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.letsEncryptCertificate.LetsEncryptCertificate.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.letsEncryptCertificate.LetsEncryptCertificate.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.letsEncryptCertificate.LetsEncryptCertificate.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.letsEncryptCertificate.LetsEncryptCertificate.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.letsEncryptCertificate.LetsEncryptCertificate.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.letsEncryptCertificate.LetsEncryptCertificate.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.letsEncryptCertificate.LetsEncryptCertificate.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.letsEncryptCertificate.LetsEncryptCertificate.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.letsEncryptCertificate.LetsEncryptCertificate.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.letsEncryptCertificate.LetsEncryptCertificate.property.authorityIdentifier">authorityIdentifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.letsEncryptCertificate.LetsEncryptCertificate.property.createdAt">createdAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.letsEncryptCertificate.LetsEncryptCertificate.property.csr">csr</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.letsEncryptCertificate.LetsEncryptCertificate.property.expiresAt">expiresAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.letsEncryptCertificate.LetsEncryptCertificate.property.id">id</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.letsEncryptCertificate.LetsEncryptCertificate.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.letsEncryptCertificate.LetsEncryptCertificate.property.updatedAt">updatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.letsEncryptCertificate.LetsEncryptCertificate.property.years">years</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.letsEncryptCertificate.LetsEncryptCertificate.property.alternateNamesInput">alternateNamesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.letsEncryptCertificate.LetsEncryptCertificate.property.autoRenewInput">autoRenewInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.letsEncryptCertificate.LetsEncryptCertificate.property.domainIdInput">domainIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.letsEncryptCertificate.LetsEncryptCertificate.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.letsEncryptCertificate.LetsEncryptCertificate.property.signatureAlgorithmInput">signatureAlgorithmInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.letsEncryptCertificate.LetsEncryptCertificate.property.alternateNames">alternateNames</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.letsEncryptCertificate.LetsEncryptCertificate.property.autoRenew">autoRenew</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.letsEncryptCertificate.LetsEncryptCertificate.property.domainId">domainId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.letsEncryptCertificate.LetsEncryptCertificate.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.letsEncryptCertificate.LetsEncryptCertificate.property.signatureAlgorithm">signatureAlgorithm</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-dnsimple.letsEncryptCertificate.LetsEncryptCertificate.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-dnsimple.letsEncryptCertificate.LetsEncryptCertificate.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-dnsimple.letsEncryptCertificate.LetsEncryptCertificate.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-dnsimple.letsEncryptCertificate.LetsEncryptCertificate.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-dnsimple.letsEncryptCertificate.LetsEncryptCertificate.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-dnsimple.letsEncryptCertificate.LetsEncryptCertificate.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-dnsimple.letsEncryptCertificate.LetsEncryptCertificate.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-dnsimple.letsEncryptCertificate.LetsEncryptCertificate.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-dnsimple.letsEncryptCertificate.LetsEncryptCertificate.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-dnsimple.letsEncryptCertificate.LetsEncryptCertificate.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-dnsimple.letsEncryptCertificate.LetsEncryptCertificate.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-dnsimple.letsEncryptCertificate.LetsEncryptCertificate.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-dnsimple.letsEncryptCertificate.LetsEncryptCertificate.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-dnsimple.letsEncryptCertificate.LetsEncryptCertificate.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `authorityIdentifier`<sup>Required</sup> <a name="authorityIdentifier" id="@cdktf/provider-dnsimple.letsEncryptCertificate.LetsEncryptCertificate.property.authorityIdentifier"></a>

```typescript
public readonly authorityIdentifier: string;
```

- *Type:* string

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktf/provider-dnsimple.letsEncryptCertificate.LetsEncryptCertificate.property.createdAt"></a>

```typescript
public readonly createdAt: string;
```

- *Type:* string

---

##### `csr`<sup>Required</sup> <a name="csr" id="@cdktf/provider-dnsimple.letsEncryptCertificate.LetsEncryptCertificate.property.csr"></a>

```typescript
public readonly csr: string;
```

- *Type:* string

---

##### `expiresAt`<sup>Required</sup> <a name="expiresAt" id="@cdktf/provider-dnsimple.letsEncryptCertificate.LetsEncryptCertificate.property.expiresAt"></a>

```typescript
public readonly expiresAt: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-dnsimple.letsEncryptCertificate.LetsEncryptCertificate.property.id"></a>

```typescript
public readonly id: number;
```

- *Type:* number

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-dnsimple.letsEncryptCertificate.LetsEncryptCertificate.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `updatedAt`<sup>Required</sup> <a name="updatedAt" id="@cdktf/provider-dnsimple.letsEncryptCertificate.LetsEncryptCertificate.property.updatedAt"></a>

```typescript
public readonly updatedAt: string;
```

- *Type:* string

---

##### `years`<sup>Required</sup> <a name="years" id="@cdktf/provider-dnsimple.letsEncryptCertificate.LetsEncryptCertificate.property.years"></a>

```typescript
public readonly years: number;
```

- *Type:* number

---

##### `alternateNamesInput`<sup>Optional</sup> <a name="alternateNamesInput" id="@cdktf/provider-dnsimple.letsEncryptCertificate.LetsEncryptCertificate.property.alternateNamesInput"></a>

```typescript
public readonly alternateNamesInput: string[];
```

- *Type:* string[]

---

##### `autoRenewInput`<sup>Optional</sup> <a name="autoRenewInput" id="@cdktf/provider-dnsimple.letsEncryptCertificate.LetsEncryptCertificate.property.autoRenewInput"></a>

```typescript
public readonly autoRenewInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `domainIdInput`<sup>Optional</sup> <a name="domainIdInput" id="@cdktf/provider-dnsimple.letsEncryptCertificate.LetsEncryptCertificate.property.domainIdInput"></a>

```typescript
public readonly domainIdInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-dnsimple.letsEncryptCertificate.LetsEncryptCertificate.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `signatureAlgorithmInput`<sup>Optional</sup> <a name="signatureAlgorithmInput" id="@cdktf/provider-dnsimple.letsEncryptCertificate.LetsEncryptCertificate.property.signatureAlgorithmInput"></a>

```typescript
public readonly signatureAlgorithmInput: string;
```

- *Type:* string

---

##### `alternateNames`<sup>Required</sup> <a name="alternateNames" id="@cdktf/provider-dnsimple.letsEncryptCertificate.LetsEncryptCertificate.property.alternateNames"></a>

```typescript
public readonly alternateNames: string[];
```

- *Type:* string[]

---

##### `autoRenew`<sup>Required</sup> <a name="autoRenew" id="@cdktf/provider-dnsimple.letsEncryptCertificate.LetsEncryptCertificate.property.autoRenew"></a>

```typescript
public readonly autoRenew: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `domainId`<sup>Required</sup> <a name="domainId" id="@cdktf/provider-dnsimple.letsEncryptCertificate.LetsEncryptCertificate.property.domainId"></a>

```typescript
public readonly domainId: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-dnsimple.letsEncryptCertificate.LetsEncryptCertificate.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `signatureAlgorithm`<sup>Required</sup> <a name="signatureAlgorithm" id="@cdktf/provider-dnsimple.letsEncryptCertificate.LetsEncryptCertificate.property.signatureAlgorithm"></a>

```typescript
public readonly signatureAlgorithm: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-dnsimple.letsEncryptCertificate.LetsEncryptCertificate.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-dnsimple.letsEncryptCertificate.LetsEncryptCertificate.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### LetsEncryptCertificateConfig <a name="LetsEncryptCertificateConfig" id="@cdktf/provider-dnsimple.letsEncryptCertificate.LetsEncryptCertificateConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-dnsimple.letsEncryptCertificate.LetsEncryptCertificateConfig.Initializer"></a>

```typescript
import { letsEncryptCertificate } from '@cdktf/provider-dnsimple'

const letsEncryptCertificateConfig: letsEncryptCertificate.LetsEncryptCertificateConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-dnsimple.letsEncryptCertificate.LetsEncryptCertificateConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.letsEncryptCertificate.LetsEncryptCertificateConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.letsEncryptCertificate.LetsEncryptCertificateConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.letsEncryptCertificate.LetsEncryptCertificateConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.letsEncryptCertificate.LetsEncryptCertificateConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.letsEncryptCertificate.LetsEncryptCertificateConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.letsEncryptCertificate.LetsEncryptCertificateConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.letsEncryptCertificate.LetsEncryptCertificateConfig.property.autoRenew">autoRenew</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dnsimple/dnsimple/1.5.0/docs/resources/lets_encrypt_certificate#auto_renew LetsEncryptCertificate#auto_renew}. |
| <code><a href="#@cdktf/provider-dnsimple.letsEncryptCertificate.LetsEncryptCertificateConfig.property.domainId">domainId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dnsimple/dnsimple/1.5.0/docs/resources/lets_encrypt_certificate#domain_id LetsEncryptCertificate#domain_id}. |
| <code><a href="#@cdktf/provider-dnsimple.letsEncryptCertificate.LetsEncryptCertificateConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dnsimple/dnsimple/1.5.0/docs/resources/lets_encrypt_certificate#name LetsEncryptCertificate#name}. |
| <code><a href="#@cdktf/provider-dnsimple.letsEncryptCertificate.LetsEncryptCertificateConfig.property.alternateNames">alternateNames</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dnsimple/dnsimple/1.5.0/docs/resources/lets_encrypt_certificate#alternate_names LetsEncryptCertificate#alternate_names}. |
| <code><a href="#@cdktf/provider-dnsimple.letsEncryptCertificate.LetsEncryptCertificateConfig.property.signatureAlgorithm">signatureAlgorithm</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dnsimple/dnsimple/1.5.0/docs/resources/lets_encrypt_certificate#signature_algorithm LetsEncryptCertificate#signature_algorithm}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-dnsimple.letsEncryptCertificate.LetsEncryptCertificateConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-dnsimple.letsEncryptCertificate.LetsEncryptCertificateConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-dnsimple.letsEncryptCertificate.LetsEncryptCertificateConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-dnsimple.letsEncryptCertificate.LetsEncryptCertificateConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-dnsimple.letsEncryptCertificate.LetsEncryptCertificateConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-dnsimple.letsEncryptCertificate.LetsEncryptCertificateConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-dnsimple.letsEncryptCertificate.LetsEncryptCertificateConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `autoRenew`<sup>Required</sup> <a name="autoRenew" id="@cdktf/provider-dnsimple.letsEncryptCertificate.LetsEncryptCertificateConfig.property.autoRenew"></a>

```typescript
public readonly autoRenew: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dnsimple/dnsimple/1.5.0/docs/resources/lets_encrypt_certificate#auto_renew LetsEncryptCertificate#auto_renew}.

---

##### `domainId`<sup>Required</sup> <a name="domainId" id="@cdktf/provider-dnsimple.letsEncryptCertificate.LetsEncryptCertificateConfig.property.domainId"></a>

```typescript
public readonly domainId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dnsimple/dnsimple/1.5.0/docs/resources/lets_encrypt_certificate#domain_id LetsEncryptCertificate#domain_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-dnsimple.letsEncryptCertificate.LetsEncryptCertificateConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dnsimple/dnsimple/1.5.0/docs/resources/lets_encrypt_certificate#name LetsEncryptCertificate#name}.

---

##### `alternateNames`<sup>Optional</sup> <a name="alternateNames" id="@cdktf/provider-dnsimple.letsEncryptCertificate.LetsEncryptCertificateConfig.property.alternateNames"></a>

```typescript
public readonly alternateNames: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dnsimple/dnsimple/1.5.0/docs/resources/lets_encrypt_certificate#alternate_names LetsEncryptCertificate#alternate_names}.

---

##### `signatureAlgorithm`<sup>Optional</sup> <a name="signatureAlgorithm" id="@cdktf/provider-dnsimple.letsEncryptCertificate.LetsEncryptCertificateConfig.property.signatureAlgorithm"></a>

```typescript
public readonly signatureAlgorithm: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dnsimple/dnsimple/1.5.0/docs/resources/lets_encrypt_certificate#signature_algorithm LetsEncryptCertificate#signature_algorithm}.

---



