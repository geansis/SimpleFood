import Banner from '@/components/banners/banner';
import PromotionSliders from '@/components/promotions/promotions';
import Categories from '@/components/categories/categories';
import { Element } from 'react-scroll';
import FilterBar from './filter-bar';
import ProductGridHome from '@/components/products/grids/home';
import type { HomePageProps } from '@/types';
import { useState } from 'react';

export default function ClassicLayout({ variables }: HomePageProps) {

  const [cnpj,setCNPJ] = useState("");

  const te = () => {
    fetch("https://murmuring-bayou-52489.herokuapp.com/api/v1/search-cnpj-api?cnpj=09097944000101")
      .then((res) => { return res.json() })
      .then((res) => { printApi(res.response) });
  
      // console.table(result);
    return "";
  }
  
  const printApi = (res:any) =>{
    setCNPJ(res.cnpj);
    console.log(`Imprimiu aqui:`,res.cnpj);
  }

  const teste = () => {
    // setTextTeste("Teste >>>>>>>>>>>>>>>>>>>>>>>>>>>>") 
    console.table("Teste >>>>>>>>>>>>>>>>>>>>>>>>>>>>");
    return cnpj;
  };

  return (
    <>
      {te()}
      <Banner layout="classic" variables={variables.types} />
      {/* <PromotionSliders variables={variables.types} /> */}
      <div  style={{backgroundColor:"gray", paddingTop:"30%",}}>
        <h1>CNPJ EMPRESA = {cnpj}</h1>
        {/* <h1>{te()}</h1> */}
        </div>
      <FilterBar variables={variables.categories} />
      <Element
        name="grid"
        className="flex border-t border-solid border-border-200 border-opacity-70"
      >
        {/* <Categories layout="classic" variables={variables.categories} /> */}
        <ProductGridHome
          className="px-4 pb-8 lg:p-8"
          variables={variables.products}
        />
      </Element>
    </>
  );
}