interface User {
    id: number;
    name: string;
}

interface Customer extends User {}

interface Agent extends User {}

type Priority = "low" | "medium" | "high";
type Status = "open" | "in_progress" | "resolved";

interface SupportTicket {
    id: number;
    title: string;
    description: string;
    priority: Priority;
    status: Status;
    createdBy: Customer;
    assignedTo: Agent;
    tags: string[];
};

function runApp(): void {
    const supportTickets: SupportTicket[] = createSupportTickets();
    printHeader();
    printSupportTickets(supportTickets);
    printSupportTicketSummaries(supportTickets);
}

function createSupportTickets(): SupportTicket[] {
    const ticket_1: SupportTicket = {
        id: 1,
        title: "MacBook not powering on",
        description: "My MacBook will not power on. The battery may be out of charge.",
        priority: "high",
        status: "resolved",
        createdBy: {id: 1, name: "Katie"},
        assignedTo: {id: 2, name: "Calvin"},
        tags: ["MacBook", "power"],
    };

    const ticket_2: SupportTicket = {
        id: 2,
        title: "Vim white background issue",
        description: "In a dark mode terminal, I am trying to use the delek colorscheme. However, this changes the background to white, which I don't want.",
        priority: "low",
        status: "open",
        createdBy: {id: 1, name: "Jimmy"},
        assignedTo: {id: 2, name: "Caleb"},
        tags: ["Vim", "terminal", "background"],
    };

    const ticket_3: SupportTicket = {
        id: 3,
        title: "VS Code TS syntax highlighting not working",
        description: "In VS Code, TypeScript syntax highlighting is not working. For example, TS compiler errors are not showing up.",
        priority: "medium",
        status: "in_progress",
        createdBy: {id: 1, name: "Owen"},
        assignedTo: {id: 2, name: "Steven"},
        tags: ["VS Code", "TS", "TypeScript", "syntax"],
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
        console.log(` - createdBy: ${ticket.createdBy.name}`);
        console.log(` - assignedTo: ${ticket.assignedTo.name}`);
        console.log(` - tags: ${ticket.tags.join(", ")}`);
        console.log();
    }
}

runApp();
