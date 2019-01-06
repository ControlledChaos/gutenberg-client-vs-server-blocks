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

add_action( 'enqueue_block_editor_assets', 'gutenberg_client_vs_server_blocks_cgb_editor_assets' );

/**
 * Enqueue Gutenberg block assets for backend editor.
 *
 * @uses {wp-blocks} for block type registration & related functions.
 * @uses {wp-element} for WP Element abstraction — structure of blocks.
 * @uses {wp-i18n} to internationalize the block's text.
 * @uses {wp-editor} for WP editor styles.
 * @since 1.0.0
 */
function gutenberg_client_vs_server_blocks_cgb_editor_assets() { // phpcs:ignore
	wp_enqueue_script(
		'gutenberg_client_vs_server_blocks-cgb-block-js', // Handle.
		plugins_url( '/dist/blocks.build.js', dirname( __FILE__ ) ),
		array( 'wp-blocks', 'wp-i18n', 'wp-element', 'wp-editor' ),
		filemtime( plugin_dir_path( __DIR__ ) . 'dist/blocks.build.js' ),
		true
	);
}
