import "./category-item.style.scss"

const CategoryItem = ({category}) => {
    const {title, imageUrl} = category;
    return(
        <div className="category-container">
          {/* background images of shopping cards */}
          <div className="background-image" style={
            { backgroundImage: `url(${imageUrl})`, }
          } />
            {/* Body of category card */}
            <div className="category-body-container">
              <h2>{title}</h2>
              <p>Shop Now</p>
            </div>
          </div>
    )
}

export default CategoryItem