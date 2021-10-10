import { unwrapResult } from "@reduxjs/toolkit"
import React from "react"
import { useForm, Controller } from "react-hook-form"
import { useDispatch } from "react-redux"
import { Link, useHistory } from "react-router-dom"
import { Button } from "src/assets/styles/utils"
import ErrorMessage from "src/components/ErrorMessage/ErrorMessage"
import InputPassword from "src/components/InputPassword/InputPassword"
import InputText from "src/components/InputText/InputText"
import { path } from "src/constants/path"
import { rules } from "src/constants/rules"
import { register } from "../auth.slice"
import * as S from "./register.style"
import { Helmet } from "react-helmet-async"
function Register() {
  const {
    control,
    handleSubmit,
    getValues,
    setError,
    formState: { errors }
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
      confirmPassword: ""
    }
  })

  const dispatch = useDispatch()
  const history = useHistory()

  const handleRegister = async data => {
    const body = {
      email: data.email,
      password: data.password
    }
    try {
      const res = await dispatch(register(body))
      unwrapResult(res)
      history.push(path.home)
    } catch (error) {
      if (error.status === 422) {
        for (const key in error.data) {
          setError(key, {
            type: "server",
            message: error.data[key]
          })
        }
      }
    }
  }

  return (
    <S.Register>
      <Helmet>
        <title>Đăng ký</title>
      </Helmet>
      <S.Container className="container">
        <S.Banner />
        <S.FormWrapper>
          <S.FormTitle>Đăng ký</S.FormTitle>
          <S.Form onSubmit={handleSubmit(handleRegister)} noValidate>
            <S.FormControl>
              <Controller
                name="email"
                control={control}
                rules={rules.email}
                render={({ field }) => (
                  <InputText
                    type="email"
                    name="email"
                    placeholder="Email"
                    onChange={e => field.onChange(e)}
                    value={getValues("email")}
                  />
                )}
              />
              <ErrorMessage errors={errors} name="email" />
            </S.FormControl>
            <S.FormControl>
              <Controller
                name="password"
                control={control}
                rules={rules.password}
                render={({ field }) => (
                  <InputPassword
                    name="password"
                    placeholder="Mật khẩu"
                    onChange={e => field.onChange(e)}
                    value={getValues("password")}
                  />
                )}
              />
              <ErrorMessage errors={errors} name="password" />
            </S.FormControl>
            <S.FormControl>
              <Controller
                name="confirmPassword"
                control={control}
                rules={{
                  ...rules.confirmPassword,
                  validate: {
                    samePassword: v =>
                      v === getValues("password") || "Mật khẩu không khớp"
                  }
                }}
                render={({ field }) => (
                  <InputPassword
                    placeholder="Nhập lại mật khẩu"
                    name="confirmPassword"
                    onChange={e => field.onChange(e)}
                    value={getValues("confirmPassword")}
                  />
                )}
              />
              <ErrorMessage errors={errors} name="confirmPassword" />
            </S.FormControl>
            <S.FormButton>
              <Button type="submit">Đăng ký</Button>
            </S.FormButton>
          </S.Form>
          <S.FormFooter>
            <span>Bạn đã có tài khản chưa?</span>
            <Link to={path.login} className="link">
              Đăng nhập
            </Link>
          </S.FormFooter>
        </S.FormWrapper>
      </S.Container>
    </S.Register>
  )
}

export default Register
