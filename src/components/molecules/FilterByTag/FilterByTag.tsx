import React, { useEffect } from 'react'
import ISelect from '../../../types/Select'
import Select from '../../atoms/Select/Select'
import { RootState, useAppDispatch } from '../../../redux/store/store'
import { fetchPosts, fetchTags } from '../../../redux/actions/thunks'
import { useSelector } from 'react-redux'
import Button from '../../atoms/Button/Button'
import { changePostInView } from '../../../redux/reducers/arrowNavigationSlice'

interface IFilterByTag extends ISelect {
    label: string
    // eslint-disable-next-line no-unused-vars
    setFetchByTagLoading: (value: boolean) => void;
}

const FilterByTag = ({ setFetchByTagLoading, label, id, handleChange }: IFilterByTag): JSX.Element => {
    const tags = useSelector((state: RootState) => state.tags.tags)
    const isLoading = useSelector((state: RootState) => state.tags.loading)
    const error = useSelector((state: RootState) => state.tags.error)

    const handleShowAllPosts = () => {
        dispatch(changePostInView(0))
        setFetchByTagLoading(false)
        dispatch(fetchPosts('clean'))
        dispatch(fetchPosts(0))
    }
    const dispatch = useAppDispatch()
    useEffect(() => {
        dispatch(fetchTags())
    }, []);

    if (isLoading) {

        return <div>Loading...</div>
    }

    if (error) {
        return <div>{error}</div>
    }

    return (
        <div>
            <label htmlFor={id}>{label}</label>
            <Select id={id} options={tags} handleChange={handleChange} />
            <Button handleClick={handleShowAllPosts}>Show all posts</Button>
        </div>
    )
}

export default FilterByTag
