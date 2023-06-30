import React from "react";

const Products = ({ products }) => {
  console.log("products", products);

  return (
    <>
      <section class="text-gray-600 body-font">
        <div class="container px-5 py-24 mx-auto">
          <div class="flex flex-wrap -m-4 max-w-7.5xl mx-auto">
            {products?.map((product) => {
              console.log("prodddd", product);
              const {id,title,price,description,category,image}=product;
              return (
                <div class="lg:w-1/4 border-2 px-8 hover:border-t-4 md:w-1/2 p-4 w-full">
                  <a class="block relative h-48 rounded overflow-hidden">
                    <img
                      alt={title}
                      class="object-scale-down	object-center  w-full h-full block"
                      src={image}
                    />
                  </a>
                  <div class="mt-4">
                    <h3 class="text-gray-500 text-xs tracking-widest title-font uppercase mb-1">
                      {category}
                    </h3>
                    <h2 class="text-gray-900 title-font text-lg font-medium">
                      {title}
                    </h2>
                    <p class="mt-1">${price}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Products;
