// https://www.terraform.io/docs/providers/dnsimple/r/lets_encrypt_certificate
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface LetsEncryptCertificateConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/dnsimple/r/lets_encrypt_certificate#auto_renew LetsEncryptCertificate#auto_renew}
  */
  readonly autoRenew: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/dnsimple/r/lets_encrypt_certificate#contact_id LetsEncryptCertificate#contact_id}
  */
  readonly contactId?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/dnsimple/r/lets_encrypt_certificate#domain_id LetsEncryptCertificate#domain_id}
  */
  readonly domainId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/dnsimple/r/lets_encrypt_certificate#name LetsEncryptCertificate#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/dnsimple/r/lets_encrypt_certificate#signature_algorithm LetsEncryptCertificate#signature_algorithm}
  */
  readonly signatureAlgorithm?: string;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/dnsimple/r/lets_encrypt_certificate#timeouts LetsEncryptCertificate#timeouts}
  */
  readonly timeouts?: LetsEncryptCertificateTimeouts;
}
export interface LetsEncryptCertificateTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/dnsimple/r/lets_encrypt_certificate#read LetsEncryptCertificate#read}
  */
  readonly read?: string;
}

export function letsEncryptCertificateTimeoutsToTerraform(struct?: LetsEncryptCertificateTimeoutsOutputReference | LetsEncryptCertificateTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    read: cdktf.stringToTerraform(struct!.read),
  }
}

export class LetsEncryptCertificateTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): LetsEncryptCertificateTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._read !== undefined) {
      hasAnyValues = true;
      internalValueResult.read = this._read;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LetsEncryptCertificateTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._read = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._read = value.read;
    }
  }

  // read - computed: false, optional: true, required: false
  private _read?: string; 
  public get read() {
    return this.getStringAttribute('read');
  }
  public set read(value: string) {
    this._read = value;
  }
  public resetRead() {
    this._read = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readInput() {
    return this._read;
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/dnsimple/r/lets_encrypt_certificate dnsimple_lets_encrypt_certificate}
*/
export class LetsEncryptCertificate extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "dnsimple_lets_encrypt_certificate";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/dnsimple/r/lets_encrypt_certificate dnsimple_lets_encrypt_certificate} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options LetsEncryptCertificateConfig
  */
  public constructor(scope: Construct, id: string, config: LetsEncryptCertificateConfig) {
    super(scope, id, {
      terraformResourceType: 'dnsimple_lets_encrypt_certificate',
      terraformGeneratorMetadata: {
        providerName: 'dnsimple',
        providerVersion: '0.16.1',
        providerVersionConstraint: '~> 0.13'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._autoRenew = config.autoRenew;
    this._contactId = config.contactId;
    this._domainId = config.domainId;
    this._name = config.name;
    this._signatureAlgorithm = config.signatureAlgorithm;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // authority_identifier - computed: true, optional: false, required: false
  public get authorityIdentifier() {
    return this.getStringAttribute('authority_identifier');
  }

  // auto_renew - computed: false, optional: false, required: true
  private _autoRenew?: boolean | cdktf.IResolvable; 
  public get autoRenew() {
    return this.getBooleanAttribute('auto_renew');
  }
  public set autoRenew(value: boolean | cdktf.IResolvable) {
    this._autoRenew = value;
  }
  // Temporarily expose input value. Use with caution.
  public get autoRenewInput() {
    return this._autoRenew;
  }

  // contact_id - computed: false, optional: true, required: false
  private _contactId?: number; 
  public get contactId() {
    return this.getNumberAttribute('contact_id');
  }
  public set contactId(value: number) {
    this._contactId = value;
  }
  public resetContactId() {
    this._contactId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contactIdInput() {
    return this._contactId;
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // csr - computed: true, optional: false, required: false
  public get csr() {
    return this.getStringAttribute('csr');
  }

  // domain_id - computed: false, optional: true, required: false
  private _domainId?: string; 
  public get domainId() {
    return this.getStringAttribute('domain_id');
  }
  public set domainId(value: string) {
    this._domainId = value;
  }
  public resetDomainId() {
    this._domainId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainIdInput() {
    return this._domainId;
  }

  // expires_on - computed: true, optional: false, required: false
  public get expiresOn() {
    return this.getStringAttribute('expires_on');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // signature_algorithm - computed: false, optional: true, required: false
  private _signatureAlgorithm?: string; 
  public get signatureAlgorithm() {
    return this.getStringAttribute('signature_algorithm');
  }
  public set signatureAlgorithm(value: string) {
    this._signatureAlgorithm = value;
  }
  public resetSignatureAlgorithm() {
    this._signatureAlgorithm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get signatureAlgorithmInput() {
    return this._signatureAlgorithm;
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // updated_at - computed: true, optional: false, required: false
  public get updatedAt() {
    return this.getStringAttribute('updated_at');
  }

  // years - computed: true, optional: false, required: false
  public get years() {
    return this.getNumberAttribute('years');
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new LetsEncryptCertificateTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: LetsEncryptCertificateTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      auto_renew: cdktf.booleanToTerraform(this._autoRenew),
      contact_id: cdktf.numberToTerraform(this._contactId),
      domain_id: cdktf.stringToTerraform(this._domainId),
      name: cdktf.stringToTerraform(this._name),
      signature_algorithm: cdktf.stringToTerraform(this._signatureAlgorithm),
      timeouts: letsEncryptCertificateTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }
}
