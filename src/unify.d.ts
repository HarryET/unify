declare module '@unify/types' {
    type Project = {
        id: string;
        name: string;
        path: string;
    };

    type Settings = {
        projects: Project[];
        channel: string;
    };
}
