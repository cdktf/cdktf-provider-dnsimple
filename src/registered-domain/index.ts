// https://registry.terraform.io/providers/dnsimple/dnsimple/1.1.0/docs/resources/registered_domain
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface RegisteredDomainConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dnsimple/dnsimple/1.1.0/docs/resources/registered_domain#auto_renew_enabled RegisteredDomain#auto_renew_enabled}
  */
  readonly autoRenewEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dnsimple/dnsimple/1.1.0/docs/resources/registered_domain#contact_id RegisteredDomain#contact_id}
  */
  readonly contactId: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dnsimple/dnsimple/1.1.0/docs/resources/registered_domain#dnssec_enabled RegisteredDomain#dnssec_enabled}
  */
  readonly dnssecEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dnsimple/dnsimple/1.1.0/docs/resources/registered_domain#extended_attributes RegisteredDomain#extended_attributes}
  */
  readonly extendedAttributes?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dnsimple/dnsimple/1.1.0/docs/resources/registered_domain#name RegisteredDomain#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dnsimple/dnsimple/1.1.0/docs/resources/registered_domain#premium_price RegisteredDomain#premium_price}
  */
  readonly premiumPrice?: string;
  /**
  * Timeouts for operations, given as a parsable string as in `10m` or `30s`.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dnsimple/dnsimple/1.1.0/docs/resources/registered_domain#timeouts RegisteredDomain#timeouts}
  */
  readonly timeouts?: RegisteredDomainTimeouts;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dnsimple/dnsimple/1.1.0/docs/resources/registered_domain#whois_privacy_enabled RegisteredDomain#whois_privacy_enabled}
  */
  readonly whoisPrivacyEnabled?: boolean | cdktf.IResolvable;
}
export interface RegisteredDomainDomainRegistration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dnsimple/dnsimple/1.1.0/docs/resources/registered_domain#state RegisteredDomain#state}
  */
  readonly state?: string;
}

export function registeredDomainDomainRegistrationToTerraform(struct?: RegisteredDomainDomainRegistration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    state: cdktf.stringToTerraform(struct!.state),
  }
}

export class RegisteredDomainDomainRegistrationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): RegisteredDomainDomainRegistration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._state !== undefined) {
      hasAnyValues = true;
      internalValueResult.state = this._state;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RegisteredDomainDomainRegistration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._state = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._state = value.state;
    }
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getNumberAttribute('id');
  }

  // period - computed: true, optional: false, required: false
  public get period() {
    return this.getNumberAttribute('period');
  }

  // state - computed: true, optional: true, required: false
  private _state?: string; 
  public get state() {
    return this.getStringAttribute('state');
  }
  public set state(value: string) {
    this._state = value;
  }
  public resetState() {
    this._state = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stateInput() {
    return this._state;
  }
}
export interface RegisteredDomainTimeouts {
  /**
  * Create timeout.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dnsimple/dnsimple/1.1.0/docs/resources/registered_domain#create RegisteredDomain#create}
  */
  readonly create?: string;
  /**
  * Delete timeout (currently unused).
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dnsimple/dnsimple/1.1.0/docs/resources/registered_domain#delete RegisteredDomain#delete}
  */
  readonly delete?: string;
  /**
  * Update timeout.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dnsimple/dnsimple/1.1.0/docs/resources/registered_domain#update RegisteredDomain#update}
  */
  readonly update?: string;
}

export function registeredDomainTimeoutsToTerraform(struct?: RegisteredDomainTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}

export class RegisteredDomainTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): RegisteredDomainTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RegisteredDomainTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._update = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
      this._delete = value.delete;
      this._update = value.update;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
  }

  // update - computed: false, optional: true, required: false
  private _update?: string; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/dnsimple/dnsimple/1.1.0/docs/resources/registered_domain dnsimple_registered_domain}
