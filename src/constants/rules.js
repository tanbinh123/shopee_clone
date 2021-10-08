import { isEmail } from "src/utils/helper"

export const rules = {
  email: {
    required: {
      value: true,
      message: "Email là bắt buộc nhập"
    },
    minLength: {
      value: 5,
      message: "Email có độ dài từ 5 - 160 ký tự"
    },
    maxLength: {
      value: 160,
      message: "Email có độ dài từ 5 - 160 ký tự"
    },
    validate: {
      email: v => isEmail(v) || "Email không dúng định dạng"
    }
  },
  password: {
    required: {
      value: true,
      message: "Mật khẩu là bắt buộc nhập"
    },
    minLength: {
      value: 6,
      message: "Mật khẩu có độ dài từ 6 - 160 ký tự"
    },
    maxLength: {
      value: 160,
      message: "Mật khẩu có độ dài từ 6 - 160 ký tự"
    }
  },
  confirmPassword: {
    required: {
      value: true,
      message: "Nhập lại mật khẩu là bắt buộc"
    },
    minLength: {
      value: 6,
      message: "Nhập lại mật khẩu có độ dài từ 6 - 160 ký tự"
    },
    maxLength: {
      value: 160,
      message: "Nhập lại mật khẩu có độ dài từ 6 - 160 ký tự"
    }
  }
}
