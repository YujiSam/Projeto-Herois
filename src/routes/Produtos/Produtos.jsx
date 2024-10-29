import Produto from '../../assets/Logo.jpg'

export default function Produtos() {
  return (
    <>
        <div className='flex justify-center mt-10 mb-10'>
            <section className='bg-pink-200 rounded-xl p-5 pb-16 max-w-sm m-5 flex flex-col justify-center'>
                <h1 className='text-red-950 text-2xl uppercase text-center font-bold'>Produto 1</h1>
                <img src={Produto} alt="Produto" className='rounded-2xl max-h-72 m-5'/>
                <h2 className='text-red-950 m-5'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae, soluta optio quo esse architecto, debitis quidem nisi iusto temporibus expedita ipsa laborum adipisci laboriosam, amet maiores perferendis eaque nostrum repellendus?</h2>
                <button className='bg-red-950 text-white text-xl uppercase p-5 rounded-full ml-8 mr-8'>Comprar</button>
            </section>
            <section className='bg-pink-200 rounded-xl p-5 pb-16 max-w-sm m-5 flex flex-col justify-center'>
                <h1 className='text-red-950 text-2xl uppercase text-center font-bold'>Produto 2</h1>
                <img src={Produto} alt="Produto" className='rounded-2xl max-h-72 m-5'/>
                <h2 className='text-red-950 m-5'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae, soluta optio quo esse architecto, debitis quidem nisi iusto temporibus expedita ipsa laborum adipisci laboriosam, amet maiores perferendis eaque nostrum repellendus?</h2>
                <button className='bg-red-950 text-white text-xl uppercase p-5 rounded-full ml-8 mr-8'>Comprar</button>
            </section>
            <section className='bg-pink-200 rounded-xl p-5 pb-16 max-w-sm m-5 flex flex-col justify-center'>
                <h1 className='text-red-950 text-2xl uppercase text-center font-bold'>Produto 3</h1>
                <img src={Produto} alt="Produto" className='rounded-2xl max-h-72 m-5'/>
                <h2 className='text-red-950 m-5'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae, soluta optio quo esse architecto, debitis quidem nisi iusto temporibus expedita ipsa laborum adipisci laboriosam, amet maiores perferendis eaque nostrum repellendus?</h2>
                <button className='bg-red-950 text-white text-xl uppercase p-5 rounded-full ml-8 mr-8'>Comprar</button>
            </section>
        </div>
    </>
  )
}
