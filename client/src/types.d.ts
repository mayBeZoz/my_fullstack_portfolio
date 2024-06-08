

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

declare type RemoteDataProvider = {
    skills:     Skill[]|null,
    projects:   Project[]|null
}



declare type UseGetDataOptions = {
    page?:       number,
    limit?:      number,
    queryKey:   any[],
    queryFn:    (param?:any) => Promise<any>

}

declare type UseGetDataResult = {
    setCurrPage:    (newPage:number) => void,
    setCurrLimit:   (newLimit:number) => void,
    response:       {status_code:number,data:any,message:string},
    currPage:       number,
    currLimit:      number,
    isLoading:      boolean,
    isSuccess:      boolean,
    refetch:        () => void
}