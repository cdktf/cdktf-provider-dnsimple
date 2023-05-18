// https://registry.terraform.io/providers/dnsimple/dnsimple/1.1.2/docs/resources/domain_delegation
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DomainDelegationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dnsimple/dnsimple/1.1.2/docs/resources/domain_delegation#domain DomainDelegation#domain}
  */
  readonly domain: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dnsimple/dnsimple/1.1.2/docs/resources/domain_delegation#name_servers DomainDelegation#name_servers}
  */
  readonly nameServers: string[];
}

/**
* Represents a {@link https://registry.terraform.io/providers/dnsimple/dnsimple/1.1.2/docs/resources/domain_delegation dnsimple_domain_delegation}
*/
export class DomainDelegation extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "dnsimple_domain_delegation";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/dnsimple/dnsimple/1.1.2/docs/resources/domain_delegation dnsimple_domain_delegation} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DomainDelegationConfig
  */
  public constructor(scope: Construct, id: string, config: DomainDelegationConfig) {
    super(scope, id, {
      terraformResourceType: 'dnsimple_domain_delegation',
      terraformGeneratorMetadata: {
        providerName: 'dnsimple',
        providerVersion: '1.1.2',
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
    this._domain = config.domain;
    this._nameServers = config.nameServers;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // name_servers - computed: false, optional: false, required: true
  private _nameServers?: string[]; 
  public get nameServers() {
    return this.getListAttribute('name_servers');
  }
  public set nameServers(value: string[]) {
    this._nameServers = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameServersInput() {
    return this._nameServers;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      domain: cdktf.stringToTerraform(this._domain),
      name_servers: cdktf.listMapper(cdktf.stringToTerraform, false)(this._nameServers),
    };
  }
}
