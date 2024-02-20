export const REGEX = {
  EMAIL: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
  PASSWORD: /(?=.*\d)(?=.*[a-z]).{8,}/,
  PHONE: /010-\d{4}-\d{4}/,
  NAME: /^[ㄱ-ㅎ가-힣a-zA-Z0-9]+$/,
  NICKNAME: /^.{2,10}$/,
  ID: /^[ㄱ-ㅎ가-힣a-zA-Z0-9]+$/,
};
