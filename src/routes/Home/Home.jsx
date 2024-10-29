import banner from '../../assets/Banner.jpg'
import DC from '../../assets/DC.jpg'
import Marvel from '../../assets/Marvel.jpg'

export default function Home() {
  return (
    <>
        <div>
            <img src={banner} alt="Banner"/>
            <section className='flex m-10 mb-36'>
                <img src={Marvel} alt="Marvel" className='rounded-full max-w-xl max-h-xl'/>
                <div className='bg-pink-300 rounded-xl p-5 max-w-2xl m-10'>
                    <h1 className='text-5xl text-center mb-7 font-bold text-pink-950'>Marvel</h1>
                    <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem labore molestias iusto odio harum, praesentium soluta aliquam corrupti commodi, enim officia itaque dolorem rerum ad voluptatibus maxime suscipit non alias?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis, id, laboriosam quae libero inventore nisi vel ut consequatur, deleniti illum non? Est in alias pariatur necessitatibus molestiae mollitia tempora ipsum?Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur doloremque accusantium provident, voluptatibus sit recusandae, nihil non fugit alias, asperiores sapiente iure veritatis blanditiis natus sequi. Temporibus nemo dolorum odit. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum quibusdam facere suscipit fuga incidunt delectus quo praesentium in, ut culpa, eaque vero repellendus nulla dolores neque, officia quisquam aperiam ex. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi cum eos numquam, tempora dolorum maiores fugiat quidem totam expedita iste eum aliquam saepe ut harum quaerat ipsum ratione id corporis.</h2>
                </div>
            </section>
            <section className='flex m-10 mb-36'>
                <div className='bg-pink-300 rounded-xl p-5 max-w-2xl min-h-96 m-10'>
                    <h1 className='text-5xl text-center mb-7 font-bold text-pink-950'>DC</h1>
                    <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem labore molestias iusto odio harum, praesentium soluta aliquam corrupti commodi, enim officia itaque dolorem rerum ad voluptatibus maxime suscipit non alias?Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error, aperiam laudantium. Expedita optio asperiores a earum quisquam, quidem iusto deserunt accusamus quibusdam vitae minima voluptates provident, dignissimos, nulla vero sit? Lorem ipsum dolor sit amet consectetur adipisicing elit. Non eaque repudiandae similique saepe! Nisi amet ratione repudiandae quia placeat mollitia saepe reprehenderit corrupti cupiditate modi laborum, quidem obcaecati suscipit dolores?</h2>
                </div>
                <img src={DC} alt="DC" className='rounded-full max-w-xl max-h-xl'/>
            </section>
        </div>
    </>
  )
}
