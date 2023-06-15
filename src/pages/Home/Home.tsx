import { useDispatch, useSelector } from "react-redux";
import "./Home.scss";
import {
  getImagePage,
  getImages,
  isFetchingImagesInProgress,
} from "../../selectors/imageSelectors";
import { fetchImages } from "../../sagas/image/imageActions";
import { useParams } from "react-router-dom";
import { useEffect } from "react";

const Home = () => {
  const dispatch = useDispatch();
  const images = useSelector(getImages);
  const isFetchingImages = useSelector(isFetchingImagesInProgress);
  const page: number = useSelector(getImagePage);
  const params = useParams();
  const categoryId = parseInt(params.id as string, 10);

  useEffect(() => {
    loadMore(0);
  }, [categoryId]);

  const loadMore = (page: number) => {
    dispatch(
      fetchImages({
        page: page + 1,
        limit: 10,
        ...(categoryId ? { category_ids: categoryId } : {}),
      })
    );
  };

  return (
    <>
      <h1 className="content-headline">Images</h1>
      <div className="image-list">
        {images.map((image, index) => (
          // using index in key is wrong, but because we are getting the same image more than once to avoid issues I decided to go with using index
          <div key={`image-${image.id}-${index}`} className="image-container">
            <img
              src={image.url}
              className="image"
              loading="lazy"
              alt={image.id}
            />
          </div>
        ))}
      </div>
      <div className="load-more-button-container">
        <button
          type="button"
          disabled={isFetchingImages}
          onClick={() => loadMore(page)}
        >
          {isFetchingImages ? "Loading..." : "Load More"}
        </button>
      </div>
    </>
  );
};

export default Home;
