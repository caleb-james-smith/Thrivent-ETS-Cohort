export interface Ticket {
    id: number;
    title: string;
    description: string;
}

export interface TicketListProps {
    tickets: Ticket[];
}

export interface TicketCardProps {
    ticket: Ticket;
}
