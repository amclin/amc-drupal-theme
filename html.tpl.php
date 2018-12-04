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

?><!DOCTYPE html>
<!--[if lt IE 7]>      <html class="no-js lt-ie9 lt-ie8 lt-ie7" <?php print $htmlattributes ?>> <![endif]-->
<!--[if IE 7]>         <html class="no-js lt-ie9 lt-ie8" <?php print $htmlattributes ?>> <![endif]-->
<!--[if IE 8]>         <html class="no-js lt-ie9" <?php print $htmlattributes ?>> <![endif]-->
<!--[if gt IE 8]><!--> <html class="no-js" <?php print $htmlattributes ?>> <!--<![endif]-->
	<head>
		<link rel="dns-prefetch" href="https://www.google-analytics.com" />
		<link rel="dns-prefetch" href="https://s7.addthis.com" />
		<link rel="dns-prefetch" href="https://m.addthisedge.com" />
		<?php print $head; ?>
		<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
		<title><?php print $head_title; ?></title>
		<meta name="viewport" content="width=device-width">
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
		<!--[if lt IE 7]>
			<p class="chromeframe">You are using an <strong>outdated</strong> browser. Please <a href="http://browsehappy.com/">upgrade your browser</a> or <a href="http://www.google.com/chromeframe/?redirect=true">activate Google Chrome Frame</a> to improve your experience.</p>
		<![endif]-->
		<div id="skip-link">
			<a href="#main-content" class="element-invisible element-focusable"><?php print t('Skip to main content'); ?></a>
		</div>

		<?php print $page_top; ?>
		
		<?php print $page; ?>
		
		<?php print $scripts; ?>

		<?php print $page_bottom; ?>
		
        <script>
            var _gaq=[['_setAccount','UA-1527676-1'],['_trackPageview']];
            (function(d,t){var g=d.createElement(t),s=d.getElementsByTagName(t)[0];
            g.src=('https:'==location.protocol?'//ssl':'//www')+'.google-analytics.com/ga.js';
            s.parentNode.insertBefore(g,s)}(document,'script'));
        </script>
        
        <!-- AddThis Button BEGIN -->
		<div class="addthis_toolbox addthis_floating_style addthis_16x16_style">
			<a class="addthis_button_preferred_1"></a>
			<a class="addthis_button_preferred_2"></a>
			<a class="addthis_button_preferred_3"></a>
			<a class="addthis_button_preferred_4"></a>
			<a class="addthis_button_compact"></a>
		</div>
		<script type="text/javascript">var addthis_config = {"data_track_addressbar":true,data_ga_property: 'UA-1527676-1',data_ga_social : true};</script>
		<script type="text/javascript" src="https://s7.addthis.com/js/300/addthis_widget.js#pubid=ra-4e1bd9e270c39903"></script>
		<!-- AddThis Button END -->
	</body>
</html>
