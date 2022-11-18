/**
 * BLOCK: Hero Block
 */

// Import block dependencies and components
import classnames from "classnames";
import Inspector from "./components/inspector";
import HeroImageBox from "./components/heroImage";
import FeaturedImage from "./components/featuredImage";
import icons from "./components/icons";

// Import styles
import "./styles/style.scss";
import "./styles/editor.scss";

/**
 * Internal dependencies
 */
import metadata from "./block.json";
import edit from "./edit";
import save from "./save";

const settings = {
  edit,
  save,
};

// Internationalization
const { __ } = wp.i18n;

// Register block
const { registerBlockType } = wp.blocks;

/**
 * Function to register an individual block.
 * https://developer.wordpress.org/block-editor/reference-guides/block-api/block-metadata/
 *
 * @param {Object} metadata The block metadata
 * @param {Object} settings The client-side block settings.
 *
 */
registerBlockType(metadata, settings);
