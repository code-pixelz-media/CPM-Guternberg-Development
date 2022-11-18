/**
 * Inspector Controls
 */

import { registerBlockType } from '@wordpress/blocks';

// Setup the block
const { __ } = wp.i18n;
import { Component } from '@wordpress/element';

// Import block components
import {
	InspectorControls,
	BlockDescription,
	ColorPalette,
  	PanelColorSettings,
  	useBlockProps,
} from '@wordpress/block-editor';

// Import Inspector components
import {
	Panel,
	PanelBody,
	PanelRow,
	RangeControl,
	SelectControl,
	TextControl,
} from '@wordpress/components';

// Create an Inspector Controls wrapper Component
export default class Inspector extends Component {

	constructor( props ) {
		super( ...arguments );
	}

	render() {

		// Setup the attributes
		const { heroName, heroTitle, heroContent, heroAlignment, heroImgURL, heroImgID, heroFontSize, heroBackgroundColor, heroTextColor, heroLinkColor, twitter, facebook, instagram, pinterest, google, youtube, github, linkedin, email, website, heroAvatarShape  } = this.props.attributes;
		const { setAttributes } = this.props;

		// Update color values
		const onChangeBackgroundColor = value => setAttributes( { heroBackgroundColor: value } );
		const onChangeHeroTextColor = value => setAttributes( { heroTextColor: value } );
		const onChangeSocialLinkColor = value => setAttributes( { heroLinkColor: value } );

		return (
		<InspectorControls key="inspector">
			<PanelBody>
				<RangeControl
					label={ __( 'Font Size' ) }
					value={ heroFontSize }
					onChange={ ( value ) => this.props.setAttributes( { heroFontSize: value } ) }
					min={ 14 }
					max={ 24 }
					step={ 1 }
				/>
				<PanelColorSettings
					title={ __( 'Background Color' ) }
					initialOpen={ false }
					colorSettings={ [ {
						value: heroBackgroundColor,
						onChange: onChangeBackgroundColor,
						label: __( 'Background Color' ),
					} ] }
				>
				</PanelColorSettings>

				<PanelColorSettings
					title={ __( 'Text Color' ) }
					initialOpen={ false }
					colorSettings={ [ {
						value: heroTextColor,
						onChange: onChangeHeroTextColor,
						label: __( 'Text Color' ),
					} ] }
				>
				</PanelColorSettings>

				<PanelColorSettings
					title={ __( 'Social Link Color' ) }
					initialOpen={ false }
					colorSettings={ [ {
						value: heroLinkColor,
						onChange: onChangeSocialLinkColor,
						label: __( 'Social Link Color' ),
						colors: socialColors,
					} ] }
				>
				</PanelColorSettings>
			</PanelBody>

			<PanelBody title={ __( 'Social Links' ) } initialOpen={ false }>
				<p>{ __( 'Add links to your social media site and they will appear in the bottom of the hero box.' ) }</p>

				<TextControl
					label={ __( 'Twitter URL' ) }
					type="url"
					value={ twitter }
					onChange={ ( value ) => this.props.setAttributes( { twitter: value } ) }
				/>

				<TextControl
					label={ __( 'Facebook URL' ) }
					type="url"
					value={ facebook }
					onChange={ ( value ) => this.props.setAttributes( { facebook: value } ) }
				/>

				<TextControl
					label={ __( 'Instagram URL' ) }
					type="url"
					value={ instagram }
					onChange={ ( value ) => this.props.setAttributes( { instagram: value } ) }
				/>

				<TextControl
					label={ __( 'Pinterest URL' ) }
					type="url"
					value={ pinterest }
					onChange={ ( value ) => this.props.setAttributes( { pinterest: value } ) }
				/>

				<TextControl
					label={ __( 'Google URL' ) }
					type="url"
					value={ google }
					onChange={ ( value ) => this.props.setAttributes( { google: value } ) }
				/>

				<TextControl
					label={ __( 'YouTube URL' ) }
					type="url"
					value={ youtube }
					onChange={ ( value ) => this.props.setAttributes( { youtube: value } ) }
				/>

				<TextControl
					label={ __( 'Github URL' ) }
					type="url"
					value={ github }
					onChange={ ( value ) => this.props.setAttributes( { github: value } ) }
				/>

				<TextControl
					label={ __( 'LinkedIn URL' ) }
					type="url"
					value={ linkedin }
					onChange={ ( value ) => this.props.setAttributes( { linkedin: value } ) }
				/>

				<TextControl
					label={ __( 'Email URL' ) }
					type="url"
					value={ email }
					onChange={ ( value ) => this.props.setAttributes( { email: value } ) }
				/>

				<TextControl
					label={ __( 'Website URL' ) }
					type="url"
					value={ website }
					onChange={ ( value ) => this.props.setAttributes( { website: value } ) }
				/>
			</PanelBody>
		</InspectorControls>
		);
	}
}
