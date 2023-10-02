import React from 'react'
import FilterByTag from '../../molecules/FilterByTag/FilterByTag'
import Profile from '../../molecules/Profile/Profile'
import { useAppDispatch } from '../../../redux/store/store'
import { fetchPostsByTag } from '../../../redux/actions/thunks'
import { changePostInView } from '../../../redux/reducers/arrowNavigationSlice'
import Button from '../../atoms/Button/Button'
import { useAuth0 } from '@auth0/auth0-react';
import styles from './Header.module.css'

type THeader = {
    // eslint-disable-next-line no-unused-vars
    setFetchByTagLoading: (value: boolean) => void;
}
const Header = ({ setFetchByTagLoading }: THeader): JSX.Element => {
    const { user } = useAuth0()
    const { logout } = useAuth0()
    const dispatch = useAppDispatch()
    const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setFetchByTagLoading(true)
        dispatch(changePostInView(0))
        dispatch(fetchPostsByTag(event.target.value))
    }

    return (
        <div className={styles.headerContainer}>
            <FilterByTag setFetchByTagLoading={setFetchByTagLoading} label={'Filter By'} id={'filterByTag'} handleChange={handleChange} />
            <div className={styles.profile}>
                <Profile email={user?.email} order='firstName' text={user?.given_name} type={'h1'} image={`${user?.picture ? user.picture : 'https://img.freepik.com/premium-vector/man-avatar-profile-picture-vector-illustration_268834-538.jpg'}`} alt={'profile-image'} width={'70px'} height={'70px'} />
                <Button handleClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>Logout</Button>
            </div>
        </div>
    )
}

export default Header
