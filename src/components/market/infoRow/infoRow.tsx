import Text from "components/common/text/text";
import styles from "./info-row.module.scss";

type Props = {
  keyText: string;
  valueText: string | number;
};
const InfoRow = (props: Props) => {
  const { keyText, valueText } = props;
  return (
    <div className={styles["info-row"]}>
      <Text text={keyText} />
      <Text text={String(valueText)} />
    </div>
  );
};

export default InfoRow;
