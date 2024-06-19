

declare type Children = {
    readonly children : React.ReactNode
}

declare type PageTransitionsData =  {
    navigateTo:     string,
    setNavigateTo:  (newHref:string) => void,
    isNavigating:   boolean,
    setIsNavigating: (newState:boolean) => void
} | undefined

declare type Skill = {
    name:       string,
    imgBuffer:  string|null,
    mimeType:   string|null,
    _id:        string  

}

declare type Project = {
    name:           string,
    description:    string,
    imgBuffer:      string|null,
    githubRepoURL:  string,
    deployURL:      string,
    date:           string,
    client:         string,
    mimeType:       string|null,
    subDescription: string,
    order:          number,
    _id:            string  
}

declare type Social = {
    name:string,
    href:string
}

declare type Info = {
    
    _id:                    string,
    socials:                Social[],
    contacts: {
        email:              string,
        phone:              string,
        _id:                string
    },
    isSelected:             boolean,
    about:                  string,
    resume: {
        resumeBuffer:       null|Buffer,
        mimeType:           null |string,
        _id:                string
    },
    personalImage: {
        imageBuffer:        null |Buffer,
        mimeType:           null |string,
        _id:                string
    }
    
}
type PopUpData = {
    isPopUpOpen: boolean,
    popUpType: "alert" | "confirm",
    resolveFunc?:(()=>void)|null,
    message:string|null,
    title:string
}
declare type PopUpProviderData = {
    setPopUpData:(newState:PopUp)=>void,
    popUpData:PopUpData
}|undefined

