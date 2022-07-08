import { ConfigWrapper } from './styles';
import CategoriesStings from './CategoriesSettings';
import LetterboxdSettings from './LetterboxdSettings';

export default function Settings() {

  return (
    <ConfigWrapper className='animationShow'>
      <CategoriesStings />
      
      <LetterboxdSettings />

    </ConfigWrapper>
  )
}