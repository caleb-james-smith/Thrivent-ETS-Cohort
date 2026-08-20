// Support Ticket Console App

// Type aliases
type Priority = "low" | "medium" | "high";
type Status = "open" | "in_progress" | "resolved";
type Subscription = "none" | "free" | "paid";

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
};

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
    const supportTickets: SupportTicket[] = createSupportTickets();
    printHeader();
    printSupportTickets(supportTickets);
    printSupportTicketSummaries(supportTickets);
}

function createSupportTickets(): SupportTicket[] {
    const ticket_1: SupportTicket = {
        id: 1001,
        title: "MacBook not powering on",
        description: "My MacBook will not power on. The battery may be out of charge.",
        priority: "high",
        status: "resolved",
        createdBy: katie,
        assignedTo: calvin,
        tags: ["MacBook", "power"],
    };

    const ticket_2: SupportTicket = {
        id: 1002,
        title: "Vim white background issue",
        description: "In a dark mode terminal, I am trying to use the delek colorscheme. However, this changes the background to white, which I don't want.",
        priority: "low",
        status: "open",
        createdBy: jimmy,
        assignedTo: caleb,
        tags: ["Vim", "terminal", "background"],
    };

    const ticket_3: SupportTicket = {
        id: 1003,
        title: "VS Code TS syntax highlighting not working",
        description: "In VS Code, TypeScript syntax highlighting is not working. For example, TS compiler errors are not showing up.",
        priority: "medium",
        status: "in_progress",
        createdBy: sam,
        assignedTo: steven,
        tags: ["VS Code", "TS", "TypeScript", "syntax"],
    };

    const ticket_4: SupportTicket = {
        id: 1004,
        title: "External monitor not working",
        description: "I connected an external monitor to my MacBook. However, it is not displaying anything.",
        priority: "high",
        status: "open",
        createdBy: jimmy,
        assignedTo: "nobody",
        tags: ["monitor", "MacBook"],
    };

    const supportTickets: SupportTicket[] = [ticket_1, ticket_2, ticket_3, ticket_4];

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
