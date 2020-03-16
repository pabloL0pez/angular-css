export interface NavItem {
    text: string;
    icon: string;
}

export interface Comment {
    postId: number;
    id: number;
    name: string;
    email: string;
    body: string;
}

export interface GridItem {
    text: string;
    imageUrl: string;
    rows: number;
    columns: number;
}