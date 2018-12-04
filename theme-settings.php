<?php

/**
 * @file
 * Theme setting callbacks for the amc theme.
 */

/**
 * Implements hook_form_FORM_ID_alter().
 *
 * @param $form
 *   The form.
 * @param $form_state
 *   The form state.
 */

function amc_form_system_theme_settings_alter(&$form, $form_state) {
	$form['amc_author'] = array(
	  '#type'          => 'textfield',
	  '#title'         => t('Author URL'),
	  '#default_value' => theme_get_setting('amc_author'),
	  '#description'   => t("URL to use for the &lt;link rel=\"author\" &gt; tag. Provides SEO value by linking to an author's website or profile. Should be a fully-qualified URL with the http/https prefix."),
	);
}

?>