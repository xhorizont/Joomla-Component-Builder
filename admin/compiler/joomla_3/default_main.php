<?php
/**
 * @package    Joomla.Component.Builder
 *
 * @created    30th April, 2015
 * @author     Llewellyn van der Merwe <http://www.joomlacomponentbuilder.com>
 * @github     Joomla Component Builder <https://github.com/vdm-io/Joomla-Component-Builder>
 * @copyright  Copyright (C) 2015 - 2018 Vast Development Method. All rights reserved.
 * @license    GNU General Public License version 2 or later; see LICENSE.txt
 */

// No direct access to this file
defined('_JEXEC') or die('Restricted access');
?>
###BOM###

// No direct access to this file
defined('_JEXEC') or die('Restricted access');

?>
<?php if(isset($this->icons['main']) && is_array($this->icons['main'])) :?>
	<?php foreach($this->icons['main'] as $icon): ?>
		<div class="dashboard-wraper">
			<div class="dashboard-content"> 
				<a class="icon" href="<?php echo $icon->url; ?>">
					<img alt="<?php echo $icon->alt; ?>" src="components/com_###component###/assets/images/icons/<?php  echo $icon->image; ?>">
					<span class="dashboard-title"><?php echo JText::_($icon->name); ?></span>
				</a>
			 </div>
		</div>
	<?php endforeach; ?>
	<div class="clearfix"></div>
<?php else: ?>
	<div class="alert alert-error"><h4 class="alert-heading"><?php echo JText::_("Permission denied, or not correctly set"); ?></h4><div class="alert-message"><?php echo JText::_("Please notify your System Administrator if result is unexpected."); ?></div></div>
<?php endif; ?>