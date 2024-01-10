# `provider` Submodule <a name="`provider` Submodule" id="@cdktf/provider-dnsimple.provider"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DnsimpleProvider <a name="DnsimpleProvider" id="@cdktf/provider-dnsimple.provider.DnsimpleProvider"></a>

Represents a {@link https://registry.terraform.io/providers/dnsimple/dnsimple/1.3.1/docs dnsimple}.

#### Initializers <a name="Initializers" id="@cdktf/provider-dnsimple.provider.DnsimpleProvider.Initializer"></a>

```typescript
import { provider } from '@cdktf/provider-dnsimple'

new provider.DnsimpleProvider(scope: Construct, id: string, config?: DnsimpleProviderConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-dnsimple.provider.DnsimpleProvider.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-dnsimple.provider.DnsimpleProvider.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-dnsimple.provider.DnsimpleProvider.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-dnsimple.provider.DnsimpleProviderConfig">DnsimpleProviderConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-dnsimple.provider.DnsimpleProvider.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-dnsimple.provider.DnsimpleProvider.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-dnsimple.provider.DnsimpleProvider.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-dnsimple.provider.DnsimpleProviderConfig">DnsimpleProviderConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-dnsimple.provider.DnsimpleProvider.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-dnsimple.provider.DnsimpleProvider.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.provider.DnsimpleProvider.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-dnsimple.provider.DnsimpleProvider.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-dnsimple.provider.DnsimpleProvider.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.provider.DnsimpleProvider.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.provider.DnsimpleProvider.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-dnsimple.provider.DnsimpleProvider.resetAccount">resetAccount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.provider.DnsimpleProvider.resetAlias">resetAlias</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.provider.DnsimpleProvider.resetPrefetch">resetPrefetch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.provider.DnsimpleProvider.resetSandbox">resetSandbox</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.provider.DnsimpleProvider.resetToken">resetToken</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.provider.DnsimpleProvider.resetUserAgent">resetUserAgent</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-dnsimple.provider.DnsimpleProvider.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-dnsimple.provider.DnsimpleProvider.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-dnsimple.provider.DnsimpleProvider.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-dnsimple.provider.DnsimpleProvider.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-dnsimple.provider.DnsimpleProvider.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-dnsimple.provider.DnsimpleProvider.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-dnsimple.provider.DnsimpleProvider.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-dnsimple.provider.DnsimpleProvider.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-dnsimple.provider.DnsimpleProvider.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-dnsimple.provider.DnsimpleProvider.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `resetAccount` <a name="resetAccount" id="@cdktf/provider-dnsimple.provider.DnsimpleProvider.resetAccount"></a>

```typescript
public resetAccount(): void
```

##### `resetAlias` <a name="resetAlias" id="@cdktf/provider-dnsimple.provider.DnsimpleProvider.resetAlias"></a>

```typescript
public resetAlias(): void
```

##### `resetPrefetch` <a name="resetPrefetch" id="@cdktf/provider-dnsimple.provider.DnsimpleProvider.resetPrefetch"></a>

```typescript
public resetPrefetch(): void
```

##### `resetSandbox` <a name="resetSandbox" id="@cdktf/provider-dnsimple.provider.DnsimpleProvider.resetSandbox"></a>

```typescript
public resetSandbox(): void
```

##### `resetToken` <a name="resetToken" id="@cdktf/provider-dnsimple.provider.DnsimpleProvider.resetToken"></a>

```typescript
public resetToken(): void
```

##### `resetUserAgent` <a name="resetUserAgent" id="@cdktf/provider-dnsimple.provider.DnsimpleProvider.resetUserAgent"></a>

```typescript
public resetUserAgent(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-dnsimple.provider.DnsimpleProvider.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-dnsimple.provider.DnsimpleProvider.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.provider.DnsimpleProvider.isTerraformProvider">isTerraformProvider</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.provider.DnsimpleProvider.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DnsimpleProvider resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-dnsimple.provider.DnsimpleProvider.isConstruct"></a>

```typescript
import { provider } from '@cdktf/provider-dnsimple'

provider.DnsimpleProvider.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-dnsimple.provider.DnsimpleProvider.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-dnsimple.provider.DnsimpleProvider.isTerraformElement"></a>

```typescript
import { provider } from '@cdktf/provider-dnsimple'

provider.DnsimpleProvider.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-dnsimple.provider.DnsimpleProvider.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformProvider` <a name="isTerraformProvider" id="@cdktf/provider-dnsimple.provider.DnsimpleProvider.isTerraformProvider"></a>

```typescript
import { provider } from '@cdktf/provider-dnsimple'

provider.DnsimpleProvider.isTerraformProvider(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-dnsimple.provider.DnsimpleProvider.isTerraformProvider.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-dnsimple.provider.DnsimpleProvider.generateConfigForImport"></a>

```typescript
import { provider } from '@cdktf/provider-dnsimple'

provider.DnsimpleProvider.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DnsimpleProvider resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-dnsimple.provider.DnsimpleProvider.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-dnsimple.provider.DnsimpleProvider.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DnsimpleProvider to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-dnsimple.provider.DnsimpleProvider.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DnsimpleProvider that should be imported.

Refer to the {@link https://registry.terraform.io/providers/dnsimple/dnsimple/1.3.1/docs#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-dnsimple.provider.DnsimpleProvider.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DnsimpleProvider to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-dnsimple.provider.DnsimpleProvider.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-dnsimple.provider.DnsimpleProvider.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.provider.DnsimpleProvider.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.provider.DnsimpleProvider.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.provider.DnsimpleProvider.property.metaAttributes">metaAttributes</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.provider.DnsimpleProvider.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.provider.DnsimpleProvider.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.provider.DnsimpleProvider.property.terraformProviderSource">terraformProviderSource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.provider.DnsimpleProvider.property.alias">alias</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.provider.DnsimpleProvider.property.accountInput">accountInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.provider.DnsimpleProvider.property.aliasInput">aliasInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.provider.DnsimpleProvider.property.prefetchInput">prefetchInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.provider.DnsimpleProvider.property.sandboxInput">sandboxInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.provider.DnsimpleProvider.property.tokenInput">tokenInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.provider.DnsimpleProvider.property.userAgentInput">userAgentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.provider.DnsimpleProvider.property.account">account</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.provider.DnsimpleProvider.property.prefetch">prefetch</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.provider.DnsimpleProvider.property.sandbox">sandbox</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.provider.DnsimpleProvider.property.token">token</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.provider.DnsimpleProvider.property.userAgent">userAgent</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-dnsimple.provider.DnsimpleProvider.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-dnsimple.provider.DnsimpleProvider.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-dnsimple.provider.DnsimpleProvider.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-dnsimple.provider.DnsimpleProvider.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `metaAttributes`<sup>Required</sup> <a name="metaAttributes" id="@cdktf/provider-dnsimple.provider.DnsimpleProvider.property.metaAttributes"></a>

```typescript
public readonly metaAttributes: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-dnsimple.provider.DnsimpleProvider.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-dnsimple.provider.DnsimpleProvider.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `terraformProviderSource`<sup>Optional</sup> <a name="terraformProviderSource" id="@cdktf/provider-dnsimple.provider.DnsimpleProvider.property.terraformProviderSource"></a>

```typescript
public readonly terraformProviderSource: string;
```

- *Type:* string

---

##### `alias`<sup>Optional</sup> <a name="alias" id="@cdktf/provider-dnsimple.provider.DnsimpleProvider.property.alias"></a>

```typescript
public readonly alias: string;
```

- *Type:* string

---

##### `accountInput`<sup>Optional</sup> <a name="accountInput" id="@cdktf/provider-dnsimple.provider.DnsimpleProvider.property.accountInput"></a>

```typescript
public readonly accountInput: string;
```

- *Type:* string

---

##### `aliasInput`<sup>Optional</sup> <a name="aliasInput" id="@cdktf/provider-dnsimple.provider.DnsimpleProvider.property.aliasInput"></a>

```typescript
public readonly aliasInput: string;
```

- *Type:* string

---

##### `prefetchInput`<sup>Optional</sup> <a name="prefetchInput" id="@cdktf/provider-dnsimple.provider.DnsimpleProvider.property.prefetchInput"></a>

```typescript
public readonly prefetchInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `sandboxInput`<sup>Optional</sup> <a name="sandboxInput" id="@cdktf/provider-dnsimple.provider.DnsimpleProvider.property.sandboxInput"></a>

```typescript
public readonly sandboxInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `tokenInput`<sup>Optional</sup> <a name="tokenInput" id="@cdktf/provider-dnsimple.provider.DnsimpleProvider.property.tokenInput"></a>

```typescript
public readonly tokenInput: string;
```

- *Type:* string

---

##### `userAgentInput`<sup>Optional</sup> <a name="userAgentInput" id="@cdktf/provider-dnsimple.provider.DnsimpleProvider.property.userAgentInput"></a>

```typescript
public readonly userAgentInput: string;
```

- *Type:* string

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdktf/provider-dnsimple.provider.DnsimpleProvider.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

---

##### `prefetch`<sup>Optional</sup> <a name="prefetch" id="@cdktf/provider-dnsimple.provider.DnsimpleProvider.property.prefetch"></a>

```typescript
public readonly prefetch: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `sandbox`<sup>Optional</sup> <a name="sandbox" id="@cdktf/provider-dnsimple.provider.DnsimpleProvider.property.sandbox"></a>

```typescript
public readonly sandbox: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `token`<sup>Optional</sup> <a name="token" id="@cdktf/provider-dnsimple.provider.DnsimpleProvider.property.token"></a>

```typescript
public readonly token: string;
```

- *Type:* string

---

##### `userAgent`<sup>Optional</sup> <a name="userAgent" id="@cdktf/provider-dnsimple.provider.DnsimpleProvider.property.userAgent"></a>

```typescript
public readonly userAgent: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-dnsimple.provider.DnsimpleProvider.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-dnsimple.provider.DnsimpleProvider.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DnsimpleProviderConfig <a name="DnsimpleProviderConfig" id="@cdktf/provider-dnsimple.provider.DnsimpleProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-dnsimple.provider.DnsimpleProviderConfig.Initializer"></a>

```typescript
import { provider } from '@cdktf/provider-dnsimple'

const dnsimpleProviderConfig: provider.DnsimpleProviderConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-dnsimple.provider.DnsimpleProviderConfig.property.account">account</a></code> | <code>string</code> | The account for API operations. |
| <code><a href="#@cdktf/provider-dnsimple.provider.DnsimpleProviderConfig.property.alias">alias</a></code> | <code>string</code> | Alias name. |
| <code><a href="#@cdktf/provider-dnsimple.provider.DnsimpleProviderConfig.property.prefetch">prefetch</a></code> | <code>boolean \| cdktf.IResolvable</code> | Flag to enable the prefetch of zone records. |
| <code><a href="#@cdktf/provider-dnsimple.provider.DnsimpleProviderConfig.property.sandbox">sandbox</a></code> | <code>boolean \| cdktf.IResolvable</code> | Flag to enable the sandbox API. |
| <code><a href="#@cdktf/provider-dnsimple.provider.DnsimpleProviderConfig.property.token">token</a></code> | <code>string</code> | The API v2 token for API operations. |
| <code><a href="#@cdktf/provider-dnsimple.provider.DnsimpleProviderConfig.property.userAgent">userAgent</a></code> | <code>string</code> | Custom string to append to the user agent used for sending HTTP requests to the API. |

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdktf/provider-dnsimple.provider.DnsimpleProviderConfig.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

The account for API operations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dnsimple/dnsimple/1.3.1/docs#account DnsimpleProvider#account}

---

##### `alias`<sup>Optional</sup> <a name="alias" id="@cdktf/provider-dnsimple.provider.DnsimpleProviderConfig.property.alias"></a>

```typescript
public readonly alias: string;
```

- *Type:* string

Alias name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dnsimple/dnsimple/1.3.1/docs#alias DnsimpleProvider#alias}

---

##### `prefetch`<sup>Optional</sup> <a name="prefetch" id="@cdktf/provider-dnsimple.provider.DnsimpleProviderConfig.property.prefetch"></a>

```typescript
public readonly prefetch: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Flag to enable the prefetch of zone records.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dnsimple/dnsimple/1.3.1/docs#prefetch DnsimpleProvider#prefetch}

---

##### `sandbox`<sup>Optional</sup> <a name="sandbox" id="@cdktf/provider-dnsimple.provider.DnsimpleProviderConfig.property.sandbox"></a>

```typescript
public readonly sandbox: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Flag to enable the sandbox API.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dnsimple/dnsimple/1.3.1/docs#sandbox DnsimpleProvider#sandbox}

---

##### `token`<sup>Optional</sup> <a name="token" id="@cdktf/provider-dnsimple.provider.DnsimpleProviderConfig.property.token"></a>

```typescript
public readonly token: string;
```

- *Type:* string

The API v2 token for API operations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dnsimple/dnsimple/1.3.1/docs#token DnsimpleProvider#token}

---

##### `userAgent`<sup>Optional</sup> <a name="userAgent" id="@cdktf/provider-dnsimple.provider.DnsimpleProviderConfig.property.userAgent"></a>

```typescript
public readonly userAgent: string;
```

- *Type:* string

Custom string to append to the user agent used for sending HTTP requests to the API.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dnsimple/dnsimple/1.3.1/docs#user_agent DnsimpleProvider#user_agent}

---



