<?php
/**
 * @package    Joomla.Component.Builder
 *
 * @created    30th April, 2015
 * @author     Llewellyn van der Merwe <http://www.joomlacomponentbuilder.com>
 * @github     Joomla Component Builder <https://github.com/vdm-io/Joomla-Component-Builder>
 * @copyright  Copyright (C) 2015 - 2020 Vast Development Method. All rights reserved.
 * @license    GNU General Public License version 2 or later; see LICENSE.txt
 */

// No direct access to this file
defined('_JEXEC') or die('Restricted access');

use Joomla\Utilities\ArrayHelper;

/**
 * Custom_admin_views Controller
 */
class ComponentbuilderControllerCustom_admin_views extends JControllerAdmin
{
	/**
	 * The prefix to use with controller messages.
	 *
	 * @var    string
	 * @since  1.6
	 */
	protected $text_prefix = 'COM_COMPONENTBUILDER_CUSTOM_ADMIN_VIEWS';

	/**
	 * Method to get a model object, loading it if required.
	 *
	 * @param   string  $name    The model name. Optional.
	 * @param   string  $prefix  The class prefix. Optional.
	 * @param   array   $config  Configuration array for model. Optional.
	 *
	 * @return  JModelLegacy  The model.
	 *
	 * @since   1.6
	 */
	public function getModel($name = 'Custom_admin_view', $prefix = 'ComponentbuilderModel', $config = array('ignore_request' => true))
	{
		return parent::getModel($name, $prefix, $config);
	}

	public function exportData()
	{
		// Check for request forgeries
		JSession::checkToken() or die(JText::_('JINVALID_TOKEN'));
		// check if export is allowed for this user.
		$user = JFactory::getUser();
		if ($user->authorise('custom_admin_view.export', 'com_componentbuilder') && $user->authorise('core.export', 'com_componentbuilder'))
		{
			// Get the input
			$input = JFactory::getApplication()->input;
			$pks = $input->post->get('cid', array(), 'array');
			// Sanitize the input
			ArrayHelper::toInteger($pks);
			// Get the model
			$model = $this->getModel('Custom_admin_views');
			// get the data to export
			$data = $model->getExportData($pks);
			if (ComponentbuilderHelper::checkArray($data))
			{
				// now set the data to the spreadsheet
				$date = JFactory::getDate();
				ComponentbuilderHelper::xls($data,'Custom_admin_views_'.$date->format('jS_F_Y'),'Custom admin views exported ('.$date->format('jS F, Y').')','custom admin views');
			}
		}
		// Redirect to the list screen with error.
		$message = JText::_('COM_COMPONENTBUILDER_EXPORT_FAILED');
		$this->setRedirect(JRoute::_('index.php?option=com_componentbuilder&view=custom_admin_views', false), $message, 'error');
		return;
	}


	public function importData()
	{
		// Check for request forgeries
		JSession::checkToken() or die(JText::_('JINVALID_TOKEN'));
		// check if import is allowed for this user.
		$user = JFactory::getUser();
		if ($user->authorise('custom_admin_view.import', 'com_componentbuilder') && $user->authorise('core.import', 'com_componentbuilder'))
		{
			// Get the import model
			$model = $this->getModel('Custom_admin_views');
			// get the headers to import
			$headers = $model->getExImPortHeaders();
			if (ComponentbuilderHelper::checkObject($headers))
			{
				// Load headers to session.
				$session = JFactory::getSession();
				$headers = json_encode($headers);
				$session->set('custom_admin_view_VDM_IMPORTHEADERS', $headers);
				$session->set('backto_VDM_IMPORT', 'custom_admin_views');
				$session->set('dataType_VDM_IMPORTINTO', 'custom_admin_view');
				// Redirect to import view.
				$message = JText::_('COM_COMPONENTBUILDER_IMPORT_SELECT_FILE_FOR_CUSTOM_ADMIN_VIEWS');
				$this->setRedirect(JRoute::_('index.php?option=com_componentbuilder&view=import', false), $message);
				return;
			}
		}
		// Redirect to the list screen with error.
		$message = JText::_('COM_COMPONENTBUILDER_IMPORT_FAILED');
		$this->setRedirect(JRoute::_('index.php?option=com_componentbuilder&view=custom_admin_views', false), $message, 'error');
		return;
	}

	public function getSnippets()
	{
		// Check for request forgeries
		JSession::checkToken() or die(JText::_('JINVALID_TOKEN'));
		// redirect to the import snippets custom admin view
		$this->setRedirect(JRoute::_('index.php?option=com_componentbuilder&view=get_snippets', false));
		return;
	}
}
