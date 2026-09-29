package tickets;

public class Ticket {
    private int id;
    private String title;
    private String description;

    private TicketCategory category;
    private TicketStatus status;
    private TicketPriority priority;

    private Requester requester;
    private Technician technician;

    public Ticket(int id, String title, String description, TicketCategory category, Requester requester) {
        // Validation
        if (id < 1) {
            throw new IllegalArgumentException("Ticket id must be greater than zero; provided id = " + id);
        }

        if (title == null || title.isBlank()) {
            throw new IllegalArgumentException("Ticket title cannot be empty");
        }
        
        if (description == null || description.isBlank()) {
            throw new IllegalArgumentException("Ticket description cannot be empty");
        }
        
        if (requester == null) {
            throw new IllegalArgumentException("Ticket requester cannot be null");
        }

        // System.out.println("Made it past conditions, about to do attribute assignments, Ticket id = " + id);

        this.id = id;
        this.title = title;
        this.description = description;
        this.category = category;
        this.status = TicketStatus.TODO;
        this.priority = null;
        this.requester = requester;
        this.technician = null;

        System.out.println("Created ticket with id = " + id);
    }

    public int getId() {
        return id;
    }

    public String getTitle() {
        return title;
    }

    public String getDescription() {
        return description;
    }

    public TicketCategory getCategory() {
        return category;
    }

    public TicketStatus getStatus() {
        return status;
    }

    public TicketPriority getPriority() {
        return priority;
    }

    public Requester getRequester() {
        return requester;
    }

    public Technician getTechnician() {
        return technician;
    }

    public void setStatus(TicketStatus status) {
        this.status = status;
    }

    public void setPriority(TicketPriority priority) {
        this.priority = priority;
    }

    public void setTechnician(Technician technician) {
        this.technician = technician;
    }

    public boolean isClosed() {
        return status == TicketStatus.DONE;
    }

    public void printLessInfo() {
        System.out.print("Ticket #" + id + ": ");
        if (isClosed()) {
            System.out.print("CLOSED");
        } else {
            System.out.print("OPEN");
        }
        System.out.print(" | ");
        System.out.print(status);
        System.out.print(" | ");
        System.out.print(title);
        System.out.println();
    }

    public void printMoreInfo() {
        // Default info
        String statusInfo = "OPEN";
        String priorityInfo = "Unassigned";
        String requesterInfo = "Unassigned";
        String technicianInfo = "Unassigned";
        
        if (isClosed()) {
            statusInfo = "CLOSED";
        }
        
        statusInfo += " | " + status;

        // Confirm not null before updating info
        
        if (priority != null) {
            priorityInfo = priority.toString();
        }

        if (requester != null) {
            requesterInfo = requester.getFullName();
        }
        
        if (technician != null) {
            technicianInfo = technician.getFullName();
        }

        System.out.println("Ticket #" + id);
        System.out.println(" - Title: " + title);
        System.out.println(" - Description: " + description);
        System.out.println(" - Category: " + category);
        System.out.println(" - Status: " + statusInfo);
        System.out.println(" - Priority: " + priorityInfo);
        System.out.println(" - Requester: " + requesterInfo);
        System.out.println(" - Technician: " + technicianInfo);
    }
}
