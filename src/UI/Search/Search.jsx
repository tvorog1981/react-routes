import styles from "./Search.module.css";
import Input from "../Input/Input";
const Search = (...props) => {
  return (
    <div className={styles.mainSearch}>
      <Input className={styles.search} {...props} />
    </div>
  );
};

export default Search;
