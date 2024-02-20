import { REGEX } from "./regex";

export const RULES = {
  EMAIL: {
    required: {
      value: true,
      message: "필수값을 입력해 주세요.",
    },
    pattern: {
      value: REGEX.EMAIL,
      message: "올바른 형태의 이메일을 입력해 주세요.",
    },
  },

  NICKNAME: {
    required: {
      value: true,
      message: "필수값을 입력해 주세요.",
    },
    pattern: {
      value: REGEX.NICKNAME,
      message: "올바른 형태의 닉네임을 입력해 주세요.",
    },
  },

  PASSWORD: {
    required: {
      value: true,
      message: "필수값을 입력해 주세요.",
    },
    pattern: {
      value: REGEX.PASSWORD,
      message: "올바른 형태의 비밀번호를 입력해 주세요.",
    },
  },
  REQUIRED: {
    required: {
      value: true,
      message: "필수값을 입력해 주세요.",
    },
  },
} as const;
