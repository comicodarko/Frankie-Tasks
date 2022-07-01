import { useState, useEffect, useContext } from 'react';
import { MessageAltAdd } from '@styled-icons/boxicons-regular';

import NewCategory from './NewCategory';
import IconEdit from '../../assets/edit.png';
import IconDelete from '../../assets/delete.png';
import { Button } from '../Defaults';
import { ConfigCategory, ConfigWrapper } from './styles';
import { GlobalContext } from '../../Context';
import { baseUrl, deleteCategory, getCategoryIcons } from '../../service/api';

export default function Settings() {
  const [showNewCategory, setShowNewCategory] = useState(false);
  const [iconPaths, setIconPaths] = useState([]);
  const [editableCategory, setEditableCategory] = useState({});
  const { categories, setCategories } = useContext(GlobalContext);

  function handleDeleteCategory(id) {
    deleteCategory(id).then(success => {
      if(success) {
        let newCategories = [...categories]; 
        const index = categories.findIndex(category => category._id === id);
        newCategories.splice(index, 1);
        setCategories(newCategories);
      }
    });
  }

  useEffect(() => {
    document.addEventListener('keydown', event => {
      event.key === 'Escape' && setShowNewCategory(false);
    });
    getCategoryIcons().then(result => setIconPaths(result));
  }, []);

  return (
    <ConfigWrapper className='animationShow'>
      <ConfigCategory>
        <header>
          {showNewCategory 
            ? <NewCategory setShowNewCategory={setShowNewCategory} iconPaths={iconPaths} />
            : <div className="title animationLeft">
                <h3>Categorias</h3>
                <Button onClick={() => setShowNewCategory(true)}>
                  <MessageAltAdd size={30} />
                </Button>
              </div>
          }
        </header>
        <div className='content'>
          {categories.map(category =>
            <span key={category._id} className="animationUp">
              <img src={baseUrl + category.iconPath} alt={category.label}/>
              <p>{category.label}</p>
              <button onClick={() => setEditableCategory(category)}>
                <img src={IconEdit} alt='edit' />
              </button>
              <button onClick={() => handleDeleteCategory(category._id)}>
                <img src={IconDelete} alt="delete" />
              </button>
            </span>
          )}
        </div>
      </ConfigCategory>
    </ConfigWrapper>
  )
}