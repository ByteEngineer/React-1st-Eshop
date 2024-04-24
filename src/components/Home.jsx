import Card from './Card1'
import Nav from './Nav'

function Home() {
    return (
        <>
            <Nav />
            <img className='img' src="/images/ecom.jpg" alt="" />
            <Card name="oven" price="$40"  image="/images/bag.jpg" />
            <div className='flex'>
                <Card name="Bag" price="$30"  image="/images/oven.jpg" />
                <Card name="chair" price="$20"  image="/images/oven.jpg" />
                <Card name="oven" price="$10"  image="/images/oven.jpg" />
            </div>
        </>
    )
}

export default Home