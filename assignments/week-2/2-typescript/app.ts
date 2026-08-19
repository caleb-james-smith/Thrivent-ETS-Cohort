interface ticket {
    id: number;
    title: string;
    description: string;
    priority: number;
    status: string;
    createdBy: string;
    assignedTo: string;
    tags: string;
};

function runApp() {
    const tickets: ticket[] = createTickets();
    printHeader();
    printTickets(tickets);
}

function createTickets(): ticket[] {
    const ticket_1 = {
        id: 1,
        title: "macOS not powering on",
        description: "My macOS will not power on. The battery may be out of charge.",
        priority: 3,
        status: "Resolved",
        createdBy: "Steven",
        assignedTo: "Caleb",
        tags: "Tags?",
    };
    const ticket_2 = {
        id: 2,
        title: "Vim white background issue",
        description: "In a dark mode terminal, I am trying to use the delek colorscheme. However, this changes the background to white, which I don't want.",
        priority: 1,
        status: "Not Done",
        createdBy: "Steven",
        assignedTo: "Caleb",
        tags: "Tags?",
    };
    const ticket_3 = {
        id: 3,
        title: "VS Code TS syntax highlighting not working",
        description: "In VS Code, TypeScript syntax highlighting is not working. For example, TS compiler errors are not showing up.",
        priority: 2,
        status: "Not Done",
        createdBy: "Steven",
        assignedTo: "Caleb",
        tags: "Tags?",
    };
    const tickets: ticket[] = [ticket_1, ticket_2, ticket_3];
    return tickets;
}

function printHeader(): void {
    console.log("----------------------");
    console.log("| Support Ticket App |");
    console.log("----------------------");
}

function printTickets(tickets: ticket[]): void {
    console.log("Tickets:");
    for (const ticket of tickets) {
        console.log(` - ${ticket.title}`);
    }
    console.log(`Number of tickets: ${tickets.length}`);
}

runApp();
