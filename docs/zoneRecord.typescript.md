# `zoneRecord` Submodule <a name="`zoneRecord` Submodule" id="@cdktf/provider-dnsimple.zoneRecord"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ZoneRecord <a name="ZoneRecord" id="@cdktf/provider-dnsimple.zoneRecord.ZoneRecord"></a>

Represents a {@link https://registry.terraform.io/providers/dnsimple/dnsimple/1.3.1/docs/resources/zone_record dnsimple_zone_record}.

#### Initializers <a name="Initializers" id="@cdktf/provider-dnsimple.zoneRecord.ZoneRecord.Initializer"></a>

```typescript
import { zoneRecord } from '@cdktf/provider-dnsimple'

new zoneRecord.ZoneRecord(scope: Construct, id: string, config: ZoneRecordConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-dnsimple.zoneRecord.ZoneRecord.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-dnsimple.zoneRecord.ZoneRecord.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-dnsimple.zoneRecord.ZoneRecord.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-dnsimple.zoneRecord.ZoneRecordConfig">ZoneRecordConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-dnsimple.zoneRecord.ZoneRecord.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-dnsimple.zoneRecord.ZoneRecord.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-dnsimple.zoneRecord.ZoneRecord.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-dnsimple.zoneRecord.ZoneRecordConfig">ZoneRecordConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-dnsimple.zoneRecord.ZoneRecord.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-dnsimple.zoneRecord.ZoneRecord.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.zoneRecord.ZoneRecord.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-dnsimple.zoneRecord.ZoneRecord.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-dnsimple.zoneRecord.ZoneRecord.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.zoneRecord.ZoneRecord.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.zoneRecord.ZoneRecord.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-dnsimple.zoneRecord.ZoneRecord.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-dnsimple.zoneRecord.ZoneRecord.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.zoneRecord.ZoneRecord.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.zoneRecord.ZoneRecord.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.zoneRecord.ZoneRecord.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.zoneRecord.ZoneRecord.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.zoneRecord.ZoneRecord.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.zoneRecord.ZoneRecord.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.zoneRecord.ZoneRecord.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.zoneRecord.ZoneRecord.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.zoneRecord.ZoneRecord.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.zoneRecord.ZoneRecord.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.zoneRecord.ZoneRecord.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.zoneRecord.ZoneRecord.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-dnsimple.zoneRecord.ZoneRecord.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-dnsimple.zoneRecord.ZoneRecord.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-dnsimple.zoneRecord.ZoneRecord.resetPriority">resetPriority</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.zoneRecord.ZoneRecord.resetRegions">resetRegions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.zoneRecord.ZoneRecord.resetTtl">resetTtl</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-dnsimple.zoneRecord.ZoneRecord.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-dnsimple.zoneRecord.ZoneRecord.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-dnsimple.zoneRecord.ZoneRecord.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-dnsimple.zoneRecord.ZoneRecord.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-dnsimple.zoneRecord.ZoneRecord.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-dnsimple.zoneRecord.ZoneRecord.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-dnsimple.zoneRecord.ZoneRecord.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-dnsimple.zoneRecord.ZoneRecord.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-dnsimple.zoneRecord.ZoneRecord.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-dnsimple.zoneRecord.ZoneRecord.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-dnsimple.zoneRecord.ZoneRecord.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-dnsimple.zoneRecord.ZoneRecord.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-dnsimple.zoneRecord.ZoneRecord.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-dnsimple.zoneRecord.ZoneRecord.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-dnsimple.zoneRecord.ZoneRecord.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-dnsimple.zoneRecord.ZoneRecord.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-dnsimple.zoneRecord.ZoneRecord.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-dnsimple.zoneRecord.ZoneRecord.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-dnsimple.zoneRecord.ZoneRecord.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-dnsimple.zoneRecord.ZoneRecord.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-dnsimple.zoneRecord.ZoneRecord.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-dnsimple.zoneRecord.ZoneRecord.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-dnsimple.zoneRecord.ZoneRecord.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-dnsimple.zoneRecord.ZoneRecord.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-dnsimple.zoneRecord.ZoneRecord.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-dnsimple.zoneRecord.ZoneRecord.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-dnsimple.zoneRecord.ZoneRecord.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-dnsimple.zoneRecord.ZoneRecord.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-dnsimple.zoneRecord.ZoneRecord.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-dnsimple.zoneRecord.ZoneRecord.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-dnsimple.zoneRecord.ZoneRecord.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-dnsimple.zoneRecord.ZoneRecord.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-dnsimple.zoneRecord.ZoneRecord.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-dnsimple.zoneRecord.ZoneRecord.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-dnsimple.zoneRecord.ZoneRecord.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-dnsimple.zoneRecord.ZoneRecord.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-dnsimple.zoneRecord.ZoneRecord.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-dnsimple.zoneRecord.ZoneRecord.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-dnsimple.zoneRecord.ZoneRecord.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-dnsimple.zoneRecord.ZoneRecord.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-dnsimple.zoneRecord.ZoneRecord.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-dnsimple.zoneRecord.ZoneRecord.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-dnsimple.zoneRecord.ZoneRecord.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetPriority` <a name="resetPriority" id="@cdktf/provider-dnsimple.zoneRecord.ZoneRecord.resetPriority"></a>

```typescript
public resetPriority(): void
```

##### `resetRegions` <a name="resetRegions" id="@cdktf/provider-dnsimple.zoneRecord.ZoneRecord.resetRegions"></a>

```typescript
public resetRegions(): void
```

##### `resetTtl` <a name="resetTtl" id="@cdktf/provider-dnsimple.zoneRecord.ZoneRecord.resetTtl"></a>

```typescript
public resetTtl(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-dnsimple.zoneRecord.ZoneRecord.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-dnsimple.zoneRecord.ZoneRecord.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.zoneRecord.ZoneRecord.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.zoneRecord.ZoneRecord.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a ZoneRecord resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-dnsimple.zoneRecord.ZoneRecord.isConstruct"></a>

```typescript
import { zoneRecord } from '@cdktf/provider-dnsimple'

zoneRecord.ZoneRecord.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-dnsimple.zoneRecord.ZoneRecord.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-dnsimple.zoneRecord.ZoneRecord.isTerraformElement"></a>

```typescript
import { zoneRecord } from '@cdktf/provider-dnsimple'

zoneRecord.ZoneRecord.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-dnsimple.zoneRecord.ZoneRecord.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-dnsimple.zoneRecord.ZoneRecord.isTerraformResource"></a>

```typescript
import { zoneRecord } from '@cdktf/provider-dnsimple'

zoneRecord.ZoneRecord.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-dnsimple.zoneRecord.ZoneRecord.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-dnsimple.zoneRecord.ZoneRecord.generateConfigForImport"></a>

```typescript
import { zoneRecord } from '@cdktf/provider-dnsimple'

zoneRecord.ZoneRecord.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a ZoneRecord resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-dnsimple.zoneRecord.ZoneRecord.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-dnsimple.zoneRecord.ZoneRecord.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ZoneRecord to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-dnsimple.zoneRecord.ZoneRecord.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ZoneRecord that should be imported.

Refer to the {@link https://registry.terraform.io/providers/dnsimple/dnsimple/1.3.1/docs/resources/zone_record#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-dnsimple.zoneRecord.ZoneRecord.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the ZoneRecord to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-dnsimple.zoneRecord.ZoneRecord.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-dnsimple.zoneRecord.ZoneRecord.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.zoneRecord.ZoneRecord.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.zoneRecord.ZoneRecord.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.zoneRecord.ZoneRecord.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.zoneRecord.ZoneRecord.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.zoneRecord.ZoneRecord.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.zoneRecord.ZoneRecord.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.zoneRecord.ZoneRecord.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.zoneRecord.ZoneRecord.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.zoneRecord.ZoneRecord.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.zoneRecord.ZoneRecord.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.zoneRecord.ZoneRecord.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.zoneRecord.ZoneRecord.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.zoneRecord.ZoneRecord.property.id">id</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.zoneRecord.ZoneRecord.property.qualifiedName">qualifiedName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.zoneRecord.ZoneRecord.property.valueNormalized">valueNormalized</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.zoneRecord.ZoneRecord.property.zoneId">zoneId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.zoneRecord.ZoneRecord.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.zoneRecord.ZoneRecord.property.priorityInput">priorityInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.zoneRecord.ZoneRecord.property.regionsInput">regionsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.zoneRecord.ZoneRecord.property.ttlInput">ttlInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.zoneRecord.ZoneRecord.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.zoneRecord.ZoneRecord.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.zoneRecord.ZoneRecord.property.zoneNameInput">zoneNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.zoneRecord.ZoneRecord.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.zoneRecord.ZoneRecord.property.priority">priority</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.zoneRecord.ZoneRecord.property.regions">regions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.zoneRecord.ZoneRecord.property.ttl">ttl</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.zoneRecord.ZoneRecord.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.zoneRecord.ZoneRecord.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.zoneRecord.ZoneRecord.property.zoneName">zoneName</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-dnsimple.zoneRecord.ZoneRecord.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-dnsimple.zoneRecord.ZoneRecord.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-dnsimple.zoneRecord.ZoneRecord.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-dnsimple.zoneRecord.ZoneRecord.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-dnsimple.zoneRecord.ZoneRecord.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-dnsimple.zoneRecord.ZoneRecord.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-dnsimple.zoneRecord.ZoneRecord.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-dnsimple.zoneRecord.ZoneRecord.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-dnsimple.zoneRecord.ZoneRecord.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-dnsimple.zoneRecord.ZoneRecord.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-dnsimple.zoneRecord.ZoneRecord.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-dnsimple.zoneRecord.ZoneRecord.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-dnsimple.zoneRecord.ZoneRecord.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-dnsimple.zoneRecord.ZoneRecord.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-dnsimple.zoneRecord.ZoneRecord.property.id"></a>

```typescript
public readonly id: number;
```

- *Type:* number

---

##### `qualifiedName`<sup>Required</sup> <a name="qualifiedName" id="@cdktf/provider-dnsimple.zoneRecord.ZoneRecord.property.qualifiedName"></a>

```typescript
public readonly qualifiedName: string;
```

- *Type:* string

---

##### `valueNormalized`<sup>Required</sup> <a name="valueNormalized" id="@cdktf/provider-dnsimple.zoneRecord.ZoneRecord.property.valueNormalized"></a>

```typescript
public readonly valueNormalized: string;
```

- *Type:* string

---

##### `zoneId`<sup>Required</sup> <a name="zoneId" id="@cdktf/provider-dnsimple.zoneRecord.ZoneRecord.property.zoneId"></a>

```typescript
public readonly zoneId: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-dnsimple.zoneRecord.ZoneRecord.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `priorityInput`<sup>Optional</sup> <a name="priorityInput" id="@cdktf/provider-dnsimple.zoneRecord.ZoneRecord.property.priorityInput"></a>

```typescript
public readonly priorityInput: number;
```

- *Type:* number

---

##### `regionsInput`<sup>Optional</sup> <a name="regionsInput" id="@cdktf/provider-dnsimple.zoneRecord.ZoneRecord.property.regionsInput"></a>

```typescript
public readonly regionsInput: string[];
```

- *Type:* string[]

---

##### `ttlInput`<sup>Optional</sup> <a name="ttlInput" id="@cdktf/provider-dnsimple.zoneRecord.ZoneRecord.property.ttlInput"></a>

```typescript
public readonly ttlInput: number;
```

- *Type:* number

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-dnsimple.zoneRecord.ZoneRecord.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-dnsimple.zoneRecord.ZoneRecord.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `zoneNameInput`<sup>Optional</sup> <a name="zoneNameInput" id="@cdktf/provider-dnsimple.zoneRecord.ZoneRecord.property.zoneNameInput"></a>

```typescript
public readonly zoneNameInput: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-dnsimple.zoneRecord.ZoneRecord.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktf/provider-dnsimple.zoneRecord.ZoneRecord.property.priority"></a>

```typescript
public readonly priority: number;
```

- *Type:* number

---

##### `regions`<sup>Required</sup> <a name="regions" id="@cdktf/provider-dnsimple.zoneRecord.ZoneRecord.property.regions"></a>

```typescript
public readonly regions: string[];
```

- *Type:* string[]

---

##### `ttl`<sup>Required</sup> <a name="ttl" id="@cdktf/provider-dnsimple.zoneRecord.ZoneRecord.property.ttl"></a>

```typescript
public readonly ttl: number;
```

- *Type:* number

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-dnsimple.zoneRecord.ZoneRecord.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-dnsimple.zoneRecord.ZoneRecord.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `zoneName`<sup>Required</sup> <a name="zoneName" id="@cdktf/provider-dnsimple.zoneRecord.ZoneRecord.property.zoneName"></a>

```typescript
public readonly zoneName: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-dnsimple.zoneRecord.ZoneRecord.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-dnsimple.zoneRecord.ZoneRecord.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ZoneRecordConfig <a name="ZoneRecordConfig" id="@cdktf/provider-dnsimple.zoneRecord.ZoneRecordConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-dnsimple.zoneRecord.ZoneRecordConfig.Initializer"></a>

```typescript
import { zoneRecord } from '@cdktf/provider-dnsimple'

const zoneRecordConfig: zoneRecord.ZoneRecordConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-dnsimple.zoneRecord.ZoneRecordConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.zoneRecord.ZoneRecordConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.zoneRecord.ZoneRecordConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.zoneRecord.ZoneRecordConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.zoneRecord.ZoneRecordConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.zoneRecord.ZoneRecordConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.zoneRecord.ZoneRecordConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.zoneRecord.ZoneRecordConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dnsimple/dnsimple/1.3.1/docs/resources/zone_record#name ZoneRecord#name}. |
| <code><a href="#@cdktf/provider-dnsimple.zoneRecord.ZoneRecordConfig.property.type">type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dnsimple/dnsimple/1.3.1/docs/resources/zone_record#type ZoneRecord#type}. |
| <code><a href="#@cdktf/provider-dnsimple.zoneRecord.ZoneRecordConfig.property.value">value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dnsimple/dnsimple/1.3.1/docs/resources/zone_record#value ZoneRecord#value}. |
| <code><a href="#@cdktf/provider-dnsimple.zoneRecord.ZoneRecordConfig.property.zoneName">zoneName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dnsimple/dnsimple/1.3.1/docs/resources/zone_record#zone_name ZoneRecord#zone_name}. |
| <code><a href="#@cdktf/provider-dnsimple.zoneRecord.ZoneRecordConfig.property.priority">priority</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dnsimple/dnsimple/1.3.1/docs/resources/zone_record#priority ZoneRecord#priority}. |
| <code><a href="#@cdktf/provider-dnsimple.zoneRecord.ZoneRecordConfig.property.regions">regions</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dnsimple/dnsimple/1.3.1/docs/resources/zone_record#regions ZoneRecord#regions}. |
| <code><a href="#@cdktf/provider-dnsimple.zoneRecord.ZoneRecordConfig.property.ttl">ttl</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dnsimple/dnsimple/1.3.1/docs/resources/zone_record#ttl ZoneRecord#ttl}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-dnsimple.zoneRecord.ZoneRecordConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-dnsimple.zoneRecord.ZoneRecordConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-dnsimple.zoneRecord.ZoneRecordConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-dnsimple.zoneRecord.ZoneRecordConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-dnsimple.zoneRecord.ZoneRecordConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-dnsimple.zoneRecord.ZoneRecordConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-dnsimple.zoneRecord.ZoneRecordConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-dnsimple.zoneRecord.ZoneRecordConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dnsimple/dnsimple/1.3.1/docs/resources/zone_record#name ZoneRecord#name}.

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-dnsimple.zoneRecord.ZoneRecordConfig.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dnsimple/dnsimple/1.3.1/docs/resources/zone_record#type ZoneRecord#type}.

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-dnsimple.zoneRecord.ZoneRecordConfig.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dnsimple/dnsimple/1.3.1/docs/resources/zone_record#value ZoneRecord#value}.

---

##### `zoneName`<sup>Required</sup> <a name="zoneName" id="@cdktf/provider-dnsimple.zoneRecord.ZoneRecordConfig.property.zoneName"></a>

```typescript
public readonly zoneName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dnsimple/dnsimple/1.3.1/docs/resources/zone_record#zone_name ZoneRecord#zone_name}.

---

##### `priority`<sup>Optional</sup> <a name="priority" id="@cdktf/provider-dnsimple.zoneRecord.ZoneRecordConfig.property.priority"></a>

```typescript
public readonly priority: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dnsimple/dnsimple/1.3.1/docs/resources/zone_record#priority ZoneRecord#priority}.

---

##### `regions`<sup>Optional</sup> <a name="regions" id="@cdktf/provider-dnsimple.zoneRecord.ZoneRecordConfig.property.regions"></a>

```typescript
public readonly regions: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dnsimple/dnsimple/1.3.1/docs/resources/zone_record#regions ZoneRecord#regions}.

---

##### `ttl`<sup>Optional</sup> <a name="ttl" id="@cdktf/provider-dnsimple.zoneRecord.ZoneRecordConfig.property.ttl"></a>

```typescript
public readonly ttl: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dnsimple/dnsimple/1.3.1/docs/resources/zone_record#ttl ZoneRecord#ttl}.

---



