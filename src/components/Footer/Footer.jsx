import facebook from '../../assets/facebook.png'
import instagram from '../../assets/instagram.png'
import twitterx from '../../assets/twitterx.png'

export default function Footer() {
  return (
    <>
        <footer className= 'bg-pink-900'>
            <div className='flex justify-center gap-8 pt-16'>
                <img src={facebook} alt="Facebook"/>
                <img src={instagram} alt="Instagram"/>
                <img src={twitterx} alt="Twitter"/>
            </div>
            <h1 className='text-center text-white pt-5 pb-2'>@2024-direitos reservados</h1>
        </footer>
    </>
  )
}
