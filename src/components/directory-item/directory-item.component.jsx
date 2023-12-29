import {BackgroundImage,Body,DirectoryItemContainer} from "./directory-item.style"
import { useNavigate } from "react-router-dom";

const DirectoryItem = ({category}) => {
    const {title, imageUrl, route} = category;
    const navigate = useNavigate();

    const onNavigateHandler = () => navigate(route);

    return(
        <DirectoryItemContainer onClick={onNavigateHandler}>
          {/* background images of shopping cards */}
          <BackgroundImage imageUrl={imageUrl} />
            {/* Body of category card */}
            <Body>
              <h2>{title}</h2>
              <p>Shop Now</p>
            </Body>
          </DirectoryItemContainer>
    )
}

export default DirectoryItem