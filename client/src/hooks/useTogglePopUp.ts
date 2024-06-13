import { usePopUpProvider } from "@/contexts/PopUpContext"

export const useTogglePopUp = () => {
    const popUpProviderData:PopUpProviderData = usePopUpProvider()
    
    return (popUpData:PopUpData) => {
        popUpProviderData?.setPopUpData(popUpData)
    }
}