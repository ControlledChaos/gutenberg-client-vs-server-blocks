import { registerBlockType } from '@wordpress/blocks';
import { PlainText } from '@wordpress/editor';

let blockProperties = {
	icon: 'editor-code',
	category: 'formatting',

	attributes: {
		content: {
			type: 'string',
			source: 'text',
			selector: 'pre',
		},
	},

	supports: {
		html: false,
	},


	edit( { attributes, setAttributes, className } ) {
		return (
			<div className={ className }>
				<PlainText
					value={ attributes.content }
					onChange={ ( content ) => setAttributes( { content } ) }
					placeholder={ 'Write code…' }
				/>
			</div>
		);
	},

	save( { attributes } ) {
		let el = document.createElement( 'div' );
		el.appendChild( document.createTextNode( attributes.content ) );

		return(
			<pre>{ el.innerHTML }</pre>
		)
	},
};

blockProperties.title = 'Viper Test Block: Client';
registerBlockType( 'viper007bond/test-block-client', blockProperties );

blockProperties.title = 'Viper Test Block: Server';
registerBlockType( 'viper007bond/test-block-server', blockProperties );
