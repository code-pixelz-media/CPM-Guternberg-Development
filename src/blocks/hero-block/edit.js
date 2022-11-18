/**
 * WordPress dependencies
 */
import { __ } from "@wordpress/i18n";
import {
  useBlockProps,
  RichText,
  AlignmentToolbar,
  BlockControls,
  InspectorControls,
  MediaUpload,
  useBlockProps,
} from "@wordpress/block-editor";

// Register Inspector components
import { Button } from "@wordpress/components";

// Extend component
import { Component } from "@wordpress/element";
import { HeroImageBox } from "./components/heroImage";

const ALLOWED_MEDIA_TYPES = ["image"];

/**
 * Editor Content
 *
 * @return {WPElement} Element to render.
 */
export default function edit({ attributes, setAttributes }) {
  const blockProps = useBlockProps();

  const onSelectImage = (img) => {
    setAttributes({
      heroImageImgID: img.id,
      heroImageImgURL: img.url,
    });
  };

  return [
    // Show the block alignment controls on focus
    <BlockControls key="controls">
      <AlignmentToolbar
        value={heroImageAlignment}
        onChange={(value) => setAttributes({ heroImageAlignment: value })}
      />
    </BlockControls>,
    // Show the block controls on focus
    <InspectorControls />,
    // Show the block markup in the editor
    <HeroImageBox>
      <FeaturedImage>
        <div class="ps-hero-image-square">
          <MediaUpload
            buttonProps={{
              className: "change-image",
            }}
            onSelect={(img) =>
              setAttributes({
                heroImageImgID: img.id,
                heroImageImgURL: img.url,
              })
            }
            allowed={ALLOWED_MEDIA_TYPES}
            type="image"
            value={heroImageImgID}
            render={({ open }) => (
              <Button onClick={open}>
                {!heroImageImgID ? (
                  icons.upload
                ) : (
                  <img class="hero-image" src={heroImageImgURL} alt="avatar" />
                )}
              </Button>
            )}
          ></MediaUpload>
        </div>
      </FeaturedImage>

      <div
        className={classnames(
          "ps-hero-image-column ps-hero-image-content-wrap"
        )}
      >
        <RichText
          tagName="h2"
          placeholder={__("Add name", "prosys-blocks")}
          keepPlaceholderOnFocus
          value={heroImageName}
          className="ps-hero-image-name"
          style={{
            color: heroImageTextColor,
          }}
          onChange={(value) => setAttributes({ heroImageName: value })}
        />

        <RichText
          tagName="p"
          placeholder={__("Add title", "prosys-blocks")}
          keepPlaceholderOnFocus
          value={heroImageTitle}
          className="ps-hero-image-title"
          style={{
            color: heroImageTextColor,
          }}
          onChange={(value) => setAttributes({ heroImageTitle: value })}
        />

        <RichText
          tagName="div"
          className="ps-hero-image-text"
          multiline="p"
          placeholder={__("Add Image text...", "prosys-blocks")}
          keepPlaceholderOnFocus
          value={heroImageContent}
          formattingControls={["bold", "italic", "strikethrough", "link"]}
          onChange={(value) => setAttributes({ heroImageContent: value })}
        />
      </div>
    </HeroImageBox>,
  ];
}
