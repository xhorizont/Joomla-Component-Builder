/**
 * @package    Joomla.Component.Builder
 *
 * @created    30th April, 2015
 * @author     Llewellyn van der Merwe <http://www.joomlacomponentbuilder.com>
 * @github     Joomla Component Builder <https://github.com/vdm-io/Joomla-Component-Builder>
 * @copyright  Copyright (C) 2015 - 2020 Vast Development Method. All rights reserved.
 * @license    GNU General Public License version 2 or later; see LICENSE.txt
 */

// Some Global Values
jform_vvvvwdyvyd_required = false;
jform_vvvvwdyvye_required = false;
jform_vvvvwdyvyf_required = false;
jform_vvvvwdyvyg_required = false;
jform_vvvvwdyvyh_required = false;
jform_vvvvwdzvyi_required = false;
jform_vvvvweavyj_required = false;
jform_vvvvwecvyk_required = false;
jform_vvvvweevyl_required = false;

// Initial Script
jQuery(document).ready(function()
{
	var protocol_vvvvwdy = jQuery("#jform_protocol").val();
	vvvvwdy(protocol_vvvvwdy);

	var protocol_vvvvwdz = jQuery("#jform_protocol").val();
	vvvvwdz(protocol_vvvvwdz);

	var protocol_vvvvwea = jQuery("#jform_protocol").val();
	var authentication_vvvvwea = jQuery("#jform_authentication").val();
	vvvvwea(protocol_vvvvwea,authentication_vvvvwea);

	var protocol_vvvvwec = jQuery("#jform_protocol").val();
	var authentication_vvvvwec = jQuery("#jform_authentication").val();
	vvvvwec(protocol_vvvvwec,authentication_vvvvwec);

	var protocol_vvvvwee = jQuery("#jform_protocol").val();
	var authentication_vvvvwee = jQuery("#jform_authentication").val();
	vvvvwee(protocol_vvvvwee,authentication_vvvvwee);

	var protocol_vvvvweg = jQuery("#jform_protocol").val();
	var authentication_vvvvweg = jQuery("#jform_authentication").val();
	vvvvweg(protocol_vvvvweg,authentication_vvvvweg);
});

