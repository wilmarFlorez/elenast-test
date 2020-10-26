import {Dispatch, SetStateAction} from 'react'

export interface IAppContext {
  appLoading: boolean
  setAppLoading: Dispatch<SetStateAction<boolean>>;
}
