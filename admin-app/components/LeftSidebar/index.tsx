import { Sidebar } from "flowbite-react";
import { HiChartPie, HiUser, HiMail, HiMenu } from "react-icons/hi";

export default function LeftSidebar() {
    return (
        <Sidebar aria-label="Sidebar with multi-level dropdown example">
            <Sidebar.Items>
                <Sidebar.ItemGroup>
                    <Sidebar.Item href="/dashboard" icon={HiChartPie}>
                        Dashboard
                    </Sidebar.Item>
                    <Sidebar.Collapse icon={HiUser} label="Accessibility">
                        <Sidebar.Item href="/users">Users</Sidebar.Item>
                        <Sidebar.Item href="#">Roles</Sidebar.Item>
                        <Sidebar.Item href="#">Permissions</Sidebar.Item>
                    </Sidebar.Collapse>
                    <Sidebar.Collapse icon={HiMail} label="Messages">
                        <Sidebar.Item href="#">InBox</Sidebar.Item>
                        <Sidebar.Item href="#">Notifications</Sidebar.Item>
                    </Sidebar.Collapse>
                    <Sidebar.Item href="#" icon={HiMenu}>
                        Settings
                    </Sidebar.Item>
                </Sidebar.ItemGroup>
            </Sidebar.Items>
        </Sidebar>
    );
};