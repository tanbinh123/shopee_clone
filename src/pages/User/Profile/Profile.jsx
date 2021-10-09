import React from "react"
import InputText from "src/components/InputText/InputText"
import * as S from "./profile.style"
import range from "lodash/range"
import { Controller, useForm } from "react-hook-form"
import { useDispatch, useSelector } from "react-redux"
import { getDate, getMonth, getYear, isExists } from "date-fns"
import { rules } from "src/constants/rules"
import ErrorMessage from "src/components/ErrorMessage/ErrorMessage"
import { updateMe } from "src/pages/Auth/auth.slice"
import { unwrapResult } from "@reduxjs/toolkit"
import { toast } from "react-toastify"
function Profile() {
  const profile = useSelector(state => state.auth.profile)

  const {
    control,
    handleSubmit,
    getValues,
    formState: { errors },
    setError
  } = useForm({
    defaultValues: {
      name: profile.name || "",
      phone: profile.phone || "",
      address: profile.address || "",
      date: profile.date_of_birth
        ? getDate(new Date(profile.date_of_birth))
        : "",
      month: profile.date_of_birth
        ? getMonth(new Date(profile.date_of_birth))
        : "",
      year: profile.date_of_birth
        ? getYear(new Date(profile.date_of_birth))
        : ""
    }
  })

  const dispatch = useDispatch()

  const update = async data => {
    const body = {
      name: data.name,
      phone: data.phone,
      addres: data.addres,
      date_of_birth: new Date(data.year, data.month, data.date).toISOString()
    }
    try {
      const res = await dispatch(updateMe(body)).then(unwrapResult)
      toast.success(res.message, {
        position: "top-center",
        autoClose: 3000
      })
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

  const validateDate = () =>
    isExists(
      Number(getValues("year")),
      Number(getValues("month")),
      Number(getValues("date"))
    ) || "ngày sinh không dúng"

  return (
    <S.Profile>
      <S.ProfileHeader>
        <S.ProfileHeaderTitle>Hồ sơ của tôi</S.ProfileHeaderTitle>
        <S.ProfileHeaderSubTitle>
          Quản lý thông tin hồ sơ để bảo mật tài khoản
        </S.ProfileHeaderSubTitle>
      </S.ProfileHeader>
      <S.ProfileInfo>
        <S.ProfileLeft onSubmit={handleSubmit(update)}>
          <S.InputLabel>
            <S.InputLabelLabel>Email</S.InputLabelLabel>
            <S.InputLabelContent>
              <S.InputLabelContentText>{profile.email}</S.InputLabelContentText>
            </S.InputLabelContent>
          </S.InputLabel>
          <S.InputLabel>
            <S.InputLabelLabel>Tên</S.InputLabelLabel>
            <S.InputLabelContent>
              <Controller
                control={control}
                name="name"
                rules={rules.name}
                render={({ field }) => (
                  <InputText
                    name="name"
                    type="text"
                    onChange={field.onChange}
                    value={getValues("name")}
                  />
                )}
              />
              <ErrorMessage name="name" errors={errors} />
            </S.InputLabelContent>
          </S.InputLabel>
          <S.InputLabel>
            <S.InputLabelLabel>Số điện thoại</S.InputLabelLabel>
            <S.InputLabelContent>
              <Controller
                control={control}
                name="phone"
                rules={rules.phone}
                render={({ field }) => (
                  <InputText
                    name="phone"
                    type="text"
                    onChange={field.onChange}
                    value={getValues("phone")}
                  />
                )}
              />
              <ErrorMessage name="phone" errors={errors} />
            </S.InputLabelContent>
          </S.InputLabel>
          <S.InputLabel>
            <S.InputLabelLabel>Địa chỉ</S.InputLabelLabel>
            <S.InputLabelContent>
              <Controller
                control={control}
                name="address"
                rules={rules.address}
                render={({ field }) => (
                  <InputText
                    name="address"
                    type="text"
                    onChange={field.onChange}
                    value={getValues("address")}
                  />
                )}
              />
              <ErrorMessage name="address" errors={errors} />
            </S.InputLabelContent>
          </S.InputLabel>
          <S.InputLabel>
            <S.InputLabelLabel>Ngày sinh</S.InputLabelLabel>
            <S.InputLabelContent>
              <S.DateSelect>
                <Controller
                  name="date"
                  control={control}
                  rules={{
                    validate: {
                      date: validateDate
                    }
                  }}
                  render={({ field }) => (
                    <S.SelectDate
                      onChange={field.onChange}
                      value={getValues("date")}
                      title="Ngày"
                      options={range(1, 32).map(item => ({
                        name: item,
                        value: item
                      }))}
                    />
                  )}
                />
                <Controller
                  name="month"
                  control={control}
                  rules={{
                    validate: {
                      date: validateDate
                    }
                  }}
                  render={({ field }) => (
                    <S.SelectDate
                      onChange={field.onChange}
                      value={getValues("month")}
                      title="Tháng"
                      options={range(0, 12).map(item => ({
                        name: item + 1,
                        value: item
                      }))}
                    />
                  )}
                />
                <Controller
                  name="year"
                  control={control}
                  rules={{
                    validate: {
                      date: validateDate
                    }
                  }}
                  render={({ field }) => (
                    <S.SelectDate
                      onChange={field.onChange}
                      value={getValues("year")}
                      title="Năm"
                      options={range(1900, 2021).map(item => ({
                        name: item,
                        value: item
                      }))}
                    />
                  )}
                />
              </S.DateSelect>
            </S.InputLabelContent>
            <S.ErrorMessage>
              <ErrorMessage name="date" errors={errors} />
            </S.ErrorMessage>
          </S.InputLabel>
          <S.Submit>
            <S.ButtonSubmit type="submit">Lưu</S.ButtonSubmit>
          </S.Submit>
        </S.ProfileLeft>
        <S.ProfileRight>
          <S.AvatarUploader>
            <S.Avatar>
              <img
                src="https://lh3.googleusercontent.com/_ai_xp7eVSguBGgHc3J_RKwy3VrOpuKfEantH9K6DuCvlGF03kP1-CLTerapxRcs7U-___vQI92FLkINQQApnTjlJAkGYTVSMn8gNg2PRzbGS4Hzx_5yhIMWUPOaHYn15xfU0FGKX3LCniTrv0hOc7G24_hcYkdu_qaA3JRFLWMs34_tq50ipNHH_DiKWc08U8_QncoeFQViaYT2uY1tvlInGfKJleFj0YUWabRY4ShZtNLJ6ReKHJOnHMpcVX_PoebDC-FFYo4hI2rdoVf6HTxTlJjiph3a-wHF0FwMFvxB2yhkx9w7_-bCtutw5WCbF4O_IuRoshDBNEz99k3V7iX6SeoTGFsiha0KTVKJPR83DDGxtarl0Wx90_-JqDaw6KkftlD0bq_Mk2jSdt-DqtJrPmHlWkPZe4N9GdbwujmHQFIPGvmgdjGwtvolCP_32FKZyhteHFylZ-cEdYWF-cepmqdxasbegAhnr3Q9nYTSfvMrpXENHp1NQU4mmx5ixmR6XDYYYTnpuTpZ9eEm1Y0NANNmrPp_yewuOi4TIPlQwMnYj3EiYWV6xF8t9qRyF1VL-rA_Zhq-GxuVdO7X5VJOa2kD5WfoLT1rmPE-iwEck2b0N3P3UEEKQBrCL7zh4SDo6SP_bHNgYNwYM5IAnK-E4mgTV4c8E5avhtPisWNqJn9hTNuieWKT86RVT-NccEq5Iz1URtnEqO8fxWmn8NE=w623-h933-no?authuser=0"
                alt=""
              />
            </S.Avatar>
            <S.InputFile type="file" accept=".jpg,.jpeg,.png" />
            <S.ButtonUpload light={1}>Chọn ảnh</S.ButtonUpload>
            <S.AvatarUploaderTextContainer>
              <div>Dung lượng tối đa là 1MB</div>
              <div>Định dạng là JPG, PNG</div>
            </S.AvatarUploaderTextContainer>
          </S.AvatarUploader>
        </S.ProfileRight>
      </S.ProfileInfo>
    </S.Profile>
  )
}

export default Profile
