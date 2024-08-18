import Link from 'next/link';

import classes from './page.module.css';
import MealsGrid from '../../Componants/meals/mealsGrid';
import { title } from 'process';
import { create } from 'domain';

export default function MealsPage() {
  return (
    <div>
      <header className={classes.header}>
        <h1>
          Delicious meals, created
          <span className={classes.highlight}> by you</span>
        </h1>
        <p>
          Choose your favorite recipe and cook it yourself. It is easy and fun!
        </p>
        <p className={classes.cta}>
          <Link href="/meals/share">
            Share Your Favorite Recipe
          </Link>
        </p>
      </header>
      <main className={classes.main}>
      <MealsGrid meals={[
        {
          id: "1",
          title: "Sweet and Sour Tofu",
          slug: "sweet-and-sour-tofu",
          image: "https://images.immediate.co.uk/production/volatile/sites/30/2022/03/Sweet-and-Sour-Tofu-7b9db79.jpg",
          summary: "A delicious and tangy tofu dish that is both sweet and sour, perfect for a quick and healthy dinner.",
          creator: "Chef Anna"
        },
        {
          id: "2",
          title: "Spicy Paneer Wrap",
          slug: "spicy-paneer-wrap",
          image: "https://static.toiimg.com/thumb/imgsize-1425639,msid-76942221,width-600,height-335,resizemode-75/76942221.jpg",
          summary: "A flavorful wrap filled with spicy paneer, fresh veggies, and a zesty sauce, ideal for lunch or a light dinner.",
          creator: "Chef Rahul"
        },
        {
          id: "3",
          title: "Classic Margherita Pizza",
          slug: "classic-margherita-pizza",
          image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGzikPXMspg8AgHUXZeAOKVwXvPgGCgci-bg&s",
          summary: "A traditional Italian pizza topped with fresh tomatoes, mozzarella, and basil leaves.",
          creator: "Chef Giovanni"
        },
        {
          id: "4",
          title: "Garlic Butter Shrimp",
          slug: "garlic-butter-shrimp",
          image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvPp9v2U-y-S-SoKDwMf5YKPgwjDL3m9_qgg&s",
          summary: "Succulent shrimp cooked in a rich garlic butter sauce, perfect as an appetizer or main course.",
          creator: "Chef Maria"
        },
        {
          id: "5",
          title: "Vegan Buddha Bowl",
          slug: "vegan-buddha-bowl",
          image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0SV44FqoyqI_xbNUu4UyclqIm7ZLodCFP7g&s",
          summary: "A nutritious bowl packed with quinoa, roasted",      
          creator: "Chef Maria"
        }]} />
      </main>
    </div>
  );
}