# TaxRecordApp

A full-stack web application for managing tax records, built with ASP.NET Core and Angular.

## Features

*   Create, read, update, and delete tax records.
*   View a list of all tax records.
*   View the details of a single tax record.
*   Responsive user interface.

## Technologies Used

*   **Backend:**
    *   ASP.NET Core
    *   Entity Framework Core
    *   In-Memory Database
*   **Frontend:**
    *   Angular
    *   TypeScript

## Getting Started

### Prerequisites

*   [.NET 8 SDK](https://dotnet.microsoft.com/download/dotnet/8.0)
*   [Node.js and npm](https://nodejs.org/en/)

### Installation and Running

1.  **Clone the repository:**
    ```bash
    git clone <repository-url>
    cd TaxRecordApp
    ```

2.  **Run the backend:**
    Navigate to the `TaxRecordApp.Server` directory and run the application:
    ```bash
    cd TaxRecordApp.Server
    dotnet watch run
    ```
    The API will be running at `https://localhost:7134` (or a similar port).

3.  **Run the frontend:**
    In a separate terminal, navigate to the `taxrecordapp.client` directory, install the dependencies, and start the development server:
    ```bash
    cd taxrecordapp.client
    npm install
    npm start
    ```
    The Angular application will be running at `http://localhost:53150`.
