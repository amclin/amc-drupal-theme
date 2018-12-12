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
	// Sets the author <link> tag
	$form['amc_author'] = array(
	  '#type'          => 'textfield',
	  '#title'         => t('Author URL'),
	  '#default_value' => theme_get_setting('amc_author'),
	  '#description'   => t("URL to use for the &lt;link rel=\"author\" &gt; tag. Provides SEO value by linking to an author's website or profile. Should be a fully-qualified URL with the http/https prefix."),
	);

	// Sets an API path for loading random images from the portfolio
	$form['amc_api_random_photo'] = array(
		'#type'          => 'textfield',
		'#title'         => t('Random Background API URL'),
		'#default_value' => theme_get_setting('amc_api_random_photo'),
		'#description'   => t("Background images are chosen randomly assignment. Provide the URL to the API that delivers the list of images."),
	);
}

?>