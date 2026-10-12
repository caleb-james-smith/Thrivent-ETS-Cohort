import type { TicketListProps } from "../../Types";
import { TicketCard } from "./TicketCard";

// TODO: Render number of tickets

export function TicketList({ tickets }: TicketListProps) {
    function renderTicketList() {
        if (tickets.length > 0) {
            // Return an array of ticket cards
            return tickets.map((ticket) => (
                <TicketCard key={ticket.id} ticket={ticket} />
            ));
        } else {
            return <p>No tickets found.</p>;
        }
    }
    return <div className="ticket-list">{renderTicketList()}</div>;
}
