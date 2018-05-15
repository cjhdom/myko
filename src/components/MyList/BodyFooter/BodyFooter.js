import React from 'react'

const BodyFooter = ({setIndex, index, lastIndex, pageNoList}) => {
    return (
        <ul className="list_number">
            <li><a className={`prev${index > 1 ? ' on' : ''}`} onClick={() => setIndex(index - 1)}>이전</a></li>
            {pageNoList.map(i => {
                const isCurrentPage = index === i
                return (
                    <li className={isCurrentPage ? 'on' : ''}>
                        {isCurrentPage && <a>{i}</a>}
                        {!isCurrentPage && <a onClick={() => setIndex(i)}>{i}</a>}
                    </li>
                )
            })}
            <li><a className={`next${index < lastIndex ? 'on' : ''}`}
                   onClick={() => setIndex(index + 1)}>다음</a></li>
        </ul>
    )
}

export default BodyFooter