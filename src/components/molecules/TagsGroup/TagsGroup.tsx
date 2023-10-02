import React from 'react'
import { ITag } from '../../../types/Tag'
import Tag from '../../atoms/Tag/Tag'

interface ITagsGroup extends ITag {
    tags: string[]
}
const TagsGroup = ({ tags, type }: ITagsGroup): JSX.Element => {
    return (
        <div id='tagsGroup' style={{ display: 'flex' }}>
            {
                tags.map((tag: string) => {
                    return (
                        <div key={tag}>
                            <Tag text={tag} type={type} />
                        </div>
                    )
                })
            }
        </div>
    )
}

export default TagsGroup
