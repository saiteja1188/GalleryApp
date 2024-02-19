// Write your code here.
import './index.css'

const ThumbnailItem = props => {
  const {imageDetails, selectThumbnail, isActive} = props
  const {thumbnailUrl, thumbnailAltText, id} = imageDetails

  const onClickThumb = () => {
    selectThumbnail(id)
  }

  const thumbnailClassName = isActive ? `thumbnail active` : `thumbnail`
  return (
    <li className="thumbnail-items">
      <button type="button" className="button-list" onClick={onClickThumb}>
        <img
          src={thumbnailUrl}
          alt={thumbnailAltText}
          className={thumbnailClassName}
        />
      </button>
    </li>
  )
}

export default ThumbnailItem
