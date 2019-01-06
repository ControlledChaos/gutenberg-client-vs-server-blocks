<?php
/**
 * Plugin Name: Block Test: Client vs. Server-Side
 * Plugin URI: https://github.com/Viper007Bond/gutenberg-client-vs-server-blocks
 * Description: Test plugin for comparing how client and server-side blocks work.
 * Author: Alex Mills (Viper007Bond)
 * Author URI: https://alex.blog/
 * License: GPL2+
 * License URI: https://www.gnu.org/licenses/gpl-2.0.txt
 */

add_action( 'enqueue_block_editor_assets', function() {
	wp_enqueue_script(
		'gutenberg_client_vs_server_blocks-cgb-block-js', // Handle.
		plugins_url( '/dist/blocks.build.js', __FILE__ ),
		array( 'wp-blocks', 'wp-i18n', 'wp-element', 'wp-editor' ),
		filemtime( plugin_dir_path( __FILE__ ) . 'dist/blocks.build.js' ),
		false
	);
} );

add_action( 'init', function() {
	register_block_type(
		'viper007bond/test-block-server',
		array(
			'render_callback' => function( $attributes, $content ) {
				return '<p>This came from the server:</p><pre>' . $content . '</pre>';
			},
		)
	);
} );
