// Support Ticket Console App

// Type aliases
type Priority = "low" | "medium" | "high";
type Status = "open" | "in_progress" | "resolved";
type Subscription = "none" | "free" | "paid";
type Ticket = SupportTicket | EscalatedSupportTicket;

interface User {
    id: string | number;
    name: string;
    email: string;
}

interface Customer extends User {
    subscription: Subscription;
}

interface Agent extends User {
    admin: boolean;
}

interface SupportTicket {
    id: number;
    title: string;
    description: string;
    priority: Priority;
    status: Status;
    createdBy: Customer | Agent;
    assignedTo: Customer | Agent | "nobody";
    tags: string[];
}

interface EscalatedSupportTicket extends SupportTicket {
    escalatedBy: Agent;
    escalationReason: string;
    escalatedAt: Date;
}

// Users

const jimmy: Customer = {
    id: 101,
    name: "Jimmy",
    email: "jimmy@gmail.com",
    subscription: "none"
};

const katie: Customer = {
    id: 102,
    name: "Katie",
    email: "katie@gmail.com",
    subscription: "free"
};

const sam: Customer = {
    id: 103,
    name: "Sam",
    email: "sam@gmail.com",
    subscription: "paid"
};

const steven: Agent = {
    id: 501,
    name: "Steven",
    email: "steven@support.com",
    admin: true
};

const caleb: Agent = {
    id: 502,
    name: "Caleb",
    email: "caleb@support.com",
    admin: false
};

const calvin: Agent = {
    id: 503,
    name: "Calvin",
    email: "calvin@support.com",
    admin: false
};

function runApp(): void {
    const tickets: Ticket[] = createTickets();
    printHeader();
    printTickets(tickets);
    printTicketSummaries(tickets);
}

function createTickets(): Ticket[] {
    const ticket_1: SupportTicket = {
        id: 1001,
        title: "MacBook not powering on",
        description: "My MacBook will not power on. The battery may be out of charge.",
        priority: "high",
        status: "resolved",
        createdBy: katie,
        assignedTo: calvin,
        tags: ["MacBook", "power"]
    };

    const ticket_2: SupportTicket = {
        id: 1002,
        title: "Vim white background issue",
        description: "In a dark mode terminal, I am trying to use the delek colorscheme. However, this changes the background to white, which I don't want.",
        priority: "low",
        status: "open",
        createdBy: jimmy,
        assignedTo: caleb,
        tags: ["Vim", "terminal", "background"]
    };

    const ticket_3: SupportTicket = {
        id: 1003,
        title: "VS Code TS syntax highlighting not working",
        description: "In VS Code, TypeScript syntax highlighting is not working. For example, TS compiler errors are not showing up.",
        priority: "medium",
        status: "in_progress",
        createdBy: sam,
        assignedTo: steven,
        tags: ["VS Code", "TS", "TypeScript", "syntax"]
    };

    const ticket_4: EscalatedSupportTicket = {
        id: 1004,
        title: "External monitor not working",
        description: "I connected an external monitor to my MacBook. However, it is not displaying anything.",
        priority: "high",
        status: "open",
        createdBy: jimmy,
        assignedTo: "nobody",
        tags: ["monitor", "MacBook"],
        escalatedBy: steven,
        escalationReason: "This is high priority, but nobody has been assigned.",
        escalatedAt: new Date("2026-08-18T08:15:00")
    };

    const tickets: Ticket[] = [ticket_1, ticket_2, ticket_3, ticket_4];

    return tickets;
}

function printHeader(): void {
    console.log("----------------------");
    console.log("| Support Ticket App |");
    console.log("----------------------");
}

function printTickets(tickets: Ticket[]): void {
    console.log();
    console.log("Tickets:");
    for (const ticket of tickets) {
        console.log(` - Ticket ${ticket.id}: ${ticket.title}`);
    }
    
    console.log();
    console.log(`Number of tickets: ${tickets.length}`);
    console.log();
}

function printTicketSummaries(tickets: Ticket[]): void {
    for (const ticket of tickets) {
        console.log(`Ticket ${ticket.id}:`);
        console.log(` - title: ${ticket.title}`);
        console.log(` - description: ${ticket.description}`);
        console.log(` - priority: ${ticket.priority}`);
        console.log(` - status: ${ticket.status}`);
        console.log(` - createdBy: ${ticket.createdBy.name}`);
        if (typeof ticket.assignedTo === "object") {
            console.log(` - assignedTo: ${ticket.assignedTo.name}`);
        } else {
            console.log(` - assignedTo: ${ticket.assignedTo}`);
        }
        console.log(` - tags: ${ticket.tags.join(", ")}`);
        console.log();
    }
}

runApp();
