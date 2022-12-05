import { getEntireRoomList } from '@/services/modules/entire'
import * as actionTypes from './constants'

export const changeCurrentPageAction = (currentPage) => ({
  type: actionTypes.ChANGE_CURRENT_PAGE,
  currentPage
})

export const changeRoomListAction = (roomList) => ({
  type: actionTypes.ChANGE_ROOM_LIST,
  roomList
})

export const changeTotalCountAction = (totalCount) => ({
  type: actionTypes.ChANGE_TOTAL_COUNT,
  totalCount
})

export const changeIsLoadingAction = (isLoading) => ({
  type: actionTypes.ChANGE_IS_LOADING,
  isLoading
})



export const fetchRoomListAction = () => {
  //返回新的函数
  return async (dispatch, getState) => {

    const currentPage = getState().entire.currentPage


    dispatch(changeIsLoadingAction(true))
    const res = await getEntireRoomList(currentPage * 20)
    dispatch(changeIsLoadingAction(false))


    const roomList = res.list
    const totalCount = res.totalCount
    dispatch(changeRoomListAction(roomList))
    dispatch(changeTotalCountAction(totalCount))
  }
}

