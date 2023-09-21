import React from 'react';

import allProductsPhoto from '../../images/home/all.png';
import fashionProductsPhoto from '../../images/home/fashion.png';
import electronicProductsPhoto from '../../images/home/electronics.png';

import HomeCategory from './HomeCategory';

import { PRODUCT_END_POINT, buildProductUrl } from '../../utils/buildProductUrl';


type Prop = {}


const HomeCategories = (_: Prop): React.ReactElement => {
  return (
    <section aria-labelledby="category-heading" className="border-t border-gray-200 bg-white">
      <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-28 lg:px-8">
        <div className="sm:flex sm:items-baseline sm:justify-between">
          <h2 id="category-heading" className="text-2xl font-bold tracking-tight text-gray-900">Shop by Category</h2>
        </div>
        <div className="mt-8 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:grid-rows-2 sm:gap-x-6 lg:gap-8">
          <div className="group aspect-h-1 aspect-w-2 overflow-hidden rounded-lg sm:aspect-h-1 sm:aspect-w-1 sm:row-span-2 sm:relative sm:h-full">
            <img src={allProductsPhoto} className="object-cover object-center group-hover:opacity-75 transition:opacity duration-1500 sm:absolute sm:inset-0 sm:h-full sm:w-full" />
            <div aria-hidden="true" className="bg-gradient-to-b from-transparent to-black opacity-50 sm:absolute sm:inset-0"></div>
            <div className="flex items-end p-6 sm:absolute sm:inset-0">
              <HomeCategory label='All products' url={PRODUCT_END_POINT} />
            </div>
          </div>
          <div className="group aspect-h-1 aspect-w-2 overflow-hidden rounded-lg sm:aspect-none sm:relative sm:h-full">
            <img src={fashionProductsPhoto} className="object-cover object-center group-hover:opacity-75 transition:opacity duration-1500 sm:absolute sm:inset-0 sm:h-full sm:w-full" />
            <div aria-hidden="true" className="bg-gradient-to-b from-transparent to-black opacity-50 sm:absolute sm:inset-0"></div>
            <div className="flex items-end p-6 sm:absolute sm:inset-0">
              <HomeCategory label='Fashion' url={buildProductUrl('clothing')} />
            </div>
          </div>
          <div className="group aspect-h-1 aspect-w-2 overflow-hidden rounded-lg sm:aspect-none sm:relative sm:h-full">
            <img src={electronicProductsPhoto} className="object-cover object-center group-hover:opacity-75 transition:opacity duration-1500 sm:absolute sm:inset-0 sm:h-full sm:w-full" />
            <div aria-hidden="true" className="bg-gradient-to-b from-transparent to-black opacity-50 sm:absolute sm:inset-0"></div>
            <div className="flex items-end p-6 sm:absolute sm:inset-0">
              <HomeCategory label='Electronics' url={buildProductUrl('electronics')} />
            </div>
          </div>
        </div>
      </div>
    </section >
  )
}


export default HomeCategories;
