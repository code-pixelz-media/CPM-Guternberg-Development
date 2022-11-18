/**
 * Featured Image Column Wrapper
 */

// Setup the block
const { Component } = wp.element;

// Import block dependencies and components
import classnames from "classnames";
import icons from "./icons";

// Import block components
const { MediaUpload } = wp.editor;

// Create an SocialIcons wrapper Component
export default class FeaturedImage extends Component {
  constructor(props) {
    super(...arguments);
  }

  render() {
    return (
      <div class="cpm-hero-column ps-hero-block-wrap">
        <div class="cpm-hero-image-wrap">{this.props.children}</div>
      </div>
    );
  }
}
