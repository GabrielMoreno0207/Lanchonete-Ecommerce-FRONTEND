import React from 'react';

const Cardapio = () => {
  return (
    <div className="py-6 max-w-[1200px] mx-auto" id='projetos'>
      <div className="mx-auto px-4 md:px-8">
      <div className="flex flex-col items-center justify-center mb-4">
      <h2 className="text-2xl lg:text-3xl text-zinc-700  ">
      Cardápio
    </h2>
    <br />
    <div className="flex flex-row gap-4 mb-4">
   
    <h2 className="text-2xl lg:text-3xl text-yellow-300 hover:text-zinc-700 cursor-pointer">
      Todos
    </h2>
    <h2 className="text-2xl lg:text-3xl text-yellow-300 hover:text-zinc-700 cursor-pointer">
      Lanches
    </h2>
    <h2 className="text-2xl lg:text-3xl text-yellow-300 hover:text-zinc-700 cursor-pointer">
      Bebidas
    </h2>
    </div>

</div>

        <div className="mb-8">
          
       
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          <div className="bg-gray-800 p-4 rounded-lg flex flex-col items-center">
              <img src="./src/Frontend/assets/coca.png" alt="Imagem da Pizza" className="mb-2 w-24 h-24 object-cover rounded-full" />
              <h4 className="text-white text-lg font-semibold mb-2">Coca lata 350ml</h4>
              
              <p className="text-yellow-400">R$ 5,00</p>
              <button className="bg-yellow-500 text-gray-800 px-4 py-2 mt-2 rounded-full hover:bg-yellow-600 hover:text-gray-900">Adicionar ao Pedido</button>
            </div>

           
            <div className="bg-gray-800 p-4 rounded-lg flex flex-col items-center">
              <img src="./src/Frontend/assets/agua.png" alt="Imagem da Pizza" className="mb-2 w-24 h-24 object-cover rounded-full" />
              <h4 className="text-white text-lg font-semibold mb-2">Água mineral 500ml</h4>
             
              <p className="text-yellow-400">R$ 3,00</p>
              <button className="bg-yellow-500 text-gray-800 px-4 py-2 mt-2 rounded-full hover:bg-yellow-600 hover:text-gray-900">Adicionar ao Pedido</button>
            </div>


          
            <div className="bg-gray-800 p-4 rounded-lg flex flex-col items-center">
              <img src="./src/Frontend/assets/hot.png" alt="Imagem da Pizza" className="mb-2 w-24 h-24 object-cover rounded-full" />
              <h4 className="text-white text-lg font-semibold mb-2">Hotdog</h4>
              <p className="text-gray-400 text-center">O Hot Dog Simples é preparado com uma salsicha grelhada, mostarda amarela, ketchup e cebolas picadas, servidos em um pão macio.</p>
              <p className="text-yellow-400">R$ 20,00</p>
              <button className="bg-yellow-500 text-gray-800 px-4 py-2 mt-2 rounded-full hover:bg-yellow-600 hover:text-gray-900">Adicionar ao Pedido</button>
            </div>
          </div>
        </div>
 
         <div className="mb-8">
          
       
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          <div className="bg-gray-800 p-4 rounded-lg flex flex-col items-center">
              <img src="./src/Frontend/assets/hot.png" alt="Imagem da Pizza" className="mb-2 w-24 h-24 object-cover rounded-full" />
              <h4 className="text-white text-lg font-semibold mb-2">Hotdog</h4>
              <p className="text-gray-400 text-center">O Hot Dog Simples é preparado com uma salsicha grelhada, mostarda amarela, ketchup e cebolas picadas, servidos em um pão macio.</p>
              <p className="text-yellow-400">R$ 20,00</p>
              <button className="bg-yellow-500 text-gray-800 px-4 py-2 mt-2 rounded-full hover:bg-yellow-600 hover:text-gray-900">Adicionar ao Pedido</button>
            </div>

            
            <div className="bg-gray-800 p-4 rounded-lg flex flex-col items-center">
              <img src="./src/Frontend/assets/hot.png" alt="Imagem da Pizza" className="mb-2 w-24 h-24 object-cover rounded-full" />
              <h4 className="text-white text-lg font-semibold mb-2">Hotdog</h4>
              <p className="text-gray-400 text-center">O Hot Dog Simples é preparado com uma salsicha grelhada, mostarda amarela, ketchup e cebolas picadas, servidos em um pão macio.</p>
              <p className="text-yellow-400">R$ 20,00</p>
              <button className="bg-yellow-500 text-gray-800 px-4 py-2 mt-2 rounded-full hover:bg-yellow-600 hover:text-gray-900">Adicionar ao Pedido</button>
            </div>

            
            <div className="bg-gray-800 p-4 rounded-lg flex flex-col items-center">
              <img src="./src/Frontend/assets/hot.png" alt="Imagem da Pizza" className="mb-2 w-24 h-24 object-cover rounded-full" />
              <h4 className="text-white text-lg font-semibold mb-2">Hotdog</h4>
              <p className="text-gray-400 text-center">O Hot Dog Simples é preparado com uma salsicha grelhada, mostarda amarela, ketchup e cebolas picadas, servidos em um pão macio.</p>
              <p className="text-yellow-400">R$ 20,00</p>
              <button className="bg-yellow-500 text-gray-800 px-4 py-2 mt-2 rounded-full hover:bg-yellow-600 hover:text-gray-900">Adicionar ao Pedido</button>
            </div>
          </div>
        </div>
 
         <div className="mb-8">
          
       
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          <div className="bg-gray-800 p-4 rounded-lg flex flex-col items-center">
              <img src="./src/Frontend/assets/hot.png" alt="Imagem da Pizza" className="mb-2 w-24 h-24 object-cover rounded-full" />
              <h4 className="text-white text-lg font-semibold mb-2">Hotdog</h4>
              <p className="text-gray-400 text-center">O Hot Dog Simples é preparado com uma salsicha grelhada, mostarda amarela, ketchup e cebolas picadas, servidos em um pão macio.</p>
              <p className="text-yellow-400">R$ 20,00</p>
              <button className="bg-yellow-500 text-gray-800 px-4 py-2 mt-2 rounded-full hover:bg-yellow-600 hover:text-gray-900">Adicionar ao Pedido</button>
            </div>

           
            <div className="bg-gray-800 p-4 rounded-lg flex flex-col items-center">
              <img src="./src/Frontend/assets/hot.png" alt="Imagem da Pizza" className="mb-2 w-24 h-24 object-cover rounded-full" />
              <h4 className="text-white text-lg font-semibold mb-2">Hotdog</h4>
              <p className="text-gray-400 text-center">O Hot Dog Simples é preparado com uma salsicha grelhada, mostarda amarela, ketchup e cebolas picadas, servidos em um pão macio.</p>
              <p className="text-yellow-400">R$ 20,00</p>
              <button className="bg-yellow-500 text-gray-800 px-4 py-2 mt-2 rounded-full hover:bg-yellow-600 hover:text-gray-900">Adicionar ao Pedido</button>
            </div>

           
            <div className="bg-gray-800 p-4 rounded-lg flex flex-col items-center">
              <img src="./src/Frontend/assets/hot.png" alt="Imagem da Pizza" className="mb-2 w-24 h-24 object-cover rounded-full" />
              <h4 className="text-white text-lg font-semibold mb-2">Hotdog</h4>
              <p className="text-gray-400 text-center">O Hot Dog Simples é preparado com uma salsicha grelhada, mostarda amarela, ketchup e cebolas picadas, servidos em um pão macio.</p>
              <p className="text-yellow-400">R$ 20,00</p>
              <button className="bg-yellow-500 text-gray-800 px-4 py-2 mt-2 rounded-full hover:bg-yellow-600 hover:text-gray-900">Adicionar ao Pedido</button>
            </div>
          </div>
        </div>
 
         <div className="mb-8">
          
       
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          <div className="bg-gray-800 p-4 rounded-lg flex flex-col items-center">
              <img src="./src/Frontend/assets/hot.png" alt="Imagem da Pizza" className="mb-2 w-24 h-24 object-cover rounded-full" />
              <h4 className="text-white text-lg font-semibold mb-2">Hotdog</h4>
              <p className="text-gray-400 text-center">O Hot Dog Simples é preparado com uma salsicha grelhada, mostarda amarela, ketchup e cebolas picadas, servidos em um pão macio.</p>
              <p className="text-yellow-400">R$ 20,00</p>
              <button className="bg-yellow-500 text-gray-800 px-4 py-2 mt-2 rounded-full hover:bg-yellow-600 hover:text-gray-900">Adicionar ao Pedido</button>
            </div>

            
            <div className="bg-gray-800 p-4 rounded-lg flex flex-col items-center">
              <img src="./src/Frontend/assets/hot.png" alt="Imagem da Pizza" className="mb-2 w-24 h-24 object-cover rounded-full" />
              <h4 className="text-white text-lg font-semibold mb-2">Hotdog</h4>
              <p className="text-gray-400 text-center">O Hot Dog Simples é preparado com uma salsicha grelhada, mostarda amarela, ketchup e cebolas picadas, servidos em um pão macio.</p>
              <p className="text-yellow-400">R$ 20,00</p>
              <button className="bg-yellow-500 text-gray-800 px-4 py-2 mt-2 rounded-full hover:bg-yellow-600 hover:text-gray-900">Adicionar ao Pedido</button>
            </div>

        
            <div className="bg-gray-800 p-4 rounded-lg flex flex-col items-center">
              <img src="./src/Frontend/assets/hot.png" alt="Imagem da Pizza" className="mb-2 w-24 h-24 object-cover rounded-full" />
              <h4 className="text-white text-lg font-semibold mb-2">Hotdog</h4>
              <p className="text-gray-400 text-center">O Hot Dog Simples é preparado com uma salsicha grelhada, mostarda amarela, ketchup e cebolas picadas, servidos em um pão macio.</p>
              <p className="text-yellow-400">R$ 20,00</p>
              <button className="bg-yellow-500 text-gray-800 px-4 py-2 mt-2 rounded-full hover:bg-yellow-600 hover:text-gray-900">Adicionar ao Pedido</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cardapio;
