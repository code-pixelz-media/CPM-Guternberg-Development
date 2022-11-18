/**
 * Hero Box Wrapper
 */

// Setup the block
const { Component } = wp.element;

// Import block dependencies and components
import classnames from "classnames";

// Create a hero box wrapper Component
export default class HeroImageBox extends Component {
  constructor(props) {
    super(...arguments);
  }

  render() {
    // Setup the attributes
    const {
      heroImageAlignment,
      heroImageImgURL,
      heroImageFontSize,
      heroImageBackgroundColor,
      heroImageTextColor,
      heroImageAvatarShape,
    } = this.props.attributes;

    return (
      <div
        style={{
          backgroundColor: heroImageBackgroundColor,
          color: heroImageTextColor,
        }}
        className={classnames(
          this.props.className,
          heroImageAlignment,
          heroImageAvatarShape,
          { "ps-has-avatar": heroImageImgURL },
          "ps-font-size-" + heroImageFontSize,
          "ps-block-hero-image",
          "ps-hero-image-columns"
        )}
      >
        {this.props.children}
      </div>
    );
  }
}
