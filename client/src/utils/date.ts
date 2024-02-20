import { ko } from "date-fns/locale";
import { format } from "date-fns";

export const DATE_FORMAT = {
  FULL_DATE_WITH_TIME: "yy/M/d aaa h:mm",
};

export const formatDate = (date: string, dateFormat: string) => {
  if (!date) return " ";
  return format(new Date(date), dateFormat, { locale: ko });
};
