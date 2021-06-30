<?php
/**
 * Implements hook_preprocess_html().
 */
function amc_preprocess_html(&$vars) {
  //Add external CSS filesfonts from Google CDN
	drupal_add_css(
		'https://fonts.googleapis.com/css?family=Source+Sans+Pro:400,600,400italic|Open+Sans:300&display=swap',
		array(
			'type' => 'external',
			'media' => 'screen or print'
		)
	);
  // Move JS files "$scripts" to page bottom for perfs/logic.
  // Add JS files that *needs* to be loaded in the head in a new "$head_scripts" scope.
  // For instance the Modernizr lib.
  //   $path = drupal_get_path('theme', 'amc');
  //   drupal_add_js($path . '/js/vendor/modernizr-2.6.2.min.js', array('scope' => 'head_scripts', 'weight' => -1, 'preprocess' => FALSE));
}
 
/**
 * Implements hook_process_html().
 */
function amc_process_html(&$vars) {
  $vars['head_scripts'] = drupal_get_js('head_scripts');
  $vars['themepath'] = drupal_get_path('theme', 'amc');
}


function amc_preprocess_node(&$vars) {
	//Add button class to node functional links
// 	if(isset($vars['content']) && isset($vars['content']['links'])) {
// 		foreach($vars['content']['links'] as $idxA=>$groups) {
// 			if(isset($groups['#links'])) {
// 				foreach($groups['#links'] as $idxB=>$link) {
// 					if(isset($link['attributes'])) {
// 						$vars['content']['links'][$idxA]['#links'][$idxB]['attributes']['class'][] = 'button';
// 					}
// 				}
// 			}
// 		}
		
		//Set the "submitted by xxx, on xxx" format
		$vars['submitted'] =  t('!datetime',
				array(
						'!username' => $vars['name'],
						'!datetime' => $vars['date']
				));
// 	}

		//Remove read more link from portfolio photo nodes
		if ($vars['node']->type == 'portfolio_photo') {
			unset($vars['content']['links']['node']['#links']);
		}
}


function amc_preprocess_comment(&$vars) {
	//Add button class to node functional links
// 	foreach($vars['content']['links'] as $idxA=>$groups) {
// 		if(isset($groups['#links'])) {
// 			foreach($groups['#links'] as $idxB=>$link) {
// 				$vars['content']['links'][$idxA]['#links'][$idxB]['class'] .= ' button';
// 			}
// 		}
// 		print_r($vars['content']['links'][$idxA]);
// 	}

	
// 	$comment = $variables['comment'];

// 	//load links for current comment
// 	$links = comment_links($comment, FALSE);

// 	//code to alter the links array

// 	//reset the links HTML
// 	$variables['links'] = theme('links', $links);
}

/**
 * Hook for processing before rendering views
 */
function amc_preprocess_views_view(&$vars) {
  if($vars['name'] == 'frontpage') {
    $themepath = drupal_get_path('theme', 'amc');
    drupal_add_js($themepath . '/js/list-transparency.js');
    drupal_add_css($themepath . '/css/frontpage.css');
  }
}

/**
 * Hook for preprocessing page types
 */
function amc_preprocess_page(&$vars) {
  if (arg(0) == 'taxonomy' && arg(1) == 'term' && is_numeric(arg(2))) {
    // Term list pages (blog pages) match homepage
    $themepath = drupal_get_path('theme', 'amc');
    drupal_add_js($themepath . '/js/list-transparency.js');
    drupal_add_css($themepath . '/css/frontpage.css');
  }
}
?>