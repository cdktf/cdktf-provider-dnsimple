// https://registry.terraform.io/providers/dnsimple/dnsimple/1.0.0/docs/resources/lets_encrypt_certificate
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface LetsEncryptCertificateConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dnsimple/dnsimple/1.0.0/docs/resources/lets_encrypt_certificate#auto_renew LetsEncryptCertificate#auto_renew}
  */
  readonly autoRenew: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dnsimple/dnsimple/1.0.0/docs/resources/lets_encrypt_certificate#domain_id LetsEncryptCertificate#domain_id}
  */
  readonly domainId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dnsimple/dnsimple/1.0.0/docs/resources/lets_encrypt_certificate#name LetsEncryptCertificate#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dnsimple/dnsimple/1.0.0/docs/resources/lets_encrypt_certificate#signature_algorithm LetsEncryptCertificate#signature_algorithm}
  */
  readonly signatureAlgorithm?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/dnsimple/dnsimple/1.0.0/docs/resources/lets_encrypt_certificate dnsimple_lets_encrypt_certificate}
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
  * Create a new {@link https://registry.terraform.io/providers/dnsimple/dnsimple/1.0.0/docs/resources/lets_encrypt_certificate dnsimple_lets_encrypt_certificate} Resource
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
        providerVersion: '1.0.0',
        providerVersionConstraint: '~> 1.0'
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
    this._domainId = config.domainId;
    this._name = config.name;
    this._signatureAlgorithm = config.signatureAlgorithm;
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

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // csr - computed: true, optional: false, required: false
  public get csr() {
    return this.getStringAttribute('csr');
  }

  // domain_id - computed: false, optional: false, required: true
  private _domainId?: string; 
  public get domainId() {
    return this.getStringAttribute('domain_id');
  }
  public set domainId(value: string) {
    this._domainId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get domainIdInput() {
    return this._domainId;
  }

  // expires_at - computed: true, optional: false, required: false
  public get expiresAt() {
    return this.getStringAttribute('expires_at');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getNumberAttribute('id');
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      auto_renew: cdktf.booleanToTerraform(this._autoRenew),
      domain_id: cdktf.stringToTerraform(this._domainId),
      name: cdktf.stringToTerraform(this._name),
      signature_algorithm: cdktf.stringToTerraform(this._signatureAlgorithm),
    };
  }
}