*/
export class RegisteredDomain extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "dnsimple_registered_domain";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/dnsimple/dnsimple/1.1.0/docs/resources/registered_domain dnsimple_registered_domain} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options RegisteredDomainConfig
  */
  public constructor(scope: Construct, id: string, config: RegisteredDomainConfig) {
    super(scope, id, {
      terraformResourceType: 'dnsimple_registered_domain',
      terraformGeneratorMetadata: {
        providerName: 'dnsimple',
        providerVersion: '1.1.0',
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
    this._autoRenewEnabled = config.autoRenewEnabled;
    this._contactId = config.contactId;
    this._dnssecEnabled = config.dnssecEnabled;
    this._extendedAttributes = config.extendedAttributes;
    this._name = config.name;
    this._premiumPrice = config.premiumPrice;
    this._timeouts.internalValue = config.timeouts;
    this._whoisPrivacyEnabled = config.whoisPrivacyEnabled;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // account_id - computed: true, optional: false, required: false
  public get accountId() {
    return this.getNumberAttribute('account_id');
  }

  // auto_renew_enabled - computed: true, optional: true, required: false
  private _autoRenewEnabled?: boolean | cdktf.IResolvable; 
  public get autoRenewEnabled() {
    return this.getBooleanAttribute('auto_renew_enabled');
  }
  public set autoRenewEnabled(value: boolean | cdktf.IResolvable) {
    this._autoRenewEnabled = value;
  }
  public resetAutoRenewEnabled() {
    this._autoRenewEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoRenewEnabledInput() {
    return this._autoRenewEnabled;
  }

  // contact_id - computed: false, optional: false, required: true
  private _contactId?: number; 
  public get contactId() {
    return this.getNumberAttribute('contact_id');
  }
  public set contactId(value: number) {
    this._contactId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get contactIdInput() {
    return this._contactId;
  }

  // dnssec_enabled - computed: true, optional: true, required: false
  private _dnssecEnabled?: boolean | cdktf.IResolvable; 
  public get dnssecEnabled() {
    return this.getBooleanAttribute('dnssec_enabled');
  }
  public set dnssecEnabled(value: boolean | cdktf.IResolvable) {
    this._dnssecEnabled = value;
  }
  public resetDnssecEnabled() {
    this._dnssecEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnssecEnabledInput() {
    return this._dnssecEnabled;
  }

  // domain_registration - computed: true, optional: false, required: false
  private _domainRegistration = new RegisteredDomainDomainRegistrationOutputReference(this, "domain_registration");
  public get domainRegistration() {
    return this._domainRegistration;
  }

  // expires_at - computed: true, optional: false, required: false
  public get expiresAt() {
    return this.getStringAttribute('expires_at');
  }

  // extended_attributes - computed: false, optional: true, required: false
  private _extendedAttributes?: { [key: string]: string }; 
  public get extendedAttributes() {
    return this.getStringMapAttribute('extended_attributes');
  }
  public set extendedAttributes(value: { [key: string]: string }) {
    this._extendedAttributes = value;
  }
  public resetExtendedAttributes() {
    this._extendedAttributes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extendedAttributesInput() {
    return this._extendedAttributes;
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

  // premium_price - computed: false, optional: true, required: false
  private _premiumPrice?: string; 
  public get premiumPrice() {
    return this.getStringAttribute('premium_price');
  }
  public set premiumPrice(value: string) {
    this._premiumPrice = value;
  }
  public resetPremiumPrice() {
    this._premiumPrice = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get premiumPriceInput() {
    return this._premiumPrice;
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new RegisteredDomainTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: RegisteredDomainTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // unicode_name - computed: true, optional: false, required: false
  public get unicodeName() {
    return this.getStringAttribute('unicode_name');
  }

  // whois_privacy_enabled - computed: true, optional: true, required: false
  private _whoisPrivacyEnabled?: boolean | cdktf.IResolvable; 
  public get whoisPrivacyEnabled() {
    return this.getBooleanAttribute('whois_privacy_enabled');
  }
  public set whoisPrivacyEnabled(value: boolean | cdktf.IResolvable) {
    this._whoisPrivacyEnabled = value;
  }
  public resetWhoisPrivacyEnabled() {
    this._whoisPrivacyEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get whoisPrivacyEnabledInput() {
    return this._whoisPrivacyEnabled;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      auto_renew_enabled: cdktf.booleanToTerraform(this._autoRenewEnabled),
      contact_id: cdktf.numberToTerraform(this._contactId),
      dnssec_enabled: cdktf.booleanToTerraform(this._dnssecEnabled),
      extended_attributes: cdktf.hashMapper(cdktf.stringToTerraform)(this._extendedAttributes),
      name: cdktf.stringToTerraform(this._name),
      premium_price: cdktf.stringToTerraform(this._premiumPrice),
      timeouts: registeredDomainTimeoutsToTerraform(this._timeouts.internalValue),
      whois_privacy_enabled: cdktf.booleanToTerraform(this._whoisPrivacyEnabled),
    };
  }
}
