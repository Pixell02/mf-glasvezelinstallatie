import React from 'react'
import { Link } from 'react-router-dom'
import ItemContainer from '../../../components/ItemContainer'
import Title from '../../../components/Title'
import { costFormTypes } from './costFormTypes'
import ItemBlock from './ItemBlock'
export default function CreateContent() {
  return (
    <div className='d-flex flex-column'>
      <Title>
        Utwórz
      </Title>
      <ItemContainer>
        {costFormTypes.map((item) => (
          <div className='item-content-container'>
          <Link to={`/create/${item.name}`} className="item-link">
          <ItemBlock>
            {item.name}
          </ItemBlock>
          </Link>
          </div>
        ))}
      </ItemContainer>
    </div>
  )
}
