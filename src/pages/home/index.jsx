
import HomeHeader from './components/Header';
import HomeSetting from './components/Setting';
import './home.css';
import Product from './components/Product';
import { commoditiesActions } from '../../action';
import React, { useEffect, useDispatch } from 'react';
import { useSelector } from 'react-redux';
import { userSelectors } from '../../store/user/selector';

const Home = () => {

    const user = useSelector(userSelectors.user)
    const token = useSelector(userSelectors.token)
    let { error, loading, commodities } = useSelector(state => state.getCommoditiesList)
    const dispatch = useDispatch()
  
    useEffect(() => {
      dispatch(commoditiesActions.getCommoditiesList())
    }, [])

    useEffect(() => {
        console.log(user);
    }, [user])

    useEffect(() => {
        console.log(token);
    }, [token])
    return (
        <>
        { error && <div>{ error }</div> }
        { loading && <div className="loading">Loading...</div> }
        { commodities && <>
            <HomeHeader/>
            <div class="px-5 pt-5 home">
                <HomeSetting/>
                <div className='items'>
                    <div className='row'>
                        {commodities?.map((product, index) => {
                            <Product key={index} product={product}/>
                        })}
                    </div>
                </div>
            </div>
            </>
        }
        </>
    )
}

export default Home;