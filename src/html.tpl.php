<?php

/**
 * @file
 * Default theme implementation to display the basic html structure of a single
 * Drupal page.
 *
 * Variables:
 * - $css: An array of CSS files for the current page.
 * - $language: (object) The language the site is being displayed in.
 *   $language->language contains its textual representation.
 *   $language->dir contains the language direction. It will either be 'ltr' or 'rtl'.
 * - $rdf_namespaces: All the RDF namespace prefixes used in the HTML document.
 * - $grddl_profile: A GRDDL profile allowing agents to extract the RDF data.
 * - $head_title: A modified version of the page title, for use in the TITLE
 *   tag.
 * - $head_title_array: (array) An associative array containing the string parts
 *   that were used to generate the $head_title variable, already prepared to be
 *   output as TITLE tag. The key/value pairs may contain one or more of the
 *   following, depending on conditions:
 *   - title: The title of the current page, if any.
 *   - name: The name of the site.
 *   - slogan: The slogan of the site, if any, and if there is no title.
 * - $head: Markup for the HEAD section (including meta tags, keyword tags, and
 *   so on).
 * - $styles: Style tags necessary to import all CSS files for the page.
 * - $scripts: Script tags necessary to load the JavaScript files and settings
 *   for the page.
 * - $page_top: Initial markup from any modules that have altered the
 *   page. This variable should always be output first, before all other dynamic
 *   content.
 * - $page: The rendered page content.
 * - $page_bottom: Final closing markup from any modules that have altered the
 *   page. This variable should always be output last, after all other dynamic
 *   content.
 * - $classes String of classes that can be used to style contextually through
 *   CSS.
 *
 * @see template_preprocess()
 * @see template_preprocess_html()
 * @see template_process()
 *
 * @ingroup themeable
 */

$htmlattributes = "lang=\"{$language->language}\" dir=\"{$language->dir}\" $rdf_namespaces";

?><!doctype html>
<html class="no-js" <?php print $htmlattributes ?>>
	<head>
		<meta http-equiv="x-ua-compatible" content="ie=edge">
		<link rel="dns-prefetch" href="https://www.google-analytics.com" />
		<?php print $head; ?>
		<title><?php print $head_title; ?></title>
		<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
		<?php
		  $amc_author = theme_get_setting('amc_author');
		  if($amc_author) {
			print "<link rel=\"author\" href=\"$amc_author\"/>\n\r";
		  }
		?>
		<?php print $styles; ?>
		<?php print $head_scripts; //Most scripts moved to bottom of page ?>
	</head>
	<body class="<?php print $classes; ?>" <?php print $attributes;?>>
		<!--[if lte IE 11]>
			<p class="browserupgrade">You are using an <strong>outdated</strong> browser. Please <a href="https://browsehappy.com/">upgrade your browser</a> to improve your experience and security.</p>
		<![endif]-->
		<div id="skip-link">
			<a href="#main-content" class="element-invisible element-focusable"><?php print t('Skip to main content'); ?></a>
		</div>

		<?php print $page_top; ?>
		
		<?php print $page; ?>
		
		<?php print $scripts; ?>

		<?php print $page_bottom; ?>

		<script>
			window.ga = function () { ga.q.push(arguments) }; ga.q = []; ga.l = +new Date;
			ga('create', 'UA-1527676-1', 'auto'); ga('send', 'pageview')
		</script>
  		<script src="https://www.google-analytics.com/analytics.js" async defer></script>
	</body>
</html>
