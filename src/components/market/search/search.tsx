import TextField from "components/common/textField/textField";
import { useTranslation } from "react-i18next";
type Props = {
  searchValue: string;
  changeSearchValue: (v: string) => void;
};
const Search = (props: Props) => {
  const { searchValue, changeSearchValue } = props;
  const { t } = useTranslation();
  return (
    <TextField
      value={searchValue}
      onChange={changeSearchValue}
      placeholder={t("market.list.header.search.placeholder")}
    />
  );
};

export default Search;
