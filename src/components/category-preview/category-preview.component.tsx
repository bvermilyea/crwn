import { FC } from 'react'

import ProductCard from '../product-card/product-card.component'

import {
  CategoryPreviewContainer,
  Preview,
  Title,
} from './category-preview.styles'

import { CategoryItem } from '../../store/categories/categories.types'

type CategoryPreviewProps = {
  title: string
  products: CategoryItem[]
}

const CategoryPreview: FC<CategoryPreviewProps> = ({ title, products }) => {
  return (
    <CategoryPreviewContainer>
      <Title to={title}>{title.toUpperCase()}</Title>
      <Preview>
        {products
          .filter((_, idx) => idx < 4)
          .map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </Preview>
    </CategoryPreviewContainer>
  )
}

export default CategoryPreview
