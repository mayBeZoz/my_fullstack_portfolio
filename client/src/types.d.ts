

declare type Children = {
    readonly children : React.ReactNode
}

declare type PageTransitionsData =  {
    togglePageInTransition:boolean|null,
    togglePageOutTransition:boolean|null,
    setTogglePageInTransition:(newState:boolean)=>void,
    setTogglePageOutTransition:(newState:boolean)=>void
} | undefined



