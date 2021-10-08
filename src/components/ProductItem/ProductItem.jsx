import React from "react"
import { Link } from "react-router-dom"
import ProductRating from "../ProductRating/ProductRating"
import * as S from "./productItem.style"
import PropTypes from "prop-types"
import { path } from "src/constants/path"
import { generateNameId } from "src/utils/helper"

function ProductItem({ product }) {
  return (
    <S.Product>
      <Link to={path.product + `/${generateNameId(product)}`}>
        <S.ProductItem>
          <S.ProductItemImage>
            <img src={product.image} alt={product.name} />
          </S.ProductItemImage>
          <S.ProductItemInfo>
            <S.ProductItemTitle>{product.name}</S.ProductItemTitle>
            <S.ProductItemPrice>
              <S.ProductItemPriceOriginal>
                đ{product.price_before_discount?.toLocaleString()}
              </S.ProductItemPriceOriginal>
              <S.ProductItemPriceSale>
                đ{product.price?.toLocaleString()}
              </S.ProductItemPriceSale>
            </S.ProductItemPrice>
            <S.ProductItemMeta>
              <ProductRating rating={product.rating} />
              <S.ProductItemSold>
                <span>
                  {product.sold < 1000
                    ? product.sold
                    : `${product.sold / 1000}k`}
                </span>
                <span>Đã bán</span>
              </S.ProductItemSold>
            </S.ProductItemMeta>
          </S.ProductItemInfo>
        </S.ProductItem>
      </Link>
    </S.Product>
  )
}

ProductItem.propTypes = {
  product: PropTypes.object
}

export default ProductItem
