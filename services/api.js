import axios from 'axios';

export const api  = axios.create({
    baseURL: 'https://xkzswbysbenfhjdrolmb.supabase.co/rest/v1',
    headers: {
        apikey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhrenN3YnlzYmVuZmhqZHJvbG1iIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzE3MjYzOTEsImV4cCI6MjA0NzMwMjM5MX0.AAoo2u0SPDraWVfAE4jvPLXuoz5Ke1hIbn6lFj8IBD4",
        authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhrenN3YnlzYmVuZmhqZHJvbG1iIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzE3MjYzOTEsImV4cCI6MjA0NzMwMjM5MX0.AAoo2u0SPDraWVfAE4jvPLXuoz5Ke1hIbn6lFj8IBD4"
    }
});