// the vvvvwdy function
function vvvvwdy(protocol_vvvvwdy)
{
	if (isSet(protocol_vvvvwdy) && protocol_vvvvwdy.constructor !== Array)
	{
		var temp_vvvvwdy = protocol_vvvvwdy;
		var protocol_vvvvwdy = [];
		protocol_vvvvwdy.push(temp_vvvvwdy);
	}
	else if (!isSet(protocol_vvvvwdy))
	{
		var protocol_vvvvwdy = [];
	}
	var protocol = protocol_vvvvwdy.some(protocol_vvvvwdy_SomeFunc);


	// set this function logic
	if (protocol)
	{
		jQuery('#jform_authentication').closest('.control-group').show();
		// add required attribute to authentication field
		if (jform_vvvvwdyvyd_required)
		{
			updateFieldRequired('authentication',0);
			jQuery('#jform_authentication').prop('required','required');
			jQuery('#jform_authentication').attr('aria-required',true);
			jQuery('#jform_authentication').addClass('required');
			jform_vvvvwdyvyd_required = false;
		}
		jQuery('#jform_host').closest('.control-group').show();
		// add required attribute to host field
		if (jform_vvvvwdyvye_required)
		{
			updateFieldRequired('host',0);
			jQuery('#jform_host').prop('required','required');
			jQuery('#jform_host').attr('aria-required',true);
			jQuery('#jform_host').addClass('required');
			jform_vvvvwdyvye_required = false;
		}
		jQuery('#jform_port').closest('.control-group').show();
		// add required attribute to port field
		if (jform_vvvvwdyvyf_required)
		{
			updateFieldRequired('port',0);
			jQuery('#jform_port').prop('required','required');
			jQuery('#jform_port').attr('aria-required',true);
			jQuery('#jform_port').addClass('required');
			jform_vvvvwdyvyf_required = false;
		}
		jQuery('#jform_path').closest('.control-group').show();
		// add required attribute to path field
		if (jform_vvvvwdyvyg_required)
		{
			updateFieldRequired('path',0);
			jQuery('#jform_path').prop('required','required');
			jQuery('#jform_path').attr('aria-required',true);
			jQuery('#jform_path').addClass('required');
			jform_vvvvwdyvyg_required = false;
		}
		jQuery('.note_ssh_security').closest('.control-group').show();
		jQuery('#jform_username').closest('.control-group').show();
		// add required attribute to username field
		if (jform_vvvvwdyvyh_required)
		{
			updateFieldRequired('username',0);
			jQuery('#jform_username').prop('required','required');
			jQuery('#jform_username').attr('aria-required',true);
			jQuery('#jform_username').addClass('required');
			jform_vvvvwdyvyh_required = false;
		}
	}
	else
	{
		jQuery('#jform_authentication').closest('.control-group').hide();
		// remove required attribute from authentication field
		if (!jform_vvvvwdyvyd_required)
		{
			updateFieldRequired('authentication',1);
			jQuery('#jform_authentication').removeAttr('required');
			jQuery('#jform_authentication').removeAttr('aria-required');
			jQuery('#jform_authentication').removeClass('required');
			jform_vvvvwdyvyd_required = true;
		}
		jQuery('#jform_host').closest('.control-group').hide();
		// remove required attribute from host field
		if (!jform_vvvvwdyvye_required)
		{
			updateFieldRequired('host',1);
			jQuery('#jform_host').removeAttr('required');
			jQuery('#jform_host').removeAttr('aria-required');
			jQuery('#jform_host').removeClass('required');
			jform_vvvvwdyvye_required = true;
		}
		jQuery('#jform_port').closest('.control-group').hide();
		// remove required attribute from port field
		if (!jform_vvvvwdyvyf_required)
		{
			updateFieldRequired('port',1);
			jQuery('#jform_port').removeAttr('required');
			jQuery('#jform_port').removeAttr('aria-required');
			jQuery('#jform_port').removeClass('required');
			jform_vvvvwdyvyf_required = true;
		}
		jQuery('#jform_path').closest('.control-group').hide();
		// remove required attribute from path field
		if (!jform_vvvvwdyvyg_required)
		{
			updateFieldRequired('path',1);
			jQuery('#jform_path').removeAttr('required');
			jQuery('#jform_path').removeAttr('aria-required');
			jQuery('#jform_path').removeClass('required');
			jform_vvvvwdyvyg_required = true;
		}
		jQuery('.note_ssh_security').closest('.control-group').hide();
		jQuery('#jform_username').closest('.control-group').hide();
		// remove required attribute from username field
		if (!jform_vvvvwdyvyh_required)
		{
			updateFieldRequired('username',1);
			jQuery('#jform_username').removeAttr('required');
			jQuery('#jform_username').removeAttr('aria-required');
			jQuery('#jform_username').removeClass('required');
			jform_vvvvwdyvyh_required = true;
		}
	}
}

// the vvvvwdy Some function
function protocol_vvvvwdy_SomeFunc(protocol_vvvvwdy)
{
	// set the function logic
	if (protocol_vvvvwdy == 2)
	{
		return true;
	}
	return false;
}

