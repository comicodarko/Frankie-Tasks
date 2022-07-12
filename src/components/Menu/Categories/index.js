import { useContext } from "react";

import { GlobalContext } from '../../../Context';
import { baseUrl } from '../../../service/api';
import { CategoriesEmpty, CategoriesWrapper, MenuCategory } from "./styles";

export default function Categories({ handleChangeMenu }) {
const { categories, selectedMenu } = useContext(GlobalContext);

  return (
    <CategoriesWrapper className="animationLeft">
      {categories.length > 0 ?
        categories.map(category => {
          return (
            <MenuCategory 
              key={category._id}
              active={selectedMenu === category.label}
              onClick={() => handleChangeMenu(category.label)}
            >
              <img src={`${baseUrl}${category.iconPath}`} alt={category.label} />
              {category.label}
            </MenuCategory>
          )
        })
        : <CategoriesEmpty onClick={() => handleChangeMenu('Configurações')}>
            Sem Categorias
          </CategoriesEmpty>
      }
    </CategoriesWrapper>
  )
}