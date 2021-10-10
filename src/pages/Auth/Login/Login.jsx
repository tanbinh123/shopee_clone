import React from "react"
import InputText from "src/components/InputText/InputText"
import InputPassword from "src/components/InputPassword/InputPassword"
import ErrorMessage from "src/components/ErrorMessage/ErrorMessage"
import * as S from "../Register/register.style"
import { useDispatch } from "react-redux"
import { unwrapResult } from "@reduxjs/toolkit"
import { rules } from "src/constants/rules"
import { path } from "src/constants/path"
import { login } from "../auth.slice"
import { Link, useHistory } from "react-router-dom"
import { Controller, useForm } from "react-hook-form"
import { Button } from "src/assets/styles/utils"
import { Helmet } from "react-helmet-async"

function Login() {
  const {
    control,
    handleSubmit,
    getValues,
    setError,
    formState: { errors }
  } = useForm({
    defaultValues: {
      email: "",
      password: ""
    }
  })

  const dispatch = useDispatch()
  const history = useHistory()

  const handleLogin = async data => {
    const body = {
      email: data.email,
      password: data.password
    }
    try {
      const res = await dispatch(login(body))
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
        <title>Đăng Nhập</title>
      </Helmet>
      <S.Container className="container">
        <S.Banner />
        <S.FormWrapper>
          <S.FormTitle>Đăng nhập</S.FormTitle>
          <S.Form onSubmit={handleSubmit(handleLogin)} noValidate>
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
            <S.FormButton>
              <Button type="submit">Đăng Nhập</Button>
            </S.FormButton>
          </S.Form>
          <S.FormFooter>
            <span>Bạn mới biết đến MyShop?</span>
            <Link to={path.register} className="link">
              Đăng ký
            </Link>
          </S.FormFooter>
        </S.FormWrapper>
      </S.Container>
    </S.Register>
  )
}

export default Login
