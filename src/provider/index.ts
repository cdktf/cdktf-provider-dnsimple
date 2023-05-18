// https://registry.terraform.io/providers/dnsimple/dnsimple/1.1.2/docs
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DnsimpleProviderConfig {
  /**
  * The account for API operations.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dnsimple/dnsimple/1.1.2/docs#account DnsimpleProvider#account}
  */
  readonly account?: string;
  /**
  * Flag to enable the prefetch of zone records.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dnsimple/dnsimple/1.1.2/docs#prefetch DnsimpleProvider#prefetch}
  */
  readonly prefetch?: boolean | cdktf.IResolvable;
  /**
  * Flag to enable the sandbox API.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dnsimple/dnsimple/1.1.2/docs#sandbox DnsimpleProvider#sandbox}
  */
  readonly sandbox?: boolean | cdktf.IResolvable;
  /**
  * The API v2 token for API operations.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dnsimple/dnsimple/1.1.2/docs#token DnsimpleProvider#token}
  */
  readonly token?: string;
  /**
  * Custom string to append to the user agent used for sending HTTP requests to the API.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dnsimple/dnsimple/1.1.2/docs#user_agent DnsimpleProvider#user_agent}
  */
  readonly userAgent?: string;
  /**
  * Alias name
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dnsimple/dnsimple/1.1.2/docs#alias DnsimpleProvider#alias}
  */
  readonly alias?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/dnsimple/dnsimple/1.1.2/docs dnsimple}
*/
export class DnsimpleProvider extends cdktf.TerraformProvider {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "dnsimple";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/dnsimple/dnsimple/1.1.2/docs dnsimple} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DnsimpleProviderConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DnsimpleProviderConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'dnsimple',
      terraformGeneratorMetadata: {
        providerName: 'dnsimple',
        providerVersion: '1.1.2',
        providerVersionConstraint: '~> 1.0'
      },
      terraformProviderSource: 'dnsimple/dnsimple'
    });
    this._account = config.account;
    this._prefetch = config.prefetch;
    this._sandbox = config.sandbox;
    this._token = config.token;
    this._userAgent = config.userAgent;
    this._alias = config.alias;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // account - computed: false, optional: true, required: false
  private _account?: string; 
  public get account() {
    return this._account;
  }
  public set account(value: string | undefined) {
    this._account = value;
  }
  public resetAccount() {
    this._account = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountInput() {
    return this._account;
  }

  // prefetch - computed: false, optional: true, required: false
  private _prefetch?: boolean | cdktf.IResolvable; 
  public get prefetch() {
    return this._prefetch;
  }
  public set prefetch(value: boolean | cdktf.IResolvable | undefined) {
    this._prefetch = value;
  }
  public resetPrefetch() {
    this._prefetch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefetchInput() {
    return this._prefetch;
  }

  // sandbox - computed: false, optional: true, required: false
  private _sandbox?: boolean | cdktf.IResolvable; 
  public get sandbox() {
    return this._sandbox;
  }
  public set sandbox(value: boolean | cdktf.IResolvable | undefined) {
    this._sandbox = value;
  }
  public resetSandbox() {
    this._sandbox = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sandboxInput() {
    return this._sandbox;
  }

  // token - computed: false, optional: true, required: false
  private _token?: string; 
  public get token() {
    return this._token;
  }
  public set token(value: string | undefined) {
    this._token = value;
  }
  public resetToken() {
    this._token = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenInput() {
    return this._token;
  }

  // user_agent - computed: false, optional: true, required: false
  private _userAgent?: string; 
  public get userAgent() {
    return this._userAgent;
  }
  public set userAgent(value: string | undefined) {
    this._userAgent = value;
  }
  public resetUserAgent() {
    this._userAgent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userAgentInput() {
    return this._userAgent;
  }

  // alias - computed: false, optional: true, required: false
  private _alias?: string; 
  public get alias() {
    return this._alias;
  }
  public set alias(value: string | undefined) {
    this._alias = value;
  }
  public resetAlias() {
    this._alias = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aliasInput() {
    return this._alias;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      account: cdktf.stringToTerraform(this._account),
      prefetch: cdktf.booleanToTerraform(this._prefetch),
      sandbox: cdktf.booleanToTerraform(this._sandbox),
      token: cdktf.stringToTerraform(this._token),
      user_agent: cdktf.stringToTerraform(this._userAgent),
      alias: cdktf.stringToTerraform(this._alias),
    };
  }
}
