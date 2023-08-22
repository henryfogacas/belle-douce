import Brownies from '../Brownies/Brownies'
import './Itens.css'

const Itens = () => {
    return (
        <div className='itens'>
            <div>
                <h1>Conheça o nosso cardápio</h1>
            </div>
            <div className='cards'>
                <Brownies link='https://api.whatsapp.com/send?phone=5551982690619&text=Eu quero um Brownie Clássico!!!' image='images/brownie-classico.png' browniename="Brownie Clássico" brownieprice="R$ 5,00" />

                <Brownies link='https://api.whatsapp.com/send?phone=5551982690619&text=Eu quero um Cake Brownie!!!' image='images/cake-brownie.png' browniename="Cake Brownie" brownieprice="R$ 60,00" />

                <Brownies link='https://api.whatsapp.com/send?phone=5551982690619&text=Eu quero um Brownie de coração decorado!!!' image='images/brownie-heart.png' browniename="Brownie de coração decorado" brownieprice="R$ 35,00" />

                <Brownies link='https://api.whatsapp.com/send?phone=5551982690619&text=Eu quero um Brownie de número decorado!!!' image='images/brownie-number.png' browniename="Letter Cake" brownieprice="*Valor de acordo com o pedido" />
            </div>

        </div>
    )
}

export default Itens