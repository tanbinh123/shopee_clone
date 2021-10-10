import React, { useState, useEffect, useMemo } from "react"
import { useDispatch } from "react-redux"
import { unwrapResult } from "@reduxjs/toolkit"
import * as S from "./purchase.style"
import { getPurchase } from "../user.slice"
import useQuery from "src/hooks/useQuery"
import { purchasesStatus } from "src/constants/status"
import { path } from "src/constants/path"
import { generateNameId } from "src/utils/helper"
import qs from "query-string"
import { Helmet } from "react-helmet-async"
function Purchase() {
  const [purchases, setPurchases] = useState()

  const dispatch = useDispatch()

  const query = useQuery()
  const status = useMemo(() => query.status || purchasesStatus.all, [query])
  useEffect(() => {
    dispatch(getPurchase(status))
      .then(unwrapResult)
      .then(res => setPurchases(res.data))
  }, [status, dispatch])

  const handleActive = value => () => Number(value) === Number(status)
  return (
    <div>
      <Helmet>
        <title>Đơn mua</title>
      </Helmet>
      <S.PurchaseTabs>
        <S.PurchaseTabItem
          isActive={handleActive(purchasesStatus.all)}
          to={path.purchase}
        >
          Tất cả
        </S.PurchaseTabItem>
        <S.PurchaseTabItem
          to={{
            pathname: path.purchase,
            search: `?${qs.stringify({
              status: purchasesStatus.waitForConfirmation
            })}`
          }}
          isActive={handleActive(purchasesStatus.waitForConfirmation)}
        >
          Chờ xác nhận
        </S.PurchaseTabItem>
        <S.PurchaseTabItem
          to={{
            pathname: path.purchase,
            search: `?${qs.stringify({
              status: purchasesStatus.waitForGetting
            })}`
          }}
          isActive={handleActive(purchasesStatus.waitForGetting)}
        >
          Chờ lấy hàng
        </S.PurchaseTabItem>
        <S.PurchaseTabItem
          to={{
            pathname: path.purchase,
            search: `?${qs.stringify({
              status: purchasesStatus.inProgress
            })}`
          }}
          isActive={handleActive(purchasesStatus.inProgress)}
        >
          Đang giao
        </S.PurchaseTabItem>
        <S.PurchaseTabItem
          to={{
            pathname: path.purchase,
            search: `?${qs.stringify({
              status: purchasesStatus.delivered
            })}`
          }}
          isActive={handleActive(purchasesStatus.delivered)}
        >
          Đã giao
        </S.PurchaseTabItem>
        <S.PurchaseTabItem
          to={{
            pathname: path.purchase,
            search: `?${qs.stringify({
              status: purchasesStatus.cancelled
            })}`
          }}
          isActive={handleActive(purchasesStatus.cancelled)}
        >
          Đã huỷ
        </S.PurchaseTabItem>
      </S.PurchaseTabs>
      <S.PurchaseList>
        {purchases?.map(purchase => (
          <S.OrderCard key={purchase._id}>
            <S.OrderCardContent>
              <S.OrderCardDetail>
                <img src={purchase.product.image} alt="" />
                <S.OrderContent>
                  <S.OrderName>{purchase.product.name}</S.OrderName>
                  <S.OrderQuantity>
                    x {purchase.product.buy_count}
                  </S.OrderQuantity>
                </S.OrderContent>
              </S.OrderCardDetail>
              <S.OrderCardPrice>
                đ{purchase.product.price.toLocaleString()}
              </S.OrderCardPrice>
            </S.OrderCardContent>
            <S.OrderCardButtonContainer>
              <S.PurchaseButton
                light={1}
                to={path.product + `/${generateNameId(purchase.product)}`}
              >
                Xem sản phẩm
              </S.PurchaseButton>
              <S.TotalPrice>
                <S.TotalPriceLable>Tổng giá tiền</S.TotalPriceLable>
                <S.TotalPriceNumber>
                  đ
                  {(
                    purchase.product.price * purchase.buy_count
                  ).toLocaleString()}
                </S.TotalPriceNumber>
              </S.TotalPrice>
            </S.OrderCardButtonContainer>
          </S.OrderCard>
        ))}
      </S.PurchaseList>
    </div>
  )
}

export default Purchase
