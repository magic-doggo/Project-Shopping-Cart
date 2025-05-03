import { MemoryRouter, Outlet, Route, Routes } from "react-router-dom"

// https://stackoverflow.com/questions/70507413/react-router-useoutletcontext-testing
const RenderRouteWithOutletContext = ({ context, children}) => {
    return (
        <MemoryRouter>
            <Routes>
                <Route path="/" element={<Outlet context={context}/>}>
                    <Route index element={children}/>
                </Route>
            </Routes>
        </MemoryRouter>
    )
}

export default RenderRouteWithOutletContext;