// the vvvvwdz function
function vvvvwdz(protocol_vvvvwdz)
{
	if (isSet(protocol_vvvvwdz) && protocol_vvvvwdz.constructor !== Array)
	{
		var temp_vvvvwdz = protocol_vvvvwdz;
		var protocol_vvvvwdz = [];
		protocol_vvvvwdz.push(temp_vvvvwdz);
	}
	else if (!isSet(protocol_vvvvwdz))
	{
		var protocol_vvvvwdz = [];
	}
	var protocol = protocol_vvvvwdz.some(protocol_vvvvwdz_SomeFunc);


	// set this function logic
	if (protocol)
	{
		jQuery('.note_ftp_signature').closest('.control-group').show();
		jQuery('#jform_signature').closest('.control-group').show();
		// add required attribute to signature field
		if (jform_vvvvwdzvyi_required)
		{
			updateFieldRequired('signature',0);
			jQuery('#jform_signature').prop('required','required');
			jQuery('#jform_signature').attr('aria-required',true);
			jQuery('#jform_signature').addClass('required');
			jform_vvvvwdzvyi_required = false;
		}
	}
	else
	{
		jQuery('.note_ftp_signature').closest('.control-group').hide();
		jQuery('#jform_signature').closest('.control-group').hide();
		// remove required attribute from signature field
		if (!jform_vvvvwdzvyi_required)
		{
			updateFieldRequired('signature',1);
			jQuery('#jform_signature').removeAttr('required');
			jQuery('#jform_signature').removeAttr('aria-required');
			jQuery('#jform_signature').removeClass('required');
			jform_vvvvwdzvyi_required = true;
		}
	}
}

// the vvvvwdz Some function
function protocol_vvvvwdz_SomeFunc(protocol_vvvvwdz)
{
	// set the function logic
	if (protocol_vvvvwdz == 1)
	{
		return true;
	}
	return false;
}

// the vvvvwea function
function vvvvwea(protocol_vvvvwea,authentication_vvvvwea)
{
	if (isSet(protocol_vvvvwea) && protocol_vvvvwea.constructor !== Array)
	{
		var temp_vvvvwea = protocol_vvvvwea;
		var protocol_vvvvwea = [];
		protocol_vvvvwea.push(temp_vvvvwea);
	}
	else if (!isSet(protocol_vvvvwea))
	{
		var protocol_vvvvwea = [];
	}
	var protocol = protocol_vvvvwea.some(protocol_vvvvwea_SomeFunc);

	if (isSet(authentication_vvvvwea) && authentication_vvvvwea.constructor !== Array)
	{
		var temp_vvvvwea = authentication_vvvvwea;
		var authentication_vvvvwea = [];
		authentication_vvvvwea.push(temp_vvvvwea);
	}
	else if (!isSet(authentication_vvvvwea))
	{
		var authentication_vvvvwea = [];
	}
	var authentication = authentication_vvvvwea.some(authentication_vvvvwea_SomeFunc);


	// set this function logic
	if (protocol && authentication)
	{
		jQuery('#jform_password').closest('.control-group').show();
		// add required attribute to password field
		if (jform_vvvvweavyj_required)
		{
			updateFieldRequired('password',0);
			jQuery('#jform_password').prop('required','required');
			jQuery('#jform_password').attr('aria-required',true);
			jQuery('#jform_password').addClass('required');
			jform_vvvvweavyj_required = false;
		}
	}
	else
	{
		jQuery('#jform_password').closest('.control-group').hide();
		// remove required attribute from password field
		if (!jform_vvvvweavyj_required)
		{
			updateFieldRequired('password',1);
			jQuery('#jform_password').removeAttr('required');
			jQuery('#jform_password').removeAttr('aria-required');
			jQuery('#jform_password').removeClass('required');
			jform_vvvvweavyj_required = true;
		}
	}
}

// the vvvvwea Some function
function protocol_vvvvwea_SomeFunc(protocol_vvvvwea)
{
	// set the function logic
	if (protocol_vvvvwea == 2)
	{
		return true;
	}
	return false;
}

// the vvvvwea Some function
function authentication_vvvvwea_SomeFunc(authentication_vvvvwea)
{
	// set the function logic
	if (authentication_vvvvwea == 1 || authentication_vvvvwea == 3 || authentication_vvvvwea == 5)
	{
		return true;
	}
	return false;
}

