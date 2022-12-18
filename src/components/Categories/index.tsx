import Link from "next/link";
import { categories } from "../../mocks/categories";
import * as S from "./styles";

const Categories = (): JSX.Element => {

  return (
    <S.Container>
      <S.Inner>
        <h1>Escolha por categoria</h1>
        <S.CategoriesContainer>
          <ul>
            {categories
              ? categories.map((category) => (
                  <li key={category.id}>
                    <Link href="#">
                      <S.CategoryIconBackground>
                        <S.CategoryIcon
                          src={category.icon}
                          width={28}
                          height={28}
                          alt="Icon"
                        />
                      </S.CategoryIconBackground>
                      <S.CategoryName>{category.name}</S.CategoryName>
                    </Link>
                  </li>
                ))
              : null}
          </ul>
        </S.CategoriesContainer>
      </S.Inner>
    </S.Container>
  );
};

export default Categories;
