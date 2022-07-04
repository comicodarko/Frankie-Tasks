import { useContext } from "react";

import { GlobalContext } from '../../../Context';
import { baseUrl } from '../../../service/api';
import { CategoriesEmpty, CategoriesWrapper, MenuCategory } from "./styles";

export default function Categories() {
const { categories, selectedMenu, setSelectedMenu } = useContext(GlobalContext);

  return (
    <CategoriesWrapper className="animationLeft">
      {categories.length > 0 ?
        categories.map(category => {
          return (
            <MenuCategory 
              key={category._id}
              active={selectedMenu === category.label}
              onClick={() => setSelectedMenu(category.label)}
            >
              <img src={`${baseUrl}${category.iconPath}`} alt={category.label} />
              {category.label}
            </MenuCategory>
          )
        })
        : <CategoriesEmpty onClick={() => setSelectedMenu('Configurações')}>Sem Categorias</CategoriesEmpty>
      }
    </CategoriesWrapper>
  )
}