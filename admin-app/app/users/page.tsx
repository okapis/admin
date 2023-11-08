import { NextPage } from "next";

interface User {
    id: string,
    username: string,
}

interface UsersPageProps {
    users: User[];
}

export async function GetServerSideProps<UsersPageProps>(context: UsersPageProps) {
    const res = await fetch(`http://localhost:4000/users`);
    const user = await res.json();
    console.log('~~~~~', user);

    return {
        props: {
            user,
        },
    };
}

const UsersPage: NextPage<UsersPageProps> = ({ users }) => {
    return (
        <div>
            <h1>Users</h1>
            <a href="/users/1">User 1{`${users}`}</a>
        </div>
    )
}

export default UsersPage;
