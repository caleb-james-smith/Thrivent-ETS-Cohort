import type { TicketCardProps } from "../../Types";

export function TicketCard({ ticket }: TicketCardProps) {
    return (
        <div className="ticket-card">
            <h3>Ticket #{ticket.id}: {ticket.title}</h3>
            <p>{ticket.description}</p>
        </div>
    );
}
