/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/dnsimple/dnsimple/1.2.1/docs/data-sources/certificate
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataDnsimpleCertificateConfig extends cdktf.TerraformMetaArguments {
  /**
  * Certificate ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dnsimple/dnsimple/1.2.1/docs/data-sources/certificate#certificate_id DataDnsimpleCertificate#certificate_id}
  */
  readonly certificateId: number;
  /**
  * Domain name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dnsimple/dnsimple/1.2.1/docs/data-sources/certificate#domain DataDnsimpleCertificate#domain}
  */
  readonly domain: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/dnsimple/dnsimple/1.2.1/docs/data-sources/certificate dnsimple_certificate}
*/
export class DataDnsimpleCertificate extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "dnsimple_certificate";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/dnsimple/dnsimple/1.2.1/docs/data-sources/certificate dnsimple_certificate} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataDnsimpleCertificateConfig
  */
  public constructor(scope: Construct, id: string, config: DataDnsimpleCertificateConfig) {
    super(scope, id, {
      terraformResourceType: 'dnsimple_certificate',
      terraformGeneratorMetadata: {
        providerName: 'dnsimple',
        providerVersion: '1.2.1',
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
    this._certificateId = config.certificateId;
    this._domain = config.domain;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // certificate_chain - computed: true, optional: false, required: false
  public get certificateChain() {
    return this.getListAttribute('certificate_chain');
  }

  // certificate_id - computed: false, optional: false, required: true
  private _certificateId?: number; 
  public get certificateId() {
    return this.getNumberAttribute('certificate_id');
  }
  public set certificateId(value: number) {
    this._certificateId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateIdInput() {
    return this._certificateId;
  }

  // domain - computed: false, optional: false, required: true
  private _domain?: string; 
  public get domain() {
    return this.getStringAttribute('domain');
  }
  public set domain(value: string) {
    this._domain = value;
  }
  // Temporarily expose input value. Use with caution.
  public get domainInput() {
    return this._domain;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // private_key - computed: true, optional: false, required: false
  public get privateKey() {
    return this.getStringAttribute('private_key');
  }

  // root_certificate - computed: true, optional: false, required: false
  public get rootCertificate() {
    return this.getStringAttribute('root_certificate');
  }

  // server_certificate - computed: true, optional: false, required: false
  public get serverCertificate() {
    return this.getStringAttribute('server_certificate');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      certificate_id: cdktf.numberToTerraform(this._certificateId),
      domain: cdktf.stringToTerraform(this._domain),
    };
  }
}
