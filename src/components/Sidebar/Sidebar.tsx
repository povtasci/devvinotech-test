import { useSelector } from "react-redux";
import {
  getCategories,
  isFetchingCategoriesInProgress,
} from "../../selectors/categorySelectors";
import "./Sidebar.scss";
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const Sidebar = () => {
  const categories = useSelector(getCategories);
  const isFetchingCategories = useSelector(isFetchingCategoriesInProgress);
  const [isOpen, setIsOpen] = useState(false);
  const params = useParams();
  const categoryId = parseInt(params.id as string, 10);

  useEffect(() => {
    setIsOpen(false);
  }, [params.id]);
  const toggleSidebar = () => setIsOpen(!isOpen);

  return (
    <div className={`sidebar${isOpen ? " open" : " closed"}`}>
      <div className="sidebar-open-button-container">
        <button type="button" onClick={() => toggleSidebar()}>
          ☰
        </button>
      </div>
      <div className="sidebar-content">
        <h3 className="category-headline">Categories</h3>
        <Link className={`category${!categoryId ? " active" : ""}`} to={`/`}>
          All
        </Link>
        {isFetchingCategories
          ? "Loading..."
          : categories.map((category) => (
              <Link
                className={`category${
                  categoryId === category.id ? " active" : ""
                }`}
                key={`category-${category.id}`}
                to={`/category/${category.id}`}
              >
                {category.name}
              </Link>
            ))}
        <button type="button" onClick={() => toggleSidebar()}>
          ✖
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
