import { memo,useCallback,useState } from 'react';
import PropTypes from 'prop-types';

const ImageBlock = ({
    alt = '',
    className = '',
    src = '',
    otherProps = {},
}) => {
    const [imageSrc,setImageSrc] = useState(src);
    
    // set the image on error
    const onImageError = useCallback( () => {
         setImageSrc('images/placeholder_for_missing_posters.png');
    },[src,imageSrc]);
    
    return (
        <img
            onError={onImageError}
            alt={alt}
            className={className}
            src={imageSrc}
            {...otherProps}
        />
    )
}

ImageBlock.propTypes = {
    alt: PropTypes.string,
    className: PropTypes.string,
    src: PropTypes.string,
    otherProps : PropTypes.object,
}
export default memo(ImageBlock);