

declare type Children = {
    readonly children : React.ReactNode
}

declare type PageTransitionsData =  {
    navigateTo:string,
    setNavigateTo:(newHref:string) => void
} | undefined

declare type Skill = {

}

declare type Project = {
    name:String,
    description:String,
    imgBuffer:String,
    github:String,
    live:String,
    tech:String,
}

declare type RemoteDataProvider = {
    skills:[]|any[],

}


