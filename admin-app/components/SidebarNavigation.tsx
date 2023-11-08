import { Sidebar } from "flowbite-react";
import { usePathname } from "next/navigation";
import { FC, SVGProps } from "react";
import { HiChartPie, HiUser, HiMenu } from "react-icons/hi";

export default function SidebarNavigation() {
  const currentPath = usePathname();

  const renderLink = (
    name: string,
    path: string,
    icon?: FC<SVGProps<SVGSVGElement>>
  ) => {
    return (
      <Sidebar.Item
        href={path}
        active={currentPath.startsWith(path)}
        icon={icon}
      >
        {name}
      </Sidebar.Item>
    );
  };

  return (
    <Sidebar aria-label="Sidebar with multi-level dropdown example">
      <Sidebar.Items>
        <Sidebar.ItemGroup>
          {renderLink("控制台", "/dashboard", HiChartPie)}
          <Sidebar.Collapse
            icon={HiUser}
            label="访问控制"
            open={currentPath.startsWith("/rbac")}
          >
            {renderLink("用户", "/rbac/users")}
            {renderLink("角色", "/rbac/roles")}
            {renderLink("权限", "/rbac/permissions")}
          </Sidebar.Collapse>
        </Sidebar.ItemGroup>
        <Sidebar.ItemGroup>
          {renderLink("系统设置", "/settings", HiMenu)}
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>
  );
}
