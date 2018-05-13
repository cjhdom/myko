import React from 'react'

const BodyFooter = ({setIndex, index}) => {
    return (
        <ul className="list_number">
            <li><a className={`prev${index > 1 ? ' on' : ''}`} onClick={() => setIndex(index - 1)}
                   ng-click="goPage(vars.pageNo-1)">이전</a></li>
            {/*  ngRepeat: pageNo in vars.pageNoList  */}
            <li ng-repeat="pageNo in vars.pageNoList" ng-className="pageNo===vars.pageNo ? 'on' : ''"
                className="ng-scope on">
                <a ng-click="goPage(pageNo)" className="ng-binding">1</a>
            </li>
            {/*  end ngRepeat: pageNo in vars.pageNoList  */}
            <li><a className="next" ng-className="vars.pageNo<vars.totalPages ? 'on' : ''"
                   ng-click="goPage(vars.pageNo+1)">다음</a></li>
        </ul>
    )
}

export default BodyFooter