// the vvvvwec function
function vvvvwec(protocol_vvvvwec,authentication_vvvvwec)
{
	if (isSet(protocol_vvvvwec) && protocol_vvvvwec.constructor !== Array)
	{
		var temp_vvvvwec = protocol_vvvvwec;
		var protocol_vvvvwec = [];
		protocol_vvvvwec.push(temp_vvvvwec);
	}
	else if (!isSet(protocol_vvvvwec))
	{
		var protocol_vvvvwec = [];
	}
	var protocol = protocol_vvvvwec.some(protocol_vvvvwec_SomeFunc);

	if (isSet(authentication_vvvvwec) && authentication_vvvvwec.constructor !== Array)
	{
		var temp_vvvvwec = authentication_vvvvwec;
		var authentication_vvvvwec = [];
		authentication_vvvvwec.push(temp_vvvvwec);
	}
	else if (!isSet(authentication_vvvvwec))
	{
		var authentication_vvvvwec = [];
	}
	var authentication = authentication_vvvvwec.some(authentication_vvvvwec_SomeFunc);


	// set this function logic
	if (protocol && authentication)
	{
		jQuery('#jform_private').closest('.control-group').show();
		// add required attribute to private field
		if (jform_vvvvwecvyk_required)
		{
			updateFieldRequired('private',0);
			jQuery('#jform_private').prop('required','required');
			jQuery('#jform_private').attr('aria-required',true);
			jQuery('#jform_private').addClass('required');
			jform_vvvvwecvyk_required = false;
		}
	}
	else
	{
		jQuery('#jform_private').closest('.control-group').hide();
		// remove required attribute from private field
		if (!jform_vvvvwecvyk_required)
		{
			updateFieldRequired('private',1);
			jQuery('#jform_private').removeAttr('required');
			jQuery('#jform_private').removeAttr('aria-required');
			jQuery('#jform_private').removeClass('required');
			jform_vvvvwecvyk_required = true;
		}
	}
}

// the vvvvwec Some function
function protocol_vvvvwec_SomeFunc(protocol_vvvvwec)
{
	// set the function logic
	if (protocol_vvvvwec == 2)
	{
		return true;
	}
	return false;
}

// the vvvvwec Some function
function authentication_vvvvwec_SomeFunc(authentication_vvvvwec)
{
	// set the function logic
	if (authentication_vvvvwec == 2 || authentication_vvvvwec == 3)
	{
		return true;
	}
	return false;
}

// the vvvvwee function
function vvvvwee(protocol_vvvvwee,authentication_vvvvwee)
{
	if (isSet(protocol_vvvvwee) && protocol_vvvvwee.constructor !== Array)
	{
		var temp_vvvvwee = protocol_vvvvwee;
		var protocol_vvvvwee = [];
		protocol_vvvvwee.push(temp_vvvvwee);
	}
	else if (!isSet(protocol_vvvvwee))
	{
		var protocol_vvvvwee = [];
	}
	var protocol = protocol_vvvvwee.some(protocol_vvvvwee_SomeFunc);

	if (isSet(authentication_vvvvwee) && authentication_vvvvwee.constructor !== Array)
	{
		var temp_vvvvwee = authentication_vvvvwee;
		var authentication_vvvvwee = [];
		authentication_vvvvwee.push(temp_vvvvwee);
	}
	else if (!isSet(authentication_vvvvwee))
	{
		var authentication_vvvvwee = [];
	}
	var authentication = authentication_vvvvwee.some(authentication_vvvvwee_SomeFunc);


	// set this function logic
	if (protocol && authentication)
	{
		jQuery('#jform_private_key').closest('.control-group').show();
		// add required attribute to private_key field
		if (jform_vvvvweevyl_required)
		{
			updateFieldRequired('private_key',0);
			jQuery('#jform_private_key').prop('required','required');
			jQuery('#jform_private_key').attr('aria-required',true);
			jQuery('#jform_private_key').addClass('required');
			jform_vvvvweevyl_required = false;
		}
	}
	else
	{
		jQuery('#jform_private_key').closest('.control-group').hide();
		// remove required attribute from private_key field
		if (!jform_vvvvweevyl_required)
		{
			updateFieldRequired('private_key',1);
			jQuery('#jform_private_key').removeAttr('required');
			jQuery('#jform_private_key').removeAttr('aria-required');
			jQuery('#jform_private_key').removeClass('required');
			jform_vvvvweevyl_required = true;
		}
	}
}

