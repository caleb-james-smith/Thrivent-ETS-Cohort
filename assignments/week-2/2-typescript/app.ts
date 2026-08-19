interface SupportTicket {
    id: number;
    title: string;
    description: string;
    priority: number;
    status: string;
    createdBy: string;
    assignedTo: string;
    tags: string;
};

function runApp(): void {
    const supportTickets: SupportTicket[] = createSupportTickets();
    printHeader();
    printSupportTickets(supportTickets);
    printSupportTicketSummaries(supportTickets);
}

function createSupportTickets(): SupportTicket[] {
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
        status: "Unresolved",
        createdBy: "Steven",
        assignedTo: "Caleb",
        tags: "Tags?",
    };
    const ticket_3 = {
        id: 3,
        title: "VS Code TS syntax highlighting not working",
        description: "In VS Code, TypeScript syntax highlighting is not working. For example, TS compiler errors are not showing up.",
        priority: 2,
        status: "Unresolved",
        createdBy: "Steven",
        assignedTo: "Caleb",
        tags: "Tags?",
    };
    const supportTickets: SupportTicket[] = [ticket_1, ticket_2, ticket_3];
    return supportTickets;
}

function printHeader(): void {
    console.log("----------------------");
    console.log("| Support Ticket App |");
    console.log("----------------------");
}

function printSupportTickets(supportTickets: SupportTicket[]): void {
    console.log();
    console.log("Support Tickets:");
    for (const ticket of supportTickets) {
        console.log(` - ${ticket.title}`);
    }
    
    console.log();
    console.log(`Number of support tickets: ${supportTickets.length}`);
    console.log();
}

function printSupportTicketSummaries(supportTickets: SupportTicket[]): void {
    for (const ticket of supportTickets) {
        console.log(`${ticket.title}:`);
        console.log(` - id: ${ticket.id}`);
        console.log(` - description: ${ticket.description}`);
        console.log(` - priority: ${ticket.priority}`);
        console.log(` - status: ${ticket.status}`);
        console.log(` - createdBy: ${ticket.createdBy}`);
        console.log(` - assignedTo: ${ticket.assignedTo}`);
        console.log(` - tags: ${ticket.tags}`);
        console.log();
    }
}

runApp();
