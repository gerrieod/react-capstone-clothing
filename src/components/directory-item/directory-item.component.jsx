import "./directory-item.style.scss"

const DirectoryItem = ({category}) => {
    const {title, imageUrl} = category;
    return(
        <div className="directory-item-container">
          {/* background images of shopping cards */}
          <div className="background-image" style={
            { backgroundImage: `url(${imageUrl})`, }
          } />
            {/* Body of category card */}
            <div className="body">
              <h2>{title}</h2>
              <p>Shop Now</p>
            </div>
          </div>
    )
}

export default DirectoryItem