// the vvvvwee Some function
function protocol_vvvvwee_SomeFunc(protocol_vvvvwee)
{
	// set the function logic
	if (protocol_vvvvwee == 2)
	{
		return true;
	}
	return false;
}

// the vvvvwee Some function
function authentication_vvvvwee_SomeFunc(authentication_vvvvwee)
{
	// set the function logic
	if (authentication_vvvvwee == 4 || authentication_vvvvwee == 5)
	{
		return true;
	}
	return false;
}

// the vvvvweg function
function vvvvweg(protocol_vvvvweg,authentication_vvvvweg)
{
	if (isSet(protocol_vvvvweg) && protocol_vvvvweg.constructor !== Array)
	{
		var temp_vvvvweg = protocol_vvvvweg;
		var protocol_vvvvweg = [];
		protocol_vvvvweg.push(temp_vvvvweg);
	}
	else if (!isSet(protocol_vvvvweg))
	{
		var protocol_vvvvweg = [];
	}
	var protocol = protocol_vvvvweg.some(protocol_vvvvweg_SomeFunc);

	if (isSet(authentication_vvvvweg) && authentication_vvvvweg.constructor !== Array)
	{
		var temp_vvvvweg = authentication_vvvvweg;
		var authentication_vvvvweg = [];
		authentication_vvvvweg.push(temp_vvvvweg);
	}
	else if (!isSet(authentication_vvvvweg))
	{
		var authentication_vvvvweg = [];
	}
	var authentication = authentication_vvvvweg.some(authentication_vvvvweg_SomeFunc);


	// set this function logic
	if (protocol && authentication)
	{
		jQuery('#jform_secret').closest('.control-group').show();
	}
	else
	{
		jQuery('#jform_secret').closest('.control-group').hide();
	}
}

// the vvvvweg Some function
function protocol_vvvvweg_SomeFunc(protocol_vvvvweg)
{
	// set the function logic
	if (protocol_vvvvweg == 2)
	{
		return true;
	}
	return false;
}

// the vvvvweg Some function
function authentication_vvvvweg_SomeFunc(authentication_vvvvweg)
{
	// set the function logic
	if (authentication_vvvvweg == 2 || authentication_vvvvweg == 3 || authentication_vvvvweg == 4 || authentication_vvvvweg == 5)
	{
		return true;
	}
	return false;
}

// update fields required
function updateFieldRequired(name, status) {
	// check if not_required exist
	if (jQuery('#jform_not_required').length > 0) {
		var not_required = jQuery('#jform_not_required').val().split(",");

		if(status == 1)
		{
			not_required.push(name);
		}
		else
		{
			not_required = removeFieldFromNotRequired(not_required, name);
		}

		jQuery('#jform_not_required').val(fixNotRequiredArray(not_required).toString());
	}
}

// remove field from not_required
function removeFieldFromNotRequired(array, what) {
	return array.filter(function(element){
		return element !== what;
	});
}

// fix not required array
function fixNotRequiredArray(array) {
	var seen = {};
	return removeEmptyFromNotRequiredArray(array).filter(function(item) {
		return seen.hasOwnProperty(item) ? false : (seen[item] = true);
	});
}

// remove empty from not_required array
function removeEmptyFromNotRequiredArray(array) {
	return array.filter(function (el) {
		// remove ( 一_一) as well - lol
		return (el.length > 0 && '一_一' !== el);
	});
}

// the isSet function
function isSet(val)
{
	if ((val != undefined) && (val != null) && 0 !== val.length){
		return true;
	}
	return false;
} 
