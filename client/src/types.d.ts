

declare type Children = {
    readonly children : React.ReactNode
}

declare type PageTransitionsData =  {
    navigateTo:     string,
    setNavigateTo:  (newHref:string) => void
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
    technologies:   Skill[]|[],
    _id:            string  
}

declare type Social = {
    name:string,
    href:string
}
declare type Service = {
    name: string,
    description: string,
    imgBuffer: null|Buffer,
    mimeType: null|string,
    technologies: Skill[]
}
declare type Info = {
    
    _id:                    string
    services:               Service[],
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