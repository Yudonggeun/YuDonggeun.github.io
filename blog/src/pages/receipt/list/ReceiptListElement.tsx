import {ReceiptSimpleInfo} from "./type";
import {getPriceFormatted} from "../../../util/NumberUtil";

function ReceiptListElement({
    id,
    authorId,
    type,
    productName,
    quantity,
    price
}: ReceiptSimpleInfo) {
  return (
      <tr className="border-b border-gray-200">
          <td className="px-4 py-2">{type}</td>
          <td className="px-4 py-2">{productName}</td>
          <td className="px-4 py-2">{quantity}</td>
          <td className="px-4 py-2">{getPriceFormatted(price)}</td>
      </tr>
  );
}

export default ReceiptListElement;