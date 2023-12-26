import {  ProjectEditor } from "../components/ProjectEditor/ProjectEditor";
import AuthenticationWindow from "../components/ProjectEditor/AuthenticationWindow";
const Admin = () => {
    return (
        <AuthenticationWindow>
            <ProjectEditor />
        </AuthenticationWindow> 
    )
}
export default Admin;