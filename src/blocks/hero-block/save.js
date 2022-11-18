/**
 * WordPress dependencies
 */
import { __ } from "@wordpress/i18n";
import { useBlockProps } from "@wordpress/block-editor";

/**
 * Frontend Content
 *
 * The save function defines the way in which the different attributes should
 * be combined into the final markup, which is then serialized by the block
 * editor into `post_content`.
 *
 * @return {WPElement} Element to render.
 */
export default function save(props) {
  // Setup the attributes
  const {
    profileName,
    profileTitle,
    profileContent,
    profileAlignment,
    profileImgURL,
    profileImgID,
    profileFontSize,
    profileBackgroundColor,
    profileTextColor,
    profileLinkColor,
    twitter,
    facebook,
    instagram,
    pinterest,
    google,
    youtube,
    github,
    linkedin,
    email,
    website,
    profileAvatarShape,
  } = props.attributes;

  return (
    <p {...useBlockProps.save()}>
      <ProfileBox {...props}>
        {profileImgURL && (
          <AvatarColumn {...props}>
            <div class="ps-profile-image-square">
              <img class="ps-profile-avatar" src={profileImgURL} alt="avatar" />
            </div>
          </AvatarColumn>
        )}

        <div
          className={classnames("ps-profile-column ps-profile-content-wrap")}
        >
          {profileName && (
            <RichText.Content
              tagName="h2"
              className="ps-profile-name"
              style={{
                color: profileTextColor,
              }}
              value={profileName}
            />
          )}

          {profileTitle && (
            <RichText.Content
              tagName="p"
              className="ps-profile-title"
              style={{
                color: profileTextColor,
              }}
              value={profileTitle}
            />
          )}

          {profileContent && (
            <RichText.Content
              tagName="div"
              className="ps-profile-text"
              value={profileContent}
            />
          )}

          <SocialIcons {...props} />
        </div>
      </ProfileBox>
    </p>
  );
}
