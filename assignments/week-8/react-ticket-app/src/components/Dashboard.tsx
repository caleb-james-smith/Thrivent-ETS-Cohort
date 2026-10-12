import { useState } from "react";
import { serverURL } from "../Parameters";
import type { Ticket } from "../Types";
import { TicketList } from "./ticket/TicketList";

export function Dashboard() {
    const [tickets, setTickets] = useState<Ticket[]>([]);

    async function loadAllTickets(): Promise<void> {
        try {
            const response = await fetch(`${serverURL}/tickets/all`);
            if (!response.ok) {
                throw new Error("Failed to load all tickets.");
            }
            const data: Ticket[] = await response.json();
            setTickets(data);
        } catch (error) {
            console.error(error);
        }
    }

    function resetTickets() {
        setTickets([]);
    }

    return (
        <>
            <header className="header">
                <div>
                    <h1>Repair Ticket Tracker</h1>
                    <p>
                        Welcome to this repair ticket tracker app! We're glad
                        you're here.
                    </p>
                </div>
            </header>
            <section>
                <div className="menu">
                    <button onClick={loadAllTickets}>Load Tickets</button>
                    <button onClick={resetTickets}>Reset Tickets</button>
                </div>
                <TicketList tickets={tickets} />
            </section>
        </>
    );
}
